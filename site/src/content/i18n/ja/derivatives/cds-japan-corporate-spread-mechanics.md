---
source: derivatives/cds-japan-corporate-spread-mechanics
source_hash: fcca7c1d98f0bfbc
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本社債 CDS スプレッドのメカニクス"
translated_at: 2026-06-26T08:29:25.265Z
---

# 日本社債 CDS スプレッドのメカニクス

## TL;DR

日本社債 CDS スプレッドとは、プロテクションの買い手が、参照する日本の上場企業に対するデフォルト連動の支払いと引き換えに、プロテクションの売り手に支払うランニング・ベーシスポイントのプレミアムである。スプレッドは、信用リスクプレミアム（予想デフォルト確率と想定回収率の関数）に、構造的プレミア（原債券に対するベーシス、ディーラーキャリー、規制資本コスト）を加えたものに分解される。日本社債 CDS は**ソブリン対社債スプレッド**に対してプライシングされ、日本ソブリン CDS が暗黙のクレジットフリーアンカーとなり、個別社債スプレッドがその上に積み重ねられる。2014 ISDA クレジットデリバティブ定義のもとでのクレジットイベントのトリガーは、**破産、支払不履行、リストラクチャリング**をカバーする（Mod-R / Mod-Mod-R バリアントが引渡可能債務を決定する）。回収率はクレジットイベント後の **ISDA 主催オークション**によって決定される。生命保険会社と年金基金は、ESR ／会計上の制約を踏まえて CDS をわずかしか用いないが、インデックス CDS を通じた信用スプレッドのヘッジは [[insurance/japan-life-insurance-alm-overview|life ALM]] の議論で繰り返し取り上げられるトピックである。

## Wiki ルート本エントリは [[derivatives/INDEX|derivatives index]] の配下に位置し、[[derivatives/japan-cds-market-overview|Japan CDS market overview]] を補完するスプレッドメカニクスのページである。アービトラージ構造については [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]]、原資産となる円金利カーブについては [[derivatives/japan-irs-market|Japan IRS market]]、JPY ファンディングオーバーレイについては [[derivatives/yen-basis-swap-market|yen basis swap market]]、そして日本の機関投資家のファンディングを支配する USD オーバーレイについては [[derivatives/cross-currency-basis-swap-japan|cross-currency basis swap Japan]] と併せて読むこと。

発行体側の信用コンテキストについては [[finance/INDEX|finance index]] と [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]]、エクイティ-クレジットのリンケージについては [[finance/japan-cross-shareholding-unwinding-economics|cross-shareholding unwinding economics]]、メガバンクのディーラー／カウンターパーティの役割については [[banking/INDEX|banking index]]、保険会社の信用ヘッジのユースケースについては [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]]、ディーラーからファンドへのプラミングについては [[securities/japan-prime-brokerage-and-institutional-financing|prime 証券仲介 and institutional financing]] をクロスリファレンスのこと。

### 構成要素ホライズン T にわたる日本のシングルネーム社債 CDS スプレッド *S(corp)* は、概念的に次のように分解できる。

```
S(corp, T) ≈ S(sovereign, T) + S(sector, T) + S(idiosyncratic, T) + basis_adjustment
```

| Component | Driver |
|---|---|
| ソブリンベースライン *S(sovereign, T)* | ホライズン T における日本ソブリン CDS スプレッド; 短いテナーではほぼゼロ、5Y ／ 10Y ではわずかにプラス |
| セクタープレミアム *S(sector, T)* | セクターレベルの信用ファクター（金融対 産業対 通信、など） |
| 個別要因 *S(idiosyncratic, T)* | 企業固有のレバレッジ、キャッシュフローの安定性、ガバナンス、M&A プロファイル |
| ベーシス調整 | ディーラーのバランスシート、レポのスペシャル、規制コストによって駆動される CDS-債券ベーシス — [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] を参照 |

この分解は概念的なものであり、代数的なものではない。市場慣行は、構成要素から積み上げるのではなく、市場クォートを通じて社債 CDS カーブを直接フィッティングする。

### リスク中立デフォルト確率

CDS スプレッドはリスク中立ハザードレート（またはハザードレートの期間構造）を含意する。

```
リスク中立デフォルト確率（期間あたり） ≈ S / (1 - R)
```

ここで S はランニングスプレッド、R は想定回収率である。想定 R = 40 パーセントの投資適格日本社債について：

| 5Y CDS spread (bps) | Implied 5Y risk-neutral default probability |
|---|---|
| 25 bps | ~2.0 percent |
| 50 bps | ~4.1 percent |
| 100 bps | ~8.0 percent |
| 200 bps | ~15.5 percent |
| 500 bps | ~34 percent |
| 1000 bps | ~57 percent |

リスク中立デフォルト確率は実際のデフォルト確率ではない; それはリスクプレミアムと流動性プレミアムを織り込んでいる。投資適格日本社債の歴史的なデフォルト率は、通常の状況下ではこれらのリスク中立で含意される水準を大幅に下回る。

### 回収率の想定

| Reference obligation type | Standard assumed recovery |
|---|---|
| シニア無担保社債（大半の日本 IG） | 40 percent |
| 劣後社債 | 25 percent |
| 銀行シニア優先 | 40 percent |
| 銀行シニア非優先 / Tier 2 | 法域に応じて 25-40 percent |
| ソブリン（先進国市場） | 40 percent（日本） |

40 パーセントの想定は慣例的なものであり、市場が含意するものではない。クレジットイベント後のオークションが実際の回収率を決定する（後述）。

## 2014 ISDA 定義のもとでのクレジットイベント

2014 ISDA クレジットデリバティブ定義は、CDS 決済をトリガーするクレジットイベントを規定する。日本社債 CDS については、三つのクレジットイベントが標準である。

### 破産

| Trigger | Description |
|---|---|
| 民事再生の申立て | 日本の法定企業再生手続 |
| 会社更生の申立て | より大規模な企業向けの日本の法定再生手続 |
| 特別清算 | 裁判所監督下の清算 |
| 外国倒産手続 | 参照エンティティが外国法域の倒産イベントを有する場合 |
| 一般的な解散 / 清算 | 任意または強制の解散 |

破産は最もクリーンなトリガーである。ISDA 決定委員会（DC）が、申し立てられたイベントが該当するかを判断し、クレジットイベントの決定を公に発表する。

### 支払不履行

| Trigger | Description |
|---|---|
| 支払デフォルト | グレースピリオド後、しきい値（通常 USD 1 百万相当）を超える債務について、予定された支払いを行えないこと |
| グレースピリオド | 契約上のグレースピリオドが適用されない限り、標準的なグレースピリオドは通常 3 営業日 |
| キュアピリオド | トリガー前の任意のキュアピリオド |

日本社債については、グレースピリオド後に支払漏れとなった予定債券または融資の支払いが、DC の判断を条件として該当する。

### リストラクチャリング（およびバリアント）

| Variant | Coverage |
|---|---|
| フルリストラクチャリング (R) | オリジナルの 1999 定義; 債務リストラクチャリングイベントの広範なカバレッジ |
| モディファイドリストラクチャリング (Mod-R) | 米国慣行; 引渡可能債務の満期はクレジットイベントから 30 ヶ月にキャップ |
| モディファイド-モディファイドリストラクチャリング (Mod-Mod-R) | 欧州／日本慣行; 引渡可能債務の満期は 60 ヶ月にキャップ |
| ノーリストラクチャリング (No-R) | 米国の 2009後; リストラクチャリングをクレジットイベントから除外 |

| Restructuring trigger | Detail |
|---|---|
| クーポン削減 | 合意クーポンの削減 |
| 元本削減 | 元本額の削減 |
| 満期延長 | 支払期日の延長 |
| 劣後化 | 支払優先順位の変更 |
| 通貨変更 | 許可されていない通貨への変更 |

日本社債 CDS は慣例的に **Mod-Mod-R**（モディファイド-モディファイドリストラクチャリング）で取引され、欧州市場慣行と整合する。引渡可能債務の満期に対する Mod-Mod-R のキャップは、広範なリストラクチャリングが生み出す「チーペスト・トゥ・デリバー」のオプショナリティを低減する。

### 政府介入（銀行）

日本の金融機関 CDS については、2014 定義がベイルインおよびレゾリューション措置をカバーする**政府介入**クレジットイベントを追加した。

| Event | Trigger |
|---|---|
| ベイルイン | 債務商品の法定の評価減または転換 |
| レゾリューション当局の措置 | 所管当局による債務の移転またはヘアカットの賦課 |
| 強制資産売却 | クレジットイベント相当を構成する強制的な処分 |

これは [[megabanks/mufg|MUFG]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]（SMFG 経由）、[[megabanks/mizuho-bank|Mizuho]]（みずほ FG 経由）、およびその他の日本の金融機関 CDS にとって関連性があり、そこでは預金保険法およびより広範なレゾリューション枠組みのもとでの銀行のレゾリューションがプロテクションのカバレッジにとって重要となる。

## ISDA 決定委員会（DC）プロセス

| Stage | Activity |
|---|---|
| イベント報告 | 市場参加者が ISDA DC に質問を提出 |
| DC レビュー | DC が公表されたタイムラインの中でイベントを公表基準に照らしてレビュー |
| 公式発表 | DC がクレジットイベントの是非について拘束力のある決定を発表 |
| オークションまたは決済の決定 | DC がオークションを招集するか否かを決定 |
| オークション管理 | オークションが招集された場合、Creditex / Markit が主催するプロセスを通じて実施 |
| 最終価格 | オークションで決定された最終価格を公表 |

DC は、地域別（米州、EMEA、アジア（日本除く）、日本、豪州／ニュージーランド）に主要なディーラーおよびバイサイドの会社で構成される常設委員会である。日本の参照エンティティについては、関連する DC に日本でアクティブな主要ディーラーが含まれる。

DC の決定は ISDA クレジットデリバティブ決定委員会のウェブサイトで公に公表され、標準的な ISDA 文書化された CDS 契約について拘束力を持つ。

## 回収率オークションのメカニクスクレジットイベント後、ISDA 主催のオークションが、現金決済 CDS に用いられる回収率を設定する。

| Stage | Activity |
|---|---|
| オークション発表 | ISDA / Creditex がオークション日と引渡可能債務のリストを発表 |
| 初回ビッディング（ステージ 1） | 参加するビッダーが双方向マーケットを提出; 初回マーケットの中間点を計算 |
| オープンインタレスト公表 | ネットのオープンインタレストの方向（買いまたは売り）を公表 |
| 指値注文板（ステージ 2） | ビッダーがオープンインタレストを埋めるために指値注文を提出 |
| 最終価格 | オークションのクリアリング価格を設定; これが現金決済に用いられる「回収率」となる |

現金決済：プロテクションの売り手はプロテクションの買い手に（想定元本）×（1 - 最終価格）を支払う。例えば、最終オークション価格が 35, であれば回収率は 35 パーセントであり、プロテクションの売り手は想定元本の 65 パーセントを支払う。

現物決済（レガシーであり、現行の大半の契約のもとでは任意）は、額面に対する支払いと引き換えに適格債務を引き渡すことを伴う。現代の大半の CDS 契約は、オークションを通じた現金決済をデフォルトとする。

## 日本特有のオークション史

ISDA オークションをトリガーする日本社債のクレジットイベントは稀である。歴史的なエピソードには以下が含まれる。

| Period | Reference entity type | Auction outcome (illustrative pattern) |
|---|---|---|
| 2010 | 日本航空 | 破産申立てがクレジットイベントをトリガー; オークションが回収率を設定 |
| 2010 | 武富士 | 消費者金融の破産; オークションの回収率は無担保債権者の見通しを反映 |
| 2012-2015 | 各種の小型株リストラクチャリング | 限定的な CDS カバレッジ; 小規模な DC 活動 |
| 2017 | 東芝（正式なクレジットイベントなし） | 市場は CDS スプレッドを通じてクレジットイベント近傍のリスクをプライシング; オークションはトリガーされず |
| 2020-2024 | COVID および post-COVID 期 | 日本の主要な IG クレジットイベントなし; 重要な CDS エクスポージャーを伴わないわずかな小型株のディストレス事例 |

日本の IG クレジットイベントの稀さは、低い原デフォルト率、強力な銀行債権者のサポート、そして裁判外ワークアウトの規範の組み合わせを反映している。

## JGB ベンチマークに対するベーシス

CDS スプレッドは通常、同一テナーにおける、社債の **JGB ベンチマークカーブ**に対する債券スプレッドと比較される。

| Measure | Calculation |
|---|---|
| JGB に対する Z スプレッド | 割引後のキャッシュフローが債券価格に一致するように JGB カーブに加算される一定のスプレッド |
| アセットスワップスプレッド | スワップカーブに対するスプレッド; 日本については通常 TONA スワップカーブに対して |
| CDS-債券ベーシス | CDS スプレッド - 対応する債券スプレッド |
| ネガティブベーシス | CDS スプレッド < 債券スプレッド; ロングキャッシュ-ショート CDS トレードが魅力的 |
| ポジティブベーシス | CDS スプレッド > 債券スプレッド; ショートキャッシュ-ロング CDS トレードが魅力的 |

[[derivatives/basis-trade-bond-cds-japan|Bond-CDS basis trade]] は、ファンディングコスト、レポの利用可能性、バランスシート制約を含め、ベーシストレードのエコノミクスを詳細に展開する。

日本の IG 社債については、ベーシスは通常狭いが、ストレスエピソード（COVID の Q1 2020,、2022-2023の BOJ YCC 調整）の際には、ディーラーのバランスシートキャパシティが収縮する、または特定の JGB レポのダイナミクスがレラティブバリューのプライシングをシフトさせる際に、拡大しうる。

## セクタースプレッドのパターン

| Sector | Spread character |
|---|---|
| メガバンク金融（MUFG、SMBC、みずほ） | 通常の状況下では緩やかな 5Y スプレッド; グローバルな銀行ストレス時（2023 の SVB ／ Credit Suisse、2024 の地方銀行ストレス）にエピソード的に拡大 |
| 大手生保／損保 | 緩やかな 5Y スプレッド; BOJ の金利パスと ESR プロファイルに対する感応度 |
| 商社（総合商社） | 緩やかな 5Y スプレッド; 循環局面における商品サイクルへの感応度 |
| 自動車／産業ブルーチップ | 安定した状況下では低い 5Y スプレッド; EV 移行ストレス時にエピソード的に拡大 |
| 通信／公益 | 幅広いレンジ; 2011 後の TEPCO は数年にわたり高水準を維持 |
| 不動産 | 金利サイクルおよび J-REIT のファンディング状況に感応 |
| ソフトバンクグループ | 一貫して最も幅広い日本の IG-またはクロスオーバーネーム; ビジョンファンドの時価評価がエピソード的なスプレッドの急騰を駆動 |

ソフトバンクグループ CDS は、そのレバレッジプロファイル、M&A の歴史、エクイティボラティリティのリンケージを反映して、最も取引される日本の非金融シングルネーム CDS であり、その差は大きい。

### 生命保険会社および年金基金

| Use case | Detail |
|---|---|
| 信用スプレッドヘッジ | 信用スプレッドショックに対するポートフォリオレベルの CDS インデックスヘッジ |
| セクターヘッジ | セクタートランシェ CDS オーバーレイ（日本では流動性が限定的） |
| シングルネームのネガティブビューヘッジ | 懸念のある保有銘柄に対する選択的なシングルネーム CDS プロテクション |
| シンセティック信用エクスポージャー | 債券購入なしに信用エクスポージャーを得るための CDS プロテクションの売却 |

実務上、日本の生命保険会社と年金基金は、以下の理由から CDS をわずかにしか用いない。

- ヘッジ有効性の指定を複雑にする ESR 会計処理;
- JGAAP / IFRS 9 のヘッジ会計要件;
- 内部のリスク管理ガバナンス制約;
- Tier 1 ネームを下回る日本のシングルネーム CDS における流動性制約。

より広範なヘッジツールキットのコンテキストについては [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM]] を参照のこと。

### 銀行ディーラーおよびトレジャリー

| Use case | Detail |
|---|---|
| マーケットメイキング | ディーラーブックにおける在庫ヘッジ |
| カウンターパーティ信用リスクヘッジ | ディーラーのカウンターパーティに対する CDS（CVA ヘッジ） |
| 自己ネームヘッジ | 限定的; 自己信用ヘッジの会計上の問題 |
| ソブリンベーシストレード | JGB クロスカレンシーベーシスエクスポージャーのヘッジ |

CVA（クレジットバリュエーション調整）ヘッジは、特に金融カウンターパーティネームについて、ディーラーの CDS 需要にとって規制上および会計上のドライバーである。

### ヘッジファンド

| Use case | Detail |
|---|---|
| アウトライトの信用ビュー | 方向性のビューに基づくシングルネーム CDS の買い／売り |
| レラティブバリュー | CDS カーブ横断、またはネーム横断のロング／ショート |
| 資本構成アービトラージ | CDS 対エクイティ、CDS 対 CB、CDS 対優先株 |
| ベーシストレード | ネガティブベーシスに対するロングキャッシュ-ショート CDS、またはその逆 — [[derivatives/basis-trade-bond-cds-japan|bond-CDS basis trade]] を参照 |
| インデックスアービトラージ | iTraxx Japan 対構成シングルネーム CDS |

資本構成アービトラージは、活発な転換社債市場を踏まえて日本で繰り返し用いられる戦略である — [[finance/japan-convertible-bond-mechanics|Japan convertible bond mechanics]] を参照。

### ストラクチャード商品発行体

| Use case | Detail |
|---|---|
| クレジットリンクノート（CLN）ヘッジ | 発行体は参照ネームに対する CDS プロテクションを購入することでヘッジ |
| シンセティック CDO | プールレベルの CDS ポジションをトランシェにパッケージ |
| リテール／機関投資家向けのビスポーククレジット商品 | ノート形式に組み込まれたシングルネームまたはバスケット CDS エクスポージャー |

CLN の発行とヘッジは、シングルネーム CDS のプロテクション買い需要の繰り返し生じるドライバーであり、個別ネームにおける時折の需給インバランスに寄与する。これは [[derivatives/structured-bond-japan-retail-issuance|structured bond Japan retail issuance]] 市場と交差する。

## Related

- [[derivatives/INDEX]]
- [[derivatives/japan-cds-market-overview]]
- [[derivatives/basis-trade-bond-cds-japan]]
- [[derivatives/structured-bond-japan-retail-issuance]]
- [[derivatives/structured-product-eb-knockin-japan-retail]]
- [[derivatives/japan-irs-market]]
- [[derivatives/yen-basis-swap-market]]
- [[derivatives/cross-currency-basis-swap-japan]]
- [[finance/INDEX]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-cross-shareholding-unwinding-economics]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[securities/japan-prime-brokerage-and-institutional-financing]]
- [[megabanks/mufg]]
- [[megabanks/sumitomo-mitsui-banking-corp]]
- [[megabanks/mizuho-bank]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/goldman-sachs-japan]]
- [[securities-firms/morgan-stanley-japan]]
- [[INDEX|FinWiki index]]

## Sources

- ISDA: 2014 Credit Derivatives Definitions public materials.
- ISDA Credit Derivatives Determinations Committees: published determinations and process documentation.
- Creditex / Markit (auction administrators): auction results and methodology.
- FSA: derivatives regulation, post-crisis CDS reforms, follow-up council materials.
- BOJ: yen funding and credit statistics.
- MOF: JGB benchmark curve and issuance materials.
- JSCC: CDS clearing service materials.
- JSDA: member-firm regulatory materials.
