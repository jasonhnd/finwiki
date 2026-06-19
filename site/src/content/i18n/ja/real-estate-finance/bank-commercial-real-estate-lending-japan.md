---
source: real-estate-finance/bank-commercial-real-estate-lending-japan
source_hash: 0f74bf3e3f948e30
lang: ja
status: machine
fidelity: ok
title: "日本の銀行による商業用不動産融資"
translated_at: 2026-06-19T13:13:22.617Z
---

# 日本の銀行による商業用不動産融資

## TL;DR

日本の商業用不動産（CRE）融資は重層的なシステムである。メガバンクが大型プロジェクトファイナンスと J-REIT スポンサー向け融資の中核を担う。信託銀行は、不動産信託機能・鑑定・資産管理とあわせて、バランスシート融資の橋渡しをする。地方銀行は、コアな純利ざや（NIM）の圧縮を補うために CRE への集中度を高めてきており、これは繰り返し [[banking/INDEX|banking supervisor]] で懸念される論点である。引受実務は、ローン・トゥ・バリュー（LTV）の上限と、デット・サービス・カバレッジ（DSCR）の目標を中心に据えており、2008 後の監督強化、コロナ後の集中度モニタリング、マイナス金利政策（NIRP）後の金利正常化ストレスのすべてが [[banking/INDEX|FSR / FSA]] の論評に現れている。本ページはルートとリンクのためのものであり、具体的なエクスポージャー数値や引受条件は、利用前にメガバンクの IR と日銀の金融システムレポートに照らして検証しなければならない。

## Wiki route

本エントリは [[real-estate-finance/INDEX]] の下に位置し、[[banking/INDEX]] 上で銀行側カウンターパーティへとルーティングする。上場 J-REIT ユニバースへのスポンサー側銀行融資については [[real-estate-finance/j-reit-market-overview]] と、ノンバンクのプライベートクレジットという代替手段については [[real-estate-finance/real-estate-private-credit-japan]] と、LTV / DSCR 比率を左右するバリュエーションの背景については [[real-estate-finance/real-estate-cap-rate-compression-2026]] と、CRE 引受で用いられる鑑定フロアについては [[real-estate-finance/japan-real-estate-appraisal-methodology]] と照らして読むこと。メガバンク側の中核は [[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]] であり、信託側の中核は [[trust-banks/sumitomo-mitsui-trust]] と [[trust-banks/mitsubishi-ufj-trust-bank]]、政策金融側の中核は [[financial-regulators/dbj]] である。地方銀行の集中度ドライバーは [[banking/regional-bank-consolidation-pattern]] へとルーティングする。保険会社の競合 / 協調融資者マップは [[insurance/japan-life-insurance-alm-overview]] にある。資金調達コストの背景は [[money-market/japan-money-market]] にある。

## 銀行側の構造マップ

| 貸し手の区分 | 機能的役割 | CRE におけるポジショニング |
|---|---|---|
| メガバンク（[[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]]） | 大きなバランスシート、シンジケート型プロジェクトファイナンス、J-REIT スポンサー融資、海外 CRE 部門。 | プライムな東京 / 大阪のオフィス、物流、ホスピタリティ、大型複合用途の主要な引受人。 |
| 信託銀行（[[trust-banks/sumitomo-mitsui-trust]]、[[trust-banks/mitsubishi-ufj-trust-bank]]） | 信託勘定融資に加え、不動産仲介、鑑定、資産管理。 | バランスシート融資、不動産信託スキーム（TMK / GK-TK）、年金 / 機関投資家クライアントへの配分の橋渡し。 |
| 地方銀行 | 地元の中小企業向け信用、不動産担保のタームローンに加え、拡大するアパートローンと東京 CRE への参画。 | 国内 NIM 圧縮を補うために融資残高に占める CRE の比率が高まる場合の集中リスク。 |
| 政策 / 開発銀行（[[financial-regulators/dbj]]） | 政策連動のプロジェクトファイナンス、インフラ、都市再開発の協調融資。 | 政策との整合性をもつ大型の都市再開発・物流案件の協調融資者 / リードアレンジャー。 |
| 外国銀行 | クロスボーダー CRE ファイナンス、J-REIT シニア・トランシェ、メザニン、ウェアハウス・ファシリティ。 | ニッチであり、しばしば [[real-estate-finance/real-estate-private-credit-japan]] で扱う外国のプライベートクレジット GP と組み合わされる。 |

## プロジェクトファイナンス対コーポレートファイナンス

| 観点 | プロジェクトファイナンス | コーポレートファイナンス |
|---|---|---|
| 借り手 | 特定された資産 / ポートフォリオを保有する特別目的事業体（TMK、GK-TK、または LLP）。 | 事業会社のバランスシート。 |
| ソリューション（遡求） | プロジェクトのキャッシュフローと資産に限定され、スポンサーのサポートレターと完工保証を伴う。 | すべての無担保資産に対するフルコーポレート・リコース。 |
| 引受指標 | ローン・トゥ・バリュー（LTV）、デット・サービス・カバレッジ（DSCR）、インタレスト・カバレッジ（ICR）、デットイールド。 | コーポレートレバレッジ（純有利子負債 / EBITDA）、インタレスト・カバレッジ、バランスシートの質。 |
| 期間（テナー） | バレット / 部分アモチゼーションを伴う 5 〜 10 年が典型的。 | リボルバー、ターム、または社債型で、リボルバーはしばしばより短い。 |
| プライシング | 参照金利に対するシニアマージンで、しばしばコーポレートより高く、劣後トランシェはよりワイドにプライシングされる。 | コーポレートクレジットのスプレッドで、プライムな事業会社にはよりタイト。 |
| ユースケース | 単一資産の取得、J-REIT スポンサーのウェアハウス、大型再開発、物流ポートフォリオ。 | 上場デベロッパー / REIT のコーポレート・ファシリティ、運転資金、社債スタックのリファイナンス。 |

CRE プロジェクトファイナンスは、J-REIT スポンサー融資、[[real-estate-finance/real-estate-private-credit-japan|private-credit-co-invested]] 案件、大型再開発で支配的である。上場デベロッパー / REIT のコーポレートファイナンスは、より社債・ローン側に位置し、スポンサーの LBO / テイクプライベートのロジックが関わる場合には [[finance/japan-private-equity-fund-structure-matrix]] に照らして読まれる。

## ローン・トゥ・バリュー（LTV）の引受レンジ

| 資産クラス | シニア LTV 区分 | 総 LTV（シニア＋メザニン） | レンジの理由 |
|---|---|---|---|
| プライムな東京オフィス（CBD コア） | 55 〜 65% | 70 〜 75% | より低いキャップレート、深い流動性、外国人買い手の支え。シニアの貸し手は控えめに高い LTV を受け入れる。 |
| 東京 / 大阪の物流 | 55 〜 65% | 70 〜 75% | 長期 WAULT の機関投資家テナント、e コマース主導の需要、安定したキャッシュフロー。 |
| 東京の住宅（賃貸） | 60 〜 70% | 75 〜 80% | 長期の入居安定性、分散したテナント基盤、低いキャッシュフローのボラティリティ。 |
| 大阪 / 地方都市のオフィス | 50 〜 60% | 65 〜 70% | より薄い買い手基盤、より高いキャップレート、テナント集中リスク。 |
| ホスピタリティ（ホテル、旅館） | 45 〜 55% | 60 〜 70% | オペレーティング・キャッシュフローのボラティリティ、RevPAR 感応度、コロナ期の記憶。 |
| リテール（プライムな都市部） | 50 〜 60% | 65 〜 70% | テナントミックスリスクと賃料改定サイクル。 |

これらはクラスの記述子にすぎない。実際の引受 LTV は、[[real-estate-finance/real-estate-cap-rate-compression-2026]] に従い、スポンサー、資産の質、リース満期、現在のキャップレート環境によって変動する。

## デット・サービス・カバレッジ（DSCR）とインタレスト・カバレッジのフロア

| 指標 | 典型的なフロア | 読み方 |
|---|---|---|
| DSCR（シニア） | 1.30 〜 1.50倍 | オペレーティング・キャッシュフロー対シニアの元利金返済。よりボラティリティの高い資産にはよりタイト。 |
| DSCR（総合） | 1.10 〜 1.25倍 | オペレーティング・キャッシュフロー対シニア＋メザニン / 優先出資の返済。 |
| インタレスト・カバレッジ・レシオ（ICR） | 2.0 〜 3.0倍 | オペレーティング・キャッシュフロー対利息のみ。バレット構造の案件に関連する。 |
| デットイールド | 8 〜 10% | NOI / 総負債。キャップレートから独立した貸し手側のストレス指標。 |

DSCR のフロアは金利正常化をストレステストする。NIRP の解除はマイナス / ゼロ圏から参照金利を引き上げており、想定上の +100 〜 +200bp のショックの下でテストされる DSCR は、いまや [[banking/INDEX|FSR]] の論評に従う標準的なコベナンツ・レビューである。資金調達コストの参照パスについては [[money-market/japan-money-market]] とあわせて読むこと。

## 2008 後の監督強化

2008 〜 2009 のサイクルは、3 つの構造的問題を露呈させた:

1. 融資残高に占める不動産の比率が健全な閾値を超えた地方銀行における CRE 集中リスク;
2. キャップレートがワイド化するなかでの不動産担保のマーク・トゥ・マーケットのボラティリティ;
3. ワークアウトを複雑にするクロス・コラテラリゼーションと複雑な GK-TK / TMK 構造。

2009 〜 2015 （日銀 FSR、FSA の検査フォーカス）にわたる監督上の対応は、以下を強化した:

| 領域 | 強化 |
|---|---|
| 集中度の上限 | 融資残高総額に占める CRE 比率に関する内部上限設定の期待。 |
| 鑑定規律 | 保守的な鑑定フロアと定期的な再評価の要件。 |
| ストレステスト | キャップレートのワイド化、空室ショック、金利ショックに対する銀行内部のストレスシナリオ。 |
| プロジェクトファイナンスのコベナンツ | よりタイトな LTV / DSCR トリガーとキャッシュトラップの仕組み。 |
| メザニン / 優先出資の開示 | ノンバンクのトランシェを含む総レバレッジに関するより良い可視性。 |

これらは現在のサイクルに引き継がれたベースラインの期待であり、[[megabanks/mufg-bank]]、[[megabanks/sumitomo-mitsui-banking-corp]]、[[megabanks/mizuho-bank]] に関するメガバンクの IR リスク開示に現れている。

## コロナ後の CRE 集中度

コロナ期のストレスは以下に集中した:

| 資産クラス | ストレスのパターン |
|---|---|
| ホスピタリティ | 渡航制限中のキャッシュフロー崩壊。監督上の猶予と再編の波。 |
| リテール | テナント賃料の再編。客足の回復は不均一。 |
| オフィス（地方） | ハイブリッドワークによる残存需要の不確実性。サブプライムなオフィスのキャップレートのワイド化。 |
| ホスピタリティの回復 | 2023 からのインバウンド観光のリバウンドが急回復を支えた。プライムなホテルのキャップレートは再びタイト化した。 |

集中度モニタリングは、以下のような地方銀行で強化された:

- 国内 NIM の圧縮が CRE の拡大をインセンティブ化した;
- 地方銀行による東京 / 県外 CRE への参画が監督上の注目を集めた;
- アパートローンのポートフォリオ（アパートローン）が 2015 〜 2018 のヴィンテージからのレガシーな引受の弱さを抱えていた。

部分的にこれらの構造的圧力に駆動された地方銀行の再編は、[[banking/regional-bank-consolidation-pattern]] にマッピングされている。

## メガバンクの CRE エクスポージャーの形

メガバンクの IR 開示は、「不動産業向け貸出」「不動産ノンリコースローン」または「不動産関連与信」といったカテゴリーの下で CRE エクスポージャーを公表している。その構成は典型的に以下を含む:

| カテゴリー | 含まれるもの |
|---|---|
| 不動産業向け貸出 | 上場デベロッパー、不動産事業者、J-REIT スポンサーへの貸出。 |
| 不動産ノンリコースローン | 特定の資産またはポートフォリオに対するプロジェクトファイナンス / SPV 融資。 |
| アパートローン | 個人 / 中小企業のアパート投資家向け貸出。 |
| 建設業向け貸出 | 不動産セクターにエクスポージャーをもつ建設請負業者への貸出。 |
| 海外 CRE | 海外支店の CRE エクスポージャー（米国 / EU / アジアのオフィス、物流、住宅）。 |

3 つのメガバンクは、有意に異なるミックスをもつ:

- [[megabanks/mufg-bank]] は、米国 / EU の支店ネットワークを通じた相当規模の海外 CRE に加え、大きな国内の不動産スポンサーブックを抱える。
- [[megabanks/sumitomo-mitsui-banking-corp]] は、集中した国内 CRE ブックに加え、選択的な海外プロジェクトファイナンスを運営する。
- [[megabanks/mizuho-bank]] は、J-REIT と上場デベロッパーとの長い関係の歴史をもつ、国内 / 海外の混合プロファイルをもつ。

信託銀行の中核 [[trust-banks/sumitomo-mitsui-trust]] と [[trust-banks/mitsubishi-ufj-trust-bank]] は、信託銀行が受益権構造を保有し、融資とあわせて資産管理を提供する不動産信託の次元を加える。

正確な CRE エクスポージャー数値と集中度比率は四半期ごとの開示で入れ替わるため、利用前に該当するメガバンクの IR ページで検証すること。

## J-REIT スポンサー融資

J-REIT スポンサーと個別の J-REIT ビークルへの銀行融資は、CRE の中核的なビジネスラインである。典型的な構造:

| 構造 | 説明 |
|---|---|
| スポンサーサポートローン | ドロップダウン前に取得済み資産をウェアハウスするための J-REIT スポンサーへの直接融資。 |
| J-REIT レベルのシニアローン | 上場 J-REIT 事業体におけるタームローン / 社債購入。 |
| ブリッジファシリティ | エクイティ調達またはリファイナンスを待つ取得のための短期ファイナンス。 |
| ウェアハウスファシリティ | スポンサーのバランスシート上での物件の取得 / 処分のためのリボルビング・クレジット。 |

J-REIT ビークルへの銀行融資は、クロスボーダーの保有の次元について [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] と [[real-estate-finance/j-reit-foreign-investor-ownership]] に照らして読まれる。J-REIT の資金調達ミックスには、銀行借入の代替として [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|bond / equity issuance]] も含まれる。

## NIRP 後の金利正常化ストレス

日銀の NIRP 解除と YCC 後の正常化パスは、以下を引き上げた:

- シニアの変動金利 CRE ローンの返済コスト;
- リファイナンス時のレガシーなバレット構造案件への DSCR ストレス;
- リスクフリーレートの上昇に伴うキャップレートのフロアへの圧力（[[real-estate-finance/real-estate-cap-rate-compression-2026]] で扱う）;
- 銀行が新規組成のスプレッドを調整するなかでの競争的なリプライシング。

2025 〜 2026 のヴィンテージの CRE ローンにおける引受基準は、より高い参照金利の前提、より保守的なリファイナンスリスクのモデリング、改訂された DSCR フロアを織り込んでいる。資金調達コスト参照の詳細については [[money-market/japan-money-market]] と、生命保険会社の競合バランスシートにおける並行する ALM リプライシングのロジックについては [[insurance/japan-life-insurance-alm-overview]] とあわせて読むこと。

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[real-estate-finance/jrei-foreign-investment-tax-treatment]]
- [[banking/INDEX]]
- [[banking/regional-bank-consolidation-pattern]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[money-market/japan-money-market]]
- [[finance/japan-private-equity-fund-structure-matrix]]
- [[finance/japan-private-equity-operating-model]]
- [[megabanks/mufg-bank]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## Sources

- 日本銀行: 金融システムレポート、CRE の集中度とストレステストを扱う半期刊行物。
- FSA: 不動産融資に関する検査フォーカス、監督上のレター、政策論評。
- ARES（不動産証券化協会）: J-REIT と不動産ファンドの統計。
- メガバンクの IR ページ: MUFG、SMFG、Mizuho FG の四半期リスク開示と有価証券報告書。
- 信託銀行の IR ページ: SMTB、MUFG 信託の四半期開示。
- DBJ: プロジェクトファイナンスとインフラファイナンスの開示および政策刊行物。
