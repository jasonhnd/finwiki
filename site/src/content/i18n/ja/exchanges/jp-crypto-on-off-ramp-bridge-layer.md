---
source: exchanges/jp-crypto-on-off-ramp-bridge-layer
source_hash: 089f47440bd39e99
lang: ja
status: machine
fidelity: ok
title: "国内向け on/off ramp + 法定通貨↔暗号資産ブリッジ層 (MoonPay / Transak / Banxa / VASP 直接)"
translated_at: 2026-06-02T12:19:04.214Z
---
# 国内向け on/off ramp + 法定通貨↔暗号資産ブリッジ層 (MoonPay / Transak / Banxa / VASP 直接)

## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] に属する。隣接・対比対象として [[exchanges/jp-crypto-market-maker-otc-layer|国内暗号資産マーケットメイカー / OTC デスク業界]]、より広い制度・規制境界として [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] と併読する。

## 概要

**On-ramp / off-ramp** は「法定通貨 ↔ 暗号資産」の出入口インフラである。国内ユーザーが Web3 dApps・NFT マーケット・DeFi にアクセスする際の最初のステップであり、**JPY → ETH/USDC/USDT への直接交換ルート**を提供する。日本では資金決済法上、**JPY 入金を伴う暗号資産販売 = 暗号資産交換業 (VASP 登録)** が必要なため、海外 on-ramp 事業者の単純な日本展開はライセンス障壁により制約され、**国内 VASP 直接ルート + 海外 on-ramp の越境提供（グレーゾーン）** の二重構造が並存している。

## 国内 VASP 直接ルート (公式 on/off ramp)

最も法的に明確なルートは、FSA 登録 VASP の口座 + 銀行振込:

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** — JPY 即時入金 (住信 SBI ネット / 三井住友等) → BTC/ETH 等購入 → 外部ウォレット送金
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** — 即時入金 + 出金手数料無料
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** — SBI 新生銀行系統連携で銀行入出金を高速化
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** — マネックスグループ系・銀行振込 + コンビニ入金
- **[[exchanges/jp-exchange-bitbank|bitbank]]** — 板取引中心だが on-ramp としても使用
- **[[exchanges/jp-exchange-bittrade|BitTrade]] (HUOBI 系)** — 海外 HUOBI との連携で USDT 系の入手に強み

このルートは **KYC + 銀行口座 + JVCEA WhiteList 通貨 ([[exchanges/jvcea-self-regulatory-overview|JVCEA]] 規則)** の制約下にあり、ロングテール token は取得不可。

## 海外 on-ramp 事業者の対日提供 (越境)

国内 VASP では取扱なしの dApps / NFT 系トークン取得時、ユーザーは海外 on-ramp 事業者の Web ウィジェット経由で JPY → USDC 等を直接購入する事例が存在する。**法的位置付けは継続的にグレー**（FSA は越境 VASP 規制を継続強化）:

- **MoonPay (米マイアミ 2019-)** — Web3 ウォレット (MetaMask / Phantom 等) に最も広く統合。JPY 対応（時期によって変動）、クレジットカード + Apple Pay + Google Pay 入金
- **Transak (英ロンドン 2019-)** — グローバル on/off ramp。MetaMask Portfolio・Trust Wallet・OpenSea 等に統合。**JP user 対応の可否は時期により変動**
- **Banxa (豪メルボルン 2014-)** — 上場企業 (Toronto Venture)。グローバル多拠点ライセンス保有
- **Ramp Network (英ロンドン 2017-)** — Web3 中心、複数 wallets に統合
- **Mercuryo (英ロンドン 2018-)** — Web3 + 暗号資産デビットカード
- **Sardine (米サンフランシスコ 2020-)** — 不正対策に強み、機関向け
- **Wyre** (2021 サービス停止)、**Simplex** (Nuvei 系) — 主要 wallet 統合だが日本向け取扱は限定

これら越境事業者は、国内 ID + JPY クレジットカード経由の取引を可能とする構成だが、**FSA は無登録 VASP の越境提供を継続監視**しており、特定事業者に対し業務改善命令 / 警告書発出の前例がある。

## 取引所直接ルートと dApps ブリッジの組合せ

実務上の典型パターン:

1. **国内 VASP で USDC/USDT/ETH 購入** → 外部ウォレット送金 → dApp / NFT 利用
2. **外部ウォレットから dApp 利用** → 利益確定後、**国内 VASP に逆送金 → JPY 出金** (off-ramp)
3. **JVCEA WhiteList 外通貨** が必要な場合、海外 CEX (Binance / Bybit / OKX 等) 経由 → ただし日本居住者向けサービスは原則制限あり

## クレジットカード / Pay 系の組合せ

- **bitFlyer Crypto Card (準備中含む)**、**Coincheck つみたて Pay 連携**、**Visa / Mastercard 系 crypto card** など、フィアット → 暗号資産購入の隣接手段が拡大
- **PayPay / au PAY / LINE Pay** は暗号資産 on-ramp としては未対応 (LINE BITMAX 連携を除く)
- **[[fintech/japan-financial-regulation|日本金融規制]]** 上、Pay 事業者経由の暗号資産購入は資金移動業 + VASP の境界論点

## ステーブルコイン on-ramp の特殊性

2023-06 改正資金決済法施行で、**特定信託受益権スキームによる円建てステーブルコイン**が制度化:

- **[[exchanges/jp-exchange-jpyc|JPYC]]** — 前払式 → 電子決済手段 (信託型) への移行進行中
- **三菱 UFJ 信託銀行系 Progmat Coin** — 信託型ステーブルコインプラットフォーム
- **MUFG / SMBC / Mizuho の信託子会社** — 機関向け JPY ステーブルコイン発行検討

これらの普及により、将来的に **JPY ↔ JPY ステーブルコイン ↔ USDC/USDT** の二段ブリッジが標準化する見通し。

## 規制 + 監査 + フォレンジック

- **規制**：[[exchanges/fsa-vasp-registration-system|FSA 登録制度]] + [[exchanges/jvcea-self-regulatory-overview|JVCEA 規則]]
- **AML / Travel Rule**：[[exchanges/jp-vasp-aml-travel-rule-implementation|犯収法 + FATF Travel Rule]]
- **フォレンジック**：[[exchanges/global-crypto-forensics-vendor-layer|Chainalysis / Elliptic / TRM]] が VASP 入出金時の risk score を返答
- **税務**：[[exchanges/jp-crypto-asset-taxation-detailed|暗号資産税制]] が on/off ramp 利益に直接適用

## 関連項目

- [[exchanges/jp-crypto-market-maker-otc-layer]] — MM / OTC 層
- [[exchanges/jp-institutional-custody-three-pillars]] — 機関カストディ
- [[exchanges/jp-exchange-jpyc]] — JPYC
- [[exchanges/jp-vasp-aml-travel-rule-implementation]] — Travel Rule
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA 登録
- [[exchanges/jp-crypto-merchant-payment-lightning]] — 商業決済
- [[fintech/japan-financial-regulation]] — 上位金融規制

## 出典

- MoonPay 公式: https://www.moonpay.com/
- Transak 公式: https://transak.com/
- Banxa 公式: https://banxa.com/
- FSA 暗号資産関連: https://www.fsa.go.jp/
- JVCEA 公式: https://jvcea.or.jp/
