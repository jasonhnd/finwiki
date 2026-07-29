---
source: business/gmo-internet-group
source_hash: 6b92eb5cc9f7aafa
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "GMOインターネットグループ"
translated_at: 2026-07-29T05:13:34.783Z
---

# GMOインターネットグループ

## ウィキルート

この項目は[[business/INDEX|business INDEX]]に属する。同業・対比の文脈は[[business/matt-huang-triple-role-coi-template|三身分COIテンプレート · VC GP + 大口顧客Board + 被投資先CEOの三角構造が複製不能となる理由]]と、より広いシステム・規制境界は[[fintech/INDEX|fintech index]]と併せて参照されたい。

## TL;DR

GMOインターネットグループは、JapanFGに関係する複数の金融基盤の親会社に当たる。[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]は加盟店決済、[[payment-firms/gmo-coin|GMO Coin]]は暗号資産、GMOフィナンシャルホールディングス／GMOクリック証券はオンライン証券・FX、[[payment-firms/gmo-aozora-net|GMOあおぞらネット銀行]]はあおぞら銀行との共同出資構造で運営される。

このグループは、銀行主導の金融コングロマリットではなく、**規制金融へ拡張したインターネットインフラ**として捉えるべきである。

## グループマップ

以下の表は、GMOインターネットグループの公式事業分類と各社の公式資料に基づく。代表的な経路を示すもので、完全な法的事業体図ではない。^[Sources: https://www.gmo.jp/en/company-profile/business/; https://ir.group.gmo/assets/pdf/en/integrated-report_2025.pdf; https://www.gmo-pg.com/en/corp/company-management/; https://gmo-aozora.com/company/outline.html.]

| レイヤー | 代表的な事業体・資産 | JapanFGとの関連 |
|---|---|---|
| インターネットインフラ | ドメイン、ホスティング、クラウド、セキュリティ、ECインフラ | 継続収益型の技術基盤と加盟店関係 |
| 決済 | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] | PSP／アクワイアリング／ECチェックアウト／加盟店精算インフラ |
| インターネットファイナンス | GMOファイナンシャルホールディングス、GMOクリックセキュリティズ | 外為、オンライン証券、リテールトレード技術 |
| 銀行／BaaS | [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] | あおぞら銀行とのオンライン銀行・組込型金融／BaaS経路 |
| 暗号資産 | [[payment-firms/gmo-coin|GMO Coin]] | 暗号資産取引／カストディ／デリバティブの隣接サービス |
| セキュリティ／信頼 | GMOグローバルサインおよびセキュリティサービス | 認証、証明書、運用信頼インフラ |

## GMOがJapanFGで重要な理由

GMOはメガバンク、保険会社、証券会社ではないが、**加盟店とテクノロジーの接点**に位置するため、戦略的に重要である。

- EC事業者には決済受付および決済のオーケストレーションが必要である。
- オンラインビジネスにはドメイン、ホスティング、証明書、クラウドインフラが必要である。
- リテールトレーダーにはオンライン証券／FXプラットフォームが必要である。
- 暗号資産ユーザーには取引所およびカストディサービスが必要である。
- スタートアップおよびプラットフォーム事業者はオンライン銀行／APIバンキングルートが必要である。

その組み合わせにより、GMOは[[payments/cashless-jp-landscape|cashless payments]]、[[exchanges/INDEX|crypto exchanges]]、および[[banking/baas-japan-landscape|BaaS]]の間の橋となる。

## 金融／免許スタック

この表は、事業活動と、それに関係する規制・支配上の境界を分けている。GMOあおぞらの行は、GMO単独による銀行支配を意味しない。同行の2026-02-20時点の会社概要では、あおぞら銀行が議決権の85.12%、GMO系2株主が各7.43%を保有する。^[Sources: https://www.gmo.jp/en/company-profile/business/; https://gmo-aozora.com/company/outline.html; https://www.gmo-pg.com/en/corp/company-management/.]

| 活動 | 規制または支配のレイヤー | 関連ルート |
|---|---|---|
| 加盟店決済ゲートウェイ | カード加盟店契約、PCI DSS、精算、割賦販売／カード番号取扱いの境界 | [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]] |
| オンライン銀行／BaaS | 銀行免許と、GMOあおぞらネット銀行を介した銀行API／組込型金融の管理 | [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]] |
| 有価証券／為替 | FIEA／金融商品取引および為替規則を経由したGMO金融子会社 | [[securities/INDEX|securities INDEX]] |
| 暗号資産交換 | 暗号資産交換業者登録と自主規制の経路 | [[payment-firms/gmo-coin|GMO Coin]], [[exchanges/fsa-vasp-registration-system|FSA VASP registration]] |
| 認証／セキュリティ | 電子証明書、本人識別、運用セキュリティ、トラストサービス | 手法上の隣接領域として[[security/bytecode-forensic-three-tier-verify|security]] |

## ストラテジック・パターン

GMOの構造は「規制金融に隣接するインターネット・コングロマリット」である。

1. 大規模に利用されるインターネットインフラを構築または取得する。
2. 事業者・ユーザー層に決済および金融サービスを付加する。
3. ユニバーサルバンクになるのではなく、子会社や共同出資構造を通じて規制金融に参入する。
4. 技術、ブランド、および販売網を活用し、銀行所有のプラットフォームと競合する。

これが[[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]の戦略的重要性が消費者からの知名度以上に大きくなり得る理由である。カード、コード、コンビニ、銀行振込などの決済手段における加盟店側の要所だからである。

## 競合環境

同業比較表は、GMOが開示したグループ事業の範囲と、リンク先のFinWiki事業体プロフィールを分析的に対比したもので、市場シェア順位や同一の免許を示すものではない。^[Sources: https://www.gmo.jp/en/company-profile/business/; https://ir.group.gmo/assets/pdf/en/integrated-report_2025.pdf.]

| 競合企業／同業者 | GMO の対比 |
|---|---|
| [[megabanks/smfg|SMFG]] / SMBC カード | 銀行カードの流通と発行会社の貸借対照表；GMOは加盟店向けPSPと技術スタックを提供。 |
| Stripe / Adyen | 世界的な開発者中心のPSP；GMOは日本の加盟店、カード、コンプライアンスに関する厚い知見を持つ。 |
| [[megabanks/paypay-fg|PayPay FG]] | 消費者向けアプリおよびQR決済での優位性；GMOはmerchantインフラ中心のアプローチである。 |
| [[megabanks/sbi-hd|SBI HD]] | より広範な金融主導型コングロマリット；GMOはインターネットインフラを起点に金融へ拡張。 |
| 大手銀行 | 貸借対照表と法人顧客基盤の強み；GMOはデジタル加盟店ワークフローが重要な領域で競合。 |

## 関連

- [[payment-firms/gmo-payment-gateway|GMO Payment Gateway]]
- [[payment-firms/gmo-coin|GMO Coin]]
- [[payment-firms/gmo-aozora-net|GMO Aozora Net Bank]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[exchanges/INDEX|exchanges INDEX]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[financial-licenses/INDEX|JapanFG legal / financial licenses]]
- [[INDEX|FinWiki index]]

## 出典

- GMO Internet Group official company profile: https://www.gmo.jp/en/company-profile/
- GMO Internet Group business operations: https://www.gmo.jp/en/company-profile/business/
- GMO Internet Group Integrated Report 2025: https://ir.group.gmo/assets/pdf/en/integrated-report_2025.pdf
- GMO Payment Gateway corporate materials: https://www.gmo-pg.com/en/corp/company-management/
- GMO Aozora Net Bank company outline: https://gmo-aozora.com/company/outline.html
