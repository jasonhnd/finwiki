---
source: fintech/three-circles-mra-2030-economic-scale
source_hash: cb6bcd5519d170a4
lang: ja
status: machine
fidelity: ok
title: "三円 MRA 経済量化 · $130B コンプライアンスサークル vs $384B グレーサークル共存モデル"
translated_at: 2026-06-02T14:01:20.956Z
---

# 三円 MRA 経済量化 · $130B コンプライアンスサークル vs $384B グレーサークル共存モデル

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。隣接文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] と合わせて読む。

> [!info] 要約
> 三円コンプライアンスサークル（GENIUS + MiCA + EPI）の 2030 規模予測は **$130B**、コンプライアンスステーブルコイン市場の 35-40% にとどまる。同期間の USDT グレーゾーン（7 か国年間フロー $384B）はコンプライアンスサークルの **~3 倍**。これは「ホワイトサークルとグレーサークルが長期共存する」経済量化モデル —— コンプライアンスは価値を生むが、グレーゾーンが消えるわけではない。三円は「USDT を代替する」のではなく、構造的にリテール / グレーゾーンと機関 / コンプライアンスを相互非疎通の 2 つの市場へ切り分ける。

## 主要事実

- 公開情報に基づく当該項目の位置づけを説明する。 2030  80 15 35 ^[extracted]
- USDT グレーゾーン 7 か国月次フロー $32B × 12 = $384B / 年（ロシア/イラン/ベネズエラ/ナイジェリア/トルコ/アルゼンチン/ベトナム）^[extracted]
- 三円 MRA は依然正式署名なし（2026-05 時点で相互認証草案討議中）· 2027-2028 着地予定 ^[extracted]

## 仕組み / 作動メカニズム

コンプライアンスサークルとグレーサークルの市場切り分けメカニズム：

```
ホワイトサークル($130B / 2030):    グレーサークル($384B+ / 年):
├── 機関カストディ(BUIDL/銀行)     ├── 制裁回避(ロシア/イラン)
├── CME 証拠金                     ├── リテール送金(ナイジェリア/フィリピン)
├── 銀行 RTGS 相互接続             ├── グレー商人決済
├── §501 チェーン級 denylist 強制  ├── USDT on Tron P2P
└── 強い KYC / AML                 └── KYC なしのオンチェーン送金

切り分けロジック：規制要件 + ユーザーシーン + チャネル粘着性が hard wall を形成
                  · 三円拡張はグレーサークルを「食う」ことはない —— 2 つの市場
```

**単方向相互認証 → 双方向相互認証 → 三辺 MRA** の進化経路：
- 2026-02 U.S.-Japan MRA 署名済み（USDC × [[payment-firms/jpyc|JPYC]] 双方向）
- 2026-Q3 U.S.-EU MRA 署名予定 — 詳細は [[fintech/mica-cross-border-implications|MiCA クロスボーダー含意]] 参照
- 2027-2028 三円 MRA 全面署名 → ライセンス保有 issuer の自動 passporting

## 起源と展開

[[fintech/genius-act-501-denylist-mandate|GENIUS Act]] 2025 可決 + [[fintech/mica-overview|MiCA]] 2024-12-30 全面施行 + 日本改正資金決済法 2023-06 が [[fintech/japan-epi-three-types-overview|EPI 三型]] にアップグレード = 三円基礎が整備された。$130B 2030 数字は「相互認証協定 2028 署名 + EPI 信託型 2027 で利息分配許可へアップグレード」の 2 つの前提下での試算である。いずれかの前提が遅延すれば、2030 規模は $80-100B まで低下する可能性。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA アーキテクチャ]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 チェーン級 Denylist]]
- [[fintech/em-market-crypto-dollarization-pattern|新興市場暗号 USD 化]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン分配経済学]]
<!-- /wiki-links:managed -->

## 出典

- 公開情報に基づく当該項目の位置づけを説明する。
