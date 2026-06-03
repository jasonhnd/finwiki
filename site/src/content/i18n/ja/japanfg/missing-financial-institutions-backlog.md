---
source: japanfg/missing-financial-institutions-backlog
source_hash: 2606f321d3665e5f
lang: ja
status: machine
fidelity: ok
title: "日本の未収録金融機関拡張バックログ"
translated_at: 2026-06-02T14:54:39.060Z
---

# 日本の未収録金融機関拡張バックログ

## 概要

本ページは、[[JapanFG/INDEX|JapanFG]] を主要機関中心のウィキから、登録・免許一覧を意識した日本の金融機関マップへ拡張するための実行チェックリストである。

現在のウィキは、メガバンク、主要金融グループ、地域銀行グループ、政策金融、保険会社、証券グループ、リース、決済、フィンテック、外資系日本法人、暗号資産交換業者ページについて強い中核をすでに持つ。ただし、公的な免許・登録一覧に対してはまだ網羅的ではない。

実行ルール:

1. システム上重要な機関、上場金融会社、主要運営子会社、市場インフラ、フィンテック・決済事業者については、公開情報を根拠に独立ページを作成する。
2. 信用金庫、信用組合、前払式支払手段発行者、ロングテールの金融商品取引業者など、数が非常に多い集団には登録一覧・索引ページを使う。
3. 非公開の文脈から会社ページを作成しない。すべてのページは、公開登録一覧、IR、開示資料、会社概要、年次報告書、業界団体一覧、法令・政策文書を出典にできなければならない。

## 公的登録一覧の基準線

| 登録一覧 | 公式件数・範囲 | 出典経路 | ウィキでの扱い |
|---|---:|---|---|
| Banks: city, trust, other | 35 | FSA bank license Excel | 未収録の運営会社ページを追加し、親会社と子会社の境界を照合する。 |
| Foreign bank branches | 57 | FSA bank license Excel | 登録経路では現在、全 57 行について独立ページまたはアンブレラ型ウィキ経路がある。今後の編集は、金融庁一覧の変更または新しい戦略的問いに従う。 |
| 地方銀行 | 61 | 金融庁 銀行免許 Excel | 未収録の直接銀行ページを追加するか、親金融グループでカバー済みとして印を付ける。 |
| 第二地方銀行 | 34 | 金融庁 銀行免許 Excel | 未収録の直接銀行ページを追加するか、親金融グループでカバー済みとして印を付ける。 |
| Bank holding companies | 31 | FSA bank holding company Excel | おおむねカバー済み。2026 以降の名称と合併を確認する。 |
| 信用金庫 | 254 + Shinkin Central Bank | 金融庁 信用金庫免許 Excel | [[JapanFG/shinkin-central|Shinkin Central Bank]] をメインページとして維持し、[[banking/shinkin-bank-registry-japan]] でロングテール経路を完成させる。 |
| 信用組合 | 143 + 中央連合会 | 金融庁 信用組合免許 Excel | [[JapanFG/zenshin-kumi|Zenshin-kumi]] をメインページとして維持し、[[banking/credit-cooperative-registry-japan]] でロングテール経路を完成させる。 |
| 労働金庫 | 13 + Rokinren | 金融庁 労働金庫免許 Excel | [[JapanFG/rokin-renraku|Rokinren]] をメインページとして維持し、[[banking/rokin-bank-registry-japan]] で会員経路を完成させる。 |
| Financial instruments business operators | 1,945 | FSA FIEA operator Excel | Registry route completed via [[securities/financial-instruments-business-operators-japan-index]]; [[JapanFG/legal-financial-licenses/securities-license-stack|securities license stack]] routes Type I/II, 登録金融機関, 仲介, 助言, 運用, PTS, およびJSDA境界; 独立ページは、ブローカー、運用会社、PTS、デリバティブ、上場または公開情報上重要な事業者に限る。 |
| Life insurers | 41 | FSA life insurer Excel | 公開開示のある未収録の保険運営会社とグループ子会社を追加する。 |
| 損害保険会社 | 57 | 金融庁 損害保険会社 Excel | 主要、ダイレクト、再保険、選別した専門 / 外資系経路は D3-D5  / D8-D9 でカバー済み。残るロングテールは登録索引または選択的例外として扱う。 |
| Insurance holding companies | 15 | FSA insurance holding company Excel | グループ戦略上重要な未収録HDページを追加する。 |
| 信託会社 | 38 | 金融庁 信託会社 Excel | 登録経路は [[JapanFG/trust-companies-japan-index]] で完了。優先度 A / B / C の独立ページは完了し、全 38 行は独立ページまたは既存グループのウィキ経路を持つ。 |
| 資金移動業者 | 83 | 金融庁 資金移動 PDF / Excel / JPSA 会員一覧 | 登録経路は [[payments/funds-transfer-service-providers-japan-index]] で完了。独立ページは主要ウォレット、送金、PSP、ステーブルコイン隣接事業者に限って追加する。 |
| Crypto asset exchange operators | 27 | FSA crypto exchange Excel | 既存カバレッジは広い。まず金融庁一覧で未収録の二行を追加する。 |
| 電子決済手段等取引業者 | 1 | 金融庁 EPSP Excel | [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] の文脈でカバー済み。ステーブルコイン / EPI ページから相互リンクする。 |
| 第三者型前払式支払手段発行者 | 803 | 金融庁 前払式支払手段発行者 Excel | 登録経路は [[payments/prepaid-payment-instrument-issuers-japan-index]] で完了。独立ページは主要ウォレット、カード、リテール事業者に限る。 |
| 信用購入・カード事業者 | 241 包括信用購入あっせん業者、138 個別信用購入あっせん業者、275 クレジットカード番号等取扱契約締結事業者 | 経済産業省 割賦販売法リスト | 登録経路は [[payments/credit-purchase-card-operators-japan-index]] で完了。カード発行会社、アクワイアラ、PSP、BNPL / 消費者信用事業者には独立ページを置く。 |

## Batch A: 市場インフラを先に処理

これらは任意ではない。日本の資本市場の中核であり、現時点では他ページ内の参照としてしか現れていない。

| 状態 | 対象ページ | 機関 | 公開上の重要性 |
|---|---|---|---|
| [x] | `JapanFG/japan-exchange-group.md` | 日本取引所グループ / JPX | 上場取引所持株会社。TSE/OSE/TOCOM の親会社。 |
| [x] | `securities/tokyo-stock-exchange.md` | 東京証券取引所 / TSE | 上場、TDnet、開示、市場区分。 |
| [x] | `securities/osaka-exchange.md` | 大阪取引所 / OSE | デリバティブ市場インフラ。 |
| [x] | `securities/tokyo-commodity-exchange.md` | 東京商品取引所 / TOCOM | 商品デリバティブインフラ。 |
| [x] | `securities/japan-securities-clearing-corp.md` | 日本証券クリアリング機構 / JSCC | 清算機関。現物、デリバティブ、OTC 清算。 |
| [x] | `securities/japan-securities-depository-center.md` | 証券保管振替機構 / JASDEC / ほふり | 決済・振替インフラ。 |
| [x] | `JapanFG/japan-securities-finance.md` | 日本証券金融 / JSF | 貸借取引、証券金融、信託銀行隣接領域。 |
| [x] | `securities/japannext-securities.md` | ジャパンネクスト証券 | PTS / 代替取引市場。 |
| [x] | `securities/osaka-digital-exchange.md` | 大阪デジタルエクスチェンジ / ODX | PTS とセキュリティトークン市場インフラ。 |

## Batch B: 銀行運営会社ページ

親金融グループのページは多く存在するが、免許を持つ銀行運営会社には独立ページがない場合がある。運営会社に個別の公開開示、戦略上の役割、免許境界、市場上の重要性がある場合に限って追加する。

### B1. メガバンク・信託銀行・インターネット銀行の運営会社

| 状態 | 対象ページ | 機関 | Boundary note |
|---|---|---|---|
| [x] | `JapanFG/mizuho-bank.md` | 株式会社みずほ銀行 | Under [[JapanFG/mizuho-fg|Mizuho FG]]. |
| [x] | `JapanFG/sumitomo-mitsui-banking-corp.md` | 株式会社三井住友銀行 / SMBC | Under [[JapanFG/smfg|SMFG]]. |
| [x] | `JapanFG/mufg-bank.md` | 株式会社三菱UFJ銀行 | Under [[JapanFG/mufg|MUFG]]. |
| [x] | `JapanFG/resona-bank.md` | 株式会社りそな銀行 | Under [[JapanFG/resona-hd|Resona HD]]. |
| [x] | `JapanFG/saitama-resona-bank.md` | 株式会社埼玉りそな銀行 | Resona group 運営銀行. |
| [x] | `JapanFG/mitsubishi-ufj-trust-bank.md` | 三菱UFJ信託銀行 | MUFG の信託銀行運営会社。 |
| [x] | `JapanFG/mizuho-trust-bank.md` | みずほ信託銀行 | Mizuho trust-bank operating company. |
| [x] | `JapanFG/smtb.md` | 三井住友信託銀行 | Under [[JapanFG/sumitomo-mitsui-trust|SMTG]]. |
| [x] | `JapanFG/smbc-trust-bank.md` | SMBC信託銀行 | SMFG のプライベートバンキング / 信託境界。 |
| [x] | `JapanFG/nomura-trust-bank.md` | 野村信託銀行 | Nomura group banking arm. |
| [x] | `JapanFG/nochu-trust-bank.md` | 農中信託銀行 | Norinchukin trust arm. |
| [x] | `JapanFG/orix-bank.md` | オリックス銀行 | ORIX から Daiwa Next Bank への所有権移行を監視する項目。 |
| [x] | `JapanFG/sony-bank.md` | ソニー銀行 | Under [[JapanFG/sony-fg|Sony FG]]. |
| [x] | `JapanFG/daiwa-next-bank.md` | 大和ネクスト銀行 | Daiwa group bank. |
| [x] | `JapanFG/ui-bank.md` | UI銀行 | Kiraboshi / Tokyo Kiraboshi のデジタル銀行部門。 |
| [x] | `JapanFG/01-bank.md` | 01銀行 | Data-driven SME digital-bank model. |
| [x] | `JapanFG/sbj-bank.md` | SBJ銀行 | Shinhan Bank の日本子会社。 |
| [x] | `JapanFG/rcc.md` | 整理回収機構 / RCC | 銀行免許を持つ特別サービサー / 処理機関。 |

### B2. まだ未収録またはグループのみでカバーされている地方銀行

| 状態 | グループ | 解決対象の機関 |
|---|---|---|
| [x] | Hokuhoku / Hokkoku / Hokuriku B2.1 | [[JapanFG/hokkaido-bank|北海道銀行]], [[JapanFG/hokuriku-bank|北陸銀行]], [[JapanFG/hokkoku-bank|北國銀行]], [[JapanFG/toyama-bank|富山銀行]], [[JapanFG/toyama-first-bank|富山第一銀行]] |
| [x] | Tohoku / Fidea / Jimoto B2.2 | [[JapanFG/tohoku-bank|東北銀行]], [[JapanFG/hokuto-bank|北都銀行]], [[JapanFG/shonai-bank|荘内銀行]], [[JapanFG/kita-nippon-bank|北日本銀行]], [[JapanFG/sendai-bank|仙台銀行]], [[JapanFG/kirayaka-bank|きらやか銀行]], [[JapanFG/fukushima-bank|福島銀行]], [[JapanFG/daito-bank|大東銀行]] |
| [x] | Kanto B2.3 | [[JapanFG/tsukuba-bank|筑波銀行]], [[JapanFG/ashikaga-bank|足利銀行]], [[JapanFG/kiraboshi-bank|きらぼし銀行]], [[JapanFG/yokohama-bank|横浜銀行]], [[JapanFG/higashi-nippon-bank|東日本銀行]], [[JapanFG/tokyo-star-bank|東京スター銀行]], [[JapanFG/kanagawa-bank|神奈川銀行]], [[JapanFG/tochigi-bank|栃木銀行]], [[JapanFG/taiko-bank|大光銀行]] |
| [x] | Chubu B2.4 | [[JapanFG/daishi-hokuetsu-bank|第四北越銀行]], [[JapanFG/yamanashi-chuo-bank|山梨中央銀行]], [[JapanFG/hachijuni-nagano-bank|八十二長野銀行]], [[JapanFG/juroku-bank|十六銀行]], [[JapanFG/shizuoka-bank|静岡銀行]], [[JapanFG/shimizu-bank|清水銀行]], [[JapanFG/shizuoka-chuo-bank|静岡中央銀行]], [[JapanFG/aichi-bank|あいち銀行]], [[JapanFG/nagoya-bank|名古屋銀行]], [[JapanFG/fukui-bank|福井銀行]] |
| [x] | Kansai / Chugoku B2.5 | [[JapanFG/kyoto-bank|京都銀行]], [[JapanFG/kansai-mirai-bank|関西みらい銀行]], [[JapanFG/ikeda-senshu-bank|池田泉州銀行]], [[JapanFG/tajima-bank|但馬銀行]], [[JapanFG/tottori-bank|鳥取銀行]], [[JapanFG/chugoku-bank|中国銀行]], [[JapanFG/hiroshima-bank|広島銀行]], [[JapanFG/momiji-bank|もみじ銀行]], [[JapanFG/tomato-bank|トマト銀行]] |
| [x] | Shikoku B2.6 | [[JapanFG/awa-bank|阿波銀行]], [[JapanFG/iyo-bank|伊予銀行]], [[JapanFG/shikoku-bank|四国銀行]], [[JapanFG/tokushima-taisho-bank|徳島大正銀行]], [[JapanFG/kagawa-bank|香川銀行]], [[JapanFG/ehime-bank|愛媛銀行]], [[JapanFG/kochi-bank|高知銀行]] |
| [x] | Kyushu / Okinawa B2.7 | [[JapanFG/fukuoka-bank|福岡銀行]], [[JapanFG/chikuho-bank|筑邦銀行]], [[JapanFG/nishi-nippon-city-bank|西日本シティ銀行]], [[JapanFG/kitakyushu-bank|北九州銀行]], [[JapanFG/saga-bank|佐賀銀行]], [[JapanFG/higo-bank|肥後銀行]], [[JapanFG/oita-bank|大分銀行]], [[JapanFG/miyazaki-bank|宮崎銀行]], [[JapanFG/kagoshima-bank|鹿児島銀行]], [[JapanFG/okinawa-bank|沖縄銀行]] |
| [x] | Second regional long tail B2.8 | [[JapanFG/minato-bank|みなと銀行]], [[JapanFG/shimane-bank|島根銀行]], [[JapanFG/saikyo-bank|西京銀行]], [[JapanFG/fukuoka-chuo-bank|福岡中央銀行]], [[JapanFG/saga-kyoei-bank|佐賀共栄銀行]], [[JapanFG/nagasaki-bank|長崎銀行]], [[JapanFG/kumamoto-bank|熊本銀行]], [[JapanFG/howa-bank|豊和銀行]], [[JapanFG/miyazaki-taiyo-bank|宮崎太陽銀行]], [[JapanFG/minami-nippon-bank|南日本銀行]], plus existing [[JapanFG/okinawa-kaiho-bank|沖縄海邦銀行]] anchor |

## Batch C: 証券、資産運用、金融商品取引業者

公開情報上の戦略的重要性がある事業者から始める。1,945 件の金融商品取引業者すべてを独立ページにしようとしない。

会社ページ層は現在、[[JapanFG/legal-financial-licenses/securities-license-stack|Japan securities license stack]]、[[securities/japan-online-brokerage-competition|Japan online brokerage competition]]、[[securities/japan-best-execution-sor-pts|Japan best execution, SOR, and PTS]]、[[securities/japan-pts-liquidity-data-guide|Japan PTS liquidity data guide]]、[[securities/japan-underwriting-market-structure|Japan underwriting market structure]]、[[securities/japan-market-infrastructure-map|Japan market infrastructure map]] の六つの管理ページで支えられている。

| 状態 | 対象ページ | 機関 | 出典経路 |
|---|---|---|---|
| [x] | `JapanFG/sbi-securities.md` | SBI証券 | 金融庁 金融商品取引業者一覧 / 会社開示 / SBI グループ IR。 |
| [x] | `JapanFG/mufg-esmart-securities.md` | 三菱UFJ eスマート証券 | FSA FIEA list / MUFG-KDDI boundary. |
| [x] | `JapanFG/paypay-securities.md` | PayPay証券 | 金融庁 金融商品取引業者一覧 / PayPay グループ境界。 |
| [x] | `JapanFG/gmo-click-securities.md` | GMOクリック証券 | FSA FIEA list / GMO FH disclosure. |
| [x] | `JapanFG/dmm-com-securities.md` | DMM.com証券 | 金融庁 金融商品取引業者一覧。暗号資産交換業者ページとは分ける。 |
| [x] | `JapanFG/traders-securities.md` | トレイダーズ証券 | FSA FIEA list; FX / derivatives. |
| [x] | `JapanFG/saxo-bank-securities.md` | サクソバンク証券 | FSA FIEA list; foreign broker Japan entity. |
| [x] | `JapanFG/sbi-fx-trade.md` | SBI FXトレード | FSA FIEA list; SBI FX arm. |
| [x] | `JapanFG/nomura-asset-運用.md` | 野村アセットマネジメント | FSA FIEA investment 運用 route. |
| [x] | `JapanFG/nikko-asset-運用.md` | 日興アセットマネジメント / Amova | 2025-09 name-change boundary captured. |
| [x] | `JapanFG/asset-運用-one.md` | アセットマネジメントOne | Mizuho / Dai-ichi Life AM joint platform. |
| [x] | `JapanFG/mufg-asset-運用.md` | 三菱UFJアセットマネジメント | MUFG AM platform. |
| [x] | `JapanFG/smd-am.md` | 三井住友DSアセットマネジメント | SMFG / Daiwa / insurer shareholder platform. |
| [x] | `JapanFG/daiwa-asset-運用.md` | 大和アセットマネジメント | Daiwa AM platform. |
| [x] | `JapanFG/sbi-asset-運用.md` | SBIアセットマネジメント | SBI AM platform. |

## Batch D: 保険運営会社

保険持株会社ページだけでは商品・チャネル分析には不十分である。公開開示がある運営会社を追加する。

| 状態 | グループ | 作成または照合する機関 |
|---|---|---|
| [x] | Life insurers D1 | [[JapanFG/asahi-life|朝日生命]], [[JapanFG/sbi-life|SBI生命]], [[JapanFG/nn-life-japan|NN生命]], [[JapanFG/fwd-life-japan|FWD生命]], [[JapanFG/sony-life|ソニー生命]], [[JapanFG/sompo-himawari-life|SOMPOひまわり生命]], [[JapanFG/dai-ichi-frontier-life|第一フロンティア生命]], [[JapanFG/taiju-life|大樹生命]], [[JapanFG/daido-life|大同生命]], [[JapanFG/taiyo-life|太陽生命]], [[JapanFG/tokio-marine-nichido-life|東京海上日動あんしん生命]], [[JapanFG/fukoku-life|富国生命]], [[JapanFG/rakuten-life|楽天生命]] |
| [x] | Life subsidiaries / specialty D2 | [[JapanFG/cardif-life|カーディフ生命]], [[JapanFG/gibraltar-life|ジブラルタ生命]], [[JapanFG/zurich-life|チューリッヒ生命]], [[JapanFG/td-financial-life|T&Dフィナンシャル生命]], [[JapanFG/nanairo-life|なないろ生命]], [[JapanFG/nissay-wealth-life|ニッセイ・ウェルス生命]], [[JapanFG/hanasaku-life|はなさく生命]], [[JapanFG/mitsui-sumitomo-aioi-life|三井住友海上あいおい生命]], [[JapanFG/medicare-life|メディケア生命]] |
| [x] | Non-life majors D3 | [[JapanFG/tokio-marine-nichido-fire|東京海上日動火災]], [[JapanFG/mitsui-sumitomo-insurance|三井住友海上火災]], [[JapanFG/aioi-nissay-dowa-insurance|あいおいニッセイ同和]], [[JapanFG/sompo-japan-insurance|損害保険ジャパン]] |
| [x] | Direct / digital non-life D4 | [[JapanFG/sony-insurance|ソニー損保]], [[JapanFG/sbi-insurance|SBI損保]], [[JapanFG/au-insurance|au損保]], [[JapanFG/tokio-marine-direct|東京海上ダイレクト]], [[JapanFG/sompo-direct|SOMPOダイレクト]], [[JapanFG/mitsui-direct|三井ダイレクト]], [[JapanFG/rakuten-general-insurance|楽天損保]] |
| [x] | Specialty / reinsurance D5 | [[JapanFG/anicom-insurance|アニコム損保]], [[JapanFG/secom-insurance|セコム損保]], [[JapanFG/toa-reinsurance|トーア再保険]], [[JapanFG/japan-earthquake-reinsurance|日本地震再保険]], [[JapanFG/nisshin-fire|日新火災]], [[JapanFG/meiji-yasuda-general-insurance|明治安田損保]] |
| [x] | Insurance holding companies D6 | [[JapanFG/anicom-hd|アニコムHD]], [[JapanFG/ntt-docomo-sompo-hd|NTTドコモ損害保険HD]], [[JapanFG/rakuten-insurance-hd|楽天インシュアランスHD]], [[JapanFG/dai-ichi-life|第一ライフグループ name-update check]] |
| [x] | Remaining exact-name life insurers D7 | [[JapanFG/credit-agricole-life|クレディ・アグリコル生命]], [[JapanFG/dai-ichi-life-insurance|第一生命保険]], [[JapanFG/dai-ichi-neo-life|第一ネオ生命]], [[JapanFG/fukokushinrai-life|フコクしんらい生命]], [[JapanFG/pgf-life|PGF生命]], [[JapanFG/ms-primary-life|三井住友海上プライマリー生命]], [[JapanFG/midori-life|みどり生命]], [[JapanFG/meiji-yasuda-trust-life|明治安田トラスト生命]] |
| [x] | Specialty non-life extension D8 | [[JapanFG/dai-ichi-ipet-insurance|第一アイペット損害保険]], [[JapanFG/pet-and-family-insurance|ペット＆ファミリー損害保険]], [[JapanFG/yamap-naturance-insurance|ヤマップネイチャランス損害保険]], [[JapanFG/ntt-docomo-sonpo|NTTドコモ損害保険]] |
| [x] | Specialty / foreign-affiliated non-life extension D9 | [[JapanFG/american-home-insurance-japan|American Home]], [[JapanFG/allianz-fire-marine-japan|Allianz Fire and Marine Japan]], [[JapanFG/hs-insurance|HS Insurance]], [[JapanFG/cardif-nonlife|Cardif Non-Life]], [[JapanFG/capital-insurance|Capital Insurance]], [[JapanFG/sakura-insurance|Sakura Insurance]], [[JapanFG/ji-accident-fire-insurance|JI Accident & Fire]], [[JapanFG/zenkankyo-reiwa-insurance|Zenkankyo Reiwa]], [[JapanFG/chubb-insurance-japan|Chubb Japan]], [[JapanFG/rescue-insurance|Rescue Insurance]], [[JapanFG/hyundai-marine-fire-japan|Hyundai Marine & Fire Japan]] |

## Batch E: 決済、カード、消費者信用、送金

これは銀行・保険の次に大きい戦略的欠落である。主要な消費者向けプラットフォームと登録済み資金移動・クレジットカード事業者から始める。

| 状態 | セグメント | 機関 |
|---|---|---|
| [x] | Card issuers / acquirers E1 | [[JapanFG/smbc-card|三井住友カード]], [[JapanFG/mufg-nicos|三菱UFJニコス]], [[JapanFG/rakuten-card|楽天カード]], [[JapanFG/paypay-card|PayPayカード]], [[JapanFG/aeon-financial-service|イオンフィナンシャルサービス]], [[JapanFG/epos-card|エポスカード]], [[JapanFG/life-card|ライフカード]], [[JapanFG/pocket-card|ポケットカード]], [[JapanFG/ucs-card|UCS]], [[JapanFG/seven-card-service|セブン・カードサービス]] |
| [x] | Consumer finance / installment E1 | [[JapanFG/smbc-consumer-finance|SMBCコンシューマーファイナンス]], [[JapanFG/aplus|アプラス]] |
| [x] | 消費者金融 / 割賦 E2 | [[JapanFG/shinsei-financial|新生フィナンシャル]]、[[JapanFG/toyota-finance|Toyota Finance]] ページを [[JapanFG/toyota-financial|Toyota Financial Services]] から分割 |
| [x] | PSP / acquiring / gateway E1 | [[JapanFG/sb-payment-service|SBペイメントサービス]], [[JapanFG/gmo-epsilon|GMOイプシロン]], [[JapanFG/dg-financial-technology|DGフィナンシャルテクノロジー]] |
| [x] | PSP / acquiring / gateway E2 | [[JapanFG/netstars|ネットスターズ]], [[JapanFG/recruit-mufg-business|リクルートMUFGビジネス]], [[JapanFG/jal-payment-port|JALペイメント・ポート]] |
| [x] | Wallet / funds transfer E2 | [[JapanFG/paypay|PayPay]], [[JapanFG/merpay|Merpay]], [[JapanFG/au-payment|au PAY / auペイメント]], [[JapanFG/rakuten-edy|楽天Edy]], [[JapanFG/kyash|Kyash]], [[JapanFG/smartbank|SmartBank]], [[JapanFG/pring|pring]], [[JapanFG/seven-payment-service|Seven Payment Service]] |
| [x] | Cross-border remittance E2 | [[JapanFG/wise-payments-japan|Wise Payments Japan]], [[JapanFG/revolut-technologies-japan|Revolut Japan]], [[JapanFG/paypal-pte-ltd-japan|PayPal Pte. Ltd.]], [[JapanFG/payoneer-japan|Payoneer Japan]], [[JapanFG/western-union-japan|Western Union Japan]], [[JapanFG/sbi-remit|SBI Remit]], [[JapanFG/travelex-japan|Travelex Japan]], [[JapanFG/airwallex-japan|Airwallex Japan]] |
| [x] | Stablecoin / EPI adjacency E3 | [[JapanFG/jpyc|JPYC]], [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade EPSP / USDC cross-link]], [[JapanFG/progmat|Progmat]] / [[JapanFG/mitsubishi-ufj-trust-bank|Mitsubishi UFJ Trust]] link map |

## Batch F: 暗号資産・デジタル資産の整理

取引所名前空間は充実しているが、現在の金融庁一覧には少なくとも二つの直接的な未収録事業者がある。

| 状態 | 対象ページ | 機関 | Note |
|---|---|---|---|
| [x] | `exchanges/jp-exchange-finx-jcrypto.md` | FINX JCrypto | 金融庁登録の暗号資産交換業者。 |
| [x] | `exchanges/jp-exchange-coinhub.md` | COINHUB | 金融庁登録の暗号資産交換業者。 |
| [x] | `exchanges/INDEX.md` | 登録事業者の網羅性表 | 全 27 件の金融庁登録事業者と JVCEA 会員区分を記録する。 |
| [x] | `exchanges/jp-exchange-sbi-vc-trade.md` | SBI VC Trade | EPSP / USDC 電子決済手段の相互リンクを追加する。 |

## Batch G: 外国銀行支店とグローバル金融機関

現在のウィキは米欧の主要銀行をいくつかすでに扱っている。金融庁一覧には 57 の外国銀行支店が含まれるため、段階的なアプローチを使う。

| 状態 | 優先度 | 機関 | 注記 |
|---|---|---|---|
| [x] | P0 | [[JapanFG/credit-agricole-bank-japan|クレディ・アグリコル銀行]], [[JapanFG/natixis-japan|ナティクシス]], [[JapanFG/rbc-japan|RBC / カナダロイヤル銀行]], [[JapanFG/commerzbank-japan|コメルツ銀行]], [[JapanFG/ing-bank-japan|ING Bank]], [[JapanFG/dbs-bank-japan|DBS銀行]], [[JapanFG/ocbc-bank-japan|OCBC銀行]], [[JapanFG/uob-bank-japan|UOB銀行]], [[JapanFG/bbva-bank-japan|BBVA]], [[JapanFG/intesa-sanpaolo-japan|インテーザ・サンパオロ]] | Major Europe / ASEAN majors |
| [x] | P1 | 韓国系: [[JapanFG/woori-bank-japan|ウリィ銀行]], [[JapanFG/hana-bank-japan|ハナ銀行]], [[JapanFG/korea-development-bank-japan|韓国産業銀行]], [[JapanFG/industrial-bank-of-korea-japan|中小企業銀行]], [[JapanFG/kb-kookmin-bank-japan|國民銀行]] | Korean cluster |
| [x] | P1 | 台湾 / 中国系: [[JapanFG/bank-of-taiwan-japan|台湾銀行]], [[JapanFG/mega-icbc-japan|兆豐國際商業銀行]], [[JapanFG/ctbc-bank-japan|中國信託商業銀行]], [[JapanFG/esun-bank-japan|玉山銀行]], [[JapanFG/bank-of-china-japan|中國銀行]], [[JapanFG/icbc-japan|中国工商銀行]], [[JapanFG/china-construction-bank-japan|中国建設銀行]], [[JapanFG/agricultural-bank-of-china-japan|中国農業銀行]] | Greater China cluster |
| [x] | P2 戦略的例外 | [[JapanFG/euroclear-bank-japan|Euroclear]], [[JapanFG/clearstream-banking-japan|Clearstream]], [[JapanFG/bank-of-communications-japan|Bank of Communications]], [[JapanFG/bangkok-bank-japan|Bangkok Bank]], [[JapanFG/state-bank-of-india-japan|State Bank of India]], [[JapanFG/bank-of-india-japan|Bank of India]], [[JapanFG/anz-bank-japan|ANZ]] | ICSD / 担保 / 中国 / ASEAN / インド / オーストラリア・ニュージーランドのコリドー行を、登録のみから独立ページへ昇格 |
| [x] | P3 コリドー例外 | [[JapanFG/commonwealth-bank-japan|Commonwealth Bank]], [[JapanFG/national-australia-bank-japan|National Australia Bank]], [[JapanFG/bank-negara-indonesia-japan|Bank Negara Indonesia]], [[JapanFG/philippine-national-bank-japan|Philippine National Bank]], [[JapanFG/metrobank-japan|Metrobank]], [[JapanFG/banco-do-brasil-japan|Banco do Brasil]], [[JapanFG/first-commercial-bank-japan|First Commercial Bank]], [[JapanFG/taipei-fubon-bank-japan|Taipei Fubon Bank]] | オーストラリア、インドネシア、フィリピン、ブラジル、台湾のコリドー行を、登録のみから独立ページへ昇格 |
| [x] | P4 登録のみの終了処理 | [[JapanFG/chang-hwa-bank-japan|彰化商業銀行]], [[JapanFG/taishin-bank-japan|台新國際商業銀行]], [[JapanFG/taiwan-business-bank-japan|台湾中小企業銀行]], [[JapanFG/taiwan-cooperative-bank-japan|合作金庫商業銀行]], [[JapanFG/national-bank-of-pakistan-japan|パキスタン・ナショナル銀行]], [[JapanFG/ubaf-japan|ユバフーアラブ・フランス連合銀行]] | 残る 6 件の登録のみ行を簡潔な独立支店 / コリドーページへ昇格。[[JapanFG/foreign-bank-branches-japan-index]] は現在、全 57 件の金融庁行を経路化 |

## Batch H: 協同組織・地域金融機関

登録索引が存在するまでは、数百件のページを一件ずつ作成しない。

| 状態 | 対象ページ | 範囲 |
|---|---|---|
| [x] | `banking/shinkin-bank-registry-japan.md` | 254 信用金庫 + Shinkin Central Bank。都道府県索引と正式名称登録行。 |
| [x] | `banking/credit-cooperative-registry-japan.md` | 143 信用組合 + Zenshin-kumi。都道府県索引と正式名称登録行。 |
| [x] | `banking/rokin-bank-registry-japan.md` | 13 労働金庫 + Rokinren。労働組合金融マップと正式名称登録行。 |
| [x] | `banking/ja-bank-system-japan.md` | JA Bank / Norinchukin / 都道府県 Shinren / JA の境界。 |
| [x] | `banking/jf-marine-bank-system-japan.md` | JF Marine Bank / 漁協金融の境界。 |

## Batch I: 政策金融と公的信用の隣接領域

政策金融名前空間はすでに [[JapanFG/jfc|JFC]]、[[JapanFG/dbj|DBJ]]、[[JapanFG/jbic|JBIC]]、[[policy-finance/jica|JICA]]、[[policy-finance/jogmec|JOGMEC]]、[[policy-finance/nexi|NEXI]]、[[policy-finance/okinawa-development-finance-corp|Okinawa Development Finance Corp]] を扱っている。信用創造と公的保証に重要な残りの機関を追加する。

| 状態 | 対象ページ | 機関 |
|---|---|---|
| [x] | `policy-finance/japan-housing-finance-agency.md` | 住宅金融支援機構 / JHF |
| [x] | `policy-finance/japan-credit-guarantee-system.md` | 信用保証協会制度 / JFG |
| [x] | `policy-finance/national-federation-credit-guarantee-corporations.md` | 全国信用保証協会連合会 |
| [x] | `policy-finance/agriculture-credit-guarantee-system.md` | 農業信用保証 / 農業信用基金協会 |
| [x] | `policy-finance/fisheries-credit-guarantee-system.md` | 漁業信用保証 / 漁業信用基金協会 |

## Batch J: データQAと索引管理

20 件を超える新規ページを書く前に、これらを完了する。

| 状態 | タスク | 成果物 |
|---|---|---|
| [x] | Download and normalize FSA registry Excel files into a temporary working table outside the public wiki. | 公開ウィキ外に作業コピーを作成。ローカルのワークシートはコミットしていない。 |
| [x] | Match official names to existing wiki slugs. | 機械的な完全一致・別名下限照合を完了。グループでカバーされる項目は人手レビューが必要。 |
| [x] | Add a compact completeness table to this backlog. | 下記QAスナップショットを参照。個人情報やローカルパスは含めていない。 |
| [x] | 各バッチ後にドメイン索引を追加または更新する。 | `JapanFG/INDEX.md` と root [[INDEX|INDEX]] は A/F と B1 後に同期済み。Batch J は [[JapanFG/INDEX|JapanFG INDEX]] に記録。 |
| [x] | 各バッチ後にウィキリンク健全性チェックを実行する。 | 変更ファイルのウィキリンク: 42 ファイルは B1 後に問題なし。 |
| [x] | 各バッチで [[CHANGELOG|CHANGELOG]] を更新する。 | A/F、B1, 、Batch J は JST 時刻、範囲、検証、残作業とともに記録済み。 |
| [x] | 各バッチ後に root [[INDEX|INDEX]] を再集計する。 | ルートドメイン表合計は 538 、ファイルシステム件数は 538 （B1 後）。Batch J は項目を追加しない。Post-Wave-13 更新（2026-05-25）では、JapanFG 見出しは現在 **620 エンティティ項目**、ファイルシステムの .md 件数は INDEX / バックログ / 非エンティティ面を含め **621**。 |

### Batch J QA snapshot (2026-05-20)

この表はソース管理上のチェックポイントであり、最終的な網羅性主張ではない。`機械照合` は、現在のウィキタイトルと別名から得た完全一致・別名正規化の下限値である。ウィキが正式名称ページではなく、親グループページ、外国銀行の日本アンブレラページ、または索引経路を意図的に使っている場合、実際のカバレッジより低く出る。

| 登録一覧 | 金融庁基準日 | 公式件数 | 機械照合の下限 | カバレッジ判断 | 次の対応 |
|---|---:|---:|---:|---|---|
| Banks: city / trust / other | 2026-04-01 | 35 | 34 | Mostly covered after B1 plus specialty-trust reconciliation; [[JapanFG/sbi-shinsei-trust-bank]] and [[JapanFG/jsf-trust-bank]] now have standalone routes, while BNY Mellon Trust is handled inside [[JapanFG/bny-mellon-japan]] to separate a duplicate カストディ umbrella page. | 金融庁の銀行免許一覧が変わった場合、または信託銀行経路でより深いKPI・開示精度が必要な場合のみ更新する。 |
| Foreign bank branches | 2026-05-13 | 57 | 57 | Registry/index route completed via [[JapanFG/foreign-bank-branches-japan-index]]; all 57 rows have standalone / umbrella wiki routes after P2 strategic exceptions, P3 corridor promotions, and the P4 registry-only closure. | 金融庁 `ginkou.xlsx` が変わったら登録索引を更新する。登録のみの行は残っていないため、今後の独立ページ変更は出典変更またはより深い戦略的問いに従う。 |
| 地方銀行 | 2026-01-01 | 61 | 61 | 第一地方銀行の免許面は、B2.1 Hokuriku / Hokkaido、B2.2 Tohoku / Fidea、B2.3 Kanto、B2.4 Chubu、B2.5 Kansai / Chugoku、B2.6 Shikoku、B2.7 Kyushu / Okinawa を経て、独立ページ / 意図的な既存アンカーレベルで閉じている。 | 境界リンクを維持する。金融庁一覧が変わらない限り、第一地方銀行の新たな独立ページ欠落はない。 |
| 第二地方銀行 | 2026-05-02 | 34 | 34 | 第二地方銀行の免許面は、B2.2 North Japan / Sendai / Kirayaka / Fukushima / Daito、B2.3 East Japan / Tokyo Star / Kanagawa / Tochigi / Taiko、B2.4 Shizuoka Chuo / Aichi / Nagoya、B2.5 Momiji / Tomato、B2.6 Tokushima Taisho / Kagawa / Ehime / Kochi、B2.8 第二地方銀行ロングテールを経て、独立ページ / 意図的な既存アンカーレベルで閉じている。同じ金融庁シートには [[JapanFG/saitama-resona-bank|埼玉りそな銀行]] の `Other` 行もあり、これは B1 でカバー済み。 | 境界リンクを維持する。金融庁一覧が変わらない限り、第二地方銀行の新たな独立ページ欠落はない。 |
| 銀行持株会社 | 2026-05-01 | 31 | 31 | 現行名称の経路は [[JapanFG/cci-group]] で完了。[[JapanFG/hokkoku-fhd]] は履歴・旧名称ブリッジとして残り、九州の親会社境界は既存の [[JapanFG/kyushu-fg]] 経路でカバー済み。 | 現行名称のリダイレクトを維持し、金融庁の銀行持株会社一覧が変わったら更新する。 |
| Shinkin banks + Shinkin Central Bank | 2025-11-06 | 255 | 255 | Registry/index route completed via [[banking/shinkin-bank-registry-japan]]; do not create 254 standalone pages by default. | 金融庁ワークブックが変わったら登録索引を更新する。独立ページは戦略的に重要な例外に限る。 |
| Credit cooperatives + Zenshinkumiren | 2026-02-20 | 144 | 144 | Registry/index route completed via [[banking/credit-cooperative-registry-japan]]; do not create 143 standalone pages by default. | 金融庁ワークブックが変わったら登録索引を更新する。独立ページは中央機関または戦略的に重要な例外に限る。 |
| Rokin banks + Rokinren | 2023-08-14 | 14 | 14 | Registry/index route completed via [[banking/rokin-bank-registry-japan]]. | 金融庁ワークブックが変わったら登録索引を更新する。労働金庫の個別法人に深い分析が必要な場合のみ独立ページを作る。 |
| 金融商品取引業者 | 2026-04-30 | 1,945 | 1,945 | 登録経路は [[securities/financial-instruments-business-operators-japan-index]] で完了。重要なブローカー、運用会社、PTS、FX、上場または公開情報上重要な事業者には経路アンカーがある。免許、証券仲介、最良執行、PTS 流動性データ、信用取引、証券金融、空売り、株式借入、株式貸借、プライムブローカレッジ、引受、インフラ管理ページは現在リンク済み。 | 金融庁 `kinyushohin.xlsx` が変わったら更新する。独立ページは戦略的例外に限る。 |
| Life insurers | 2026-04-13 | 41 | 41 | FSA 41 life-insurer surface closed at standalone / intentional group-anchor level after D1, D2, and D7. | 商号変更チェックを維持する。親会社・運営会社境界がすでに解決済みのものについて重複ページを追加しない。 |
| Non-life insurers | 2026-04-01 | 57 | 37 | Major, direct / digital, specialty, reinsurance, pet-insurance, outdoor/platform, telco-linked, travel, rental-housing, foreign-affiliated, and product-specialty D3-D5/D8-D9 pages completed; remaining long-tail non-life insurers need registry/index treatment or strategic exception review. | 金融庁 `songai.xlsx` が変わったら更新する。次に有用なのは、網羅的な会社ページ生成ではなく、損保登録索引または外国再保険会社 / P&I キャリアマップである。 |
| 保険持株会社 | 2026-04-01 | 15 | 14 | D6  で Anicom HD、NTT docomo non-life HD、Rakuten Insurance HD、Dai-ichi Life Group の名称更新を完了。現在の金融庁持株会社一覧では ipet-holdings の独立経路は不要。 | 残るHD欠落は、グループ戦略で独立カバレッジが必要な場合にのみ確認する。 |
| Trust companies | 2026-03-31 | 38 | 38 | Registry route completed via [[JapanFG/trust-companies-japan-index]]; all 38 rows now have standalone or existing group wiki routes after priority A / B / C promotion, and 0 rows remain registry-only. | 金融庁 `sintaku01.xlsx` が変わったら更新する。今後の作業は、生の登録完了ではなく、出典URLの変化確認や報告書出典の精度向上に集中する。 |
| 資金移動業者 | 2026-04-30 | 83 | 83 登録経路化済み | 登録経路は [[payments/funds-transfer-service-providers-japan-index]] で完了。重要なウォレット / 送金 / PSP 経路には現在、PayPay、Merpay、au PAY、Rakuten Edy、Kyash、SmartBank、Seven Payment Service、Wise、Revolut、PayPal、Payoneer、Western Union、SBI Remit、Travelex、Airwallex、Netstars、Recruit MUFG Business、JAL Payment Port、JPYC、NTT docomo FG 監視経路、[[payments/account-to-account-payment-japan|account-to-account payment route]]、[[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring route]]、[[payments/japan-bank-api-payment-agency-route|bank API / electronic payment agency route]]、[[payments/japan-bank-api-incident-and-fraud-control|bank API incident / fraud controls]]、[[payments/japan-card-security-authentication-controls|card security / authentication controls]] が含まれる。 | 金融庁 `shikin_idou.pdf` が変わったら更新する。独立ページは戦略的例外に限る。 |
| 信用購入・カード事業者 | 2026-04 月末 | 241 包括 / 138 個別 / 275 カード番号契約事業者 | 登録経路化済み | 登録経路は [[payments/credit-purchase-card-operators-japan-index]] で完了。主要なカード発行会社、消費者金融、自動車金融、PSP、ウォレット隣接事業者は重要ウィキ経路を持つ。[[payments/japan-card-issuer-acquirer-processor-split|card role split]] と [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]] は現在、役割と商品分類を経路化している。 | 経済産業省リストが変わったら更新する。独立ページは主要な発行会社、アクワイアラ、PSP、BNPL、自動車金融、消費者信用の例外に限る。 |
| Crypto asset exchange operators | 2026-04-01 | 27 | 23 | Manual `exchanges/INDEX.md` completeness table is the source of truth after Batch F. | 正式名称の別名を継続的に改善する。金融庁 27 一覧から見た即時の独立ページ欠落はない。 |
| Electronic payment instrument service providers | 2025-03-04 | 1 | 1 | 次で完了 [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]. | ステーブルコイン / EPI の相互リンクを維持する。 |
| Third-party prepaid issuers | 2026-04-30 | 803 | 803 | Registry route completed via [[payments/prepaid-payment-instrument-issuers-japan-index]]; jurisdiction counts and material wiki routes fixed, full row-level source remains FSA workbook. | 金融庁 `daisan.xlsx` が変わったら更新する。独立ページは重要なウォレット、カード、リテールの例外に限る。 |

## 推奨実行順序

1. Batch A: 市場インフラを処理する。証券、IPO、TDnet、決済、清算、PTS リンクを開くため。
2. Batch F: 未収録の暗号資産交換業者二件と登録事業者の網羅性表を処理する。小規模であり、暗号資産面を整理できるため。
3. Batch B1: メガバンク、信託銀行、インターネット銀行の境界に関する銀行運営会社を処理する。
4. Batch J: 登録一覧QAスナップショットを作成する。A/F + B1 ですでに 20 件を超えるページが追加され、以後のバッチにはカバレッジ管理表が必要なため。
5. Batch C: 証券・資産運用事業者を扱う。金融商品取引業者登録、証券免許スタック、オンライン証券、最良執行 / SOR / PTS、PTS 流動性データ、信用取引 / 証券金融、引受、市場インフラ管理マップは完了済み。
6. Batch E: 決済・カード・資金移動事業者を扱う。E1-E3 と Batch K 拡張は、重要ページ / 登録管理レベルで完了済み。戦略的例外に限って継続する。
7. Batch D: 保険運営会社を扱う。生命保険会社、主要 / ダイレクト / 専門損保、ペット / アウトドア / 通信系 / 旅行 / 賃貸住宅 / 外資系専門保険会社、保険持株会社アンカーについて D1-D9  は完了済み。金融庁 41 生命保険会社面は独立ページ / 意図的なグループアンカーレベルで閉じている。生命保険ページの重複ではなく、登録索引または精度向上作業を続ける。
8. Batch B2 + H: 地方銀行ページと協同組織金融の登録索引を処理する。B2.1-B2.8 と H の信用金庫 / 信用組合 / 労働金庫登録経路は完了済み。
9. Batch G + H + I: 外国銀行支店、協同組織システムの欠落、政策金融隣接領域を扱う。Batch G の外国銀行支店面は、全 57行について [[JapanFG/foreign-bank-branches-japan-index]]、P2 戦略的例外ページ、P3 コリドー例外ページ、P4 登録のみ終了ページを通じた経路レベルで閉じている。Batch H の協同組織システム欠落は [[banking/ja-bank-system-japan]] と [[banking/jf-marine-bank-system-japan]] で経路化され、Batch I の公的信用隣接領域は [[policy-finance/japan-housing-finance-agency]]、[[policy-finance/japan-credit-guarantee-system]]、[[policy-finance/national-federation-credit-guarantee-corporations]]、[[policy-finance/agriculture-credit-guarantee-system]]、[[policy-finance/fisheries-credit-guarantee-system]] で経路化されている。今後の外国銀行作業は、生の一覧完了ではなく、更新・精度向上作業とする。
10. 完了済みの戦略的管理ギャップ: [[payments/account-to-account-payment-japan|account-to-account payment route]], [[payments/merchant-bank-pay-account-direct-acquiring|merchant bank-account direct acquiring detail]], [[payments/japan-bank-api-payment-agency-route|bank API / electronic payment agency route]], [[payments/japan-bank-api-incident-and-fraud-control|bank API incident / fraud controls]], [[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]], [[payments/japan-card-security-authentication-controls|card security / authentication controls]], [[payments/japan-bnpl-credit-purchase-boundary|BNPL / credit-purchase boundary]], [[securities/japan-best-execution-sor-pts|best-execution / SOR / PTS detail]], [[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]], [[securities/japan-margin-trading-and-securities-finance|margin trading / securities finance route]], [[securities/japan-short-selling-and-stock-loan-controls|short-selling / stock-loan controls]], [[securities/japan-stock-lending-market-route|stock lending route]], [[securities/japan-prime-brokerage-and-institutional-financing|prime brokerage / institutional financing]], [[banking/japan-trust-bank-custody-map|trust-bank custody map]], [[banking/japan-master-trust-and-custody-bank-landscape|master trust / custody landscape]], [[banking/regional-bank-api-digital-partnership-route|regional bank API route]], [[finance/japan-tender-offer-process|TOB process]], [[finance/japan-acquisition-finance|acquisition finance]], and [[finance/japan-activist-investor-playbook|activist investor playbook]]. 次の候補は、出典URLの変化確認、損保登録索引、外国再保険会社 / P&I キャリアマップ、またはより深い報告書出典の精度向上である。

## 出典URL

- 金融庁 免許・登録一覧: https://www.fsa.go.jp/menkyo/menkyo.html
- 金融庁 資金移動業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- 経済産業省 割賦販売法に基づく登録事業者一覧: https://www.meti.go.jp/policy/economy/consumer/credit/115tourokujigyousyaitiran.html
- 金融庁 銀行免許一覧: https://www.fsa.go.jp/menkyo/menkyoj/ginkou.xlsx
- 金融庁 生命保険会社一覧: https://www.fsa.go.jp/menkyo/hoken.pdf
- 金融庁 損害保険会社一覧: https://www.fsa.go.jp/menkyo/menkyoj/songai.pdf
- 金融庁 保険持株会社一覧: https://www.fsa.go.jp/menkyo/menkyoj/hokenmochikabu.pdf
- 生命保険協会会員 list: https://www.seiho.or.jp/member/list/
- 損害保険契約者保護機構の会員 list: https://www.sonpohogo.or.jp/outline/member-companies.html
- 金融庁 銀行持株会社一覧: https://www.fsa.go.jp/menkyo/menkyoj/ginkoumochikabu.xlsx
- 金融庁 金融商品取引業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/kinyushohin.xlsx
- 金融庁 生命保険会社一覧: https://www.fsa.go.jp/menkyo/hoken.xlsx
- 金融庁 損害保険会社一覧: https://www.fsa.go.jp/menkyo/menkyoj/songai.xlsx
- 金融庁 保険持株会社一覧: https://www.fsa.go.jp/menkyo/menkyoj/hokenmochikabu.xlsx
- 金融庁 信託会社一覧: https://www.fsa.go.jp/menkyo/menkyoj/sintaku01.xlsx
- 金融庁 資金移動業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.xlsx
- 金融庁 暗号資産交換業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
- 金融庁 電子決済手段等取引業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- 金融庁 第三者型前払式支払手段発行者一覧: https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx
- 金融庁 信用金庫一覧: https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx
- 金融庁 信用組合一覧: https://www.fsa.go.jp/menkyo/menkyoj/shinkumi.xlsx
- 金融庁 労働金庫一覧: https://www.fsa.go.jp/menkyo/menkyoj/rokin.xlsx
- JBA 加盟銀行: https://www.zenginkyo.or.jp/abstract/outline/organization/member-01/
- JSDA 会員一覧: https://www.jsda.or.jp/about/kanyu/
- 生命保険協会会員 list: https://www.seiho.or.jp/member/list/
- 日本損害保険協会 会員一覧: https://www.sonpo.or.jp/about/outline/members/
- JVCEA 会員一覧: https://jvcea.or.jp/member/
- 日本資金決済業協会 資金移動会員サービス一覧: https://www.s-kessai.jp/consumer/funds_transfer/member_service.html
- 経済産業省 割賦販売法の概要 / 登録事業者: https://www.meti.go.jp/policy/economy/consumer/credit/kappuhanbaihoatobaraibunyanogaiyofaq.html
- JPX 空売り規制: https://www.jpx.co.jp/english/equities/trading/regulations/02.html
- JSDA 貸借取引ガイドライン: https://www.jsda.or.jp/en/activities/research-studies/html/BLT_Guidelines_en.pdf
- JPX TDnet 概要: https://www.jpx.co.jp/english/equities/listing/disclosure/tdnet/index.html
- 日本クレジット協会 セキュリティ資料: https://www.j-credit.or.jp/security/document/index.html
