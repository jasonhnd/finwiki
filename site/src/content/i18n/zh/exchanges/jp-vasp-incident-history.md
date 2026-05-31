---
source: exchanges/jp-vasp-incident-history
source_hash: ef95a12cb2378e51
lang: zh
status: machine
fidelity: ok
title: "日本VASP加密资产流出事件史（2014-2026）"
translated_at: 2026-05-31T06:16:15.688Z
---

# 日本VASP加密资产流出事件史（2014-2026）

## 概要

日本VASP历史是一部因大规模资产流出事件而推动监管不断演进的历史。Mt.Gox（2014）成为《资金结算法》修正的导火索，Coincheck（2018）成为自律监管机构JVCEA成立及冷钱包存储比例规制的起点，DMM Bitcoin（2024）则是朝鲜Lazarus归因得到公开确认的大型案件，并导致业务移交至SBI VC Trade。资产流出并非孤立事件，每次均伴随着热钱包5%上限、分别管理义务等"制度反射"，循环往复。

## 主要事件时间线

| 年月 | VASP | 流出规模 | 后续结果 |
|------|------|---------|------|
| 2014-02  | Mt.Gox | 约850,000 BTC（当时约470 億円） | 民事重整→破产→法律清算进行中，触发2017 《资金结算法》修正 |
| 2018-01  | [[exchanges/jp-exchange-coincheck]] | 约580 億円（5.2 億 XEM） | JVCEA成立（2018-04），FSA业务改善命令，被Monex集团收购 |
| 2018-09  | [[exchanges/jp-exchange-zaif]]（原Tech Bureau） | 约70 億円 | 业务转让至Fisco数字资产集团 |
| 2019-07  | BITPoint Japan | 约35 億円 | 在雷泽特科旗下重建 |
| 2019-09  | Liquid（QUOINE） | 约105 億円（两阶段流出） | 被FTX收购→FTX破产→承继至[[exchanges/jp-exchange-custodiem]] |
| 2024-05  | [[exchanges/jp-exchange-dmm-bitcoin]] | 4,502.9 BTC 约482 億円 | FBI/警察厅公开归因Lazarus/TraderTraitor，停业→移管至SBI VC Trade（2025） |

## 监管反射（3 阶段）

1. **第一阶段（2017 《资金结算法》修正）** — 因Mt.Gox引入VASP注册制度，将加密资产定义为"支付手段"
2. **第二阶段（2018-2020 自律规制+业者规律）** — 因Coincheck/Zaif连续案件，JVCEA被指定为认定自律规制团体。热钱包客户资产5%上限、冷钱包95%义务、分别管理（信托或个别管理）义务化
3. **第三阶段（2020 金商法修正）** — 将加密资产衍生品纳入《金融商品交易法》管辖，强化内部管理体制及网络安全要求

## Lazarus归因的意义

DMM Bitcoin案件（2024-05）经FBI、美国财政部、警察厅联合声明，被公开归因为朝鲜Lazarus Group下属部门TraderTraitor所为，是日本首起大型VASP被公开归因的案件。作案手法为：通过LinkedIn冒充招募人员入侵委托方[[exchanges/jp-custody-ginco]]的工程师，窃取签名私钥，属于社会工程学与供应链复合型攻击。与海外无注册警告对象不同，此案揭示了注册VASP内部存在的密钥泄露路径风险，属于"合规边界外风险"的另一类型。

## 相关

- [[exchanges/jp-exchange-coincheck]] · [[exchanges/jp-exchange-zaif]] · [[exchanges/jp-exchange-custodiem]] · [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-foreign-exchange-bitforex]] — 海外退出诈骗平行案例
- [[fintech/japan-financial-regulation]] — 《资金结算法》/《金商法》框架
- [[exchanges/jp-custody-ginco]] — DMM案件入侵路径

来源：公开信息整理（FSA业务改善命令·行政处分公告、JVCEA公告、各案件当事方IR·发布会·第三方委员会调查报告书、警察厅/网络警察局公告、Chainalysis/Elliptic公开研究）
