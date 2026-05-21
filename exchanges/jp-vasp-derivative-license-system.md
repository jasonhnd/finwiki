---
title: 国内暗号資産デリバティブ取引業 制度 — 金商法 × 資金決済法 デュアル登録
aliases:
  - JP crypto derivatives regulation
  - 暗号資産 CFD 制度
  - 金商法 暗号資産デリバティブ取引業
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - derivatives
  - regulation
  - financial-instruments-act
sources:
  - https://www.fsa.go.jp/
  - https://jvcea.or.jp/member/
  - https://elaws.e-gov.go.jp/
status: candidate
---

# 国内暗号資産デリバティブ取引業 制度 — 金商法 × 資金決済法 デュアル登録

## 制度概要

2020-05 施行の改正金融商品取引業（金商法）により、暗号資産デリバティブ取引業が「金融商品取引業」の対象に編入された。これにより日本の暗号資産業界は **spot 取引（資金決済法 = 暗号資産交換業者登録）** と **デリバ取引（金商法 = 第一種金融商品取引業者登録）** の **二本立て規制** に分離された。同じ「暗号資産」を扱っても、現物受渡しの有無で適用法令と登録ルートが異なる点が他国比較でも特徴的。詳細は [[fintech/japan-financial-regulation|日本金融規制]] 体系を参照。

## 二種類のライセンス保有パターン

国内事業者は次の 3 タイプに分かれる:

- **デュアル保有（spot + デリバ）** — [[exchanges/jp-exchange-bitflyer|bitFlyer]] / [[exchanges/jp-exchange-gmo-coin|GMO コイン]] / [[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]] 等。資金決済法の Type 1 spot 登録に加え、金商法の第一種金融商品取引業登録を併せ持つ二刀流。
- **spot 専業** — コインチェック / bitbank 等。資金決済法のみで運営、デリバ商品は提供せず。
- **デリバ専業** — [[exchanges/jp-exchange-monex|Monex 株式会社]]（spot は子会社 Coincheck 経由）/ [[exchanges/jp-exchange-bi-fxtrade|SBI FX トレード (BI FXTRADE)]] / [[exchanges/jp-exchange-traders-securities|トレイダーズ証券]] / [[exchanges/jp-exchange-sbi-securities|SBI 証券]] / [[exchanges/jp-exchange-goldenway-japan|ゴールデンウェイ・ジャパン]] / [[exchanges/jp-exchange-dmm-com-securities|DMM.com 証券]] の 6 社が代表例。金商法登録のみで spot は扱わない。

## レバレッジ規制 (2020-)

金商法編入と同時に強い保護規制が導入された:
- **個人**: 2 倍上限
- **法人**: 区分により高倍率（実質的に機関投資家向け）
- 取扱銘柄も BTC/ETH 中心の限定的ラインナップが業界標準

これは FX の 25 倍上限よりも保守的で、業界全体の取引量・収益性を構造的に抑制する効果がある。

## 登録番号体系

第一種金融商品取引業の登録番号は「**関東財務局長（金商）第NNN号**」形式（FSA → 各財務局へ委任）。spot の「関東財務局長 第NNNNN号」（資金決済法）とは別系列の番号体系。デュアル保有事業者は **2 種類の登録番号** を併記する。

## 実質的影響: ネット FX 業者の自然な参入

デリバ専業 6 社のうち **5 社が FX 主業** から派生（SBI FX トレード / トレイダーズ証券 / ゴールデンウェイ / DMM.com 証券 / SBI 証券の CFD 部門）。既存の FX 業基盤（証拠金管理・板・カウンターパーティリスク管理ノウハウ）が暗号資産 CFD へ自然拡張する形となり、新興 spot VASP とは異なる進化系統を形成。自主規制は [[exchanges/jvcea-self-regulatory-overview|JVCEA]] と spot 登録の [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] を参照。

---

来源: 公的情報（fsa.go.jp 公表登録リスト、jvcea.or.jp 会員一覧、elaws 法令データベース、各社 IR 公表資料）
