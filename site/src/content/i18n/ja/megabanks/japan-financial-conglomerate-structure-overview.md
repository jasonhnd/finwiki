---
source: japanfg/japan-financial-conglomerate-structure-overview
source_hash: 0c9309d16b515125
lang: ja
status: machine
fidelity: ok
title: "日本の金融コングロマリット構造概観"
translated_at: 2026-06-02T14:25:12.409Z
---

# 日本の金融コングロマリット構造概観

## 要約

**日本の金融コングロマリット**（金融グループ）とは、単一の最終親会社、典型的には **金融持株会社**（FHC）の下に、規制対象となる複数の金融エンティティを組織したグループを指す。銀行、信託、証券、保険、決済、消費者金融、資産運用、そして近年は暗号資産 / デジタル資産関連会社までを、共通の所有とガバナンスの下に統合する。

日本の金融コングロマリットは、次の6クラスターで整理できる。

1. **メガバンク FG**（3 社）— MUFG、SMFG、みずほ FG。グローバル G-SIB 指定を受けるユニバーサルバンク型フランチャイズ。
2. **信託主導 FG**（2 社）— 三井住友トラスト HD、三菱 UFJ 信託銀行（MUFG 内）。資産管理と年金信託を中核とする。
3. **郵政・公的金融 FG**（3 社）— ゆうちょ銀行とかんぽ生命を傘下に置く日本郵政グループ、農林中央金庫、政策金融機関としての JFC / JBIC / DBJ。
4. **通信・決済 FG**（4 社）— au FH（KDDI）、PayPay FG（SoftBank / LY）、Rakuten FG、Sony FG、NTT Docomo FG（ndfg）。通信または EC を起点に、銀行 / 証券 / 保険 / 決済ライセンスを統合しつつある。
5. **独立系証券・資産運用 FG**（3社以上）— Nomura HD、Daiwa SG、SBI HD。証券を起点に、銀行機能と資産運用機能を隣接領域として持つ。
6. **地域銀行 FG**（20社以上）— Concordia FG、Mebuki FG、Yamaguchi FG、Fukuoka FG、Kyushu FG、Kyoto FG、Hokuhoku FG、Shizuoka FG など。複数の地域銀行を単一の持株会社の下に統合している。

本項目は、持株会社構造、FSA の金融コングロマリット監督枠組み、そして日本の FG 構造が現在の形になった構造的理由を横断的に説明するアンカーである。

## ウィキ上の位置づけ

本項目は [[JapanFG/INDEX|JapanFG namespace index]] の配下に横断的概観として置く。ライセンス階層の重ね合わせは [[banking/japan-banking-license-tier-comparison-matrix]]、ライセンススタックのカタログは [[financial-licenses/INDEX|JapanFG legal-license INDEX]]、上場 FG の投資対象ユニバースは [[finance/japan-listed-financial-groups-investable-universe]]、地域銀行統合の系譜は [[banking/japan-regional-bank-m-a-consolidation-family-tree-matrix]] と組み合わせて読む。

### 1. メガバンク FG（G-SIB 階層）

| 主体 | 持株会社 | 銀行 | 証券 | 信託 | その他 | G-SIB bucket |
|---|---|---|---|---|---|---|
| [[megabanks/mufg|MUFG]] | Mitsubishi UFJ FG | [[megabanks/mufg-bank|MUFG Bank]] | [[securities-firms/mufg-mums|Mitsubishi UFJ Morgan Stanley Securities]] (JV with Morgan Stanley) | Mitsubishi UFJ 信託 and 銀行ing | [[card-issuers/mufg-nicos|MUFG Nicos]] (card), [[asset-managers/mufg-asset-management|MUFG Asset Management]], Acom | 1 |
| [[megabanks/smfg|SMFG]] | Sumitomo Mitsui FG | [[megabanks/sumitomo-mitsui-banking-corp|SMBC]] | [[securities-firms/smbc-nikko|SMBC Nikko Securities]] | SMBC 信託 銀行 | SMCC (card), Sumitomo Mitsui DS Asset Management | 1 |
| [[megabanks/mizuho-fg|Mizuho FG]] | Mizuho FG | [[megabanks/mizuho-bank|Mizuho Bank]] | Mizuho 証券 | Mizuho 信託 and 銀行ing | Mizuho-DL Financial Technology, Asset Management One | 1 |

3グループはいずれも FSB 指定の G-SIB で、Bucket 1 に属する。商業銀行 + 投資銀行 + 信託 + 資産運用 + カード + 消費者金融 + グローバル事業を組み合わせたユニバーサルバンク・モデルを運営する。

### 2. 信託主導 FG（独立信託系）

| 主体 | 持株会社 | 信託 bank | 専門領域 |
|---|---|---|---|
| [[trust-banks/sumitomo-mitsui-trust|SuMi Trust HD]] | Sumitomo Mitsui 信託 持株会社s | Sumitomo Mitsui 信託 銀行 | 年金信託、マスタートラスト / カストディ、不動産信託、資産管理。 |

SuMi 信託 is structurally separate from SMFG — they are not the same group despite the similar naming. SuMi 信託 is the largest pure-trust group in Japan. See [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]] for the custody-comparison and [[banking/japan-master-trust-and-custody-bank-landscape]] for the master-trust landscape.

### 3. 郵政・政策金融機関

| 主体 | 種別 | 範囲 |
|---|---|---|
| [[megabanks/nippon-post|Nippon Post (Japan Post Holdings)]] | Postal HD | [[regional-banks/yucho|Yucho Bank]]（日本最大級の預金銀行）と [[life-insurers/kampo-life|Kampo Life]] を連結する。 |
| [[cooperative-banks/norinchukin|Norinchukin Bank]] | Cooperative central bank | The central bank for the JA 銀行 / JF Marine 銀行 cooperative system. World's largest cooperative bank by assets. See [[banking/ja-bank-system-japan]] and [[banking/jf-marine-bank-system-japan]]. |
| [[financial-regulators/jfc|JFC]] | Policy finance | 国内中小企業、スタートアップ、農業、教育隣接領域の政策金融。 |
| [[financial-regulators/jbic|JBIC]] | Policy finance | 海外投資、輸出、インフラ、戦略的海外金融。 |
| [[financial-regulators/dbj|DBJ]] | Policy finance | 中堅・大企業向け開発金融。 |

These institutions are public or quasi-public in nature and operate under specific statute rather than the standard FIEA / 銀行ing Act commercial framework. See [[policy-finance/japan-policy-finance-system]] for the system map.

### 4. 通信・決済 FG（通信 / EC 起点のコングロマリット）

| 主体 | 起点 | 銀行 | 証券 | 保険 | 決済 | カード |
|---|---|---|---|---|---|---|
| [[megabanks/au-fh|au FH]] | KDDI（通信） | [[banking/au-jibun-bank|au Jibun Bank]] | au Kabucom 証券 | [[non-life-insurers/au-insurance|au Insurance]] | [[payment-firms/au-payment|au Payment]]（au PAY） | au PAY カード |
| [[megabanks/paypay-fg|PayPay FG]] | SoftBank / LY | [[banking/paypay-bank|PayPay Bank]] | [[securities-firms/paypay-securities|PayPay Securities]] | PayPay 保険 | [[payment-firms/paypay|PayPay]] | [[card-issuers/paypay-card|PayPay Card]] |
| [[payment-firms/rakuten-fg|Rakuten FG]] | Rakuten（EC） | [[banking/rakuten-bank|Rakuten Bank]] | Rakuten 証券（49%に Mizuho FG へ一部売却） | Rakuten Life, Rakuten Non-life | Rakuten Pay | Rakuten カード |
| [[megabanks/sony-fg|Sony FG]] | Sony Group | [[banking/sony-bank|Sony Bank]] | (planned) | [[life-insurers/sony-life|Sony Life]], Sony Assurance | — | — |
| [[megabanks/ndfg|NTT Docomo FG]] | NTT Docomo（通信） | （2026-07に計画） | （計画中） | （計画中） | d 払い（d 決済） | d カード |

これらの FG は、中核となる通信または EC フランチャイズの周囲に金融ライセンスのスタックを構築してきた。典型パターンは、大規模顧客基盤 + ブランド決済を起点に、銀行 / 証券 / 保険 / カードを追加し、顧客ライフサイクルを収益化する流れである。より広いパターンは [[fintech/embedded-wallet-fintech-disintermediation-overview]] を参照。

### 5. 独立系証券・資産運用 FG

| 主体 | 基軸 | 銀行 adjacency | 注記 |
|---|---|---|---|
| [[securities-firms/nomura-hd|Nomura HD]] | Nomura 証券 | Nomura 信託 and 銀行ing (small) | Largest independent 日本語 securities firm; global investment-banking franchise. |
| [[securities-firms/daiwa-sg|Daiwa SG]] | Daiwa 証券 | Daiwa Next 銀行 | Second-largest independent 日本語 securities firm. |
| [[megabanks/sbi-hd|SBI HD]] | SBI 証券 | [[regional-banks/sbi-shinsei-bank|SBI Shinsei Bank]] | オンライン証券主導。新生銀行経由で銀行機能を取得。 |

### 6. 地域銀行 FG

地域銀行 FG（地銀 FG）は、典型的には2行以上の府県銀行を単一の持株会社の下で統合したものを指す。2010 以降の統合パターンにより、こうした FG は 20社以上生まれた。完全な系譜は [[banking/japan-regional-bank-m-a-consolidation-family-tree-matrix]] を参照。

代表例:

| 主体 | 構成銀行 | 基軸 region |
|---|---|---|
| [[regional-banks/concordia-fg|Concordia FG]] | 銀行 of Yokohama + Higashi-Nippon 銀行 | Kanto |
| [[regional-banks/mebuki-fg|Mebuki FG]] | Joyo 銀行 + Ashikaga 銀行 | North Kanto |
| [[regional-banks/yamaguchi-fg|Yamaguchi FG]] | Yamaguchi 銀行 + Momiji 銀行 + Kitakyushu 銀行 | West Honshu / Kyushu |
| [[regional-banks/fukuoka-fg|Fukuoka FG]] | 銀行 of Fukuoka + Kumamoto 銀行 + Juhachi-Shinwa 銀行 + Minna 銀行 | North Kyushu |
| [[regional-banks/kyushu-fg|Kyushu FG]] | Kagoshima 銀行 + Higo 銀行 | South Kyushu |
| [[regional-banks/kyoto-fg|Kyoto FG]] | 銀行 of Kyoto | Kyoto |
| [[regional-banks/hokuhoku-fg|Hokuhoku FG]] | Hokuriku 銀行 + Hokkaido 銀行 | Hokuriku / Hokkaido |
| [[regional-banks/shizuoka-fg|Shizuoka FG]] | Shizuoka 銀行 | Shizuoka |
| [[megabanks/resona-hd|Resona HD]] | Resona 銀行 + Saitama Resona 銀行 + Kansai Mirai 銀行 | Kanto / Kansai |

## FSA による金融コングロマリット監督

FSA は次の仕組みを通じて金融コングロマリットを監督する。

| 仕組み | 機能 |
|---|---|
| 銀行ing Act (銀行法) | FSA 認可の下で銀行持株会社を規律する。 |
| 保険 Business Act (保険業法) | 保険持株会社を規律する。 |
| FIEA (金融商品取引法) | 証券持株会社とコングロマリット開示を規律する。 |
| 金融コングロマリット監督指針 | グループレベルのリスク管理、自己資本十分性、グループ内取引、ガバナンスに関する FSA 指針。 |
| G-SIB / D-SIB designation | 3メガバンクは FSB 指定の G-SIB である。FSA も追加的な資本サーチャージを伴う D-SIB（国内のシステム上重要な銀行）を指定する。 |
| Reverse-stress-test and resolution planning | G-SIB 向け TLAC 要件、および FSA 監督下の再建・破綻処理計画。 |

## 日本の金融コングロマリット構造がこうなった理由

1. **ユニバーサルバンク型持株会社モデル（1998 規制緩和後）** — 日本は、戦前の財閥（直接的なコングロマリット）から戦後の系列（株式持ち合い）へ、さらに 1998 以降は FHC モデルへ移行した。1998 の金融改革（金融ビッグバン）により、持株会社が銀行 / 信託 / 証券 / 保険子会社を統合できるようになった。
2. **ビッグバン後の統合** — 1999〜2005 のメガバンク統合により、十数行あった歴史的都市銀行から現在の3メガバンクが形成された。
3. **地域銀行の統合圧力** — 人口動態と経済環境の圧力により、2010, 以降、地域銀行の統合が継続し、20社以上の地域 FG が生まれた。
4. **通信系 FG の台頭** — 2010年代には、KDDI、SoftBank、Rakuten、Sony などの通信・EC 企業が中核フランチャイズの周囲に金融ライセンスのスタックを構築し、銀行主導ではない並行的な FG クラスターを形成した。
5. **信託銀行の分離** — 信託銀行業は歴史的に独立した信託銀行ライセンスの下で運営され、SuMi Trust が最大の純粋信託グループである。[[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]] を参照。
6. **公的金融の分離** — 郵政、協同組織中央機関、政策金融機関は個別法に基づいて運営され、FIEA / 銀行法上の商業コングロマリットではない。[[policy-finance/japan-policy-finance-system]] を参照。

## 関連

- [[JapanFG/INDEX]]
- [[financial-licenses/INDEX]]
- [[banking/INDEX]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/japan-regional-bank-m-a-consolidation-family-tree-matrix]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/cooperative-banking-japan]]
- [[banking/ja-bank-system-japan]]
- [[banking/jf-marine-bank-system-japan]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[insurance/japan-life-insurance-big-four]]
- [[insurance/japan-nonlife-big-three]]
- [[policy-finance/japan-policy-finance-system]]
- [[policy-finance/japan-policy-finance-institution-mandate-matrix]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[megabanks/au-fh]]
- [[megabanks/paypay-fg]]
- [[payment-firms/rakuten-fg]]
- [[megabanks/sony-fg]]
- [[megabanks/ndfg]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[megabanks/sbi-hd]]
- [[megabanks/nippon-post]]
- [[cooperative-banks/norinchukin]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁 (FSA): 銀行ing Act, 保険 Business Act, FIEA, 金融コングロマリット監督指針, G-SIB / D-SIB designation list.
- 銀行 of Japan (BoJ): Financial System Report, conglomerate-level statistics.
- 金融安定理事会 (FSB): G-SIB list and methodology.
- 銀行 for International Settlements (BIS): Basel III G-SIB framework and capital surcharge.
- 東京証券取引所 (TSE): listed FG disclosure surface for capital adequacy, risk-weighted assets, and intra-group transactions.
- 持株会社 IR リリース: MUFG、SMFG、Mizuho FG、Sumitomo Mitsui Trust HD、Resona HD、Concordia FG、Mebuki FG、Fukuoka FG、Yamaguchi FG、Kyushu FG、Kyoto FG、Hokuhoku FG、Shizuoka FG、au FH、PayPay FG、Rakuten FG、Sony FG、NTT Docomo FG、Nomura HD、Daiwa SG、SBI HD、Nippon Post、Norinchukin Bank。
