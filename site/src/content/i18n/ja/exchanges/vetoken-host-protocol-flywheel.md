---
source: exchanges/vetoken-host-protocol-flywheel
source_hash: b40eaddcd0ff17eb
lang: ja
status: machine
fidelity: ok
title: "veToken × ホスト・プロトコル DEX 自己循環フライホイール"
translated_at: 2026-06-02T12:19:04.265Z
---
# veToken × ホスト・プロトコル DEX 自己循環フライホイール


## ウィキ上の位置づけ

本項目は [[exchanges/INDEX|exchanges index]] 配下に位置する。隣接文脈では [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]]、より広いシステム境界では [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] と併読する。

> [!info] 要約
> L1/L2のホスト側が原生DEXのveガバナンストークンを保有することで、エミッションを自社の中核資産プール(wrapped BTC等)へ誘導 → 排他的流動性を獲得すると同時に、当該資産のカストディ手数料で**オンチェーン閉ループで本業へ還流**させる構造。Coinbase × Aerodrome × cbBTC 事例の年率は **$130-250M**で、EVMマルチチェーン史上初の定量検証された「ホスト側-DEX」自己循環構造。

**中核メカニズム**:

1. L1/L2のホスト側(運営会社または投資部門)が原生DEXのveガバナンストークンを保有
2. ガバナンス票を用いてエミッションを誘導 → 自社中核資産のペアプール(cbBTC/USDC、cbBTC/ETH 等)へ
3. 排他的な深い流動性が機関にホスト側のwrapped資産利用を促し、カストディAUMが拡大
4. カストディ手数料 / 準備金収益 / 貸出スプレッドが**本業の財務諸表へ還流**(同様の逆転動力学は [[exchanges/native-dex-flip-incumbent-pattern|L2 原生 DEX による incumbent 逆転]] と [[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]] を参照)
5. 本業のキャッシュフローが再度ve持分またはエミッション誘導に再投入され、フライホイールが自己加速

**典型的な規模感(cbBTC × veAERO × Coinbase)**:

- cbBTCのBase TVL **$839M**、流通 **89,000 BTC**、時価総額 $6.1B
- AerodromeのBase上のDEX出来高シェア **63%**でUniswapを逆転
- 自己循環の年率推定 **$130-250M**(カストディ手数料 + 準備金収益 + スプレッド)
- Aerodrome + Velodromeは2026年にAeroへ統合(94.5%:5.5%)、Ethereum L1 + Circle Arcへ拡張し**フライホイールがクロスチェーン複製**

**発動条件**:

- ホスト側がwrapped / native資産(cbBTC、cbETH、sUSDe、stETH等)を発行
- オンチェーンDEXがve(3,3)型エミッション誘導ガバナンスを採用
- ホスト側のve持分が中核プールを誘導するに十分な水準(一般に >10%)
- ホスト側 / DEX / 資産間で規制上禁止される関連当事者取引制約が無い

**汎用性 / 横展開可能領域**:

- Lido × Curve × ETH ホスト側(歴史的に最古のパラダイム)
- Coinbase × Aerodrome × cbBTC / cbETH(本ケース)
- 今後のArc × Curve フォーク × USDCペアプール
- L2がwrapped BTC / native ステーブルコインを発表し、同時にve-DEXをインキュベートする任意の組み合わせ

**反例 / 境界**:

- ホスト側がnative wrapped資産を発行しないケース(Optimism初期等)はフライホイールに資産足が欠ける
- DEXがve エミッションを採用しないケース(Uniswap v2/v3等)は誘導不可能
- 資産プールが既存大手(Uniswap)にロックインされているケースではエミッション誘導効果が逓減
- ホスト側が上場会社 / コンプライアンス・エンティティ(Coinbase等はSEC 報告会社)の場合、関連当事者取引開示が必須で、フライホイール利益が財務諸表で露呈する

**評価額 / 意思決定上の含意**:

- ホスト側の評価額には「DEXフライホイール・キャッシュフロー」項を別建てで追加し、個別ディスカウントすべき
- 逆方向:DEXのveToken評価額はホスト側の「長期保有」コミットメントの影響を受け、集中度リスクが顕著
- フライホイールは既存大手による反撃を受ける可能性あり(UniswapがBaseで防衛失敗した事例が直接の例)
- 規制側(SEC / OCC)が「未登録証券販売」と認定した場合、フライホイールは切断され得る


## 出典

- Aerodrome Finance コントラクト仕様（veAERO ロック・週次 エミッション 誘導ガバナンスという ve(3,3) 中核メカニズムの一次資料） — https://github.com/aerodrome-finance/contracts/blob/main/SPECIFICATION.md
- Coinbase 公式ブログ「Coinbase Wrapped BTC (cbBTC) is now live」（cbBTC が Coinbase の Base ネイティブ wrapped BTC で、Aerodrome を含む DApp に対応） — https://www.coinbase.com/blog/coinbase-wrapped-btc-cbbtc-is-now-live

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン金利分配の経済学]]
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号ネットワークの中立性]]
- [[exchanges/native-dex-flip-incumbent-pattern|L2 原生 DEX による incumbent 逆転]]
- [[exchanges/ve33-governance-mechanism|ve(3,3) governance メカニズム]]
- [[exchanges/global-dex-major-five-comparison|global DEX 主要 5 社比較]]
- [[fintech/portfolio-winner-structure-arm-analog|portfolio winner structure arm analog]]
<!-- /wiki-links:managed -->
