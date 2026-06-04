---
source: banking/trust-bank-fee-structure-comparison
source_hash: 95ad2f85422c074a
lang: ja
status: machine
fidelity: ok
title: "信託銀行の手数料構造比較"
translated_at: 2026-06-02T11:47:37.310Z
---

# 信託銀行の手数料構造比較

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の下に位置し、オペレーティングモデルの詳細解説を補完する — [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|Custody Bank operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、陣営横断マトリクス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、運用比較 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] とともに読むこと。エンティティページ [[trust-banks/master-trust-bank|MTBJ]]、[[trust-banks/custody-bank|CBJ]]、[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]]、[[trust-banks/smbc-trust-bank|SMBC Trust]]、[[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]]、[[foreign-financial-institutions/state-street-japan|State Street Japan]]、[[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] とペアにすること。決済レールのコンテキストについては [[banking/jasdec-settlement-operations|JASDEC settlement operations]] を参照。機関投資家のコンテキストについては [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] を参照。

## 要約

日本の信託銀行の手数料経済は3つのドライバーに支配される:証券カストディと投信受託に対する AUC-bps プライシング、長期マンデートに対する年金信託管理手数料、フルサービス信託銀行側の不動産信託手数料。詳細な手数料スケジュールはほぼ非公開である — 株主の連結開示と個別の投信目論見書(信託約款)から集計レベルの推定のみが可能である。6 の日本の信託銀行(MTBJ, CBJ, MUFG Trust, SMTB, Mizuho Trust, SMBC Trust)と4 のグローバルカストディアン(BNY Mellon, State Street, Citi, JPM)にわたって、構造的なプライシングモデルは類似している — AUC bps + 取引単位手数料 + レベニューシェアの貸借 — が、ミックスとプライシングパワーはクライアントセグメントによって鋭く異なる。国内のカストディ専門業者(MTBJ, CBJ)はボリュームで低 bps をアンカーする;フルサービス信託銀行はより高マージンの不動産／年金／相続手数料をカストディとバンドルする;グローバルカストディアンはクロスボーダー + ICSD 接続性に対して相対的なプレミアムを請求する。マンデートレベルのプライシングは公に開示されていない;したがってこのエントリの手数料規模の詳細はエンティティ固有の事実ではなく業界レベルの推定であり、`.opinions/banking/trust-bank-fee-structure-comparison.md` に隔離されている。

## 1. 機関位置

| エンティティ | カテゴリ | 公開 AUC アンカー | 上場 | 詳細な手数料開示 |
|---|---|---|---|---|
| [[trust-banks/master-trust-bank|MTBJ]] | JP カストディ専門 | 約¥770兆(2025-03末, MTBJ 開示) | 非上場 | ラインアイテムレベルではなし;MUFG / 4 株主連結に集計 |
| [[trust-banks/custody-bank|CBJ]] | JP カストディ専門 | 約¥696兆(2025-03末, CBJ 開示) | 非上場 | ラインアイテムレベルではなし;SMTB / Mizuho 側連結に集計 |
| [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] | JP フルサービス信託銀行 | 信託資産は100兆円規模;AUC + 不動産 + 年金 | [[megabanks/mufg|MUFG]](上場)の子会社 | 集計セグメント開示 |
| [[trust-banks/sumitomo-mitsui-trust|SMTB]] | JP フルサービス信託銀行 | 信託資産は100兆円規模 | [[trust-banks/sumitomo-mitsui-trust|SMT Holdings]](上場)の子会社 | 集計セグメント開示 |
| [[trust-banks/mizuho-trust-bank|Mizuho Trust]] | JP フルサービス信託銀行 | 信託資産は10〜100兆円規模 | [[megabanks/mizuho-fg|Mizuho FG]](上場)の子会社 | 集計セグメント開示 |
| [[trust-banks/smbc-trust-bank|SMBC Trust]] | JP リテール PB 志向の信託銀行 | ¥10兆未満(PB／富裕層フォーカス) | [[megabanks/smbc-group|SMBC Group]](上場)の子会社 | リテール／PB セグメント下に集計 |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] | グローバルカストディアン — 日本ユニット | JP 固有の AUC 非開示;親会社 約$50兆 AuC/A | BNY Mellon(NYSE)の子会社 | 親会社レベルの集計のみ |
| [[foreign-financial-institutions/state-street-japan|State Street Japan]] | グローバルカストディアン — 日本ユニット | JP 固有の AUC 非開示;親会社 約$46.6兆 AuC/A(2024-12) | State Street(NYSE)の子会社 | 親会社レベルの集計のみ |
| [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] | グローバルカストディアン — 日本ユニット | JP 固有の AUC 非開示;親会社 約$35兆超 AuC(2024末) | JPMorgan Chase(NYSE)の子会社 | 親会社レベルの集計のみ |
| [[foreign-financial-institutions/citigroup-japan|Citi Japan]] | グローバルカストディアン — 日本ユニット | JP 固有の AUC 非開示;親会社 約$26.3兆 AuC/A(2024-09) | Citigroup(NYSE)の子会社 | 親会社レベルの集計のみ |

### カストディ手数料の仕組み

| 手数料コンポーネント | プライシングロジック | 典型的な規模(業界推定、エンティティ固有ではない) |
|---|---|---|

### 年金信託管理手数料

| コンポーネント | プライシングロジック | 規模の推定 |
|---|---|---|

### 証券投資信託管理手数料

| コンポーネント | プライシングロジック | 公開観測の情報源 |
|---|---|---|
| ファンドアカウンティング／NAV 計算 | 受託会社報酬にバンドル | バンドルレートとしてのみ記載 |
| 分配処理 | バンドル | 個別には開示されない |

投信業界全体にわたって、受託会社報酬は通常、ファンド総経費率のわずかな一部である — 経費率の大部分は信託銀行ではなくアセットマネージャー(運用会社報酬)と販売会社(販売会社報酬)にある。

### 不動産信託手数料(フルサービス信託銀行のみ)

| コンポーネント | プライシングロジック | 規模 |
|---|---|---|

このラインは MTBJ と CBJ には存在しない — カストディ専門業者は不動産信託を運営しない。

### 銀行横断の手数料経済マトリクス(10 エンティティ)

| 手数料の次元 | MTBJ | CBJ | MUFG Trust | SMTB | Mizuho Trust | SMBC Trust | BNY JP | SS JP | JPM JP | Citi JP |
|---|---|---|---|---|---|---|---|---|---|---|
| 証券カストディ手数料 | 非常に低い(ユーティリティ規模) | 非常に低い(ユーティリティ規模) | 中(フルサービスバンドル) | 中(フルサービスバンドル) | 中(フルサービスバンドル) | 高(PB バンドル、低ボリューム) | 中〜高(クロスボーダープレミアム) | 中〜高(クロスボーダープレミアム) | 中〜高(クロスボーダープレミアム) | 中〜高(クロスボーダープレミアム) |
| 投信受託管理手数料 | 低(ユーティリティ規模) | 低(ユーティリティ規模) | 低〜中 | 低〜中 | 低〜中 | 限定的なライン | 限定的(JP 投信はコアではない) | 限定的(JP 投信はコアではない) | 限定的 | 限定的 |
| 年金信託管理手数料 | GPIF 規模では低い;企業 DB では中 | GPIF 規模では低い;企業 DB では中 | 中(フロントオフィスとバンドル) | 中(フロントオフィスとバンドル) | 中(フロントオフィスとバンドル) | 限定的 | 中(外国年金側) | 中(外国年金側) | 中(外国年金側) | 限定的 |
| 不動産信託手数料 | なし | なし | 高(大きな不動産信託ブック) | 高(大きな不動産信託ブック) | 中〜高 | 限定的(PB のコンテキストのみ) | なし(JP 不動産信託なし) | なし | なし | なし |
| 証券貸借エージェント手数料 | 受益者とのレベニューシェア | 受益者とのレベニューシェア | レベニューシェア | レベニューシェア | レベニューシェア | 限定的 | レベニューシェア(大きなエージェントレンダー側) | レベニューシェア(大きなエージェントレンダー) | レベニューシェア | レベニューシェア |
| キャッシュマネジメントスプレッド | 小さい | 小さい | より大きい(フルバランスシート) | より大きい(フルバランスシート) | より大きい | PB のコンテキスト | $ コンテキストで大きい | $ コンテキストで大きい | $ コンテキストで大きい | $ コンテキストで大きい |
| 相続／遺言手数料 | なし | なし | あり(高マージン) | あり(高マージン) | あり | あり(PB) | なし | なし | なし | なし |
| PB／ウェルスアドバイザリー手数料 | なし | なし | あり | あり | あり | コア(高マージン) | UHNW のみ | UHNW のみ | UHNW のみ | UHNW のみ |

### プライシングパワー要約

| サービス | 最も強いプライシングパワー | 理由 |
|---|---|---|
| GPIF 規模の国内カストディ | MTBJ / CBJ | ユーティリティ規模 + 両者間の GPIF 入札競争 |
| マス投資家の投信受託会社 | MTBJ / CBJ | ボリュームユーティリティ、タイトな bps、しかしボリュームが収益を駆動 |
| 企業 DB 年金信託管理 | MTBJ / CBJ / メガバンク信託部門 | 混合 — ユーティリティ専門業者は bps で勝ち、フルサービスはバンドルで勝つ |
| 不動産信託設定 | MUFG Trust / SMTB / Mizuho Trust | 専門 + 関係駆動;カストディ専門業者からの競争なし |
| 相続／相続／遺言 | MUFG Trust / SMTB / Mizuho Trust / SMBC Trust | 高マージンのウェルスマネジメントライン;カストディ専門業者とグローバルカストディアンには存在しない |
| クロスボーダー／外国資産カストディ | BNY / State Street / JPM / Citi | クロスボーダー ICSD + サブカストディネットワークプレミアム |
| 証券貸借(大規模機関投資家) | BNY / State Street / JPM(および JP 株式国内フローでの MTBJ / CBJ) | 混合;エージェントレンダー規模が勝つ |
| 米国上場 JP 証券(ADR) | BNY / Citi / JPM | ADR 受託機関手数料 |

### 含意される手数料収益(非常に大まかな業界推定)

エンティティごとの詳細なラインアイテム手数料収益は公に開示されていない。桁オーダーの推定(業界レベルのみ、エンティティ固有の保証ではない)は以下のとおり:

| カストディ専門業者での ¥100兆 AUC あたりの含意される収益 | 業界の大まかな推定(エンティティ固有ではない) |
|---|---|
| 平均カストディ bps = 0.5 bp/年の場合 | ¥50十億 / 年の収益 |
| 平均カストディ bps = 1 bp/年の場合 | ¥100十億 / 年の収益 |
| 平均カストディ bps = 2 bps/年の場合 | ¥200十億 / 年の収益 |

これらの仮想的な bps を MTBJ / CBJ の AUC に適用して含意されるエンティティごとのグロスカストディ収益は業界レベルの推定のみであり、いかなる開示された手数料ラインにも帰属しない;その推定は `.opinions/banking/trust-bank-fee-structure-comparison.md` に隔離されている。

### 手数料トレンド

| トレンド | 信託銀行 P&L への影響 |
|---|---|
| パッシブファンド AUM の成長 | ボリューム増、bp あたり減 → 緩やかな純収益成長、マージン圧縮 |
| 外国投資家の JP 配分の成長 | MTBJ / CBJ での外国サブカストディ収益はグローバルカストディアンの手数料スケジュールに連動 |
| NISA 拡大(2024 以降) | 投信受託会社手数料のボリューム成長 |
| DC 年金改革(2025 以降) | DC 加入者残高レポーティングのボリューム成長 |
| 不動産市場の循環性 | フルサービス信託銀行にとって変動的;カストディ専門には存在しない |

### なぜ各銀行ごとの詳細な手数料テーブルを外部に公表することが不可能か

| 理由 | 影響 |
|---|---|
| カストディ手数料はマンデート固有の契約である | 銀行あたり単一の料金表はない |
| グループ連結開示は多くの手数料ラインを集計する | カストディを他の信託銀行手数料から分離できない |
| 投信受託会社報酬は各信託約款でファンドごとにのみ開示される | すべてのファンドにわたる手動集計が必要 |
| 年金信託管理手数料は個別に交渉される | GPIF を含む |
| グローバルカストディアンの日本ユニットは JP 固有のラインを開示しない | 親会社レベルの集計のみ |
| 不動産信託手数料はディールによって異なる | bp あたりの標準にベンチマークできない |

### 公に観測可能なファンドごとの投信受託会社報酬

構造化された公開データ研究のために、主要なファンドファミリーにわたる投信受託会社報酬が最も観測可能なラインである:

| アセットマネージャーファミリー | 受託会社(最も一般的) | 典型的な受託会社報酬(年率換算) |
|---|---|---|

正確な研究は、文書化されたファンドごとの受託会社報酬のために主要なファンドの信託約款をスクレイプするだろう — データはファンドごとに公開されているが集計は手間がかかる。

### 規制上の手数料制約

| レイヤー | 制約 |
|---|---|
| 信託業法の受託者責任ルール | 手数料は公正で開示されなければならない;利益相反統制 |
| 金商法 投信運用報告書 開示 | 受託会社報酬を含むファンドレベルの手数料が開示されなければならない |
| 年金基金の受託者責任 | 手数料は年金受託者の受託者責任レビューの対象 |
| スチュワードシップ・コード | 任意;可能な場合は透明な手数料開示を奨励 |
| FSA 監督指針 | 一般的な合理性レビュー;レートキャップ制度なし |

### 会計上の見方

| 項目 | 認識するエンティティ |
|---|---|
| 収益としてのカストディ／管理手数料 | 信託銀行 P&L |
| 費用としてのカストディ／管理手数料 | 資産保有者／投信ファンド |
| オフバランスシートの信託 AUC | 信託銀行のバランスシート上にない |
| オンバランスの決済口座残余 | 信託銀行のバランスシート(小さい) |
| 貸借収益のシェア | 信託銀行の収益 + 受益者の収益(契約ごとに分割) |

### 比較可能性の問題

| 問題 | 影響 |
|---|---|
| AUC vs AuA の定義の変動 | 「資産保管残高」vs「資産管理残高」はエンティティによって異なって測定される;エンティティ横断の AUC 数値は厳密には比較できない |
| 資産クラス横断のミックス効果 | あるエンティティのミックスウェイト(国内株式／JGB／外国／投信)は別のものと鋭く異なる |
| 国内のみ vs グローバル集計 | グローバルカストディアンは親会社レベルの数値を報告する;JP 固有のラインは不透明 |
| ファンドごとの投信受託会社手数料 vs 銀行あたりの集計 | ファンドごとの開示は手動で集計できるが公式には集計されない |
| 不動産手数料収益のばらつき | フルサービス信託銀行はディール駆動のばらつきのある不動産手数料を持つ |

### インフラ参加からの手数料コスト側

| インフラ | 信託銀行が支払う手数料(入力コスト) |
|---|---|
| [[banking/jasdec-settlement-operations|JASDEC]] 参加 + 取引単位 | 固定年額 + チケット単位手数料;JASDEC 料金表で公表 |
| JSCC クリアリング | クリアリングメンバーシップコスト + 取引単位クリアリング手数料 |
| BoJ JGB 振替 | BoJ システム参加コスト |
| BoJ-net 現金決済 | 取引単位コスト |
| 全銀ネット | 取引単位コスト |
| ICSD(グローバルカストディアン経由) | パススルーのグローバルカストディ手数料 |
| 議決権行使プラットフォーム(ICJ など) | プラットフォーム手数料 |

## 関連項目

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/pension-trust-mandate-allocation-japan]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## 出典

- Trust Companies Association of Japan:信託銀行の説明、信託資産統計。
- Master Trust Bank of Japan:公式サイトと事業概要;FY2024 決算(AUC 約¥770兆, 2025-03末): https://www.mastertrust.co.jp/assets/pdf/financial/zm20250521.pdf
- Custody Bank of Japan:公式サイトと事業概要;2025 開示(預り資産 約¥696兆, 2025-03末): https://www.custody.jp/data/disclosure/pdf/disclosure202507.pdf
- MUFG, SMT Holdings, Mizuho FG, SMBC Group:インベスターリレーションズの財務開示。
- BNY Mellon, State Street, JPMorgan Chase, Citigroup:インベスターリレーションズの財務報告。
- State Street FY2024 決算(AuC/A $46.6兆, 2024-12): https://investors.statestreet.com/investor-news-events/press-releases/news-details/2025/State-Street-Corporation-NYSE-STT-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx
- Citigroup Q3 2024 決算(Securities Services AuC/A $26.3兆, 2024-09): https://www.citigroup.com/rcs/citigpa/storage/public/Earnings/Q32024/2024pr-qtr3rslt.pdf
- J.P. Morgan Securities Services(AuC 約$35兆超, 2024末): https://www.jpmorgan.com/securities-services
- FSA:信託業金融機関リスト。
- 個別ファンドの信託約款／目論見書(受託会社報酬が開示されている場合)。
