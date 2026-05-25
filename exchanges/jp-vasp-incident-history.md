---
title: 国内 VASP 暗号資産流出事件史 (2014-2026)
aliases:
  - 日本 VASP hack history
  - 国内暗号資産流出事件
  - JP crypto exchange incident timeline
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - incident
  - security
  - history
sources:
  - https://www.fsa.go.jp/
  - https://jvcea.or.jp/
status: candidate
---

# 国内 VASP 暗号資産流出事件史 (2014-2026)

## 概要

国内 VASP 史は大規模流出事件によって規制が前進してきた歴史である。Mt.Gox (2014) は資金決済法改正の引き金となり、Coincheck (2018) は自主規制機関 JVCEA 発足とコールド保管比率規制の起点、DMM Bitcoin (2024) は北朝鮮 Lazarus 帰属が公的に確認された大型事案として SBI VC トレードへの事業移管を生んだ。流出は単発事件でなく、ホットウォレット 5% 上限・分別管理義務などの「制度反射」を伴って繰り返されてきた。

## 主要事件 timeline

| 年月 | VASP | 流出規模 | 帰結 |
|------|------|---------|------|
| 2014-02 | Mt.Gox | 約 850,000 BTC (当時 470 億円相当) | 民事再生 → 破産 → 法的整理係属、2017 資金決済法改正のトリガー |
| 2018-01 | [[exchanges/jp-exchange-coincheck]] | 約 580 億円 (5.2 億 XEM) | JVCEA 設立 (2018-04)、FSA 業務改善命令、マネックスグループ買収 |
| 2018-09 | [[exchanges/jp-exchange-zaif]] (旧テックビューロ) | 約 70 億円 | フィスコデジタルアセットグループへの事業譲渡 |
| 2019-07 | BITPoint Japan | 約 35 億円 | レーザーテック傘下で再建 |
| 2019-09 | Liquid (QUOINE) | 約 105 億円 (二段階流出) | FTX 買収 → FTX 破綻 → [[exchanges/jp-exchange-custodiem]] へ承継 |
| 2024-05 | [[exchanges/jp-exchange-dmm-bitcoin]] | 4,502.9 BTC 約 482 億円 | FBI/警察庁が Lazarus / TraderTraitor 帰属を公表、廃業 → SBI VC トレード移管 (2025) |

## 規制反射 (3 段階)

1. **第一段階 (2017 資金決済法改正)** — Mt.Gox を受けて VASP 登録制度導入。暗号資産を「決済手段」として定義
2. **第二段階 (2018-2020 自主規制 + 業者規律)** — Coincheck/Zaif 連続事案を受け JVCEA を認定自主規制団体に指定。ホットウォレット顧客資産 5% 上限、コールド保管 95% 義務、分別管理 (信託 or 個別管理) 義務化
3. **第三段階 (2020 金商法改正)** — 暗号資産デリバティブを金商法傘下に取り込み、内部管理態勢・サイバー耐性要件を強化

## Lazarus 帰属の位置づけ

DMM Bitcoin 事案 (2024-05) は、FBI・米財務省・警察庁の共同声明で北朝鮮 Lazarus Group の下位部隊 TraderTraitor の犯行と公的に帰属された日本初の大型 VASP 事案。手口は委託先 [[exchanges/jp-custody-ginco]] のエンジニアを LinkedIn でリクルートを装って侵入、署名鍵を奪取するソーシャル + サプライチェーン複合型。海外無登録警告組と並ぶ「コンプライアンス境界外リスク」と異なり、登録 VASP の内部からの脱出経路リスクを浮き彫りにした。

## 関連

- [[exchanges/jp-exchange-coincheck]] · [[exchanges/jp-exchange-zaif]] · [[exchanges/jp-exchange-custodiem]] · [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-foreign-exchange-bitforex]] — exit scam の海外パラレル事例
- [[fintech/japan-financial-regulation]] — 資金決済法 / 金商法の枠組み
- [[exchanges/jp-custody-ginco]] — DMM 事案の侵入経路

来源: 公開情報整理 (FSA 業務改善命令・行政処分公表、JVCEA 公告、各事案当事社の IR・記者会見・第三者委員会調査報告書、警察庁/サイバー警察局公表、Chainalysis/Elliptic 公開リサーチ)
