---
source: security/module-path-confusion-supply-chain-attack
source_hash: 7cb8194d1583f458
lang: zh
status: machine
fidelity: ok
title: "Module path confusion + LICENSE strip = 供应链攻击的三连击"
translated_at: 2026-05-30T15:08:51.569Z
---

# Module path confusion + LICENSE strip = 供应链攻击的三连击

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader dependency boundary.

> [!info] TL;DR
> 3 个独立操作的组合即形成供应链攻击：(1) 在 go.mod / package.json 的模块路径上诈称 upstream（例如：github.com/cosmos/...）；(2) 用 replace 指令将诈称路径劫持到自有 fork；(3) 删除主仓库的 LICENSE。当下游用户 import「正规」路径时，实际执行的却是 fork。在监管下的 VASP 路径中，此种攻击面由 [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全審計認証]] 体系部分覆盖。

### 1. Module path confusion

- Go：module github.com/cosmos/cosmos-sdk，但实际仓库是 github.com/<rebrand>/x
- npm：name @cosmos/sdk，但 scope 并非本公司所有
- 用户执行 go get github.com/cosmos/cosmos-sdk 时，有可能经由 GOPROXY 取得诈称 fork

### 2. Replace hijack

- go.mod 内有 replace github.com/cosmos/cosmos-sdk => ./fork
- 上游用户引入该项目时 replace 会透传，被强制使用 fork
- 与 module path 组合便构成双重诈称

### 3. LICENSE strip

- 主仓库中不放置 LICENSE 文件
- 即使原项目是 Apache 2.0 的 fork，在法律上下游用户也属于无许可使用
- 这一步容易被忽视，却显著扩大了法律 surface

## 识别 checklist

- [ ] go.mod 第 1行行的 module path 与 GitHub URL 是否一致
- [ ] go.mod 内是否有 replace 指令
- [ ] 主仓库根目录是否有 LICENSE / LICENSE.md / LICENSE.txt
- [ ] package.json 的 name 字段是否与 npm registry 上的实际 scope 一致
- [ ] commit message 中是否混入了原 fork 名（例如："for <upstream-project>" 等自首字符串）

## When to Use

- 项目自称「完全自主开发」，但仓库结构酷似 fork 的情况
- 依赖此依赖的下游用户进行供应链风险审计的情况 — 在 [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] 这样的重大事件中，第三方依赖一侧的 social-engineering / build-toolchain 攻击的实际风险暴露无遗
- 法务一侧评估「这家公司用了哪些 OSS / 许可是否适当」的情况

## When NOT to Use

- 明示「fork of X」并保留原 LICENSE 的项目 — 属于合法 fork
- 纯粹应用层、无 module path 概念的项目
- 闭源、无法审计的项目（需经另一路径应对）— 例如许可型链的 [[systems/canton-overview|Canton]] 这类情况，需走 governance + auditor 路径而非源码差分

## Provenance

- 案例研究（vaporware audit）：代码大半直接复制自上游公链项目，在 go.mod 上诈称上游模块路径，用 replace 劫持到本地 fork，删除主仓库的 LICENSE，commit message 中泄露上游项目名而自首的案例
