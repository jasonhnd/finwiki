---
title: ステーブルコイン制度分断フレームワーク（米 / 欧 / 日 / 中港 / 域外流通）
aliases: [stablecoin sovereign currency divide, geo-political stablecoin, 5 極ステーブルコイン]
domain: fintech
kind: framework
topic: stablecoin-chain-sovereign-currency-divide
created: 2026-05-13
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-08-08
confidence: likely
tags: [fintech, stablecoin, geopolitics, sovereign-currency, framework]
status: active
sources:
  - https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
  - https://www.occ.treas.gov/news-issuances/bulletins/2026/bulletin-2026-3.html
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114
  - https://www.fsa.go.jp/en/policy/sftl/index.html
  - https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/
  - https://www.pbc.gov.cn/en/3688110/3688172/4437084/index.html
---

# ステーブルコイン制度分断フレームワーク


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 世界が法的に五つの「陣営」へ確定分割されたという資料はない。本稿の五区分は、2026 年 7 月 30 日時点の米国、EU、日本、中国本土と香港、そして複数法域をまたぐ域外流通を比較するための観察枠である。法令は発行者・販売・準備・償還などを規律するが、特定チェーンを各国の公式チェーンに指定するとは限らない。商品名・チェーン名・提携関係は個別の一次資料がある場合にのみ結び付ける。

## 五つの観察区分

以下の表は [米国 Public Law 119-27](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf)、[EU MiCA](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114)、[日本の金融庁資料](https://www.fsa.go.jp/en/policy/sftl/index.html)、[香港金融管理局](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/)、[中国人民銀行の e-CNY 資料](https://www.pbc.gov.cn/en/3688110/3688172/4437084/index.html) に基づく。「域外流通」は主権的な第五法域ではなく、各国ルールの適用を個別に確認すべき市場区分である。

| 観察区分 | 確認できる制度上のアンカー | 分析上の境界 | 一次資料 |
|---|---|---|---|
| 米国 | GENIUS Act は permitted payment stablecoin issuer、準備・償還、外国発行者などの枠組みを設ける。2026 年 2 月時点の OCC 実装規則は提案段階 | 特定の USDC、USD1、PYUSD または Arc / Tempo / Base を「公式陣営」に指定する法律ではない | [法律](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf)・[OCC](https://www.occ.treas.gov/news-issuances/bulletins/2026/bulletin-2026-3.html) |
| EU | MiCA は asset-referenced token と e-money token の発行・公募・サービス提供を規律する | 「MiCA-compliant chain」というチェーン認定制度と同義ではない | [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114) |
| 日本 | 資金決済法等の下で電子決済手段と取扱業者の制度がある | JPYC、外国発行トークン、信託型・預金型の法的位置と実装段階は個別確認が必要。XJPY や Arc 経路を自動的に含まない | [金融庁](https://www.fsa.go.jp/en/policy/sftl/index.html) |
| 中国本土・香港 | 中国本土は e-CNY を中央銀行デジタル通貨として展開。香港は法定通貨参照ステーブルコイン発行者の免許制度を設ける | 中国本土と香港は別の法制度であり、e-CNY と香港の民間ステーブルコインを一つの商品・チェーンとして扱わない | [PBoC](https://www.pbc.gov.cn/en/3688110/3688172/4437084/index.html)・[HKMA](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/) |
| 域外・複数法域流通 | 同じトークンが複数チェーン・取引所・ウォレットで流通し得る | 「グレー市場」という単一の規制圏ではない。合法性、販売制限、AML/CFT、制裁対応は法域・仲介者・用途ごとに異なる | 各法域・各発行者の資料を個別確認 |

## 制度分断を追う観察点

- **発効と実装を分ける**: 法律成立、施行、規則案、最終規則、個別免許・登録は異なるイベントである。
- **発行と流通を分ける**: 発行者が許可されても、取引所、カストディアン、販売代理、ウォレットに別の要件がかかり得る。
- **通貨とチェーンを分ける**: 同一通貨建てトークンが複数チェーンで発行される場合があり、法令適合はチェーン名だけで決まらない。
- **中国本土と香港を分ける**: e-CNY は PBoC の CBDC、香港の免許制度は法定通貨参照ステーブルコイン発行者を対象とする。
- **規制外と違法を分ける**: ある法域で承認されていないこと、提供が制限されること、違法であることは同義ではない。

## 検証してから追加すべき主張

以下は可能性として研究できるが、現時点の制度資料だけでは確定できない。

1. 特定のチェーンが米国、EU、日本、香港の「主導チェーン」になること。
2. SBI、JPYC、Circle が単一の環状持株または唯一の円・ドル接続経路を形成すること。
3. Tether がすべての規制市場を避け、単一の「グレー陣営」を意図的に支配すること。
4. Visa その他のネットワークが全区分を横断して確実に手数料を得ること。
5. インド、ブラジル、アフリカ諸国が一つの陣営へ帰属すること。

これらを記載する場合は、当局判断、発行者開示、チェーン上の発行情報、契約当事者の発表をそれぞれ付し、予測と現在事実を分ける。

## 利用方法

このフレームは投資配分の推奨ではない。商品を比較するときは、(1) 発行者と法的債務者、(2) 準備と償還、(3) 対象利用者・販売地域、(4) チェーンとコントラクト、(5) 仲介者の登録、(6) 発効・移行日を同じ基準日で確認する。制度間ブリッジの評価は、技術接続だけでなく双方の販売・償還・本人確認・制裁対応が成立しているかで行う。


## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act の実装状況]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street ネットワーク中立投資]]
- [[fintech/tether-business-model-short-treasury-yield|Tether ビジネスモデル]]
<!-- /wiki-links:managed -->
