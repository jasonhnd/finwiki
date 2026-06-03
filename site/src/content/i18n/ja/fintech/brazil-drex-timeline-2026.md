---
source: fintech/brazil-drex-timeline-2026
source_hash: ef8ae7c9c13ad6db
lang: ja
status: machine
fidelity: ok
title: "ブラジルDREXタイムライン 2024-2026"
translated_at: 2026-06-02T13:21:55.069Z
---

# ブラジルDREXタイムライン 2024-2026



この項目は[[fintech/INDEX|fintech index]]の配下に位置づけられ、地域別の[[fintech/latin-america-cbdc-stablecoin-dollarization]]項目がDREXの仕組みとPixとの相互作用を参照する際の、**ブラジル固有の深掘り**である。比較文脈として、[[fintech/cbdc-multi-tier-architecture-overview]]の多層CBDCアーキテクチャ、[[fintech/institutional-stablecoin-deposit-token-thesis]]のトークン化預金に関する制度論、[[fintech/mbridge-bis-multi-cbdc-overview]]および[[fintech/bis-project-agora-overview]]のBISクロスCBDC相互運用面と併読する。

> [!info] 要約
> **DREX**は、**Banco Central do Brasil (BCB)**が2020以降進めるブラジルCBDCプロジェクトの運用名である。2026-05 時点では、複数資産・複数参加者に拡張した**Pilot 2**が進行中で、閉ループの準備金移転とDvPを扱った**Pilot 1**は2024に完了した。基盤は二層アーキテクチャの**Hyperledger Besu**許可型ネットワークで、BCBが認可金融機関にホールセールCBDCを発行し、それらの機関が最終顧客向けに**トークン化預金**を発行する。DREXは**リテールCBDCトークンではない**ことが明確にされており、リテール面はPix即時決済レールと相互運用する商業銀行のトークン化預金である。プログラマブル・マネーのユースケース（DvP、エスクロー、条件付支払い、スマートコントラクトを介した貿易金融）が採用の触媒である。同じリテール面では、DREXの外側で動く小規模ながら成長する**独立系BRLペッグ・ステーブルコイン**（BRLA Digital、Mercado Bitcoin MBRL）も競合する。

## DREXの概要

DREXは**二層トークン化プラットフォーム**である。BCBが認可銀行と認可決済機関にホールセールCBDCトークンを発行し、それらの機関が顧客向けにBRL建ての**トークン化預金**を発行する。最終利用者が取引するのはトークン化預金であり、BCB発行トークンではない。この構造は、Bahamas Sand Dollarのような単一トークン型リテールCBDCよりも、日本の信託型EPIモデル（[[fintech/jp-trust-type-sc-architecture]]および[[fintech/japan-epi-three-types-overview]]参照）や香港のトークン化預金実証に近い。

## 起源と名称

- **2020-08**: BCBがCBDC調査を開始し、Real Digital発行の意向を示した。
- **2022**: BCB技術職員、学界、産業界のワーキンググループが初期要件を作成した。
- **2023-03**: プラットフォームが正式に**DREX**（Digital REal eXchange / Digital Real）と命名され、BCBが設計文書を公表した。
- **2023-05**: BCBが技術スタックとして、企業向けEthereum互換の許可型ブロックチェーン実装である**Hyperledger Besu**を選定した。
- **2023-Q4**: Pilot 1 参加者のオンボーディングが始まった。
- **2024**: Pilot 1 の閉ループ試験。
- **2025**: Pilot 1 が完了し、Pilot 2 の設計とオンボーディングへ移行。
- **2026**: Pilot 2 は参加者と資産クラスを拡大して進行中。

### 二層発行モデル

| レイヤー | 発行体 | Token | 保有者 |
|---|---|---|---|
| ホールセール（Tier 1） | BCB | DREXホールセールCBDC | 認可金融機関 |
| リテール（Tier 2） | 認可機関 | BRL建てトークン化預金 | 最終顧客（企業・個人） |

最終利用者はBCB発行トークンを直接保有しない。銀行がBCBで保有するホールセールCBDCに対して1:1 で償還可能な商業銀行のトークン化預金を保有する。これは[[fintech/cbdc-multi-tier-architecture-three-paradigms]]で整理される構造、および[[fintech/cbdc-multi-tier-architecture-tradeoffs]]の政策トレードオフ分析と同じ建付けである。

### 技術スタック

- **ネットワーク**: Hyperledger Besu（許可型、EVM互換）。
- **コンセンサス**: 既知のバリデータで構成される許可型ネットワークに適したIBFT 2.0 （Istanbul Byzantine Fault Tolerance）系。
- **プライバシー**: Pilot 1 では暗号化残高、選択的開示、AztecやAnonymous Zetherに類するプリミティブなど、プライバシー保護機構を検証した。EVMが標準では公開性を持つため、これは既知の設計課題である。
- **スマートコントラクト**: Solidity互換。承認済み参加者による許可型デプロイ。
- **本人確認 / KYC**: BCBの参加者認可と結びつき、オンチェーンIDは参加者のオフチェーンKYCデータベースに接続される。

### Pilot 1 (2024)

**範囲**: 選定された参加者間の閉ループ試験。資産クラスは以下の通り。
- ホールセールCBDC（BCB発行）。
- 参加銀行が発行するトークン化預金。
- トークン化された連邦公債（Tesouro Nacionalとの協力による国債）。
- Delivery-versus-Payment（DvP）の試験ケース。

**参加者**（2023-2024のBCB公表資料で名称が示された主体）: Itaú、Bradesco、BTG Pactual、Santander Brasil、Banco do Brasil、Caixa Econômica Federalなどの主要ブラジル銀行、NubankやInterなどのフィンテック、決済システム関連主体、BCB、Tesouro Nacionalを含むコンソーシアム。

**成果**（BCBの公開コミュニケーションによる）:
- トークン化預金とトークン化連邦債の間のDvPを検証。
- スマートコントラクトを介したエスクローと条件付支払いのシナリオを検証。
- **プライバシー・アーキテクチャが中心的な未解決課題として特定された**。Pilot 1 は、リテール展開に責任を持てる水準に達するには、EVMの透明性に対する実質的なプライバシー層の設計が必要であることを明確にした。

### Pilot 2 (2025-2026)

**拡張軸**:
- 参加者の拡大（銀行、決済機関、フィンテックの追加）。
- 資産クラスの拡大（民間証券や貿易債権を含む追加トークン化資産）。
- より複雑なユースケース（クロスアセットDvP、エスクロー、プログラマブル支払い自動化）。
- プライバシー・アーキテクチャ作業の継続。

**2026-05時点の状況**: Pilot 2 は**進行中**であり、本番開始日は公表されていない。BCBは、リテール顧客データに許容される水準でプライバシー課題が解決されるまで、本番移行しないと一貫して強調している。

## Pix連携 · 構造上のアンカー

**Pix**はBCBが2020-11, に開始した即時決済システムであり、数億口座が利用し、日次で数億件の取引を処理する。Pixはすでに以下を実現しているため、DREX採用にとって**最も重要な制約条件**である。

- 24/7 の即時決済。
- リテール費用がゼロまたはほぼゼロ。
- QRコードによる加盟店での広範な受容。
- 銀行とフィンテックの同等なアクセス。

この軸でPixと競争するリテールCBDCには、プログラマビリティ、DvP、クロスアセット決済を追加しない限り**価値提案がない**。DREXがPixと競争するリテールCBDCではないと明示される理由はここにあり、DREXは次のように設計されている。

1. Pixの**上流**に位置するホールセール準備金移転レールとなる。
2. Pixがネイティブに持たない**プログラマビリティ**（スマートコントラクト条件、DvP、エスクロー）を追加する。
3. リテール側で**Pixと相互運用**する。DREXを介した取引では、現金側をPixまたはDREX上のトークン化預金移転で決済できる。

ブラジルのステーブルコイン・プロジェクトに対してPixが設定する競争基準は、インドネシアのQRIS（[[fintech/indonesia-ovo-stablecoin-route]]および[[fintech/southeast-asia-stablecoin-regulatory-landscape]]参照）やメキシコのCoDi（[[fintech/latin-america-cbdc-stablecoin-dollarization]]参照）と同じ力学である。

## 対象となるプログラマブル・マネーのユースケース

| ユースケース | 説明 | DREXが有効な理由 |
|---|---|---|
| トークン化連邦債のDvP | Tesouro Nacional債をトークン化し、現金側をトークン化預金で処理 | 現行T+1/T+2 に対するアトミック決済 |
| 不動産エスクロー | 権利移転まで資金をスマートコントラクトでロック | 仲介者を減らし、条件をプログラム可能にする |
| 貿易金融 | 信用状、請求書、支払いを自動化 | 文書処理コストと紛争期間を短縮 |
| 条件付支払い | オラクルで検証された事象に応じて支払いを解放 | Pixでは実現しにくい新ユースケース |
| 給与自動化 | ストリーミングまたは予定払い | 新ユースケース |
| クロスアセットDvP | トークン化商品とトークン化預金の交換 | 新ユースケース |

このパターンは、[[fintech/institutional-stablecoin-deposit-token-thesis]]が論じる**機関向け / ホールセールの価値提案**と、より広い**B2Bステーブルコイン成長**の軌道（[[fintech/stablecoin-crossborder-b2b-growth]]）に合致する。

## 競合する民間BRLステーブルコイン・セグメント

DREXは、DREXの外側で動く小規模ながら成長する**独立系BRLペッグ・ステーブルコイン**領域と併存している。

### BRLA Digital

- BRLA Digitalがブラジルの銀行パートナーと発行するBRLペッグ・ステーブルコイン。
- B2B決済と暗号資産ネイティブのリテールフローを対象とする。
- Marco Legal das Criptomoedas（Law 14.478 / 2022）の枠組みにより、BCB監督下の規制対象主体として運営される。
- Ethereum、Polygon、その他EVM互換チェーンを含むクロスチェーン展開を持つ。

### Mercado Bitcoin MBRL

- Mercado Bitcoin（MB）はブラジル最大のデジタル資産取引所であり、BRLA基盤を活用したBRLペッグ・トークン（MBRLと呼ばれることが多い）を試験してきた。
- リテール取引ペアの決済とB2Bオンランプ / オフランプを支える設計である。

### 民間BRLステーブルコインがDREXと併存する理由

| 軸 | DREXトークン化預金 | 民間BRLステーブルコイン |
|---|---|---|
| 発行体 | 認可銀行 | 非銀行またはハイブリッド発行体 |
| ネットワーク | 許可型Hyperledger Besu | パブリックEVMチェーン |
| DeFiとの相互運用 | なし（許可型） | あり |
| クロスボーダー統合 | BCBおよびBISの枠組み経由 | パブリックチェーン流動性経由 |
| プログラマブル・マネーの深さ | 強い（スマートコントラクト） | 強い（スマートコントラクト） |
| リテールUX | 参加銀行アプリに紐づく | Web3 ウォレットと暗号資産ネイティブアプリ |

2つのレールは異なる利用者層に向いている。DREXは**規制下のホールセール用途と銀行顧客向けのプログラマブル支払い**で優位に立つ。民間BRLステーブルコインは**DeFiネイティブおよび暗号資産ネイティブ**用途で優位に立つ。[[fintech/issuer-distributor-incentive-realignment-50-50-model]]における**発行体・分配者分離**との経済的類似性は構造的である。

## クロスCBDC相互運用の接点

ブラジルのBCBは、DREXの長期的な相互運用性に影響する複数のクロスCBDC構想に関与している。

- **BIS Innovation Hub Eurosystem Centre and Americas Centre** — 標準設定作業へのブラジルの関与。
- **Project mBridge**（PBoC、HKMA、BoT、CBUAE、以前はSAMA。BoTは2024に離脱）— [[fintech/mbridge-bis-multi-cbdc-overview]]参照。ブラジルは正式参加者ではないが、アーキテクチャを観察している。
- **Project Agora**（BIS + 民間銀行、複数CBDC + トークン化商業銀行マネー）— [[fintech/bis-project-agora-overview]]および[[fintech/bis-project-agora-vs-mbridge]]参照。ブラジルの参加水準は観察的と示されており、完全統合されればDREXのクロスボーダー姿勢を形作る。
- **Project Ensemble**（HKMA + 民間銀行、トークン化マネー + トークン化資産）— [[fintech/bis-project-ensemble-overview]]および[[fintech/bis-project-ensemble-vs-mbridge-dual-track]]参照。DREXの設計パターンは、mBridgeのホールセールCBDC限定アプローチよりも、Ensembleのトークン化預金アーキテクチャに近い。
- **Project Nexus**（BIS主導の即時決済連結）— ラテンアメリカ回廊への拡張は、Pixのクロスボーダー利用ケースに直接影響する。

## タイムライン要約

| 年 | マイルストーン |
|---|---|
| 2020-08 | BCBがCBDC調査を開始 |
| 2022 | ワーキンググループが要件を作成 |
| 2023-03 | プラットフォームをDREXと命名 |
| 2023-05 | Hyperledger Besuを選定 |
| 2023-Q4 | Pilot 1 のオンボーディング |
| 2024 | Pilot 1 の閉ループ試験が完了 |
| 2025 | Pilot 2 の設計と初期オンボーディング |
| 2026 | Pilot 2 が進行中（現在） |
| 2027+ | プライバシー解決を条件とする本番開始の可能性 |

## 関連項目

- [[fintech/INDEX|Wiki Index]]
- [[fintech/latin-america-cbdc-stablecoin-dollarization|Latin America CBDC + USD-SC dynamics]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|SE Asia regulatory landscape]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC multi-tier architecture]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC three paradigms]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC tradeoffs]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|Institutional SC + deposit-token thesis]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge multi-CBDC]]
- [[fintech/bis-project-agora-overview|BIS Project Agora]]
- [[fintech/bis-project-ensemble-overview|BIS Project Ensemble]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B SC cross-border growth]]
- [[fintech/japan-stablecoin-regulatory-landscape|Japan SC regulatory landscape]]
- [[fintech/jp-trust-type-sc-architecture|JP trust-type SC architecture]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## 出典

- Banco Central do Brasil — DREXプロジェクトページ（英語・ポルトガル語）、プラットフォーム設計文書、Pilot 1 成果コミュニケーション、Pilot 2 発表。
- Banco Central do Brasil — Pixシステム文書および統計。
- Banco Central do Brasil — Marco Legal das Criptomoedas（Law 14.478 / 2022）の実施通達およびVASPに関するBCB / CMN決議。
- Banco Central do Brasil — DREXアーキテクチャに隣接するOpen Banking / Open Finance文書。
- Bank for International Settlements — DREXに言及するワーキングペーパー、Project Agora、Project Ensemble、Project Nexus、mBridge資料。
