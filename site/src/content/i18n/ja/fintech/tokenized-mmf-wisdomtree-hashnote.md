---
source: fintech/tokenized-mmf-wisdomtree-hashnote
source_hash: 264094ccb991b338
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "トークン化短期資産商品の分類 · WisdomTree WTGXX × Hashnote USYC × BUIDL"
translated_at: 2026-07-29T17:58:52.645Z
---
# トークン化短期資産商品の分類 · WisdomTree WTGXX × Hashnote USYC × BUIDL

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にある。より広いトークン化 MMF とトークン化 RWA の比較は [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]、[[fintech/franklin-templeton-stablecoin-migration|Franklin BENJI]] / [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]、ステーブルコインの利回りインフラとしてトークン化 MMF が果たす構造的役割は [[fintech/circular-reserve-asset-flywheel-overview|準備資産相互ロックのフライホイール]] とあわせて読む。商品順位には明示された日付、scope、共通の測定手法が必要であり、ここでは順位を付けない。

> [!info] 要約
> 「トークン化 MMF」と呼ばれる市場には、米国登録 MMF、1940 Act 登録ファンド、私募ファンド、米国外のトークン化商品が混在する。WTGXX は登録 money market fund、BUIDL は Form D を提出した私募ファンドであり、同じ法的分類ではない。Circle は 2025-01-21 に Hashnote / USYC の買収を発表したが、買収価格は公表していない。

## 主要事項

- 残高順位や市場規模はスナップショット日と集計定義で変わるため、商品公式資料と同一日の市場データで比較する。
- **2025-01-21 Circle が Hashnote / USYC の買収を発表**。公表資料は取得価格を開示していない。^[Circle press release]
- WisdomTree は WTGXX の商品資料と WisdomTree Prime のウォレット案内を公開している。アクセス資格、手数料、償還、対応地域は現行資料で確認する。
- BUIDL は SEC Form D を提出した商品であり、登録 MMF と同一の法的分類として扱わない。
- USYC の商品条件は USYC / Hashnote / Circle の現行資料で確認し、買収発表から未公表の統合条件を推定しない。

## 仕組み / 動作

比較時は商品名ではなく、登録 / 私募根拠、投資家適格性、償還、記録管理、基礎資産を確認する。下表は [WTGXX 公式資料](https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx)、[Circle の Hashnote 買収発表](https://www.circle.com/pressroom/circle-announces-acquisition-of-hashnote-and-usyc-tokenized-money-market-fund-alongside-strategic-partnership-with-global-trading-firm-drw)、[BUIDL Form D](https://www.sec.gov/Archives/edgar/data/2013810/000201439024000001/xslFormDX01/primary_doc.xml) に基づく。各商品の最新 offering documents を優先する。

| 商品 | 運営主体 | 公開資料で確認できる経路 | 主なアクセス面 | 比較上の注意 |
|---|---|---|---|---|
| BUIDL | BlackRock + Securitize | SEC Form D、Investment Company Act 3(c)(7) 私募 | 適格な機関投資家向け | 登録 MMF と同一分類ではない |
| **WTGXX** | WisdomTree | 1940 Act 登録 Treasury MMF、安定 NAV を目標 | WisdomTree Prime / Connect | ファンドは元本保証・FDIC 保険ではない |
| **USYC** | Hashnote / Circle | トークン化 money-market / Treasury 商品 | 機関・デジタル資産市場 | Circle の取得発表は 2025-01-21。価格非開示 |

WisdomTree Prime + WTGXX は、登録ファンド株式とデジタル記録・ウォレットを結ぶ経路である。**Hashnote USYC の特殊性**について、Circle の 2025-01-21 発表は Hashnote / USYC の取得と、USYC をデジタル資産市場の担保として拡大する意図を説明する。ただし非開示の取得価格や未公表の商品統合を補ってはならない。

USDC と USYC は法的・経済的に別商品である。両者の交換や担保利用を、利息禁止を「回避する」一体商品と表現するには、現行の商品条件と適用法の確認が必要である。

## 成り立ちと展開

複数のトークン化 Treasury / MMF 商品が拡大する中、Circle は 2025-01-21 に Hashnote / USYC の取得を発表した。市場規模、格付、チェーン数、商品統合は変動するため、比較日と一次資料を明示して更新する。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|ウィキ索引]]
- [[fintech/INDEX|フィンテック索引]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL]]
- [[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL SC issuer adoption]]
- [[fintech/franklin-templeton-stablecoin-migration|Franklin Templeton BENJI]]
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED]]
- [[fintech/ondo-finance-rusdy-adoption|Ondo Finance OUSG/RUSDY]]
- [[fintech/circle-usdc-stablecoin|Circle USDC]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備金相互ロックフライホイール]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS / sUSDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造]]
<!-- /wiki-links:managed -->

## Sources

- https://www.wisdomtree.com/investments/etfs/fixed-income/wtgxx — WisdomTree WTGXX 製品ページ
- https://www.wisdomtree.com/insights/wisdomtree-prime — WisdomTree Prime ウォレット紹介
- https://www.usyc.com/ — USYC 製品ページ（Hashnote 発、現 Circle 傘下）
- https://www.hashnote.com/ — Hashnote（Circle 子会社）ホームページ
- https://www.circle.com/pressroom/circle-announces-acquisition-of-hashnote-and-usyc-tokenized-money-market-fund-alongside-strategic-partnership-with-global-trading-firm-drw — Circle の Hashnote / USYC 買収発表
- https://www.sec.gov/Archives/edgar/data/2013810/000201439024000001/xslFormDX01/primary_doc.xml — BUIDL Form D
