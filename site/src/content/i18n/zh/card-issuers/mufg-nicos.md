---
source: card-issuers/mufg-nicos
source_hash: 419f352a4cb516c6
lang: zh
status: machine
fidelity: ok
title: "三菱UFJ尼克斯 (Mitsubishi UFJ NICOS)"
translated_at: 2026-06-15T03:48:21.918Z
---

# 三菱UFJ尼克斯 (Mitsubishi UFJ NICOS)

## Wiki 路径

本条目位于 [[card-issuers/INDEX|card-issuers INDEX]]（其领域路径）之下。请将其与 [[card-issuers/smbc-card|三井住友カード]] 及 [[card-issuers/jcb|JCB]] 对照阅读，以了解巨型银行系列的同业／对比，并与 [[financial-regulators/fsa|the FSA]] 及 [[payments/INDEX|payments]] 对照阅读，以厘清监管／系统边界。所适用的收单法规为 [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]]。

## TL;DR

三菱UFJ尼克斯株式会社 (Mitsubishi UFJ NICOS) 是 [[megabanks/mufg|MUFG]] 集团的卡・赊销 operating company。其官方公司概要明示了 **综合信用购买斡旋业者** 登记号与 **信用卡号等处理合同缔结事业者**（card-number 加盟店合同）登记号，对厘清 issuer / acquirer / installment-credit 的边界十分重要。历史上由多家卡品牌・赊销公司整合而成，是 MUFG 的 retail / merchant payment surface。

## 1. 牌照／集团边界

| Item | Notes |
|---|---|
| Legal entity | 三菱UFJニコス株式会社 / Mitsubishi UFJ NICOS Co., Ltd. |
| Group | [[megabanks/mufg|MUFG]]（三菱UFJ金融集团） |
| Card / credit lane | 分期付款销售法上的综合信用购买斡旋（卡分期・分期付款／循环） |
| Acquiring lane | 信用卡号等处理合同缔结事业者登记（加盟店合同・card-number 管理） |
| Cash-advance lane | 卡贷款／预借现金额度属于放贷业法的框架 |
| Supervision | 金融厅（银行集团・放贷）＋ 经济产业省（分期付款销售法），自律规制为 [[card-issuers/installment-sales-act-2020-amendment|日本クレジット協会]] |

## 2. 运营模式

三菱UFJ尼克斯作为 MUFG 的 retail / merchant payment surface，承担 card issuing（发行）与 merchant acceptance（加盟店 acquiring）两个方面。赊销内容包括一次性・分期付款 (分期付款)・循环 (循环信用)，此外还开展卡贷款・加盟店服务。它是日本卡品牌・赊销事业历史上的整合点，由一家公司同时承担 issuing 与 acquiring 这一点，构成了与品牌・牌照三位一体型的 [[card-issuers/jcb|JCB]] 以及 SMFG 枢纽的 [[card-issuers/smbc-card|三井住友カード]] 之间的比较轴。

## 3. 本页为何重要

- 确定三菱UFJ尼克斯并非仅仅是「MUFG 旗下的品牌」，而是拥有独立登记号（综合信用购买斡旋・card-number 加盟店合同）、客户合同、加盟店规则、授信／反欺诈 workflow 的受监管 operating company。
- 作为 issuer（赊销）与 acquirer（card-number 加盟店合同）两套登记同居于一家公司的典型例，成为 [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]] 的具体 anchor。
- 与 [[card-issuers/smbc-card|SMBC Card]]・[[card-issuers/jcb|JCB]] 一同提供 megabank 系 issuer 的 peer anchor。

## 相关

- [[megabanks/mufg|MUFG]]
- [[card-issuers/smbc-card|三井住友カード]]
- [[card-issuers/jcb|JCB]]
- [[payments/japan-card-issuer-acquirer-processor-split|issuer / acquirer / processor split]]
- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]]
- [[card-issuers/INDEX|card-issuers INDEX]]
- [[INDEX|FinWiki index]]

## 来源

- Mitsubishi UFJ NICOS company overview.
- METI: registered operators under the Installment Sales Act (包括信用購入あっせん).
- 日本クレジット協会 (Japan Consumer Credit Association): industry self-regulation reference.

> [!info] 校核状态
> confidence: likely。三菱UFJ尼克斯为 MUFG 集团的卡・赊销公司、其官方公司概要标明综合信用购买斡旋与 card-number 加盟店合同的登记号，均为公开事实。由于具体的登记号・处理金额可能变动，本页不引用数值，仅记载制度上的定位。
