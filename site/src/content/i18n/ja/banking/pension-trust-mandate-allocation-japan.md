---
source: banking/pension-trust-mandate-allocation-japan
source_hash: c63058e18e9a15a9
lang: ja
status: machine
fidelity: ok
title: "日本の年金信託マンデート配分"
translated_at: 2026-06-02T11:47:37.309Z
---

# 日本の年金信託マンデート配分

## ウィキ上の位置づけ

このエントリは [[banking/INDEX|banking index]] の下に位置し、年金側の需要を信託銀行の供給に接続する。機関投資家のアンカー [[trust-banks/master-trust-bank|MTBJ]] と [[trust-banks/custody-bank|CBJ]]、オペレーティングモデル [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]] と [[banking/custody-bank-operating-model|Custody Bank operating model]]、ランドスケープ視点 [[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、陣営横断マトリクス [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix|Japan trust bank vs global custodian comparison matrix]]、運用比較 [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]]、手数料研究 [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] とともに読むこと。レールについては [[banking/jasdec-settlement-operations|JASDEC settlement operations]] と、規制ティアについては [[banking/japan-banking-license-tier-comparison-matrix|Japan banking license tier comparison matrix]] と、フロントオフィスの信託銀行側については [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]] と、外国資産レグのサブカストディについては [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] / [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]] とペアにすること。機関投資家のコンテキストについては [[finance/japan-listed-financial-groups-investable-universe|Japan listed financial groups investable universe]] を参照。

## 要約

日本の年金信託マンデートは3層に分かれる:GPIF(資産 約¥250兆、公的年金)、企業 DB プラン(確定給付企業年金)、DC プラン(確定拠出年金、iDeCo を含む)。各層は投資運用(運用機関)を資産管理(資産管理機関)から分離する — 後者こそが MTBJ、CBJ、メガバンクの信託銀行部門が競合する場である。GPIF のパターンはよく文書化されている:アクティブおよびパッシブマンデート向けの外部運用機関(アセットマネージャー)のパネルに加え、カストディと管理のための信託銀行の別個の資産管理機関パネル(MTBJ + CBJ + 選定されたフルサービス信託銀行)。企業 DB プランは同じ分離をミラーし、しばしばプランあたり1〜2の信託銀行を持つ。DC プランは運営管理機関の層(加入者口座のレコードキーピング)を追加し、そこでメガバンクの信託銀行部門と専門の DC オペレーターが競合する。すべての層にわたる外国資産レグは、グローバルカストディアンを日本のサブカストディアンとして経由する。結果は、MTBJ と CBJ が資産管理ユーティリティをアンカーする一方、メガバンクの信託銀行とグローバルカストディアンがフロントオフィスの投資運用および DC 運営管理機関の側で競合する、層状のマンデート配分システムである。

### 年金制度の3層

| 層 | 説明 | 法令 | 概算規模 |
|---|---|---|---|
| **GPIF**(年金積立金管理運用独立行政法人) | 公的年金積立金 | 厚生年金保険法 + 国民年金法 + 独立行政法人法 | 約¥250兆 AUM |
| **企業 DB**(確定給付企業年金) | 企業が拠出する確定給付年金信託 | 確定給付企業年金法(2001) | 約¥66.0兆の受託資産(確定給付企業年金, 令和5年3月末; DB+厚生年金基金 合計 約¥80.5兆) |
| **企業 DC + iDeCo**(確定拠出年金) | 企業が拠出する／個人の DC | 確定拠出年金法(2001) | 合計 約¥29兆(企業型DC ¥22.8兆 + iDeCo ¥6.2兆, 2024-03末);NISA / DC 改革後に急成長 |

### マンデート配分の役割分離

| 役割 | 機能 | 例 |
|---|---|---|
| 運用機関(投資運用者) | 裁量的投資判断;ポートフォリオ構築;取引執行 | アセットマネージャー — Nomura AM, MUFG AM, Daiwa AM, SBI AM, JP 側外部運用者、外国資産運用者(例:Vanguard, BlackRock, State Street SSGA, Goldman Sachs AM, PIMCO など) |
| 資産管理機関(資産管理者／信託銀行) | 信託口座の保管、NAV 計算、決済、CA 処理、議決権行使管理 | MTBJ, CBJ, MUFG Trust, SMTB, Mizuho Trust, Norinchukin Trust |
| 受託金融機関(信託を受託する金融機関) | 年金信託の設定、信託の受託者保有者 | 上記と同じ信託銀行、受託者の立場で |
| 運営管理機関(DC 運営管理者) | 加入者口座のレコードキーピング;投資メニューの提供;加入者向け UI | 信託銀行、証券会社、専門の DC オペレーター(NRK 日本レコード・キーピング・ネットワーク) |
| サブカストディアン(外国資産) | 外国資産の振替決済、決済、FX、外国 CA | BNY Mellon, State Street, JP Morgan, Citi(グローバルカストディアンとして) — 日本の信託銀行経由でアクセス |

### GPIF のマンデート配分

GPIF(約¥250兆 AUM)は日本最大の単一の年金資産プールであり、世界最大の年金基金を運営する。そのマンデート配分パターンは GPIF の年次報告書で公に文書化されている。

| GPIF マンデートスロット | 配分者 | 典型的な参加者タイプ |
|---|---|---|
| 国内株式アクティブ | 運用機関(外部) | Nomura AM, MUFG AM, Daiwa AM, Asset Management One, Goldman Sachs AM Japan, JPM AM Japan, その他 |
| 国内株式パッシブ | 運用機関(外部) | Asset Management One, MUFG AM, Nomura AM, Daiwa AM, BlackRock JP, State Street GA JP, その他 |
| 外国株式アクティブ | 運用機関(外部) | グローバル株式戦略を運用する国際的 + JP 系列 AM |
| 外国株式パッシブ | 運用機関(外部) | BlackRock, State Street GA, Vanguard(該当する場合)、地域 AM 系列 |
| 国内債券アクティブ／パッシブ | 運用機関(外部) | Asset Management One, MUFG AM, Nomura AM, その他 |
| 外国債券アクティブ／パッシブ | 運用機関(外部) | PIMCO, JPM AM, BlackRock, その他 |
| オルタナティブ(PE／インフラ／不動産) | 運用機関(外部) | 専門の PE／インフラ／RE 運用者;ファンド・オブ・ファンズ構造 |
| 資産管理(カストディ、NAV、CA、議決権行使) | 資産管理機関(外部) | MTBJ + CBJ(アンカー) + 選定されたフルサービス信託銀行 |
| 外国資産サブカストディ | サブカストディアンチェーン | MTBJ / CBJ 経由 → グローバルカストディアン(BNY / State Street / JPM / Citi) |

### 企業 DB プランのマンデート配分パターン

| スロット | 配分者 | 典型的な参加者 |
|---|---|---|
| プラン受託者(受託金融機関) | 信託銀行 | MUFG Trust, SMTB, Mizuho Trust, 地域信託銀行の代替 |
| 投資運用マンデート | 運用機関(外部 + プラン側の指示) | アセットマネージャー — 典型的にはプランあたり複数、時に外国 AM を含む |
| 資産管理 | 資産管理機関 | プラン受託者自身のカストディ部門 OR 外部(MTBJ / CBJ) — プラン構造による |
| アクチュアリー／アドバイザリー | 信託銀行 PB / 年金コンサル | MUFG Trust, SMTB, Mizuho Trust, 専門の年金コンサルタント |
| 給付支払い業務 | プラン受託者 | 信託銀行内部 |

### DC プランのマンデート配分パターン

| スロット | 配分者 | 典型的な参加者 |
|---|---|---|
| 運営管理機関(レコードキーピング、加入者管理) | スポンサー／プランルール | 信託銀行(MUFG Trust, SMTB, Mizuho Trust の DC 部門)、証券会社(Nomura, Daiwa, SMBC Nikko)、専門オペレーター NRK |
| 投資メニュー提供 | 運営管理機関 | 選定された投信ラインナップ |
| 信託側カストディ(資産管理) | 資産管理機関 | 運営管理機関の選定した投信受託会社経由の MTBJ / CBJ |
| メニュー内の各ファンドの投信受託会社 | 投信受託としての信託銀行 | MTBJ / CBJ / メガバンク信託部門 |
| 外国資産レグ | サブカストディアンチェーン | 信託銀行経由 → グローバルカストディアン |

### なぜ役割分離が重要か

| 内容 | 含意 |
|---|---|
| 投資判断は運用機関にある | アセットマネージャー — 信託銀行ではない — が証券を選び議決権を行使する(議決権行使ガイドラインに従って) |
| 資産保管は資産管理機関にある | 信託銀行は「信託口」名義で保有 — 発行体の株主リストに現れる |
| 受託者責任の分割 | 信託銀行は資産安全の受託者責任を保持;アセットマネージャーは投資判断の受託者責任を保持 |
| 議決権行使権限 | アセットマネージャーの議決権行使ガイドラインに従って運用され、信託銀行によって機械的に執行される |
| 加入者残高(DC) | 運営管理機関で保有 — しかし基盤となる投信の保有は受託会社としての信託銀行にある |

この分離は、「MTBJ + CBJ」がすべての TOPIX 発行体の筆頭株主として現れることが統一された議決権ブロックとして読めない構造的理由である。

### 年金層横断の競争マップ

| 年金層 | フロントオフィス(運用機関)競争 | バックオフィス(資産管理機関)競争 | 加入者側(運営管理機関)競争 |
|---|---|---|---|
| GPIF | 広いパネル — JP AM + 外国 AM がマンデートスライスを競う | MTBJ + CBJ + 選定されたフルサービス信託銀行 | 該当なし(GPIF は公的年金、DC のような加入者レベルの管理なし) |
| 企業 DB | プラン受託者側 AM + 外部 AM | プラン受託者内部 + 別個にマンデートされた管理向けの MTBJ / CBJ | 該当なし(DB は加入者レベルの管理記録なし) |
| 企業 DC | 運営管理機関の選定した投信ラインナップ → 基盤となる運用機関 | 受託会社層経由の MTBJ / CBJ | MUFG Trust / SMTB / Mizuho Trust / Nomura / Daiwa / SMBC Nikko / NRK |
| iDeCo | DC と同じ | DC と同じ | 同じ DC オペレーター(しばしばリテール向け証券会社／オンラインブローカー) |

### 信託銀行横断の年金マンデート競争

| 信託銀行 | GPIF マンデート側 | 企業 DB 側 | DC 運営管理側 |
|---|---|---|---|
| MTBJ | 主要な資産管理機関 | 主要な資産管理機関 | 限定的(カストディ専門) |
| CBJ | 主要な資産管理機関 | 主要な資産管理機関 | 限定的(カストディ専門) |
| MUFG Trust | 選定された資産管理機関としての利用 | 主要なプラン受託者 + 管理 | 主要な DC 運営管理機関(企業 DC) |
| SMTB | 選定された資産管理機関としての利用 | 主要なプラン受託者 + 管理 | 主要な DC 運営管理機関 |
| Mizuho Trust | 選定された資産管理機関としての利用 | 主要なプラン受託者 + 管理 | 主要な DC 運営管理機関 |
| Norinchukin Trust | 限定的 | 農林系プラン受託者 + 管理 | 限定的 |
| SMBC Trust | 限定的(PB のコンテキスト) | 限定的 | 限定的 |
| Nomura Trust | 限定的(グループ内部) | 限定的 | グループ系の DC オペレーターサポート |

### なぜ MTBJ + CBJ が資産管理を支配するか

| ドライバー | 効果 |
|---|---|
| NAV 計算 + CA 処理の規模の経済 | メガバンク内部管理よりも単一目的のユーティリティを有利にする |
| 専門カストディに対する GPIF の歴史的入札選好 | MTBJ + CBJ をデフォルトの勝者としてアンカー |
| メガバンク信託銀行のフロントオフィスマンデートで別個に運営する選好 | 資産管理ユーティリティを MTBJ + CBJ に残す |
| MTBJ + CBJ でのコスト回収プライシング | 他のエンティティが下回ることが困難 |
| 信託銀行ライセンス + JASDEC 参加 + 信託口名義人ロジック | 新規参入者を制限 |

## 4. 手数料・収益構造

| 年金層 | フロントオフィス手数料モデル(運用機関) | バックオフィス手数料モデル(資産管理機関) | 加入者側手数料モデル(運営管理機関) |
|---|---|---|---|
| iDeCo | DC と同じ | DC と同じ | 加入者・年あたりのオペレーター手数料(しばしば月数百円) |

各銀行ごとの詳細な手数料分析については [[banking/trust-bank-fee-structure-comparison|trust bank fee structure comparison]] を参照。

### 規制フレームワーク

| 法令／規制当局 | カバレッジ |
|---|---|
| 厚生年金保険法 + 国民年金法 | 公的年金、GPIF 設立根拠 |
| 独立行政法人通則法 + GPIF 個別法 | GPIF のガバナンスと運用フレームワーク |
| 確定給付企業年金法 | 企業 DB プラン |
| 確定拠出年金法 | 企業 DC + iDeCo |
| 信託業法 + 銀行法 | 年金信託受託のための信託銀行ライセンス |
| 金商法(投信受託／カストディ業務) | 投信受託会社／カストディ基準 |
| 厚生労働省 監督指針 | 年金プラン監督 |
| 金融庁 監督指針(信託業 + 信託銀行) | 信託銀行監督 |
| GPIF 投資原則／スチュワードシップ原則 | GPIF 固有のガバナンス／スチュワードシップ |
| 個人情報保護法 + 金融分野ガイドライン | 加入者データ保護 |

### 受託者責任の配分

| 当事者 | 受託者責任の範囲 |
|---|---|
| アセットマネージャー(運用機関) | 投資判断義務:ポートフォリオ構築、証券選択、議決権行使の意見 |
| 信託銀行(資産管理機関／受託金融機関) | 資産安全義務:保管、分別、正確なレコードキーピング、機械的な議決権行使の執行 |
| DC 運営管理機関 | 加入者口座の受託者責任:正確なレコードキーピング、公正なメニュー提供、引き出しコンプライアンス |
| プランスポンサー(企業 DB／DC) | プラン設計の受託者責任:プランルール、拠出水準、ガバナンス |

### 会計上の見方

| 項目 | 認識される場所 |
|---|---|
| 年金プラン信託資産 | 信託銀行にとってはオフバランス;年金プラン／GPIF にとってはオンバランス |
| 年金信託管理手数料 | 信託銀行の P&L における収益 |
| 年金プラン加入者残高(DC) | 運営管理機関の記録で保有;投信受取債権 + 現金で裏付け |
| 年金プランのファンディング(DB) | プラン／スポンサーで、信託銀行ではない |

## 6. JASDEC / クリアリングインフラ接続

```
┌──────────────────────────────────────────────────────────────────────┐
│ 年金プラン層                                                          │
│ - GPIF (~¥250兆)                                                      │
│ - 企業 DB (多数の plans)                                              │
│ - 企業 DC + iDeCo (多数の plans, member accounts)                     │
└────────────┬────────────────────────────────────────────────────────┬─┘
             │ mandate                                                 │ member admin (DC)
             ▼                                                         ▼
┌────────────────────────────────┐                          ┌─────────────────────────┐
│ 運用機関 (asset managers)        │                          │ DC 運営管理機関 (DC ops)  │
│ — JP-AMs + foreign-AMs           │                          │ — MUFG Trust DC,         │
│ — discretionary investment       │                          │   SMTB DC, Mizuho Trust  │
│   decision + voting opinion      │                          │   DC, Nomura, Daiwa,     │
└────────────┬───────────────────┘                          │   SMBC Nikko, NRK        │
             │ trade instruction                              └─────────────────────────┘
             ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 資産管理機関 / 受託金融機関 (trust banks)                              │
│ — MTBJ + CBJ (custody-only utility)                                   │
│ — MUFG Trust / SMTB / Mizuho Trust (full-service + admin)             │
│ — Norinchukin Trust (cooperative-finance)                             │
└─┬────────────┬────────────┬───────────────┬────────────────────────┬─┘
  │            │            │               │                        │
  ▼            ▼            ▼               ▼                        ▼
┌───────────┐┌─────────────┐┌──────────────┐┌──────────────────────┐┌─────────────────┐
│ JASDEC    ││ JSCC        ││ BoJ JGB      ││ Global custodians    │ │ ICJ / proxy plat│
│ (equities,││ (CCP for    ││ book-entry   ││ (BNY / State Street /│ │ (voting exec.)  │
│ corp bonds││ cash equity)││ (JGB         ││ JPM / Citi for       │ │                 │
│ CP, 投信) ││             ││ settlement)  ││ foreign-asset legs)  │ │                 │
└───────────┘└─────────────┘└──────────────┘└──────────────────────┘└─────────────────┘
```

### 年金マンデートの外国資産レグ

年金マンデートに外国株式／債券／オルタナティブが含まれる場合:

```
Pension plan
  → 運用機関 (asset manager)
    → 資産管理機関 (MTBJ / CBJ / megabank trust bank)
      → Foreign sub-custodian (BNY / State Street / JPM / Citi Japan)
        → Local sub-custodian in foreign market
          → Local CSD or ICSD
```

## 関連項目

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[banking/jasdec-settlement-operations]]
- [[banking/japan-banking-license-tier-comparison-matrix]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/smbc-trust-bank]]
- [[trust-banks/nochu-trust-bank]]
- [[life-insurers/nippon-life]]
- [[life-insurers/dai-ichi-life]]
- [[life-insurers/meiji-yasuda]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## 出典

- GPIF:公式サイト、運用形態ページ、英語サマリー。
- 厚生労働省:企業年金政策ページ。
- Master Trust Bank of Japan:公式サイト。
- Custody Bank of Japan:公式サイト。
- Trust Companies Association of Japan:信託銀行の説明、信託資産統計。
- 企業年金連合会(Pension Fund Association):企業年金データ。
- 投資信託協会:投資信託統計。
- FSA:信託業金融機関リスト。
- 信託協会・生命保険協会・JA共済連「企業年金（確定給付型）の受託概況（令和5年3月末現在）」(DB 資産残高 66兆238億円 / DB+厚生年金基金 合計 80兆5,006億円): https://www.shintaku-kyokai.or.jp/archives/013/202305/NR20230530-1.pdf
- 運営管理機関連絡協議会「確定拠出年金統計資料（2024年3月末）」(企業型DC 22兆7,880億円 / iDeCo 6兆1,883億円): https://www.ideco-koushiki.jp/library/pdf/statistics_202403.pdf
