---
title: 国内暗号資産 税制 詳細 — 雑所得 vs 申告分離 + 個人 vs 法人
aliases:
  - JP crypto taxation detailed
  - 国内暗号資産 税制
  - JP crypto tax 雑所得 申告分離
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - taxation
  - jp-vasp
  - regulation
  - retail
sources:
  - https://www.nta.go.jp/
  - https://www.fsa.go.jp/
status: candidate
---

# 国内暗号資産 税制 詳細 — 雑所得 vs 申告分離 + 個人 vs 法人


## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

## 1. 概要

国内暗号資産は所得税法上「雑所得」として課税 (2017- 仮想通貨法施行に合わせ国税庁 Q&A 整備)。個人は最大 **55% (45% 所得税 + 10% 住民税) 累進**。一方、株式・FX・暗号資産 ETF (米経由) は申告分離 20% (15% 所得税 + 5% 住民税) — **35 percentage point 差**が retail 投資家の保有・売買行動を歪める最大要因。OECD 主要国でも突出して重い税率である。

## 2. 個人課税の詳細

- **雑所得 累進**: 課税所得 4M JPY 超 33%, 9M 40%, 18M 45% (+住民税 10% = 最高 55%)
- **損益通算不可**: 他の雑所得との通算は可能だが、給与所得・事業所得・株式譲渡益とは通算不可
- **繰越控除不可**: 損失の翌年以降の繰越なし (株式は 3 年繰越可能 — 大きな非対称)
- **譲渡/交換 課税**: BTC → ETH 交換も課税イベント (各時点の法定通貨換算が必要、取得価額の追跡が煩雑)
- **使用課税**: 暗号資産で商品・サービス購入も課税イベント (Lightning 決済等の発展阻害要因)

## 3. 法人課税

- **法人税 23.2%** (実効税率 ~30%)
- **期末時価評価義務 (2024 改正で緩和)**: 従来は保有 token を期末時価評価し含み益課税。2024 改正で「保有目的 = 売買目的でなく長期保有」と申告すれば時価評価免除
- **損益通算可能**: 他事業所得との通算
- **法人 vs 個人 で 25 percentage point 差** + 通算可能性 + 繰越控除 = 法人化メリット大 (HNW 投資家の合同会社設立急増)

## 4. 投資家行動への影響

- **HODL 戦略**: 短期売買で実現利益コスト過大 → 長期 hodl 偏向 (取引高低迷の構造要因)
- **法人化**: high-net-worth investor の法人成 (合同会社/資産管理会社)
- **米 ETF (IBIT/FBTC) 経由間接 exposure**: 米国 ETF は申告分離 20% + 三年繰越可 — 国内 spot より優遇 → 米 ETF 経由流出加速 [[exchanges/btc-spot-etf-japan-impact]]
- **海外 (シンガポール/UAE/ポルトガル) 移住**: 富裕層流出問題 — 5 年居住要件等の出国税対応も増加

## 5. 2026 改正動向

- **2026 現在** 業界団体 (JBA / [[exchanges/jvcea-self-regulatory-overview]] + 自民党金融調査会) が **申告分離 20% 化** を提言中
- **2027 改正案** で BTC/ETH 等主要 token は 申告分離化想定 (未確定、財務省は慎重)
- 一部議員は完全廃止 (株式と同一扱) を主張 — Web3 政策提言と連動
- 改正実現 ⇒ retail 取引高急増 + 法人化メリット縮小 + ETF/spot の選好変化

## Cross-links

- [[exchanges/btc-spot-etf-japan-impact]] — 米 ETF 経由間接 exposure
- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/jp-vasp-regulatory-timeline]]
- [[exchanges/jvcea-spot-volume-statistics-analysis]]
- [[exchanges/jp-listed-cex-related-companies-matrix]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[exchanges/jp-cex-staking-lending-regulation]] — JP CEX ステーキング・レンディング規制
- [[fintech/japan-financial-regulation]] — 日本金融規制全体

## Sources

国税庁 (NTA) 公告 + 仮想通貨に関する税務上の取扱い Q&A, 所得税法令, JBA / JVCEA 提言公開資料, 日経/ITmedia 解説記事。
