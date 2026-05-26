---
title: JPMorgan Onyx / Kinexys · 銀行内部ホールセール・ネットワーク · Liink × JPM Coin × Onyx Digital Assets
aliases: [jpm-onyx-wholesale-network, JPM Onyx, Onyx by JP Morgan, Kinexys wholesale, Liink, Onyx Digital Assets, JPM Coin]
domain: fintech
created: 2026-05-25
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-25
confidence: certain
tags: [fintech, wholesale-settlement, jpmorgan, kinexys, onyx, liink, jpm-coin, tokenized-deposit, single-bank-network]
status: active
sources:
  - https://www.jpmorgan.com/kinexys
  - https://www.jpmorgan.com/onyx
  - https://www.jpmorgan.com/kinexys/news
  - https://www.jpmorgan.com/insights/payments/kinexys
  - https://www.theblock.co/post/jpmorgan-onyx-kinexys-rebrand
---

# JPMorgan Onyx / Kinexys · 銀行内部ホールセール・ネットワーク · Liink × JPM Coin × Onyx Digital Assets

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] for the retail-deposit-token sibling product, and with [[fintech/fnality-wholesale-settlement|Fnality]] / [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] for the multi-bank consortium contrast that Onyx-Kinexys deliberately rejects.

> [!info] TL;DR
> JPMorgan Onyx(2020 創設、**2024-11 Kinexys に改名**)は JPM 自営のホールセール決済 / トークン化資産ネットワークであり、3 つの主要プロダクトを含む:**Liink**(1100+ 銀行間メッセージング・ネットワーク、SWIFT 代替)、**JPM Coin**(内部ホールセール決済トークン、JPM 顧客間のみ流通、累計 $1.5T+ 処理)、**Onyx Digital Assets**(intraday repo + tokenized securities)。Kinexys は日次 **$5B+** を処理、累計 **$1.5T+**、180+ 機関顧客。**単一銀行自営**が [[fintech/fnality-wholesale-settlement|Fnality]](20+ 銀行コンソーシアム)/ [[fintech/partior-jpm-dbs-temasek-consortium|Partior]](4 主要株主コンソーシアム)路線との決定的差異。JPMD(2025-11 Base 稼働 + 2026-01 Canton 移行)は Kinexys の「外部公開チェーン流通」への延伸であり、ホールセール Onyx ネットワークと相補的関係にある。

## Key facts

- Kinexys 日次処理量 **$5B+** ≈ USDC グローバル日次の 30-40%(2026-Q1)^[extracted]
- 累計処理量 **$1.5T+**(2024-11 Kinexys 改名から起算)^[extracted]
- 3 モジュール:**Liink**(銀行間メッセージング 1100+ 銀行)+ **JPM Coin**(ホールセール決済)+ **Onyx Digital Assets**(intraday repo + tokenized securities)^[extracted]
- 複数通貨:USD / EUR / GBP + 2026-Q2 SGD 追加 ^[extracted]
- 顧客:180+ 機関(Siemens, BlackRock, Goldman, Ant Group 等を含む)(2026-Q1)^[extracted]
- Onyx Digital Assets intraday repo:累計 $700B+(2026-Q1) · 1 日以下 repo のオンチェーン・マッチング ^[extracted]
- 技術スタック:Quorum(JPM 自社開発 Ethereum fork、後に ConsenSys に寄贈) → 2024-11 改名と同時に技術スタック・アップグレード ^[extracted]
- 2024-11 Onyx → Kinexys 改名 = TD 「ホワイトラベル」+ 多銀行参加の準備 ^[extracted]

## Mechanism / How it works

Onyx/Kinexys のコアモデル = **「単一銀行自営のフルスタック・ホールセール・ネットワーク」** —— JPM が決済資産(JPM Coin / JPMD)+ メッセージング層(Liink)+ 資産層(Onyx Digital Assets)+ 顧客関係(180+ 機関)+ 技術スタック(Quorum)+ 規制ライセンス(JPM 銀行ライセンスが全てをカバー)を同時に提供。これは [[fintech/fnality-wholesale-settlement|Fnality]](20+ 銀行コンソーシアム)と根本的に対比される:**JPM は複数株主を調整する必要がない → 意思決定が速い → 4 年で累計 $1.5T が Fnality 稼働 1 年の規模を上回る**;一方、JPM はネットワークを「非 JPM 顧客」に拡張できない(Fnality / Partior は任意のメンバー銀行顧客を接続可能)、これは [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]] における「スピード vs スケール」の根本的トレードオフである。

3 モジュールの機能分担:
- **Liink**(前身 IIN, Interbank Information Network)= 銀行間メッセージング層、1100+ 行が接続、**価値を伝送せず、KYC/compliance 情報のみ交換**(制裁アドレス照会 / beneficiary confirmation 等)、[[systems/swift-iso-20022-overview|SWIFT MT 系列メッセージ]] に類似するがブロックチェーンを下層に使用
- **JPM Coin**(2019 起源)= ホールセール決済トークン、**JPM 顧客間のみ**で JPM 商業預金を記帳に使用(TD に類似するが JPM 内部限定)、累計 $300B+ → Kinexys 改名後累計 $1.5T+
- **Onyx Digital Assets** = オンチェーン intraday repo + tokenized treasuries / MMF([[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] と IM 用途で連携)

[[fintech/jpmorgan-jpmd-coin|JPMD]] との関係:JPMD = Kinexys 内部決済トークンの**外部公開チェーン流通版**(2025-11 Base 稼働、2026-01 Canton 移行)。内部 JPM Coin(Quorum プライベートチェーン、JPM 顧客のみ)+ 外部 JPMD(Base/Canton 公開チェーン、JPM 顧客 + 一部対手方)は**同一預金の二つのオンチェーン形態**であり、JPM が統一的に管理する。

## Origin & evolution

2016 IIN(Interbank Information Network)スタート = JPM 初期のブロックチェーン実験、銀行間メッセージング層。2019-02 JPM Coin 公開 = G-SIB として初の公開「銀行内部ステーブルコイン」、内部テストで $300B+ 累計(2019-2024)。**2020-10 Onyx by JP Morgan が正式に商用化** = IIN + JPM Coin + Onyx Digital Assets を単一の商用ブランドに統合。2022-Q3 Onyx Digital Assets が Goldman と共同で tokenized repo を稼働、累計 $700B+。**2024-11 Onyx → Kinexys 改名**:JPM の公式コメントは「TD ホワイトラベル + 多銀行参加の準備」、Kinexys は「JPM 内部」から「JPM 主導だがオープン」なネットワークへの転換を示す。2025-11 [[fintech/jpmorgan-jpmd-coin|JPMD]] on Base = 内部決済トークンを初めて public L2 に展開。2026-01 JPMD が [[systems/canton-overview|Canton Network]] へ移行([[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] / Goldman と共通スタック + プライバシー)。2026-Q2 Kinexys 累計 $1.5T+ = [[fintech/partior-jpm-dbs-temasek-consortium|Partior]] と同時期同オーダー、ただし JPM は単一発行体、Partior は 4 主要株主コンソーシアム。2026-05-13 JLTXX 稼働 + Anchorage 追加投資 → USAT(US Anchorage TD)路線を示唆。

## Counterpoints

Onyx/Kinexys の「単一銀行自営」モデルはネットワーク効果に天然の制約をもたらす——非 JPM 顧客には参加への強い動機がない(Liink 1100+ 行が接続するのは SWIFT 代替価値であり、JPM Coin ではない)。[[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]] では「競合銀行は自行の預金を JPM のチェーンに移したがらない」と明示されている。**Fnality(中央銀行準備金)と Partior(アジア多銀行)が異なる地域でホールセール市場の中立シェアを切り取る**ため、Kinexys の市場上限は JPM 自社顧客の預金規模(~$2.4T deposits)に依存する。Quorum 技術スタックはプライベートチェーンで、**public L2 / Canton へのクロスドメインは全て JPM 自社開発のブリッジに依存**し、[[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極]] において独立したトークン経済やコミュニティを持たない。Kinexys の法的位置づけは「TD ≠ SC」 → GENIUS §501 の直接的制約を受けないが、OCC / FRB が将来「TD は public L2 を越えてはならない」と明確化した場合、JPMD on Base / Canton は撤退を余儀なくされる。

## Open questions

Kinexys の 2030 予測収益 $7.2B は base-case であり、実際には「多銀行連邦が突破できるか」に依存する——現在の Liink 接続は主にパートナー銀行であり、**真の競合銀行(Citi / BofA / Wells Fargo)が Kinexys に加わるか**が、Kinexys が「JPM 専有」か「事実上の標準」かを決定する。Onyx Digital Assets と [[systems/canton-overview|Canton]] / DTCC Project Ion の tokenized securities 市場での役割分担は?Kinexys が JPM 本体から切り出して IPO する場合、2030 で $30-35B の予測だが、JPM 親会社が分離を受け入れるか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]]
- [[fintech/fnality-wholesale-settlement|Fnality]]
- [[fintech/partior-jpm-dbs-temasek-consortium|Partior]]
- [[fintech/multi-megabank-consortium-governance|複数大手銀行の連邦ガバナンス]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関 SC vs TD 論点]]
- [[fintech/tokenized-deposit-cumulative-volume-scale|TD 累計規模]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[systems/canton-overview|Canton Network]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]
<!-- /wiki-links:managed -->

## Sources

- https://www.jpmorgan.com/kinexys — Kinexys 公式ページ
- https://www.jpmorgan.com/onyx — Onyx 公式ページ(Onyx Digital Assets を含む)
- https://www.jpmorgan.com/kinexys/news — Kinexys ニュース
- https://www.jpmorgan.com/insights/payments/kinexys — JPM payment insights Kinexys 特集
- https://www.theblock.co/post/jpmorgan-onyx-kinexys-rebrand — The Block 改名関連報道
