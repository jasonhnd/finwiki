---
source: fintech/blackrock-buidl-sc-issuer-adoption
source_hash: 0f5b9dc17c64543d
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "BlackRock BUIDL · stablecoin と DeFi プロトコルの準備資産採用マトリックス"
translated_at: 2026-06-26T08:29:01.750Z
---
# BlackRock BUIDL · stablecoin と DeFi プロトコルの準備資産採用マトリックス

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下に位置づけられる。隣接文脈として [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界として [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> BUIDL は GENIUS Act §501 以降、**すべての「ホワイト・サークル」 + 「DeFi グレー・サークル」SC 発行会社 を横断する中立的な準備資産** として唯一の存在 — USDB（Stripe/Bridge） / Frax sfrxUSD / Ondo OUSG / Ethena USDtb / Spark sUSDS はいずれも何らかの形で BUIDL を準備または担保に組み込んでいる。BUIDL は同時に CME / Binance / Deribit / Crypto.com からデリバティブのマージンとして受け入れられている。この「無差別 servicing」が BlackRock の **中立的アーマー・ディーラー** としてのポジションであり、JPMorgan の閉ループ銀行モデルとの鏡像をなす。

## 主要事実

- **USDB** (Stripe/Bridge): 主に BlackRock MMF で運用 · ~$1.8B が BUIDL 経由 ^[extracted]
- **Frax sfrxUSD**: v3 で BUIDL が USDC の一部を置き換え · ~$200M ^[extracted]
- **Ondo OUSG**: バックエンドは 100% BUIDL · ~$650M ^[extracted]
- **Ethena USDtb**: 完全に BUIDL でサポート · ~$1.4B ^[extracted]
- **Spark sUSDS** (Maker → Sky): RWA vault 経由で間接保有 · ~$300M ^[extracted]
- IM 担保として受け入れる側: CME (prime broker)、Binance (BNB Chain 2025-11)、Deribit、Crypto.com ^[extracted]
- Apollo ACRED は BUIDL を償還流動性として活用 ^[extracted]

## 仕組み / どのように機能するか

BUIDL は 3 つの役割で同時に活用されている: (1) **SC 準備資産** — 発行会社 が BUIDL を保有することで、「国債利回り」を「SC 流通」で梃子化;(2) **DeFi プロトコル担保** — RWA vault が BUIDL を取り込むことで、USDS / sfrxUSD などの分散型 SC も間接的に機関グレードのコンプライアント準備にアクセス可能に;(3) **デリバティブ IM** — 取引所と prime broker が BUIDL を適格マージンとしてリストすることで、機関は現金を動かすことなく 4.3% APY を享受できる。**ホワイト・サークル + グレー・サークル横断が鍵**: BUIDL は顧客を選ばない（中立的アーマー・ディーラー）、KYC 通過さえすれば誰でも購入できる → これは [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD]] の自社顧客のみにサービスする閉ループ・モデルと鏡像をなし、[[fintech/wall-street-crypto-network-neutrality|Wall Street 暗号ネットワーク中立性]] の中立的アーマー・ディーラー・パラダイムにも呼応する。

## 起源と変遷

2024-03 BUIDL ローンチ時、主に Ondo OUSG という単一顧客にサービス（初期は $400M+ が Ondo 経由）。2024-Q4 Ethena USDtb + Frax v3 + Spark RWA vault が接続。2025-Q3 USDB (Stripe/Bridge) がローンチ後、最大の単一 SC 発行会社顧客となる。2025-11 Binance が BUIDL を BNB Chain で IM として接続 — **CEX が初めてトークン化 MMF をマージンとして直接受け入れた事例**、[[exchanges/rwa-tokenization-cex-integration|CEX RWA 担保統合]] の標準テンプレートを拡張。2026-Q1 Apollo ACRED が BUIDL を償還流動性のバックアップとして採用 — **private credit fund が初めて BUIDL で T+0 流動性を解決した事例**。2026-05-14 の $1B 即時償還ファシリティにより、BUIDL は流動性ネットワークの中心ノードとしての地位をさらに強化。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL トークン化 MMF のベンチマーク]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備資産インターロック・フライホイール]]
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS]]
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD]]
- [[fintech/stablecoin-revenue-split-economics|stablecoin 金利分配エコノミクス]]
<!-- /wiki-links:managed -->

## 出典

- Apollo ACRED + Ethena USDtb + Ondo OUSG の公開開示および BUIDL の onchain attestation
