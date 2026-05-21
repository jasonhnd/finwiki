---
title: Fork and Rebrand 项目的五层审计框架
aliases: [fork and rebrand audit, 5-layer audit framework, code provenance audit, smart contract fork security]
domain: security
kind: framework
topic: fork-and-rebrand-5-layer-audit-framework
created: 2026-05-20
last_updated: 2026-05-20
last_tended: 2026-05-20
review_by: 2026-11-20
confidence: certain
tags: [security, audit, smart-contract, forensic, open-source]
status: candidate
sources: []
---

# Fork and Rebrand 项目的五层审计框架


## Wiki route

This entry sits under [[security/bytecode-forensic-three-tier-verify|智能合约 bytecode forensic — 三层 verify 技术]]. Read it against [[systems/INDEX|systems index]] for peer / contrast context and [[INDEX|FinWiki index]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 当项目方通过复制（Fork）知名开源协议（如 Uniswap、Compound、GMX）并重新包装品牌（Rebrand）上线时，传统的单体代码审计会产生大量盲区。**五层审计框架（5-Layer Audit Framework）** 是专门针对此类项目设计的系统化安全与溯源审计方法，涵盖从代码差异、已知漏洞遗传、编译指纹、团队关联到合规风险的全方位排查。

## 核心机制

Fork-and-Rebrand 审计的核心思想是：**“重点不在于未改变的代码，而在于改变了什么、遗传了什么，以及隐藏了什么。”**

```
Layer 5: 合规与许可证审计 (License & Copyleft Verification)
  └── Layer 4: 团队与部署溯源 (Team & Deployer Provenance)
        └── Layer 3: 编译指纹与字节码比对 (Compilation Fingerprint & Diff)
              └── Layer 2: 历史漏洞与修补遗传 (Inherited Vulnerability Scan)
                    └── Layer 1: 代码库上游比对 (Upstream Source Diff)
```

---

### Layer 1: 代码库上游比对 (Upstream Source Diff)
- **目标**：精确识别分叉代码与原版代码的每一行差异。
- **手段**：
  - 使用 `git merge-base` 定位分叉的精确 Commit 节点。
  - 剥离纯命名替换（如将 `UniswapV3` 批量替换为 `BrandSwap`）后的逻辑差异比对。
  - **红线**：修改了核心数学库（如 Math/SafeMath）、权限控制修饰符（Modifiers）或状态转移逻辑。

### Layer 2: 历史漏洞与修补遗传 (Inherited Vulnerability Scan)
- **目标**：验证原版协议在分叉后被披露的已知漏洞是否在本项目中得到修补。
- **手段**：
  - 检索上游协议自分叉 Commit 以来的所有漏洞披露、审计报告及 GitHub Security Advisories。
  - 定向检查本项目中对应的漏洞代码片段。
  - **典型失败案例**：许多 Compound V2 Fork 项目在 2023-2024 年依然遗传了原版已被修复的只读预言机操纵（Read-only Oracle Manipulation）漏洞。

### Layer 3: 编译指纹与字节码比对 (Compilation Fingerprint & Diff)
- **目标**：利用 [[security/bytecode-forensic-three-tier-verify|三层 verify 技术]]，验证链上实际部署的 Bytecode 是否与项目方声称的开源代码完全一致。
- **手段**：
  - 剥离 Metadata Hash（Swarm/IPFS 编译指纹）后，比对 Runtime Bytecode 的相似度。
  - 验证编译器版本（solc version）和 EVM target 版本的兼容性差异（如在不支持 PUSH0 的链上强行部署 Solidity 0.8.20 以上版本导致的 opcode 异常）。

### Layer 4: 团队与部署溯源 (Team & Deployer Provenance)
- **目标**：识别项目幕后开发团队的真实学术/安全背景或历史污点。
- **手段**：
  - 提取部署者地址（Deployer Address）的资金来源链（利用 [[security/forensic-identity-anchor-chain|司法级身份锚定链]]）。
  - 利用 [[security/wayback-machine-as-forensic-tool|Wayback Machine]] 留存的历史网页、早期 GitHub 提交记录中的提交者邮箱及 PGP 签名，定位团队前科。
  - 跨链匹配相似度极高的未 verify 合约字节码（Twin Fingerprint Mapping）。

### Layer 5: 合规与许可证审计 (License & Copyleft Verification)
- **目标**：审计原版协议的开源许可证限制（如 Business Source License, BSL 1.1），防止因侵权导致项目面临法律叫停或流动性查封风险。
- **手段**：
  - 检查 BSL 限制期（如 Uniswap V3 的 2 年 BSL 期）是否过期。
  - 检查 GPL Copyleft 传染性：如果原版是 GPL，本项目是否按要求开源了全部修改后的代码。

---

## 适用场景

- **DeFi 乐高集成商**：在集成某新型借贷/DEX 协议前，评估其是否为劣质 Fork。
- **安全审计机构**：为项目方提供针对性的分叉安全合规报告。
- **司法与追赃取证**：在发生黑客攻击后，判断受害项目是否因遗传上游已知漏洞导致被盗，并厘清责任归属。

## 相关限制与边界

- **零知识/非 EVM 链**：在 Solana、Aptos 等非 EVM 链上，字节码比对和指纹提取需要完全不同的工具链（如 Anchor build 验证）。
- **混淆编译器**：如果项目方使用了专有的混淆技术或修改了 solc 编译器，Layer 3 的相似度匹配效果将大幅下降。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[security/bytecode-forensic-three-tier-verify|智能合约 bytecode forensic — 三层 verify 技术]]
- [[security/forensic-identity-anchor-chain|司法级身份锚定链 —— 混合物理-链上归因]]
- [[security/wayback-machine-as-forensic-tool|Wayback Machine 作为司法取证工具的标准规程]]
- [[security/module-path-confusion-supply-chain-attack.md|模块路径混淆供应链攻击 —— 精准投毒机制]]
<!-- /wiki-links:managed -->
