---
source: fintech/tokenized-mmf-wisdomtree-hashnote
source_hash: 7993916faa2000fa
lang: ja
status: machine
fidelity: ok
title: "トークン化 MMF 拡張 · WisdomTree WTGXX × Hashnote USYC · BUIDL 以外の第二梯団マトリックス"
translated_at: 2026-06-02T14:01:20.912Z
---

# トークン化 MMF 拡張 · WisdomTree WTGXX × Hashnote USYC · BUIDL 以外の第二梯団マトリックス

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置する。第一梯団のリーダーである [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]、トークン化 MMF / トークン化 RWA 全体のマトリックスである [[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI]] / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]、さらにステーブルコイン利回りインフラとしてトークン化 MMF が担うシステム上の役割を示す [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]] とあわせて読む。

> [!info] 要約
> トークン化 MMF 市場は 2026-Q2 で **$8B AUM** 総規模を突破したが、**集中度は依然極めて高い**：BUIDL（$2.58B）+ BENJI（$800M）+ ONDO OUSG（$600M）+ FOBXX（Franklin OnChain US Government MMF）が 60%+ を占有。**第二梯団**：WisdomTree **WTGXX**（WisdomTree Prime ウォレット内でトークン化）+ Hashnote **USYC**（2024-12 Circle に買収、2025 年に Circle の USDC yield 製品 USDC.YS に統合）+ Superstate USTB + Centrifuge / Backed 等の小型ソリューション。本エントリは当該第二梯団の「比較マトリックス / 経路分類」、**コアクエスチョン = 「BUIDL が主導だが、2 位、3 位、4 位は誰か」**および Circle が Hashnote を買収して「トークン化 MMF を直接 USDC の yield モジュールとする」構造的影響について。

## 主要事実

- トークン化 MMF 総市場 ~**$8B+** AUM（2026-Q2）· 2024-Q1（~$1B）から 8 倍成長 ^[extracted]
- 第一梯団：BUIDL **$2.58B**（Moody's Aaa-mf）+ BENJI **$800M** + ONDO OUSG **$600M** + FOBXX（Franklin）^[extracted]
- 第二梯団：**WisdomTree WTGXX**（~$200M、主に WisdomTree Prime ウォレット内）、**Hashnote USYC**（~$1B ピーク、2024-12 Circle に買収）、**Superstate USTB**（~$150M）、Centrifuge / Backed 等 ^[extracted]
- **2024-12 Circle が Hashnote を買収**（~$200M+ 現金 + 株式）→ USYC が Circle 製品ラインへ統合 → 2025-Q1 に **USDC.YS** をローンチ（USDC + yield、USYC が yield エンジン）^[extracted]
- WisdomTree Prime：WisdomTree 自営のリテールトークン化資産ウォレット + brokerage、SEC 規制下で WTGXX のオンチェーン share を提供 ^[extracted]
- Moody's Aaa-mf 格付：BUIDL + FYHXX（Fidelity）が同日（2026-05-13）に付与 · WTGXX / USYC / FOBXX の格付経路は異なる ^[extracted]
- 規制経路：BUIDL = Reg D 506(c) プライベート、WTGXX = 2a-7 登録公募（リテール購入可）、USYC = Reg D プライベート（機関）^[extracted]

## 仕組み / 作動メカニズム

第二梯団トークン化 MMF のコア差別化 = **BUIDL が既に占領した「機関 + プライベート + Reg D」メイン戦場を回避し、リテール / チェーンネイティブ / yield-bearing-stablecoin 等の差別化経路を辿る**：

| 方案 | 発行体 | 規制経路 | 主要配信 | 差別化 |
|---|---|---|---|---|
| BUIDL | BlackRock + Securitize | Reg D 506(c) プライベート | 機関 + SC issuer 準備金 | 主導、「yield インフラ」 |
| BENJI / FOBXX | Franklin Templeton | 2a-7 登録公募 | Franklin Prime ウォレット + Coinbase | リテール親和的、マルチチェーン命名 |
| ONDO OUSG | Ondo Finance | Reg D | クリプトネイティブ機関投資家 | DeFi 統合が深い |
| **WTGXX** | WisdomTree | 2a-7 登録公募 | WisdomTree Prime ウォレット | リテールフレンドリー + brokerage 一体 |
| **USYC** | Hashnote → Circle（2024-12）| Reg D | USDC yield 製品に統合 | 直接「USDC + yield」統合を実現 |
| Superstate USTB | Superstate | Reg D | クリプトネイティブ機関投資家 | 初期段階 |

WisdomTree Prime + WTGXX は **「伝統 asset manager が MMF を直接トークン化 + 自営リテールウォレット」** 経路、[[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton]] をシミュレートするがリテールをより前置している。**Hashnote USYC の特殊性**：USYC は 2024 年時点で crypto-native asset manager（元 Cumberland チーム）が発行したトークン化 MMF、主に [[fintech/frax-frxusd-defi-stablecoin|Frax]] / Ethena USDtb / Sky USDS 等の DeFi プロトコルに準備金として使用されていた。**2024-12 Circle が ~$200M で Hashnote を買収** = Circle が「純粋な SC 発行体」から「SC + yield engine 一体」への重要な転換を完了し、[[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] と直接競合する関係を形成（Circle が yield infra を内製化 vs Circle が BUIDL を LP として保有する旧経路）。

USDC.YS（2025-Q1 ローンチ）= USDC + USYC yield の製品パッケージ、**GENIUS §501「SC は直接利息支払い不可」制限を回避する**方法 —— USDC 自体は依然 yield-bearing ではないが、ユーザーはワンクリックで「USDC 保有 + 同時に USYC share 取得」の製品パッケージを購入でき、実効果は yield-bearing USDC、[[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]] モデルと相互にミラー関係。

## 起源と進化

2022-2023 RWA トークン化第 1 波（MakerDAO が DAI 準備金を short UST に配置）、ただしシェアは依然 OUSG / USDM（Mountain Protocol）等の小型ソリューションが主体。**2024-03 BUIDL ローンチ** = 業界の転換点、BlackRock がトークン化 MMF を機関メイン戦場に押し上げた。2024-Q3 WisdomTree Prime が WTGXX のオンチェーン share を公表（主に Ethereum 上）。**2024-12 Circle が Hashnote を買収** = 第 2 の重要イベント、Circle が「yield engine」を内製化し、BUIDL 依存リスクを解消。2025-Q1 Circle が **USDC.YS** をローンチ = USDC + USYC のワンクリック購入製品。2025-Q3 Superstate USTB が Solana をまたぎ、ONDO OUSG と DeFi 統合で競合。**2025-09 GENIUS Act 施行** → 「SC は直接利息支払い不可」により yield-bearing 経路は「SC + 独立 MMF share」二位一体製品パッケージ構造を辿る必要、**第二梯団トークン化 MMF を直接利する**（コンプライアンス yield-bearing 製品の必須コンポーネントとなる）。2026-05-13 BUIDL + FYHXX が同日 Moody's Aaa-mf 取得、第一梯団がさらに制度化。2026-Q1 市場全体で $8B+ AUM、依然初期段階（vs 米国 MMF 総市場 $7T）。

## 関連
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton BENJI]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance OUSG/RUSDY]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造]]
<!-- /wiki-links:managed -->

## 出典

- https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx — WisdomTree WTGXX 製品ページ
- https://www.wisdomtree.com/insights/wisdomtree-prime — WisdomTree Prime ウォレット紹介
- https://www.usyc.com/ — USYC 製品ページ（Hashnote 発、現 Circle 傘下）
- https://www.hashnote.com/ — Hashnote（Circle 子会社）ホームページ
- https://www.circle.com/blog/circle-acquires-hashnote — Circle の Hashnote 買収公式公表
- https://www.coindesk.com/business/2024/circle-hashnote-acquisition-usyc — CoinDesk 報道
- https://www.sec.gov/Archives/edgar/data/wisdomtree-prime — WisdomTree Prime SEC 申請
