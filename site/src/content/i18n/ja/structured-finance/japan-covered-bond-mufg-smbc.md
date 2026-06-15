---
source: structured-finance/japan-covered-bond-mufg-smbc
source_hash: e6d4b27570e64ed5
lang: ja
status: machine
fidelity: ok
title: "日本のメガバンク・カバードボンド — MUFG、SMBC の EUR/USD プログラム"
translated_at: 2026-06-03T00:53:08.356Z
---
# 日本のメガバンク・カバードボンド — MUFG、SMBC の EUR/USD プログラム

## 要約

日本のメガバンク、特に[[megabanks/mufg-bank|MUFG Bank]]と[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]は、国際投資家向けに**EUR および USD 建てカバードボンド**を発行している。これは、シニア無担保債と従来型の[[structured-finance/japan-rmbs-issuance-structure|RMBS securitization]]の間に位置づけられる USD/EUR 建て資金調達源である。日本にはドイツの Pfandbrief Act や EU Covered Bond Directive に相当する国内カバードボンド法制がないため、カバードボンド・プログラムは**契約上の構造**として組成される。発行はオフショア（通常は London、Singapore、または Tokyo 支店が European Medium-Term Note プログラムへ発行）から行われ、構造的信用補完は **UCITS Article 52(4)** の品質基準を満たし、[[JapanFG/sp-global-ratings-japan|S&P]]、[[JapanFG/moodys-japan|Moody's]]、または[[financial-regulators/jcr|JCR]] / [[financial-regulators/rating-and-investment|R&I]]から**AAA 相当格付**を得るよう設計される。

**カバープール構成**は、主に**日本の住宅ローン**である。発行メガバンクが組成したプライム品質の変動金利または混合金利の住宅ローンが、カバードボンドを担保する倒産隔離されたプールに分離される。日本のメガバンクのカバードボンド価格は、通常、**シニア無担保よりタイト**（発行体とカバープールへの二重償還により投資家保護が上乗せされるため）だが、**最上位欧州 Pfandbrief よりワイド**（法定ではなく契約構造であることと、発行国プレミアムを反映）に取引される。この項目は、[[structured-finance/japan-rmbs-issuance-structure|Japan RMBS]]と無担保メガバンク調達の橋渡しとして使う。カバードボンド、RMBS、シニア無担保の間の資金調達判断は、メガバンク財務部門にとっての構造選択である。

## ウィキ上の位置づけ

この項目は[[structured-finance/INDEX|structured-finance index]]の下に置かれる**日本のカバードボンド・ノード**であり、[[structured-finance/japan-rmbs-issuance-structure|RMBS]]とシニア無担保メガバンク債の間にある、ストラクチャードクレジット隣接の資金調達手段である。全体のストラクチャードクレジット文脈は[[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、最も近い担保側の親戚は[[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、国内格付処理とグローバル格付会社の対比は[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]、構造ビークルレイヤーは[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK/GK/TMK/SPC vehicle choice]]と照らして読む。システム枠組みは[[finance/INDEX|finance index]]、発行銀行のアンカーは[[megabanks/mufg|MUFG]] / [[megabanks/mufg-bank|MUFG Bank]]および[[megabanks/smfg|SMFG]] / [[megabanks/sumitomo-mitsui-banking-corp|SMBC]]である。

## 1. カバードボンドとは何か — 短い復習

**カバードボンド**は、銀行が発行する債務であり、投資家に**二重償還**を与える。

1. シニア無担保債権者として発行銀行に対する償還請求
2. 銀行がデフォルトした場合、高品質資産（通常は住宅ローンまたは公的部門債務）からなる**分離されたカバープール**に対する償還請求

カバープールは発行体の一般財団から**倒産隔離**される。発行体がデフォルトした場合、カバードボンド投資家はまずカバープールのキャッシュフローから支払を受ける。カバープールが不足する場合、発行体に対して残余のシニア無担保請求権を持つ。

カバードボンドは、**シニア無担保**（発行体信用）と**[[structured-finance/japan-rmbs-issuance-structure|RMBS]]**（資産担保構造）の要素を組み合わせる。欧州市場では歴史的に、ソブリン債を除いて最も高格付でスプレッドのタイトな商品である。

## 2. 欧州の法定構造 vs 日本の契約構造

| 次元 | 欧州カバードボンド | 日本カバードボンド |
|---|---|---|
| 法的根拠 | 法定 — Pfandbrief Act（Germany）、EU Covered Bond Directive（2019/2162）を実装する EU 加盟国法 | 契約 — 国内カバードボンド法はなく、SPV と担保契約で構造を設計 |
| カバープール分離 | 法定の倒産隔離 | SPV / 信託構造による契約上の分離 |
| カバープール監視 | 法定のカバープール監視人 / カバープール登録簿 | 独立検証エージェントによる契約上の監視 |
| UCITS Article 52(4) 適格性 | 適格となるよう設計された法定レジーム | 適格となるよう設計 |
| 投資家層 | 広い欧州 / グローバル機関投資家 | 同じ — 欧州銀行 ALM ブックには UCITS 適合が必要 |
| 価格参照 | 最もタイト（Pfandbrief、French OF、Spanish Cédulas） | 最上位 EU Pfandbrief よりワイド、シニア無担保よりタイト |

日本の構造が法定ではなく**契約上**であることは重要な特徴である。日本は国内カバードボンド法を制定していないため、各プログラムは SPV と担保契約を用いて、二重償還とカバープール分離の機能を再現するよう設計される。

### MUFG Bank カバードボンド・プログラム

| 項目 | MUFG カバードボンド詳細 |
|---|---|
| 発行体 | [[megabanks/mufg-bank|MUFG Bank]]（通常は London 支店またはプログラム固有の発行エンティティ経由） |
| 形式 | カバードボンド構造を伴う Euro Medium-Term Note（EMTN）プログラム |
| 通貨 | 主に EUR および USD |
| カバープール | 日本の住宅ローン |
| カバープール監視人 | 独立検証エージェント |
| 格付 | グローバル格付会社（S&P、Moody's）から AAA 相当 |
| 期間 | 通常3-10Y |
| 資金使途 | 一般的な企業 / 財務資金調達の分散 |

### SMBC カバードボンド・プログラム

| 項目 | SMBC カバードボンド詳細 |
|---|---|
| 発行体 | [[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（通常はオフショア支店またはプログラム・エンティティ経由） |
| 形式 | カバードボンド構造を伴う EMTN プログラム |
| 通貨 | 主に EUR および USD |
| カバープール | 日本の住宅ローン |
| カバープール監視人 | 独立検証エージェント |
| 格付 | グローバル格付会社から AAA 相当 |
| 期間 | 通常3-10Y |
| 資金使途 | 財務資金調達の分散 |

両プログラムは、欧州銀行の流動性バッファーと ALM ブックが有利な規制上の取扱いで保有できるよう、**UCITS Article 52(4) 適合**として設計されている。

## 4. カバープール構成 — 住宅ローン

| カバープールの特徴 | 日本メガバンクのパターン |
|---|---|
| 資産クラス | 発行銀行が組成したプライム品質の日本の住宅ローン |
| Loan-to-value | 保守的 — 通常は高品質な LTV 帯 |
| 金利タイプ | 変動金利と固定金利住宅ローンの混合 |
| 地域集中 | メガバンクの貸出フットプリントを反映し、東京圏と主要都市への比重が大きい |
| 通貨 | JPY 建て（EUR/USD カバードボンドとの通貨ミスマッチを生む。通貨スワップで対応） |
| カバープール超過 | AAA 格付を得るため、通常はカバープールが過剰担保化される（カバープール価値 > カバードボンド残高） |
| 補充 | オリジネーターが期限前返済またはデフォルトでプールから外れた住宅ローンを新しい住宅ローンで置き換える |

JPY 建てカバープール資産と EUR/USD 建てカバードボンド負債の**通貨ミスマッチ**は、SPV 構造内のクロスカレンシースワップによって対応される。

## 5. シニア無担保との価格比較

| 資金調達商品 | 概略の価格位置 |
|---|---|
| MUFG / SMBC シニア無担保 EUR/USD 債 | 価格参照 |
| MUFG / SMBC シニアプリファード / TLAC | シニア無担保よりワイド |
| MUFG / SMBC シニアノンプリファード / 劣後 | さらにワイド |
| MUFG / SMBC AT1 / Tier 2 | 最もワイド |

**シニア無担保に対するカバードボンドの資金調達上の改善**は実在し、構造的信用補完を反映している。改善幅は市場環境によって変動し、メガバンク財務部門が外貨調達の一部をカバードボンド発行に割り当てる理由の一つである。

| 発行体側がカバードボンドを使う理由 | 読み方 |
|---|---|
| 調達コスト | シニア無担保より内側 — 調達コストの節約 |
| 投資家分散 | シニア無担保では得にくい条件で、欧州 ALM ブックとアジア中央銀行準備に到達 |
| 期間 | 通常のシニア無担保より長めの USD/EUR 調達を支える |
| 規制上の取扱い | 証券化のオフバランス処理を消費しない（カバードボンドは発行体にとってオンバランス債務） |

## 6. カバードボンド vs RMBS — 資金調達商品の選択

| 次元 | カバードボンド | [[structured-finance/japan-rmbs-issuance-structure|Private RMBS]] |
|---|---|---|
| 発行体のバランスシート処理 | オンバランス（カバードボンドは発行体債務） | オフバランス（資産を SPV に売却） |
| 償還請求 | 二重 — 発行体 + カバープール | 限定償還 — SPV / 信託のみ |
| カバープール補充 | 動的 — 発行体がシーズニング済み / デフォルト済みローンを置き換える | 静的 — 証券化クロージング時にプール固定 |
| 投資家層 | 銀行 ALM ブック、中央銀行、広い機関投資家 | 専門 RMBS 投資家 |
| 発行頻度 | プログラム型 | 断続的 / 機会主義的 |
| 通貨 | EUR/USD が一般的（国際市場向け） | 通常は JPY（国内向け） |
| 資金使途 | 一般調達 | 資本軽減 + 資金調達 |
| 典型発行体 | 最大手銀行 | メガバンクと信託銀行 |

二つの商品は**補完的**であり、代替品ではない。カバードボンドはオンバランス処理を伴う資金調達分散ツールであり、RMBS はオフバランス処理を伴う資本軽減とリスク移転ツールである。

## 7. 反論・留意点

- **「日本のカバードボンドは法定根拠がないため本物ではない」** — 部分的に正しい。契約構造は機能的に同等の投資家保護を提供するが、基礎は法定ではなく設計されたものにすぎない。SPV / 担保契約アーキテクチャがあるため、グローバル投資家と格付会社はこの構造をカバードボンド相当として受け入れている。
- **「カバードボンドの価格メリットは小さい」** — 市場環境による。スプレッドが広い環境では改善幅は意味がある。タイトな環境では改善幅が圧縮される。
- **「カバープールの通貨ミスマッチはベーシスリスクを生む」** — クロスカレンシースワップで対応されるが、スワップカウンターパーティリスクは構造の一部である。
- **「日本はカバードボンド法を通すべきだ」** — 議論がある。法定枠組みは価格をさらにタイトにする可能性があるが、立法努力を要する。法制がないことは、メガバンクが相応の規模で発行する妨げにはなっていない。
- **「カバードボンドは RMBS 発行を食う」** — 証拠は限定的である。二つの商品は発行体にとって異なる機能を果たす。

## 関連項目

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice]]
- [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose company mechanics]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[megabanks/mufg|MUFG]] · [[megabanks/mufg-bank|MUFG Bank]]
- [[megabanks/smfg|SMFG]] · [[megabanks/sumitomo-mitsui-banking-corp|SMBC]]
- [[megabanks/mizuho-fg|Mizuho FG]] · [[megabanks/mizuho-bank|Mizuho Bank]]
- [[INDEX|FinWiki index]]

## 出典

- MUFG IR — https://www.mufg.jp/english/ir/
- SMBC Group IR — https://www.smfg.co.jp/english/investor/
- FSA bank supervision disclosures — https://www.fsa.go.jp/en/
- BOJ Financial System Report — https://www.boj.or.jp/en/
- European Covered Bond Council (ECBC) — https://www.hypo.org/ecbc/
- EU Covered Bond Directive 2019/2162 public legislative text.
