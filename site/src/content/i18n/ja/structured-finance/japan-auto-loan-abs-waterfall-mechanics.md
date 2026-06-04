---
source: structured-finance/japan-auto-loan-abs-waterfall-mechanics
source_hash: 477762aea3d272ce
lang: ja
status: machine
fidelity: ok
title: "日本の自動車ローン ABS のウォーターフォールの仕組み — オリジネーターとサービサーの分割、サブクラスの経済学"
translated_at: 2026-06-03T00:53:08.316Z
---

# 日本の自動車ローン ABS のウォーターフォールの仕組み — オリジネーターとサービサーの分割、サブクラスの経済学
## 要約
日本の自動車ローン ABS — キャプティブ オリジネーター ([[card-issuers/toyota-finance|Toyota Finance]]、[[leasing-firms/toyota-financial|Toyota Financial Services]] クロスボーダー シェルフ、ホンダ ファイナンス、日産 クレジット) と銀行関連項目のマルチブランド オリジネーター ([[leasing-firms/sumitomo-mitsui-auto-service|Sumitomo Mitsui Auto Service]]、[[card-issuers/orico|Orient Corporation]]、MUFG キャピタル オート ローン ABS) が大半を占める年間発行額約 1.5 ～ 2  兆円のセグメント — は 2 段階の **ウォーターフォール** を実行します: 利息回収口座の金利優先 (サービサー手数料 →シニア金利→メザ金利→準備金→株式）、その後、ほとんどの国内構造について元本回収口座の**逐次支払い元本**（シニアが最初にゼロに返済し、次にメザ、次に株式）。テストが満たされた場合、選択された国境を越えたトヨタ・ファイナンシャル・サービスの棚取引では**比例配分された元本**が表示されます。信用補完スタック**劣後** (通常、トヨタ/ホンダ/日産取引のAAAシニアの場合はメザ+株式が6～12%、複数ブランドの銀行関連項目取引の場合は8～15%)、**超過担保**(目標は1～3%、超過スプレッドから構築)、**現金準備金/スプレッド口座**(シニア残高の0.5～1.5%)。通常、オリジネーターとサービサーは同じキャプティブ エンティティであり、オリジネーターのデフォルトでバックアップ サービサーとして [[trust-banks/sumitomo-mitsui-trust|SMTB]] または [[trust-banks/nochu-trust-bank|Nochu Trust]] がアクティブになります。 AAA トランシェは、国内取引に関して [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR and/or R&I]] によって格付けされ、トヨタ ファイナンシャル サービスの国際棚で S&P / ムーディーズの適用範囲を獲得します ([[structured-finance/fitch-moody-sp-japan-criteria|global vs domestic agency split]] を参照)。
## ウィキ上の位置づけ
この項目は、自動ローン ABS サブクラスの **waterfall-operating-mechanics** ノードとして [[structured-finance/INDEX|structured-finance index]] の下にあります。発行者のランドスケープについては [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]]、無担保プールのコントラストについては [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]、リースと ABS のコントラストについては [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]、劣後サイジングを推進する SDR (ストレスト デフォルト レート) の計算については [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]] に対して読み取ります。システム アンカー: 合法車両レイヤーの [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]] および [[structured-finance/japan-trust-beneficial-interest-vs-spv|trust beneficial interest vs SPV]]。
## 1。オリジネーターとサービサーの分割 - 誰が何をするのか
| 役割 | 代表的なエンティティ | 関数 |
|---|---|---|
| 発信者 | キャプティブ ファイナンス ([[card-issuers/toyota-finance|Toyota Finance]]、ホンダ ファイナンス、日産 クレジット) またはマルチブランド ([[leasing-firms/sumitomo-mitsui-auto-service|Sumitomo Mitsui Auto Service]]、[[card-issuers/orico|Orient Corp]]) | ディーラーの店頭販売を通じて小売自動車ローンを開始します。クロージング時に、売掛金プールをSPVに転送します。 |
| サービサー | **日本のほぼすべてのオートローン ABS のオリジネーターと同じ事業体** | 債務者から毎月の支払いを徴収します。滞納を追跡します。差し押さえを管理します。回収金をSPV信託口座に送金します |
| バックアップサービサー | [[trust-banks/sumitomo-mitsui-trust|SMTB]]、三菱UFJ信託、または[[trust-banks/nochu-trust-bank|Nochu Trust]] | 「コールド」バックアップ — 通常の運用中はライブ サービスは行われません。オリジネーターのデフォルト / サービサーのデフォルトイベントで 30 ～ 60  日以内に引き継ぎます |
| 管財人 | 信託銀行（[[trust-banks/sumitomo-mitsui-trust|SMTB]] / 三菱UFJ信託） | 信託受益権層を保有（使用時）。口座と銀行の関係を管理します。ウォーターフォールの施行を監督する |
| 発行者 (SPV) | GK-TK ([[structured-finance/spv-tk-gk-vehicle-japan-tax|godo kaisha + tokumei kumiai]]) 通常 | シニア、メザ、エクイティクラスを発行します。破産 - オリジネーターからのリモート |
| 投資家管理者 | メガバンク証券部門（[[securities-firms/mufg-securities|MUFG MS]]、[[securities-firms/smbc-nikko|SMBC Nikko]]、[[securities-firms/mizuho-securities|Mizuho Securities]]） | シニア/メゾトランシェの手配と配布 |
**オリジネーターとサービサーのアイデンティティ**は最も重要な運用上の事実です。通常の運用では、ローンを作成したのと同じキャプティブ ファイナンス会社が支払いを回収し、支払い遅延について債務者と話し合い、いつ差し押さえるかを決定する主体となります。これにより、運用上の摩擦は最小限に抑えられますが（債務者のエ​​クスペリエンスは変わりません）、**サービサーの交代リスク**が集中します。オリジネーターがデフォルトした場合、コールド・バックアップは数日で稼働する必要があります。そのため、格付け会社は、文書化された能力を持つ指定されたバックアップ・サービサーを必要とします。
## 2。プール構成 — 新車と中古車の分割
自動ローン ABS プールの構成はオリジネーターによって異なります。
| オリジネータータイプ | 新車シェア | 中古車シェア | WAL (加重平均寿命) | 一般的な年利 |
|---|---|---|---|---|
| キャプティブ OEM (トヨタ / ホンダ / 日産) | 80～95% | 5～20% | 2.0～3.5 年 | 1.5～4.5% (新品共通のプロモーション料金) |
| マルチブランド銀行系（SMBCオートサービス、オリコ） | 50～70% | 30～50% | 2.5～4.0 年 | 3.0～6.5% |
| 中古車専門店（アプラス、ジャックスの自動取付など） | 10～30% | 70～90% | 3.0～4.5 年 | 4.5～8.0% |
分割が重要な理由:
- **新車債権**は OEM 補助金に関連項目付けられています (OEM は販売インセンティブとしてキャプティブの融資金利を補助します)。キャプティブのローンの年利は 0% になる可能性があり、OEM は補助金の支払いを通じてキャプティブの利回りを上乗せします。ABS プールは **補助金なしの経済利回り** を獲得します (見出しの 0% ではありません)。
- **中古車債権**には OEM による補助金はなく、デフォルト率は新車デフォルトの ~1.5 ～ 2.5 × に達しますが、日本の中古車卸売市場が充実しているため (USS オークションなど)、回収率は高くなります。
- 中古車 ABS はより幅広い上級トランシェに従属します (純粋な新車プールでは 8 ～ 12% 対 5 ～ 8%)
## 3。インタレスト ウォーターフォール — 収集順序
毎月の分配日ごとに、利息徴収口座に集められた現金は、次の **厳密な優先順位** に従って流れます。
| 優先度 | アイテム | 注記 |
|---|---|---|
| 1 | サービサー手数料 | 通常、未払いのプール残高は年間 0.25 ～ 0.50%。サービスの経済性をカバー |
| 2 | 受託者/口座銀行手数料 | 年間固定百万円 |
| 3 | シニアクラスの関心 | AAA トランシェ クーポン。不足の場合、取引は加速をトリガーします |
| 4 | メザクラスへの関心 | AA/Aトランシェクーポン |
| 5 | 劣後利益 | マルチトランシェメゾが存在する場所 |
| 6 | 現金準備金の補充 | リザーブが目標を下回っている場合は、目標まで補充します |
| 7 | OCビルド（超過担保） | 過剰なスプレッドをトラップして目標まで OC を構築します |
| 8 | 資本/残余/オリジネーター | 残ったものはオリジネーターが保有する株式トランシェに流れます |
**トラップメカニズム**: アイテム 6  および 7  は、アイテム 3 ～ 5  が支払われた場合にのみ資金を供給します。パフォーマンスが低下し、トリガーがヒットした場合 (セクション 6 を参照)、項目 6  および 7  が項目 8,  よりも優先され、パフォーマンスが回復するまで発信者の残差が制限されます。
## 4。主要なウォーターフォール — 逐次的 vs 比例的
日本には 2 つの主要なウォーターフォール モデルが存在します。
### 4a。逐次支払い (最も一般的 — 日本国内のオートローン ABS の ~80%)
プリンシパル コレクションでは、シニア クラスに **最初に残高ゼロまで**、次にメザ、次にエクイティが支払われます。
| 期間 | シニアバランス | メザバランス | 自己資本残高 |
|---|---|---|---|
| 終わりに | プールの90% | プールの5% | プールの5% |
| 年1 | 支払い中 | 5%でロックされています | 5%でロックされています |
| シニアは全額支給 | 0% | 今支払い中 | 5%でロックされています |
| メズは全額支払われました | 0% | 0% | 今支払い中 |
**効果**: 残りのシニア残高に対する劣後度は **時間の経過とともに増加します**。取引開始時の劣後度は 10% ですが、シニアが半分支払われ、メザ/エクイティが変更されていない場合、実質的な劣後度は 18 ～ 20% となります。シニア層は取引シーズンに応じてレバレッジ解消効果が高まるため、これは投資家にとって有利だ。
### 4b。比例配分給与 (選択的 — トヨタ ファイナンシャル サービスの国境を越えた棚、一部のキャプティブ ディール)
元本回収では、**パフォーマンストリガー**に応じて、シニア、メザ、エクイティに **元の残高に比例して**同時に支払います (累積純損失 < しきい値、延滞 < しきい値、OC が目標値):
| 効果 | 比例配分メカニズム |
|---|---|
| シニアクラスの返済 | 初期の段階ではシーケンシャルよりも速い（シニアは最大 85 ～ 90% の現金しか受け取らないため） |
| 残りの上級者の従属率 | 比例フェーズ中はほぼ一定のまま |
| トリガーフリップ | トリガーがヒットすると、ディールはシーケンシャルに切り替わります。シニアは次のプリンシパルの 100% を取得します |
| 創始者の経済学 | 株式トランシェのキャッシュフローは比例配分により早く戻りました。資本効率が高い |
| 格付けへの影響 | 比例配分では、同じ上級格付けに対してより高いクロージング劣後（1～2%以上）が必要 |
米国の自動車ローン ABS では比例配分が標準であるため、世界の投資家向けに設計されたトヨタ ファイナンシャル サービスの国際棚ではこのモデルが採用されています。純国内の日本取引（トヨタ・ファイナンス国内棚、ホンダ・ファイナンス、日産クレジット）は、構造の単純さが日本の機関投資家に好まれるため、通常は連続して行われます。
## 5。信用補完スタック — 過剰担保、劣後、スプレッド口座
シニア AAA トランシェは 3 つの層で保護されています。
| 層 | 関数 | 一般的なサイジング (新車のキャプティブ プール) | 一般的なサイジング (複数ブランドのプール) |
|---|---|---|---|
| **従属** | メザ + 株式クラスがシニアよりも先に損失を吸収 | 元のプールの 6 ～ 8% | 元のプールの 10 ～ 15% |
| **過剰担保 (OC)** | プール額面が債券額面を超える。 OC ターゲットが構築され、過剰拡散によってトラップされる | 1～3% ターゲット | 2～4% ターゲット |
| **現金準備金/スプレッド口座** | クロージング時に資金調達されるか、超過スプレッドから構築されます。利息不足を和らげる | 終値時点でシニアの0.5～1.0%、ターゲットは1.0～1.5% | クロージング時は0.8～1.5%、目標は1.5～2.5% |
| **過剰スプレッド (4 ラインディフェンス)** | 加重平均プール年利と手数料を差し引いた加重平均債券クーポンの差額 | プールで年間 ~1.0 ～ 2.0% | プールで年間 ~2.5 ～ 4.5% |
トヨタ ファイナンスのキャプティブ プールにおける AAA シニアの **総信用サポート**は通常、8 ～ 12% (劣後 + OC + リザーブ) であり、劣後が適用される前の定期的なソークとして超過スプレッドが含まれます。複数ブランドの銀行提携取引の場合、トータル クレジット サポートは 13 ～ 18% となります。
## 6。パフォーマンスのトリガー — 取引によって行動が変化したとき
| トリガー | しきい値（例） | 打撃への影響 |
|---|---|---|
| 累積純損失 | > 元のプールの 1.5 ～ 3.0% (取引によって異なります) | 比例配分された元本は順次に切り替わります。 OCターゲットがステップアップ。株式分配が閉じ込められている |
| 60+ 日延滞 | > 現在のプール残高の 4.0 ～ 6.0% | OC ビルドが高速化されました。予備の構築が加速される |
| デフォルトのサービサーイベント | オリジネーター倒産・格下げ・支払い不能 | バックアップサービサーがアクティブ化されました。サービサー手数料の再価格設定（多くの場合、より高額） |
| 目標を下回る予約 | 床下に引き出された引当金 | 余剰スプレッドはすべてトラップされ、準備金を再構築します |
| 床下のプールバランス | プールシーズニングを予定より前倒し（早期前払いシナリオ） | オプションのクリーンアップコールがトリガーされる場合があります |
トリガーは取引ごとに異なり、募集書類で開示されます。JCR / R&I は格付け分析の一環としてトリガーの調整を評価します。
## 7。再発行プログラムとトランシングの深さ
キャプティブ オリジネーターは、繰り返し発行する **シェルフ プログラム**を実行します。
| 発信者 | 棚プログラム | 年間発行枚数（目安） | 一般的な取引規模 | トランシェの深さ |
|---|---|---|---|---|
| [[card-issuers/toyota-finance|Toyota Finance]] | トヨタファイナンス自動車ローン債権信託（TALR） | 600～900 00億円 | 取引あたり 100 ～ 200 00 億円 | シニア AAA + AA メズ + エクイティ |
| [[leasing-firms/toyota-financial|Toyota Financial Services]] | トヨタオートローンアジア/国際棚 | 米ドル相当のクロスボーダー発行 | USD 0.8–1.5 bn | A-1 / A-2 / A-3 シニアマネーマーケット + シニア償却 + B + C + D + 株式 (完全な米国スタイルの深さ) |
| ホンダファイナンス | ホンダ自動車債権棚 | 200～400 00億円 | 80～150 00億円 | シニア + AA メゾ + エクイティ |
| 日産クレジット | 日産自動車債権棚 | 100～250 00億円 | 60～120 00億円 | シニア + AA メゾ + エクイティ |
| [[leasing-firms/sumitomo-mitsui-auto-service|Sumitomo Mitsui Auto Service]] | マルチブランドオートリースABS | 100～200 00億円 | 50～100 00億円 | シニア + マルチメズ + エクイティ |
| [[card-issuers/orico|Orient Corp]] | 自動装着ABS | 80～150 00億円 | 40～80 00億円 | シニア+メザ+エクイティ |
トランチングの深さは投資家の需要を反映しています。トヨタ・フィナンシャルの国境を越えた取引は、米国BSL投資家の好みに合わせて~5 レイヤーにトランシェします。日本の機関投資家（ライフサー、地方銀行のALMブック）が主にシニアAAAを望んでいることから、純国産日本の取引は2～3 レイヤーに留まる。
## 8。格付け会社の分割 ― オートローン ABS における JCR 対 R&I
| 代理店 | カバレッジパターン | 注目すべきアプローチ |
|---|---|---|
| [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR]] | 日本の主要なオートローン ABS プログラムのほぼすべてを評価 | 新車・中古車分割基準の詳細;日本のデータから得られたプールシーズニング曲線。捕虜のオリジネーターに好まれている |
| [[structured-finance/credit-rating-methodology-jcr-r-and-i|R&I]] | 主要プログラムの約半分を評価（多くの場合、JCRと共同評価） | バックアップサービサーの手配の比重が重くなる。同様のデフォルトモデリングアプローチ |
| S&P / ムーディーズ (トヨタファイナンシャルクロスボーダー向け) | 世界中の投資家に分配するために必要 | 米国スタイルの累積純損失曲線を日本のデータに適用します。 JCR/R&Iよりも高い劣後性を求める傾向にある |
| フィッチ (選択) | 過去に評価された不定期取引 | 現在、日本ではあまり活動していない自動 ABS |
**分割格付けの結果**: トヨタファイナンスの国内取引は、7% で JCR AAA / R&I AAA に劣後する可能性がありますが、トヨタファイナンシャルサービスのクロスボーダー取引は、8.5% で JCR AAA / S&P AA+ / ムーディーズ Aa1  に劣後する可能性があります — グローバルエージェンシーの国別上限とより厳しい回収想定により、コストは 1 notch および ~150 bp より高くなります従属。 [[structured-finance/fitch-moody-sp-japan-criteria|global vs JCR / R&I criteria comparison]]を参照してください。
## 9。対位法
- **「シーケンシャルと比例配分は純粋に構造的なものである」** — 理論的にはそうですが、比例配分の方がオリジネーターへの株式キャッシュフローの還元が早くなり、オリジネーターの資金による株式保有が減少します。これはキャプティブ自己資本利益率の計算にとって重要です。
- **「従属が唯一の保護である」** — 低年利日本取引では、過剰スプレッドがより大きな第一線の防御となることがよくあります。劣後はフェイルセーフだが、過剰スプレッドにより、劣後が生じる前に 12 ～ 24  か月分のストレス損失が浸み込む
- **「すべてのキャプティブは同じである」** — トヨタのプールの質（デフォルトが低く、中古車シェアが低い）は、歴史的に日産とホンダを 10 ～ 25% で完全に上回っています。劣後差は実際のプールの差を反映する
- **「コールド バックアップ サービサーは単なる事務手続きです」** — 2010 では、日本の非キャプティブ自動車金融会社の少なくとも 1 社がデフォルトを起こし、バックアップ サービサーのアクティブ化に 60+ 日かかり、一時的なサービサーの前払い不足が発生しました。コールド バックアップは理論上ではなく動作可能です
- **「比例配分は常にオリジネーターにとって有利です」** — 比例配分は株式キャッシュを加速しますが、クロージング時に劣後性を高めます。純経済学は、オリジネーターの株式コストと、より高い劣後性による投資家の限界スプレッドコストに依存します。
## 10。未解決の論点
- EVへの移行により、新車と中古車のウォーターフォール分割の再構築が必要になるほど中古車の残存価値（および卸売市場の厚み）が再形成されるかどうか
- トヨタファイナンシャルサービスは、日本国内の調達コストが引き続き有利なため、米国の棚のより多くを日本国内の発行に移行するかどうか
- 次の国内不況（新型コロナウイルスの落ち込みではなく本物の景気後退）が、相当数の季節取引における累積純損失のトリガーを試すかどうか
- JCR / R&I は、構造の複雑さが正常化するにつれて、段階的に比例配分に優しい基準を採用するかどうか
- 対象となる ABS 市場の拡大における [[leasing-firms/sumitomo-mitsui-auto-service|Sumitomo Mitsui Auto Service]] およびその他のマルチブランドのオリジネーターの役割と銀行口座を通じた資金提供の継続
## 関連項目項目
- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]]
- [[structured-finance/japan-consumer-loan-abs-structure|Japan consumer-loan ABS structure]]
- [[structured-finance/japan-credit-card-receivable-abs|Japan credit-card receivable ABS]]
- [[structured-finance/japan-equipment-lease-abs|Japan equipment lease ABS]]
- [[structured-finance/jcr-ri-japan-securitization-rating-methodology-operating-playbook|JCR / R&I securitization rating methodology operating playbook]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/fitch-moody-sp-japan-criteria|Fitch / Moody's / S&P Japan criteria]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK / TMK SPV vehicle]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv|trust beneficial interest vs SPV]]
- [[structured-finance/japan-securitization-product-matrix|Japan securitization product matrix]]
- [[card-issuers/toyota-finance|Toyota Finance]]・[[leasing-firms/toyota-financial|Toyota Financial Services]]
- [[leasing-firms/sumitomo-mitsui-auto-service|Sumitomo Mitsui Auto Service]]・[[card-issuers/orico|Orient Corp]]
- [[trust-banks/sumitomo-mitsui-trust|SMTB]]・[[trust-banks/nochu-trust-bank|Nochu Trust]]
- [[securities-firms/mufg-securities|MUFG MS]]・[[securities-firms/smbc-nikko|SMBC Nikko]]・[[securities-firms/mizuho-securities|Mizuho Securities]]
## 出典
- JCRオートローンABS基準 — https://www.jcr.co.jp/
- R&IオートローンABS手法 — https://www.r-i.co.jp/
- トヨタファイナンシャルサービス IR情報 — https://www.toyota-finance.co.jp/
- 住友三井オートサービス コーポレートサイト — https://www.smauto.co.jp/
- オリエントコーポレーション IR情報 — https://www.orico.co.jp/
- JSDA ストラクチャード・ファイナンス統計 — https://www.jsda.or.jp/
- ASF Japan（資産証券化フォーラム日本） — https://www.asf-japan.gr.jp/
---
> [!info] 校核状態
> 自信: **おそらく**。ウォーターフォールの仕組み、逐次構造と比例構造のバリエーション、OC/劣後/リザーブの規模設定範囲、格付け会社の分割パターンは、業界で公開されているオファリング文書や格付け方法論の出版物を反映しています。具体的な劣後割合とトリガーのしきい値は、取引やヴィンテージによって異なります。新車と中古車の APR とデフォルト率の範囲は典型的なパターンを例示するものであり、単一の情報源による主張ではありません。
