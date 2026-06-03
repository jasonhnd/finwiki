---
source: banking/daiwa-next-bank
source_hash: 21c66b09d7db169c
lang: ja
status: machine
fidelity: ok
title: "大和ネクスト銀行 事業プロファイル(大和ネクスト銀行)"
translated_at: 2026-06-02T11:47:37.293Z
---

# 大和ネクスト銀行 事業プロファイル(大和ネクスト銀行)

## ウィキ上の位置づけ

本項目は [[banking/INDEX|banking index]] の下に、[[JapanFG/daiwa-next-bank|大和ネクスト銀行 entity anchor]] のエンティティ・アンカーに対応する事業プロファイルの伴侶として位置する。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメントマップの中で、親会社の文脈は [[JapanFG/daiwa-sg|Daiwa Securities Group]]、統合予定の [[JapanFG/orix-bank|Orix Bank]] ページとともに、証券隣接のネット銀行のピアである [[banking/sony-bank|Sony Bank]] および証券会社系銀行のコホート [[banking/rakuten-bank|Rakuten Bank]]([[JapanFG/rakuten-securities|Rakuten Securities]] にリンク)· [[banking/au-jibun-bank|au Jibun Bank]]([[JapanFG/au-kabucom-securities|au Kabucom]] にリンク)· [[JapanFG/ssnb|SSNB]]([[JapanFG/sbi-securities|SBI Securities]] にリンク)と照らし合わせて読まれたい。証券側の比較対照については [[securities/INDEX|securities index]] を経由し、MRF(マネー・リザーブ・ファンド)と銀行のスイープ預金のメカニクスの統合については [[securities/japan-online-brokerage-competition|Japan online brokerage competition]] を経由されたい。

## 要約

大和ネクスト銀行株式会社(Daiwa Next Bank, Ltd.)は、[[JapanFG/daiwa-sg|Daiwa Securities Group, Inc.]](東証プライム 8601)の完全子会社である銀行子会社である。それは大和側における **証券・銀行ハイブリッド** のアンカーであり、[[JapanFG/ssnb|SSNB]](SBI)、[[banking/au-jibun-bank|au Jibun Bank]](KDDI / 三菱UFJ)、[[banking/rakuten-bank|Rakuten Bank]](楽天証券との隣接性)のアーキテクチャ・パターンを映している。そのフランチャイズは **証券のキャッシュフローを銀行業務に統合する** ことを中心に構築されている — 大和証券口座とのスイープ預金の連携、外貨建て投信の販売を補完する多通貨預金のサポート、そして主に大和証券の口座顧客から構築された約 5.06 兆円(2026-03-31年時点で、円および外貨預金の合計、2,288 千口座にわたる 5,063.7 億円)の預金基盤である。**2026-04-27** に、大和証券グループ / 大和ネクスト銀行は [[JapanFG/orix-bank|Orix Bank]] を完全子会社とすることで合意したと発表し、グループの銀行側のバランスシート、住宅ローンの組成、信託銀行の選択肢を大幅に拡大した — これは 2011 年の設立以来、大和ネクスト銀行にとって最も重大な戦略的動きである。^[extracted]

## 1. アイデンティティとグループ内の位置

| 項目 | 内容 |
|---|---|
| 法人名 | 株式会社大和ネクスト銀行 |
| 英文名 | Daiwa Next Bank, Ltd. |
| 開業 | 2011-05 |
| 銀行免許の区分 | 普通銀行(銀行法上の普通銀行)、FSAの「その他の銀行」に分類 |
| 親会社 | [[JapanFG/daiwa-sg|Daiwa Securities Group, Inc. (TSE Prime 8601)]](100%) |
| 進行中の買収 | [[JapanFG/orix-bank|Orix Bank]] — オリックス銀行を大和ネクスト銀行 / 大和証券グループの完全子会社とする合意を 2026-04-27 に発表 ^[extracted] |
| 証券の兄弟会社 | [[JapanFG/daiwa-securities|大和証券]] — グループ内の主要な証券営業会社 |
| 本社 | 東京 |
| チャネル・アーキテクチャ | アプリ + ウェブ + 大和証券の店舗を介した証券店頭のクロスタッチ |
| 主要規制当局 | 金融庁(FSA) |

### なぜ証券グループが銀行を作ったのか

1. **MRF(マネー・リザーブ・ファンド)←→ 銀行預金の代替。** 2000年代より前は、証券口座のキャッシュはMRFの投資信託商品に置かれていた。2000 年の改革後は、証券会社が顧客のキャッシュを関連銀行の預金へ振り向けること(スイープ)が可能になった。銀行を所有することで、以前は外部のMMF / MRFの運用者に流れていた預金スプレッドを取り込む。
2. **証券商品とのクロスセル。** すでに投資について大和証券を信頼している顧客は、家計の預金残高を大和ブランドの銀行へ移し、統合的な資産形成のクロスセルを可能にする。
3. **エコシステム銀行による破壊への防御。** [[banking/rakuten-bank|Rakuten Bank]]([[JapanFG/rakuten-securities|Rakuten Securities]] にリンク)および [[JapanFG/ssnb|SSNB]]([[JapanFG/sbi-securities|SBI Securities]] にリンク)が、銀行・証券の統合モデルを標準として確立した。自前の銀行がなければ、大和は顧客の証券キャッシュがそれらのエコシステムへ流出するリスクにさらされていたであろう。

### グループ構造(オリックス銀行買収完了後)

```
大和証券グループ本社(東証プライム 8601)
  ├── 大和証券(証券営業会社)
  ├── 大和ネクスト銀行(本項目 — ネット銀行)
  │     └── (予定)[[JapanFG/orix-bank|Orix Bank, Ltd.]](2026-04-27 に発表された取引のクローズをもって完全子会社) ^[extracted]
  ├── [[JapanFG/daiwa-asset-management|Daiwa Asset Management]]
  ├── [[JapanFG/daiwa-living-trust|Daiwa Living Trust]]
  └── その他のグループ子会社(PB、IB、ITなど)
```

### 証券連携の預金コア(MRF / スイープのメカニクス)

特徴的な商品の軸は、大和証券のキャッシュマネジメントとの統合である:

| メカニズム | 機能 |
|---|---|
| スイープ預金 | 大和証券口座内のキャッシュが、非取引期間中に大和ネクスト銀行の預金へスイープされ、一部の期間ではMRFより高い利息を得る |
| 取引決済のキャッシュフロー | 証券売却の代金が、連携する大和ネクスト銀行口座を通じて入金される |
| MRFの代替 | MRFの歴史的な役割は、銀行・証券の統合モデルにおいてスイープ預金のメカニクスに部分的に吸収される |
| 多通貨のサポート | 大和証券における外貨建て投信 / 外貨建て債券の販売を補完する外貨預金商品 |

### 円および外貨預金

| 商品 | 役割 |
|---|---|
| 円普通預金 | コア口座;スイープのフローとバランスをとる |
| 円定期預金 | 証券顧客の獲得サイクルに合わせたプロモーション金利 |
| 外貨預金 | USD、EUR、AUDその他の通貨 — 外貨建ての投資商品を補完するよう設計 |
| 外貨定期預金 | 期間に合わせた商品メニュー |

### 資産形成サポート

同行のポジショニングは、決済頻度型の銀行業務ではなく、明示的に **資産形成サポート** である:

- 自前の主要なクレジットカードのフランチャイズはない — 決済頻度の勝負は戦略的な軸ではない。
- 限定的な消費者向け融資の商品セット — 大和証券が対応する富裕層 / マスアフルエント層の顧客セグメントに焦点を当てている。

### チャネル・アーキテクチャ:証券・銀行ハイブリッド

純粋なオンライン専業のネット銀行とは異なり、大和ネクスト銀行は3つのチャネルを通じて顧客に接触できる:

| チャネル | 役割 |
|---|---|
| モバイルアプリ + ウェブ | オンラインでの預金 / 振込 / FX / 定期預金の操作 |
| 大和証券の店頭 | 証券の対面接点でのクロス紹介 |
| 大和証券のリレーションシップ・オフィサー | マスアフルエント層の顧客向けのウェルスマネジメント型の紹介 |

### 発表された内容

**2026-04-27** に、大和証券グループ / 大和ネクスト銀行は [[JapanFG/orix-bank|Orix Bank, Ltd.]] を完全子会社とする合意を開示した。クロージングは規制当局の承認を条件とする。^[extracted]

### この取引が重要な理由

1. 大和ネクスト銀行が自前では構築していなかった **住宅ローンの組成能力を追加する**。
2. 証券連携の預金および証券投資を超えて、不動産担保の信用へと **銀行側の資産構成を多様化する**。
3. オリックス銀行の信託商品を通じて、[[JapanFG/daiwa-living-trust|Daiwa Living Trust]] を補完する **信託銀行の機能を提供する**。
4. 連結ベースの銀行保有の **預金基盤を大幅に増加させる**。

### 統合運営に関する論点

- 一つの免許の下での **単一の合併銀行**(大和ネクスト銀行 + オリックス銀行を運営上統合)。
- 二つの免許による **姉妹銀行構造**(オリックス銀行を、住宅ローンおよび不動産融資に特化した、大和証券グループの別個の営業子会社として維持)。
- 大和ネクストに預金および証券キャッシュ・マネジメントを、オリックス銀行に住宅ローンおよび不動産融資を、同一の持株会社の下で配置する **フランチャイズの分割**。

この選択は公式には確認されておらず、連結戦略にとっての重要な未解決の論点である。

## 4. KPIの形状

大和ネクスト銀行は定期的な開示(銀行法で求められる標準的なディスクロージャー誌)を公表しており、KPIの更新は大和証券グループの四半期IRサイクルに現れる。

| 指標 | パターン |
|---|---|
| 預金残高 | 約 5.06 兆円(2026-03-31年時点で 5,063.7 億円 / 2,288 千口座、円 + 外貨の合計、オリックス銀行の連結前);取引のクローズ後は大幅に増加 |
| 外貨預金比率 | 証券連携のFX商品の補完性を反映し、純粋な円のネット銀行より高い |
| 貸出残高 | 歴史的に控えめ;オリックス銀行の連結により大幅に拡大 |
| ROE | 単独ベースでは控えめ;証券グループのクロスセルの規模の経済から資本効率の便益を得る |
| 資本 | 銀行法の最低水準を十分に上回る |

### 証券・銀行ハイブリッドのコホート

| グループ | 銀行 | 証券 | アーキテクチャ |
|---|---|---|---|
| **大和証券グループ** | **大和ネクスト銀行** | 大和証券 | 証券をアンカーとする銀行;オリックス銀行の連結を通じて拡大中 |
| 三井住友トラスト + SBI(旧 住信SBI) | [[JapanFG/ssnb|SSNB / NEOBANK]] | [[JapanFG/sbi-securities|SBI Securities]] | 純粋なオンライン + BaaSパートナーのアーキテクチャ |
| KDDI + MUFG | [[banking/au-jibun-bank|au Jibun Bank]] | [[JapanFG/au-kabucom-securities|au Kabucom Securities]] | 通信をアンカーとするエコシステムの銀行・証券連携 |
| 楽天 | [[banking/rakuten-bank|Rakuten Bank]] | [[JapanFG/rakuten-securities|Rakuten Securities]] | 商取引をアンカーとするエコシステムの銀行・証券連携 |

### 大和ネクストが競合しない領域

- **エコシステムポイントの決済頻度。** 楽天 / PayPay / au の規模に匹敵する自前のポイント経済はない。
- **純粋なSME / 法人向けAPI。** そのアーキテクチャではない — それは [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] のレーンである。
- **スマートフォン専業のマス獲得。** フランチャイズは既存の大和証券の顧客をアンカーとしており、広範なスマートフォンファーストの獲得ではない。

## 6. 規制・政策の境界

| レイヤー | 法令 / 規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | 標準的な普通銀行の監督 |
| 証券のクロスセル | 金融商品取引法 — 投信の販売および証券キャッシュ・マネジメント向け | 標準的な適合性および開示の義務;スイープ預金のメカニクスは特定のFSAガイダンスの下 |
| 持株グループの連結 | 金融商品取引法 + 銀行法 持株会社ルール | 大和証券グループを通じた連結監督 |
| 外貨預金 | FSA + 日銀統計 + AML | 国境を越えるAMLが適用される |
| 預金保険 | 預金保険機構 | 円預金の保護が適用される |
| 進行中のオリックス銀行買収 | 銀行法第52条 + 独占禁止法 審査 | FSAの承認および独占禁止法上のクリアランスの対象 |

## 関連項目

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/sony-bank]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/ui-bank]]
- [[JapanFG/daiwa-next-bank]]
- [[JapanFG/daiwa-sg]]
- [[JapanFG/orix-bank]]
- [[JapanFG/daiwa-asset-management]]
- [[JapanFG/daiwa-living-trust]]
- [[JapanFG/ssnb]]
- [[JapanFG/sbi-securities]]
- [[JapanFG/au-kabucom-securities]]
- [[JapanFG/rakuten-securities]]
- [[securities/INDEX]]
- [[securities/japan-online-brokerage-competition]]

## 出典

- 大和ネクスト銀行 企業サイト(https://www.bank-daiwa.co.jp/)。
- 大和ネクスト銀行 会社概要(https://www.bank-daiwa.co.jp/about/company/profile/)。
- 大和ネクスト銀行 ディスクロージャー / プレスページ(https://www.bank-daiwa.co.jp/info/)。
- 大和ネクスト銀行 口座数・預金残高の推移:2026-03-31年時点で預金 5,063.7 億円 / 2,288 千口座、グループ会社預金を含む円 + 外貨の合計(https://www.bank-daiwa.co.jp/about/disclosure/transition/)。
- 大和証券グループ 企業 / IRサイト(https://www.daiwa-grp.jp/、https://www.daiwa-grp.jp/ir/)。
- 大和証券グループ / 大和ネクスト銀行のオリックス銀行買収に関する発表(2026-04-27)。
- FSAの免許銀行一覧(https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx)。
