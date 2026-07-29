---
source: exchanges/jp-exchange-jpyc
source_hash: 7fbae7f7d594e52d
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "JPYC 株式会社 — 日本円ステーブルコイン発行体（資金移動業者型）"
translated_at: 2026-07-29T11:28:13Z
---
# JPYC 株式会社 — 日本円ステーブルコイン発行体（資金移動業者型）


## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の配下に位置する。隣接文脈は [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] を、より広いシステム境界は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] をあわせて読む。

> 資金移動業者登録関東財務局第00099号 · JVCEA 会員 #1042（資金移動業）· 設立 2019年11月

> Namespace note: JPYC は通常の暗号資産交換業者ではない。この詳細ページは、従来のステーブルコイン routing 上の理由により `exchanges/` に残されている。運営会社のアンカーは [[payment-firms/jpyc]]。

## 1. 法人・株主

- **商号**: JPYC 株式会社
- **英文名**: JPYC Inc.
- **設立**: 2019年11月
- **本店**: 〒100-0004 東京都千代田区大手町1丁目6番1号大手町ビル4階 FINOLAB内
- **資本金**: 1億円（100,000,000円）
- **親会社 / 上場**: 非上場。2026-02-26 公表のシリーズ B 1st クローズではアステリアがリード投資家となり総額 17.8 億円を調達予定、2026-04-20 公表の 2nd クローズではメタプラネットや住友生命系ファンドなどから 28 億円を追加調達予定とされた。

## 2. 牌照・登録状況

**JPYC 株式会社は暗号資産交換業者ではない**。以下は同社の公式登録取得発表、会社表示および JVCEA 会員一覧で確認した登録である。^[Sources: https://corporate.jpyc.co.jp/news/posts/first-yen-stablecoin-jpyc; https://corporate.jpyc.co.jp/law; https://jvcea.or.jp/member/.]

| 種別 | 登録番号 | 根拠法 |
|------|----------|--------|
| 資金移動業者 | 関東財務局第00099号 | 資金決済法第37条 |
| 前払式支払手段（第三者型）発行者 | 関東財務局第00773号 | 資金決済法第31条 |

- **JVCEA**: 第一種会員 #1042 — 登録区分「資金移動業（Funds transfer）」。暗号資産交換業者としての登録を示すものではない。
- 古物商（東京都公安委員会：第304372004277号）・古物市場主（同第304372004710号）も会社表示に掲載される。用途は登録表示を超えて推測しない。

**なぜ「暗号資産交換業」でないか**: 現行 JPYC は資金決済法上の「電子決済手段」であり、同社は資金移動業者として発行・償還する。従来の前払式支払手段は 2024-11-27 に「JPYC Prepaid」へ改称され、現行 JPYC とは別トークンで相互交換も受け付けない。資金移動業登録は 2025-08-18、現行 JPYC と JPYC EX の提供開始は 2025-10-27 である。

## 3. 取扱通貨

- **取扱銘柄**: 現行 JPYC（電子決済手段）を発行・償還する。JPYC Prepaid は別の前払式支払手段である。
- **発行網**: 2025-10-27 の正式リリース時点では Avalanche、Ethereum、Polygon の 3 チェーン。公式発表が「順次拡大予定」とするため、旧プリペイド版の対応網と混同しない。
- **ペッグ比率**: 1 JPYC = 1 日本円
- **利用形態**: 対応ウォレットで保有・送付でき、JPYC EX が本人確認済み利用者の発行・償還窓口となる。
- **暗号資産取扱なし**: BTC・ETH などの暗号資産の売買サービスは提供していない

## 4. 業務範囲

- **JPYC EX（発行・償還プラットフォーム）**: 本人確認済み利用者が銀行振込による発行予約、または JPYC 送付による償還予約を行う公式窓口。2025-10-27 に提供開始した。「取引所」という呼称から暗号資産売買市場を連想しない。
- **法人・開発者向け**: SDK、API 連携、企業間送金・決済への組込みを推進。個別案件の実装済み／開発中／予定を区別する。
- **裏付け**: 公式リリースは預貯金および国債で発行残高の 100% 以上を保全すると説明する。
- **法定通貨入金チャネル**: 銀行振込。
- 暗号資産売買、貸暗号資産または暗号資産デリバティブを JPYC EX のサービスとして扱わない。

## 5. 市占・取引高

- 同社の 2026-02-26 発表は累計発行額 13 億円（2026-02-16 時点）、2026-04-20 発表は累計発行額 21 億円（2026-04-15 時点）とする。いずれも同社集計の時点値であり、現在残高や第三者算定の市場シェアではない。
- **顧客層**: JPYC EX の本人確認済み利用者、および決済・送金へ組み込む事業者・開発者。
- 2025-08 の同社発表は、国内資金移動業者として初めて日本円建て電子決済手段を発行可能になったと説明する。これは発表時点の制度上の先行性であり、恒久的な市場順位や「唯一」を意味しない。

## 6. 沿革・重大事件

以下の表は JPYC の公式会社発表で確認できる設立、商品区分、登録、サービス開始および資金調達の節目に限定する。発行額は各発表記載の集計日付き時点値である。^[Sources: https://corporate.jpyc.co.jp/news/posts/jpyc-prepaid-renaming; https://corporate.jpyc.co.jp/news/posts/first-yen-stablecoin-jpyc; https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch; https://corporate.jpyc.co.jp/news/posts/series-b-first-close; https://corporate.jpyc.co.jp/news/posts/series-b-second-close.]

| 時期 | 出来事 |
|------|--------|
| 2019-11 | JPYC 株式会社設立。岡部典孝が代表取締役に就任 |
| 2021-01 | 前払式支払手段として旧 JPYC の提供開始 |
| 2022 | マルチチェーン展開（Polygon・Avalanche など）を拡大 |
| 2024-11-27 | 既存プリペイド型トークンを「JPYC Prepaid」へ改称 |
| 2025-08-18 | 資金移動業者登録（関東財務局長 第00099号）取得 |
| 2025-10-27 | 電子決済手段 JPYC と発行・償還窓口 JPYC EX を正式開始 |
| 2026-02-26 | シリーズ B 1st クローズで総額 17.8 億円を調達予定と発表 |
| 2026-04-20 | シリーズ B 2nd クローズで 28 億円を追加調達予定と発表 |

2026-07-29 に確認した同社ニュースと公的登録情報の範囲では、同社を対象とする行政処分または重大な資産流出を確認していない。これは将来の不存在を保証する記述ではない。

## 7. 戦略動向

- **シリーズ B の用途**: 2026 年の 1st / 2nd クローズ発表は、システム・アプリ開発、人材、企業間送金・決済導入支援、提携などへの投資を掲げる。
- **オープンな組込み**: 公式 SDK と複数チェーン対応を通じ、ウォレット、カード返済、収納・企業間決済などへの組込みを進める。各連携の「予定」「開発中」「提供開始」を個別発表どおりに区別する。
- **現行 JPYC と Prepaid の分離**: 償還可能な電子決済手段と旧プリペイド型を別トークンとして管理し、相互交換を受け付けない。

## 8. 関連人物

- **岡部典孝**（おかべ のりたか）: 代表取締役。JPYC の創業者。日本国内での円ペッグ stablecoin 発行を推進してきた中心人物。
- その他の役員・株主構成は 2026-07-29 に確認した公式会社情報・資金調達発表の範囲で扱う。

## 関連項目

- [[fintech/japan-stablecoin-regulatory-landscape]] — 日本 stablecoin 三層法制度（JPYC・USDC・信託型の位置付け）
- [[payment-firms/jpyc]] — JapanFG operating-company anchor
- [[fintech/jp-trust-type-sc-architecture]] — 三型 SC 比較（信託型・銀行型・資金移動業者型）
- [[fintech/japan-financial-regulation]] — 日本金融規制全体
- [[exchanges/jp-exchange-sbi-vc-trade]] — SBI VC Trade（電子決済手段等取引業も保有する交換業者の比較例）
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — グローバル stablecoin 規制 5 極比較
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring]] — SBI × JPYC stablecoin チャネル
- [[exchanges/jp-cex-deposit-token-stablecoin-integration]] — JP CEX deposit token / stablecoin 統合

## 出典

- [JPYC 株式会社 コーポレートサイト](https://corporate.jpyc.co.jp/)（取得 2026-07-29）
- [JPYC / JPYC EX 正式リリース](https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch)（取得 2026-07-29）
- [資金移動業者登録取得](https://corporate.jpyc.co.jp/news/posts/first-yen-stablecoin-jpyc)（取得 2026-07-29）
- [JPYC Prepaid への名称変更](https://corporate.jpyc.co.jp/news/posts/jpyc-prepaid-renaming)（取得 2026-07-29）
- [シリーズ B 1st クローズ](https://corporate.jpyc.co.jp/news/posts/series-b-first-close)（取得 2026-07-29）
- [シリーズ B 2nd クローズ](https://corporate.jpyc.co.jp/news/posts/series-b-second-close)（取得 2026-07-29）
- [JVCEA 会員一覧](https://jvcea.or.jp/member/)（取得 2026-07-29）
