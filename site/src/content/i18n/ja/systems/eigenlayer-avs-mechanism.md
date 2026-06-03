---
source: systems/eigenlayer-avs-mechanism
source_hash: 46ccc26ec18c7e47
lang: ja
status: machine
fidelity: ok
title: ""
translated_at: 2026-06-03T01:06:46.369Z
---
﻿# EigenLayer AVS メカニズム · 運営者 · スラッシング · EIGEN 仲裁

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] に属する。隣接・対照領域として [[systems/eigenlayer-overview|EigenLayer 概観 · Restaking と Ethereum 暗号経済セキュリティのリース]] を参照し、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] とあわせて読む。

## 主要事実

- AVS はスラッシング条件をカスタム定義できる。例えば「DA 不可用 → slash 5%」。^[extracted]
- 運営者 は opt-in 時に、対象 AVS の全スラッシング条件を受諾することを約束する。^[extracted]
- 複数 AVS にまたがる累計 slash 上限は 100% であり、rehypothecation リスクの境界を形成する。^[extracted]
- EIGEN token は inter-subjective dispute resolution（主観的違反の仲裁）に使われる。^[extracted]
- Strategies は LST（stETH / rETH / cbETH）をサポートしており、native ETH だけに限定されない。^[extracted]

## 仕組み / 動作

**運営者 と AVS のマッチングフロー**:
1. 運営者 が EigenLayer に登録し、自身または代理運用による ETH ステーキングを提供する。
2. AVS が EigenLayer に登録し、スラッシング条件と期待する 運営者 集合規模を公開する。
3. 運営者 が特定の AVS に opt-in し、オンチェーンで commitment を記録する。
4. AVS が運用され、運営者 は検証タスクを実行する。例として、DA データ可用性証明への署名がある。
5. 運営者 が AVS のスラッシング条件に違反すると、AVS が slash を発動し、運営者 のステーキング額が差し引かれる。

**スラッシングの種類**:
- **Objective slashing**: 暗号学的に反証可能な違反（二重署名、タイムアウト、誤ブロック署名など）。AVS コントラクトが自動執行する。
- **Inter-subjective slashing**: 主観的違反（oracle 報告値が市場価格から X% 以上乖離する場合など）。EIGEN holder の投票が必要になる。

**EigenPods メカニズム**: 運営者 の ETH は EigenPod コントラクト経由で staking rewards を受け取り、EigenLayer は EigenPod を通じて 運営者 の Ethereum L1  validator 動作を監視する。これが L1  slashing と L2  AVS slashing を関連付ける鍵となるブリッジである。

**Strategies**: native ETH 以外にも、EigenLayer は LST restaking（stETH / rETH / cbETH 等）をサポートする。これによりステーキング可能な資本プールは大幅に広がるが、同時に LST プロトコル（Lido / Rocket Pool / Coinbase）のセキュリティへの間接依存も増す（[[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャ]] 参照）。

## 起源と変遷

AVS コンセプトは EigenLayer 2021 論文の中核的な抽象である。2023-06 のローンチ時点では native ETH restaking のみをサポートし、slashing は未導入だった（コミットメント期）。2024-10 の EIGEN token ローンチで inter-subjective dispute resolution が導入された。2025 に slashing が正式起動し、EigenLayer は「コミットメントメカニズム」から「実際の経済セキュリティ市場」へ移行した。

40+ 時点の AVS ローンチ進捗としては、EigenDA（データ可用性、modular L2 向け）が最も早く、Hyperlane（クロスチェーンメッセージ検証 EigenLayerISM）2024 、AltLayer / Espresso / Lagrange が 2024-2025 に順次続く。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/eigenlayer-overview|EigenLayer Overview]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 Bootstrapping]]
- [[systems/hyperlane-ism-modular-security|Hyperlane ISM]]
<!-- /wiki-links:managed -->

## 出典

- EigenLayer docs · スラッシング spec（2025）
- Vitalik Buterin · "Don't overload Ethereum's consensus"（2024）
- EigenLayer docs — https://docs.eigenlayer.xyz/
