---
source: exchanges/jp-crypto-on-off-ramp-bridge-layer
source_hash: 089f47440bd39e99
lang: zh
status: machine
fidelity: ok
title: "面向国内的 on/off ramp + 法定货币↔加密资产桥接层 (MoonPay / Transak / Banxa / VASP 直接)"
translated_at: 2026-05-31T03:19:56.430Z
---

# 面向国内的 on/off ramp + 法定货币↔加密资产桥接层 (MoonPay / Transak / Banxa / VASP 直接)

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. Read it against [[exchanges/jp-crypto-market-maker-otc-layer|国内暗号資産マーケットメイカー / OTC デスク業界]] for peer / contrast context and [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]] for the broader system / regulatory boundary.

## 概要

**On-ramp / off-ramp** 是「法定货币 ↔ 加密资产」的出入口基础设施。它是国内用户访问 Web3 dApps・NFT 市场・DeFi 时的第一步，提供 **JPY → ETH/USDC/USDT 的直接兑换路径**。由于日本在资金结算法上，**伴随 JPY 入金的加密资产销售 = 加密资产交换业 (VASP 登记)** 是必需的，海外 on-ramp 事业者单纯的日本展开受牌照壁垒制约，**国内 VASP 直接路径 + 海外 on-ramp 的跨境提供（灰色地带）** 的双重结构并存。

## 国内 VASP 直接路径（官方 on/off ramp）

法律上最明确的路径是 FSA 登记 VASP 的账户 + 银行转账:

- **[[exchanges/jp-exchange-bitflyer|bitFlyer]]** — JPY 即时入金 (住信 SBI 网络 / 三井住友等) → 购买 BTC/ETH 等 → 外部钱包汇款
- **[[exchanges/jp-exchange-gmo-coin|GMO コイン]]** — 即时入金 + 出金手续费免费
- **[[exchanges/jp-exchange-sbi-vc-trade|SBI VC Trade]]** — 通过 SBI 新生银行系统联动加速银行存取款
- **[[exchanges/jp-exchange-coincheck|Coincheck]]** — Monex 集团系・银行转账 + 便利店入金
- **[[exchanges/jp-exchange-bitbank|bitbank]]** — 以板交易为中心，但也作为 on-ramp 使用
- **[[exchanges/jp-exchange-bittrade|BitTrade]] (HUOBI 系)** — 通过与海外 HUOBI 联动，在获取 USDT 系上有优势

该路径处于 **KYC + 银行账户 + JVCEA WhiteList 币种 ([[exchanges/jvcea-self-regulatory-overview|JVCEA]] 规则)** 的制约下，长尾 token 无法获取。

## 海外 on-ramp 事业者的对日提供（跨境）

在获取国内 VASP 不经办的 dApps / NFT 系 token 时，存在用户经由海外 on-ramp 事业者的 Web 小部件直接购买 JPY → USDC 等的案例。**法律定位持续为灰色** (FSA 持续强化跨境 VASP 监管):

- **MoonPay (美国迈阿密 2019-)** — 在 Web3 钱包 (MetaMask / Phantom 等) 中整合最广。JPY 对应 (随时期变动)，信用卡 + Apple Pay + Google Pay 入金
- **Transak (英国伦敦 2019-)** — 全球 on/off ramp。整合于 MetaMask Portfolio・Trust Wallet・OpenSea 等。**对 JP user 的支持与否随时期变动**
- **Banxa (澳大利亚墨尔本 2014-)** — 上市企业 (Toronto Venture)。持有全球多据点牌照
- **Ramp Network (英国伦敦 2017-)** — 以 Web3 为中心，整合于多个 wallets
- **Mercuryo (英国伦敦 2018-)** — Web3 + 加密资产借记卡
- **Sardine (美国旧金山 2020-)** — 在反欺诈上有优势，面向机构
- **Wyre** (2021 服务停止)、**Simplex** (Nuvei 系) — 整合主要 wallet，但对日本的经办有限

这些跨境事业者构成能够经由国内 ID + JPY 信用卡进行交易的架构，但 **FSA 持续监视无登记 VASP 的跨境提供**，对特定事业者有业务改善命令 / 警告书发出的先例。

## 交易所直接路径与 dApps 桥接的组合

实务上的典型模式:

1. **在国内 VASP 购买 USDC/USDT/ETH** → 外部钱包汇款 → dApp / NFT 利用
2. **从外部钱包利用 dApp** → 获利了结后，**逆向汇回国内 VASP → JPY 出金** (off-ramp)
3. 需要 **JVCEA WhiteList 外币种** 时，经由海外 CEX (Binance / Bybit / OKX 等) → 但面向日本居民的服务原则上有限制

## 信用卡 / Pay 系的组合

- **bitFlyer Crypto Card (含准备中)**、**Coincheck 定投 Pay 联动**、**Visa / Mastercard 系 crypto card** 等，法币 → 加密资产购买的相邻手段在扩大
- **PayPay / au PAY / LINE Pay** 作为加密资产 on-ramp 尚未支持 (LINE BITMAX 联动除外)
- 在 **[[fintech/japan-financial-regulation|日本金融規制]]** 上，经由 Pay 事业者的加密资产购买是资金移动业 + VASP 的边界论点

## 稳定币 on-ramp 的特殊性

随着 2023-06 修订资金结算法施行，**基于特定信托受益权方案的日元计价稳定币** 被制度化:

- **[[exchanges/jp-exchange-jpyc|JPYC]]** — 从预付式 → 向电子结算手段 (信托型) 的过渡推进中
- **三菱 UFJ 信托银行系 Progmat Coin** — 信托型稳定币平台
- **MUFG / SMBC / Mizuho 的信托子公司** — 研讨面向机构的 JPY 稳定币发行

随着这些的普及，将来 **JPY ↔ JPY 稳定币 ↔ USDC/USDT** 的两段桥接预计将标准化。

## 监管 + 审计 + 取证

- **监管**：[[exchanges/fsa-vasp-registration-system|FSA 登録制度]] + [[exchanges/jvcea-self-regulatory-overview|JVCEA 規則]]
- **AML / Travel Rule**：[[exchanges/jp-vasp-aml-travel-rule-implementation|犯収法 + FATF Travel Rule]]
- **取证**：[[exchanges/global-crypto-forensics-vendor-layer|Chainalysis / Elliptic / TRM]] 在 VASP 存取款时返回 risk score
- **税务**：[[exchanges/jp-crypto-asset-taxation-detailed|暗号資産税制]] 直接适用于 on/off ramp 利益

## Related

- [[exchanges/jp-crypto-market-maker-otc-layer]] — MM / OTC 层
- [[exchanges/jp-institutional-custody-three-pillars]] — 机构托管
- [[exchanges/jp-exchange-jpyc]] — JPYC
- [[exchanges/jp-vasp-aml-travel-rule-implementation]] — Travel Rule
- [[exchanges/jvcea-self-regulatory-overview]] — JVCEA
- [[exchanges/fsa-vasp-registration-system]] — FSA 登记
- [[exchanges/jp-crypto-merchant-payment-lightning]] — 商业结算
- [[fintech/japan-financial-regulation]] — 上位金融监管

## Sources

- MoonPay 官方: https://www.moonpay.com/
- Transak 官方: https://transak.com/
- Banxa 官方: https://banxa.com/
- FSA 加密资产相关: https://www.fsa.go.jp/
- JVCEA 官方: https://jvcea.or.jp/
