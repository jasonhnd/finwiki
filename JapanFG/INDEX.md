---
title: JapanFG — 日本金融集团 wiki namespace
aliases: ["Japan FG", "日本 FG", "JFG-index", "日本金融集団"]
domain: JapanFG
created: 2026-05-18
last_updated: 2026-05-20
last_tended: 2026-05-20
review_by: 2026-11-16
confidence: certain
tags: [JapanFG, index]
status: active
sources:
  - "Wikipedia 日本語版 各 FG 条目（2026-05-18〜19 抽出）"
  - "各 FG 公式 IR 資料・有価証券報告書"
  - "金融庁・FSB 公開資料"
---

# JapanFG — 日本金融集团 wiki namespace

## TL;DR

日本主要金融集团（フィナンシャルグループ・ホールディングス・銀行・証券・保険・信販・暗号資産・外資系日本子会社）的 entity 页 namespace。**166 entries + 1 INDEX + 1 legal/license subdomain INDEX + 1 report-source index** 覆盖メガバンク + 通信系 + 決済系 + 地銀 + ネオバンク + 政策金融 + 信託 + 証券 + 生損保 + 信販 + Fintech + 外資系の全業態。P3 graph-repair で追加した 21 entries は、20 entries が P4 で source-verified active に昇格し、1 entry (`ssjbank`) は誤リンクとして deprecated alias-audit に整理済み。成熟 entity 页按 8 段固定结构（公司結構 / 业务线 / 战略 / 监管 / Counterpoints / Open questions / Related / Sources）+ ASCII 持株ツリー + KPI 表。

## 命名与位置 convention

- 目录：wiki/JapanFG/
- 文件名：短横线小写 slug（如 mufg.md / ndfg.md / paypay-fg.md / au-fh.md）
- title：日中混合可读名 + 英缩号，如 "三菱 UFJ FG (MUFG)"
- aliases：覆盖英缩 / 日文全称 / 中文别名
- domain：JapanFG
- 默认 confidence：possible（training-data drafted）；经公开 IR 资料校核后升 likely

## 模板（8 段固定）

1. **TL;DR** — 2-3 句话核心结论
2. **1. 公司结构** — 持株 / 子会社 / 合併歴史 / 法人架構（ASCII 持株ツリー）
3. **2. 业务线 map** — 零售 / 法人 / 市場 / 資管 / 海外 / デジタル（KPI 表）
4. **3. 战略与竞争** — DX / 合纵連横 / 海外拡張 / 競合位置
5. **4. 监管与政策** — 金融庁 / 日銀 / SROs / 上場規則 / コンプラ境界
6. **Counterpoints** — 反方観点 / 隐含リスク
7. **Open questions** — 未回答の問い
8. **Related / Sources** — 交差引用 + 公開ソース

証拠標注: `^[extracted]`（公開事実）/ `^[inferred]`（推論）/ `^[ambiguous]`（両論あり）/ `^[forecast]`（予測）。

---

## P0 メガバンク + 主要 FG（8 家）✅ 完了

| Status | Slug | Name | 類型 | 備考 |
|---|---|---|---|---|
| ✅ likely | [[mufg]] | 三菱 UFJ FG | メガバンク | G-SIB Bucket 1 · Morgan Stanley JV |
| ✅ likely | [[smfg]] | 三井住友 FG | メガバンク | G-SIB Bucket 1 · SBI 提携 / Olive |
| ✅ likely | [[mizuho-fg]] | みずほ FG | メガバンク | G-SIB Bucket 1 · 楽天証券 49% |
| ✅ tentative | [[ndfg]] | NTT ドコモ・FG | 通信系 FG | 2026-07 設立予定 |
| ✅ likely | [[au-fh]] | au フィナンシャル HD | 通信系 FG | KDDI 系 · Lawson JV |
| ✅ likely | [[paypay-fg]] | PayPay 金融グループ | 決済系 FG | SoftBank/LY 系 · LINE Pay 統合 |
| ✅ likely | [[rakuten-fg]] | 楽天グループ金融 | EC 系 FG | 楽天 G 内金融セグメント |
| ✅ likely | [[sbi-hd]] | SBI HD | 網絡金融 | 独立大手 + SMFG 提携 · SBI 新生 |

## P1 ネオバンク・証券・暗号資産（8 家）✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[ssnb]] | 住信 SBI ネット銀行 | ネット銀 + BaaS |
| ✅ likely | [[monex-group]] | マネックスグループ | 証券 + 暗号資産 |
| ✅ likely | [[fukuoka-fg]] | ふくおか FG | 地銀大手（みん銀母体） |
| ✅ likely | [[mercari-hd]] | メルカリ HD | EC / Bank 一体 |
| ✅ likely | [[nomura-hd]] | 野村 HD | 証券大手 (国内 No.1) |
| ✅ likely | [[daiwa-sg]] | 大和証券 G | 証券大手 (国内 No.2) |
| ✅ likely | [[bitflyer]] | bitFlyer | 暗号資産 |
| ✅ likely | [[bittrade]] | ビットトレード | 暗号資産（旧 Huobi Japan） |

## P2 生損保・クレカ・政策金融（9 家）✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[dai-ichi-life]] | 第一生命 HD | 生保 (株式会社) |
| ✅ likely | [[nippon-life]] | 日本生命 | 生保 (相互会社) |
| ✅ likely | [[tokio-marine]] | 東京海上 HD | 損保 (3 メガ筆頭) |
| ✅ likely | [[msad]] | MS&AD | 損保 (3 メガ) |
| ✅ likely | [[sompo]] | SOMPO | 損保 (3 メガ) |
| ✅ likely | [[jcb]] | JCB | クレカ専業 + 国際ブランド |
| ✅ likely | [[smbc-nikko]] | SMBC 日興証券 | 証券（[[smfg]] 系） |
| ✅ likely | [[jfc]] | 日本政策金融公庫 | 政策金融（中小 / 個人 / 農林漁業） |
| ✅ likely | [[dbj]] | 日本政策投資銀行 | 政策金融（中堅・大企業） |

## P3 大手系・信託・郵政・政策金融（10 家）✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[resona-hd]] | りそな HD | 第 4 のメガ級・信託兼業商業銀行 |
| ✅ likely | [[sumitomo-mitsui-trust]] | 三井住友トラスト HD | 3 大信託（独立、SMFG とは別法人）|
| ✅ likely | [[nippon-post]] | 日本郵政 | 郵政持株（ゆうちょ + かんぽ 包含）|
| ✅ likely | [[yucho]] | ゆうちょ銀行 | 国内最大級預貯金規模 |
| ✅ likely | [[kampo-life]] | かんぽ生命保険 | 旧簡保・郵政系生保 |
| ✅ likely | [[norinchukin]] | 農林中央金庫 | 系統中央銀行・世界最大協同組合銀行 |
| ✅ likely | [[shoko-chukin]] | 商工組合中央金庫 | 旧政策金融・2023-10 完全民営化 |
| ✅ likely | [[jbic]] | 国際協力銀行 (JBIC) | 海外政策金融 |
| ✅ likely | [[aozora-bank]] | あおぞら銀行 | 旧日債銀・米 CRE 損失問題 |
| ✅ likely | [[gmo-aozora-net]] | GMO あおぞらネット銀行 | 法人特化 BaaS |

## P4 地銀 FG 第 1 波（10 家）✅ 完了

| Status | Slug | Name | 地盤 |
|---|---|---|---|
| ✅ likely | [[concordia-fg]] | コンコルディア FG | 神奈川 (横浜銀 + 東日本銀) |
| ✅ likely | [[mebuki-fg]] | めぶき FG | 茨城 + 栃木 (常陽 + 足利) |
| ✅ likely | [[shizuoka-fg]] | しずおか FG | 静岡 (単独 HD 化) |
| ✅ likely | [[hokuhoku-fg]] | ほくほく FG | 富山 + 北海道 |
| ✅ likely | [[yamaguchi-fg]] | 山口 FG (YMFG) | 山口 + 広島 + 北九州 |
| ✅ likely | [[nishi-nippon-fhd]] | 西日本シティ FHD | 福岡 (vs [[fukuoka-fg]]) |
| ✅ likely | [[kyushu-fg]] | 九州 FG | 熊本 + 鹿児島 (TSMC 特需) |
| ✅ likely | [[dai-shi-hokuetsu-fg]] | 第四北越 FG | 新潟 |
| ✅ likely | [[kiraboshi-fg]] | 東京きらぼし FG | 東京都内 (3 行統合) |
| ✅ likely | [[hirogin-hd]] | ひろぎん HD | 広島 (マツダ SC) |

## P5 地銀 FG 第 2 波 + 流通系銀行（10 家）✅ 完了

| Status | Slug | Name | 地盤・特徴 |
|---|---|---|---|
| ✅ likely | [[tomony-hd]] | トモニ HD | 徳島 + 香川 + 大阪 (大正銀) |
| ✅ likely | [[ikeda-senshu-hd]] | 池田泉州 HD | 大阪 + 兵庫 |
| ✅ likely | [[iyogin-hd]] | いよぎん HD | 愛媛 (四国 No.1) |
| ✅ likely | [[hokkoku-fhd]] | 北國 FHD | 石川 (地銀発 DX リーダー) |
| ✅ likely | [[proclair-hd]] | プロクレア HD | 青森 + みちのく (独禁法特例) |
| ✅ likely | [[fidea-hd]] | フィデア HD | 山形 + 秋田 (+ 岩手) |
| ✅ likely | [[san-jusan-fg]] | 三十三 FG | 三重 (33 ダブルミーニング) |
| ✅ likely | [[sony-fg]] | ソニーフィナンシャル G | 2025-10 再上場予定 |
| ✅ likely | [[seven-bank]] | セブン銀行 | ATM 特化 (流通系) |
| ✅ likely | [[lawson-bank]] | ローソン銀行 | ATM 特化 (流通系) |

## P6 Fintech・中堅証券・大手生保（10 家）✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[aeon-bank]] | イオン銀行 (AFS) | 流通系銀行 + アジア展開 |
| ✅ likely | [[money-forward]] | マネーフォワード | 家計簿 + 法人会計 SaaS |
| ✅ likely | [[freee]] | freee | 中小企業会計 SaaS |
| ✅ likely | [[paidy]] | ペイディ | BNPL (PayPal 子会社) |
| ✅ likely | [[okasan-sg]] | 岡三証券 G | 中堅独立証券 (中京) |
| ✅ likely | [[tokai-tokyo-fh]] | 東海東京 FH | 中堅独立証券 (地銀合弁モデル) |
| ✅ likely | [[matsui-sec]] | 松井証券 | 日本初のネット証券 |
| ✅ likely | [[td-hd]] | T&D HD | 太陽生命 + 大同生命 + T&D F |
| ✅ likely | [[meiji-yasuda]] | 明治安田生命 | 4 大生保 (相互会社) |
| ✅ likely | [[sumitomo-life]] | 住友生命 | 4 大生保 (相互会社・Vitality) |

## P7 信販・カード・地銀・中堅生損保（10 家）✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[orico]] | オリコ | 信販 (自動車ローン No.1) |
| ✅ likely | [[jaccs]] | ジャックス | 信販 ([[mufg]] 系) |
| ✅ likely | [[credit-saison]] | クレディセゾン | クレカ + Amex 提携 |
| ✅ likely | [[kyoto-fg]] | 京都 FG | 京都銀 (任天堂・京セラ含み益) |
| ✅ likely | [[lifenet]] | ライフネット生命 | 日本初のネット生保 ([[au-fh]] 系) |
| ✅ likely | [[axa-japan]] | アクサジャパン | 外資系生損保 (仏 AXA) |
| ✅ likely | [[prudential-japan]] | プルデンシャル日本 | 米 Prudential 3 ブランド |
| ✅ likely | [[famima-digital-one]] | ファミマデジタルワン | FamiPay (伊藤忠系) |
| ✅ likely | [[kyoritsu-fire-marine]] | 共栄火災海上 | 中堅損保 (JA 共済連系) |
| ✅ likely | [[sbi-shinsei-bank]] | SBI 新生銀行 | 旧長銀・SBI 完全子会社 |

## P8 外資系日本子会社（10 家）✅ 完了

| Status | Slug | Name | 親会社 / 特徴 |
|---|---|---|---|
| ✅ likely | [[goldman-sachs-japan]] | ゴールドマン・サックス・ジャパン | NYSE: GS · IB 外資 No.1 級 |
| ✅ likely | [[morgan-stanley-japan]] | モルガン・スタンレー・ジャパン | NYSE: MS · MUFG JV (MUMSS + MSMS) |
| ✅ likely | [[citigroup-japan]] | シティグループ・ジャパン | NYSE: C · 2014 リテール撤退 |
| ✅ likely | [[jpmorgan-japan]] | JP モルガン日本 | NYSE: JPM · IB + マーケッツ |
| ✅ likely | [[hsbc-japan]] | HSBC ジャパン | LSE/HKEX · 2012 リテール撤退 |
| ✅ likely | [[deutsche-japan]] | ドイチェ・ジャパン | 独 DB · 2019 リストラで縮小 |
| ✅ likely | [[bnp-paribas-japan]] | BNP パリバ日本 | 仏 BNP · IB + カーディフ生保 |
| ✅ likely | [[ubs-japan]] | UBS ジャパン | スイス UBS · 旧 CS 統合 + SuMi PB JV |
| ✅ likely | [[barclays-japan]] | バークレイズ日本 | 英 Barclays · IB 中堅 |
| ✅ likely | [[standard-chartered-japan]] | スタチャ東京支店 | 英 SCB · AMEA 専門 |

## P9 大手金融・リース + 主要地銀 (10 家) ✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[orix-corp]] | オリックス | 総合金融コングロマリット |
| ✅ likely | [[tokyo-century]] | 東京センチュリー | 3 大リース ([[mizuho-fg]] + 伊藤忠) |
| ✅ likely | [[fuyo-lease]] | 芙蓉総合リース | 準大手リース (旧 富士銀系) |
| ✅ likely | [[chiba-bank]] | 千葉銀行 | 持株会社化なし · TSUBASA アライアンス主導 |
| ✅ likely | [[gunma-bank]] | 群馬銀行 | 持株会社化なし · 群馬地盤 |
| ✅ likely | [[hachijuni-bank]] | 八十二銀行 | 長野銀 + 長野 (2025-06 合併予定) |
| ✅ likely | [[suruga-bank]] | スルガ銀行 | 2018 シェアハウス事件 |
| ✅ likely | [[chugin-okayama]] | ちゅうぎん FG | 旧 中国銀(岡山), 2022-10 持株会社化 |
| ✅ likely | [[san-in-godo-bank]] | 山陰合同銀行 | 鳥取・島根 |
| ✅ likely | [[hyakujushi-bank]] | 百十四銀行 | 香川 (TSUBASA 準会員) |

## P10 残り地銀・沖縄・中央機関 (10 家) ✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[ogaki-kyoritsu-bank]] | 大垣共立銀行 | 岐阜西濃 · 「楽しい銀行」 |
| ✅ likely | [[hyakugo-bank]] | 百五銀行 | 三重北部 · 中京経済圏 |
| ✅ likely | [[okinawa-fg]] | おきなわ FG | 沖縄銀行 単独 HD (2021-10) |
| ✅ likely | [[ryukyu-bank]] | 琉球銀行 | 沖縄県内 No.2 |
| ✅ likely | [[jimoto-hd]] | じもと HD | きらやか + 仙台 (2024 RCC 国有化) |
| ✅ likely | [[juroku-fg]] | 十六 FG | 岐阜 (2021-10 持株会社化) |
| ✅ likely | [[nanto-bank]] | 南都銀行 | 奈良 (関西 3 県境界) |
| ✅ likely | [[shinkin-central]] | 信金中央金庫 | 信用金庫 254 行中央機関 |
| ✅ likely | [[zenshin-kumi]] | 全国信用協同組合連合会 | 信用組合 145 中央機関 |
| ✅ likely | [[daido-fire-marine]] | 大同火災海上 | 沖縄損保 |

## P11 外資生損保 + Fintech + 暗号資産 (10 家) ✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[aflac-japan]] | アフラック生命 | 第三分野 No.1 (米 Aflac) |
| ✅ likely | [[metlife-japan]] | メットライフ生命 | 外貨建保険 (米 MetLife) |
| ✅ likely | [[manulife-japan]] | マニュライフ生命 | 中堅外資 (加 Manulife) |
| ✅ likely | [[aig-japan]] | AIG ジャパン | 法人特殊リスク (米 AIG) |
| ✅ likely | [[zurich-japan]] | チューリッヒ保険 | ネット直販 (スイス Zurich) |
| ✅ likely | [[gmo-payment-gateway]] | GMO ペイメントゲートウェイ | 決済代行 PSP |
| ✅ likely | [[gmo-coin]] | GMO コイン | 暗号資産 (GMO 系) |
| ✅ likely | [[wealthnavi]] | ウェルスナビ | ロボアド (2024 MUFG TOB) |
| ✅ likely | [[aiful]] | アイフル | 3 大消費者金融唯一独立系 |
| ✅ likely | [[orix-life]] | オリックス生命 | ネット直販生保 (CURE) |

## P12 Wikipedia 持株会社カテゴリ追加発見 (10 家) ✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[aichi-fg]] | あいち FG | 愛知銀 + 中京銀 (2022-10 統合) |
| ✅ likely | [[aizawa-sg]] | アイザワ証券 G | 中堅証券 (アジア新興国投資) |
| ✅ likely | [[iwai-cosmo-hd]] | 岩井コスモ HD | 中堅証券 (関西) |
| ✅ likely | [[gmo-financial-hd]] | GMO フィナンシャル HD | GMO クリック証券 + FX |
| ✅ likely | [[toyota-financial]] | トヨタファイナンシャルサービス | 自動車金融グローバル統括 |
| ✅ likely | [[sbi-regional-bank-hd]] | SBI 地銀 HD | 「第 4 のメガバンク構想」 |
| ✅ likely | [[sbi-insurance-group]] | SBI インシュアランスグループ | SBI 保険持株 |
| ✅ likely | [[akatsuki-hq]] | あかつき本社 | 旧 高木証券系ミニ HD |
| ✅ likely | [[local-govt-finance]] | 地方公共団体金融機構 (JFM) | 自治体融資特殊法人 |
| ✅ likely | [[ueda-yagi-tanshi]] | 上田八木短資 | 3 大短資会社の一角 |

## P13 地域銀行・残存銀行追加 (10 家) ✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[77-bank]] | 七十七銀行 | 宮城・東北中核地銀 |
| ✅ likely | [[chiba-kogyo-bank]] | 千葉興業銀行 | 千葉第 2 地銀 |
| ✅ likely | [[hokuyo-bank]] | 北洋銀行 | 北海道大手地銀 |
| ✅ likely | [[keiyo-bank]] | 京葉銀行 | 千葉地盤 |
| ✅ likely | [[kiyo-bank]] | 紀陽銀行 | 和歌山・大阪地盤 |
| ✅ likely | [[musashino-bank]] | 武蔵野銀行 | 埼玉地盤 |
| ✅ likely | [[shiga-bank]] | 滋賀銀行 | 滋賀地盤 |
| ✅ likely | [[toho-bank]] | 東邦銀行 | 福島地盤 |
| ✅ likely | [[towa-bank]] | 東和銀行 | 群馬・埼玉地盤 |
| ✅ likely | [[yamagata-bank]] | 山形銀行 | 山形地盤 |

## P14 信託・短資・外資・消費者金融・政策金融追加 (10 家) ✅ 完了

| Status | Slug | Name | 类型 |
|---|---|---|---|
| ✅ likely | [[acom]] | アコム | 消費者金融（[[mufg]] 系） |
| ✅ likely | [[custody-bank]] | 日本カストディ銀行 | 資産管理銀行 |
| ✅ likely | [[master-trust-bank]] | 日本マスタートラスト信託銀行 | 資産管理信託銀行 |
| ✅ likely | [[central-tanshi]] | セントラル短資 | 短資会社 |
| ✅ likely | [[tokyo-tanshi]] | 東京短資 | 短資会社 |
| ✅ likely | [[okinawa-kaiho-bank]] | 沖縄海邦銀行 | 沖縄第 2 地銀 |
| ✅ likely | [[okinawa-shinko]] | 沖縄振興開発金融公庫 | 政策金融 |
| ✅ likely | [[bny-mellon-japan]] | BNY メロン日本 | 外資系 custody / asset servicing |
| ✅ likely | [[state-street-japan]] | ステート・ストリート日本 | 外資系 custody / asset servicing |
| ✅ likely | [[wells-fargo-japan]] | Wells Fargo 東京支店 | 外資系銀行 |

## P3 graph-repair pages (21) ✅ resolved

| Status | Slug | Name / target |
|---|---|---|
| ✅ likely | [[18-shinwa-bank]] | 十八親和銀行 · P4 source-verified |
| ✅ likely | [[akita-bank]] | 秋田銀行 · P4 source-verified |
| ✅ likely | [[bank-of-america-japan]] | Bank of America Japan · P4 source-verified |
| ✅ likely | [[bnpl-landscape]] | BNPL landscape · P4 source-verified |
| ✅ likely | [[boj-monetary-policy]] | BoJ monetary policy · P4 legal/license source-verified |
| ✅ likely | [[installment-sales-act-2020-amendment]] | 割賦販売法 2020 改正 · P4 legal/license source-verified |
| ✅ likely | [[iwate-bank]] | 岩手銀行 · P4 source-verified |
| ✅ likely | [[japan-policy-finance-map]] | Japan policy finance map · P4 legal/license source-verified |
| ✅ likely | [[joyo-bank]] | 常陽銀行 · P4 source-verified |
| ✅ likely | [[jsda]] | 日本証券業協会 · P4 legal/license source-verified |
| ✅ likely | [[local-bond-market]] | Local bond market · P4 source-verified |
| ✅ likely | [[mitsubishi-hc-capital]] | 三菱 HC キャピタル · P4 source-verified |
| ✅ likely | [[mizuho-lease]] | みずほリース · P4 source-verified |
| ✅ likely | [[mizuho-securities]] | みずほ証券 |
| ✅ likely | [[mufg-mums]] | 三菱 UFJ モルガン・スタンレー証券 |
| ✅ likely | [[ntt-tc-lease]] | NTT・TC リース · P4 source-verified |
| ✅ likely | [[rakuten-securities]] | 楽天証券 |
| ✅ likely | [[rokin-renraku]] | 労働金庫連合会 · P4 source-verified |
| ✅ likely | [[smfl]] | SMFL · P4 source-verified |
| ✅ likely | [[socgen-japan]] | Societe Generale Japan · P4 source-verified |
| ⚫ deprecated | [[ssjbank]] | erroneous alias; use [[77-bank]] |

## Horizontal domains

| Domain | Route | Scope |
|---|---|---|
| Legal / financial licenses | [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses]] | Banking Act, FIEA / securities, insurance, funds transfer, prepaid, electronic-payment-agency, crypto / EPI, lending, installment-sales, policy-finance statute routes |
| Financial reports 2020+ | [[JapanFG/financial-reports-2020-index|JapanFG financial reports 2020+ index]] | Official annual-report / disclosure / securities-report source ledger for 159 JapanFG companies and institutions |

---

## Rollout 节奏 (履歴)

- **Phase 1 (pilot)** — 2026-05-18 — mufg + smfg ✅
- **Phase 2 (P0 補齊)** — 2026-05-19 — mizuho-fg / ndfg / au-fh / paypay-fg / rakuten-fg / sbi-hd ✅
- **Phase 3 (P1)** — 2026-05-19 — ssnb / monex-group / fukuoka-fg / mercari-hd / nomura-hd / daiwa-sg / bitflyer / bittrade ✅
- **Phase 4 (P2)** — 2026-05-19 — dai-ichi-life / nippon-life / tokio-marine / msad / sompo / jcb / smbc-nikko / jfc / dbj ✅
- **Phase 5 (P3 大手系・信託・郵政)** — 2026-05-19 — 10 entries ✅
- **Phase 6 (P4 地銀 1)** — 2026-05-19 — 10 entries ✅
- **Phase 7 (P5 地銀 2 + 流通系)** — 2026-05-19 — 10 entries ✅
- **Phase 8 (P6 Fintech + 中堅証券 + 生保)** — 2026-05-19 — 10 entries ✅
- **Phase 9 (P7 信販・カード・中堅損保)** — 2026-05-19 — 10 entries ✅
- **Phase 10 (P8 外資系日本子会社)** — 2026-05-19 — 10 entries ✅
- **Phase 11 (P9 大手金融・リース + 主要地銀)** — 2026-05-19 — 10 entries ✅
- **Phase 12 (P10 残り地銀・沖縄・中央機関)** — 2026-05-19 — 10 entries ✅
- **Phase 13 (P11 外資生損保 + Fintech + 暗号資産)** — 2026-05-19 — 10 entries ✅
- **Phase 14 (P12 Wikipedia 追加発見)** — 2026-05-19 — 10 entries ✅
- **Phase 15 (P13 地域銀行・残存銀行追加)** — 2026-05-19 — 10 entries ✅
- **Phase 16 (P14 信託・短資・外資・消費者金融・政策金融追加)** — 2026-05-19 — 10 entries ✅
- **Phase 17 (P3 graph repair planned stubs)** — 2026-05-19 — 21 linked candidate pages ✅
- **Phase 18 (P4 source promotion batch 1)** — 2026-05-19 — [[mitsubishi-hc-capital]] promoted to likely / active ✅
- **Phase 19 (Legal / financial licenses subdomain)** — 2026-05-19 — [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses INDEX]] created ✅
- **Phase 20 (P4 legal/license P1 promotion batch)** — 2026-05-19 — [[installment-sales-act-2020-amendment]] / [[jsda]] / [[boj-monetary-policy]] / [[japan-policy-finance-map]] promoted to likely / active ✅
- **Phase 21 (P4 securities promotion batch)** — 2026-05-20 — [[mizuho-securities]] / [[mufg-mums]] / [[rakuten-securities]] promoted to likely / active ✅
- **Phase 22 (P4 leasing / BNPL / local-bond promotion batch)** — 2026-05-20 — [[smfl]] / [[mizuho-lease]] / [[ntt-tc-lease]] / [[bnpl-landscape]] / [[local-bond-market]] promoted to likely / active ✅
- **Phase 23 (P4 final graph-repair promotion batch)** — 2026-05-20 — [[18-shinwa-bank]] / [[akita-bank]] / [[iwate-bank]] / [[joyo-bank]] / [[rokin-renraku]] / [[socgen-japan]] / [[bank-of-america-japan]] promoted to likely / active; [[ssjbank]] deprecated as erroneous alias ✅
- **Phase 24 (financial report source index)** — 2026-05-20 — [[JapanFG/financial-reports-2020-index|financial-reports-2020-index]] created: 159 company/institution rows, 88 complete / 40 boundary / 27 partial / 4 gap ✅
- **Phase 25 (校核 + 数値更新)** — 待定 — IR 報告で財務 KPI 精度向上 + ^[ambiguous] のクリア
- **Phase 26 (追加候補)** — 待定 — 第四世代地銀 / 中堅 fintech / 政府系・中央機関 / 在日外資支店の残り

## 統計

- 合計エントリ数: **166** entity entries (INDEX / legal-license subdomain INDEX を除く)
- P0-P12 完成済み: 125 entries
- P13 地域銀行・残存銀行追加: 10 entries
- P14 信託・短資・外資・消費者金融・政策金融追加: 10 entries
- P3 graph-repair pages: 21 entries (20 promoted in P4, 1 deprecated erroneous alias, 0 planned stubs remain)
- メガバンク + 通信系 + 決済系 + EC 系 + 網絡金融: 8 (P0)
- ネオバンク + 証券 + 暗号資産: 8 (P1)
- 生損保 + クレカ + 政策金融: 9 (P2)
- 大手系 + 信託 + 郵政 + 政策金融: 10 (P3)
- 地銀 / 地域銀行 / 地域金融: P4-P5 + P9-P10 + P12-P14 に分散
- 流通系銀行 + 中央機関: 5 (seven / lawson / aeon / shinkin / zenshin)
- Fintech + 中堅証券 + 大手生保: 10 (P6)
- 信販・カード・中堅生損保: 10 (P7)
- 外資系日本子会社 (IB + 銀): 10 (P8)
- 大手金融・リース + 主要地銀: 10 (P9)
- 沖縄 + 中央機関 + 残り地銀: 10 (P10)
- 外資生損保 + Fintech + 暗号資産: 10 (P11)
- 持株会社カテゴリ追加発見: 10 (P12)

## Cross-refs

- [[JapanFG/legal-financial-licenses/INDEX]] — 法律 / 金融牌照横断 domain
- [[banking/minna-bank-baas-model]] — みん銀 BaaS（FG 戦略と関連）
- [[banking/mercari-bank-license-stack]] — ライセンス階段
- [[banking/quick-deposit-four-methods]] — クイック入金

## Open questions

- 個別銀行 (持株会社化していない地銀: 千葉銀 / 群馬銀 / 八十二銀 / スルガ銀 / 七十七銀 等) も namespace に含めるべきか?
- 信用金庫中央機関 (信金中央金庫 等) は別 namespace か?
- Fintech 独立創業系の追加 (NP 後払い / Liquid Group / Kyash / みんかぶ 等) はどうするか?
- 外資系のうち、米 Wells Fargo / 米 BNY Mellon / 米 State Street / 加 RBC 等の在日支店も追加するか?
- 大手証券: 三菱 UFJ モルガン・スタンレー証券 [[mufg]] 内 vs 独立 entry にする?

---

> [!info] Source-of-truth
> 本 INDEX は wiki/JapanFG/ namespace 唯一権威 entry tracker。新規 / 完成 entity 時に本表更新。命名 / 模板変更は本ファイルへの反映必須。**166 entity entries + 1 INDEX + 1 legal-license subdomain INDEX + 1 report-source index** が現状 (2026-05-20)。P3 graph-repair placeholders have been resolved; future work should focus on KPI precision, report/PDF precision, and new candidate discovery.
