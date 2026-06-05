---
source: business/ntt-docomo-d-point-telco-finance-case
source_hash: f7d0d2ca097cd72f
lang: ja
status: machine
fidelity: ok
title: "NTT ドコモ + d ポイント + d 払い + d カード 事例 — SMBC 提携を伴う、通信会社を金融の販売チャネルとするモデル"
translated_at: 2026-06-02T11:47:37.266Z
---

# NTT ドコモ + d ポイント + d 払い + d カード 事例 — SMBC 提携を伴う、通信会社を金融の販売チャネルとするモデル

## ウィキ上の位置づけ

本項目は [[business/INDEX|business INDEX]] の下に、公開企業の戦略的事例として位置づけられる。逆方向のクロスサブシディのパターン(金融がモバイルを補助 vs 通信会社が金融を補助)については [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]]、インターネットから金融へのコングロマリットの対比については [[business/gmo-internet-group|GMO Internet Group]]、ソフトバンク側の並行事例については [[megabanks/paypay-fg|PayPay FG]] と対照して読むこと。[[business/INDEX|business INDEX]] および [[payments/cashless-jp-landscape|payments INDEX]] と併せること。

## 要約

NTT ドコモ(2020  の TOB 後に完全に NTT 株式会社の 9432,  完全子会社)は、**d ポイント / d カード / d 払い**の金融サービススタックを、**そのモバイル加入者基盤(全国で ~85百万 d ポイント会員)に金融商品を届ける販売チャネル**として運営している。2024  の SMBC 戦略提携 — これにより SMBC がドコモの金融子会社の持分に数十億規模で出資する — は、逆・楽天パターンを公式化した:通信会社が販売 + 加入者データを提供し、メガバンクがバランスシート + 商品の専門知識 + 規制のノウハウを提供する。

アーキテクチャ上のインサイト:通信会社の内部に完全な FG を構築する(楽天の経路)のではなく、ドコモはモバイル契約を顧客獲得層と位置づけ、規制対象のバランスシート層については [[megabanks/smfg|SMFG]] / SMBC と提携する。これは**通信会社をチャネルとし、銀行をバランスシートとする**分業であって、垂直統合ではない。

## 1. 提携前のドコモ金融スタック

| サービス | 機能 | 2024  前の状況 |
|---|---|---|
| **d ポイント** | ロイヤルティポイントのエコシステム | ~85百万会員;モバイル請求、リテール、決済に統合 |
| **d 払い** | QR コード決済アプリ | PayPay、楽天ペイ、au PAY と競合 |
| **d カード** | クレジットカード(NTT ドコモブランド、ドコモ子会社を通じて発行) | 歴史的にクレジットカードパートナーとの共同発行 |
| ドコモ保険 | モバイル関連保険 + 一般 | 加入者に紐づく販売 |
| ドコモ投資 | ロボアドバイザー / NISA ルート | SBI / 楽天証券に比べてサブスケール |

提携前、ドコモは販売とブランドを持っていたが、預金受入、貸出、完全な決済ネットワークの経済性のための銀行水準のバランスシートを欠いていた。

## 2. 2024  の SMBC 戦略提携

2024,  に、ドコモと [[megabanks/smfg|SMFG]](SMBC 経由)は戦略的アライアンスを発表し、これにより SMBC がドコモの金融子会社 / 商品ラインに経済的利益を取得した。これには d カード関連主体への計画的投資および統合された販売契約が含まれる。

主な特徴:

- SMBC がクレジットカード債権、貸出、消費者金融のためのバランスシート能力を提供する
- ドコモが 80百万人超の加入者基盤とポイントエコシステムへの販売を提供する
- 共同開発商品(例:上位グレードのクレジットカード、預金商品)が両ブランドを活用する
- ドコモ加入者基盤への SMBC 商品のクロスマーケティング、および SMBC 顧客基盤へのドコモ金融サービスのクロスマーケティング
- d カード債権の証券化 / リファイナンスが SMBC の資金調達コストの恩恵を受ける

これは、通信会社が自前の銀行免許を構築する必要がないパターンを公式化する — 通信会社は販売と引き換えに SMBC の規制およびバランスシートのインフラをリースする。

## 3. 通信会社から金融への販売パターン

ドコモモデルは、**通信会社をチャネルとする**経済性の明快な例証である:

| 顧客接点 | モバイル契約が鍵を開ける理由 |
|---|---|
| 本人確認 | モバイル契約は既に KYC を含む;金融口座開設をショートカットできる |
| 請求リレーション | 月々のモバイル請求が既存の決済リレーションとなる;追加課金の上乗せが容易 |
| データシグナル | 利用データ、位置、決済履歴が(同意のもとで)与信審査を支える |
| 顧客サポート | モバイルショップが金融商品の対面販売チャネルとなる |
| 信頼 / ブランド | 全国通信会社ブランドが金融商品の信頼性を運ぶ |
| ロイヤルティエンジン | モバイル + 金融 + リテールを横断する通貨としての d ポイントがユーザーを結びつける |

モバイル請求がチャネルである。銀行のバランスシートがバックエンドである。

## 4. 比較マトリクス — 日本における通信×金融モデル

| グループ | 通信主体 | 金融子会社 | クロスサブシディの方向 | 銀行パートナー |
|---|---|---|---|---|
| **NTT ドコモ** | ドコモ(NTT 9432) | d ポイント / d 払い / d カード | 通信 → 金融 | SMBC(2024  提携) |
| **KDDI / au** | au(KDDI 9433) | au PAY / au じぶん銀行 / au 保険 | 通信 → 金融 | MUFG(au じぶん銀行 JV) |
| **ソフトバンク** | ソフトバンク(9434) | [[megabanks/paypay-fg|PayPay FG]]、PayPay 銀行、PayPay カード | 通信 → 金融 | (内部 PayPay FG) |
| **楽天** | [[payment-firms/rakuten-fg|Rakuten Mobile]] | カード / 銀行 / 証券 / 保険 | 金融 → 通信(逆方向) — [[business/rakuten-group-mobile-finance-bundling-case|Rakuten case]] 参照 | みずほ(証券の一部売却 2023) |
| **GMO インターネット** | (モバイルなし) | [[business/gmo-internet-group|GMO Internet Group]] 決済 / 銀行 / FX / 暗号資産 | インターネットインフラ → 金融 | あおぞら(ネット銀行 JV) |

ドコモの特徴:最大の通信加入者基盤、銀行提携を完全に公式化したのが最も遅い、そして銀行層について明示的に**構築主導ではなくパートナー主導**で進む唯一の例である。

## 5. 提携後の戦略的含意

**NTT ドコモ(NTT)**にとって:

- 銀行バランスシートに資本を縛られることを避ける
- SMBC の既存の規制済みスタックを通じた、より速い商品の市場投入
- 販売 / データ / ロイヤルティエンジンの経済性からのアップサイドをすべて維持
- 銀行規制当局の制約なしに AI エージェント決済レール([[fintech/ai-payment-two-tracks|AI payment two tracks]] 参照)を統合する自由

**SMFG / SMBC** にとって:

- 80百万人超のドコモ加入者の販売へのアクセス
- ますますキャッシュレス化する経済におけるクレジットカード取引量の成長
- 楽天カード / [[card-issuers/paypay-card|PayPay Card]] / au PAY に対する防御的なポジショニング
- デジタルチャネルが優勢になる中での、メガバンク直接販売の減退に対するヘッジ

**NTT 株式会社(親会社)**にとって:

- 2020  の TOB 簡素化後、d ポイント / d カードの経済性が NTT に上方還流する
- 楽天より明快なコングロマリットのロジック — 金融は損失で賄う成長策ではなくチャネルのマネタイズである
- 競合する FG を構築しないことで、自らのコングロマリットディスカウントのエクスポージャーを低減する

## 6. 楽天の方向性との比較

| 次元 | NTT ドコモ(通信 → 金融) | 楽天(金融 → 通信) |
|---|---|---|
| 営業利益の源泉 | 通信加入者基盤 | カード / 銀行 / 証券 |
| 補助 / 設備投資の向け先 | 金融商品の販売 | モバイルネットワークの構築 |
| 銀行バランスシート | パートナー(SMBC) | 自社所有([[JapanFG/rakuten-bank|Rakuten Bank]]) |
| 証券 | パートナー(限定的な構築) | 自社所有([[securities-firms/rakuten-securities|Rakuten Securities]]、一部をみずほに売却) |
| 設備投資プロファイル | 軽い(金融のためのネットワーク構築なし) | 重い(モバイルネットワーク) |
| コングロマリットディスカウントのリスク | 低 | 高 |
| クロスサブシディ破綻のリスク | なし(赤字子会社なし) | 高(モバイルの損失が継続) |

ドコモモデルが構造的により防御可能なのは、赤字の子会社がないためである — スタック全体が加入者基盤をマネタイズし、SMBC がバランスシートのレバレッジを提供する。

## 7. 反論

- SMBC 提携は単一の銀行パートナーへの依存を生む — 関係が悪化した場合の代替コストが高い
- d ポイント / d カードの成長はドコモ加入者の維持に依存する;積極的な MNP 価格競争(特に楽天モバイルから)がチャネルを侵食する
- d 払いは PayPay(~60百万ユーザー)および楽天ペイ(~70百万会員)に対してサブスケール — 販売だけでは QR 決済のリーダーシップを保証しない
- NTT による完全子会社化の簡素化は、金融子会社の業績に対する少数株主の規律を低下させる
- 提携の経済性は完全には開示されていない — 正確な収益分配 / 出資持分の条件は一部のみ公開

## 8. 未解決の問い

- SMBC 提携はより深い統合(例:共同ブランドの預金口座、貸出商品)へと拡大するか?
- d 払いは QR 決済市場がさらに統合される前に PayPay とのギャップを縮められるか?
- NTT は将来、[[corporate-strategy/partial-spinoff-tax-deferral|partial-spinoff regime]] を用いて統合された金融サービス主体をスピンアウトするか?
- ドコモ + SMBC のアライアンスは、[[business/rakuten-group-mobile-finance-bundling-case|Rakuten Securities × Mizuho]] および au + MUFG(au じぶん銀行)とどう相互作用するか?
- ドコモ + SMBC のスタックにとっての AI エージェント決済の角度([[fintech/ai-payment-two-tracks|AI payment two tracks]] に基づく)は何か?

## 関連項目

- [[business/INDEX|business INDEX]]
- [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]]
- [[business/gmo-internet-group|GMO Internet Group]]
- [[business/sony-fg-partial-spinoff-case|Sony FG partial spinoff case]]
- [[business/kitao-yoshitaka-sbi-independent-strategy-case|Kitao Yoshitaka SBI independent strategy]]
- [[megabanks/smfg|SMFG]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[megabanks/mufg|MUFG]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[fintech/ai-payment-two-tracks|AI payment two tracks]]
- [[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]]
- [[INDEX|FinWiki index]]

## 出典

- NTT ドコモ IR: https://www.nttdocomo.co.jp/corporate/ir/
- NTT グループ ニュースリリース: https://group.ntt/jp/newsrelease/
- SMBC グループ ニュース: https://www.smbcgroup.com/news/
- d ポイント 公式ポータル: https://dpoint.jp/
- NTT ドコモ 英語情報: https://www.docomo.ne.jp/english/info/

---

> [!info] 校核状態
> confidence: **likely**。ドコモのグループ構造、d ポイント会員数、SMBC 提携の発表は公に開示されている。具体的な出資持分の条件および収益分配の経済性は部分的である。将来に向けた統合の範囲は予測である。
