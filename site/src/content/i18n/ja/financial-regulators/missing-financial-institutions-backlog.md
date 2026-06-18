---
source: financial-regulators/missing-financial-institutions-backlog
source_hash: 20ab19512f2bde0e
lang: ja
status: machine
fidelity: ok
title: "日本の未収載金融機関 拡充バックログ"
translated_at: 2026-06-18T23:59:13.090Z
---

# 日本の未収載金融機関 拡充バックログ

## 概要

本ページは、[[financial-regulators/INDEX|financial-regulators INDEX]] を主要機関中心の wiki から、レジストリを意識した日本の金融機関マップへと拡充するための実行チェックリストである。

現在の wiki はすでに強固なコアを備えている：メガバンク、主要 FG、地方銀行グループ、政策金融、保険会社、証券グループ、リース、決済、フィンテック、外資の在日子会社、暗号資産取引所ページ。だが、公式の免許 / 登録一覧に対して網羅的とはまだ言えない。

実行ルール：

1. システム上重要な機関、上場金融会社、主要な事業子会社、市場インフラ、および公開情報のあるフィンテック / 決済事業者については、単独ページを作成する。
2. 信用金庫、信用協同組合、前払式支払手段発行者、ロングテールの FIEA 事業者など、非常に大きな母集団については、レジストリ / インデックスページを利用する。
3. 非公開のコンテキストから会社ページを作成しないこと。すべてのページは、公開レジストリ、IR、開示、会社概要、年次報告書、協会一覧、または法令 / 政策文書から出典を辿れるものでなければならない。

## 公式レジストリ・ベースライン

| レジストリ | 公式件数 / 範囲 | 出典ルート | Wiki 上の取扱い |
|---|---:|---|---|
| 銀行：都市・信託・その他 | 35 | FSA 銀行免許 Excel | 欠落している事業会社ページを追加；親会社と子会社の境界を整合させる。 |
| 外国銀行支店 | 57 | FSA 銀行免許 Excel | レジストリルートは全 57 行について単独 / アンブレラ wiki ルートを備えた；今後の編集は FSA 一覧の変更または新たな戦略的論点に従うべき。 |
| 地方銀行 | 61 | FSA 銀行免許 Excel | 欠落している直接の銀行ページを追加するか、親 FG でカバー済みと記す。 |
| 第二地方銀行 | 34 | FSA 銀行免許 Excel | 欠落している直接の銀行ページを追加するか、親 FG でカバー済みと記す。 |
| 銀行持株会社 | 31 | FSA 銀行持株会社 Excel | ほぼカバー済み；2026 以降の名称と合併を検証する。 |
| 信用金庫 | 254 + 信金中央金庫 | FSA 信金免許 Excel | [[cooperative-banks/shinkin-central|Shinkin Central Bank]] をメインページとして維持；ロングテールルートを [[banking/shinkin-bank-registry-japan]] 経由で完成させる。 |
| 信用協同組合 | 143 + 中央連合会 | FSA 信用協同組合 Excel | [[cooperative-banks/zenshin-kumi|Zenshin-kumi]] をメインページとして維持；ロングテールルートを [[banking/credit-cooperative-registry-japan]] 経由で完成させる。 |
| 労働金庫 | 13 + 労金連 | FSA 労金免許 Excel | [[cooperative-banks/rokin-renraku|Rokinren]] をメインページとして維持；会員ルートを [[banking/rokin-bank-registry-japan]] 経由で完成させる。 |
| 金融商品取引業者 | 1,945 | FSA FIEA 事業者 Excel | レジストリルートは [[securities/financial-instruments-business-operators-japan-index]] 経由で完了；[[financial-licenses/securities-license-stack|securities license stack]] が 第一種 / 第二種、登録金融機関、仲介、助言、運用、PTS、JSDA の境界をルーティングする；単独ページはブローカー、AM、PTS、デリバティブ、および上場 / 公開上重要な事業者に限る。 |
| 生命保険会社 | 41 | FSA 生命保険会社 Excel | 公開開示のある、欠落した事業保険会社およびグループ子会社ページを追加する。 |
| 損害保険会社 | 57 | FSA 損害保険会社 Excel | 主要、ダイレクト、再保険、および一部の特殊 / 外資系ルートを D3-D5 / D8-D9 を通じてカバー済み；残るロングテールはレジストリまたは選択的な例外的取扱いを利用すべき。 |
| 保険持株会社 | 15 | FSA 保険持株会社 Excel | グループ戦略が重要な場合に、欠落した HD ページを追加する。 |
| 信託会社 | 38 | FSA 信託会社 Excel | レジストリルートは [[trust-banks/trust-companies-japan-index]] 経由で完了；優先度 A / B / C の単独ページは完成済みで、全 38 行が単独または既存のグループ wiki ルートを備えるようになった。 |
| 資金移動業者 | 83 | FSA 資金移動 PDF / Excel / JPSA 会員一覧 | レジストリルートは [[payments/funds-transfer-service-providers-japan-index]] 経由で完了；単独ページは主要なウォレット、送金、PSP、ステーブルコイン隣接の事業者に限って追加する。 |
| 暗号資産交換業者 | 27 | FSA 暗号資産交換 Excel | 既存のカバレッジは広い；まず欠落している FSA の 2 行を追加する。 |
| 電子決済手段等取引業者 | 1 | FSA EPSP Excel | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] のコンテキストでカバー済み；ステーブルコイン / EPI ページからクロスリンクする。 |
| 第三者型前払式支払手段発行者 | 803 | FSA 前払式発行者 Excel | レジストリルートは [[payments/prepaid-payment-instrument-issuers-japan-index]] 経由で完了；単独ページは主要なウォレット / カード / 小売事業者に限る。 |
| 信用購入 / カード事業者 | 241 包括信用購入あっせん業者、138 個別信用購入あっせん業者、275 クレジットカード番号等取扱契約締結事業者 | METI 割賦販売法一覧 | レジストリルートは [[payments/credit-purchase-card-operators-japan-index]] 経由で完了；単独ページはカード発行会社、アクワイアラー、PSP、および BNPL / 消費者信用事業者向け。 |

## Batch A：市場インフラを最優先

これらは任意ではない。日本の資本市場の中核であり、現在は他のページ内の参照としてのみ登場している。

| Status | 対象ページ | 機関 | 公開上の重要性 |
|---|---|---|---|
| [x] | `JapanFG/japan-exchange-group.md` | 日本取引所グループ / JPX | 上場取引所持株会社；TSE/OSE/TOCOM の親会社。 |
| [x] | `securities/tokyo-stock-exchange.md` | 東京証券取引所 / TSE | 上場、TDnet、開示、市場区分。 |
| [x] | `securities/osaka-exchange.md` | 大阪取引所 / OSE | デリバティブ市場インフラ。 |
| [x] | `securities/tokyo-commodity-exchange.md` | 東京商品取引所 / TOCOM | 商品デリバティブインフラ。 |
| [x] | `securities/japan-securities-clearing-corp.md` | 日本証券クリアリング機構 / JSCC | 清算機関；現物、デリバティブ、OTC 清算。 |
| [x] | `securities/japan-securities-depository-center.md` | 証券保管振替機構 / JASDEC / ほふり | 決済 / 振替インフラ。 |
| [x] | `JapanFG/japan-securities-finance.md` | 日本証券金融 / JSF | 信用取引貸付、証券金融、信託銀行隣接。 |
| [x] | `securities/japannext-securities.md` | ジャパンネクスト証券 | PTS / 代替的取引所。 |
| [x] | `securities/osaka-digital-exchange.md` | 大阪デジタルエクスチェンジ / ODX | PTS + セキュリティトークン市場インフラ。 |

## Batch B：銀行事業会社ページ

多くの親 FG ページが存在するが、免許を受けた銀行事業会社には単独ページがない。事業会社に独立した公開開示、戦略的役割、免許境界、または市場上の重要性がある場合にのみ追加する。

### B1. メガバンク / 信託 / インターネット銀行の事業会社

| Status | 対象ページ | 機関 | 境界に関する注記 |
|---|---|---|---|
| [x] | `JapanFG/mizuho-bank.md` | 株式会社みずほ銀行 | [[megabanks/mizuho-fg|Mizuho FG]] の下。 |
| [x] | `JapanFG/sumitomo-mitsui-banking-corp.md` | 株式会社三井住友銀行 / SMBC | [[megabanks/smfg|SMFG]] の下。 |
| [x] | `JapanFG/mufg-bank.md` | 株式会社三菱UFJ銀行 | [[megabanks/mufg|MUFG]] の下。 |
| [x] | `JapanFG/resona-bank.md` | 株式会社りそな銀行 | [[megabanks/resona-hd|Resona HD]] の下。 |
| [x] | `JapanFG/saitama-resona-bank.md` | 株式会社埼玉りそな銀行 | りそなグループの事業銀行。 |
| [x] | `JapanFG/mitsubishi-ufj-trust-bank.md` | 三菱UFJ信託銀行 | MUFG 信託銀行事業会社。 |
| [x] | `JapanFG/mizuho-trust-bank.md` | みずほ信託銀行 | みずほ信託銀行事業会社。 |
| [x] | `JapanFG/smtb.md` | 三井住友信託銀行 | [[trust-banks/sumitomo-mitsui-trust|SMTG]] の下。 |
| [x] | `JapanFG/smbc-trust-bank.md` | SMBC信託銀行 | SMFG プライベートバンキング / 信託の境界。 |
| [x] | `JapanFG/nomura-trust-bank.md` | 野村信託銀行 | 野村グループの銀行部門。 |
| [x] | `JapanFG/nochu-trust-bank.md` | 農中信託銀行 | 農林中金の信託部門。 |
| [x] | `JapanFG/orix-bank.md` | オリックス銀行 | ORIX から大和ネクスト銀行への持株移転ウォッチ。 |
| [x] | `JapanFG/sony-bank.md` | ソニー銀行 | [[megabanks/sony-fg|Sony FG]] の下。 |
| [x] | `JapanFG/daiwa-next-bank.md` | 大和ネクスト銀行 | 大和グループの銀行。 |
| [x] | `JapanFG/ui-bank.md` | UI銀行 | きらぼし / 東京きらぼしのデジタル銀行部門。 |
| [x] | `JapanFG/01-bank.md` | 01銀行 | データ駆動型の中小企業向けデジタル銀行モデル。 |
| [x] | `JapanFG/sbj-bank.md` | SBJ銀行 | 新韓銀行ジャパンの子会社。 |
| [x] | `JapanFG/rcc.md` | 整理回収機構 / RCC | 銀行免許の特別サービサー / 整理回収主体。 |

### B2. 欠落またはグループでのみカバーされている地方銀行

| Status | グループ | 解決すべき機関 |
|---|---|---|
| [x] | 北陸 / 北國 / 北海道 B2.1 | [[regional-banks/hokkaido-bank|北海道銀行]], [[regional-banks/hokuriku-bank|北陸銀行]], [[regional-banks/hokkoku-bank|北國銀行]], [[regional-banks/toyama-bank|富山銀行]], [[regional-banks/toyama-first-bank|富山第一銀行]] |
| [x] | 東北 / フィデア / じもと B2.2 | [[regional-banks/tohoku-bank|東北銀行]], [[regional-banks/hokuto-bank|北都銀行]], [[regional-banks/shonai-bank|荘内銀行]], [[regional-banks/kita-nippon-bank|北日本銀行]], [[regional-banks/sendai-bank|仙台銀行]], [[regional-banks/kirayaka-bank|きらやか銀行]], [[regional-banks/fukushima-bank|福島銀行]], [[regional-banks/daito-bank|大東銀行]] |
| [x] | 関東 B2.3 | [[regional-banks/tsukuba-bank|筑波銀行]], [[regional-banks/ashikaga-bank|足利銀行]], [[regional-banks/kiraboshi-bank|きらぼし銀行]], [[regional-banks/yokohama-bank|横浜銀行]], [[regional-banks/higashi-nippon-bank|東日本銀行]], [[regional-banks/tokyo-star-bank|東京スター銀行]], [[regional-banks/kanagawa-bank|神奈川銀行]], [[regional-banks/tochigi-bank|栃木銀行]], [[regional-banks/taiko-bank|大光銀行]] |
| [x] | 中部 B2.4 | [[regional-banks/daishi-hokuetsu-bank|第四北越銀行]], [[regional-banks/yamanashi-chuo-bank|山梨中央銀行]], [[regional-banks/hachijuni-nagano-bank|八十二長野銀行]], [[regional-banks/juroku-bank|十六銀行]], [[regional-banks/shizuoka-bank|静岡銀行]], [[regional-banks/shimizu-bank|清水銀行]], [[regional-banks/shizuoka-chuo-bank|静岡中央銀行]], [[regional-banks/aichi-bank|あいち銀行]], [[regional-banks/nagoya-bank|名古屋銀行]], [[regional-banks/fukui-bank|福井銀行]] |
| [x] | 関西 / 中国 B2.5 | [[regional-banks/kyoto-bank|京都銀行]], [[regional-banks/kansai-mirai-bank|関西みらい銀行]], [[regional-banks/ikeda-senshu-bank|池田泉州銀行]], [[regional-banks/tajima-bank|但馬銀行]], [[regional-banks/tottori-bank|鳥取銀行]], [[regional-banks/chugoku-bank|中国銀行]], [[regional-banks/hiroshima-bank|広島銀行]], [[regional-banks/momiji-bank|もみじ銀行]], [[regional-banks/tomato-bank|トマト銀行]] |
| [x] | 四国 B2.6 | [[regional-banks/awa-bank|阿波銀行]], [[regional-banks/iyo-bank|伊予銀行]], [[regional-banks/shikoku-bank|四国銀行]], [[regional-banks/tokushima-taisho-bank|徳島大正銀行]], [[regional-banks/kagawa-bank|香川銀行]], [[regional-banks/ehime-bank|愛媛銀行]], [[regional-banks/kochi-bank|高知銀行]] |
| [x] | 九州 / 沖縄 B2.7 | [[regional-banks/fukuoka-bank|福岡銀行]], [[regional-banks/chikuho-bank|筑邦銀行]], [[regional-banks/nishi-nippon-city-bank|西日本シティ銀行]], [[regional-banks/kitakyushu-bank|北九州銀行]], [[regional-banks/saga-bank|佐賀銀行]], [[regional-banks/higo-bank|肥後銀行]], [[regional-banks/oita-bank|大分銀行]], [[regional-banks/miyazaki-bank|宮崎銀行]], [[regional-banks/kagoshima-bank|鹿児島銀行]], [[regional-banks/okinawa-bank|沖縄銀行]] |
| [x] | 第二地方銀行のロングテール B2.8 | [[regional-banks/minato-bank|みなと銀行]], [[regional-banks/shimane-bank|島根銀行]], [[regional-banks/saikyo-bank|西京銀行]], [[regional-banks/fukuoka-chuo-bank|福岡中央銀行]], [[regional-banks/saga-kyoei-bank|佐賀共栄銀行]], [[regional-banks/nagasaki-bank|長崎銀行]], [[regional-banks/kumamoto-bank|熊本銀行]], [[regional-banks/howa-bank|豊和銀行]], [[regional-banks/miyazaki-taiyo-bank|宮崎太陽銀行]], [[regional-banks/minami-nippon-bank|南日本銀行]], 加えて既存の [[regional-banks/okinawa-kaiho-bank|沖縄海邦銀行]] アンカー |

## Batch C：証券、資産運用、および FIEA 事業者

公開上の戦略的重要性を持つ事業者から始める。全 1,945  の FIEA 事業者を単独ページとして書こうとしないこと。

会社ページの層は、現在 6 つのコントロールページによって支えられている：[[financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japan-online-brokerage-competition|Japan online brokerage competition]]、[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japan-pts-liquidity-data-guide|Japan PTS liquidity data guide]]、[[securities/japan-underwriting-market-structure|Japan underwriting market structure]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]]。

| Status | 対象ページ | 機関 | 出典ルート |
|---|---|---|---|
| [x] | `JapanFG/sbi-securities.md` | SBI証券 | FSA FIEA 一覧 / 会社開示 / SBI グループ IR。 |
| [x] | `JapanFG/mufg-esmart-securities.md` | 三菱UFJ eスマート証券 | FSA FIEA 一覧 / MUFG-KDDI の境界。 |
| [x] | `JapanFG/paypay-securities.md` | PayPay証券 | FSA FIEA 一覧 / PayPay グループの境界。 |
| [x] | `JapanFG/gmo-click-securities.md` | GMOクリック証券 | FSA FIEA 一覧 / GMO FH 開示。 |
| [x] | `JapanFG/dmm-com-securities.md` | DMM.com証券 | FSA FIEA 一覧；暗号資産取引所ページとは別。 |
| [x] | `JapanFG/traders-securities.md` | トレイダーズ証券 | FSA FIEA 一覧；FX / デリバティブ。 |
| [x] | `JapanFG/saxo-bank-securities.md` | サクソバンク証券 | FSA FIEA 一覧；外国ブローカーの日本法人。 |
| [x] | `JapanFG/sbi-fx-trade.md` | SBI FXトレード | FSA FIEA 一覧；SBI の FX 部門。 |
| [x] | `JapanFG/nomura-asset-management.md` | 野村アセットマネジメント | FSA FIEA 投資運用ルート。 |
| [x] | `JapanFG/nikko-asset-management.md` | 日興アセットマネジメント / Amova | 2025-09  の名称変更の境界を捕捉。 |
| [x] | `JapanFG/asset-management-one.md` | アセットマネジメントOne | みずほ / 第一生命 AM 共同プラットフォーム。 |
| [x] | `JapanFG/mufg-asset-management.md` | 三菱UFJアセットマネジメント | MUFG AM プラットフォーム。 |
| [x] | `JapanFG/smd-am.md` | 三井住友DSアセットマネジメント | SMFG / 大和 / 保険会社株主プラットフォーム。 |
| [x] | `JapanFG/daiwa-asset-management.md` | 大和アセットマネジメント | 大和 AM プラットフォーム。 |
| [x] | `JapanFG/sbi-asset-management.md` | SBIアセットマネジメント | SBI AM プラットフォーム。 |

## Batch D：保険事業会社

親保険 HD ページだけでは商品 / チャネル分析には不十分である。公開開示が存在する場合に事業会社を追加する。

| Status | グループ | 作成または整合すべき機関 |
|---|---|---|
| [x] | 生命保険会社 D1 | [[life-insurers/asahi-life|朝日生命]], [[life-insurers/sbi-life|SBI生命]], [[life-insurers/nn-life-japan|NN生命]], [[life-insurers/fwd-life-japan|FWD生命]], [[life-insurers/sony-life|ソニー生命]], [[life-insurers/sompo-himawari-life|SOMPOひまわり生命]], [[life-insurers/dai-ichi-frontier-life|第一フロンティア生命]], [[life-insurers/taiju-life|大樹生命]], [[life-insurers/daido-life|大同生命]], [[life-insurers/taiyo-life|太陽生命]], [[life-insurers/tokio-marine-nichido-life|東京海上日動あんしん生命]], [[life-insurers/fukoku-life|富国生命]], [[life-insurers/rakuten-life|楽天生命]] |
| [x] | 生命保険子会社 / 特殊 D2 | [[life-insurers/cardif-life|カーディフ生命]], [[life-insurers/gibraltar-life|ジブラルタ生命]], [[life-insurers/zurich-life|チューリッヒ生命]], [[life-insurers/td-financial-life|T&Dフィナンシャル生命]], [[life-insurers/nanairo-life|なないろ生命]], [[life-insurers/nissay-wealth-life|ニッセイ・ウェルス生命]], [[life-insurers/hanasaku-life|はなさく生命]], [[life-insurers/mitsui-sumitomo-aioi-life|三井住友海上あいおい生命]], [[life-insurers/medicare-life|メディケア生命]] |
| [x] | 損害保険大手 D3 | [[non-life-insurers/tokio-marine-nichido-fire|東京海上日動火災]], [[non-life-insurers/mitsui-sumitomo-insurance|三井住友海上火災]], [[non-life-insurers/aioi-nissay-dowa-insurance|あいおいニッセイ同和]], [[non-life-insurers/sompo-japan-insurance|損害保険ジャパン]] |
| [x] | ダイレクト / デジタル損害保険 D4 | [[non-life-insurers/sony-insurance|ソニー損保]], [[non-life-insurers/sbi-insurance|SBI損保]], [[non-life-insurers/au-insurance|au損保]], [[non-life-insurers/tokio-marine-direct|東京海上ダイレクト]], [[non-life-insurers/sompo-direct|SOMPOダイレクト]], [[non-life-insurers/mitsui-direct|三井ダイレクト]], [[non-life-insurers/rakuten-general-insurance|楽天損保]] |
| [x] | 特殊 / 再保険 D5 | [[non-life-insurers/anicom-insurance|アニコム損保]], [[non-life-insurers/secom-insurance|セコム損保]], [[non-life-insurers/toa-reinsurance|トーア再保険]], [[non-life-insurers/japan-earthquake-reinsurance|日本地震再保険]], [[non-life-insurers/nisshin-fire|日新火災]], [[non-life-insurers/meiji-yasuda-general-insurance|明治安田損保]] |
| [x] | 保険持株会社 D6 | [[non-life-insurers/anicom-hd|アニコムHD]], [[non-life-insurers/ntt-docomo-sompo-hd|NTTドコモ損害保険HD]], [[non-life-insurers/rakuten-insurance-hd|楽天インシュアランスHD]], [[life-insurers/dai-ichi-life|第一ライフグループ name-update check]] |
| [x] | 残りの正式名称の生命保険会社 D7 | [[life-insurers/credit-agricole-life|クレディ・アグリコル生命]], [[life-insurers/dai-ichi-life-insurance|第一生命保険]], [[life-insurers/dai-ichi-neo-life|第一ネオ生命]], [[life-insurers/fukokushinrai-life|フコクしんらい生命]], [[life-insurers/pgf-life|PGF生命]], [[life-insurers/ms-primary-life|三井住友海上プライマリー生命]], [[life-insurers/midori-life|みどり生命]], [[life-insurers/meiji-yasuda-trust-life|明治安田トラスト生命]] |
| [x] | 特殊損害保険の拡張 D8 | [[non-life-insurers/dai-ichi-ipet-insurance|第一アイペット損害保険]], [[non-life-insurers/pet-and-family-insurance|ペット＆ファミリー損害保険]], [[non-life-insurers/yamap-naturance-insurance|ヤマップネイチャランス損害保険]], [[non-life-insurers/ntt-docomo-sonpo|NTTドコモ損害保険]] |
| [x] | 特殊 / 外資系損害保険の拡張 D9 | [[non-life-insurers/american-home-insurance-japan|American Home]], [[non-life-insurers/allianz-fire-marine-japan|Allianz Fire and Marine Japan]], [[non-life-insurers/hs-insurance|HS Insurance]], [[non-life-insurers/cardif-nonlife|Cardif Non-Life]], [[non-life-insurers/capital-insurance|Capital Insurance]], [[non-life-insurers/sakura-insurance|Sakura Insurance]], [[non-life-insurers/ji-accident-fire-insurance|JI Accident & Fire]], [[non-life-insurers/zenkankyo-reiwa-insurance|Zenkankyo Reiwa]], [[non-life-insurers/chubb-insurance-japan|Chubb Japan]], [[non-life-insurers/rescue-insurance|Rescue Insurance]], [[non-life-insurers/hyundai-marine-fire-japan|Hyundai Marine & Fire Japan]] |

## Batch E：決済、カード、消費者信用、および送金

これは銀行と保険に次ぐ最大の戦略的ギャップである。主要な消費者向けプラットフォームと、登録された資金移動 / クレジットカード事業者から始める。

| Status | セグメント | 機関 |
|---|---|---|
| [x] | カード発行会社 / アクワイアラー E1 | [[card-issuers/smbc-card|三井住友カード]], [[card-issuers/mufg-nicos|三菱UFJニコス]], [[card-issuers/rakuten-card|楽天カード]], [[card-issuers/paypay-card|PayPayカード]], [[card-issuers/aeon-financial-service|イオンフィナンシャルサービス]], [[card-issuers/epos-card|エポスカード]], [[card-issuers/life-card|ライフカード]], [[card-issuers/pocket-card|ポケットカード]], [[card-issuers/ucs-card|UCS]], [[card-issuers/seven-card-service|セブン・カードサービス]] |
| [x] | 消費者金融 / 割賦 E1 | [[consumer-finance/smbc-consumer-finance|SMBCコンシューマーファイナンス]], [[card-issuers/aplus|アプラス]] |
| [x] | 消費者金融 / 割賦 E2 | [[consumer-finance/shinsei-financial|新生フィナンシャル]], [[card-issuers/toyota-finance|Toyota Finance]] ページを [[leasing-firms/toyota-financial|Toyota Financial Services]] から分割 |
| [x] | PSP / アクワイアリング / ゲートウェイ E1 | [[payment-firms/sb-payment-service|SBペイメントサービス]], [[payment-firms/gmo-epsilon|GMOイプシロン]], [[payment-firms/dg-financial-technology|DGフィナンシャルテクノロジー]] |
| [x] | PSP / アクワイアリング / ゲートウェイ E2 | [[payment-firms/netstars|ネットスターズ]], [[payment-firms/recruit-mufg-business|リクルートMUFGビジネス]], [[payment-firms/jal-payment-port|JALペイメント・ポート]] |
| [x] | ウォレット / 資金移動 E2 | [[payment-firms/paypay|PayPay]], [[payment-firms/merpay|Merpay]], [[payment-firms/au-payment|au PAY / auペイメント]], [[payment-firms/rakuten-edy|楽天Edy]], [[payment-firms/kyash|Kyash]], [[payment-firms/smartbank|SmartBank]], [[payment-firms/pring|pring]], [[payment-firms/seven-payment-service|Seven Payment Service]] |
| [x] | クロスボーダー送金 E2 | [[payment-firms/wise-payments-japan|Wise Payments Japan]], [[payment-firms/revolut-technologies-japan|Revolut Japan]], [[payment-firms/paypal-pte-ltd-japan|PayPal Pte. Ltd.]], [[payment-firms/payoneer-japan|Payoneer Japan]], [[payment-firms/western-union-japan|Western Union Japan]], [[payment-firms/sbi-remit|SBI Remit]], [[payment-firms/travelex-japan|Travelex Japan]], [[payment-firms/airwallex-japan|Airwallex Japan]] |
| [x] | ステーブルコイン / EPI 隣接 E3 | [[payment-firms/jpyc|JPYC]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade EPSP / USDC cross-link]], [[payment-firms/progmat|Progmat]] / [[trust-banks/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust]] リンクマップ |

## Batch F：暗号資産・デジタル資産のクリーンアップ

取引所の名前空間は強固だが、現在の FSA 一覧には少なくとも 2 つの直接的に欠落した事業者がある。

| Status | 対象ページ | 機関 | 注記 |
|---|---|---|---|
| [x] | `exchanges/jp-exchange-finx-jcrypto.md` | FINX JCrypto | FSA 登録暗号資産交換業者。 |
| [x] | `exchanges/jp-exchange-coinhub.md` | COINHUB | FSA 登録暗号資産交換業者。 |
| [x] | `exchanges/INDEX.md` | 登録事業者の完全性テーブル | 全 27  の FSA 事業者と JVCEA 会員クラスを記す。 |
| [x] | `exchanges/jp-exchange-sbi-vc-trade.md` | SBI VC Trade | EPSP / USDC 電子決済手段のクロスリンクを追加。 |

## Batch G：外国銀行支店およびグローバル金融機関

現在の wiki はすでにいくつかの主要な米国 / 欧州の銀行をカバーしている。FSA 一覧には 57  の外国銀行支店が含まれるため、段階的なアプローチを用いる。

| Status | 優先度 | 機関 | 注記 |
|---|---|---|---|
| [x] | P0 | [[foreign-financial-institutions/credit-agricole-bank-japan|クレディ・アグリコル銀行]], [[foreign-financial-institutions/natixis-japan|ナティクシス]], [[foreign-financial-institutions/rbc-japan|RBC / カナダロイヤル銀行]], [[foreign-financial-institutions/commerzbank-japan|コメルツ銀行]], [[foreign-financial-institutions/ing-bank-japan|ING Bank]], [[foreign-financial-institutions/dbs-bank-japan|DBS銀行]], [[foreign-financial-institutions/ocbc-bank-japan|OCBC銀行]], [[foreign-financial-institutions/uob-bank-japan|UOB銀行]], [[foreign-financial-institutions/bbva-bank-japan|BBVA]], [[foreign-financial-institutions/intesa-sanpaolo-japan|インテーザ・サンパオロ]] | 主要な欧州 / ASEAN 大手 |
| [x] | P1 | 韓国系: [[foreign-financial-institutions/woori-bank-japan|ウリィ銀行]], [[foreign-financial-institutions/hana-bank-japan|ハナ銀行]], [[foreign-financial-institutions/korea-development-bank-japan|韓国産業銀行]], [[foreign-financial-institutions/industrial-bank-of-korea-japan|中小企業銀行]], [[foreign-financial-institutions/kb-kookmin-bank-japan|國民銀行]] | 韓国クラスター |
| [x] | P1 | 台湾 / 中国系: [[foreign-financial-institutions/bank-of-taiwan-japan|台湾銀行]], [[foreign-financial-institutions/mega-icbc-japan|兆豐國際商業銀行]], [[foreign-financial-institutions/ctbc-bank-japan|中國信託商業銀行]], [[foreign-financial-institutions/esun-bank-japan|玉山銀行]], [[foreign-financial-institutions/bank-of-china-japan|中國銀行]], [[foreign-financial-institutions/icbc-japan|中国工商銀行]], [[foreign-financial-institutions/china-construction-bank-japan|中国建設銀行]], [[foreign-financial-institutions/agricultural-bank-of-china-japan|中国農業銀行]] | 大中華圏クラスター |
| [x] | P2  戦略的例外 | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream]], [[foreign-financial-institutions/bank-of-communications-japan|Bank of Communications]], [[foreign-financial-institutions/bangkok-bank-japan|Bangkok Bank]], [[foreign-financial-institutions/state-bank-of-india-japan|State Bank of India]], [[foreign-financial-institutions/bank-of-india-japan|Bank of India]], [[securities-firms/anz-bank-japan|ANZ]] | ICSD / 担保 / 中国 / ASEAN / インド / 豪州・ニュージーランドのコリドー行を、レジストリのみから単独ページに昇格 |
| [x] | P3  コリドー例外 | [[foreign-financial-institutions/commonwealth-bank-japan|Commonwealth Bank]], [[foreign-financial-institutions/national-australia-bank-japan|National Australia Bank]], [[foreign-financial-institutions/bank-negara-indonesia-japan|Bank Negara Indonesia]], [[foreign-financial-institutions/philippine-national-bank-japan|Philippine National Bank]], [[foreign-financial-institutions/metrobank-japan|Metrobank]], [[foreign-financial-institutions/banco-do-brasil-japan|Banco do Brasil]], [[foreign-financial-institutions/first-commercial-bank-japan|First Commercial Bank]], [[foreign-financial-institutions/taipei-fubon-bank-japan|Taipei Fubon Bank]] | 豪州、インドネシア、フィリピン、ブラジル、台湾のコリドー行を、レジストリのみから単独ページに昇格 |
| [x] | P4  レジストリのみのクローズ | [[foreign-financial-institutions/chang-hwa-bank-japan|彰化商業銀行]], [[foreign-financial-institutions/taishin-bank-japan|台新國際商業銀行]], [[foreign-financial-institutions/taiwan-business-bank-japan|台湾中小企業銀行]], [[foreign-financial-institutions/taiwan-cooperative-bank-japan|合作金庫商業銀行]], [[foreign-financial-institutions/national-bank-of-pakistan-japan|パキスタン・ナショナル銀行]], [[foreign-financial-institutions/ubaf-japan|ユバフーアラブ・フランス連合銀行]] | 残る 6  のレジストリのみの行を、簡潔な単独の支店 / コリドーページに昇格；[[foreign-financial-institutions/foreign-bank-branches-japan-index]] が現在、全 57  の FSA 行をルーティングする |

## Batch H：協同組織・地域金融機関

レジストリインデックスが存在するまでは、何百ものページを一つずつ作成しないこと。

| Status | 対象ページ | 範囲 |
|---|---|---|
| [x] | `banking/shinkin-bank-registry-japan.md` | 254  の信用金庫 + 信金中央金庫；都道府県インデックスおよび正式名称のレジストリ行。 |
| [x] | `banking/credit-cooperative-registry-japan.md` | 143  の信用協同組合 + 全信組連；都道府県インデックスおよび正式名称のレジストリ行。 |
| [x] | `banking/rokin-bank-registry-japan.md` | 13  の労働金庫 + 労金連；労働組合金融マップおよび正式名称のレジストリ行。 |
| [x] | `banking/ja-bank-system-japan.md` | JA バンク / 農林中金 / 都道府県信連 / JA の境界。 |
| [x] | `banking/jf-marine-bank-system-japan.md` | JF マリンバンク / 漁業協同組合金融の境界。 |

## Batch I：政策金融と公的信用の隣接領域

政策金融の名前空間は、すでに [[financial-regulators/jfc|JFC]]、[[financial-regulators/dbj|DBJ]]、[[financial-regulators/jbic|JBIC]]、[[policy-finance/jica|JICA]]、[[policy-finance/jogmec|JOGMEC]]、[[policy-finance/nexi|NEXI]]、[[policy-finance/okinawa-development-finance-corp|Okinawa Development Finance Corp]] をカバーしている。信用創造と公的保証にとって重要な、残りの機関を追加する。

| Status | 対象ページ | 機関 |
|---|---|---|
| [x] | `policy-finance/japan-housing-finance-agency.md` | 住宅金融支援機構 / JHF |
| [x] | `policy-finance/japan-credit-guarantee-system.md` | 信用保証協会制度 / JFG |
| [x] | `policy-finance/national-federation-credit-guarantee-corporations.md` | 全国信用保証協会連合会 |
| [x] | `policy-finance/agriculture-credit-guarantee-system.md` | 農業信用保証 / 農業信用基金協会 |
| [x] | `policy-finance/fisheries-credit-guarantee-system.md` | 漁業信用保証 / 漁業信用基金協会 |

## Batch J：データ QA とインデックス管理

新規ページを 20  件以上書く前に、これらを完了させること。

| Status | タスク | アウトプット |
|---|---|---|
| [x] | FSA レジストリ Excel ファイルを、公開 wiki の外の一時的な作業テーブルにダウンロードし正規化する。 | 公開 wiki の外に作業コピーを作成；ローカルのワークシートはコミットしていない。 |
| [x] | 公式名称を既存の wiki スラッグにマッチさせる。 | 機械的な完全一致 / エイリアスの下限マッチを完了；グループでカバーされた項目は人手レビューを要する。 |
| [x] | このバックログにコンパクトな完全性テーブルを追加する。 | 下記の QA スナップショットを参照；個人データなし、ローカルパスなし。 |
| [x] | 各バッチ後にドメインインデックスを追加または更新する。 | A/F および B1 の後に `JapanFG/INDEX.md` とルート [[INDEX|INDEX]] を同期；Batch J を [[financial-regulators/INDEX|financial-regulators INDEX]] に記録。 |
| [x] | 各バッチ後に wikilink ヘルスチェックを実行する。 | 変更ファイルの wikilinks: B1 の後 42  ファイルが ok。 |
| [x] | 各バッチごとに [[CHANGELOG|CHANGELOG]] を更新する。 | A/F、B1, 、Batch J を JST 時刻、範囲、検証、残作業とともに記録。 |
| [x] | 各バッチ後にルート [[INDEX|INDEX]] を再カウントする。 | B1 の後、ルートのドメインテーブル合計 = 538 、ファイルシステム件数 = 538 ；Batch J は項目を追加しない。Wave-13  後のリフレッシュ（2026-05-25）：JapanFG のヘッドラインは現在 **620  エンティティ項目**、ファイルシステムの .md 件数 = **621**（INDEX / バックログ / 非エンティティのサーフェスを含む）。 |

### Batch J QA スナップショット（2026-05-20）

このテーブルはソース管理上のチェックポイントであり、最終的なカバレッジの主張ではない。`Machine match` は、現在の wiki タイトルとエイリアスからの完全一致 / エイリアス正規化の下限である。wiki が、法人名ページの代わりに親グループページ、外国銀行の日本アンブレラページ、またはインデックスルートを意図的に使用している箇所では、カバレッジを過小に表示する。

| レジストリ | FSA 基準日 | 公式件数 | 機械マッチ下限 | カバレッジの決定 | 次のアクション |
|---|---:|---:|---:|---|---|
| 銀行：都市 / 信託 / その他 | 2026-04-01 | 35 | 34 | B1  と特殊信託の整合の後、ほぼカバー済み；[[trust-banks/sbi-shinsei-trust-bank]] と [[trust-banks/jsf-trust-bank]] は現在、単独ルートを備え、一方 BNY Mellon Trust は重複するカストディアンブレラページを切り分けるため [[foreign-financial-institutions/bny-mellon-japan]] 内で扱われている。 | FSA 銀行免許一覧が変更されるか、信託銀行ルートにより深い KPI / 開示の精度が必要な場合のみリフレッシュする。 |
| 外国銀行支店 | 2026-05-13 | 57 | 57 | レジストリ / インデックスルートは [[foreign-financial-institutions/foreign-bank-branches-japan-index]] 経由で完了；P2  の戦略的例外、P3  のコリドー昇格、P4  のレジストリのみのクローズの後、全 57  行が単独 / アンブレラ wiki ルートを備える。 | FSA `ginkou.xlsx` が変更されたらレジストリインデックスをリフレッシュする；レジストリのみの行は残っていないため、今後の単独の変更は出典の変更またはより深い戦略的論点に従うべき。 |
| 地方銀行 | 2026-01-01 | 61 | 61 | 第一地方銀行の免許サーフェスは、B2.1  北陸 / 北海道、B2.2  東北 / フィデア、B2.3  関東、B2.4  中部、B2.5  関西 / 中国、B2.6  四国、B2.7  九州 / 沖縄 の後、単独 / 意図的な既存アンカーのレベルでクローズ。 | 境界リンクを維持する；FSA 一覧が変更されない限り、新たな第一地方銀行の単独ギャップはない。 |
| 第二地方銀行 | 2026-05-02 | 34 | 34 | 第二地方銀行の免許サーフェスは、B2.2  北日本 / 仙台 / きらやか / 福島 / 大東、B2.3  東日本 / 東京スター / 神奈川 / 栃木 / 大光、B2.4  静岡中央 / あいち / 名古屋、B2.5  もみじ / トマト、B2.6  徳島大正 / 香川 / 愛媛 / 高知、B2.8  第二地方銀行のロングテール の後、単独 / 意図的な既存アンカーのレベルでクローズ。同じ FSA シートには [[megabanks/saitama-resona-bank|埼玉りそな銀行]] 向けの `Other` 行もあり、B1 で既にカバー済み。 | 境界リンクを維持する；FSA 一覧が変更されない限り、新たな第二地方銀行の単独ギャップはない。 |
| 銀行持株会社 | 2026-05-01 | 31 | 31 | 現在名のルートは [[financial-regulators/cci-group]] で完了；[[regional-banks/hokkoku-fhd]] は歴史的 / 旧名のブリッジとして残り、九州の親会社境界は既存の [[regional-banks/kyushu-fg]] ルートで既にカバー済み。 | 現在名のリダイレクトを維持し、FSA 銀行持株会社一覧が変更されたらリフレッシュする。 |
| 信用金庫 + 信金中央金庫 | 2025-11-06 | 255 | 255 | レジストリ / インデックスルートは [[banking/shinkin-bank-registry-japan]] 経由で完了；デフォルトでは 254  の単独ページを作成しない。 | FSA ワークブックが変更されたらレジストリインデックスをリフレッシュする；単独ページは戦略的に重要な例外に限る。 |
| 信用協同組合 + 全信組連 | 2026-02-20 | 144 | 144 | レジストリ / インデックスルートは [[banking/credit-cooperative-registry-japan]] 経由で完了；デフォルトでは 143  の単独ページを作成しない。 | FSA ワークブックが変更されたらレジストリインデックスをリフレッシュする；単独ページは中央 / 戦略的に重要な例外に限る。 |
| 労働金庫 + 労金連 | 2023-08-14 | 14 | 14 | レジストリ / インデックスルートは [[banking/rokin-bank-registry-japan]] 経由で完了。 | FSA ワークブックが変更されたらレジストリインデックスをリフレッシュする；単独ページは労働金庫の主体がより深い分析を要する場合に限る。 |
| 金融商品取引業者 | 2026-04-30 | 1,945 | 1,945 | レジストリルートは [[securities/financial-instruments-business-operators-japan-index]] 経由で完了；主要なブローカー、AM、PTS、FX、および上場 / 公開上重要な事業者はルートアンカーを備える；免許 / ブローカレッジ / 最良執行 / PTS 流動性データ / 信用取引 / 証券金融 / 空売り / 株式貸借 / 株式レンディング / プライムブローカレッジ / 引受 / インフラのコントロールページが現在リンクされている。 | FSA `kinyushohin.xlsx` が変更されたらリフレッシュする；単独ページは戦略的例外に限る。 |
| 生命保険会社 | 2026-04-13 | 41 | 41 | FSA の 41  生命保険会社サーフェスは、D1,  D2,  および D7 の後、単独 / 意図的なグループアンカーのレベルでクローズ。 | 名称変更チェックを維持する；既に解決された親会社 / 事業会社の境界について重複ページを追加しない。 |
| 損害保険会社 | 2026-04-01 | 57 | 37 | 主要、ダイレクト / デジタル、特殊、再保険、ペット保険、アウトドア / プラットフォーム、通信系、旅行、賃貸住宅、外資系、商品特化の D3-D5/D8-D9  ページを完成；残るロングテールの損害保険会社はレジストリ / インデックスの取扱いまたは戦略的例外のレビューを要する。 | FSA `songai.xlsx` が変更されたらリフレッシュする；次に有用なステップは、一律の会社ページ生成ではなく、損害保険のレジストリインデックスまたは外国再保険会社 / P&I キャリアマップ。 |
| 保険持株会社 | 2026-04-01 | 15 | 14 | D6  をアニコム HD、NTT ドコモ損害保険 HD、楽天インシュアランス HD、第一生命グループの名称更新について完成。現在の FSA 持株会社一覧は ipet-holdings の単独ルートを要求しない。 | 残る HD のギャップは、グループ戦略が単独カバレッジを必要とする場合にのみ確認を要する。 |
| 信託会社 | 2026-03-31 | 38 | 38 | レジストリルートは [[trust-banks/trust-companies-japan-index]] 経由で完了；優先度 A / B / C の昇格の後、全 38  行が現在、単独または既存のグループ wiki ルートを備え、0  行がレジストリのみのまま残る。 | FSA `sintaku01.xlsx` が変更されたらリフレッシュする；今後の作業は、生の レジストリ完成よりも、出典 URL のドリフトのリフレッシュまたはレポート出典の精度に注力すべき。 |
| 資金移動業者 | 2026-04-30 | 83 | 83  レジストリルーティング済み | レジストリルートは [[payments/funds-transfer-service-providers-japan-index]] 経由で完了；主要なウォレット / 送金 / PSP ルートは現在、PayPay、Merpay、au PAY、楽天Edy、Kyash、SmartBank、Seven Payment Service、Wise、Revolut、PayPal、Payoneer、Western Union、SBI Remit、Travelex、Airwallex、Netstars、リクルートMUFGビジネス、JALペイメント・ポート、JPYC、NTT ドコモ FG ウォッチルート、[[payments/account-to-account-payment-japan|account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring route]]、[[payments/japan-bank-api-payment-agency-route|bank API / electronic payment agency route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident / fraud controls]]、[[payments/japan-card-security-authentication-controls|card security / authentication controls]] を含む。 | FSA `shikin_idou.pdf` が変更されたらリフレッシュする；単独ページは戦略的例外に限る。 |
| 信用購入 / カード事業者 | 2026-04  月末 | 241  包括 / 138  個別 / 275  クレジットカード番号契約事業者 | レジストリルーティング済み | レジストリルートは [[payments/credit-purchase-card-operators-japan-index]] 経由で完了；主要なカード発行会社、消費者金融、オートファイナンス、PSP、ウォレット隣接の事業者は主要な wiki ルートを備える；[[payments/japan-card-issuer-acquirer-processor-split|card role split]] と [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] が現在、役割と商品分類をルーティングする。 | METI 一覧が変更されたらリフレッシュする；単独ページは主要な発行会社、アクワイアラー、PSP、BNPL、オートファイナンス、または消費者信用の例外に限る。 |
| 暗号資産交換業者 | 2026-04-01 | 27 | 23 | 手動の `exchanges/INDEX.md` 完全性テーブルが、Batch F 後の真実の情報源である。 | 完全一致のエイリアスを継続的に改善する；FSA の 27  一覧から、当面の単独ギャップはない。 |
| 電子決済手段等取引業者 | 2025-03-04 | 1 | 1 | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] 経由で完了。 | ステーブルコイン / EPI のクロスリンクを維持する。 |
| 第三者型前払式発行者 | 2026-04-30 | 803 | 803 | レジストリルートは [[payments/prepaid-payment-instrument-issuers-japan-index]] 経由で完了；法域件数と主要な wiki ルートを修正、完全な行レベルの出典は FSA ワークブックのまま。 | FSA `daisan.xlsx` が変更されたらリフレッシュする；単独ページは主要なウォレット / カード / 小売の例外に限る。 |

## 推奨実行順序

1. Batch A：市場インフラ。証券、IPO、TDnet、決済、清算、PTS のリンクを解放するため。
2. Batch F：欠落している 2 つの暗号資産事業者と登録事業者の完全性テーブル。小規模であり、暗号資産サーフェスをクリーンにするため。
3. Batch B1：メガバンク / 信託 / インターネット銀行の境界のための銀行事業会社。
4. Batch J：レジストリ QA スナップショット。A/F + B1  で既に 20  ページ以上を追加しており、今後のバッチにはカバレッジ管理テーブルが必要なため。
5. Batch C：証券と資産運用の事業者；FIEA レジストリ、証券免許スタック、オンラインブローカレッジ、最良執行 / SOR / PTS、PTS 流動性データ、信用取引 / 証券金融、引受、および市場インフラのコントロールマップは完成済み。
6. Batch E：決済 / カード / 資金移動の事業者。E1-E3  および Batch K の拡張は、主要ページ / レジストリ管理のレベルで完成済み；戦略的例外についてのみ継続する。
7. Batch D：保険事業会社。D1-D9  は、生命保険会社、主要 / ダイレクト / 特殊の損害保険会社、ペット / アウトドア / 通信系 / 旅行 / 賃貸住宅 / 外資系の特殊保険会社、および保険持株会社のアンカーについて完成；FSA の 41  生命保険会社サーフェスは単独 / 意図的なグループアンカーのレベルでクローズ。生命保険会社ページを重複させるのではなく、レジストリ / インデックスまたは精度作業を継続する。
8. Batch B2  + H：地方銀行ページと協同組織金融のレジストリインデックス。B2.1-B2.8  および H の信金 / 信組 / 労金のレジストリルートは完成済み。
9. Batch G + H + I：外国支店、協同組織システムのギャップ、政策金融の隣接領域。Batch G の外国銀行支店サーフェスは、[[foreign-financial-institutions/foreign-bank-branches-japan-index]]、P2  の戦略的例外ページ、P3  のコリドー例外ページ、P4  のレジストリのみのクローズページを通じて、全 57 行のルートレベルでクローズ。Batch H の協同組織システムのギャップは [[banking/ja-bank-system-japan]] と [[banking/jf-marine-bank-system-japan]] 経由でルーティングされ、Batch I の公的信用の隣接領域は [[policy-finance/japan-housing-finance-agency]]、[[policy-finance/japan-credit-guarantee-system]]、[[policy-finance/national-federation-credit-guarantee-corporations]]、[[policy-finance/agriculture-credit-guarantee-system]]、[[policy-finance/fisheries-credit-guarantee-system]] 経由でルーティングされる。今後の外国銀行の作業は、生の一覧完成ではなく、リフレッシュ / 精度作業であるべき。
10. 完了した戦略的コントロールギャップ：[[payments/account-to-account-payment-japan|account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring detail]]、[[payments/japan-bank-api-payment-agency-route|bank API / electronic payment agency route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident / fraud controls]]、[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]、[[payments/japan-card-security-authentication-controls|card security / authentication controls]]、[[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]]、[[securities/japan-best-execution-sor-pts|best-execution / SOR / PTS detail]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/japan-margin-trading-and-securities-finance|margin trading / securities finance route]]、[[securities/japan-short-selling-and-stock-loan-controls|short-selling / stock-loan controls]]、[[securities/japan-stock-lending-market-route|stock lending route]]、[[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage / institutional financing]]、[[banking/japan-trust-bank-custody-map|trust-bank custody map]]、[[banking/japan-master-trust-and-custody-bank-landscape|master trust / custody landscape]]、[[banking/regional-bank-api-digital-partnership-route|regional bank API route]]、[[finance/japan-tender-offer-process|TOB process]]、[[finance/japan-acquisition-finance|acquisition finance]]、[[finance/japan-activist-investor-playbook|activist investor playbook]]。次の候補は、出典 URL のドリフトのリフレッシュ、損害保険会社のレジストリインデックス、外国再保険会社 / P&I キャリアマップ、またはより深いレポート出典の精度。

## Source URLs

- FSA license / registration index: https://www.fsa.go.jp/menkyo/menkyo.html
- FSA funds-transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- METI registered operators under the Installment Sales Act: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- FSA bank license list: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx
- FSA life-insurance company list: https://www.fsa.go.jp/menkyo/hoken.pdf
- FSA non-life insurance company list: https://www.fsa.go.jp/menkyo/menkyoj/songai.pdf
- FSA insurance holding-company list: https://www.fsa.go.jp/menkyo/menkyoj/hokenmochikabu.pdf
- Life Insurance Association of Japan member list: https://www.seiho.or.jp/member/list/
- Non-Life Insurance Policyholders Protection Corporation member list: https://www.sonpohogo.or.jp/outline/member-companies.html
- FSA bank holding company list: https://www.fsa.go.jp/menkyo/menkyoj/ginkoumochikabu.xlsx
- FSA financial instruments business operator list: https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx
- FSA life insurer list: https://www.fsa.go.jp/menkyo/hoken.xlsx
- FSA non-life insurer list: https://www.fsa.go.jp/menkyo/menkyoj/songai.xlsx
- FSA insurance holding company list: https://www.fsa.go.jp/menkyo/menkyoj/hokenmochikabu.xlsx
- FSA trust company list: https://www.fsa.go.jp/menkyo/menkyoj/sintaku01.xlsx
- FSA funds transfer service provider list: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.xlsx
- FSA crypto asset exchange operator list: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- FSA electronic payment instrument service provider list: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA third-party prepaid payment instrument issuer list: https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx
- FSA shinkin list: https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx
- FSA credit cooperative list: https://www.fsa.go.jp/menkyo/menkyoj/shinkumi.xlsx
- FSA rokin list: https://www.fsa.go.jp/menkyo/menkyoj/rokin.xlsx
- JBA member banks: https://www.zenginkyo.or.jp/abstract/outline/organization/member-01/
- JSDA member list: https://www.jsda.or.jp/about/kanyu/
- Life Insurance Association of Japan member list: https://www.seiho.or.jp/member/list/
- General Insurance Association of Japan member list: https://www.sonpo.or.jp/about/outline/members/
- JVCEA member list: https://jvcea.or.jp/member/
- Japan Payment Service Association funds transfer member service list: https://www.s-kessai.jp/consumer/funds_transfer/member_service.html
- METI Installment Sales Act overview / registered operators: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- JPX short-selling restrictions: https://www.jpx.co.jp/english/equities/trading/regulations/02.html
- JSDA borrowing and lending guidelines: https://www.jsda.or.jp/en/activities/research-studies/html/BLT_Guidelines_en.pdf
- JPX TDnet overview: https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/index.html
- Japan Credit Association security materials: https://www.j-credit.or.jp/security/document/index.html
