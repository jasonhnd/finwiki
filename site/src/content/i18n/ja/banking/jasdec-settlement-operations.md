---
source: banking/jasdec-settlement-operations
source_hash: a756047ead15dc4b
lang: ja
status: machine
fidelity: ok
title: "JASDEC の決済業務"
translated_at: 2026-06-02T11:47:37.257Z
---

# JASDEC の決済業務

## ウィキ上の位置づけ

本エントリは [[banking/INDEX|banking index]] の配下に位置し、信託銀行のカストディ運営モデルにとって直接的に load-bearing な決済インフラの詳細解説である。市場インフラ側として [[securities/japan-securities-depository-center|JASDEC entity page]] および [[securities/japan-securities-clearing-corp|JSCC clearing corp]] と;信託銀行のルーティングとして [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|Custody Bank operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and custody bank landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] と;マクロの配管の視点として [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] と;機関の接続点として [[trust-banks/master-trust-bank|MTBJ]] および [[trust-banks/custody-bank|CBJ]] と併せて読むこと。TSE / OSE / JSCC 統合の文脈については [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] および [[securities/osaka-exchange|Osaka Exchange]] 参照。

## 要約

JASDEC(証券保管振替機構 / ほふり — Japan Securities Depository Center, Inc.)は、日本国債以外のすべての無券面化された証券について日本の中央証券保管振替機関である。振替制度(book-entry transfer)の体制のもとで FSA + 法務省 によって指定されている。株式、社債、CP、投資信託の4つの主要な振替システムを運営し、加えて DVP 決済、決済前照合、コーポレートアクションの配信、そして子会社 JDCC(JASDEC DVP Clearing Corporation)を通じた外国株式のカストディ支援を行う。信託銀行(MTBJ、CBJ、メガバンクの信託部門)、証券会社、グローバルカストディアンが参加者として JASDEC に直接接続する。決済モデルは、株式側で JSCC の CCP 機能と、現金側で BoJ 資金とかみ合い、DVP-X1 / DVP-X2 / DVP-X3 の品質体制を生み出す。日本のカストディ分析にとって、JASDEC はレールであり、信託銀行はそのレール上の乗り物である。

## 1. 機関位置

| 項目 | JASDEC |
|---|---|
| 法的名称(JA) | 株式会社証券保管振替機構 |
| 法的名称(EN) | Japan Securities Depository Center, Inc. |
| 一般的な略称 | ほふり (hofuri) |
| 設立 | 2002-01-04 (株式会社化);JASDEC の前身はそれ以前に 公的法人 として存在 |
| 資本金 | 約 ¥4.25 億 |
| 指定 | FSA + 法務省 指定の 振替機関 (book-entry transfer institution) |
| 主要子会社 | **JDCC** (JASDEC DVP Clearing Corporation) DVP 現物株クリアリング向け |
| 機能上の位置 | JGB 以外のすべての無券面化された JP 証券の中央証券保管振替機関(CSD) |
| 本社 | 東京 (株式会社証券保管振替機構) |
| 業界団体 / 対応相手 | JSCC(クリアリング CCP)、BoJ(現金レグ)、TSE / OSE(取引場) |

### JASDEC でないもの

| よくある誤解 | 訂正 |
|---|---|
| 「JASDEC は取引をクリアする」 | いいえ — JASDEC は振替と決済を運営する;中央清算機関のクリアリングは JSCC である。 |
| 「JASDEC は JGB を決済する」 | いいえ — JGB の決済は BoJ の JGB 振替システムを通じて行われる。 |
| 「JASDEC は投資家 / カストディアンである」 | いいえ — JASDEC はインフラである。カストディアンは信託銀行とグローバルカストディアンであり、JASDEC はそれらが乗るレールである。 |
| 「JASDEC はすべての外国株式を取り扱う」 | 部分的に — JASDEC は外国株券のオペレーションを支援する;クロスボーダーの ICSD 接続は サブカストディ取極を伴う Euroclear / Clearstream 経由である。 |

### 参加者の種類

| 参加者の種類 | 例 |
|---|---|
| 信託銀行(カストディ専業) | [[trust-banks/master-trust-bank|MTBJ]], [[trust-banks/custody-bank|CBJ]] |
| 信託銀行(フルサービス) | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]], [[trust-banks/nochu-trust-bank|Norinchukin Trust]] |
| 証券会社 | Nomura, Daiwa, SMBC Nikko, Mizuho Securities, 地域ブローカー |
| グローバルカストディアン(日本ユニット) | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]], [[foreign-financial-institutions/citigroup-japan|Citi Japan]] |
| 銀行(一般カストディ / 名義書換) | メガバンク、地方銀行(限定的なカストディ委託) |
| ICSD / クロスボーダーインフラ | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Japan]] (リンク経路) |

### 振替システム

| システム | 資産クラス | 開始年 | 主要なフロー |
|---|---|---|---|
| 株式振替制度 | 無券面化された上場株式 | 2009-01 (紙の株券廃止) | 取引照合 → JSCC CCP → JASDEC 振替 → カストディアン口座 |
| 一般債振替制度 | 社債(普通社債, 転換社債), 地方債, 政府保証債, 財投機関債 | 2006 から段階的| OTC 取引 → JASDEC 振替 |
| 短期社債振替制度 (CP) | コマーシャルペーパー | 2003-03 | JASDEC 経由の発行 + セカンダリー振替 |
| 投資信託振替制度 | 公募 投信 ユニット | 2007-01 | 投信 受益権 の設定 / 解約 / 振替 |

### DVP および付随サービス

| サービス | 機能 |
|---|---|
| **DVP 決済** | 同時の引渡し(JASDEC 振替経由の証券)+ 支払い(BoJ-net または 全銀ネット 経由の資金) — 決済リスクの非対称性を排除 |
| **決済前照合** | DVP 決済前の取引照合サービス;機関投資家のクロス取引とブローカー・カストディのインタフェースをカバー |
| **コーポレートアクション** | 配当、利息、償還金の配信;ライツオファリング;分割;合併;公開買付の決済 |
| **発行者サービス** | 基準日における株主特定のための発行者インタフェース;AGM / 配当目的の実質株主リストの発行者への提供 |
| **外国株券** | 日本で発行された、または日本の投資家が保有する外国証券のカストディ支援サービス |
| **税 / 源泉徴収オペレーション** | 配当 / 利息の源泉徴収税処理;カストディアンチェーンを通じた外国投資家の租税条約還付支援 |
| **JDCC DVP クリアリング** | JASDEC DVP Clearing Corporation — JDCC は非 JSCC クリアの現物株 DVP の現金レグの資金ネッティングを取り扱う |

### 機能タイプ別の内訳

| 機能 | 誰が起動するか | 誰が決済するか | 現金レグはどこにあるか |
|---|---|---|---|
| 上場株式の取引所取引 | 投資家 → ブローカー → TSE/OSE | JSCC CCP → JASDEC 振替 → カストディアン口座 | JSCC 参加者経由の BoJ-net 資金 |
| 上場株式の OTC 取引 | 投資家 → ブローカー → 相手方ブローカー | JASDEC + JDCC | BoJ-net または 全銀ネット |
| 社債の OTC 取引 | 投資家 → ブローカー → 相手方ブローカー | JASDEC 一般債振替 | BoJ-net(大口)または 全銀ネット |
| コマーシャルペーパー | 発行者 → ディーラー → 投資家 | JASDEC 短期社債振替 | BoJ-net |
| 投信 ユニット振替 | 販売会社 → 投信協会 オペレーション → ファンド | JASDEC 投信振替 | 販売会社チャネルごとの現金決済 |
| 投信 受益 / NAV ベース決済 | 信託銀行 / 資産運用会社 | JASDEC + 信託銀行の帳簿 | 決済口座の残余 |

## 3. 競合構造

JASDEC は単一 CSD の国家インフラである — それがカバーする資産クラスについて国内の代替はない。したがって「競合」マップは以下に関するものである:

| 比較軸 | JASDEC | 代替 / 重複 |
|---|---|---|
| 株式 / 社債 / CP / 投信 の無券面化決済 | **唯一の国内オプション** | なし — JASDEC は 振替制度 のもとで指定された 振替機関 |
| JGB の決済 | 該当せず | **BoJ JGB 振替システム** が代替(別個のインフラ) |
| 現物株の CCP クリアリング | 該当せず | JASDEC の上の中央清算機関の層としての **JSCC** |
| クロスボーダー / ICSD 決済 | 二者間リンク + グローバルカストディアン経由で再ルーティング | ICSD 層としての **Euroclear** + **Clearstream**(日本のサブカストディアンを伴う) |

### インフラ間の相互作用

| 層 | JASDEC の役割 | 対応相手 |
|---|---|---|
| 取引場 | 照合済みの取引データを受領 | TSE, OSE, ODX, PTS |
| クリアリング CCP | 更改確認済みの債務データを受領 | JSCC |
| 資金決済 | BoJ-net または 全銀ネット 経由の現金レグ | BoJ, 全銀ネット, Zengin EDI |
| 発行者インタフェース | 実質株主リスト、基準日スナップショット | 株式事務代行銀行 を通じた発行者(上場会社) |
| 外国リンク | インバウンドの外国サブカストディチェーン;アウトバウンドの JP 証券から ICSD へ | グローバルカストディアン, Euroclear, Clearstream |

## 4. 手数料・収益構造

JASDEC は市場価格ではなく規制料率を用いるユーティリティ価格のインフラとして運営される。

| 収益項目 | 価格設定の基準 | 公開状況 |
|---|---|---|
| 参加料(固定) | 参加者当たり年額 | 料金表で開示(JASDEC 公開) |
| 取引当たり決済手数料 | 振替当たり | 料金表で開示 |
| 発行者サービス手数料 | 発行者当たり、CA イベント当たり、基準日スナップショット当たり | 料金表で開示 |
| DVP サービス手数料 | DVP 取引当たり | 料金表で開示 |
| 投信 振替 手数料 | 投信 ユニットの振替 / 設定 / 解約 当たり | 料金表で開示 |
| JDCC クリアリング手数料 | 現物株 DVP の資金ネッティング手数料 | JDCC 料金表で開示 |

### 規制上の指定

| 指定 | 出所 | 含意 |
|---|---|---|
| 振替機関 (book-entry transfer institution) | 社債、株式等の振替に関する法律 (振替法) — FSA + 法務省 が指定 | 上場株式、社債、CP、投信 の無券面化振替を運営する唯一の法的権限 |
| FMI (Financial Market Infrastructure) | FSA / BoJ の共同オーバーサイトを通じた BIS-IOSCO PFMI 基準 | PFMI 原則(デフォルトリスク、オペレーショナルリスク、決済ファイナリティの基準)を満たさねばならない |
| FSA 監督権限 | 金商法 + 振替法 + 内閣府令 | オンサイト検査、ガバナンス、IT リスク監督 |
| BoJ オーバーサイト | BoJ 決済システムオーバーサイト枠組み | BoJ-net への DVP リンクを踏まえた共同オーバーサイト |

### 決済ファイナリティ

振替制度 のもとでの決済は、振替が完了すると **法的に最終的** である — 通常の運営のもとでクローバックはない。これが DVP-X1 / X2 / X3 決済が機関グレードとして扱われる構造的な理由である。

### DVP-X1 / X2 / X3 の品質分類

| 品質階層 | 説明 |
|---|---|
| DVP-X1 | 決済前照合 + JSCC クリアの現物株;資金ネッティングを伴うフル DVP |
| DVP-X2 | JDCC 資金ネッティング経由の OTC 現物株 DVP |
| DVP-X3 | JASDEC + 全銀 現金レグ経由の 社債 / 投信 DVP |

### 信託銀行参加者の会計処理

| 項目 | 処理 |
|---|---|
| 顧客を代理して JASDEC の振替で保有される証券 | 信託銀行にとってオフバランスシート;実質保有者にとってオンバランス |
| カストディアンの決済口座の現金残余 | オンバランス(小額) |
| JASDEC への決済手数料費用 | カストディアンの P&L の営業費用ライン |
| 上流の顧客からのカストディ手数料収益 | カストディアンの P&L の営業収益 |

## 6. JASDEC / クリアリングインフラの接続

```
        ┌─────────────────────────────┐
        │  Trading venues             │
        │  TSE / OSE / ODX / PTS      │
        └─────────────┬───────────────┘
                      │ matched trade
                      ▼
        ┌─────────────────────────────┐
        │  JSCC                       │
        │  (central counterparty for  │
        │  cash equity + repo + JGB   │
        │  OTC derivatives)           │
        └─────────────┬───────────────┘
                      │ novated obligation
                      ▼
        ┌─────────────────────────────┐
        │  JASDEC                     │
        │  - 株式振替                  │
        │  - 一般債振替                │
        │  - 短期社債振替              │
        │  - 投信振替                  │
        │  - JDCC DVP cash-leg netting │
        └─┬──────────────────────┬────┘
          │ book-entry transfer  │ cash leg
          ▼                      ▼
        ┌────────────────────────────────┐    ┌──────────────────────┐
        │  Trust banks / custodians      │    │  BoJ-net / 全銀ネット │
        │  - MTBJ, CBJ (custody-only)    │    │  funds settlement    │
        │  - MUFG Trust, SMTB, Mizuho    │    └──────────────────────┘
        │    Trust (full-service)        │
        │  - BNY, State Street, JPM,     │
        │    Citi (global custodians)    │
        │  - Securities firms            │
        └────────────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │  Beneficial owners          │
        │  GPIF, pensions, 投信,       │
        │  insurers, retail investors │
        └─────────────────────────────┘
```

### 信託銀行参加者の相互作用モデル

MTBJ と CBJ はそれぞれ直接の JASDEC 参加者口座を維持する。基底の資産所有者の委託を代理した彼らの振替ポジションは、発行者の株主名簿上に見える「信託口」の名義パターンを生み出す。JASDEC の実質株主開示サービスは、基準日において発行者に定期的なルックスルーを与えるために存在するが、公開のトップ株主リストはなお記録上の保有者として「信託口」の名称を表示する。

### クロスボーダー / ICSD リンク

外国投資家が保有する JP 発行証券のクロスボーダー決済について、チェーンは:

```
Foreign investor
  → Global custodian (BNY / State Street / JPM / Citi)
    → Japan sub-custodian (trust bank — often MTBJ / CBJ / megabank trust arm)
      → JASDEC book-entry account
```

外国発行証券の JP 投資家の保有について、逆のチェーンが用いられる:

```
JP investor
  → JP custodian (trust bank)
    → JP sub-custody via global custodian
      → ICSD (Euroclear / Clearstream) or local CSD
```

### トークン化証券の未解決の問い

[[payment-firms/progmat|Progmat]] および類似のプラットフォームを通じて発行されるトークン化された 信託受益権 証券は、並行的な DLT 台帳上で動く。それらと JASDEC の振替レールとの統合はなお設計中である:

| 設計オプション | トレードオフ |
|---|---|
| ST を並行台帳のみで発行 | JASDEC の決済ファイナリティ保護を失う;ST プラットフォームのファイナリティルールに依拠する |
| ST を JASDEC の振替にミラーリング | インフラコストが倍増する;ミラーエントリの法的地位が不明確 |
| ST を参照により JASDEC にアンカー | ハイブリッド;振替法 のもとでの法的地位の明確化が必要 |

この点における JASDEC の進化は、信託銀行が従来型の証券カストディと同じくらい容易に機関グレードの ST カストディを提供できるかどうかを、実質的に左右する。

## 関連項目

- [[banking/INDEX]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/custody-bank-operating-model]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/japan-trust-bank-vs-global-custodian-comparison-matrix]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/trust-bank-fee-structure-comparison]]
- [[securities/japan-securities-depository-center]]
- [[securities/japan-securities-clearing-corp]]
- [[securities/japan-market-infrastructure-map]]
- [[securities/tokyo-stock-exchange]]
- [[securities/osaka-exchange]]
- [[securities/osaka-digital-exchange]]
- [[securities/japan-security-token-secondary-market-route]]
- [[trust-banks/master-trust-bank]]
- [[trust-banks/custody-bank]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[foreign-financial-institutions/bny-mellon-japan]]
- [[foreign-financial-institutions/state-street-japan]]
- [[foreign-financial-institutions/jpmorgan-japan]]
- [[foreign-financial-institutions/citigroup-japan]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[payment-firms/progmat]]
- [[finance/japan-listed-financial-groups-investable-universe]]

## 出典

- JASDEC: 公式サイト(日本語 + 英語)、システムページ、会社概要。
- JSCC: クリアリング CCP ページと現物株 DVP 資料。
- BoJ: JGB 振替決済システム資料。
- FSA: 振替法 監督ページと信託業金融機関リスト。
- Trust Companies Association of Japan: 信託銀行参加者情報。
- Wikipedia(クロスリファレンス): JASDEC のエントリと ほふり の沿革。
