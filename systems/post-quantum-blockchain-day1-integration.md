---
title: 抗量子签名 day-1 集成的经济学（FIPS 205 SLH-DSA on Arc）
aliases: [post-quantum blockchain, SLH-DSA-SHA2-128s, FIPS 205, Arc PQ signature]
domain: systems
kind: knowledge
topic: post-quantum-blockchain-day1-integration
created: 2026-05-13
last_updated: 2026-05-13
last_tended: 2026-05-13
review_by: 2026-11-13
confidence: likely
tags: [systems, blockchain, post-quantum, cryptography, FIPS-205]
status: candidate
sources: []
---

# 抗量子签名 day-1 集成的经济学

> [!info] TL;DR
> Circle Arc **自主网 day-1 即集成 SLH-DSA-SHA2-128s 抗量子签名**（FIPS 205 标准）,通过 stateful precompile 向智能合约暴露。Gas economics 测算:230K base gas + 7,856 字节签名 → 单次 verify 约 380K 总 gas,**主导成本为 calldata 而非计算**。这是稳定币与机构链的"未来 10 年保险"。

**NIST 后量子签名标准化进程**：

- **FIPS 203**:ML-KEM（密钥封装机制,CRYSTALS-Kyber 升级）
- **FIPS 204**:ML-DSA（数字签名算法,CRYSTALS-Dilithium 升级）
- **FIPS 205**:SLH-DSA（Stateless Hash-Based Signatures,SPHINCS+ 升级）← Arc 的选择

**SLH-DSA-SHA2-128s 与替代方案对比**：

| 方案 | 签名大小 | 速度 | 安全性假设 | Arc 选择理由 |
|---|---|---|---|---|
| ML-DSA-44 | 约 2.4 KB | 中等 | 格基（lattice）| 签名较小,但格假设相对较新 |
| SLH-DSA-SHA2-128s | **7.8 KB** | **慢但稳定** | **仅依赖哈希函数** | ✅ 保守、最成熟、抗量子学术界共识 |
| FALCON | 约 666 B | 快 | 格 + 浮点 | 浮点签名易于实现错误 |

**Arc 实装细节**：

- Precompile 地址与 gas schedule 见代码（`crates/precompiles/src/pq.rs:42-83`）
- 通过 Zero6 hardfork gate 控制（可选 precompile,避免未来强制硬分叉）
- 与传统 ECDSA / ED25519 共存（不替代,仅扩展）

**经济学含义**：

- 230K + calldata gas → 在 L1 主网仍可负担（远小于 SNARK verify 的 500K-1M gas）
- 主导成本为 calldata（7,856 字节）→ EIP-4844 blob 之后将显著降低
- 商业用例:机构托管签名、validator 签名、长期未来证明的合约签名

**通用模式**：

- 稳定币与机构链 day-1 集成抗量子签名 = **品牌信号 + 政府客户友好 + 长期保险**
- 通用链（Base / Ethereum）按需添加,不具紧迫性
- 完全去中心化链（Bitcoin）反而最难升级,量子风险最高

**时间轴**：

- 2024 年 NIST 标准化完成（FIPS 203 / 204 / 205）
- 2026 年 Arc 主网 day-1 集成
- 2027-2030 年其他链跟进
- 约 2030 年之后量子计算威胁达到关键阈值（Grover / Shor 算法实际化）

**市场结构含义**：抗量子签名 day-1 集成是 Arc 在"合规 + 长期保险"维度上相对其他稳定币链（USDC on Ethereum / Tempo / Plasma）的差异化优势。短期内市场关注度有限,但 2030 年之后将成为机构选链的标准之一。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化]]
<!-- /wiki-links:managed -->
