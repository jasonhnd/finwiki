---
source: structured-finance/japan-abs-market-overview
source_hash: 2433adf2a6dee3a6
lang: ja
status: machine
fidelity: ok
title: "Japan ABS market overview"
translated_at: 2026-06-03T00:53:08.305Z
---

# Japan ABS market overview

## 要約

日本の資産担保証券市場は、大まかに 3 つの層に分かれています。1 つは非常に大規模な JHF MBS 層（住宅金融支援機構、政府支援のシニア層）、民間 RMBS 層（メガバンクや信託銀行が組成するジャンボ住宅ローンプール）、そして TK-GK SPV または特定目的会社を通じて発行される消費者/自動車/CMBS/プロジェクト層です。 2008 以降、CMBS側では発行額が急激に減少した。 JHF MBS エンジンは引き続き稼働し、現在では円建ての構造化紙の主流を占めています。 このページは、[[structured-finance/INDEX]] のルーティング サーフェスとして使用され、[[structured-finance/INDEX]] の発信元企業のページをこのドメインの構造メカニズムに接続します。

## ウィキ上の位置づけ

| You want | Go to |
|---|---|
| The JHF MBS engine | [[structured-finance/jhf-mbs-mechanics]] |
| Private RMBS structure | [[structured-finance/japan-rmbs-issuance-structure]] |
| CMBS structure | [[structured-finance/japan-cmbs-issuance-structure]] |
| Auto-loan ABS | [[structured-finance/auto-loan-abs-japan-toyota-honda]] |
| Consumer / card ABS | [[structured-finance/consumer-loan-abs-japan-card-issuer]] |
| SPV vehicle choice | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| JHF vs private spread | [[structured-finance/jhf-mbs-vs-private-rmbs-spread]] |

## 1. Market layer map

| レイヤー |代表的な発行者 | ビークル |おおよそのボリュームチルト |
|---|---|---|---|
| JHF MBS | [[policy-finance/japan-housing-finance-agency]] | JHFトラスト |最大の円構造層 |
|プライベートRMBS |メガバンク（[[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]）、信託銀行 |信託受益権 |中規模、不定期の公共セール |
| CMBS | Real-estate sponsors, megabanks | TMK or TK-GK | 2008,  で成長する小さなポスト 2020 |
| Auto-loan ABS | [[card-issuers/toyota-finance]]、[[leasing-firms/toyota-financial]]、ホンダファイナンス、日産クレジット | TK-GK | リピート発行者、詳細なプール |
| Consumer / card ABS | [[card-issuers/orico]]、[[card-issuers/jaccs]]、[[card-issuers/aplus]]、[[card-issuers/mufg-nicos]] | TK-GKまたはトラスト | 回転構造物が一般的 |
| リースABS | [[leasing-firms/mitsubishi-hc-capital]]、その他リース会社 | 信頼 | リースプールの残存価値リスク |
| プロジェクト/インフラ | スポンサーSPC | TMK or TK-GK | ニッチ、ディールバイディール |

## 2. Originator landscape

- **銀行**: メガバンク ([[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]]) および大手信託銀行は、ジャンボ住宅ローンおよび企業ローン担保を提供しています。発信側については[[banking/INDEX]]を参照してください。
- **自動車金融会社**: トヨタファイナンス、トヨタファイナンシャルサービス、ホンダファイナンス、日産クレジット、SMBCオート、MUFGキャピタルオートローンは、バランスシート管理ツールとしてオートローンABSを発行しています。
- **消費者/カード発行会社**: Aplus、Orico、JACCS、MUFG NICOS、[[card-issuers/jcb]]、[[card-issuers/credit-saison]] は、銀行ラインの資金調達と並行して、カード受取可能な ABS を資金調達ツールとして使用しています。
- **公共部門**: JHF は主要な公的信用発行体です。 [[policy-finance/japan-housing-finance-agency]] および [[structured-finance/jhf-mbs-mechanics]] を参照してください。
- **受託者としての信託銀行**: [[trust-banks/sumitomo-mitsui-trust]] およびその他の信託銀行は信託受益権構造の受託者として機能します。信託銀行の役割は構造的なものであり、オリジネーターではありません。

## 3. Dealer / arranger landscape

| 役割 | 典型的な住宅 |
|---|---|
| リードアレンジャー | [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、野村、ダイワSG（[[securities-firms/daiwa-sg]]）、SMBC日興 |
| 管財人 | [[trust-banks/sumitomo-mitsui-trust]]、三菱UFJ信託、みずほ信託 |
| 格付け会社 | JCR、R&I ([[structured-finance/credit-rating-methodology-jcr-r-and-i]] を参照); S&P、ムーディーズ、フィッチ、クロスボーダー |
| サービサー | オリジネーターまたは関連サービサー。時には専門のスペシャルサービサー |

## 4。市場規模の合計シグナル

- JHF MBS プログラムは毎月発行されており、単一の構造化ペーパーエンジンとしては円ベースで断然最大です。
- 私設RMBSの発行は断続的であり、メガバンクは通常、ジャンボ取引をプログラマティックベースで発行しますが、毎月ではありません。
- CMBS 発行量は 2008  以降急激に減少し、部分的にしか回復していません。 [[structured-finance/japan-cmbs-issuance-structure]]を参照してください。
- オートローン ABS とカード受け取り ABS の量は意味がありますが、JHF MBS エンジンと比較すると小さいです。

## 5. Rating-agency criteria

- JCR と R&I は、ストラクチャード・ディールに関する日本国内の有力な格付け会社です。
- 彼らのストラクチャード・ファイナンス手法は、ABS、RMBS、CMBS、証券化 SPC をカバーしています。
- どちらも FSA 指定の下では NRSRO に相当します。 [[structured-finance/credit-rating-methodology-jcr-r-and-i]]を参照してください。
- 国境を越えた取引の場合、S&P、ムーディーズ、フィッチは通常、JCR または R&I と同等の格付けを行います。

## 6. Post-2008 evolution

| 期間 | パターン |
|---|---|
| 2003-2007 | CMBS および RMBS ボリュームの構築。積極的な構造化。導管取引が一般的です。 |
| 2008-2010 | CMBS市場は実質的に閉鎖。デフォルトは2007-ヴィンテージ取引です。評価の引き下げ。 |
| 2010-2015 | JHF MBS エンジンは継続します。民間市場は抑制されている。保守的な構造のみ。 |
| 2015-2020 | 選択的復活。メガバンクによるジャンボプライベートRMBS。自動車/民生用 ABS は安定しています。 |
| 2020 | 物流倉庫とオフィスの単一借り手取引でCMBSが復活。消費者金融 ABS がアクティブです。 |

## 7. 重要な理由

- 日本のストラクチャード・ファイナンス市場は、非常に大規模な公的信用機関 (JHF MBS) と、小規模で保守的な民間層の 2 つに分かれています。
- JHF MBS レイヤーは、円の構造化紙の供給と価格設定のほとんどを推進しています。それに対するプライベート取引の価格。
- 2008  リセット後の日本には、先進国市場で最も保守的な構造規則の 1 つが残されました。CMBS 固有の話については、[[structured-finance/japan-cmbs-issuance-structure]] を参照してください。
- 投資家ベースは、国債を上回る利回りを求める生命保険会社（[[life-insurers/daido-life]]、[[life-insurers/asahi-life]]など）、地方銀行、資産運用会社が大半を占めています。

## 関連項目

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

- Japan Housing Finance Agency, public IR.
- JCR (Japan Credit Rating Agency), structured-finance criteria pages.
- R&I (Rating and Investment Information), structured-finance methodology.
- JSDA (Japan Securities Dealers Association).
- ASF Japan (Asset Securitization Forum Japan).
- Megabank IR (MUFG, SMFG, Mizuho FG).
