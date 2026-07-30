---
source: fintech/genius-act-501-actual-implementation
source_hash: 4cf9c8bdb9a0f218
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "GENIUS Act の適法命令対応能力 · 法律と 2026 年規則案"
translated_at: 2026-07-30T02:03:00+09:00
---
# GENIUS Act の適法命令対応能力 · 法律と 2026 年規則案

## 要約

GENIUS Act は 2025 年 7 月 18 日に Public Law 119-27 として成立したが、制定法に **section 501 は存在しない**。発行体に関係する義務は **section 4(a)(5)–(6)** にある。許可を受けた決済用ステーブルコイン発行体は Bank Secrecy Act と制裁法令上の金融機関として扱われ、不適切な取引をブロック、凍結、拒否するための管理態勢を維持し、適法な命令に従う技術的能力を備えている場合に限り発行できる。同法は、成立から 18 か月後、または最終実施規則の公布から 120 日後の、いずれか早い日に発効する。2026 年 7 月 30 日時点で、ここに引用する OCC と Treasury の資料は、最終規則ではなく**規則案**を説明している。^[https://www.govinfo.gov/app/details/PLAW-119publ27] ^[https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html] ^[https://home.treasury.gov/news/press-releases/sb0435]

既存リンクを切らさないため、このページは歴史的なファイル名を維持している。一方、別個の「§501 denylist mandate」がすでに 24 時間の凍結期限、GENIUS 専用 OFAC フィード、FinCEN への月次凍結報告、または IRS の処分ワークフローを設けたという従来の記述は撤回する。今回確認した制定法本文と公式の規則制定通知には、これらの仕組みは記載されていない。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下にある。[[fintech/regulatory-reset-2025-usa-crypto-policy|米国の 2025 年規制リセット]]、[[fintech/treasury-stablecoin-policy-2025|Treasury のステーブルコイン政策]]、[[fintech/chain-level-ofac-freeze-precedent|チェーンレベルの OFAC 凍結先例]]とあわせて読む。法域横断の文脈は [[fintech/global-stablecoin-regulatory-five-pole-matrix|五極比較マトリクス]] と [[fintech/mica-overview|MiCA 概要]]を参照。

## 制定法が求めること

Public Law 119-27 の section 4(a) が関連要件を定める。以下は制定法本文の範囲を限定した要約であり、規制当局の技術実装マニュアルではない。

1. **BSA と制裁法令上の位置づけ。** 許可を受けた決済用ステーブルコイン発行体は金融機関として扱われ、適用されるマネーロンダリング対策、顧客識別、デューデリジェンス、経済制裁に関する法令の対象となる。
2. **取引管理。** Section 4(a)(5)(A)(iv) は、連邦法または州法に反する特定の取引もしくは許容されない取引をブロック、凍結、拒否するための技術的能力、方針、手続きを求める。
3. **制裁プログラム。** Section 4(a)(5)(A)(vi) は、制裁リストの照合を含む、有効な経済制裁コンプライアンス・プログラムを求める。
4. **適法命令への対応能力。** Section 4(a)(6)(B) は、あらゆる適法命令に従う技術的能力を有し、かつ実際に従う場合に限り、発行体が決済用ステーブルコインを発行できるとしている。
5. **Treasury との調整。** Section 4(a)(6)(A) は、一定のブロック措置の前に Treasury が可能な限り発行体と調整するよう指示する一方、事前通知は必須でないことを明記している。
6. **規則制定。** Section 4(a)(5)(B) は発行体の規模と複雑性に応じた Treasury 規則を求め、section 13 はより広い規則制定手続きを定める。

同法は適法命令を、対象となる決済用ステーブルコインまたは口座を具体的に特定し、裁判所で審査可能な、最終的かつ有効な裁判所または行政機関の命令と定義する。命令の内容に応じて、差押え、凍結、バーン、または移転防止を指示し得る。^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf]

## 発効日と現在の規則制定状況

同法の発効日は、次のいずれか早い日である。

- 成立から 18 か月後に当たる 2027 年 1 月 18 日、または
- 主要な連邦決済用ステーブルコイン規制当局が最終実施規則を公布してから 120 日後。

後者の日付は、要件を満たす最終規則が公布されてからでなければ算定できない。OCC の 2026 年 bulletin は同規則を**規則制定提案通知**として説明し、この法律上の発効条件を再掲している。Treasury の 2026 年 4 月 8 日の発表も、AML と制裁の実施に関する FinCEN と OFAC の連携した規則案を説明している。これらの資料は、2025 年 7 月時点で制度が全面稼働していたとする根拠にはならない。^[https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html] ^[https://home.treasury.gov/news/press-releases/sb0435]

## 公開情報入力と指示チャネル

下表は、現在検証できる公開コンプライアンス入力と、従来版で存在するとされた実施メカニズムを区別する。根拠は、制定法、OFAC の公式リストページ、2026 年の Treasury 規則案発表である。^[https://www.govinfo.gov/app/details/PLAW-119publ27] ^[https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists] ^[https://home.treasury.gov/news/press-releases/sb0435]

| 入力またはチャネル | 2026-07-30 時点で確認できる公開状況 | 証拠の境界 |
|---|---|---|
| OFAC SDN List | 稼働中の公開制裁リスト。一部の記録にはデジタル通貨アドレスが含まれる | GENIUS 専用フィードではない |
| OFAC Recent Actions | 制裁措置に関する稼働中の公開通知ストリーム | 公表時期だけで発行体に一律の対応期限が生じるわけではない |
| 適法な裁判所または行政機関の命令 | 同法で認められている | 命令は同法の有効性、具体的特定、司法審査可能性の基準を満たす必要がある |
| FinCEN / OFAC 実施規則 | 2026 年 4 月に提案 | 規則案を最終規則として報告してはならない |
| 「GENIUS §501 JSON denylist」 | 確認した資料から、そのような公式公開チャネルは特定できない | 従来の主張を削除 |

OFAC の通常の制裁権限は、GENIUS Act とは独立して引き続き適用される。同法が SDN List を新しいステーブルコイン専用リストに置き換えるわけではない。

## 発行体向け管理態勢マップ

同法が定めるのは成果とガバナンス義務であり、必須のブロックチェーン設計や人員予算ではない。下表は、確認済みの各義務を発行体が提示し得る証拠に対応づける。実装例は分析上の例であり、規制当局の承認を主張するものではない。^[https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf]

| 確認済みの要件 | 想定される管理証拠 | 制定法が指定していない事項 |
|---|---|---|
| 許容されない取引のブロック、凍結、拒否 | 制裁スクリーニング方針、アクセス管理、テストログ、インシデント記録 | 特定のスマートコントラクト・パターン |
| 適法命令への対応 | 法的有効性の確認ワークフロー、権限付与された実行経路、照合記録 | 一律 24 時間の期限 |
| 有効な制裁プログラムの維持 | リスト取込記録、リスク評価、エスカレーションおよびレビュー手続き | GENIUS 専用の制裁フィード |
| 疑わしい取引の監視と報告 | 適用規則に基づく BSA/AML モニタリングと SAR 管理 | すべての凍結またはバーンに関する月次報告 |
| 顧客識別管理の維持 | 口座保有者と高額取引に応じた CIP 手続きおよび記録 | 全国一律のウォレット KYC アーキテクチャ |

したがって、正しい設計上の問いは、発行体が発行するすべてのネットワークで、信頼性がありガバナンスされたコンプライアンスを実証できるかである。トークンレベルのブロックリスト、アップグレード可能なコントラクト、許可型ネットワークなどの設計を利用し得るが、引用した公開法令は Circle Arc、Stripe Tempo、その他の特定ネットワークを必須の解決策として承認していない。

## 現在の公式記録が裏付けない主張

従来版の次の主張は意図的に撤回する。

- 法律上の「501」という番号の section。
- 2025-Q4 に開始した GENIUS 専用の署名付き JSON denylist。
- 一律 24 時間の凍結要件。
- すべての凍結、バーン、差押え、発行拒否を列挙する FinCEN への月次報告義務。
- 従来記載した条件を備える、制定法上の民事責任セーフハーバー。
- 凍結または差し押さえられたトークンを 1099-DA 上のみなし処分として自動的に扱うこと。
- 2025-Q3 から稼働しているとされた、省庁間ワーキンググループ。
- 特定発行体の人員数、年間コンプライアンス費用、監査報酬の範囲。
- Circle Arc、Stripe Tempo、Paxos USDG、または RLUSD による GENIUS 成立後の実装が確認済みであるとの主張。
- 訴訟番号を示さず記載した、初期の具体的な 2 件の憲法訴訟。

これらを削除しても、将来の最終規則、発行体実務、裁判所命令、または訴訟が各論点を扱い得ないという意味ではない。今回確認した公式資料が、現時点の事実としてそれらを立証していないという意味である。

## プロダクトとリスクへの含意

制定法から、範囲を限定した次の 3 点が導かれる。

1. **マルチチェーン発行は管理対象面を増やす。** 発行体は発行先のすべてで適法な管理措置を実行できなければならず、運用証拠は各デプロイを対象にする必要がある。
2. **ガバナンスはコードと同じく重要である。** 有効性を確認した命令受付、職務分掌、ログ、レビューを欠く技術権限だけでは、完全なコンプライアンス・プログラムを実証できない。
3. **規則案は変更され得る。** 最終規則前のアーキテクチャ判断では、提案中の要件や期限を最終確定とみなさず、柔軟性を維持すべきである。

これらは制定法上の義務から導く分析上の含意であり、承認済みの技術標準に関する主張ではない。

## 比較の境界

従来版は米国の規定を「MiCA Article 23 に最も近い相当規定」としたが、この比較は具体的すぎ、異なる規定を混同していた。MiCA は、独自の認可、準備資産、償還、ガバナンス、監督の枠組みを通じて資産参照トークンと電子マネートークンを規制する。信頼できる比較には、MiCA の一つの条文を GENIUS Act section 4 と同一視するのではなく、EU の統合規則と実施基準を要件ごとに用いる必要がある。[[fintech/mica-overview|MiCA 概要]]と [[fintech/global-stablecoin-regulatory-five-pole-matrix|五極比較マトリクス]]を参照。

## 関連項目

- [[fintech/INDEX|fintech index]]
- [[fintech/regulatory-reset-2025-usa-crypto-policy|米国の 2025 年規制リセット]]
- [[fintech/treasury-stablecoin-policy-2025|Treasury のステーブルコイン政策枠組み]]
- [[fintech/occ-bank-charter-crypto-2025|暗号資産向け OCC ナショナルバンク・チャーター]]
- [[fintech/chain-level-ofac-freeze-precedent|チェーンレベルの OFAC 凍結先例]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|五極比較マトリクス]]
- [[fintech/mica-overview|MiCA 概要]]
- [[fintech/mica-cross-border-implications|MiCA のクロスボーダー論点]]
- [[exchanges/us-crypto-licensing-multi-layer-system|米国の暗号資産ライセンス多層構造]]

## 出典

- Public Law 119-27、制定法本文および立法メタデータ: https://www.govinfo.gov/app/details/PLAW-119publ27
- Public Law 119-27 PDF: https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
- OCC Bulletin 2026-3、GENIUS Act 規則案: https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html
- Treasury による FinCEN・OFAC 規則案の発表、2026-04-08: https://home.treasury.gov/news/press-releases/sb0435
- OFAC SDN List: https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists
- OFAC Recent Actions: https://ofac.treasury.gov/recent-actions
