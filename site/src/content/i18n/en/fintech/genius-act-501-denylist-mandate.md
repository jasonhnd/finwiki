---
source: fintech/genius-act-501-denylist-mandate
source_hash: 22b16508f124ab05
lang: en
status: machine
fidelity: ok
title: "GENIUS Act §501  Chain-Level Denylist Mandate"
translated_at: 2026-05-31T06:16:15.734Z
---

# GENIUS Act §501  Chain-Level Denylist Mandate


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> US GENIUS Act §501 (**signed into law by the President on 2025-07-18**; passed Senate 2025-06-17, passed House 2025-07-17) explicitly requires compliant stablecoin issuers to have the capability to **block addresses at the chain level** (chain-level Denylist). This provision paradoxically explains the fundamental reason why [[fintech/circle-usdc-stablecoin|Circle]] is compelled to build its own L1 (Arc): **only a proprietary chain can simultaneously control the token layer and the consensus layer, enabling end-to-end compliance enforcement**. The chain-level Denylist has been elevated from a "commercial compromise" to an "explicit legal requirement."

**Core requirements of the provision**:

- Compliant stablecoin issuers must have the capability to execute **freeze / burn / blacklist** against specific addresses
- The implementation path on general-purpose EVM chains: issuers add the corresponding permission to the token contract (e.g. USDC's `blacklisted` mapping)
- However, issuers **cannot control the chain itself** (Ethereum / Solana / each L2 's sequencer operates autonomously), so the latent risk of a censorship-resistant fork remains
- Proprietary L1  = simultaneous control of token layer, consensus layer, and sequencer → **end-to-end enforcement**

**Arc's implementation**:

- Chain-level Denylist precompile (one of 5  stateful precompiles)
- PermissionedValidatorManager three-tier architecture
- AWS Nitro Enclaves Remote Signer
- KYB-only StableFX

**General pattern**: "**Building a proprietary compliance chain**" is a **structural choice** for stablecoin issuers after the GENIUS Act's passage, not a commercial preference:

- Circle Arc (USDC): Active lobbying during GENIUS Act drafting + proprietary L1  construction
- Stripe Tempo (Bridge stablecoin): OCC trust bank charter + Tempo validator diversification
- Tether future path: Compliant versions such as USAT (Anchorage) + proprietary USDT0  / Plasma / Stable chain (speculative)

**Counterexamples / exceptions**:

- Algorithmic stablecoins (explicitly prohibited by GENIUS Act) → directly eliminated
- Fully decentralised stablecoins (DAI etc.) → Denylist cannot be executed; market share constrained
- Grey stablecoins (USDT on Tron) → do not enter US market; circumvent the Act

**Geopolitical implications**: The Act creates a structural opposition between the US stablecoin camp (USDC / USD1  / PYUSD) and non-US stablecoins (USDT grey route / sovereign stablecoins of various countries / algorithmic stablecoins). See [[stablecoin-chain-sovereign-currency-divide]] for details.

**Parallel relationship with Japan legislation**: The corresponding provision in Japan's Payment Services Act (第 1 号 electronic payment instruments) also requires issuers to have similar capabilities (trust type / bank type / funds transfer service provider type; see [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ]]). The GENIUS Act and Japanese legislation belong to a **parallel legislative trend**, not an isolated phenomenon.

**Precedents and cross-border extension**: Practical precedents for chain-level freezes have already occurred across multiple USDC / USDT chains; see [[fintech/chain-level-ofac-freeze-precedent|チェーンレベル OFAC freeze 先例]]. Combined with the BTS protocol layer deployed on the VASP side via [[fintech/fatf-travel-rule-overview|FATF Travel Rule]], this constitutes an "information layer + asset layer" dual compliance stack. For the global VASP regulatory comparison matrix, see [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]].


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融 vs 暗号ネイティブ分流]]
- [[fintech/circle-usdc-stablecoin|Circle USDC · §501 ホワイト圏リーダー]]
- [[fintech/eu-mica-implementation-status-2026|EU MiCA 実装状況 · §501 対応物]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-26): pinned 2025-07-18 signing date inline (replacing vague "2025 年"); added Senate/House passage dates; added Circle USDC and MiCA implementation cross-links.
