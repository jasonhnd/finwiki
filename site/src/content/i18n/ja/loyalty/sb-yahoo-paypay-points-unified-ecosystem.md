---
source: loyalty/sb-yahoo-paypay-points-unified-ecosystem
source_hash: 38d0e84b3f8d44ce
lang: ja
status: machine
fidelity: ok
title: "ソフトバンク / Yahoo / PayPay 統合ポイントエコシステム — 2022 統合、2025 LY 統合、会計"
translated_at: 2026-06-19T06:09:18.143Z
---

# ソフトバンク / Yahoo / PayPay 統合ポイントエコシステム — 2022 統合、2025 LY 統合、会計

## Wiki ルート

このエントリは [[loyalty/INDEX|loyalty index]] の配下に、**ウォレットを起点とする共通ポイントの詳細ページ**として位置する。銀行起点の [[loyalty/v-point-smbc-ccc-case|V Point case]]、通信キャリア起点の [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]] と [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]、コアリション起点の [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]、合併後の詳細である [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger detail]] を補完する。エコシステムマップは [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]、IFRS / J-GAAP の処理は [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]、ウォレットレイヤーの市場ポジションは [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]、オペレーター主体は [[payment-firms/paypay|PayPay]]、金融グループの文脈は [[megabanks/paypay-fg|PayPay FG]]、カード側は [[card-issuers/paypay-card|PayPay Card]] と併せて読むこと。

## TL;DR

**PayPayポイント** は、ソフトバンク / LY（旧 Yahoo Japan + LINE）/ PayPay 経済圏の統合された消費者ロイヤルティ通貨である。統合の流れは3つのフェーズにまたがる。**2022 統合フェーズ**では、**Yahoo! JAPAN ポイント、PayPay ボーナス、SoftBank Smart Login ポイント**を 2022-04, 以降、単一の PayPayポイント ブランドへ統合し、ソフトバンク系の消費者向けサービスにまたがるブランドの断片化を解消した。**2023-10 LY Corporation 統合フェーズ**（LINE + Yahoo Japan の親会社レベルの合併により LY Corporation を形成した後）は、統合の射程を LINE 側のコマースサーフェスへと広げた。**2025 LINE Yahoo ポイント統合フェーズ**は、LINE Pay の 2025-04-30 終了に続いて残る LINEポイント 関連の統合を完了させ、残余の LINEポイント は定められた比率で PayPayポイント に変換された。アクティブな PayPay 登録ユーザーは **70 百万人**を超え（PayPay 公式開示、2025-07）、PayPayポイント のリーチは機能的に dポイント や Pontaポイント に匹敵する。会計処理は特徴的である：PayPayポイント の負債は、購入により獲得される**契約負債**と並んで、**重いキャンペーン付与の構成要素（販促費）**を含み、PayPay / ソフトバンクの IR 資料では報告上のポイントコストにおいてキャンペーンコストの項目がしばしば支配的となる。

## 2022 統合 — 統合イベント

**2022-04 統合**は、それまで別々であった3つのポイント通貨を PayPayポイント ブランドの下に統合した：

| 2022 前のポイント | 起源 | 役割 |
|---|---|---|
| **Yahoo! JAPAN ポイント** | Yahoo Japan サービス側の特典（EC サイト、Yahoo!オークション、Yahoo!プレミアム 等） | 2000年代初頭以来の長年にわたる Yahoo のロイヤルティ通貨 |
| **PayPay ボーナス** | PayPay ウォレットのキャンペーン特典（2018-10 の PayPay ローンチ以降） | ウォレット活動の特典で、キャンペーン色の濃い「100億あげちゃうキャンペーン」期を含む |
| **SoftBank Smart Login ポイント / その他** | ソフトバンクの通信回線を起点とする特典 | モバイル回線契約者向け特典 |

統合のメカニクス：

| 観点 | 説明 |
|---|---|
| 統合日 | 2022-04 （2022-Q2にかけて段階的に展開） |
| 変換比率 | 3つのレガシー通貨を PayPayポイント へ 1:1 で変換 |
| 名称 | 「PayPayボーナス」を「PayPayポイント」へリブランド；Yahoo!ポイント を PayPayポイント へ移行 |
| 負債移管 | 各オペレーターの未経過ポイント負債を、PayPay 株式会社 の下の統合された PayPayポイント 台帳へ移管 |
| 顧客体験 | PayPay アプリ、Yahoo Japan サービス、ソフトバンク系アプリで単一残高を表示 |

戦略的意図は、**ブランド横断的な顧客の混乱を解消する**こと、およびマーケティングと加盟店獲得の目的で **PayPayポイント の見かけ上のリーチを最大化する**ことにあった。経済的な効果は、ポイント負債とブレッケージの前提を PayPay 株式会社 の会計範囲内に集約することであり、顧客体験とオペレーターの報告の双方を簡素化した。

## 2023-10 LY Corporation 統合 — 親会社レベルのアライメント

**2023-10 LY Corporation の形成**（Z Holdings — Yahoo Japan と LINE 側 — を統合された LY Corporation という一つの主体へと親会社レベルで合併）は、LINE 側サーフェスへの PayPayポイント のより深い統合を可能にした企業構造上のイベントであった。主な変化：

| 要素 | 2023-10 前 | 2023-10 後 |
|---|---|---|
| 親会社 | Z Holdings（Yahoo Japan + LINE が別々） | LY Corporation（統合） |
| LINE 側ウォレット | LINE Pay（別オペレーター） | LINE Pay は段階的縮小が予定 |
| LINEポイント | LINE 側の別通貨 | PayPayポイント への移行経路が計画 |
| PayPayポイント のリーチ | Yahoo Japan + ソフトバンク + PayPay | LINE のコマース / 加盟店サーフェスへ拡張 |
| LINE Mall、LINEギフト、LINEクーポン | LINEポイント で資金供給 | 段階的に PayPayポイント に整合 |

戦略的意図は、**ソフトバンク・Yahoo・LINE の消費者サーフェスを単一のロイヤルティ通貨（PayPayポイント）へ収束させる**ことであり、LY Corporation のサービス全体にまたがる合計約 100百万人超のユニークユーザー基盤にとっての、複数ウォレット / 複数ポイント管理の摩擦を低減することにあった。

## 2025 LINE Yahoo ポイント統合 — LINE Pay 終了の帰結

**2025-04-30 の LINE Pay（日本国内）サービス終了**は、LINE 側ポイント統合の最終フェーズを引き起こした：

| 要素 | 説明 |
|---|---|
| LINE Pay（日本国内） | 2025-04-30 に終了（LINE ヤフー / LY が公式発表） |
| LINEポイント の残余残高 | 定められた変換比率で PayPayポイント へ移行 |
| LINE 側の加盟店受入 | LINE Pay の加盟店受入は終了；PayPay が統合ウォレットとなる |
| LY 消費者サービスの特典 | PayPayポイント が LY 運営の消費者サーフェス全体で単一の特典通貨となる |
| プログラム横断のクリーンアップ | 2023-2025 に存続していた二重ウォレット / 二重ポイントの曖昧さを除去 |

経済的な効果は、**LY-PayPay エコシステムを単一のウォレットと単一のポイントの下に統合する**ことであり、同一の企業グループ内で LINE Pay を PayPay と並行して運営する運用上の複雑さを解消した。これは、ソフトバンクの FY2025 決算開示で勢いを増した **PayPay IPO の観測**の前提条件であった。

## 会員 ID 基盤とリーチ

| 指標 | 概算値 | 出典 |
|---|---|---|
| PayPay 登録ユーザー | 70百万人超（2025-07） | PayPay 公式開示 |
| PayPay MAU | 数千万人（コード決済ウォレットの中で業界トップ） | PayPay 公式 / キャッシュレス推進協議会 |
| Yahoo! JAPAN ID 基盤 | 70百万人超（2022 統合により PayPay ID へクロスリファレンス） | LY Corporation IR |
| LINE 側 ID 基盤 | 90百万人超（日本国内の LINE ユーザー） | LY Corporation IR |
| LY + PayPay 合計のユニークユーザー・リーチ | 約 100百万人超（サービス横断で重複する ID 基盤） | LY Corporation / PayPay 開示 |

このリーチは機能的に dポイント（NTT ドコモ、d アカウント 100百万人超）および Pontaポイント（Loyalty Marketing + au ID、合計 100百万人超）に匹敵する。構造的な違いは、PayPay のリーチが、**通信回線を起点とする**（dポイント、au PAY ポイント）でも**カード・銀行を起点とする**（V Point）でもなく、**ウォレットを起点とする**（PayPay アプリの普及を通じて構築された）点にある。

## 会計処理 — キャンペーンコスト vs 契約負債

PayPayポイント の会計は特徴的である。なぜなら、ボリュームの面では**キャンペーン原資による付与が支配的**である一方、**購入により獲得されるポイント**が契約負債の層を形成するからである。その内訳：

| 構成要素 | 会計処理 | 計上先 |
|---|---|---|
| **購入により獲得される PayPayポイント** | 契約負債（IFRS 15）— PayPay 加盟店取引からの繰延収益を、付与されたポイントに配分 | PayPay / LY のバランスシート上の契約負債 |
| **PayPayカード 利用の特典** | 発行体側の特典負債を、クレジットカード利用に対して配分 | PayPay Card / PayPay FG のバランスシート上の負債 |
| **キャンペーン付与の PayPayポイント（キャンペーン付与）** | 付与時点の販促費 / 広告費 — 配分対象となる顧客の購入が存在しない | PayPay / ソフトバンクの P&L 上のマーケティングコスト |
| **Yahoo!プレミアム / LINEギフト の特典** | バンドルされたサービスの一部であれば IFRS 15 の下でサブスクリプション収益として配分；そうでなければ販促費 | LY の収益 / コスト注記 |
| **ブレッケージの戻入** | 利用（償還）に比例して、未利用見込残高を認識するパターン | PayPay / LY の償還ウィンドウにわたる収益認識 |

2019-2020 の **「100億あげちゃうキャンペーン」**（100 億円規模の還元キャンペーン）期は、契約負債を積み上げるのではなく直ちに営業費用に計上される**大規模な販促付与**によって特徴づけられた — これは、急速なユーザー成長にもかかわらずキャンペーン色の濃い成長フェーズにおける PayPay の報告損失がこれほど大きかった構造的な理由である。

2022 統合後および 2024 IPO 準備期以降、キャンペーンの強度は緩和され、**購入により獲得される契約負債の層がキャンペーンコストの層に対して相対的に拡大**している。より広範な会計フレームワークについては、「ポイント」が分類されうる5つの会計バケットを扱う [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] を参照。

## 他の主要な共通ポイントとの比較

| 観点 | PayPayポイント | dポイント | au PAY ポイント / Ponta | V Point | Rakuten Points |
|---|---|---|---|---|---|
| アンカー種別 | ウォレット主導（PayPay アプリ）+ LY データ + ソフトバンク通信 | NTT ドコモ 通信 | KDDI au 通信 + 三菱リテール + リクルート | SMBC 銀行 + CCCMK | 楽天 EC + カード + 銀行 + モバイル |
| オペレーター | PayPay 株式会社 | NTT ドコモ 直営 | Loyalty Marketing + au Financial Service | CCCMK Holdings | 楽天グループ |
| 登録ユーザー | 70百万人超 PayPay | 100百万人超 d アカウント | 100百万人超 Ponta + au ID | 130百万人超 統合 | 数千万人のアクティブ |
| ウォレットシェア | 支配的（[[payments/japan-code-payment-operator-2025-market-share-matrix|share matrix]] を参照） | 二番手（d払い） | ニッチ（au PAY） | 限定的（V NEAR PAY） | 中堅（楽天ペイ） |
| クレジットカード | PayPay Card | d Card / d Card GOLD | au PAY カード | SMBC Card / Olive | Rakuten Card |
| 銀行 | PayPay 銀行 | （NDFG が計画） | au じぶん銀行 | SMBC / Olive | 楽天銀行 |
| 証券 | PayPay 証券 | （SMBC アライアンス経由で NDFG が計画） | au カブコム証券 | SBI アライアンス | 楽天証券 |
| キャンペーン強度 | 最高（ウォレット主導） | 中 | 中 | 低（銀行主導） | 中〜高 |
| データグラフ | LY（Yahoo + LINE）+ PayPay 取引 | ドコモ契約者 + d払い | KDDI + リクルート + 三菱リテール | SMBC 顧客 + CCC リテール | 楽天 EC + カード + モバイル |
| 投資クロスセル | PayPay 証券 | （NDFG が計画） | au カブコム証券 | **V-Point での SBI証券 ファンド購入**（特徴的） | 楽天証券 |
| 会計 | 重いキャンペーンコストの項目 | 通信バンドルの契約負債 | au バンドル + Ponta は別 | 銀行側の契約負債 | EC + 金融サービスの契約負債 |

PayPay のウォレット起点モデルの構造的な特徴は、ウォレットシェアを獲得・防衛する必要性に駆動される **最高のキャンペーン強度** と、**最も広範な LY データグラフ**（Yahoo Japan + LINE + PayPay の組合せ）の組合せにある。そのトレードオフは **付与率の持続性の低さ** である：キャンペーン特典のために PayPay を使う顧客は、通信を起点とする顧客や銀行を起点とする顧客よりも価格感応的である。

## PayPay Card の統合

**PayPayカード** は PayPayポイント エコシステムのクレジットカード側の補完である。主なメカニクス：

| 観点 | 説明 |
|---|---|
| 発行体 | PayPay Card 株式会社（PayPay FG 子会社） |
| 標準特典 | カード利用に対して PayPayポイント で 1% |
| PayPay アプリ統合 | 特典率を高めるため PayPay のデフォルト資金供給元に設定 |
| あと払い（Pay Later） | PayPay ウォレット内のクレジット購入枠で、PayPay Card の請求へ決済 |
| 提携バリアント | Yahoo!カード のレガシー統合；PayPayカード ゴールド のプレミアムティア |
| 決済 | 標準的なクレジットカードの月次請求サイクル |

戦略的意図は、**高頻度の PayPay ウォレットユーザーを、より高マージンのクレジットカード保有者へ転換する**ことにあり — dポイント → d Card GOLD のファネルに類似する。転換率は PayPay Card の開示で公表されている。

## 関連

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger detail]]
- [[loyalty/d-point-detailed-ecosystem|d Point detailed ecosystem]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[payment-firms/paypay|PayPay]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[card-issuers/paypay-card|PayPay Card]]
- [[securities-firms/paypay-securities|PayPay 証券]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/ndfg|NDFG]]
- [[megabanks/au-fh|au Financial Holdings]]
- [[megabanks/smfg|SMFG]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[payments/famipay-valucreate-strategy|FamiPay valucreate strategy]]
- [[retail/INDEX|retail index]]
- [[INDEX|FinWiki index]]

## 出典

- PayPay 公式：https://paypay.ne.jp/
- PayPay コーポレートニュース：https://about.paypay.ne.jp/news/
- PayPay コーポレート概要：https://about.paypay.ne.jp/corp/
- PayPayカード 公式：https://paypay-card.co.jp/
- LY Corporation ニュース（LINE Pay 終了、LINE ポイント統合）：https://www.lycorp.co.jp/ja/news/
- ソフトバンク株式会社 プレスリリース：https://www.softbank.jp/corp/news/press/
- キャッシュレス推進協議会 刊行物：https://paymentsjapan.or.jp/category/publications/
