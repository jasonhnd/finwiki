---
source: exchanges/jp-vasp-derivative-license-system
source_hash: 612c22c2cb1f4409
lang: zh
status: machine
fidelity: ok
title: "国内加密资产衍生品交易业制度 — 金商法 × 资金结算法双重登录"
translated_at: 2026-05-31T06:16:15.677Z
---

# 国内加密资产衍生品交易业制度 — 金商法 × 资金结算法双重登录

## 制度概要

2020-05 施行的修正《金融商品交易业》（金商法）将加密资产衍生品交易业纳入"金融商品交易业"的管辖范畴。由此，日本加密资产行业形成了**现货交易（资金结算法 = 加密资产交换业者登录）**与**衍生品交易（金商法 = 第一种金融商品交易业者登录）**的**双轨监管**格局。即便同为"加密资产"，是否涉及实物交割决定了适用法令与登录路径的差异，这在各国横向比较中极具特色。详细内容请参阅 [[fintech/japan-financial-regulation|日本金融規制]] 体系。

## 两种牌照持有模式

国内经营者分为以下 3  种类型：

- **双重持有（现货 + 衍生品）** — [[exchanges/jp-exchange-bitflyer|bitFlyer]] / [[exchanges/jp-exchange-gmo-coin|GMO コイン]] / [[exchanges/jp-exchange-sbi-vc-trade|SBI VC トレード]] 等。在持有资金结算法 Type 1  现货登录的同时，也持有金商法第一种金融商品交易业登录，双刀流运营。
- **现货专营** — Coincheck / bitbank 等。仅依资金结算法运营，不提供衍生品产品。
- **衍生品专营** — [[exchanges/jp-exchange-monex|Monex 株式会社]]（现货经由子公司 Coincheck）/ [[exchanges/jp-exchange-bi-fxtrade|SBI FX トレード (BI FXTRADE)]] / [[exchanges/jp-exchange-traders-securities|トレイダーズ証券]] / [[exchanges/jp-exchange-sbi-securities|SBI 証券]] / [[exchanges/jp-exchange-goldenway-japan|ゴールデンウェイ・ジャパン]] / [[exchanges/jp-exchange-dmm-com-securities|DMM.com 証券]] 等 6 社 家为代表。仅持有金商法登录，不涉及现货。

## 杠杆监管（2020-）

金商法纳管的同时引入了强力的保护性监管：
- **个人**：杠杆上限 2  倍
- **法人**：按类别可使用较高倍率（实质面向机构投资者）
- 可交易品种也以 BTC/ETH 为中心，范围有限，是行业惯例

这比外汇的 25  倍上限更为保守，从结构上抑制了整体行业交易量和盈利能力。

## 登录号码体系

第一种金融商品交易业的登录号码采用"**关东财务局长（金商）第NNN号**"格式（由 FSA 委任各财务局）。这与现货交易"关东财务局长 第NNNNN号"（资金结算法）属于不同系列的号码体系。双重持有经营者需并列记载 **2  种登录号码**。

## 实质影响：网络外汇业者的自然进入

衍生品专营 6 社 家中，**5 社 家来自外汇主业**（SBI FX Trade / Traders Securities / Golden Way / DMM.com Securities / SBI Securities CFD 部门）。这些公司将现有外汇业基础（保证金管理、报价板、交易对手风险管理等专业能力）自然延伸至加密资产 CFD，形成了有别于新兴现货 VASP 的另一条演进路径。自律监管请参阅 [[exchanges/jvcea-self-regulatory-overview|JVCEA]] 与现货登录的 [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度]]。

---

来源：公开信息（fsa.go.jp 公告登录名单、jvcea.or.jp 会员名单、elaws 法令数据库、各公司 IR 公开资料）
