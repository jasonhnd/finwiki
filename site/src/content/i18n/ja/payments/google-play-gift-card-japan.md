---
source: payments/google-play-gift-card-japan
source_hash: 693b06072c1a6bd7
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Google Play Gift Card Japan: Google エコシステム向けクローズドループ前払"
translated_at: 2026-06-26T08:38:42.155Z
---
# Google Play Gift Card Japan: Google エコシステム向けクローズドループ前払

## ウィキ上の位置づけ

この項目は [[payments/INDEX|payments index]] の配下に置かれる。Google Play Gift Card Japan のクローズドループ前払発行者ページであり、FSA レジストリの見方については [[payments/prepaid-payment-instrument-issuers-japan-index|前払式 payment instrument 発行会社 registry]] と対になる。[[payments/amazon-gift-card-japan|Amazon Gift Card Japan]]、[[payments/apple-gift-card-japan|Apple Gift Card Japan]]（プラットフォームをアンカーとするクローズドループ型ギフトカードのピア）、[[payments/quo-card-prepaid|QUO Card]]（複数加盟店型のオープンループギフト）、[[payments/visa-gift-card-japan|Visa Gift Card]]（ブランドネットワーク型前払）と比較する。小売アンカー型の第三者前払（[[payments/waon-prepaid-aeon|WAON]] / [[payments/nanaco-prepaid-seven-i|nanaco]]）とは区別する。Google Play Gift Card は **クローズドループ**（Google Play ストアおよび Google サービス内でのみ利用可能）であり、WAON / nanaco は第三者型の複数加盟店前払である。法的枠組みは [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]。

## 要約

**Google Play Gift Card (Google Playギフトカード)** は、**Google Play ストアおよび Google エコシステムサービス向けのクローズドループ前払ギフトカード**である。日本では **Google Asia Pacific Pte Ltd / Google Japan G.K.** が、国内のコンビニエンスストアや家電量販店の販売網と組んで発行し、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act 前払式 framework]] の下で自家型 (closed-loop) 前払式支払手段として運営される。残高は **Google Play ストア**（アプリ、アプリ内購入、ゲーム、書籍、映画 — Google Play Pass サブスクリプションを含む）と一部 Google サービスで利用できる。**[[payments/apple-gift-card-japan|Apple Gift Card]] に対する Android エコシステム側の対応物**として、Google Play Gift Card は、登録クレジットカードを持たないユーザー（未成年、クレジットカード非保有層、ギフト受領者）にアプリおよびアプリ内購入への **カードレス導線** を提供するという同じ構造的役割を果たす。販売レールには、コンビニエンスストア（Lawson、FamilyMart、MiniStop、7-Eleven、Daily Yamazaki）、ドラッグストア、家電量販店（Yamada Denki、Bic Camera、Yodobashi Camera、Edion）、オンラインのデジタル販売が含まれる。

## 発行者と運営構造

| 観点 | 読み方 |
|---|---|
| 運営会社 | Google Asia Pacific Pte Ltd (発行者); Google Japan G.K. (日本現地法人) |
| グループ親会社 | Alphabet Inc. (US) |
| FSA 前払登録 | 自家型前払式支払手段 (closed-loop) — Google Play / Google エコシステム |
| 法的分類 | クローズドループ前払 (第三者型ではない) — `daisan.xlsx` 第三者一覧には掲載されない |
| 日本での開始年 | 2012 (日本での Google Play Gift Card 初回ローンチ) |
| 額面 | 固定 (¥1,500, ¥3,000, ¥5,000, ¥10,000) および可変 (一部チャネルで ¥1,500 から ¥50,000 ) |
| 販売レール | コンビニエンスストア、家電量販店、ドラッグストア、オンラインデジタル販売 |
| 利用先 | Google Play ストア (アプリ、アプリ内購入、ゲーム、書籍、映画、Google Play Pass など) |
| 有効期限 | Google アカウントにチャージ後の残高には有効期限なし |

## 法的根拠: 自家型前払式支払手段 (クローズドループ)

Google Play Gift Card は、利用先が Google 自身のプラットフォームとサービスに限定されるため、[[payments/funds-transfer-vs-prepaid-boundary|Payment Services Act (資金決済法)]] Chapter 3  の下で **自家型前払式支払手段** として登録される。主な規制上の帰結は次のとおり。

- **FSA レジストリが異なる** — クローズドループ発行者は [[payments/prepaid-payment-instrument-issuers-japan-index|`daisan.xlsx`]]（第三者型のみ）には掲載されない。
- **半期ごとの未使用残高供託** 義務は PSA のクローズドループ枠組みの下でも適用される。
- **発行終了時を除き原支払者への返金はない** — Google Play Gift Card 残高は現金払い戻し不可。
- **長期の残高保持** — Google アカウントにチャージ後の残高に有効期限はないため、アカウントレベルの breakage は最小限。未チャージカードの紛失 / 未使用に伴う card-level breakage は別の論点。

## カードレス導線の用途

Google Play Gift Card の日本における主な役割は、特に次の層に対する **Android ユーザー向けカードレス導線** である。

| コホート | 用途 |
|---|---|
| **未成年** | クレジットカードを持たない 18 歳未満のユーザーが、ギフトカード残高でアプリ、アプリ内購入、ゲームを購入する。 |
| **クレジットカード非保有の成人** | クレジットカードを持たない、または Google アカウントへ登録したくない成人が、ギフトカード残高で Play コンテンツを購入する。 |
| **ギフト受領者** | 誕生日 / 季節ギフトの受領者が、アプリ / コンテンツ購入用の Google Play 残高を受け取る。 |
| **カードレスのゲーム支出** | モバイルゲームのアプリ内購入 (gacha / loot box / battle pass) — 日本のユーザー当たりモバイルゲーム支出が世界最高水準であることを踏まえると特に重要。 |
| **サブスクリプション** | 残高で資金を手当てする Google Play Pass サブスクリプションのバンドルアプリ利用。 |

**モバイルゲーム支出レーン** は構造的に重要である。日本のモバイルゲーム市場は Google Play のアプリ内購入額を大きく押し上げており、その相当部分はクレジットカード直接課金ではなく、ギフトカードでチャージされた残高から生じる。

## 販売レール

| レール | 説明 |
|---|---|
| **コンビニエンスストア** | Lawson、FamilyMart、MiniStop、7-Eleven、Daily Yamazaki、Seicomart — プラスチック包装の物理カード |
| **ドラッグストア** | マツモトキヨシ、ココカラファイン、スギ薬局、ウエルシア — 物理カード |
| **家電量販店** | Yamada Denki、Bic Camera、Yodobashi Camera、Edion、Ksdenki — 物理カード |
| **オンラインデジタル販売** | Google Play サイトでの直接購入（日本では他市場より限定的）、一部 Amazon / Rakuten 再販チャネル |
| **キャリア決済の補完** | Docomo / au / SoftBank のキャリア決済は主要なクレジットカード代替手段。ギフトカードは非キャリア決済ユーザー層を担う。 |
| **プロモーション配布** | 通信キャリアのプロモーション報酬、アプリプロモーションキャンペーン |

## ギフトカード不正 / 詐欺の懸念

[[payments/amazon-gift-card-japan|Amazon Gift Card]] や [[payments/apple-gift-card-japan|Apple Gift Card]] と同様に、Google Play Gift Card は日本の **振り込め詐欺 / 電子マネー型詐欺** エコシステムで大きく悪用されてきた。詐欺電話は被害者にコンビニエンスストアで Google Play Gift Card を購入させ、コードを電話で読み上げさせる。Google の対応は次のとおり。

- 詐欺目的の購入依頼に関する Google ヘルプページの消費者向け警告。
- 高額購入時のコンビニエンスストア店員による警告プロセス。
- NPA と消費者保護当局は、詐欺パターンの注意喚起で Google Play Gift Card を Amazon や Apple と並べて名指ししている。

## KPI スナップショット

| 指標 | 読み方 |
|---|---|
| 日本での Google Play Gift Card 累計発行 | フランチャイズ存続期間を通じて実質的に数兆円規模。Google は日本セグメント別の数値を公表していない。 |
| コンビニ / ドラッグストア / 家電量販店での販売 | 主要チェーンはすべて Google Play Gift Card を取り扱う。 |
| モバイルゲーム支出への依存 | 日本の Google Play アプリ内購入額の相当部分はギフトカードでチャージされた残高から生じる。 |
| カードレス / 未成年ユーザー層 | 重要。Google Play Gift Card は、非クレジットカードユーザー向けの主要なカードレスアプリ購入レールである。 |
| 可変額面の提供 | US / EU と比べて限定的で、固定額面が中心。 |

Google は日本セグメント別の Gift Card 売上を開示していない。数値は業界推計とチャネル販売指標に存在する。

## 戦略: Android エコシステムのキャッシュレス導線

Google Play Gift Card Japan の戦略的役割:

1. **Android エコシステムのカードレス導線** — 未成年 / クレジットカード非保有ユーザー / ギフト受領者が、登録クレジットカードなしでアプリとアプリ内コンテンツを購入できる。
2. **モバイルゲーム支出の捕捉** — ギフトカードでチャージされたアプリ内購入は、日本のモバイルゲーム支出の意味ある割合を占める。
3. **クローズドループ float / breakage** — Apple / Amazon Gift Card と同じクローズドループ経済性。
4. **コンビニエンスストアレールの活用** — 日本全国のコンビニエンスストア網を通じた物理カード販売が獲得レーン。
5. **キャリア決済の補完** — Docomo / au / SoftBank のキャリア決済は、クレジットカードを持たない Google Play 支払の別の非常に大きな層を担う。ギフトカードは、キャリア決済の外側または追加的な層にサービスを提供する。

## 関連項目

- [[payments/INDEX]]
- [[payments/prepaid-payment-instrument-issuers-japan-index]]
- [[payments/amazon-gift-card-japan]]
- [[payments/apple-gift-card-japan]]
- [[payments/quo-card-prepaid]]
- [[payments/visa-gift-card-japan]]
- [[payments/waon-prepaid-aeon]]
- [[payments/nanaco-prepaid-seven-i]]
- [[payments/funds-transfer-vs-prepaid-boundary]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[INDEX|FinWiki index]]

## 出典

- Google Play Gift Card Japan page (play.google.com/intl/ja-JP/about/giftcards/).
- Google Play Gift Card support page (support.google.com/googleplay/answer/4596788).
- Google Japan corporate site.
- FSA prepaid payment instruments policy page (closed-loop / 自家型 framework).
- FSA `daisan.xlsx` (cross-reference — confirms Google Play Gift Card is closed-loop, not third-party listed).
- METI cashless policy page.
