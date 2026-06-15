---
source: fintech/three-circles-stablecoin-mra-framework
source_hash: 4164752b7da02b83
lang: ja
status: machine
fidelity: ok
title: "米 / 欧 / 日「三大円」ステーブルコイングローバルコンプライアンスアーキテクチャ"
translated_at: 2026-06-02T14:01:20.963Z
---

# 米 / 欧 / 日「三大円」ステーブルコイングローバルコンプライアンスアーキテクチャ


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] 配下に位置づける。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> **MRA（Mutual Recognition Agreement）** メカニズムを通じて、米国 GENIUS Act、EU MiCA、日本 EPI の 3 つの独立したステーブルコイン立法体系は**相互承認のコンプライアンスサークル**を形成し、約 $130B+ のステーブルコイン流通量をカバーする。**U.S.-Japan MRA は 2026-02 に署名済み、U.S.-EU MRA は 2026-Q3 に署名予定**。USDC は 3 か国でライセンスを保有。Tether は**完全にサークル外**に位置し、新興市場へ周縁化されている。

**3 つの大円**：

| サークル | 法案 | 主要ステーブルコイン | ライセンス保有発行体例 |
|---|---|---|---|
| 🇺🇸 米国 | [[fintech/genius-act-501-denylist-mandate|GENIUS Act]]（2025 可決）| USDC / PYUSD / USD1 / RLUSD | Circle / Paxos / WLF / Ripple |
| 🇪🇺 EU | [[fintech/mica-overview|MiCA]]（2024-12-30 全面施行）| EURC / EUR-stable | Circle Ireland / Société Générale Forge |
| 🇯🇵 日本 | [[fintech/japan-epi-three-types-overview|改正資金決済法]]（2023-06 → EPI 三型）| JPYC / USDC（SBI Circle）/ XJPY / DCJPY | [[payment-firms/jpyc|JPYC]] / SBI Circle Holdings / [[megabanks/mufg|三菱 UFJ 信託]] / [[payment-firms/progmat|Progmat]] |

**MRA 相互認証メカニズム**：

- 3 か国の規制機関が相互に相手のライセンス保有発行体を承認
- ライセンス保有ステーブルコインが 3 か国間で passporting を実現（例：USDC が米国でライセンス保有 → 自動的に EU および日本で流通可能）
- 準備金、KYC、AML 基準の協調（統一ではなく互換性）

**タイムライン**：

- **U.S.-Japan MRA**：**2026-02 署名済み**（USDC × JPYC 双方向）
- **U.S.-EU MRA**：**2026-Q3 署名予定**
- **U.S.-UK / U.S.-Singapore 二国間**：2027 年予定
- **G20 グローバル協調**：2027-2028 年 BIS フレームワーク

**地政学的含意**：

1. **USD のチェーン級覇権がさらに強化**：USDC は三円を通じて先進国世界をカバー、Tether の市場シェアを遥かに上回る（Tether は新興市場とグレーゾーンのみに存在）。
2. **次級陣営が選択を迫られる**：英国、スイス、シンガポール、香港等は「USD 陣営」または「その他陣営」への参加選択が必要。
3. **BRICS 陣営の反撃**：[[fintech/stablecoin-chain-sovereign-currency-divide|5 極地政学対立]] において、「グレー」および「非 USD」サークルの資本フロー方向が変化する。
4. **インド / 中国の挑戦**：[[fintech/india-anti-dollar-dpi-alliance|インド UPI / MOSIP DPI 連合]] が代替ナラティブを提供する。

**市場構造への含意**：

- クロスボーダー決済およびステーブルコインビジネスは三円いずれかの管轄でライセンス取得が必須
- 日本市場は USDC がアジアへ参入する重要な launchpad
- 日本国内のグループ会社向けコンプライアンス対応がより明確になる


## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 チェーン級 Denylist の合法化]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン地政学通貨 5 極対立]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA 匿名性の終焉]]
<!-- /wiki-links:managed -->
