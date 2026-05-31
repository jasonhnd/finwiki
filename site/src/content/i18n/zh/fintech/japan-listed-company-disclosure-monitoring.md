---
source: fintech/japan-listed-company-disclosure-monitoring
source_hash: 8d3febcdcd38c2f1
lang: zh
status: machine
fidelity: ok
title: "日本上市公司 开示信息监控 SOP（17 渠道）"
translated_at: 2026-05-31T06:16:15.735Z
---

# 日本上市公司 开示信息监控 SOP（17 渠道）

> [!info] 核心认知
> 日本上市公司适时开示（[[fintech/japan-third-party-allotment-5-step-flow|第三者割当]]·财报·收购·IR 等）实时监控的**官方 + 聚合 + 海外** 三层监控渠道图谱。

合理选择渠道，可高效覆盖**公告15:00 发布后数分钟内的补充信息 + 次日舆情动向把握**。

## 三层结构

### 第一层：官方来源（Primary · 最权威）

**可信度 100% · 当日实时**

| # | 渠道 | URL 检索模式 | 用途 |
|---|---------|---------------|-----|
| 1 | TDnet 适时开示信息查阅服务 | `release.tdnet.info/inbs/I_main_00.html` | 东证交所官方 · 15:00 后即时公布 · 保存31 日 |
| 2 | EDINET（金融厅） | `disclosure2.edinet-fsa.go.jp/` | 有价证券申报书·临时报告书·大量持股报告书 |
| 3 | 东证交所上市公司检索 | `www2.jpx.co.jp/tseHpFront/JJK010010Action.do` | 上市类别·发行股数·基本信息 |

### 第二层：聚合器（Secondary · 易用性）

**可信度 95% · 散户视角·含舆情**

| # | 渠道 | URL 模式 | 特点 |
|---|---------|------------|-----|
| 4 | Yahoo! Finance Japan 适时开示 | `finance.yahoo.co.jp/quote/{code}.T/disclosure` | 散户最常用 · 历史记录长 |
| 5 | 日经 会社信息 DIGITAL 开示 | `nikkei.com/nkd/company/disclose/?scode={code}` | 章程·股东大会等分类 |
| 6 | Kabutan 株探 | `kabutan.jp/stock/?code={code}` | 散户速报 · 留言板舆情 |
| 7 | Minkabu みんかぶ | `minkabu.jp/stock/{code}` | 买入/卖出预测比例 |
| 8 | 会社四季报在线 | `shikiho.toyokeizai.net/stocks/{code}/corporate` | 四季报视角定性评价 |
| 9 | Buffett Code | `buffett-code.com/company/{code}/` | 财务可视化 · 财报对比 |
| 10 | FISCO 企业信息 | `web.fisco.jp/platform/companies/{code}` | 日文财务分析专业平台 |
| 11 | Logmi Finance | `finance.logmi.jp/companies/{id}` | 财报说明会文字记录 |
| 12 | 股东优待指南（大和 IR） | `yutai-guide.daiwair.co.jp/stock/detail/{code}` | 仅在发布优待时有效 |
| 13 | Ullet（大量持股报告） | `ullet.com/{code}/EDINET/ranking/stock` | 5%规则专项 |

### 第三层：海外渠道（Tertiary · 外盘参考）

**可信度 80% · 英文信息·外国投资者视角**

| # | 渠道 | URL 模式 |
|---|---------|------------|
| 14 | CNBC | `cnbc.com/quotes/{code}.T-JP` |
| 15 | Bloomberg 终端/网页版 | `bloomberg.com/quote/{code}:JP` |
| 16 | Google Finance | `google.com/finance/quote/{code}:TYO` |
| 17 | Yahoo Finance（美版） | `finance.yahoo.com/quote/{code}.T/` |

## 时序 SOP（大型开示日）

### T-1 日（前日）

- [ ] 创建浏览器书签"{code} 开示监控"文件夹
- [ ] 保存 TDnet + Yahoo! Japan 适时开示 + EDINET 3 核心链接
- [ ] 整理事前信息（三方比例·发行价格等）

### 当日（T=0）

1. **开市前 8:00**：确认 Yahoo!·Kabutan 隔夜异动新闻
2. **15:00 前**：TDnet 主页待机 · 准备刷新
3. **15:00 后**：
   - 在 TDnet 用公司代码或公司名称检索 → 保存原文 PDF
   - 核对事前信息与公告内容（三方比例·价格·目的）
4. **当日 17:00 前**：在 EDINET 确认申报书（是否有临时报告书提交）
5. **当日晚间**：Yahoo·Kabutan·Minkabu 留言板舆情扫描

### T+1 日〜 T+3 日

- 监控股价反应（日本二级市场）
- 海外盘反应（香港·新加坡电子盘）
- 大量持股报告书更新 → 在 Ullet 确认

### T+7 日〜 T+30 日

- 缴款完成报告
- 登记变更公告
- 股价30 日 VWAP 走势

## 文件保存建议

开示当日保存内容：
- `research/{date}_disclosure-tdnet-original.pdf` — TDnet 原文
- `research/{date}_disclosure-edinet-filing.pdf` — EDINET 申报书
- `research/{date}_price-reaction.md` — 当日·T+1·T+3 股价反应记录

## 适用场景

1. **跟踪投资标的开示**：定向增发·增资·合并·业绩预测修订
2. **获取竞争对手信息**：同业他社财报·战略发布
3. **并购尽职调查**：收购候选方过去5 年开示历史 — 与要约收购监管的衔接参见[[finance/japan-tender-offer-process|日本公開買付プロセス]]
4. **IR 合规**：自发案件公告前的模拟演练
5. **大量持股报告监控**：5%规则专项 — [[finance/japan-large-shareholding-disclosure|日本大量保有報告制度]]

## 注意事项

1. **TDnet 仅保存31 日**（此后须使用付费检索服务）
2. **EDINET 仅包含提交文件**（内部会议纪录等不在其中）
3. **散户舆情存在偏差**（Kabutan 留言板悲观倾向较强）
4. **海外盘信息有延迟**（日本时间15:00 → 海外即时反映需1-3小时）

## 关联

- [[fintech/japan-third-party-allotment-5-step-flow|第三者割当 5 段階フロー]] — 作为开示前后文脉的流程
- [[fintech/japan-financial-regulation|日本金融規制]] — 资金结算法·金融商品交易法·信托业法

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
<!-- /wiki-links:managed -->
