---
source: exchanges/japan-stablecoin-issuer-regulatory-classification-matrix
source_hash: a5fd5a4a814f2073
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本ステーブルコイン発行体規制分類マトリクス — 電子決済手段等取引業 / 信託型 / 銀行発行型 / 資金移動業者型 / 前払式支払手段境界"
translated_at: 2026-06-26T08:27:56.307Z
---

# 日本ステーブルコイン発行体規制分類マトリクス — 電子決済手段等取引業 / 信託型 / 銀行発行型 / 資金移動業者型 / 前払式支払手段境界

## 要約日本の円建て・USD 建て stablecoin (改正資金決済法 2023-06 で「電子決済手段」と明文定義) は、**発行体の業態 × 法的根拠** で 5 つの規制カテゴリに分かれる: (1) **資金移動業者型 (EPI 第 2 種)** = [[exchanges/jp-exchange-jpyc|JPYC]] 唯一、(2) **信託型 (特定信託受益権・EPI 第 3 種)** = [[fintech/jp-stablecoin-progmat|Progmat]] プラットフォーム上で MUFG 信託・SMBC 信託・みずほ信託が発行、(3) **銀行発行型 (預金トークン、EPI 第 1 種隣接)** = [[fintech/jp-stablecoin-dcjpy|DCJPY]] と みんなの銀行 SC、(4) **電子決済手段等取引業 (ECISP) 経由の海外 SC 仲介** = [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] (第00001号) の USDC 取扱、(5) **前払式支払手段 (legacy)** = JPYC v1 が辿った 2023 年改正前のアーカイブ境界。発行体に加えて、潜在エントラントとして KDDI / NTT Docomo / LINE Finance / ゆうちょ銀行 が銀行発行型・資金移動業者型へのコミット可能性を持つ。各カテゴリの **発行者・取得ライセンス・1:1 償還性・裏付資産・決済 finality・FSA/JVCEA 監督・二次市場アクセス・クロスボーダー** を 8 軸で横並び比較する。

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。[[fintech/INDEX|fintech index]] の政策系項目 [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构概览]] / [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比]] / [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] / [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架构]] / [[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]] に対する **発行体軸 (発行会社-axis)** の対応項目である。仲介業者の boundary については [[fintech/japan-ecisb-license|日本 ECISB 牌照]]、legacy 前払式支払手段の境界については [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]] と併読する。事業者別の起点は [[payment-firms/jpyc|JapanFG jpyc]] / [[payment-firms/progmat|JapanFG progmat]] / [[financial-licenses/payment-license-stack|payment license stack]] に置かれている。

## このマトリクスが重要な理由

- 日本は **2023-06 改正資金決済法施行で世界初に SC の法的地位を明文化** し、GENIUS Act より約 2 年先行した。フレームワーク自体は早期だが、各カテゴリの**実装テンポが大きく異なる**: 資金移動業者型は JPYC が 2025-Q3 商用稼働、信託型 Progmat Coin は 2026-05 時点で公式発行ゼロ、銀行発行型 DCJPY は 2024-08 IIJ 非化石証書取引で初商用稼働。
- **発行体カテゴリの違いは技術選定ではなく営業範囲・流通上限・カウンターパーティ・分別管理方式を法的に拘束する**。例えば 資金移動業者型は 1 回 100 万円上限が法定、信託型はその制約がない代わりに信託受託銀行の信託業法義務が発動する。
- **USD 建て SC の国内流通は ECISP (電子決済手段等取引業) ライセンス取得業者経由が唯一の合法ルート**。SBI VC Trade が第00001号で USDC を 2025-03 取扱開始したことで「日本国内で USD 建て SC を扱える唯一の正規ルート」が確立した。
- 規制カテゴリの差は **proof-of-reserves 開示頻度・bail-in 順位・倒産時の顧客資産扱い** にも直結する。発行体破綻時、信託型は信託銀行倒産隔離で 100% 保全、資金移動業者型は履行保証金制度経由で保全されるが、銀行型は預金保険対象。

## 発行体別・分類別セクション

### A. 資金移動業者型 (EPI 第 2 種) — JPYC

- **発行体**: [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] (2019-11 設立、関東財務局第00099号資金移動業者)
- **取得ライセンス**: **資金移動業者** (資金決済法第 37 条) + 前払式支払手段 (第三者型) 第00773号 (JPYC v1 legacy 用、現在は v2 が主流)
- **JVCEA 区分**: 第一種会員 #1042 — 登録区分「資金移動業 (資金移動)」のみ。暗号資産交換業・デリバ・電子決済手段等取引業の JVCEA 区分は付与なし
- **対象トークン**: JPYC (1 JPYC = 1 円ペッグ、Ethereum / Polygon / Avalanche / Gnosis Chain 等マルチチェーン)
- **1:1 償還性**: 1 円ペッグ + 1 回 100 万円換金上限 (2026-05 改訂)
- **裏付資産**: 履行保証金 (資金移動業者の供託または信託または保証契約) — 顧客資産は 50% 以上の供託義務
- **決済 finality**: パブリックチェーン上 onchain 決済 (Ethereum 12 confirmations 等)、JPYC EX 内では即時
- **FSA/JVCEA 監督**: FSA 関東財務局 + JVCEA (資金移動業区分)
- **二次市場**: JPYC EX (公式) + Uniswap 等 DEX + メタプラネット / 住友生命系リテール拠点
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
- **1:1 償還性**: 信託受益権の額面と 1:1 — 流通上限は法定なし (信託銀行の BS 健全性のみ)
- **裏付資産**: 信託銀行内の分別管理勘定 (信託業法・預金保険対象外)
- **決済 finality**: コンソーシアム L1 / パブリックチェーン (Datachain 連携で Ava Labs 接続 2026-02)
- **FSA/JVCEA 監督**: FSA + 信託業法 (信託業務監督) + 改正資金決済法 (EPI 規制)
- **二次市場**: 機関対機関 B2B 中心、retail 流通未稼働
- **クロスボーダー**: Project Pax (Datachain・TOKI 連携で日韓 SC 転送パイロット 2024-09 開始)、ただし [[fintech/cross-border-sc-via-swift-api|SWIFT API 互換ルート]] が主軸
- **流通実績** (2026-05): SC 公式発行ゼロ (ST デジタル証券は Progmat 経由 4,522 億円超で国内最大)

### C. 銀行発行型 (預金トークン / EPI 第 1 種隣接) — DCJPY + みんなの銀行 SC

- **プラットフォーム提供**: [[fintech/jp-stablecoin-dcjpy|株式会社ディーカレット DCP]] (2026-07-01 親会社ディーカレット HD に吸収合併予定)
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
- **1:1 償還性**: 銀行預金として 1 円 1:1 — 流通上限は銀行 BS 健全性のみ
- **裏付資産**: 銀行勘定内預金 (預金保険対象、1,000 万円まで)
- **決済 finality**: DCJPY ネットワーク (Amic Sign 二層構造、フィナンシャルゾーン × ビジネスゾーン)、みんなの銀行は Solana
- **FSA 監督**: FSA 銀行業務監督 + 電子決済等代行業監督
- **二次市場**: B2B 商取引 DX (ガンバ大阪・JACDS・ファーストアカウンティング 4 社 PoC) + ST DVP (2026-04 SBI 証券・IIJ 国内初実発行検証完了)
- **クロスボーダー**: Project Pax (信託型と共通インフラ) + 銀行間 RTGS 構想 (2026-04 FSA FinTech ハブ採択)
- **流通実績** (2026-05): 商用稼働中、額面非公表

### D. 電子決済手段等取引業 (ECISP) 経由 USD 建て SC 仲介 — SBI VC Trade + USDC

- **取得業者**: [[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]] — 関東財務局長第00001号 (2025-03-04 登録完了、国内 ECISP 第 1 号)
- **取得ライセンス**: 電子決済手段等取引業 (改正資金決済法第 62 条の 3) + 暗号資産交換業 (関東財務局長第00011号) + 第一種金融商品取引業 (3247 号)
- **対象トークン**: **USDC** (Circle 発行) + 検討中: PYUSD (PayPal) / EURC (Circle EUR)
- **発行体**: Circle Internet Financial (USDC 発行、SBI Circle Holdings 2025-08 設立 50/50 JV で日本独占分销)
- **1:1 償還性**: USDC の Circle 償還経路を経由 (国内では SBI VC Trade のスポット取引のみ、銀行 wire は SBI Circle Holdings 経由)
- **裏付資産**: Circle の reserves (米国短期国債 + 銀行預金、月次 attestation)
- **決済 finality**: Ethereum / Solana / Polygon / Arbitrum 等マルチチェーン
- **FSA/JVCEA 監督**: FSA + JVCEA (ECISP 区分は独立、暗号資産交換業区分とは別)
- **二次市場**: SBI VC Trade スポット取引 + USDC レンディング (2026-03 国内初開始)
- **クロスボーダー**: §501(d) 視点で SBI Circle Holdings が **跨境合规霸主の地位** ([[fintech/japan-epi-four-camps-comparison|EPI 四阵营 v2 評価で #1]])
- **流通実績**: 2025-03 取扱開始以降の額面非公表

### E. 前払式支払手段 (legacy 境界) — JPYC v1 アーカイブ + Suica/PASMO 領域

- **発行体カテゴリ**: 改正資金決済法 (2023-06) 施行前の JPYC v1、および現存する Suica / nanaco / WAON / PASMO 等の交通系・流通系 IC マネー
- **取得ライセンス**: 前払式支払手段発行者 (第三者型または自家型、資金決済法第 31 条)
- **境界線**: 改正法施行後は「value transfer 可能 + onchain」のトークンは原則 EPI 区分へ移行義務。Suica 等の IC は **transferability 制限 + クローズドループ** で前払式支払手段に留まる ([[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]] 参照)
- **アーカイブ事例**: JPYC v1 (2021-2025) は前払式支払手段第00773号で発行、2025-Q3 に v2 (資金移動業者型) へ移行
- **規制差**:
  - **可換金性**: 前払式は原則換金不可、資金移動業者型は換金可能
  - **送金可能**: 前払式は支払い専用、資金移動業者型は P2P 送金可能
  - **発行体破綻時**: 前払式は基準日未使用残高の 50% 供託、資金移動業者型は履行保証金で保全
- **境界線監視**: BNPL × 前払式 × 資金移動業の三方境界は ([[payments/japan-bnpl-credit-purchase-boundary|BNPL 信用購入境界]]) を参照

### F. 潜在エントラント (2026-2027 発行コミット候補)

- **KDDI** — au じぶん銀行系 + au PAY (前払式支払手段) 経由で銀行発行型 SC 検討。ディーカレット DCP 役員派遣あり (物江信明)
- **NTT Docomo** — d 払い + 三菱 UFJ 銀行 / OLIVE 銀行口座連携を活かして資金移動業者型 SC または信託型 SC 参入可能性
- **LINE Finance / LINE Pay** (LINE ヤフー 4689 子) — LINE Xenesis ([[exchanges/jp-exchange-line-xenesis]]) が 2026-06 サービス終了、Stablecoin 領域への展開可能性
- **ゆうちょ銀行** — DCJPY 銀行発行型へ 2026 年度発行コミット (2025-09 報道)
- **PayPay / PayPay 銀行** (Z ホールディングス系) — PayPay 残高 (前払式) と PayPay 銀行 (銀行業) で前払式 / 銀行発行型のどちらも可能
- **メルカリ Mercoin** ([[exchanges/jp-exchange-mercoin]]) — メルペイ (資金移動業 + 前払式) 経由で資金移動業者型 SC 発行可能性
- **メタプラネット (3350)** — JPYC シリーズ B 出資で BTC × SC 連携への布石 (発行体ではなく 経済圏投資家)

## 大型比較マトリクス表

| 軸 | A. 資金移動業者型 JPYC | B. 信託型 Progmat | C. 銀行発行型 DCJPY | D. ECISP USDC (SBI) | E. 前払式支払手段 legacy |
|---|---|---|---|---|---|
| **発行体カテゴリ** | 資金移動業者 | 信託銀行 | 銀行 | 海外 SC 仲介取扱業者 | 前払式支払手段発行者 |
| **代表発行体** | [[exchanges/jp-exchange-jpyc|JPYC 株式会社]] | MUFG 信託・SMBC 信託・みずほ信託 (Progmat 上で発行) | GMO あおぞらネット銀行 / ゆうちょ銀行 / SBI 新生銀行 | Circle (海外発行、SBI VC Trade が国内取扱) | JPYC v1 (legacy), Suica, nanaco, WAON, PASMO |
| **法的根拠** | 資金決済法第 37 条 | 信託業法 + 第 3 号 EPI | 銀行業法 + 第 1 号 EPI 隣接 | 改正資金決済法第 62 条の 3 (ECISP) | 資金決済法第 31 条 |
| **登録番号例** | 関東財務局第00099号 | (該当なし、信託業務として運営) | 銀行業免許 + 電代 92 号 (DCP) | 関東財務局第00001号 (ECISP) | 関東財務局第00773号 (JPYC v1) |
| **JVCEA 区分** | 第一種 (資金移動業) | 非加盟 | 非加盟 | 第一種 (ECISP) | 非加盟 |
| **1:1 償還性** | 1 円 = 1 JPYC, 1 回 100 万円上限 | 1 円 = 1 XJPY, 上限なし | 1 円 = 1 DCJPY, 上限なし | 1 USD = 1 USDC (Circle 経由) | 原則換金不可 |
| **流通上限** | 1 回 100 万円 (2026-05 改訂) | 法定なし | 法定なし (BS 健全性のみ) | スポット取引限度 | 残高累計上限なし、加盟店内のみ |
| **裏付資産** | 履行保証金 (供託 / 信託 / 保証 50%+) | 信託勘定 (倒産隔離 100%) | 銀行預金 (預金保険 1,000 万円) | Circle reserves (短期米国債 + 銀行) | 基準日未使用残高 50% 供託 |
| **決済 finality** | Public chain (ETH / Polygon / AVAX 等) | コンソーシアム L1 + Ava Labs 接続 | DCJPY ネットワーク (Amic Sign) | ETH / Solana / Polygon / Arbitrum | クローズドループ DB (NFC) |
| **FSA 直接監督** | ○ 関東財務局 | ○ FSA + 信託業法 | ○ FSA 銀行業務監督 | ○ 関東財務局 (ECISP) | ○ 関東財務局 (前払式) |
| **二次市場 onchain** | ○ DEX (Uniswap 等) | △ 機関対機関のみ | △ 商取引 DX 中心 | ○ DEX 経由 | ✕ クローズドループ |
| **クロスボーダー** | ✕ 国内利用前提 | △ Project Pax (日韓・日香港) | △ 銀行間 RTGS 構想 (実証段階) | ◎ Circle reserves 経由グローバル接続 | ✕ ドメスティック |
| **発行体破綻時保全** | 履行保証金で保全 | 信託で完全倒産隔離 | 預金保険対象 | Circle が破綻すると影響 | 50% 供託まで保全 |
| **proof-of-reserves 頻度** | 公表は監督報告ベース | 信託会計監査ベース | 銀行決算ベース | Circle 月次 attestation | 監督報告 |
| **想定顧客層** | 個人リテール + 企業間決済 | 機関対機関 B2B (証券・大口) | 企業間決済 + ST DVP + サプライチェーン | リテール + DeFi 利用者 | 加盟店リテール |
| **競合関係** | DCJPY (B2B 領域で重複) + ECISP USDC (代替手段) | DCJPY (大口決済で重複) + JPYC (法人決済で重複) | Progmat (大口決済で重複) | JPYC (USD 互換性で代替候補) | 資金移動業者型に segment 取られる |
| **代表流通額** (2026-05) | 累計発行 5 億円超 | 公式発行ゼロ (ST は 4,522 億円) | 商用稼働中 (額面非公表) | 取扱開始 2025-03 以降 (非公表) | 数百億円規模 (Suica で年間数兆円流通) |
| **将来エントラント** | KDDI / Docomo / メルペイ / PayPay 銀行 | DMM (2024-08 発表) + 他信託銀行 | ゆうちょ / SBI 新生 / 三菱 UFJ / 横浜銀行 / みんなの銀行 (Solana 別ルート) | 他 ECISP 取得者 (今後 5-10 社見込) | 既存 IC マネー継続、新規参入なし |
| **戦略パートナー** | アステリア / メタプラネット / 住友生命 | NTT Data + JPX + Datachain + Ava Labs | IIJ + SBI HD + KDDI + NTT + 三菱 UFJ + ゆうちょ + KDDI | Circle (SBI Circle Holdings 50/50 JV) | (各 IC 発行体) |
| **§501(d) 視点での位置付け** | 国内零售合规 #2 ★★★★ | 国内 B2B 大口 #3 ★★★ (跨境合规なし) | 純本土零售 #4 ★★ | **跨境合规霸主 #1 ★★★★★** | (規制対象外) |

## 境界事例

### B1. JPYC v1 → v2 移行の境界 (前払式 → 資金移動業者型)

- 2021-2025 の JPYC v1 は前払式支払手段第00773号で発行。2023-06 改正資金決済法施行後、JPYC は前払式から資金移動業者型 EPI へ法的位置付けを移行。
- **境界判定**: 前払式は「価値の移転不可・支払専用」、資金移動業者型は「P2P 送金可能 + 換金可能」。JPYC v1 はマルチチェーンで onchain 送金可能だったため改正後の EPI 定義に該当 → v2 へ強制移行。
- **アーカイブ**: 2026-04-28 金融庁公式資料が初めて JPYC を「資金移動業」と明示。

### B2. みんなの銀行 SC の銀行発行型 vs Solana ベース第三型混在性

- みんなの銀行 (福岡 FG 系) は **Solana チェーン上で銀行発行 SC を実装** という前例なしの実装ルートを取る。
- **境界判定**: 銀行勘定内預金トークンと EPI 第 1 号の区別が曖昧。改正資金決済法上の SC 三型分類 (信託型 / 銀行発行型 / 資金移動業者型) のうち銀行発行型 (第 1 号 EPI) に該当する可能性が高いが、Solana パブリックチェーンでの onchain 流通という設計は他行 DCJPY (コンソーシアム L1) と異なる。
- **2026-05 時点**: FSA の正式分類は公表なし。永吉健一 (みんなの銀行) は独自路線継続。

### B3. SBI VC Trade USDC 取扱の二重ライセンス境界

- SBI VC Trade は **暗号資産交換業 (第00011号) + ECISP (第00001号)** の二重保有。USDC は ECISP 区分で取扱、BTC/ETH は暗号資産交換業区分で取扱。同一プラットフォーム内で二つの法的レイヤーが共存する初例。
- **境界判定**: USDC は法的に「電子決済手段」に該当するため暗号資産取引と別レイヤー。顧客資産の分別管理ルール・分別管理方式も異なる。
- **JVCEA 区分**: 暗号資産交換業区分 (1011) と ECISP 区分が同会員で並列 (JVCEA 内で初めての並列保有)。

### B4. DCJPY 預金トークンと EPI 第 1 号の境界

- DCJPY は法的には「銀行が発行する預金のトークン化」=純粋に銀行法の枠内。改正資金決済法上の EPI 第 1 号 (銀行発行型 SC) には該当しないという解釈もある。
- **境界判定**: 銀行発行型 EPI は 改正資金決済法でも別 framework として存在するが、DCJPY は **銀行預金そのものをトークン化** する設計のため、預金保険・銀行業務監督の枠内で運用される。EPI 第 1 号は「銀行が SC として発行する」設計で、DCJPY とは法的境界が異なる。
- **2026-05 時点**: FSA の正式見解は未公表。両解釈が並存。

### B5. ECISP (第 00001 号) + 資金移動業者型 (JPYC) のクロスボーダー連携境界

- SBI Circle Holdings (2025-08 設立) は **USDC ↔ JPYC の双方向決済通道** を構築しつつあるが、両者の規制カテゴリが異なる:
  - USDC = ECISP 第 00001 号で取扱 (SBI VC Trade)
  - JPYC = 資金移動業者型第 00099 号で発行 (JPYC 株式会社)
- **境界判定**: USDC を JPYC に直接交換するには、ECISP 業者 + 資金移動業者の双方ライセンスが必要。SBI VC Trade が USDC 側を、JPYC 株式会社が JPY 側を担当する分業構造。
- **§501(d) 視点**: この双重ライセンス架構が「日本における USD-JPY SC 跨境合规霸主」の核心 ([[fintech/stablecoin-channel-japan-sbi-jpyc-ring|SBI × JPYC × Circle 環形持株]])。

### B6. 信託型 Progmat Coin の発行体不在問題

- Progmat は **プラットフォーム提供者であり発行体ではない**。実発行は三菱 UFJ 信託銀行 / SMBC 信託銀行 / みずほ信託銀行が個別に行う想定だが、2026-05 時点で公式発行はゼロ。
- **境界判定**: 「Progmat 上で発行された SC」は法的に各信託銀行の特定信託受益権であり、Progmat 自体は規制対象外 (デジタルアセット共創コンソーシアム DCC の事務局として 331 社をまとめる役割)。
- **競合**: 同じ信託型 SC でも、DMM Group との 2024-08 発表案件は受託銀行が公表されていない (Progmat 経由かは未確認)。

### B7. JPYC v2 と Progmat XJPY の用途棲み分け

- JPYC = 資金移動業者型、1 回 100 万円上限 + パブリックチェーン onchain + リテール
- Progmat XJPY = 信託型、上限なし + コンソーシアム L1 + B2B 大口
- 同じ「円ペッグ SC」でも用途棲み分けが構造的に決まる。JPYC は 個人 P2P + 加盟店決済 + 法人精算 (100 万円以下) を狙い、Progmat XJPY は機関対機関の証券決済 + 大口 B2B 精算 を狙う。
- **棲み分けの確認イベント**: 2026-04 JPYC が 1 回上限 100 万円に改訂 → 法人 B2B 精算範囲を拡張する戦略的動き。Progmat 側が B2B 大口を独占する構図に対抗。

### B8. 銀行発行型 (DCJPY) と銀行業法上の銀行預金の境界

- DCJPY は **「銀行が発行する預金トークン」** = 銀行業法第 2 条の「預金」をトークン化したもの。法的には預金そのものであり、改正資金決済法上の SC 三型の「銀行発行型 EPI」とは技術的には接続可能だが厳密には別レイヤー。
- **預金保険対象**: DCJPY 残高は預金保険対象 (1,000 万円まで)。これに対し JPYC・Progmat XJPY は預金保険対象外、履行保証金 (JPYC) / 信託 (Progmat) で保全。
- **bail-in 順位**: 銀行発行型は預金保険後の銀行倒産で配当順位が確定、信託型は完全倒産隔離、資金移動業者型は履行保証金で保全。

### B9. ECISP 業者の追加取得予定組と USD 建て SC 市場の拡大

- SBI VC Trade が ECISP 第00001号で USDC を 2025-03 取扱開始した後、他 VASP も ECISP 追加取得を準備中:
  - **bitFlyer** = ECISP 取得検討中 (2025 内部表明)
  - **Coincheck** = ECISP 取得 + Monex グループ内デリバ連動の検討
  - **GMO Coin** = ECISP 取得 + USDC 取扱検討
- 2026-2027 で **5-10 社の ECISP 取得** が見込まれ、USD 建て SC (USDC / PYUSD / EURC) の国内流通が本格化する。
- **競合面**: 国内 ECISP 取得業者の増加で、SBI VC Trade の USDC 国内独占的地位が薄まる。ただし SBI Circle Holdings 50/50 JV による Circle との独占分销契約は維持される可能性が高い。

### B10. CBDC (日本円) との将来的境界

- 日本銀行 (BoJ) は CBDC (中央銀行発行デジタル通貨) のパイロット検証を 2023-04 開始、2026 年度後半に「ユースケース実証」フェーズへ。
- **将来的境界**: 日本円 CBDC が実装された場合、銀行発行型 SC (DCJPY) との競合可能性が高い。一方、信託型 SC (Progmat) と資金移動業者型 SC (JPYC) はインフラ層が異なるため、 CBDC と共存する可能性が高い。
- 2026-05 時点で日本円 CBDC の実装は決定していないが、政策議論は本格化。

## 戦略的含意

### 含意 1: 4 陣営の役割分担固定化

[[fintech/japan-epi-four-camps-comparison|EPI 四阵营]] が 2025-2026 に固定化:
- **SBI Circle Holdings / USDC** = 跨境合规霸主 (§501(d) 入榜後の v2 評価 #1)
- **JPYC** = 国内零售 (個人 + 法人精算 100 万円以下)
- **Progmat** = B2B 大口 (信託型 + ST 連動)
- **DCJPY / みんなの銀行 SC** = 銀行発行型 (商取引 DX + ST DVP)

### 含意 2: ECISP 業者多元化で USD 建て SC 市場が本格化

SBI VC Trade 第00001号後、5-10 社の ECISP 追加取得 (2026-2027) で **USD 建て SC (USDC / PYUSD / EURC) の国内流通** が拡大。日本居住者が USD 建て SC を保有・送金する正規ルートが整備される。

### 含意 3: 銀行系 SC の本格稼働 (ゆうちょ + SBI 新生 + 三菱 UFJ)

DCJPY 銀行発行型のキー発行体予定 (ゆうちょ 2026 年度発行計画、SBI 新生検討中、三菱 UFJ 取締役派遣) が稼働すれば、銀行発行型 SC が 2027-2028 に本格化。預金保険対象という保全レベルの高さは個人リテールへの訴求点。

### 含意 4: 信託型は ST デジタル証券との連動で本領発揮

Progmat は 2026-05 時点で SC 公式発行ゼロだが、ST デジタル証券は 4,522 億円超で国内最大プラットフォーム。**ST + SC の DVP 決済** で信託型 SC の本領が発揮される (2026-04 国内初実発行検証完了)。

### 含意 5: 前払式支払手段は IC マネー領域に限定固定化

Suica / nanaco / WAON / PASMO 等の前払式支払手段は **transferability 制限 + クローズドループ** で資金移動業者型 SC とは別領域に固定化。新規参入の前払式 SC はなく、JPYC v1 のような前払式型 SC は 2023-06 改正法施行で資金移動業者型に強制移行された。

### 含意 6: 規制カテゴリの選択は発行体の事業モデルを決定する

- **資金移動業者型** = 1 回 100 万円上限を受け入れる代わりに、自社で発行・換金プラットフォームを運営可能 (JPYC モデル)
- **信託型** = 自社は発行体になれないが、プラットフォーム提供者として 331 社の DCC コンソーシアムを統括可能 (Progmat モデル)
- **銀行発行型** = 銀行業免許が必要だが、預金保険対象の最高保全レベル + 銀行間 RTGS 構想 (DCJPY モデル)
- **ECISP** = 海外 SC を国内取扱可能、ただし発行体ではなく仲介者 (SBI VC Trade モデル)
- **前払式** = legacy 領域に固定、新規 SC ビジネスとしての適合性なし

## 監視ポイント (2026-2027)

- **金融庁** が JPYC の 1 回上限 100 万円改訂を恒久化するか、追加引上げを検討するか
- **Progmat** が公式発行を 2026 中に達成できるか (DMM Group との 2024-08 発表案件の進捗)
- **DCJPY** 銀行間 RTGS 構想の本格稼働 (2026-04 FSA FinTech ハブ採択、参加銀行公表予定)
- **SBI Circle Holdings** の §501(d) 入榜後の動向 (USA-JP MRA 締結時点)
- **みんなの銀行 Solana SC** の他地方銀行への波及効果
- **ECISP 業者の追加取得**: 第 00002 号以降の取得業者と取扱 SC 銘柄
- **CBDC** 日本円中央銀行発行デジタル通貨の議論進捗

## 関連項目

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
- [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]
- [[financial-licenses/payment-license-stack|payment license stack]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|グローバル stablecoin 5 極比較]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制 8 極比較]]
- [[exchanges/japan-vasp-business-model-competitive-matrix|日本 VASP ビジネスモデル比較マトリクス]]
- [[exchanges/crypto-custody-provider-landscape-matrix|crypto カストディ provider landscape matrix]]

## 出典

- FSA「電子決済手段等取引業者登録一覧」: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- FSA「暗号資産・電子決済手段関係」: https://www.fsa.go.jp/policy/virtual_currency02/
- JVCEA 会員一覧: https://jvcea.or.jp/member/
- JPYC 公式: https://jpyc.co.jp/about
- Progmat 公式: https://progmat.co.jp/news/
- DeCurret DCP 公式: https://www.decurret-dcp.com/pressrelease/
- SBI VC Trade USDC: https://www.sbivc.co.jp/usdc
