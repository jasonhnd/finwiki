---
source: structured-finance/japan-abs-market-overview
source_hash: 1fa7619ba899d505
lang: ja
status: machine
fidelity: ok
title: "日本の ABS 市場概観"
translated_at: 2026-06-15T04:09:41.185Z
---

# 日本の ABS 市場概観

## 要約

日本の資産担保証券市場は、おおまかに 3 つの層に分かれる：非常に大きな JHF MBS 層（住宅金融支援機構、政府支援のシニアクラス）、民間 RMBS 層（メガバンクや信託銀行がオリジネートするジャンボ住宅ローンプール）、そして TK-GK 型 SPV や特定目的会社を通じて発行される消費者／オート／CMBS／プロジェクト層である。2008 以降、CMBS 側の発行は急減した。JHF MBS のエンジンは稼働を続け、いまや円建てストラクチャード・ペーパーを支配している。本ページは [[structured-finance/INDEX]] のルーティング・サーフェスとして、また [[structured-finance/INDEX]] のオリジネーター企業ページを本ドメインのストラクチャー機構につなぐために用いること。

## Wiki 経路

| 探しているもの | 行き先 |
|---|---|
| JHF MBS のエンジン | [[structured-finance/jhf-mbs-mechanics]] |
| 民間 RMBS のストラクチャー | [[structured-finance/japan-rmbs-issuance-structure]] |
| CMBS のストラクチャー | [[structured-finance/japan-cmbs-issuance-structure]] |
| オートローン ABS | [[structured-finance/auto-loan-abs-japan-toyota-honda]] |
| 消費者／カード ABS | [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV ビークルの選択 | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| JHF と民間のスプレッド | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |

## 1. 市場層マップ

| 層 | 典型的な発行体 | ビークル | おおよその数量の傾き |
|---|---|---|---|
| JHF MBS | [[policy-finance/japan-housing-finance-agency]] | JHF 信託 | 円建てストラクチャードで最大の層 |
| 民間 RMBS | メガバンク（[[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]]）、信託銀行 | 信託受益権 | 中規模、時折の公募ディール |
| CMBS | 不動産スポンサー、メガバンク | TMK または TK-GK | 2008, 以降は小規模、2020年代に拡大 |
| オートローン ABS | [[card-issuers/toyota-finance]], [[leasing-firms/toyota-financial]], ホンダファイナンス, 日産クレジット | TK-GK | リピート発行体、細粒なプール |
| 消費者／カード ABS | [[card-issuers/orico]], [[card-issuers/jaccs]], [[card-issuers/aplus]], [[card-issuers/mufg-nicos]] | TK-GK または信託 | リボルビング構造が一般的 |
| リース ABS | [[leasing-firms/mitsubishi-hc-capital]], その他のリース会社 | 信託 | リースプールの残価リスク |
| プロジェクト／インフラ | スポンサー SPC | TMK または TK-GK | ニッチ、ディール個別 |

## 2. オリジネーターの全体像

- **銀行**: メガバンク（[[megabanks/mufg]], [[megabanks/smfg]], [[megabanks/mizuho-fg]]）と主要な信託銀行が、ジャンボ住宅ローンや企業向け貸出の担保をオリジネートする。オリジネーター側については [[banking/INDEX]] を参照。
- **オートファイナンス会社**: トヨタファイナンス、トヨタファイナンシャルサービス、ホンダファイナンス、日産クレジット、SMBC オート、MUFG キャピタル・オート・ローンが、バランスシート管理ツールとしてオートローン ABS を発行する。
- **消費者／カード発行体**: アプラス、オリコ、ジャックス、MUFG ニコス、[[card-issuers/jcb]], [[card-issuers/credit-saison]] が、銀行ラインによる資金調達と並んで、カード債権 ABS を資金調達ツールとして用いる。
- **公的セクター**: JHF が支配的な公的信用の発行体である。[[policy-finance/japan-housing-finance-agency]] と [[structured-finance/jhf-mbs-mechanics]] を参照。
- **受託者としての信託銀行**: [[trust-banks/sumitomo-mitsui-trust]] その他の信託銀行が信託受益権ストラクチャーの受託者を務める。信託銀行の役割は構造上のものであり、オリジネーターではない。

## 3. ディーラー／アレンジャーの全体像

| 役割 | 典型的なハウス |
|---|---|
| リードアレンジャー | [[securities-firms/mizuho-securities]], [[securities-firms/mufg-mums]], 野村, 大和 SG（[[securities-firms/daiwa-sg]]）, SMBC 日興 |
| 受託者 | [[trust-banks/sumitomo-mitsui-trust]], 三菱 UFJ 信託, みずほ信託 |
| 格付機関 | JCR, R&I（[[structured-finance/credit-rating-methodology-jcr-r-and-i]] を参照）; クロスボーダーでは S&P, Moody's, Fitch |
| サービサー | オリジネーターまたは関連サービサー; 時に専門のスペシャルサービサー |

## 4. 市場規模全体のシグナル

- JHF MBS プログラムは毎月発行を行っており、円建てで群を抜いて最大の単一ストラクチャード・ペーパー・エンジンとなっている。
- 民間 RMBS の発行は断続的である — メガバンクは典型的にはプログラムベースでジャンボディールを発行するが、毎月ではない。
- CMBS の発行量は 2008 以降に急減し、部分的にしか回復していない。[[structured-finance/japan-cmbs-issuance-structure]] を参照。
- オートローン ABS とカード債権 ABS の発行量は意味のある規模だが、JHF MBS エンジンに比べれば小さい。

## 5. 格付機関の基準

- JCR と R&I が、ストラクチャードディールにおける日本国内の支配的な格付機関である。
- 両社のストラクチャード・ファイナンス手法は、ABS、RMBS、CMBS、証券化 SPC をカバーする。
- 両社とも FSA の指定のもとで NRSRO 相当である。[[structured-finance/credit-rating-methodology-jcr-r-and-i]] を参照。
- クロスボーダーディールでは、典型的に S&P、Moody's、Fitch が JCR または R&I と並んで格付けを行う。

## 6. 2008 以降の変遷

| 時期 | パターン |
|---|---|
| 2003-2007 | CMBS と RMBS の発行量が積み上がり、アグレッシブなストラクチャリング; コンデュイットディールが一般的。 |
| 2008-2010 | CMBS 市場は実質的に閉鎖; 2007年ヴィンテージのディールでデフォルト; 格下げ。 |
| 2010-2015 | JHF MBS エンジンは継続; 民間市場は低調; 保守的な構造のみ。 |
| 2015-2020 | 選択的な復活; メガバンクによるジャンボ民間 RMBS; オート／消費者 ABS は堅調。 |
| 2020年代 | 物流倉庫やオフィスのシングルボロワーディールでの CMBS 復活; 消費者金融 ABS が活発。 |

## 7. なぜ重要か

- 日本のストラクチャード・ファイナンス市場は二極化している：非常に大きな公的信用エンジン（JHF MBS）と、より小規模で保守的な民間層である。
- JHF MBS 層が円建てストラクチャード・ペーパーの供給と価格形成の大部分を牽引する; 民間ディールはそれに対する相対値で価格付けされる。
- 2008 以降のリセットにより、日本は先進国市場の中でも最も保守的なストラクチャリング慣行のひとつを持つに至った — CMBS 固有の経緯については [[structured-finance/japan-cmbs-issuance-structure]] を参照。
- 投資家ベースは、生命保険会社（[[life-insurers/daido-life]], [[life-insurers/asahi-life]] など）、地方銀行、JGB プラスの利回りを求めるアセットマネージャーが支配している。

## 関連

- [[structured-finance/INDEX]]
- [[structured-finance/jhf-mbs-mechanics]]
- [[structured-finance/japan-rmbs-issuance-structure]]
- [[structured-finance/japan-cmbs-issuance-structure]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[policy-finance/japan-housing-finance-agency]]
- [[real-estate-finance/INDEX]]
- [[banking/INDEX]]

## 出典

- 住宅金融支援機構, 公開 IR。
- JCR（日本格付研究所）, ストラクチャード・ファイナンス基準ページ。
- R&I（格付投資情報センター）, ストラクチャード・ファイナンス手法。
- JSDA（日本証券業協会）。
- ASF Japan（証券化フォーラム・ジャパン）。
- メガバンク IR（MUFG, SMFG, みずほ FG）。
