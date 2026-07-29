---
title: 日本 stablecoin 発行体 規制分類マトリクス — 電子決済手段等取引業 / 信託型 / 銀行発行型 / 資金移動業者型 / 前払式支払手段境界
aliases:
  - Japan stablecoin issuer regulatory classification matrix
  - 日本ステーブルコイン発行体マトリクス
  - JP stablecoin issuer license matrix
  - EPI issuer classification Japan
  - 改正資金決済法 SC 三型比較
  - Japan stablecoin EPI license map
  - JPYC Progmat DCJPY comparison matrix
  - JPSC license classification grid
domain: exchanges
created: 2026-05-25
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2027-01-29
confidence: likely
tags:
  - exchanges
  - matrix
  - stablecoin
  - epi
  - jp-stablecoin
  - benchmark
  - regulatory-classification
status: active
sources:
  - https://www.fsa.go.jp/policy/virtual_currency02/
  - https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
  - https://jvcea.or.jp/member/
  - https://progmat.co.jp/news/
  - https://www.decurret-dcp.com/pressrelease/
  - https://jpyc.co.jp/about
  - https://www.sbivc.co.jp/usdc
---

# 日本 stablecoin 発行体 規制分類マトリクス — 電子決済手段等取引業 / 信託型 / 銀行発行型 / 資金移動業者型 / 前払式支払手段境界

## TL;DR

日本の円建て・USD 建て stablecoin は、発行体、法的主体および提供機能に応じて資金移動業者型、信託型、銀行預金トークン、電子決済手段等取引業者による仲介、前払式支払手段との境界に分けて確認する。本表は [[exchanges/jp-exchange-jpyc|JPYC]]、[[fintech/jp-stablecoin-progmat|Progmat]] 関連案件、[[fintech/jp-stablecoin-dcjpy|DCJPY]]、みんなの銀行、[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] の公開情報を検証入口として扱い、未公表の参入候補や発行コミットを推定しない。

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **発行体軸 (issuer-axis)** counterpart to [[fintech/INDEX|fintech index]] policy entries [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]] / [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]] / [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] / [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架构]] / [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]. Read alongside [[fintech/japan-ecisb-license|日本 ECISB 牌照]] for the 仲介業者 boundary and [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] for the legacy 前払式支払手段 境界. Operator anchors live in [[payment-firms/jpyc|JapanFG jpyc]] / [[payment-firms/progmat|JapanFG progmat]] and [[financial-licenses/payment-license-stack|payment license stack]].

## Why this matrix matters

- 2023-06 施行の改正資金決済法と関連当局資料を制度の基準点とし、各商品の発行・商用稼働状況は当事者の現行公式発表で確認する。
- **発行体カテゴリの違いは技術選定ではなく営業範囲・流通上限・カウンターパーティ・分別管理方式を法的に拘束する**。例えば 資金移動業者型は 1 回 100 万円上限が法定、信託型はその制約がない代わりに信託受託銀行の信託業法義務が発動する。
- 海外電子決済手段の国内取扱は、FSA の電子決済手段等取引業者一覧、取扱商品、契約主体および分別管理条件で確認する。「唯一の合法ルート」とは断定しない。
- 破綻時の扱いは商品構造、法的主体、信託契約、履行保証および預金保険の適用条件で異なる。固定回収率や完全保全を一般化せず、契約・法令で確認する。

## Per-issuer / per-classification sections

### A. 資金移動業者型 (EPI 第 2 種) — JPYC

- **発行体**: [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] (2019-11 設立、関東財務局 第00099号 資金移動業者)
- **取得ライセンス**: **資金移動業者** (資金決済法 第 37 条) + 前払式支払手段 (第三者型) 第00773号 (JPYC v1 legacy 用、現在は v2 が主流)
- **JVCEA 区分**: 第一種会員 #1042 — 登録区分「資金移動業 (Funds transfer)」のみ。暗号資産交換業・デリバ・電子決済手段等取引業の JVCEA 区分は付与なし
- **対象トークン**: JPYC (1 JPYC = 1 円 ペッグ、Ethereum / Polygon / Avalanche / Gnosis Chain 等マルチチェーン)
- **1:1 償還性**: 1 円ペッグ + 1 回 100 万円換金上限 (2026-05 改訂)
- **裏付資産**: 履行保証金の方式と必要額は資金決済法、当局資料および発行者の現行開示で確認する
- **決済 finality**: chain ごとの確認条件と JPYC EX 内の完了条件は現行仕様で確認する
- **FSA/JVCEA 監督**: FSA 関東財務局 + JVCEA (資金移動業区分)
- **二次市場**: JPYC EX (公式) + Uniswap 等 DEX + メタプラネット / 住友生命系 リテール拠点
- **クロスボーダー**: 国内利用前提、海外向け勧誘なし
- **流通実績** (2025-12): 累計口座 1 万件・累計発行額 5 億円
- **戦略パートナー**: アステリア (3853 東証グロース) シリーズ B リード、メタプラネット (3350) ・ 住友生命

### B. 信託型 (特定信託受益権 / EPI 第 3 種) — Progmat 上で発行する三大信託銀行 + DMM

- **プラットフォーム提供**: [[fintech/jp-stablecoin-progmat|株式会社 Progmat]] (2023-10-02 独立法人化、CEO 齊藤達哉、丸の内本社)
- **発行体 (受託信託銀行)**:
  - **三菱 UFJ 信託銀行** (MUTB) — Progmat の単独受託機関 (49% 株主)
  - **三井住友信託銀行** (SMTB) — 共同委託者 (Progmat 約 15% 出資)
  - **みずほ信託銀行** (Mizuho Trust) — 共同委託者 (約 15% 出資)
  - **DMM Group ライセンス案件** (2024-08 発表) — 受託銀行未確定
- **取得ライセンス**: 信託業法 + 改正資金決済法第 3 号 EPI (特定信託受益権)
- **JVCEA 区分**: Progmat 自体は **JVCEA 非加盟**。受託信託銀行も暗号資産交換業者ではないため JVCEA 区分なし
- **対象トークン**: Progmat Coin (XJPY / XUSD 等のシリーズ、信託受益権をブロックチェーン上で表示)
- **1:1 償還性**: 額面償還、流通条件および上限の有無は信託契約・法令・受託者の現行開示で確認する
- **裏付資産**: 信託銀行内の分別管理勘定 (信託業法・預金保険対象外)
- **決済 finality**: コンソーシアム L1 / パブリックチェーン (Datachain 連携で Ava Labs 接続 2026-02)
- **FSA/JVCEA 監督**: FSA + 信託業法 (信託業務監督) + 改正資金決済法 (EPI 規制)
- **二次市場**: 機関対機関 B2B 中心、retail 流通未稼働
- **クロスボーダー**: Project Pax (Datachain・TOKI 連携で日韓 SC 転送パイロット 2024-09 開始)、ただし [[fintech/cross-border-sc-via-swift-api|SWIFT API 互換ルート]] が主軸
- **流通実績**: SC 発行状況と ST 関連指標は Progmat と受託者の日時付き公式発表で確認し、ゼロ・順位・固定額を据え置かない

### C. 銀行発行型 (預金トークン / EPI 第 1 種隣接) — DCJPY + みんなの銀行 SC

- **プラットフォーム提供**: [[fintech/jp-stablecoin-dcjpy|ディーカレット DCP 関連事業]]。2026-07-01 を効力日とする再編発表後の現行法人・契約主体は登記と公式発表で確認する
- **発行体 (参加銀行)**:
  - **GMO あおぞらネット銀行** — DCJPY 商用発行第 1 号 (2024-08 IIJ 非化石証書取引で稼働)
  - **ゆうちょ銀行** — 2026 年度 DCJPY 発行計画表明 (2025-09 報道)
  - **SBI 新生銀行** — DCJPY 導入検討中 (2025-09 報道)
  - **三菱 UFJ 銀行** — DCP 取締役派遣・フォーラム参加 (発行コミット未確定)
  - **横浜銀行** — 実証参加
  - **みんなの銀行** (福岡 FG 系) — Solana ベース銀行型 SC を独自路線で開発中
- **取得ライセンス**: 銀行業法 (預金の銀行勘定内トークン化)。改正資金決済法上は SC 三型のうち「銀行発行型」に近接するが、純粋に銀行預金として運用
- **DCP 自身**: 電子決済等代行業者 (関東財務局長 (電代) 92 号、2021-11)、JVCEA **非**加盟
- **対象トークン**: DCJPY (1 円 = 1 DCJPY、参加銀行が個別発行)、みんなの銀行 SC (Solana チェーン)
- **1:1 償還性**: 銀行預金との法的関係、償還条件および残高上限は各発行銀行の現行約款・開示で確認する
- **裏付資産**: 銀行勘定内預金 (預金保険対象、1,000 万円まで)
- **決済 finality**: DCJPY ネットワーク (Amic Sign 二層構造、フィナンシャルゾーン × ビジネスゾーン)、みんなの銀行は Solana
- **FSA 監督**: FSA 銀行業務監督 + 電子決済等代行業監督
- **二次市場**: B2B 商取引 DX (ガンバ大阪・JACDS・ファーストアカウンティング 4 社 PoC) + ST DVP (2026-04 SBI 証券・IIJ 国内初実発行検証完了)
- **クロスボーダー**: Project Pax (信託型と共通インフラ) + 銀行間 RTGS 構想 (2026-04 FSA FinTech ハブ採択)
- **流通実績**: 商用利用と流通額は DCJPY / 参加銀行の日時付き公式発表で確認する

### D. 電子決済手段等取引業 (ECISP) 経由 USD 建て SC 仲介 — SBI VC Trade + USDC

- **取得業者**: [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — 関東財務局長 第00001号 (2025-03-04 登録完了、国内 ECISP 第 1 号)
- **取得ライセンス**: 電子決済手段等取引業 (改正資金決済法第 62 条の 3) + 暗号資産交換業 (関東財務局長 第00011号) + 第一種金融商品取引業 (3247 号)
- **対象トークン**: **USDC**。追加商品は FSA 登録資料と SBI VC Trade の現行商品ページで確認し、検討中の商品を列挙しない
- **発行体**: Circle Internet Financial。SBI Circle Holdings との関係と日本での流通範囲は当事者の現行開示で確認する
- **1:1 償還性**: USDC の償還経路、国内取引方法および銀行送金の契約主体は Circle / SBI VC Trade / SBI Circle Holdings の現行開示で確認する
- **裏付資産**: Circle の reserves (米国短期国債 + 銀行預金、月次 attestation)
- **決済 finality**: 対応 chain と確認条件は Circle / SBI VC Trade の現行仕様で確認する
- **FSA/JVCEA 監督**: FSA + JVCEA (ECISP 区分は独立、暗号資産交換業区分とは別)
- **二次市場**: SBI VC Trade の現行取引・レンディング商品で確認し、「国内初」等の順位は同時点の一次資料なしに用いない
- **クロスボーダー**: 契約主体、対象法域、送受金経路および必要登録を確認し、覇権・順位表現を用いない
- **流通実績**: 取扱開始日と流通額は SBI VC Trade の日時付き公式開示で確認する

### E. 前払式支払手段 (legacy 境界) — JPYC v1 アーカイブ + Suica/PASMO 領域

- **発行体カテゴリ**: 改正資金決済法 (2023-06) 施行前の JPYC v1、および現存する Suica / nanaco / WAON / PASMO 等の交通系・流通系 IC マネー
- **取得ライセンス**: 前払式支払手段発行者 (第三者型または自家型、資金決済法第 31 条)
- **境界線**: 改正法施行後は「value transfer 可能 + onchain」のトークンは原則 EPI 区分へ移行義務。Suica 等の IC は **transferability 制限 + クローズドループ** で前払式支払手段に留まる ([[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] 参照)
- **アーカイブ事例**: JPYC v1 (2021-2025) は前払式支払手段第00773号で発行、2025-Q3 に v2 (資金移動業者型) へ移行
- **規制差**:
  - **可換金性**: 前払式は原則換金不可、資金移動業者型は換金可能
  - **送金可能**: 前払式は支払い専用、資金移動業者型は P2P 送金可能
  - **発行体破綻時**: 前払式と資金移動業者型の保全方法・金額は現行法令と契約条件で確認する
- **境界線監視**: BNPL × prepaid × 資金移動業の三方境界は ([[payments/japan-bnpl-credit-purchase-boundary|BNPL 信用購入境界]]) を参照

### F. 更新境界

将来の発行、申請、提携または参入は、当事者の正式発表と金融庁の登録・免許資料がそろった時点で追記する。技術的に発行可能であること、実証参加、出資または報道だけから「発行コミット候補」を推定しない。

## Big comparison matrix table

出典: [金融庁の制度・登録入口](https://www.fsa.go.jp/policy/virtual_currency02/) と [電子決済手段等取引業者一覧](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx)。個別商品は当事者の公式発表を併読する。

| 分類 | 法的・業務上の確認対象 | 公開検証入口 |
|---|---|---|
| **資金移動業者型** | 発行者の資金移動業登録、償還、履行保証 | FSA 登録資料 / [JPYC 公式](https://jpyc.co.jp/about) |
| **信託型** | 特定信託受益権、受託者、信託財産 | FSA 制度資料 / [Progmat 公式](https://progmat.co.jp/news/) |
| **銀行預金トークン** | 銀行預金との法的関係、預金者保護、運用主体 | 銀行・事業者の正式発表 / [DeCurret DCP 公式](https://www.decurret-dcp.com/pressrelease/) |
| **海外電子決済手段の仲介** | 電子決済手段等取引業登録、取扱商品、分別管理 | FSA 業者一覧 / [SBI VC Trade USDC](https://www.sbivc.co.jp/usdc) |
| **前払式支払手段** | 換金・移転可能性と電子決済手段との境界 | FSA 制度資料 |

この表は分類と確認手順を示す。流通額、将来の発行者、提携予定、固定上限、破綻時回収率または優劣ランキングは、日付付き一次資料なしに記載しない。

## Boundary cases

### B1. JPYC v1 → v2 移行の境界 (前払式 → 資金移動業者型)

- 2021-2025 の JPYC v1 は前払式支払手段第00773号で発行。2023-06 改正資金決済法施行後、JPYC は前払式から資金移動業者型 EPI へ法的位置付けを移行。
- **境界判定**: 前払式と資金移動業者型の差は、移転・換金機能、登録および当局資料で確認する。JPYC v1 → v2 の法的経緯は当事者と FSA の公表に基づき記録する。
- **アーカイブ**: 2026-04-28 金融庁公式資料が初めて JPYC を「資金移動業」と明示。

### B2. みんなの銀行 SC の銀行発行型 vs Solana ベース第三型混在性

- みんなの銀行の Solana 関連構想は、正式な商品、発行主体、登録および提供開始を当事者発表で確認する。
- **境界判定**: 銀行預金トークンと EPI 第 1 号の分類を推定せず、FSA と当事者が公表する法的構造で確認する。
- **確認境界**: FSA の正式分類と当事者の法的説明が公表された時点で更新し、未公表部分を人物発言や技術選定だけで補わない。

### B3. SBI VC Trade USDC 取扱の二重ライセンス境界

- SBI VC Trade は **暗号資産交換業 (第00011号) + ECISP (第00001号)** の二重保有。USDC は ECISP 区分、BTC/ETH は暗号資産交換業区分で取り扱われ、同一プラットフォーム内で二つの法的レイヤーが共存する。
- **境界判定**: USDC は法的に「電子決済手段」に該当するため暗号資産取引と別レイヤー。顧客資産の分別管理ルール・分別管理方式も異なる。
- **JVCEA 区分**: 暗号資産交換業区分 (1011) と ECISP 区分の関係は、JVCEA の現行会員情報と当事者開示で確認する。

### B4. DCJPY 預金トークンと EPI 第 1 号の境界

- DCJPY は法的には「銀行が発行する預金のトークン化」=純粋に銀行法の枠内。改正資金決済法上の EPI 第 1 号 (銀行発行型 SC) には該当しないという解釈もある。
- **境界判定**: 銀行発行型 EPI は 改正資金決済法でも別 framework として存在するが、DCJPY は **銀行預金そのものをトークン化** する設計のため、預金保険・銀行業務監督の枠内で運用される。EPI 第 1 号は「銀行が SC として発行する」設計で、DCJPY とは法的境界が異なる。
- **確認境界**: FSA の正式資料と当事者の法的説明がない範囲では、本表が分類を確定しない。

### B5. ECISP (第 00001 号) + 資金移動業者型 (JPYC) のクロスボーダー連携境界

- SBI Circle Holdings、SBI VC Trade および JPYC の連携を確認する際は、**USDC ↔ JPYC の交換・決済経路**と両者の規制カテゴリを分けて検証する:
  - USDC = ECISP 第 00001 号で取扱 (SBI VC Trade)
  - JPYC = 資金移動業者型第 00099 号で発行 (JPYC 株式会社)
- **境界判定**: 直接交換の可否、必要登録、契約主体および各社の役割は、FSA 登録資料と当事者の現行サービス開示で確認する。
- **検証視点**: 二つの登録区分を一体の覇権構造として推定せず、[[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]] の公開根拠を案件ごとに確認する。

### B6. 信託型 Progmat Coin の発行体不在問題

- Progmat は **プラットフォーム提供者であり発行体ではない**。実発行主体と発行状況は、三菱 UFJ 信託銀行 / SMBC 信託銀行 / みずほ信託銀行および Progmat の日時付き公式発表で確認する。
- **境界判定**: 「Progmat 上で発行された SC」の発行者、受託者、特定信託受益権としての法的位置付けおよび Progmat の役割は、案件ごとの契約・開示で確認する。
- **競合**: 同じ信託型 SC でも、DMM Group との 2024-08 発表案件は受託銀行が公表されていない (Progmat 経由かは未確認)。

### B7. JPYC v2 と Progmat XJPY の用途棲み分け

- JPYC = 資金移動業者型、1 回 100 万円上限 + パブリックチェーン onchain + リテール
- Progmat XJPY = 信託型。流通条件、利用チェーンおよび対象顧客は発行案件の公式条件で確認する
- 同じ「円ペッグ SC」でも、対象顧客、送金上限、チェーンおよび証券決済との連携条件を商品ごとに比較する。
- **棲み分けの確認イベント**: JPYC と Progmat 関連商品の用途は、日時付きの商品条件と実利用事例で更新し、独占や対抗関係を推定しない。

### B8. 銀行発行型 (DCJPY) と銀行業法上の銀行預金の境界

- DCJPY は **「銀行が発行する預金トークン」** = 銀行業法第 2 条の「預金」をトークン化したもの。法的には預金そのものであり、改正資金決済法上の SC 三型の「銀行発行型 EPI」とは技術的には接続可能だが厳密には別レイヤー。
- **預金保険対象**: DCJPY 残高への預金保険の適用範囲と上限は、発行銀行の約款・当局資料で確認する。JPYC・Progmat XJPY は各商品の履行保証・信託条件を個別に確認する。
- **破綻時順位**: 銀行発行型、信託型、資金移動業者型の回収順位と倒産隔離は、法的主体、契約、信託財産および保証方式で異なるため固定化しない。

### B9. ECISP 業者と取扱商品の更新確認

- SBI VC Trade 以外の追加登録は FSA の現行 ECISP 一覧で確認し、準備中・検討中という非公開状態を推定しない:
  - **bitFlyer** = 登録と商品公開が確認できた時点で追記する
  - **Coincheck** = 登録と商品公開が確認できた時点で追記する
  - **GMO Coin** = 登録と商品公開が確認できた時点で追記する
- 取得社数や USD 建て SC の将来流通量を予測せず、登録一覧と各社商品ページで更新する。
- **競合面**: 独占・シェア・契約継続を推定せず、当事者の現行契約開示で確認する。

### B10. CBDC (日本円) との確認境界

- 日本銀行 (BoJ) の CBDC (中央銀行発行デジタル通貨) 検討状況は、BoJ の日時付き公式資料で確認する。
- **将来的境界**: CBDC と各 stablecoin の競合・共存を予測せず、BoJ / FSA の正式設計と当事者商品を比較する。
- 実装判断、提供時期および制度設計は公表資料が更新された時点で反映する。

## 戦略的含意

### 含意 1: 主要モデルの比較

[[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] の分類を検証入口として使い、役割固定化や順位を断定しない:
- **SBI Circle Holdings / USDC** = 海外電子決済手段の国内取扱モデル
- **JPYC** = 国内零售 (個人 + 法人精算 100 万円以下)
- **Progmat** = B2B 大口 (信託型 + ST 連動)
- **DCJPY / みんなの銀行 SC** = 銀行発行型 (商取引 DX + ST DVP)

### 含意 2: ECISP 登録と取扱商品の継続確認

第00002号以降の ECISP と取扱商品は FSA の現行一覧で確認し、取得社数や市場拡大を予測しない。

### 含意 3: 銀行系 SC の提供条件確認

銀行発行型の提供主体、法的構造、提供開始および預金保険の適用条件は、各銀行と当局の正式発表で確認する。稼働時期やリテール訴求を予測しない。

### 含意 4: 信託型と ST デジタル証券の連動確認

Progmat の SC 発行、ST 関連指標および DVP 利用は日時付き公式発表で確認し、ゼロ・国内最大・本領発揮といった評価を固定しない。

### 含意 5: 前払式支払手段と SC の境界確認

Suica / nanaco / WAON / PASMO 等の前払式支払手段と資金移動業者型 SC の境界は、移転可能性、換金性、利用範囲および登録区分で確認する。JPYC v1 → v2 の移行経緯も当事者と FSA の公表に基づき記録する。

### 含意 6: 規制カテゴリの選択は発行体の事業モデルを決定する

- **資金移動業者型** = 1 回 100 万円上限を受け入れる代わりに、自社で発行・換金プラットフォームを運営可能 (JPYC モデル)
- **信託型** = 発行者、受託者およびプラットフォーム提供者の役割を案件ごとに確認する (Progmat モデル)
- **銀行発行型** = 銀行業免許、預金保険の適用条件および銀行間連携を商品ごとに確認する (DCJPY モデル)
- **ECISP** = 海外 SC を国内取扱可能、ただし発行体ではなく仲介者 (SBI VC Trade モデル)
- **前払式** = 移転可能性、換金性および利用範囲から EPI との境界を確認する

## 継続確認ポイント

- **金融庁 / JPYC**: 送金・換金上限の現行条件と制度資料
- **Progmat**: SC 発行状況と DMM Group 関連案件の公式更新
- **DCJPY** 銀行間 RTGS 構想の現行ステータスと公表済み参加主体
- **SBI Circle Holdings**: 契約主体、登録および取扱商品の公式更新
- **みんなの銀行 Solana SC**: 商品、発行主体、登録および提供開始の公式発表
- **ECISP 業者**: 現行登録一覧と各登録業者の取扱 SC 銘柄
- **CBDC**: 日本円中央銀行発行デジタル通貨に関する BoJ の公式更新

## Related

- [[exchanges/INDEX|exchanges index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]]
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]]
- [[fintech/jp-stablecoin-progmat|Progmat 詳細]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY 詳細]]
- [[fintech/japan-ecisb-license|日本 ECISB 牌照]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架構]]
- [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]]
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX deposit token / stablecoin 統合]]
- [[payment-firms/jpyc|JapanFG jpyc]]
- [[payment-firms/progmat|JapanFG progmat]]
- [[exchanges/jp-exchange-jpyc|JPYC 株式会社]]
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[financial-licenses/payment-license-stack|payment license stack]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバル stablecoin 5 極比較]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル比較マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto custody provider landscape matrix]]

## Sources

- FSA「電子決済手段等取引業者登録一覧」: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA「暗号資産・電子決済手段関係」: https://www.fsa.go.jp/policy/virtual_currency02/
- JVCEA 会員一覧: https://jvcea.or.jp/member/
- JPYC 公式: https://jpyc.co.jp/about
- Progmat 公式: https://progmat.co.jp/news/
- DeCurret DCP 公式: https://www.decurret-dcp.com/pressrelease/
- SBI VC Trade USDC: https://www.sbivc.co.jp/usdc
