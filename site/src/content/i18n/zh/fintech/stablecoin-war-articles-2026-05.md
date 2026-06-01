---
source: fintech/stablecoin-war-articles-2026-05
source_hash: 897037f925bb5feb
lang: zh
status: machine
fidelity: ok
title: "稳定币战争系列 · 23 篇 publication-grade 长文（2026-05）"
translated_at: 2026-05-31T11:13:44.911Z
---

# 稳定币战争系列 · 23 篇 publication-grade 长文（2026-05）

## Wiki 路径

本条目位于 [[fintech/INDEX|金融科技索引]] 之下。请与 [[fintech/japan-financial-regulation|日本金融监管：代币、加密资产与支付法体系]] 以及 [[fintech/japan-stablecoin-regulatory-landscape|日本稳定币法制度三层结构（JPYC、USDC、Project Pax）]] 配套阅读。

> [!info] TL;DR
> 本页是 blockchain-research-2026-05 项目的参考入口。该项目产出 23 篇 publication-grade 长文，约 159K 字，阅读时间约 8.2 小时，分四波发布（v1 11 篇、v2 4 篇、v3 4 篇、v4 4 篇）。写作风格以 FT Big Read、NYT Upshot 和 a16z research 为基准，论证骨架围绕五个主角、一个组合胜者（Visa）和一个人才信号（Christine Moy）展开。长文本体不进入 wiki 原子层。

## 关键事实

- 23 篇 / 约 158,764 字 / 约 738 KB / 约 493 分钟阅读量。^[extracted from articles/README.md]
- 四波发布：v1 于 2026-05-17 上午发布 11 篇，覆盖宏观、主角、地域与监管；v2 于当日下午发布 4 篇，覆盖 TD / MMF / 基础设施；v3 当晚发布 4 篇深挖特集；v4 于 2026-05-18 发布 4 篇，覆盖监管、黑箱、中银与终局。^[extracted]
- 五主角矩阵：Coinbase / Base、Stripe / Tempo + Bridge + Privy、Circle / Arc、JPMorgan / Kinexys、Tether / USDT（灰色市场角色）。^[inferred from corpus mapping]
- 一个组合胜者 / 可交易代理：Visa，对应 article 04、14、15，被视为金融版 ARM Holdings。^[extracted]
- 一个人才信号：Christine Moy，从 JPM Onyx 转向 Apollo，被 article 17 视为提前 18-24 个月观察行业权力结构变化的信号。^[extracted]
- 风格模式：强钩子、清晰叙事弧、具体数字 / 日期 / 人名、结尾回扣开头、短段落、中文正文和核心英文专业术语保留。^[extracted from articles/README.md style spec]

## 机制 / 系列结构

四波发布承担不同分析功能：

| 波次 | 文章编号 | 主轴 | 论点 |
|---|---|---|---|
| v1 (11) | 01-11 | 宏观骨架 | 中银五层拆解、五主角、三圆 MRA、DeFi 死亡判决 |
| v2 (4) | 12-15 | 横断层 | TD / JPM 与三大银行、MMF / BUIDL、基础设施七个子类别、Standard Chartered 五战线行动 |
| v3 (4) | 16-19 | 深挖特集 | Aerodrome 链上闭环、Christine Moy 人才信号、Privy / AWS AI 支付、$34T 主权基金配置 |
| v4 (4) | 20-23 | 终局推演 | GENIUS 30 日细则、Tether 黑箱审计、BIS Project Agorá、2030 base / bull / bear 标题 |

**阅读路径：**

- **快速版 25 分钟**：01（1.2 兆美元暗河与宏观结构）。
- **战略版 60 分钟**：01 + 03（Kinexys 的静默政变与 JPM 隐性主角）+ 04（Visa as ARM，可交易代理）。
- **投资版 80 分钟**：04 + 02（Tether 香港非对称押注）+ 10（OCC charter 稀缺性）+ 11（DeFi 死亡判决）。
- **地缘政治版 85 分钟**：06（中国阵营五层垂直整合）+ 09（三圆 MRA 与数字通货金本位 2.0）+ 05（日本五阵营）+ 07（USDT on Tron 灰色市场）。
- **横断版 87 分钟**：12（1 兆日元押注）+ 13（BUIDL 作为 $60B 隐性稳定币）+ 14（基础设施七个胜者）+ 15（Standard Chartered 五战线行动）。
- **深挖版 90 分钟**：16（Aerodrome 闭环）+ 17（Christine Moy 信号链）+ 18（Privy 双默认）+ 19（沉默资金）。
- **终局版 88 分钟**：20（GENIUS 30 日倒计时）+ 21（Tether $145B 黑箱）+ 22（BIS Project Agorá）+ 23（2030 五个标题）。
- **完整版约 450 分钟**：按 01 至 23 顺序阅读。

## 起源与演进

- **基准日**：2026-05-13，完成 519 个文件的 corpus 调查与 v5.5 wiki 化。
- **v1 11 篇**：2026-05-17 上午，宏观骨架 sprint。
- **v2 4 篇**：2026-05-17 下午，横断 TD / MMF / Infra 补强。
- **v3 4 篇**：2026-05-17 夜，链上闭环、人才、AI 与主权资本深挖。
- **v4 4 篇**：2026-05-18，监管、黑箱、中银和终局推演。
- 附属材料：叙事图集 v1.0、Executive Brief、跨章节战略整合。附属资料为非公开材料。

## 相关
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/central-banking-function-unbundling|中银功能五层拆解（article 01 框架化）]]
- [[fintech/portfolio-winner-structure-arm-analog|组合胜者结构：ARM 类比（article 04 框架化）]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA（article 09 框架化）]]
- [[fintech/jurisdiction-list-monetary-protectionism|§501 司法辖区清单（article 05 / 09 框架化）]]
- [[fintech/gray-market-dollar-network-formalization|灰色市场美元网络的正式化（article 02 / 07 框架化）]]
- [[fintech/2022-three-variable-cascade-thesis|2022 三变量级联论题（article 01 序章）]]
- [[fintech/four-motive-classes-asymmetric-competition|四类动机（article 14 / 15 视角）]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS §501 Denylist（article 11 / 20 法律基础）]]
<!-- /wiki-links:managed -->

## 来源

集合索引（权威入口）：

23 篇 articles（按章节聚合）：
- v1 宏观 / 主角 / 地域 / 监管（11）：articles/01-the-unbundling · 02-tether-hk-bet · 03-kinexys-quiet-coup · 04-visa-as-arm · 05-japan-five-camps · 06-china-camp · 07-gray-market-usdt · 08-protocol-commoditization · 09-three-circles-mra · 10-occ-charter-scarcity · 11-defi-death-sentence
- v2 横断 TD / MMF / Infra（4）：12-trillion-yen-bet · 13-buidl-invisible-stablecoin · 14-infrastructure-winners · 15-standard-chartered-five-fronts
- v3 深挖特集（4）：16-aerodrome-coinbase-flywheel · 17-christine-moy-signal-chain · 18-privy-aws-agentcore-ai-payments · 19-sovereign-fund-crypto-allocation
- v4 监管 / 黑箱 / 中银 / 终局（4）：20-genius-rulemaking-30-day-preview · 21-tether-reserve-deep-audit · 22-bis-project-agora-panorama · 23-five-protagonists-2030-endgame

4 篇 analysis 草稿：
