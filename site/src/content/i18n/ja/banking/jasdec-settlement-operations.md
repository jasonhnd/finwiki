---
source: banking/jasdec-settlement-operations
source_hash: ca7e958cea3103af
lang: ja
status: machine
fidelity: ok
title: "JASDEC 決済業務"
translated_at: 2026-06-18T23:33:48.338Z
---

# JASDEC 決済業務

## ウィキ上の位置づけ

本エントリは [[banking/INDEX|banking index]] の配下に位置し、信託銀行のカストディ業務モデルにとって直接的に重要となる、決済インフラのディープダイブである。市場インフラ側については [[securities/japan-securities-depository-center|JASDEC entity page]] と [[securities/japan-securities-clearing-corp|JSCC 清算 corp]] と併せて読むこと; 信託銀行のルーティングについては [[banking/master-trust-bank-operating-model|Master Trust Bank operating model]]、[[banking/custody-bank-operating-model|カストディ銀行 operating model]]、[[banking/japan-master-trust-and-custody-bank-landscape|Japan master trust and カストディ銀行 landscape]]、[[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] と; マクロな決済プラミングの視点については [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] と; 機関投資家の接続ポイントについては [[trust-banks/master-trust-bank|MTBJ]] と [[trust-banks/custody-bank|CBJ]] と併せて参照すること。TSE / OSE / JSCC 統合のコンテキストについては [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] と [[securities/osaka-exchange|Osaka Exchange]] を参照のこと。

## TL;DR

JASDEC（証券保管振替機構 / ほふり — Japan Securities Depository Center, Inc.）は、日本国債以外のすべての無券面化証券を対象とする、日本の中央証券保管機関である。振替制度（book-entry transfer）レジームのもとで FSA ＋ 法務省により指定されている。株式、社債、CP、投資信託の四つの主要な振替制度を運営し、加えて DVP 決済、決済前マッチング、コーポレートアクションの配分、そして子会社 JDCC（JASDEC DVP 清算 Corporation）を通じた外国株式のカストディ支援を行う。信託銀行（MTBJ、CBJ、メガバンク信託部門）、証券会社、グローバルカストディアンは、参加者として JASDEC に直接接続する。決済モデルはエクイティ側で JSCC の CCP 機能と、資金側で日銀資金とかみ合い、DVP-X1 / DVP-X2 / DVP-X3 品質のレジームを生み出す。日本のカストディ分析において JASDEC はレール（軌道）であり、信託銀行はその上を走るビークルである。

## 1. 機関位置

| 項目 | JASDEC |
|---|---|
| Legal name (JA) | 株式会社証券保管振替機構 |
| Legal name (EN) | Japan Securities Depository Center, Inc. |
| Common short name | ほふり (hofuri) |
| Founded | 2002-01-04 (株式会社化); JASDEC predecessor existed earlier as a 公的法人 |
| Capital | ~¥4.25 billion |
| Designation | FSA + Ministry of Justice-designated 振替機関 (book-entry transfer institution) |
| Primary subsidiary | **JDCC** (JASDEC DVP 清算 Corporation) for DVP cash-equity 清算 |
| Functional position | Central securities depository (CSD) for all dematerialized JP securities other than JGB |
| HQ | Tokyo (株式会社証券保管振替機構) |
| Industry body / counterpart | JSCC (清算 CCP), BoJ (cash leg), TSE / OSE (trading venues) |

### JASDEC でないもの

| Common confusion | Correction |
|---|---|
| 「JASDEC がトレードをクリアする」 | 違う — JASDEC は振替と決済を運営する; 中央カウンターパーティのクリアリングは JSCC である。 |
| 「JASDEC が JGB を決済する」 | 違う — JGB 決済は日銀 JGB 振替制度経由である。 |
| 「JASDEC は投資家／カストディアンである」 | 違う — JASDEC はインフラである。カストディアンは信託銀行とグローバルカストディアンであり、JASDEC は彼らが乗るレールである。 |
| 「JASDEC がすべての外国株式を扱う」 | 部分的 — JASDEC は外国株券のオペレーションを支援する; クロスボーダーの ICSD 接続性は Euroclear / Clearstream 経由でサブカストディの取り決めを伴う。 |

### 参加者の類型

| Participant type | Examples |
|---|---|
| 信託銀行 (カストディ専業) | [[trust-banks/master-trust-bank|MTBJ]], [[trust-banks/custody-bank|CBJ]] |
| 信託銀行 (full-service) | [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], [[trust-banks/mizuho-trust-bank|Mizuho Trust]], [[trust-banks/nochu-trust-bank|Norinchukin Trust]] |
| Securities firms | Nomura, Daiwa, SMBC Nikko, Mizuho Securities, regional brokers |
| Global custodians (Japan unit) | [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]], [[foreign-financial-institutions/state-street-japan|State Street Japan]], [[foreign-financial-institutions/jpmorgan-japan|JP Morgan Japan]], [[foreign-financial-institutions/citigroup-japan|Citi Japan]] |
| Banks (general カストディ / 名義書換) | Megabanks, regional banks (limited カストディ mandate) |
| ICSD / cross-border infrastructure | [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Japan]], [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Japan]] (link routes) |

### 振替制度

| System | Asset class | Year started | Key flow |
|---|---|---|---|
| 株式振替制度 | Dematerialized listed equity | 2009-01 (paper-share abolition) | Trade match → JSCC CCP → JASDEC book-entry transfer → custodian account |
| 一般債振替制度 | Corporate bonds (普通社債, 転換社債), 地方債, 政府保証債, 財投機関債 | Phased from 2006 | OTC trade → JASDEC book-entry transfer |
| 短期社債振替制度 (CP) | Commercial paper | 2003-03 | Issuance + secondary transfer via JASDEC |
| 投資信託振替制度 | Publicly offered 投信 units | 2007-01 | Subscription / redemption / transfer of 投信受益権 |

### DVP および付随サービス

| Service | Function |
|---|---|
| **DVP 決済** | 同時の引渡し（JASDEC 振替経由の証券）＋ 支払い（BoJ-net または 全銀ネット経由の資金）— 決済リスクの非対称性を排除する |
| **Pre-決済 matching** | DVP 決済前のトレードマッチングサービス; 機関投資家のクロストレードおよびブローカー-カストディインターフェースをカバー |
| **Corporate actions** | 配当、利息、償還代り金の配分; ライツオファリング; 株式分割; 合併; TOB の決済 |
| **発行会社 services** | 基準日における株主特定のための発行体インターフェース; AGM ／配当目的での発行体への実質株主リストの提供 |
| **Foreign stock certificates** | 日本で発行された、または日本の投資家が保有する外国証券のカストディ支援サービス |
| **Tax / withholding ops** | 配当／利息に対する源泉徴収税処理; カストディチェーンを通じた外国人投資家の租税条約還付支援 |
| **JDCC DVP 清算** | JASDEC DVP 清算 Corporation — JDCC は、JSCC でクリアされない現金株式 DVP について資金側のネッティングを処理する |

### 機能類型の内訳

| Function | Who initiates | Who settles | Where the cash leg sits |
|---|---|---|---|
| Listed-equity exchange trade | Investor → broker → TSE/OSE | JSCC CCP → JASDEC book-entry transfer → custodian account | BoJ-net funds via JSCC participants |
| Listed-equity OTC trade | Investor → broker → counterparty broker | JASDEC + JDCC | BoJ-net or 全銀ネット |
| Corporate bond OTC trade | Investor → broker → counterparty broker | JASDEC 一般債振替 | BoJ-net (large lot) or 全銀ネット |
| Commercial paper | 発行会社 → dealer → investor | JASDEC 短期社債振替 | BoJ-net |
| 投信 unit transfer | Distributor → 投信協会 ops → fund | JASDEC 投信振替 | Cash 決済 per distributor channel |
| 投信 receipt / NAV-based 決済 | Trust bank / asset manager | JASDEC + trust-bank books | 決済-account residual |

## 3. 競合構造

JASDEC は単一 CSD の国家インフラであり — それがカバーするアセットクラスについて国内の代替手段は存在しない。したがって「競争」のマップは次の点に関するものとなる。

| Comparison axis | JASDEC | Alternative / overlapping |
|---|---|---|
| エクイティ／社債／CP／投信の無券面化決済 | **唯一の国内選択肢** | なし — JASDEC は振替制度のもとで指定された振替機関である |
| JGB 決済 | 該当なし | **日銀 JGB 振替制度**が代替手段である（別個のインフラ） |
| 現金株式の CCP クリアリング | 該当なし | JASDEC の上位レイヤーとして中央カウンターパーティの **JSCC** |
| クロスボーダー／ICSD 決済 | 双方向リンク + グローバルカストディアン経由でリルート | ICSD レイヤーとしての **Euroclear** + **Clearstream**（日本のサブカストディアンを伴う） |

### インフラ間の相互作用

| Layer | JASDEC role | Counterpart |
|---|---|---|
| 取引会場 | マッチ済みのトレードデータを受領 | TSE, OSE, ODX, PTS |
| クリアリング CCP | ノベーション確認済みの債務データを受領 | JSCC |
| 資金決済 | BoJ-net または 全銀ネット経由の資金側 | BoJ, 全銀ネット, Zengin EDI |
| 発行体インターフェース | 実質株主リスト、基準日スナップショット | 発行体（上場会社）経由株式事務代行銀行 |
| 外国リンク | インバウンドの外国サブカストディチェーン; アウトバウンドの ICSD 向け日本証券 | グローバルカストディアン、Euroclear、Clearstream |

## 4. 手数料・収益構造

JASDEC は市場価格ではなく規制料率を伴うユーティリティ価格設定のインフラとして運営される。

| Revenue line | Pricing basis | Public visibility |
|---|---|---|
| Participation fee (固定) | 参加者ごとの年間 | 手数料スケジュールで開示（JASDEC 公開） |
| Per-transaction 決済 fee | 振替ごと | 手数料スケジュールで開示 |
| 発行会社 service fee | 発行体ごと、CA イベントごと、基準日スナップショットごと | 手数料スケジュールで開示 |
| DVP service fee | DVP 取引ごと | 手数料スケジュールで開示 |
| 投信振替 fee | 投信単位の振替／設定／解約ごと | 手数料スケジュールで開示 |
| JDCC 清算 fee | 現金株式 DVP の資金ネッティング手数料 | JDCC 手数料スケジュールで開示 |

### 規制上の指定

| Designation | 出典 | Implication |
|---|---|---|
| 振替機関 (book-entry transfer institution) | 社債、株式等の振替に関する法律 (振替法) — FSA + 法務省により指定 | 上場エクイティ、社債、CP、投信について無券面化振替を運営する唯一の法的権限 |
| FMI (Financial Market Infrastructure) | FSA / BoJ 共同オーバーサイトを通じた BIS-IOSCO PFMI 基準 | PFMI 原則（デフォルトリスク、オペレーショナルリスク、決済ファイナリティ基準）を満たさなければならない |
| FSA supervisory authority | 金商法 + 振替法 + 内閣府令 | 立入検査、ガバナンス、IT リスク監督 |
| BoJ oversight | BoJ 決済システムオーバーサイト枠組み | BoJ-net への DVP リンクに鑑みた共同オーバーサイト |

### 決済ファイナリティ振替制度のもとでの決済は、振替が完了した時点で**法的に確定**する — 通常のオペレーションのもとではクローバック（巻き戻し）は存在しない。これが、DVP-X1 / X2 / X3 決済が機関投資家グレードとして扱われる構造的な理由である。

### DVP-X1 / X2 / X3 品質の分類

| Quality tier | Description |
|---|---|
| DVP-X1 | 決済前マッチング + JSCC でクリアされた現金株式; 資金ネッティングを伴う完全な DVP |
| DVP-X2 | JDCC 資金ネッティング経由の OTC 現金株式 DVP |
| DVP-X3 | JASDEC + 全銀資金側経由の債券／投信 DVP |

### 信託銀行参加者の会計処理

| Item | Treatment |
|---|---|
| 顧客に代わって JASDEC 振替で保有される証券 | 信託銀行ではオフバランスシート; 受益者ではオンバランス |
| カストディアンにおける現金決済口座の残余 | オンバランス（小規模） |
| JASDEC への決済手数料費用 | カストディアンの P&L における営業費用ライン |
| 上流顧客からのカストディ手数料収益 | カストディアンの P&L における営業収益 |

## 6. JASDEC / クリアリングインフラ接続

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

MTBJ と CBJ はそれぞれ JASDEC 参加者口座を直接保有する。原資産の資産保有者マンデートに代わって保有するその振替ポジションが、発行体の株主名簿に現れる「信託口」名義人パターンを生み出す。JASDEC の実質株主開示サービスは、発行体に基準日における定期的なルックスルーを提供するために存在するが、公開の大株主リストには依然として「信託口」名が記録上の保有者として表示される。

### クロスボーダー／ICSD リンク外国人投資家が保有する日本発行証券のクロスボーダー決済については、チェーンは以下のとおりである。

```
Foreign investor
  → Global custodian (BNY / State Street / JPM / Citi)
    → Japan sub-custodian (trust bank — often MTBJ / CBJ / megabank trust arm)
      → JASDEC book-entry account
```

日本の投資家が保有する外国発行証券については、逆のチェーンが使われる。

```
JP investor
  → JP custodian (trust bank)
    → JP sub-custody via global custodian
      → ICSD (Euroclear / Clearstream) or local CSD
```

### トークン化証券に関する未解決の問題

[[payment-firms/progmat|Progmat]] や同様のプラットフォーム経由で発行されるトークン化された信託受益権証券は、並行する DLT 台帳上で稼働する。それらと JASDEC 振替レールとの統合は依然として設計中である。

| Design option | Trade-off |
|---|---|
| ST を並行台帳のみで発行 | JASDEC の決済ファイナリティ保護を失う; ST プラットフォームのファイナリティルールに依存する |
| ST を JASDEC 振替にミラーリング | インフラコストが二重になる; ミラーエントリの法的地位が不明確 |
| ST を参照により JASDEC にアンカー | ハイブリッド; 振替法のもとでの法的地位の明確化が必要 |

この面での JASDEC の進化は、信託銀行が従来の証券カストディと同じように機関投資家グレードの ST カストディを容易に提供できるかどうかを実質的に左右する。

## Related

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

## Sources

- JASDEC: official site (Japanese + English), system pages, company outline.
- JSCC: clearing CCP pages and DVP cash-equity materials.
- BoJ: JGB book-entry settlement system materials.
- FSA: 振替法 supervisory page and trust-business financial institution list.
- Trust Companies Association of Japan: trust-bank participant information.
- Wikipedia (cross-reference): JASDEC entries and ほふり history.
