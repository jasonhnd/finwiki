---
title: GMO あおぞらネット銀行
aliases: ["GMO Aozora Net Bank", "GMO あおぞらネット銀行", "GMO Aozora", "あおぞら信託銀行（旧称）"]
domain: JapanFG
created: 2026-05-19
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-15
confidence: likely
tags: [JapanFG, net-bank, baas, fintech]
status: active
sources:
  - "Wikipedia: GMOあおぞらネット銀行 (2026-05-19 抽出)"
  - GMO あおぞらネット銀行 公式サイト (2026-05-19 参照)
  - GMO インターネットグループ IR (2026-05-19 参照)
---

# GMO あおぞらネット銀行


## Wiki route

This entry sits under [[JapanFG/INDEX|JapanFG index]]. Read it against [[JapanFG/ssnb|住信 SBI ネット銀行 (SBI Sumishin Net Bank) → ドコモ SMTB ネット銀行]] for peer / contrast context and [[banking/INDEX|banking index]] for the broader system / regulatory boundary.

## TL;DR

**法人特化 BaaS（Banking as a Service）軸**のネット銀行。旧 **あおぞら信託銀行**（2004-04 開業、[[aozora-bank]] 子会社）を母体に、2018-07 **GMO インターネットグループ**が過半数取得し改称。株主構成は GMO ~85% + あおぞら銀行 ~15%（^[ambiguous]、時点変動あり）。**個人重視の楽天銀行・PayPay 銀行・住信 SBI ネット銀行とは異なり、フリーランス・スタートアップ・fintech 連動の法人口座 + API 連携を主軸**に据える。代表サービスは「**あんしんワイド**」（法人向けビジネスローン）と「**銀行 API for Developers**」。freee・マネーフォワード・Square・Stripe 等の fintech との戦略提携でポジションを築いている。^[extracted]

## 1. 会社概要

**正式名**：株式会社 GMO あおぞらネット銀行 ^[extracted]
**英名**：GMO Aozora Net Bank, Ltd.
**設立**：2004-04（あおぞら信託銀行として開業）^[extracted]
**現体制発足**：2018-07（GMO インターネットグループが過半数取得 → 改称）^[extracted]
**本社**：東京都渋谷区 ^[extracted]
**業態**：銀行業（普通銀行 / ネット銀行）

### 主要株主（^[ambiguous]、時点変動あり）

| 株主 | 比率 |
|---|---|
| GMO インターネットグループ（東証 PRIME 9449）| 約 85% |
| [[aozora-bank]] | 約 15% |

> GMO は当初 15% 出資（2016-05）→ 段階的買増し → 2018-07 過半数取得 → 現在は連結子会社化。比率は IR 開示で動くため最新は GMO IR を参照。^[ambiguous]

### グループ内ポジション

```
GMO インターネットグループ（東証 PRIME 9449・熊谷正寿）
  ├── GMO あおぞらネット銀行（~85%）── 法人 BaaS ネット銀行
  ├── GMO ペイメントゲートウェイ（東証 PRIME 3769）── 決済処理 ICT
  ├── GMO コイン ── 暗号資産取引所
  ├── GMO クリック証券 ── ネット証券・FX
  ├── GMO クラウド / GMO ペパボ ── インフラ・ホスティング
  └── GMO リサーチ / GMO アドパートナーズ ── 広告・調査
[[aozora-bank]]（東証 PRIME 8304）
  └── GMO あおぞらネット銀行（~15%）── レガシー連結残持分
```

### 沿革 ^[extracted]

| 年月 | 事象 |
|---|---|
| 2004-04 | **あおぞら信託銀行** 開業（[[aozora-bank]] 100% 子会社、信託業務中心） |
| 2016-05 | GMO インターネット が あおぞら信託銀行に 15% 出資 → ネット銀行転換の合弁準備 |
| 2018-07 | **GMO 過半数取得 → GMO あおぞらネット銀行 改称・営業開始**（個人・法人口座開設開始） |
| 2019〜 | 法人 fintech 連動口座が成長軸に。freee / マネーフォワード等との API 連携拡大 |
| 2020〜 | 「あんしんワイド」（法人ビジネスローン）開始、BaaS パートナー連携加速 |
| 2022〜 | Stripe / Square / Wise 等の決済 fintech との連動拡大 |
| 2024 | 上場準備報道 ^[ambiguous]（GMO IR では明示プレゼン無し、時点要確認） |

## 2. 事業セグメント・マップ

| セグメント | 主要事業 | 特徴 |
|---|---|---|
| 法人口座 | フリーランス・個人事業主・スタートアップ口座 | 開設手続のオンライン完結・即日開設対応で fintech 層に強い |
| 法人ローン | **あんしんワイド**（無担保ビジネスローン）| AI 与信モデル + GMO PG 決済データ連携 |
| API / BaaS | **銀行 API for Developers** | 法人 / fintech 向け（残高照会・振込・口座開設等の API 開放） |
| パートナー連携 | freee / マネーフォワード / Square / Stripe / Wise 等 | 会計・決済 SaaS との直結口座 |
| 個人口座 | フリーランス層・副業層向け | 個人特化 net bank（楽天 / PayPay / 住信 SBI 等）との真っ向勝負は回避 |
| 暗号資産連携 | [[gmo-coin]]（兄弟会社）| GMO グループ内シナジー |
| 決済連携 | GMO ペイメントゲートウェイ（兄弟会社・東証 PRIME 3769）| 決済処理・加盟店データ連携 |

## 3. 戦略・競争

### 法人 BaaS 軸の差別化

- **個人特化のネット銀行（楽天銀行 / PayPay 銀行 / [[JapanFG/ssnb|sbi-sumishin-net]] / au じぶん銀行 等）とは戦場を変える**：個人口座数で勝負せず、**法人 BaaS と API 経済への対応**に集中
- 「あんしんワイド」（法人ビジネスローン）が GMO ペイメントゲートウェイの決済データを与信に活用 → グループシナジーの典型
- ターゲットは「**会計 SaaS / 決済 SaaS / クラウド ERP を既に使う中小 / 個人事業主**」層 — fintech 連動口座の標準ポジション

### 親 GMO とのシナジー

- **GMO ペイメントゲートウェイ**（決済）/ **[[gmo-coin]]**（暗号資産）/ **GMO クリック証券**（証券・FX）と相互送客
- GMO グループ全体の「**インターネット金融経済圏**」の銀行レイヤー（決済 + 証券 + 暗号資産 + 銀行）
- 楽天・PayPay・SBI の経済圏と比較すると規模は小さいが、**法人 / フリーランス層**に明確に振り切ったポジション

### API / Open Banking 戦略

- 「**銀行 API for Developers**」: 残高照会・振込・口座開設等の API 開放を fintech 開発者向けに整備
- freee / マネーフォワード等の会計クラウドと直結 → 入出金が自動で記帳される
- Stripe / Square 等の海外決済 fintech とも接続 → クロスボーダー決済対応
- 「**個人 fintech が決済中心**」に対し「**法人 fintech は会計 / 経費 / 与信中心**」というセグメント差を捉える

### 上場可能性 ^[ambiguous]

- 2024 上場準備の観測報道あり ^[ambiguous]（GMO IR の公式コミットメントは要確認）
- GMO ペイメントゲートウェイ（東証 PRIME 3769）と同様のグループ内独立上場パスは構造的に可能
- 上場すれば GMO グループの「インターネット金融経済圏」全体の評価値が顕在化

## 4. 規制・政策

- **主管**：金融庁（FSA）
- **業態**：銀行法上の銀行（普通銀行）
- **預金保険**：預金保険機構加入
- **API 規制**：銀行法改正（2017）に基づく Open API 提供義務 → 「銀行 API for Developers」はその制度的延長
- **資金移動業 / 仮想通貨業との接続**：GMO グループ内 [[gmo-coin]] や GMO ペイメントゲートウェイ との連携で複数業法ライセンスの統合が論点
- **マネーロンダリング規制**：法人口座開設の本人確認 / 実質的支配者確認の厳格化（2023〜 FATF 第 4 次審査対応）

## Counterpoints

- **親 GMO の戦略変動リスク** ^[inferred]：GMO インターネットグループの戦略・人事・財務変動が直接子銀行に波及。創業者熊谷正寿のグループ統治の癖と銀行業のリスク管理文化のミスマッチが指摘される場面あり
- **BaaS 競合激化** ^[ambiguous]：[[JapanFG/ssnb|sbi-sumishin-net]]（住信 SBI ネット銀行）の NEOBANK 事業、楽天銀行・PayPay 銀行の法人参入、[[banking/minna-bank-baas-model|minna-bank]] / [[banking/mercari-bank|mercari-bank]] 等の地銀発 BaaS、UI 銀行（東京きらぼし）等との競争激化 → 「法人 BaaS」軸の独自性が薄まる可能性
- **上場可能性は未確定** ^[ambiguous]：観測報道はあるが時期 / 規模は不透明。GMO ペイメントゲートウェイ並みの評価が付くかは収益規模次第
- **「あおぞら」レガシーの薄さ**：[[aozora-bank]] からの ~15% 持分は連結残として残るが、ブランド / 営業基盤は実質 GMO 主導 → あおぞら銀行本体（旧日債銀）との営業シナジーは限定的 ^[inferred]
- **個人口座の存在意義**：法人 BaaS が主軸の中で「フリーランス向け個人口座」がどこまで規模化するかは未知数（個人ネット銀行は飽和市場）^[inferred]

## Open questions

- GMO の出資比率は最新時点で何 % か？（IR 経由で確認が必要、^[ambiguous]）
- 上場準備の真偽と時期・規模は？
- 「あんしんワイド」の融資残高・不良債権率は？（法人 fintech 与信モデルの実績検証）
- BaaS パートナー数と各パートナーの口座シェアの推移は？
- [[aozora-bank]] 本体（旧日債銀ベース）との今後の関係性は？ 完全買い取り or 持分維持
- [[gmo-coin]] との連携で暗号資産→法定通貨フローでどこまで一体化するか？

## Related

- [[aozora-bank]]（旧親会社・現 ~15% 株主）
- [[gmo-coin]]（兄弟会社・暗号資産）
- [[JapanFG/ssnb|sbi-sumishin-net]]（住信 SBI ネット銀行・競合 BaaS）
- [[banking/paypay-bank|paypay-bank]] · [[banking/rakuten-bank|rakuten-bank]] · [[banking/au-jibun-bank|au-jibun-bank]]（個人ネット銀行・別戦場）
- [[banking/minna-bank-baas-model|minna-bank]] · [[banking/mercari-bank|mercari-bank]]（新型 BaaS / 地銀発デジタルバンク・競合）
- [[banking/baas-japan-landscape]]（^[planned] 日本 BaaS マップ）

## Sources

- **Wikipedia: GMO あおぞらネット銀行**（https://ja.wikipedia.org/wiki/GMOあおぞらネット銀行, 2026-05-19 抽出）
- **GMO あおぞらネット銀行 公式サイト**（https://gmo-aozora.com/, 2026-05-19 参照）
- **GMO インターネットグループ IR**（東証 PRIME 9449, 2026-05-19 参照）

---

> [!info] 検証状況
> confidence: **likely**（Wikipedia + 公式 + 親 GMO IR ベース 2026-05-19）。**株主比率（GMO ~85% / あおぞら ~15%）は時点変動が大きい** — IR 確定値は GMO インターネットグループ有価証券報告書を要参照。上場準備報道は ^[ambiguous] の段階で確証無し。融資残高 / API パートナー数等の定量データは未収集（追補必要）。
