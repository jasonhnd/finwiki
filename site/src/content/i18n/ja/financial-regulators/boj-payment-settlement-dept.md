---
source: financial-regulators/boj-payment-settlement-dept
source_hash: 9e37873cb25b2d42
lang: ja
status: machine
fidelity: ok
title: "決済機構局 (BoJ Payment and Settlement Systems Department)"
translated_at: 2026-06-02T14:01:20.968Z
---

# 決済機構局 (BoJ Payment and Settlement Systems Department)

## ウィキ上の位置づけ
この項目は [[financial-regulators/INDEX|financial-regulators INDEX]] 配下に位置づける。日銀の市場操作側の対応部局は [[financial-regulators/boj-financial-markets-dept|金融市場局]]、プルーデンス側の部局は [[financial-regulators/boj-financial-system-dept|金融機構局]] と対比して読む。より広い決済システムについては [[banking/INDEX|banking landscape]] と [[financial-regulators/boj-monetary-policy|BoJ monetary policy]] を起点にする。

## 要約

決済機構局（Payment and Settlement Systems Department）は、BOJ-NET の運営、決済システム政策、日本の主要な金融市場インフラ（FMI）のオーバーサイトを担当する日本銀行の内部部局である。日本の中央銀行マネー決済レールを運営し、リテール資金決済について全銀システムと調整する部局である。

JapanFG にとって、この局は BOJ-NET に依存する決済、清算、BaaS、短資ページすべての公式な対応部局である。つまりリテール層より上のほぼすべての銀行間フローの上流に位置する。

## 1. 機能 / 所掌

日銀の英文組織図では、決済機構局を次の事項を担当する部局としている。

- BOJ-NET（日本銀行金融ネットワークシステム）の運営。当座預金振替の RTGS 決済と JGB の DvP 決済を提供する。
- 決済システム・アーキテクチャに関する政策。流動性節約機能、稼働時間、BCP、BOJ-NET と外部 FMI の接続設計を含む。
- 日本にとってシステム上重要な FMI のオーバーサイト。全銀ネットのリテール資金移動システム、JSCC 清算、JASDEC および日銀の JGB 振替決済制度を含む。
- 決済 / 清算統計の公表。*Payment and Settlement Statistics* と不定期の *Payment and Settlement Systems Report* を含む。
- PvP、CLS、FX 決済リスクなどの論点に関する主要中央銀行とのクロスボーダー決済調整。これは BIS-CPMI 業務に関する [[financial-regulators/boj-international-dept|国際局]] と重なる。

内部調整は密である。この局は [[financial-regulators/boj-financial-markets-dept|金融市場局]] が公開市場操作を実行するための運用レイヤーを提供し、[[financial-regulators/boj-financial-system-dept|金融機構局]] が行う決済リスク監視を支える。

## 2. カウンターパーティ / 相互作用

カウンターパーティは3つの層に分かれる。

- **BOJ-NET 参加者**: 銀行、証券会社、短資会社、その他このシステムで決済する当座預金保有者。JapanFG の銀行 / 証券ユニバースの大半と、短資ページ [[financial-regulators/tokyo-tanshi|Tokyo Tanshi]]、[[financial-regulators/central-tanshi|Central Tanshi]]、[[financial-regulators/ueda-yagi-tanshi|Ueda Yagi Tanshi]] を含む。
- **国内 FMI 運営者**: 全銀ネット、JSCC、JASDEC、東京金融取引所、関連する清算 / 決済ユーティリティ。この局のオーバーサイトは法定監督ではなく政策レベルであり、法定監督は FSA が担う（[[financial-regulators/fsa-supervision-bureau|監督局]] 参照）。
- **外部調整**: クロスボーダー決済では海外中央銀行、金融市場インフラ原則では BIS-CPMI、FX 決済では CLS Bank と調整する。

リテール向け決済手段（カード、プリペイド、コード決済、BaaS レール）はこの局が運営するものではないが、この局が運営する銀行間決済レイヤーの下流利用者である。リテールレールのマップは [[banking/baas-japan-landscape|BaaS Japan landscape]] と [[banking/quick-deposit-four-methods|quick deposit four methods]] へルーティングする。

## 3. このページが重要な理由

- 銀行間決済、BOJ-NET、JGB DvP、全銀連携に触れる JapanFG ページにとって、日銀側のアンカーである。
- 「決済運営者」（この局、中央銀行マネー）と「決済監督者」（FSA、法定監督）を分ける。これはシステミックリスクやオペレーショナル・レジリエンス政策を扱うページで重要な区別である。
- BaaS / 決済ページがリテールフローを中央銀行マネー決済に接地させる必要がある場合に、上流参照先として適切なアンカーを与える。
- 金融政策部局と混同せずに、BOJ-NET 稼働時間変更、FMI オーバーサイト報告、CBDC 実験業務（該当する場合）を収録できる最も整理された置き場所である。

## 関連
- [[financial-regulators/boj-monetary-policy|BoJ monetary policy]]
- [[financial-regulators/boj-financial-markets-dept|金融市場局 (Financial Markets Department)]]
- [[financial-regulators/boj-financial-system-dept|金融機構局 (Financial System and Bank Examination Department)]]
- [[financial-regulators/boj-international-dept|国際局 (International Department)]]
- [[banking/INDEX|Banking landscape]]
- [[banking/baas-japan-landscape|BaaS Japan landscape]]
- [[banking/quick-deposit-four-methods|Quick deposit four methods]]
- [[money-market/japan-money-market|Japan money market]]

## 出典

- Bank of Japan, "Organization" (English) — https://www.boj.or.jp/en/about/organization/index.htm
- Bank of Japan, "Bank of Japan Financial Network System (BOJ-NET)" — https://www.boj.or.jp/en/paym/bojnet/index.htm
- Bank of Japan, "Payment and Settlement Systems" (outline) — https://www.boj.or.jp/en/paym/outline/index.htm
- Bank of Japan, "Payment and Settlement Releases" — https://www.boj.or.jp/en/paym/release/index.htm
- Bank of Japan, "Publications" (Annual Review) — https://www.boj.or.jp/en/about/publication/

---

> [!info] 校核状態
> confidence: **likely**。局の所掌は日銀の公開決済システムページに基づく。CBDC 実験業務は他部局と連携してこの局が担うが、ここでは詳細を断定しない。次回の *Payment and Settlement Systems Report* 公表時に更新する。
