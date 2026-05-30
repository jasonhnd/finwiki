---
source: security/fork-and-rebrand-5-layer-audit-framework
source_hash: 1149b0aa7ce1325b
lang: zh
status: machine
fidelity: ok
title: "Fork and Rebrand 项目的五层审计框架"
translated_at: 2026-05-30T15:08:51.568Z
---

# Fork and Rebrand 项目的五层审计框架


## Wiki route

This entry sits under [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode フォレンジック — 三層 verify 技術]]. Read it against [[systems/INDEX|systems index]] for peer / contrast context and [[INDEX|FinWiki index]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 当项目方复制（Fork）著名的开源协议（Uniswap、Compound、GMX 等）并替换品牌（Rebrand）后启动服务时，传统的单体式代码审计会产生大量盲点。**五层审计框架（5-Layer Audit Framework）** 是为这类项目专门设计的体系化安全 / 起源审计手法，涵盖代码差分、已知漏洞遗传、编译指纹、团队关联性，直至合规风险。

## 核心机制

Fork-and-Rebrand 审计的核心思想是 **「重要的不是没有改变的代码，而是改了什么、遗传了什么、隐藏了什么」**。

```
Layer 5: 合规 & 许可证审计 (License & Copyleft Verification)
  └── Layer 4: 团队 & 部署者起源 (Team & Deployer Provenance)
        └── Layer 3: 编译指纹 & 字节码比较 (Compilation Fingerprint & Diff)
              └── Layer 2: 已知漏洞 & 修复遗传 (Inherited Vulnerability Scan)
                    └── Layer 1: 代码库上游比较 (Upstream Source Diff)
```

---

### Layer 1: 代码库上游比较 (Upstream Source Diff)
- **目的**：严格识别 fork 代码与原始代码逐1行的差分。
- **手法**：
  - 用 `git merge-base` 确定 fork 的准确 Commit 节点。
  - 剥离纯粹的重命名替换（例如：将 `UniswapV3` 一并替换为 `BrandSwap`）后比对逻辑差分。
  - **红线**：核心数学库（Math/SafeMath）、权限控制 Modifiers、状态转移逻辑存在改动的情况。

### Layer 2: 已知漏洞 & 修复遗传 (Inherited Vulnerability Scan)
- **目的**：验证原始协议在 fork 点之后所披露的已知漏洞，在该项目中是否已修复。
- **手法**：
  - 检索上游协议在 fork commit 之后发生的全部漏洞披露、审计报告、GitHub Security Advisories。
  - 指定该项目内的对应代码片段进行检查。
  - **典型失败例**：众多 Compound V2 Fork 项目在 2023-2024年 上遗传了原始协议已经修复的 Read-only Oracle Manipulation 漏洞。日本 VASP 一侧的同类论点参见 [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全監査認証体系]] 的强制 disclosure 要求。

### Layer 3: 编译指纹 & 字节码比较 (Compilation Fingerprint & Diff)
- **目的**：用 [[security/bytecode-forensic-three-tier-verify|三層 verify 技術]] 验证链上实际部署的 Bytecode 是否与项目方所主张的开源代码完全一致。
- **手法**：
  - 剥离 Metadata Hash（Swarm/IPFS 编译指纹）后，比对 Runtime Bytecode 的相似度。
  - 验证编译器版本（solc version）与 EVM 目标版本的兼容性差分（例如：在不支持 PUSH0的链上强行部署 Solidity 0.8.20 以上版本时的 opcode 异常）。

### Layer 4: 团队 & 部署者起源 (Team & Deployer Provenance)
- **目的**：识别项目背后开发团队在学术 / 安全领域的真实背景，及其过往前科。
- **手法**：
  - 抽取部署者地址（Deployer Address）的资金来源链（运用 [[security/forensic-identity-anchor-chain|司法級身元アンカーチェーン]]）。
  - 运用 [[security/wayback-machine-as-forensic-tool|Wayback Machine]] 所保存的过往网页、早期 GitHub 提交记录的 committer email 及 PGP 签名，确定团队的前科。
  - 跨链相似度极高的 unverify 合约的字节码照合（Twin Fingerprint Mapping）。

### Layer 5: 合规 & 许可证审计 (License & Copyleft Verification)
- **目的**：审计原始协议的开源许可证限制（Business Source License, BSL 1.1  等），防止因侵权而暴露于法律禁令或流动性冻结的风险。
- **手法**：
  - 确认 BSL 限制期间（例如：Uniswap V3的 2年 BSL 期间）是否已届满。
  - 确认 GPL Copyleft 的传染性：原始为 GPL 的情况下，该项目是否按要求公开了改动后代码的全部。

---

## 适用场景

- **DeFi 乐高聚合事业者**：在整合新型借贷 / DEX 协议之前，评估其是否为劣质 Fork。
- **安全审计机构**：向项目方提供 fork 专用型安全 / 合规报告。在监管下基础设施的场景中，也可参考 [[systems/hook-enforced-compliance|hook-enforced compliance]] 模式将检测前移至运行时。
- **司法 / 受害回收取证**：黑客攻击后，判定受害项目是否因上游已知漏洞遗传而受害，并梳理责任归属。主要事件可参见 [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] 或 [[exchanges/mtgox-bankruptcy-processing-timeline|Mt.Gox 破産処理 timeline]] 等历史范式。

## 相关约束与边界

- **零知识 / 非 EVM 链**：在 Solana、Aptos 等非 EVM 链上，字节码比较与指纹抽取需要完全不同的工具链（Anchor build 验证等）。在许可型 / privacy-preserving 型链例如 [[systems/canton-overview|Canton]] 的 DAML model 中，还需进一步进行 contract-template 级别的差分比较。
- **混淆编译器**：项目方使用自有混淆技术，或改动了 solc 编译器的情况下，Layer 3的相似度匹配效果会大幅下降。

## Sources

- Uniswap v3-core LICENSE（Layer 5 的代表例: Business Source License 1.1、Change Date 2023-04-01、Change License GPL v2.0+） — https://github.com/Uniswap/v3-core/blob/main/LICENSE
- Compound Protocol リポジトリ（最も多くフォークされる Compound V2 系コードベース、Layer 1/2 の上流比較・既知脆弱性遺伝の対象） — https://github.com/compound-finance/compound-protocol
- GitHub Advisory Database（Layer 2 が参照する GitHub Security Advisories の公式データベース） — https://github.com/advisories

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode フォレンジック — 三層 verify 技術]]
- [[security/forensic-identity-anchor-chain|司法級身元アンカーチェーン — 物理 / オンチェーン混合の帰属推定]]
- [[security/wayback-machine-as-forensic-tool|Wayback Machineを司法フォレンジック・ツールとして用いる標準手順]]
- [[security/module-path-confusion-supply-chain-attack.md|モジュールパス詐称によるサプライチェーン攻撃 — 精密投毒メカニズム]]
<!-- /wiki-links:managed -->
