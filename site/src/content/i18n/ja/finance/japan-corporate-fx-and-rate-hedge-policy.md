---
source: finance/japan-corporate-fx-and-rate-hedge-policy
source_hash: 5a15dddeaf488b0c
lang: ja
status: machine
fidelity: ok
title: "日本企業の為替・金利ヘッジ方針"
translated_at: 2026-06-02T13:21:55.097Z
---
# 日本企業の為替・金利ヘッジ方針

## ウィキ上の位置づけ

このページは [[finance/INDEX|finance domain]] の配下にある。案件ファイナンスのヘッジ接点は [[finance/japan-acquisition-finance|Japan acquisition finance]]、LBO 金利ヘッジは [[finance/japan-leveraged-buyout-economics|Japan leveraged buyout economics]]、FV-OCI 会計は [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]、ヘッジ開示の取扱いは [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]]、ヘッジ取引相手の選定は [[finance/japan-listed-financial-groups-investable-universe|listed financial groups investable universe]] とあわせて読む。

## 要約

日本の上場企業は、為替、金利、コモディティの各リスクについて正式なヘッジ方針を運用する。ヘッジ比率は、取締役会承認方針、エクスポージャーの期間、IFRS 9  / JGAAP のヘッジ会計適格性、デリバティブ・コスト、ナチュラルヘッジ、組込デリバティブの論点で決まる。大手商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui & Co]]、[[financial-conglomerates/itochu-corp|Itochu Corp]]）と大手メーカーは多通貨・多商品ヘッジを運用し、メガバンク（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）が主要取引相手になる。

## ヘッジ方針フレームワーク

| レイヤー | 典型的な構造 |
|---|---|
| 取締役会方針 | リスク管理方針、目的、商品、取引相手、限度枠を承認 |
| 財務方針 | ヘッジ比率、期間バケット、キャッシュフロー・ヘッジ指定を定義 |
| リスク委員会 | エクスポージャー、有効性、取引相手リスクを定期レビュー |
| ヘッジ会計文書 | IFRS 9  / JGAAP に準拠した指定、有効性テスト、比率定義 |
| 報告 | 四半期の取締役会・委員会報告と有価証券報告書での開示 |

開示は有価証券報告書の金融商品注記、統合報告書、リスク管理セクションに表れる。

### エクスポージャーの種類

| 種類 | 発生源 |
|---|---|
| 取引エクスポージャー | 外貨建て売掛金・買掛金 |
| 換算エクスポージャー | 海外子会社の貸借対照表換算 |
| 経済的エクスポージャー | 外貨建ての将来売上・コスト |
| 純投資エクスポージャー | 在外営業活動体への純持分 |

### ヘッジ比率バケット

| バケット | 典型的な手法 |
|---|---|
| 0-3 か月 | 先渡またはナチュラルヘッジで高くヘッジ |
| 3-12 か月 | 確定注文・契約済みフローを高比率でヘッジ |
| 12-36 か月 | 先渡、オプション、ゼロコスト・カラーで部分ヘッジ |
| 36か月超 | 比率を下げ、特定案件では長期スワップを使う |
| 換算 | 未ヘッジまたは純投資ヘッジで部分対応 |

ヘッジ比率は取締役会方針上の変数である。輸出メーカーは予想売上、輸入業者は確定発注を中心にヘッジする。

### 商品選定

| 商品 | 用途 |
|---|---|
| FX フォワード | 指定日の為替レートを固定する |
| FX オプション | 上振れ余地を残して保護する |
| FX スワップ / クロスカレンシー・スワップ | 資金調達側の通貨を変換する |
| ゼロコスト・カラー | 買いプットと売りコールでプレミアムを抑える |
| 通貨オーバーレイ | ポートフォリオ単位で通貨を管理する |
| ナチュラルヘッジ | 外貨収入と外貨費用・債務を対応させる |

JPY 建て発行体の多国籍企業は、海外子会社向け USD 資金に振り替えるためクロスカレンシー・スワップを多用する。

### 金利エクスポージャーと商品

| エクスポージャー | 発生源 |
|---|---|
| 変動金利債務 | TONA ベースの JPY ローン、LIBOR 代替後の USD / EUR ローン |
| 変動リース | IFRS 16  リース会計の変動要素 |
| 年金負債 | 割引率感応度 |
| 債券借換 | 発行前パイプライン・ヘッジ |
| 投資ポートフォリオ | 保険・財務 ALM |

| 商品 | 用途 |
|---|---|
| 金利スワップ | 変動を固定へ、または固定を変動へ変換 |
| クロスカレンシー金利スワップ | 通貨と金利を同時に変換 |
| キャップ / フロア | 上限・下限金利を任意に保護 |
| カラー | キャップとフロアを組み合わせる |
| 債券フォワード / トレジャリー・ロック | 発行前に利回りを固定 |
| スワップション | 将来スワップに対するオプション |

### TONA 移行

JPY LIBOR 廃止後、TONA は JPY 変動金利の主要なリスクフリー・ベンチマークになった。既存 LIBOR 連動エクスポージャーは ISDA 2020  IBOR フォールバックと JSDA 国内慣行の文言を使う。

## IFRS と JGAAP のヘッジ会計

IFRS 9

 では、IFRS 9  が IAS 39 を置き換える原則主義の枠組みを導入した。IFRS 9  では、適格項目の拡大、有効性評価、実際のリスク管理比率、文書化、リバランス、OCI へのヘッジ・コスト繰延が重要である。固定的な 80-125% ルールはない。

| 区分 | 取扱い |
|---|---|
| キャッシュフロー・ヘッジ | 有効部分を OCI に繰り延べ、対象取引時に P&L へ組替 |
| 公正価値ヘッジ | 対象と手段を公正価値で再測定し P&L で相殺 |
| 純投資ヘッジ | 有効部分を CTA として OCI に繰り延べる |

JGAAP は ASB / FASF 指針に従い、繰延ヘッジ会計、時価ヘッジ会計、金利スワップの特例処理、為替予約の振当処理を用いる。

## 組込デリバティブとコモディティ・ヘッジ

IFRS 9,  では、主契約と密接に関連しない組込デリバティブを別個に処理する。例は [[finance/japan-convertible-bond-mechanics|Convertible bond]] の転換権、期限前償還権、指数連動クーポン、外貨建てキャッシュフロー、指数連動元本である。転換社債の転換権は、IAS 32  / IFRS 9  の自己資本例外により資本処理される場合があり、[[finance/japan-convertible-bond-mechanics|convertible bond mechanics]] を参照する。

商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui & Co]]、[[financial-conglomerates/itochu-corp|Itochu Corp]]）は有価証券報告書でコモディティ・エクスポージャーとヘッジ比率を説明する。製造業では鉄鋼、銅、ナフサ、LNG、穀物などを長期契約、先物、OTC スワップ、ナチュラルヘッジで管理する。

## ヘッジ取引相手と開示面

| 取引相手 | 役割 |
|---|---|
| [[megabanks/mufg|MUFG]] / MUFG Bank | 日本企業向け FX / IRS の主要取引相手 |
| [[megabanks/smfg|SMFG]] / SMBC | 主要な FX / IRS 取引相手 |
| [[megabanks/mizuho-fg|Mizuho FG]] / Mizuho Bank | 主要な FX / IRS 取引相手 |
| 信託銀行 | ヘッジ、カストディ、ALM |
| グローバル銀行 | クロスボーダー、大口、複雑なヘッジ |
| 取引所清算 | TOCOM、JSCC、OSE |

株価を動かし得る重要なヘッジ情報には [[finance/japan-fair-disclosure-and-insider-trading-controls|Fair disclosure and insider trading controls]] が適用される。発行前債券ヘッジは M&A 資金調達の [[finance/japan-acquisition-finance|Japan acquisition finance]] と、CB にヘッジ・オーバーレイを組み合わせる [[finance/japan-convertible-bond-mechanics|convertible bond]] と接続する。アクティビスト要求と対応は [[finance/japan-activist-investor-playbook|activist playbook]] と [[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]] を参照。

## 関連

- [[finance/INDEX]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/cross-border-m-a-japan]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[banking/regional-bank-consolidation-pattern]]
- [[securities/japan-underwriting-market-structure]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-conglomerates/mitsubishi-corp]]
- [[financial-conglomerates/mitsui-co]]
- [[financial-conglomerates/itochu-corp]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## 出典

- FSA、JPX、EDINET、BOJ、MoF、METI、ASB の公開資料。
