---
source: fintech/circle-usdc-stablecoin
source_hash: 16473a2c8a098dd7
lang: ja
status: machine
fidelity: ok
title: "Circle USDC · コンプライアント・ホワイトサークル基準品 · NYSE 上場発行体 · CCTP / BUIDL インターロック"
translated_at: 2026-06-02T13:21:55.077Z
---

# Circle USDC · コンプライアント・ホワイトサークル基準品 · NYSE 上場発行体 · CCTP / BUIDL インターロック

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。white-circle / grey-circle の対比は [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]] と [[fintech/tether-business-model-short-treasury-yield|Tether USDT エコノミクス]]、USDC が de facto の white-circle benchmark となった規制枠組みは [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]] とあわせて読む。

> [!info] 要約
> Circle Internet Financial は USDC と EURC の唯一の発行体。2026-Q2 時点で USDC 流通量は **$65B+**（全市場第 2 位、USDT に次ぐ）、EURC は ~€350M。Circle は 2025-06 に **NYSE IPO** 完了（ticker CRCL）、IPO 価格 $31、初日 ~170% 上昇、2026-05 時価総額は $30-40B 帯で推移。準備は 100% 短期米国債 + 現金で、主体は **Circle Reserve Fund (CRCL)**、BlackRock 子会社のアドバイザリー + BNY Mellon カストディ。USDC は GENIUS Act §501 コンプライアント・ホワイトサークルの「ベンチマーク実装」: CCTP V2 が 18+ チェーンでネイティブ burn-and-mint、BUIDL とのインターロックで yield を吸収、Coinbase との分配 50-50。EURC はユーロ側で MiCA EMT ライセンスを保有する唯一の規模ある非銀行系ユーロ stablecoin。

## 主要事実

- USDC 流通量 **$65B+**（2026-Q2 月平均） · 世界第 2 位の stablecoin、パブリックチェーン上の米ドル stablecoin 流通量の ~30% を占有 ^[extracted]
- EURC 流通量 ~ **€350M**（2026-Q2） · MiCA EMT 取得、主要チェーンは Ethereum / Solana / Stellar / Avalanche / Base ^[extracted]
- 発行エンティティ: Circle Internet Financial Inc.（Boston） · 2013 設立（Jeremy Allaire / Sean Neville） ^[extracted]
- **NYSE IPO 2025-06** · ticker **CRCL** · IPO 調達 ~$1.1B · IPO 後のバリュエーション ~$24B → 2026-05 時価総額 $30-40B 帯 ^[extracted]
- 準備 100% 短期米国債 + 現金 · 主体 **Circle Reserve Fund**（USDXX）BlackRock 運用 · BNY Mellon カストディ ^[extracted]
- 準備の月次透明性レポート + Deloitte attestation · CUSIP 単位で保有内容を公開 ^[extracted]
- **CCTP V2** が 18+ チェーンでネイティブ burn-and-mint をサポート（Ethereum / Solana / Base / Arbitrum / Avalanche / Optimism / Polygon / Noble / Arc など） ^[extracted]
- Coinbase との分配契約: USDC 準備 yield を **50-50 で按分**（Coinbase 2025 USDC 収入貢献 ~$1B） ^[extracted]
- 規制: 米国 MTL 全州ライセンス + NY DFS BitLicense + EU MiCA EMT + Singapore MPI + Japan SBI VC Trade で取扱開始 ^[extracted]

## メカニズム / 仕組み

USDC の中核モデル = **「ホワイトサークル・コンプライアンス・ベンチマーク」**: 100% 短期米国債準備 + 月次監査 + Reserve Fund の隔離 + 月次の CUSIP-level 公開レポート。これは [[fintech/tether-business-model-short-treasury-yield|Tether USDT（40 人 / グレーサークル）]] との対照を成す — Circle は公開エンティティ、上場企業、すべての準備が公開;Tether は私企業、準備は四半期 attestation のみ、リテールに対する強制償還不可。USDC のエコノミック・モデルは [[fintech/stablecoin-revenue-split-economics|stablecoin 金利分配エコノミクス]] と直接対応する: 発行体（Circle）が稼ぐのは準備 yield の ~50% のみ、**残り半分はディストリビューション・インセンティブとして Coinbase へ**、これは [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 再配置パラダイム]] のサンプル・ケースであり、PayPal × Paxos PYUSD（Paxos は 80-90% を譲渡）とは強度の差を形成する。

クロスチェーン・アーキテクチャ上、USDC は [[systems/cctp-v2-overview|CCTP V2]] により「1 つの USDC、複数チェーン」を実現: 全パブリックチェーン上の USDC はすべて Circle が直接 mint するネイティブ資産で、ラップ版は存在せず、クロスチェーン時はソースチェーンで burn + Circle Attestation Service が署名 + 目的チェーンで mint、V2 fast transfer のレイテンシは <1 秒。**準備 - 用途のインターロック**: Circle は [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] が公的に認める初期最大級の機関 LP の 1 つで、USDC 準備の一部を BUIDL 経由で保有し MMF yield を取得、「USDC ↔ BUIDL ↔ UST」[[fintech/circular-reserve-asset-flywheel-overview|準備資産インターロック・フライホイール]] の鍵となるノードを形成する。

## 起源と進化

2013 Circle 設立（BTC ウォレット / 送金を提供）。2015-2018 ピボット → 2018-10 USDC を Coinbase と共に **Centre Consortium** 経由で共同発行（Centre は JV ガバナンス・エンティティ）。**2020-2023 USDC 第 1 波スケール化**: 2021-09 流通量が初めて $30B 突破;2022 Terra/LUNA 崩壊後、USDC が短期的に USDT 売り圧を吸収。**2023-03 SVB 危機**: Circle のシリコンバレー銀行への準備エクスポージャー $3.3B、USDC が一時的に $0.87 にデペッグ、3 日で回復、**事件後 Circle は銀行エンドを大幅縮小し、準備を完全に Circle Reserve Fund + BNY Mellon カストディに集中**。2023-08 Circle が Centre 全株式を取得 → USDC ガバナンスが独立、Coinbase は Circle の戦略株主 + 分配パートナーへ転換。**2024 EU MiCA EMT 取得 → EURC が MiCA 枠組下で最初のユーロ EMT に**。**2025-06 NYSE IPO**: Circle は SPAC ではなく直接 IPO（2022 SPAC 経路は流産）、初日 ~$31 → 終値 ~$84、これは [[fintech/onchain-finance-vs-crypto-bifurcation|onchain finance vs crypto 分流]] における「コンプライアンス優先」路線が資本市場の支持を得たマイルストーン・イベント。2025-09 [[fintech/genius-act-501-denylist-mandate|GENIUS Act 施行]] → USDC は §501 資格に直接適合、構造調整不要。2026-Q1 [[systems/cctp-v2-overview|CCTP V2]] が Arc / Solana fast finality + Hooks（クロスチェーン + 自動コントラクト呼び出し）に拡張。2026-Q2 USDC 流通量 $65B+、USDT $145B との差は 5× から 2.3× に縮小。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD]]
- [[fintech/tether-business-model-short-treasury-yield|Tether グレーサークル]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin 金利分配エコノミクス]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|50-50 再配置パラダイム]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[systems/cctp-v2-overview|CCTP V2]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
<!-- /wiki-links:managed -->

## 出典

- https://www.circle.com/transparency — Circle Reserve Fund monthly transparency + Deloitte attestation
- https://www.circle.com/usdc — USDC product / supply page
- https://developers.circle.com/stablecoins/cctp-getting-started — CCTP V2 developer docs
- https://investor.circle.com/ — Circle Internet Group investor relations (post-IPO)
- https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=circle — Circle SEC EDGAR filings
- https://www.bnymellon.com/us/en/insights/all-insights/circle-reserve-fund.html — BNY Mellon custodial role
