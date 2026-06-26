---
source: business/softbank-paypay-financial-integration-case
source_hash: 6655ad3910555606
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "ソフトバンク / PayPay 金融統合ケース — スーパーアプリがカード / 銀行 / 証券を PayPay 傘下に集約し、その後 US 上場を申請"
translated_at: 2026-06-26T08:28:46.045Z
---

# ソフトバンク / PayPay 金融統合ケース — スーパーアプリがカード / 銀行 / 証券を PayPay 傘下に集約し、その後 US 上場を申請

## Wiki 内の位置づけ

本項目は [[business/INDEX|business INDEX]] の下に、上場企業の戦略ケースとして位置する。「銀行は自社で保有し、証券はメガバンクに委ねる」という対照的な分業については [[business/kddi-au-financial-bundling-case|KDDI au financial bundling case]]、パートナー主導の銀行モデルについては [[business/ntt-docomo-d-point-telco-finance-case|NTT Docomo d-Point telco-finance case]]、すべての金融バーティカルを自社で保有するもう一つのスーパーアプリについては [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]] と併読されたい。事業体プロファイルは [[megabanks/paypay-fg|PayPay (financial group)]]、[[card-issuers/paypay-card|PayPay Card]]、[[securities-firms/paypay-securities|PayPay Securities]] を参照。[[business/INDEX|business INDEX]]、[[payments/cashless-jp-landscape|Japan cashless payment landscape]]、[[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay points 経済圏]] と併せて読まれたい。

## TL;DR

PayPay —— 日本最大の QR コード決済アプリ（2025年12月時点で約 72百万の登録ユーザー）であり、[[megabanks/paypay-fg|SoftBank]] の連結子会社（[[loyalty/sb-yahoo-paypay-points-unified-ecosystem|LY Corporation]] が少数株主として保有）—— は 2022-2026 にかけて、ソフトバンクグループの消費者金融バーティカルを **決済アプリそのものへ** 集約してきた。PayPay は 2022, に [[card-issuers/paypay-card|PayPay Card]] を完全子会社化し、2025, 年4月に PayPay 銀行と [[securities-firms/paypay-securities|PayPay Securities]] の過半数支配を取得、そして LINE Pay（国内最大の QR 決済ライバル）を吸収中で、完了目標は 2026年3月とされる。

戦略上の総仕上げとなる動きが **US 上場** である：ソフトバンクは 2025 に PayPay 株式をナスダック・グローバル・セレクト・マーケットへ上場すべく非公開で申請し（予定ティッカー PAYP）、ソフトバンクは募集後も過半数支配を維持すると表明している。アーキテクチャ上の洞察：金融を別個のグループ企業に分散させる（KDDI の持株会社ルート）でも、赤字の通信事業を内部補助する（楽天のルート）でもなく、ソフトバンクは **あらゆる消費者金融バーティカルを一つの高頻度決済スーパーアプリの傘下に集約** し、株式上場を通じてその価値を結晶化させる。

## 1. PayPay 金融スタック

| バーティカル | 事業体 | 統合ステップ |
|---|---|---|
| Payments | PayPay アプリ (QR + 電子マネー) | コア; 約 72百万の登録ユーザー (2025年12月) |
| Card | [[card-issuers/paypay-card|PayPay Card]] | 2022 以降 PayPay の完全子会社|
| Bank | PayPay 銀行 | 2025 年4月に過半数議決権が PayPay へ移転|
| Securities | [[securities-firms/paypay-securities|PayPay Securities]] | 2025 年4月に過半数議決権が PayPay へ移転|
| Insurance | PayPay 保険サービス | アプリ組込型の販売 |
| Loyalty | PayPay ポイント | ソフトバンク / Yahoo エコシステムと統合 —— [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|points 経済圏]] 参照 |

パターン：一つの決済アプリがフロントドアとなり、カード・銀行・証券・保険が兄弟関係のグループ企業として残されるのではなく、子会社としてその中へ取り込まれていく。

## 2. 統合のタイムライン

| 日付 | ステップ |
|---|---|
| 2022 | PayPay が [[card-issuers/paypay-card|PayPay Card]] を完全子会社化 |
| 2025 年4月| PayPay が PayPay 銀行と [[securities-firms/paypay-securities|PayPay Securities]] の過半数議決権を取得 |
| 2025 (公表) | ソフトバンクが PayPay を ADR としてナスダックに上場すべく非公開で申請（予定ティッカー PAYP）；ソフトバンクは過半数を維持 |
| 2026 年3月(目標) | LINE Pay との吸収合併が完了し、国内最大の QR 決済ライバルを除去 |

各ステップは金融バーティカルを PayPay の境界内へ移し、上場は統合されたスーパーアプリを別個に取引される証券へ転換する一方で、ソフトバンクは支配を維持する。

## 3. スーパーアプリ統合パターン

PayPay は **集約してから上場する** スーパーアプリ経済を体現する：

| レバー | アプリに取り込むことが重要な理由 |
|---|---|
| 単一アプリ・アイデンティティ | 一つの PayPay アカウントが、再オンボーディングなしでユーザーをカード・銀行・証券・保険へ導く |
| 高頻度決済 | 日々の QR 決済がアプリを開かせ続け、金融商品はそのエンゲージメントに乗る |
| ポイントエンジン | ソフトバンク / Yahoo / PayPay にまたがる PayPay ポイントがユーザーを結びつける —— [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|points 経済圏]] 参照 |
| ライバル吸収 | LINE Pay 合併が主要な競合 QR ウォレットを除去し、QR 決済における準独占を深める |
| 上場という通貨 | 株式上場は価値を結晶化させ、ソフトバンクが支配を維持しつつ買収 / インセンティブの通貨を提供する |

アプリは流通レイヤー、金融バーティカルはそこに接続される子会社、上場は価値結晶化イベントである。

## 4. 比較マトリクス —— 日本における通信 / スーパーアプリ金融モデル

| グループ | フロントドア | カード | 銀行 | 証券 | パターン |
|---|---|---|---|---|---|
| **ソフトバンク / PayPay** (本ケース) | PayPay アプリ | [[card-issuers/paypay-card|PayPay Card]] —— 自社保有 | PayPay 銀行 —— 自社保有 | [[securities-firms/paypay-securities|PayPay Securities]] —— 自社保有 | 全バーティカルをアプリ傘下に集約し、その後上場 |
| **KDDI / au** | au ID / au PAY | au PAY カード —— 自社保有 | [[regional-banks/au-jibun-bank|au Jibun Bank]] —— 自社保有 | au カブコム —— **MUFG に委譲** | 銀行 + 決済は自社保有、証券はパートナーへ委譲 —— [[business/kddi-au-financial-bundling-case|KDDI case]] 参照 |
| **NTT ドコモ** | d ポイント / d 払い | d カード —— 自社保有 | パートナー ([[megabanks/smfg|SMBC]]) | 限定的な構築 | パートナー主導の銀行レイヤー —— [[business/ntt-docomo-d-point-telco-finance-case|Docomo case]] 参照 |
| **楽天** | 楽天 ID / ポイント | 楽天カード —— 自社保有 | [[payment-firms/rakuten-fg|Rakuten Bank]] —— 自社保有 | 楽天証券 —— 自社保有 (みずほへ一部売却) | 金融が赤字の携帯事業を補助 —— [[business/rakuten-group-mobile-finance-bundling-case|Rakuten case]] 参照 |

ソフトバンクの特徴：金融バーティカルを（別個の金融持株会社ではなく）**決済アプリの内部に** 集約し、その後そのスーパーアプリの **単独 US 上場** を追求する点であり、一方 KDDI と楽天は金融をグループ持株構造の下に置いている。

## 5. 戦略的根拠

**ソフトバンクグループ** にとって：

- 別個に上場された PayPay は、ソフトバンクが過半数支配を維持しつつ、消費者金融フライホイールの価値を結晶化させる
- US (ナスダック) 上場は、国内のみの上場よりも深い投資家プールとフィンテックに好意的なバリュエーション環境にアクセスできる
- カード / 銀行 / 証券を PayPay に取り込むことで、グループの消費者金融ラインを一つの投資可能なストーリーへ単純化する

**PayPay** にとって：

- 金融バーティカルを保有することで、アプリは単一の高頻度関係から信用・預金・投資・保険をクロスセルできる
- LINE Pay 吸収は主要な QR 決済ライバルを除去し、流通の堀を強化する
- 上場は成長資本と買収 / インセンティブの通貨を提供する

**ユーザーおよび LY コーポレーション** にとって：

- 一つの PayPay アカウントが決済・カード・銀行・証券・保険・ポイントにまたがる
- LY コーポレーションは統合されたスーパーアプリにおける少数の経済的持分を保持する

## 6. 他のスーパーアプリ戦略へのリードアクロス

PayPay ケースは **決済アプリ主導の金融統合** のテンプレートである：

| 候補 | フロントドア | 統合のポテンシャル |
|---|---|---|
| 楽天 | 楽天 ID + ポイント | すでにバーティカルを保有しているが、一つのアプリではなくグループ持株の下にある —— [[business/rakuten-group-mobile-finance-bundling-case|Rakuten case]] 参照 |
| KDDI / au | au PAY + au ID | au-FH 持株の下にバンドル；証券は MUFG に委譲 —— [[business/kddi-au-financial-bundling-case|KDDI case]] 参照 |
| ドコモ | d 払い + d ポイント | パートナー主導の銀行レイヤー；深化しうるが現状はチャネルのみ —— [[business/ntt-docomo-d-point-telco-finance-case|Docomo case]] 参照 |
| GMO インターネット | (モバイルなし) | インターネット・インフラ主導の金融であり、アプリ主導ではない —— [[business/gmo-internet-group|GMO Internet Group]] 参照 |

他所で最も再現されやすいパターン：隣接する金融バーティカルを子会社として吸収し、その後、親会社が支配を維持しつつ別個の上場を追求する、支配的な決済アプリ。

## 7. 反論点

- ナスダック上場は非公開で申請されており、SEC レビュー・市況・最終的なプライシングの対象である；上場・ティッカー・バリュエーション・タイミングは **公表された / 申請された意図** として扱い、確定した完了済みイベントとしては扱わず、募集規模や上場後の市場価値を事実として述べないこと
- バーティカルを一つのアプリの下に集約することは規制エクスポージャーを集中させる：PayPay 銀行と [[securities-firms/paypay-securities|PayPay Securities]] は FSA の監督下にあり、アプリレベルの障害やコンプライアンス問題は今や金融スタック全体に及ぶ
- LINE Pay 吸収は、PayPay のすでに支配的な QR 決済シェアを踏まえると、競争政策上の注目を高める
- QR 決済主導の堀は、加盟店の受入継続とプロモーション支出に依存する；キャッシュバック主導のユーザー成長は歴史的に高コストであった
- ソフトバンクが過半数支配を維持することは、PayPay の資本配分に対する公開株主の規律を制限する

## 8. 未解決の問い

- PayPay のナスダック上場は、もし進行するなら、実際にどのバリュエーションとタイミングでプライシングされるのか？
- 完了した LINE Pay 合併は、日本の QR 決済市場構造とそれに対する規制対応をどのように再形成するのか？
- PayPay 銀行と [[securities-firms/paypay-securities|PayPay Securities]] がアプリ内に入った今、PayPay は融資と組込型金融商品を深化させるのか？
- ソフトバンクの「集約してから上場する」ルートは、資本効率の点で KDDI の [[business/kddi-au-financial-bundling-case|own-bank / partner-securities]] スワップや楽天の [[business/rakuten-group-mobile-finance-bundling-case|cross-subsidy]] モデルとどう比較されるのか？
- 統合された PayPay 金融スタックにとっての AI エージェント決済の切り口（[[fintech/ai-payment-two-tracks|AI payment two tracks]] 参照）は何か？

## 関連項目

- [[business/INDEX|business INDEX]]
- [[business/kddi-au-financial-bundling-case|KDDI au financial bundling case]]
- [[business/ntt-docomo-d-point-telco-finance-case|NTT Docomo d-Point telco-finance case]]
- [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]]
- [[business/gmo-internet-group|GMO Internet Group]]
- [[megabanks/paypay-fg|PayPay financial group]]
- [[card-issuers/paypay-card|PayPay Card]]
- [[securities-firms/paypay-securities|PayPay Securities]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay points 経済圏]]
- [[fintech/ai-payment-two-tracks|AI payment two tracks]]
- [[INDEX|FinWiki index]]

## 出典

- SoftBank financial segment strategy: https://www.softbank.jp/en/corp/philosophy/strategy/financial/
- PayPay Corporation corporate site: https://about.paypay.ne.jp/en/
- LY Corporation — transfer of PayPay Bank shares to PayPay: https://www.lycorp.co.jp/en/news/release/016692/
- PayPay Card installment-payment press release (2025-09-30): https://about.paypay.ne.jp/en/pr/20250930/01/
- FinTech Futures — SoftBank unit PayPay files for Nasdaq IPO: https://www.fintechfutures.com/stock-exchange-ipos/softbank-unit-paypay-files-for-nasdaq-ipo

---

> [!info] 校核状態
> confidence: **likely**. PayPay のユーザーベース、PayPay カード / 銀行 / 証券の 2022-2025 統合、LINE Pay 合併目標、およびソフトバンクが過半数を維持する非公開のナスダック申請は、ソフトバンク / PayPay / LY コーポレーションのリリースおよび IPO 申請において公開開示されている。募集規模・バリュエーション・ティッカー・プライシング/タイミングは SEC レビューと市況の対象となる申請された意図であり、確定した事実ではない。
