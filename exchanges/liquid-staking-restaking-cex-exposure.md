---
title: Liquid staking + Restaking エコシステム + CEX exposure
aliases:
  - LST LRT liquid staking restaking
  - Lido EigenLayer Rocket Pool comparison
  - stETH cbETH Liquid Staking Token
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - liquid-staking
  - restaking
  - lst
  - lrt
  - defi
sources:
  - https://lido.fi/
  - https://www.eigenlayer.xyz/
status: candidate
---

## 概要

**Liquid Staking** = staked ETH を再流動化する LST (Liquid Staking Token) を発行し、staking 中も DeFi 利用を可能にする仕組み。**Restaking** = その staked ETH を更に AVS (Actively Validated Service) に再 stake し、追加の経済的セキュリティを提供する仕組み。EigenLayer が 2024 年に再 staking の標準を確立し、LRT (Liquid Restaking Token) と組み合わせて 2 段重ねのレバレッジ構造を作った。機関 + CEX が両層に exposure を増加させている。

## Liquid Staking Top プレイヤー

- **Lido** (stETH) — Ethereum LST 最大、TVL ~$30B、DAO 統治、32 ETH 以下でも staking 可能
- **Rocket Pool** (rETH) — 分散型、permissionless validator、16 ETH minimum で運営参加可能
- **Coinbase (cbETH)** — Coinbase 子会社 staking、米国 SEC 対応中、機関向け窓口
- **Binance (BETH/WBETH)** — Binance LST、一部地域制限、ペッグ機構
- **Mantle (mETH)** — Mantle L2 ecosystem、Bybit との連携
- **Lido + Rocket Pool で ETH 全 staked の ~40%** をカバー (中央集権リスク懸念の核心)

## Restaking エコシステム

- **EigenLayer** — Layr Labs 開発、2024-04 mainnet、ETH/LST 再 stake、AVS の信頼ベース提供、DA・oracle・bridge 等の AVS が稼働
- **Symbiotic** — Cyber Fund 系、multi-asset restaking、modular framework
- **Karak** — Andalusia Labs、多 chain restaking、cross-chain DSS
- **Renzo / EtherFi / Puffer** — LRT (Liquid Restaking Token) プロトコル、ezETH / weETH / pufETH 発行
- 2024-2026 LRT bubble + airdrop farming で $30B+ TVL 急成長、point system 経由のメタゲーム

## CEX 取扱状況

- **国内 (日本)**: stETH / cbETH 直接 spot 取扱なし、国内 VASP の ETH staking サービス (bitFlyer / GMO / SBI VC) は別構造 (CEX 内 staking、LST トークン発行なし)
- **海外 (米)**: Coinbase cbETH spot、Kraken (米国 staking 停止 2023-)、Binance BETH (一部地域制限)
- **規制リスク**: SEC は LST/LRT を "未登録証券" として監視、MiCA は CASP ライセンス必須で staking-as-a-service を制限的に許可

## リスク + システム的含意

- **Lido 集中度リスク**: ETH 30%+ staking が 1 プロトコル → Ethereum consensus risk、self-limit 議論継続
- **slashing 連鎖**: EigenLayer 経由 AVS 違反で base staking まで slashing、re-hypothecation の脆弱性
- **流動性破綻**: 2022-06 stETH depeg (Celsius 関連) 再発リスク、特に LRT ペッグ
- **米 SEC 訴訟**: 2023 Kraken staking 訴訟和解後の Coinbase 係属、LST/LRT は証券性論争の中心

## 関連

- [[exchanges/jp-cex-staking-lending-regulation]]
- [[exchanges/global-dex-major-five-comparison]]
- [[exchanges/amm-design-evolution]]
- [[exchanges/ve33-governance-mechanism]]
- [[exchanges/global-perp-dex-five-comparison]]
- [[exchanges/eu-mica-casp-regime-overview]]
- [[exchanges/us-crypto-licensing-multi-layer-system]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview]]
