---
source: banking/daiwa-next-bank
source_hash: 953cb62e7279a16d
lang: ja
status: machine
fidelity: ok
title: "大和ネクスト銀行 事業プロファイル（大和ネクスト銀行）"
translated_at: 2026-06-22T06:12:59.592Z
---

# 大和ネクスト銀行 事業プロファイル（大和ネクスト銀行）

## ウィキ経路

本エントリは [[banking/INDEX|banking index]] の配下に位置し、[[regional-banks/daiwa-next-bank|大和ネクスト銀行 entity anchor]] にあるエンティティ・アンカーに対する事業プロファイルの補完として置かれている。[[banking/japan-net-bank-competition-map|Japan net bank competition map]] のセグメントマップの中で読み、親コンテキストである [[securities-firms/daiwa-sg|Daiwa Securities Group]] および統合予定の [[trust-banks/orix-bank|Orix Bank]] ページとともに、証券隣接のネット銀行ピア [[banking/sony-bank|Sony Bank]] およびブローカー兼営銀行コホート [[banking/rakuten-bank|Rakuten Bank]]（[[securities-firms/rakuten-securities|Rakuten Securities]] にリンク）・[[banking/au-jibun-bank|au Jibun Bank]]（[[securities-firms/au-kabucom-securities|au Kabucom]] にリンク）・[[regional-banks/ssnb|SSNB]]（[[securities-firms/sbi-securities|SBI Securities]] にリンク）と対比しながら参照すること。ブローカー側の比較経路は [[securities/INDEX|securities index]] を、MRF（マネー・リザーブ・ファンド）と銀行スイープ預金メカニズムの統合は [[securities/japan-online-brokerage-competition|Japan online brokerage competition]] を通じて辿る。

## TL;DR

大和ネクスト銀行（Daiwa Next Bank, Ltd.）は [[securities-firms/daiwa-sg|Daiwa Securities Group, Inc.]]（東証プライム 8601）の完全子会社の銀行子会社である。大和側における**証券・銀行ハイブリッド**のアンカーであり、[[regional-banks/ssnb|SSNB]]（SBI）、[[banking/au-jibun-bank|au Jibun Bank]]（KDDI / 三菱UFJ）、[[banking/rakuten-bank|Rakuten Bank]]（楽天証券隣接）のアーキテクチャ・パターンを写し取っている。そのフランチャイズは**ブローカレッジのキャッシュフローを銀行業へ統合すること**を中心に構築されており、大和証券口座とのスイープ預金連携と、外貨建て投信の販売を補完する多通貨預金サポートを備える。

Deposit / account as-of date: **2026-03-31**。預金基盤は約 5.06 兆円（2,288 千口座にわたる 5,063.7 億円、円・外貨預金合算）で、主に大和証券口座顧客から構築されている。

ORIX Bank acquisition announcement / agreement date: **2026-04-27**。大和証券グループ / 大和ネクスト銀行は [[trust-banks/orix-bank|Orix Bank]] を完全子会社化する合意を発表し、グループの銀行側バランスシート、住宅ローン組成、信託銀行オプションを大幅に拡張した — これは 2011 の創業以来、大和ネクスト銀行にとって最も重大な戦略的動きである。^[extracted]

## 1. アイデンティティとグループ内ポジション

| 項目 | 読み |
|---|---|
| 正式名称 | 株式会社大和ネクスト銀行 |
| 英語名称 | Daiwa Next Bank, Ltd. |
| 開業 | 2011-05 |
| 銀行免許区分 | 普通銀行（銀行法に基づく普通銀行）、FSA「その他の銀行」に分類 |
| 親会社 | [[securities-firms/daiwa-sg|Daiwa Securities Group, Inc. (TSE Prime 8601)]]（100%） |
| 進行中の買収 | [[trust-banks/orix-bank|Orix Bank]] — オリックス銀行を大和ネクスト銀行 / 大和証券グループの完全子会社とする合意を 2026-04-27 に発表 ^[extracted] |
| ブローカレッジ姉妹会社 | [[securities-firms/daiwa-securities|大和証券]] — グループ内の主たるブローカレッジ事業会社 |
| 本店 | 東京 |
| チャネル・アーキテクチャ | 大和証券の支店を通じたアプリ + ウェブ + ブローカレッジ窓口のクロスタッチ |
| 主管規制当局 | 金融庁（FSA） |

### 証券グループがなぜ銀行を設立したのか

1. **MRF（マネー・リザーブ・ファンド）←→ 銀行預金の代替。** 2000年代以前、ブローカレッジ口座の余剰資金は MRF 投資信託商品に置かれていた。2000 年以後の改革により、ブローカレッジは顧客資金を系列銀行の預金へ振り向けること（スイープ）が可能になった。銀行を所有することで、従来は外部の MMF / MRF 運用会社へ流れていた預金スプレッドを取り込める。
2. **ブローカレッジ商品とのクロスセル。** すでに投資について大和証券を信頼している顧客は、世帯の預金残高を大和ブランドの銀行へ移し、統合された資産形成クロスセルを可能にする。
3. **エコシステム銀行による破壊への防衛。** [[banking/rakuten-bank|Rakuten Bank]]（[[securities-firms/rakuten-securities|Rakuten Securities]] にリンク）と [[regional-banks/ssnb|SSNB]]（[[securities-firms/sbi-securities|SBI Securities]] にリンク）は、銀行・ブローカー統合モデルを標準として確立した。自前の銀行を持たなければ、大和は自社顧客のブローカレッジ資金がそれらのエコシステムへ流出するリスクにさらされていただろう。

### グループ構造（オリックス銀行買収完了後）

```
Daiwa Securities Group, Inc. (TSE Prime 8601)
  ├── 大和証券 (Daiwa Securities, brokerage operating company)
  ├── 大和ネクスト銀行 (this entry — net bank)
  │     └── (planned) [[trust-banks/orix-bank|Orix Bank, Ltd.]] (wholly-owned subsidiary upon close of 2026-04-27 announced transaction) ^[extracted]
  ├── [[asset-managers/daiwa-asset-management|Daiwa Asset Management]]
  ├── [[trust-banks/daiwa-living-trust|Daiwa Living Trust]]
  └── Other group subsidiaries (PB, IB, IT, etc.)
```

### ブローカレッジ連動の預金コア（MRF / スイープ メカニズム）

決定的な商品軸は、大和証券のキャッシュマネジメントとの統合である。

| メカニズム | 機能 |
|---|---|
| スイープ預金 | 大和証券口座の資金は非取引期間中に大和ネクスト銀行の預金へスイープされ、一部期間では MRF より高い利息を稼ぐ |
| 取引決済キャッシュフロー | 証券売却の代金が連携した大和ネクスト銀行口座を通じて入金される |
| MRF の代替 | MRF の歴史的役割は、銀行・ブローカー統合モデルにおいてスイープ預金メカニズムに部分的に吸収される |
| 多通貨サポート | 大和証券における外貨建て投信 / 外貨建て債券の販売を補完する外貨預金商品 |

### 円・外貨預金

| 商品 | 役割 |
|---|---|
| 円普通預金 | コア口座；スイープフローとバランスをとる |
| 円定期預金 | ブローカレッジ顧客獲得サイクルに合わせたプロモーション金利 |
| 外貨預金 | USD、EUR、AUD その他の通貨 — 外貨建て投資商品を補完するよう設計 |
| 外貨定期預金 | 期間別にマッチした商品メニュー |

### 資産形成サポート

本行のポジショニングは明示的に、決済頻度型バンキングではなく**資産形成サポート**である。

- 自前の主要なクレジットカード・フランチャイズを持たない — 決済頻度型のプレーは戦略軸ではない。
- 限定的な消費者向け貸出の商品セット — 大和証券が対象とする富裕層 / マスアフルエント顧客セグメントに集中。

### チャネル・アーキテクチャ：証券・銀行ハイブリッド

純粋なオンライン・ネット銀行とは異なり、大和ネクスト銀行は3つのチャネルを通じて顧客に接触できる。

| チャネル | 役割 |
|---|---|
| モバイルアプリ + ウェブ | オンラインでの預金 / 振込 / FX / 定期預金の操作 |
| 大和証券支店窓口 | ブローカレッジの対面接点におけるクロス紹介 |
| 大和証券リレーションシップ・オフィサー | マスアフルエント顧客向けのウェルスマネジメント型紹介 |

### 何が発表されたか

**2026-04-27**、大和証券グループ / 大和ネクスト銀行は [[trust-banks/orix-bank|Orix Bank, Ltd.]] を完全子会社化する合意を開示し、クロージングは規制当局の承認を条件とした。^[extracted]

### なぜこのディールが重要か

1. **住宅ローン組成能力の追加。** 大和ネクスト銀行が自前では構築してこなかったもの。
2. **銀行側資産ミックスの多様化。** ブローカレッジ連動預金や証券投資を超えて、不動産担保信用へ拡大。
3. **信託銀行機能の提供。** オリックス銀行の信託商品を通じて [[trust-banks/daiwa-living-trust|Daiwa Living Trust]] を補完する。
4. **連結銀行保有の預金基盤を大幅に増加させる。**

### 事業統合に関する論点

- **単一の統合銀行** を一つの免許の下で（大和ネクスト銀行 + オリックス銀行が事業上統合）。
- **姉妹銀行構造** を二つの免許で（オリックス銀行を大和証券グループの別個の事業子会社として維持し、住宅ローンと不動産ローンに特化）。
- **フランチャイズ分割** — 預金と証券資金の管理を大和ネクストで、住宅ローンと不動産ローンを同一持株会社下のオリックス銀行で。

この選択は公に確認されておらず、連結戦略にとって重要な未解決の論点である。

## 4. KPI の形状

大和ネクスト銀行は定期的な開示（銀行法で求められる標準的なディスクロージャー誌）を公表しており、KPI 更新は大和証券グループの四半期 IR サイクルの中で現れる。

| 指標 | パターン |
|---|---|
| 預金残高 | 約 5.06 兆円（2026-03-31時点で 5,063.7 億円 / 2,288 千口座、円 + 外貨合算、オリックス銀行連結前）；ディール完了後は大幅に増加 |
| 外貨預金比率 | ブローカレッジ連動の FX 商品の補完性を反映し、純粋な円建てネット銀行より高い |
| 貸出残高 | 歴史的に控えめ；オリックス銀行連結により大幅に拡大 |
| ROE | 単体ベースでは控えめ；証券グループのクロスセル経済から資本効率の便益を得る |
| 自己資本 | 銀行法の最低水準を十分に上回る |

### 証券・銀行ハイブリッド コホート

| グループ | 銀行 | ブローカレッジ | アーキテクチャ |
|---|---|---|---|
| **大和証券グループ** | **大和ネクスト銀行** | 大和証券 | ブローカレッジを軸とした銀行；オリックス銀行連結により拡大中 |
| 三井住友トラスト + SBI（旧 住信SBI） | [[regional-banks/ssnb|SSNB / NEOBANK]] | [[securities-firms/sbi-securities|SBI Securities]] | 純粋オンライン + BaaS パートナー・アーキテクチャ |
| KDDI + MUFG | [[banking/au-jibun-bank|au Jibun Bank]] | [[securities-firms/au-kabucom-securities|au Kabucom Securities]] | テレコムを軸としたエコシステム銀行・ブローカー連携 |
| 楽天 | [[banking/rakuten-bank|Rakuten Bank]] | [[securities-firms/rakuten-securities|Rakuten Securities]] | コマースを軸としたエコシステム銀行・ブローカー連携 |

### 大和ネクストが競合しない領域

- **エコシステム・ポイントの決済頻度。** 楽天 / PayPay / au の規模のキャプティブなポイント経済を持たない。
- **純粋な SME / 法人 API。** そのアーキテクチャではない — それは [[banking/gmo-aozora-net-bank|GMO Aozora Net Bank]] の領域である。
- **スマートフォン専業のマス獲得。** フランチャイズは既存の大和証券顧客を軸としており、広範なスマートフォンファーストの獲得を軸としていない。

## 6. 規制・政策の境界

| レイヤー | 法令 / 規制当局 | 含意 |
|---|---|---|
| 銀行監督 | 銀行法 + 金融庁 監督指針 | 標準的な普通銀行監督 |
| 証券クロスセル | 金融商品取引法 — 投信販売およびブローカレッジ資金管理について | 標準的な適合性・開示義務；スイープ預金メカニズムは特定の FSA ガイダンスの下 |
| 持株グループ連結 | 金融商品取引法 + 銀行法 持株会社ルール | 大和証券グループを通じた連結監督 |
| 外貨預金 | FSA + 日銀統計 + AML | クロスボーダー AML が適用される |
| 預金保険 | 預金保険機構 | 円預金の保護が適用される |
| 進行中のオリックス銀行買収 | 銀行法第52条 + 独占禁止法 審査 | FSA 承認と独占禁止法のクリアランスを条件とする |

## 関連

- [[banking/INDEX]]
- [[banking/japan-net-bank-competition-map]]
- [[banking/post-megabank-positioning]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[banking/sony-bank]]
- [[banking/rakuten-bank]] · [[banking/paypay-bank]] · [[banking/au-jibun-bank]]
- [[banking/gmo-aozora-net-bank]]
- [[banking/ui-bank]]
- [[regional-banks/daiwa-next-bank]]
- [[securities-firms/daiwa-sg]]
- [[trust-banks/orix-bank]]
- [[asset-managers/daiwa-asset-management]]
- [[trust-banks/daiwa-living-trust]]
- [[regional-banks/ssnb]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/au-kabucom-securities]]
- [[securities-firms/rakuten-securities]]
- [[securities/INDEX]]
- [[securities/japan-online-brokerage-competition]]

## 出典

- 大和ネクスト銀行 コーポレートサイト（https://www.bank-daiwa.co.jp/）。
- 大和ネクスト銀行 会社概要（https://www.bank-daiwa.co.jp/about/company/profile/）。
- 大和ネクスト銀行 ディスクロージャー / プレスページ（https://www.bank-daiwa.co.jp/info/）。
- 大和ネクスト銀行 口座数・預金残高の推移：2026-03-31時点で預金 5,063.7 億円 / 2,288 千口座、円 + 外貨合算（グループ会社預金を含む）（https://www.bank-daiwa.co.jp/about/disclosure/transition/）。
- 大和証券グループ コーポレート / IR サイト（https://www.daiwa-grp.jp/、https://www.daiwa-grp.jp/ir/）。
- 大和証券グループ / 大和ネクスト銀行のオリックス銀行買収に関する発表（2026-04-27）。
- FSA 免許銀行一覧（https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx）。
