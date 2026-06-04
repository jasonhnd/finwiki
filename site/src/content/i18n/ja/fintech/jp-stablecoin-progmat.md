---
source: fintech/jp-stablecoin-progmat
source_hash: 7ea5036bdc325cba
lang: ja
status: machine
fidelity: ok
title: "株式会社Progmat — デジタルアセットプラットフォーム概要"
translated_at: 2026-06-02T13:21:55.095Z
---

# 株式会社Progmat — デジタルアセットプラットフォーム概要


## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]配下に位置づけられる。隣接する文脈は[[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は[[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]とあわせて読む。

> JVCEA 非加盟 · 暗号資産交換業者ではない · デジタルアセット発行プラットフォーム提供事業者 · 設立 2023-10-02 · 東京都千代田区丸の内

## 1. 法人・株主

- **商号**: 株式会社Progmat（英文: Progmat, Inc.）
- **設立日**: 2023年10月2日
- **本店所在地**: 〒100-0005 東京都千代田区丸の内1-6-5 丸の内北口ビルディング9階（WeWork内）
- **代表取締役 創業者兼 CEO**: 齊藤 達哉（Tatsuya Saito）

**株主構成**（公表分 · 概算）:

| 株主 | 持株比率（概算） | 役割 |
|---|---|---|
| 三菱UFJ信託銀行（MUTB） | **約49%** | 単独最大株主・信託受託機関 |
| SMBCグループ | 約15% | 共同委託銀行 |
| みずほ信託銀行 | 約15% | 共同委託銀行 |
| NTT Data | 約10% | 技術パートナー |
| JPX（日本取引所グループ） | 約5% | 取引所パートナー |
| Dataチェーン | 約3% | クロスチェーン技術 |

> **設計意図**: MUTB 49%は意図的（FSA指導）。三大メガバンクが対等なポジションを持ちつつ、MUFG単独支配を回避。SMBC・Mizuhoが「MUFG子会社」ではなく独立法人として使えることが分権型インフラの根拠となる（→ [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]]参照）。

**取締役構成（公表分・役職のみ要約)**:
- 代表取締役（非常勤）× 1名
- 取締役（非常勤）× 4名（株主行・パートナー法人からの派遣）
- CFO & CRO × 1名
- CTO × 1名

> 個人名は公開情報に基づくため変動の可能性あり。プロフィール詳細は [[payment-firms/progmat|JapanFG / progmat company anchor]] と公式 IR で都度確認。

---

## 2. 牌照・登録状況

- **JVCEA 非加盟**: 暗号資産交換業の登録なし。Progmat自体はトークン「発行体」ではなく、発行プラットフォームの「提供者」。
- **FSA直接登録なし**: デジタルアセットプラットフォーム提供事業者として事業展開（規制対象は発行体側である各信託銀行・銀行）。
- **電子決済手段等取引業（EPI）関連**: Progmat上で発行されるSC（ステーブルコイン）は改正資金決済法上の「特定信託受益権（第3号EPI）」に分類。発行体は三菱UFJ信託銀行・みずほ信託銀行等の信託会社。
- **前身**: 三菱UFJ信託銀行内の内部プロジェクトとして2019年頃から活動開始。2023年10月に独立法人化。

---

## 3. 取扱通貨（発行支援するデジタルアセット種別）

Progmatはトークン発行者ではなく、以下3種のトークン発行をサポートするプラットフォームを提供:

### ST（セキュリティトークン / デジタル証券）
- **国内全体** 87件 / **Progmat** 45件（運用残高 Progmat分 **4,522億円超**、全体 **6,674億円超**）
- 主な発行実績: 不動産・ホテル・オフィス ST、MUFG劣後社債 ST（2025-10 初案件）、NTTリース ST（2026-03）
- 発行受託者: 三菱UFJ信託銀行（主力）、みずほ信託銀行、オルタナ信託 等

### SC（ステーブルコイン / Progmat Coin）
- **信託型（第3号EPI）**: MUFG・SMBC・Mizuhoの三大行が共同委託者、三菱UFJ信託銀行が単一受託者
- 2023-09: 機関横断スタディ「Progmat Coin Joint Study Across Financial Institutions」発表（6社参加）
- 2024-09: Project Pax（Datachain連携・クロスボーダー SC転送パイロット）開始
- 2024-08: DMM Groupとのライセンス SC発行計画発表
- 2024-09: 国内・P2P送金対応への拡張実装フェーズ移行
- SC発行予定: **Progmat Coin（XJPY / XUSD等）** — 発行体は各信託銀行、Progmatはプラットフォーム提供

### UT（ユーティリティトークン / デジタル権利証）
- **2,804件超**（2022年7月〜最新時点累計）
- 主な用途: 株主優待、デジタルギフト、会員権 等

---

## 4. 業務範囲

### Progmatのポジション = プラットフォーム提供者（≠ 発行体）

```
[発行体（信託銀行・銀行）]
    │ 委託契約
    ▼
[Progmat] ← プラットフォーム提供 (SaaS + 実装支援)
    │ トークン技術
    ▼
[ブロックチェーン基盤]
    │ 発行
    ▼
[投資家・決済参加者]
```

**主要サービス（2024-11 発表 "Progmat SaaS"）**:
- トークン発行・管理基盤のSaaS提供（金融機関向け）
- 実装支援サービス（サービス設計・規制対応・技術実装）
- DCC（デジタルアセット共創コンソーシアム）の事務局運営：参加企業 **331社**（2026-05時点）

**業務外**: 自社による暗号資産取引・交換・保管（JVCEA非加盟のため）

**Project Pax（クロスボーダー）** — SWIFT API 互換通道の詳細は [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API]] 参照:
- 2024-09: Dataチェーン・TOKI連携で日韓間SC転送パイロット開始
- 2025-02: 韓国金融機関とのMOU締結
- 2025-03: 香港 – 日本間貿易決済実証（IDA・Dataチェーン・TOKI連携）
- 2026-02: Ava Labs・Dataチェーン戦略パートナーシップ（パブリックチェーン金融インフラ加速）

**最新展開（2026）**:
- 2026-04: トークン化株式・「トークン化法」中間整理公表
- 2026-05: トークン化国債「オンチェーン・レポ取引」共同検討開始

---

## 5. 市占・取引高

**STデジタル証券市場（2026-01 時点概算）**:
- 国内全体ST発行件数 87件中、Progmatプラットフォーム分が **45件（約52%）**
- 国内ST運用残高 6,674億円中、Progmat分 **4,522億円（約68%）**

→ 日本のST（デジタル証券）市場においてProgmatは **事実上の市場標準プラットフォーム**。

**SC（ステーブルコイン）市場**:
- 公式発行実績は2026-05時点でゼロ（実装フェーズ移行・発行準備中）
- 競合: JPYC（資金移動業者型）、DCJPY（GMOあおぞら銀行）、みんなの銀行Solana連携等
- 信託型SCとして三大行インフラを背景に **B2B大口決済セグメント**で唯一無二のポジション

**顧客層**: 主に大手金融機関・証券会社・AM会社（retail向けはST公募経由）

---

## 6. 沿革・重大事件

| 年月 | 出来事 |
|---|---|
| 2019年頃 | 三菱UFJ信託銀行内でSTプラットフォーム開発開始（前身） |
| 2022-02 | 三菱UFJ信託銀行、NFT「Progmat UT」とデジタルアセットウォレット開発開始を発表 |
| 2023-09 | 複数金融機関による「Progmat Coin」共同検討発表（6金融機関参加） |
| **2023-10-02** | **株式会社Progmat として独立法人化** |
| 2024-08 | DMM Group向けライセンスSC発行計画発表 |
| 2024-09 | Project Pax開始（Datachain連携クロスボーダーSCパイロット） |
| 2024-11 | 「Progmat SaaS」と「実装支援サービス」ローンチ（"国家インフラ"化宣言） |
| 2025-10 | 国内初 個人向け銀行劣後社債のST（MUFG 100億円） |
| 2026-02 | Ava Labs・Dataチェーン戦略パートナーシップ締結（パブリックチェーン展開加速） |
| 2026-03 | TMI総合法律事務所と不動産ST事業参入支援開始 |
| 2026-04 | トークン化株式の「中間整理」公表・トークン化法の検討着手 |
| 2026-05 | トークン化国債のオンチェーン・レポ取引共同検討開始 |

**行政処分・重大事件**: 公表なし（2026-05時点）

---

## 7. 戦略動向

**2025-2026の主な動向**:

1. **SCから ST へのプラットフォーム拡張**: 当初ST中心だったが、SC（第3号EPI）・UT・パブリックチェーン向けにフルライン展開
2. **国家インフラ化宣言（2024-11）**: "Progmat SaaS"として大手金融機関以外の中堅金融機関への横展開を明確化
3. **クロスボーダー本格化（Project Pax）**: 日韓・日香港間の実証から、2025年以降グローバル展開へ。Ava Labs・Datachain・TOKI・IDA連携
4. **トークン化株式参入（2025-11〜）**: 「トークン化株式」の24時間・1円単位取引実現に向けた法制度整備と実証
5. **公開市場への言及（2026-04 日経CNBC「IPOのタマゴ」出演）**: IPOへの言及が公開の場でなされているが、具体的なスケジュールの公式発表なし
6. **DCC参加企業331社**: 業界横断コンソーシアムが官民エコシステムとして機能

---

## 8. 関連人物

| 氏名 / 役職 | 肩書 | 備考 |
|---|---|---|
| 齊藤 達哉（Tatsuya Saito） | 代表取締役 創業者兼 CEO | 三菱UFJ信託銀行出身。前身プロジェクト主導→独立法人化CEO |
| 代表取締役（非常勤）× 1名 | — | 株主行派遣 |
| 取締役（非常勤）× 4名 | — | 株主行・パートナー法人派遣 |
| 監査役（非常勤）× 1名 | — | |
| CFO & CRO | — | |
| CTO | — | |
| VP, 日本事業開発 | — | |

> 個人名はCEO以外は変動の可能性が高いため役職のみで要約。詳細は [[payment-firms/progmat|JapanFG / progmat]] と公式IRで確認。

---

## 関連項目

- [[payment-firms/progmat|株式会社Progmat]] — JapanFG 企業アンカー
- [[trust-banks/mitsubishi-ufj-trust-bank|三菱UFJ信託銀行]] — 規制信託銀行の境界
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]] — Progmat Coinの法的根拠（第3号EPI・特定信託受益権）の詳細解説
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理]] — MUTB 49% 設計の意図と三大行ガバナンス構造
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]] — JPYC・DCJPY・Progmat Coinの制度的位置付け比較
- [[fintech/jp-stablecoin-dcjpy|DCJPY]] — GMOあおぞら銀行発行・銀行型（第1号EPI）との比較対象
- [[exchanges/jp-exchange-jpyc|JPYC]] — 資金移動業者型（第2種）との比較対象

---

## 出典

- [Progmat 会社概要（About Us）](https://progmat.co.jp/about/)（取得 2026-05-18）
- [Progmat Concept（ST/UT/SC実績）](https://progmat.co.jp/concept/)（取得 2026-05-18）
- [Progmat Consortium（DCC）](https://progmat.co.jp/consortium/)（取得 2026-05-18）
- [Progmat News Archive](https://progmat.co.jp/news/)（取得 2026-05-18）
- [Progmat EN News Archive](https://progmat.co.jp/en/news/)（取得 2026-05-18）
- [Progmat Blog Archive](https://progmat.co.jp/blog/)（取得 2026-05-18）
- [Progmat Coin Joint Study Press Release（2023-09-11）](https://progmat.co.jp/en/news/2023-09-11-press/)（取得 2026-05-18）
- [wiki/fintech/multi-megabank-consortium-governance]（株主構成の推計源泉）
- [wiki/fintech/jp-trust-type-sc-architecture]（制度的位置付けの詳細）

---

**最終更新** (2026-05-25): 監査に従い取締役等の記載を絞り込み（5名以上の社外取締役実名記載を役割のみの要約に置換し、CEO 名のみを維持）、日付を更新。
