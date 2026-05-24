---
type: wiki
kind: pattern
slug: module-path-confusion-supply-chain-attack
domain: security
title: "Module path confusion + LICENSE strip = supply chain attack 三连击"
aliases: []
status: candidate
confidence: possible
evidence_count: 2
challenges: 0
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-05-12
review_by: 2026-11-08
related:
  - "[[fork-and-rebrand-5-layer-audit-framework]]"
  - "[[forensic-identity-anchor-chain]]"
tags: [security/supply-chain, security/dependency, security/dd]
sources:
  - "https://go.dev/ref/mod"
  - "https://docs.npmjs.com/cli/v10/configuring-npm/package-json"
  - "https://securityscorecards.dev/"
---

# Module path confusion + LICENSE strip = supply chain attack 三连击

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader dependency boundary.

> [!info] TL;DR
> 三个独立动作组合 -> supply chain attack 形态: (1) go.mod / package.json 模块路径冒名 upstream (e.g. github.com/cosmos/...) (2) replace 指令把冒名路径劫持到自家 fork (3) 主仓库 LICENSE 删除 -> 任何下游用户 import "正版"路径,实际跑你的 fork. 在受监管 VASP 链路上,此类攻击面被 [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全审计认证]] 体系部分覆盖.

## 三连击拆解

### 1. Module path confusion

- Go: module github.com/cosmos/cosmos-sdk 但实际仓库 = github.com/<rebrand>/x
- npm: name @cosmos/sdk scope 不归自己
- 用户 go get github.com/cosmos/cosmos-sdk 通过 GOPROXY 拉到的可能是冒名 fork

### 2. Replace hijack

- go.mod 里 replace github.com/cosmos/cosmos-sdk => ./fork
- 上游用户引入项目时,replace 透传 -> 强制走 fork
- 与 module path 配合 -> 双层欺骗

### 3. LICENSE strip

- 主仓库不放 LICENSE 文件
- 即使 fork 自 Apache 2.0 的项目,法律上下游使用都未授权
- 这步常被忽略,但显著扩大法律 surface

## 识别 checklist

- [ ] go.mod 第一行 module path 与 GitHub URL 是否一致?
- [ ] go.mod 里有 replace 指令吗?
- [ ] 主仓库根目录有 LICENSE / LICENSE.md / LICENSE.txt 吗?
- [ ] package.json name 字段与 npm registry 实际 scope 一致吗?
- [ ] commit message 是否漏出原 fork 名 (e.g. "for <upstream-project>" 字样自首)?

## When to Use

- 项目 claim "完全自研" 但仓库结构高度疑似 fork
- 依赖此项目的下游用户做 supply chain risk audit — 重大事件如 [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] 暴露了第三方依赖侧 social-engineering / build-toolchain 攻击的真实风险
- 法务侧评估 "这家公司用了哪些 OSS / 是否授权合规"

## When NOT to Use

- 项目公开标注 "fork of X" + 保留原 LICENSE — 此为合法 fork
- 纯应用层项目无 module path 概念
- 闭源项目无法 audit (此时需其他途径) — 例如许可链 [[systems/canton-overview|Canton]] 这类需要走 governance + auditor 通道而非源码 diff

## Counterpoints

> [!question] Open questions
> - 检测到三连击后,GOPROXY 侧 / 上游 maintainer 是否有 takedown 渠道?
> - 与"诚实 fork + 完整 rebrand"如何区分? (核心: 是否保留 LICENSE + 是否公开声明 fork source)

## Provenance

- case study (vaporware audit): 高比例代码直拷自上游公链项目 · go.mod 冒名上游模块路径 · replace 劫持到本地 fork · 主仓库 LICENSE 删除 · commit message 漏出上游项目名自首
