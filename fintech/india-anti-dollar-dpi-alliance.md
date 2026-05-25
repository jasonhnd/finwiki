---
title: 印度反美元 DPI 联盟 — UPI / MOSIP / ARC 三轴叙事
aliases: [india-anti-dollar-dpi, upi-mosip-arc-alliance, 印度反美元联盟, india-dpi-anti-usd]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-18
last_tended: 2026-05-18
review_by: 2026-11-18
confidence: likely
tags: [fintech, india, dpi, upi, mosip, arc, polygon, anti-dollar, digital-sovereignty]
sources:
  - https://www.npci.org.in/what-we-do/upi/product-statistics
  - https://www.mosip.io/
  - https://polygon.technology/blog
  - https://www.rbi.org.in/Scripts/PublicationsView.aspx?id=22329
  - https://www.imf.org/en/Publications/fintech-notes/Issues/2023/06/29/Stacking-up-the-Benefits-Lessons-from-Indias-Digital-Journey-520125
status: candidate
---

# 印度反美元 DPI 联盟 — UPI / MOSIP / ARC 三轴叙事


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> 印度对美元稳定币的官方反对立场不是孤立姿态，而是一套**完整的反美元 DPI 联盟叙事**：**UPI 跨境化**（已扩至 8 国）+ **MOSIP 全球输出**（20 国部署）+ **ARC 卢比稳定币**（Polygon 链上、政府背景）= 在新兴市场提供完整的 USDT/USDC 替代方案。这是与美方 GENIUS Act §501 / 三圆 MRA 框架直接对冲的"数字非结盟"（Digital Non-Alignment）路线。

## Key facts

- **UPI 跨境**: 印度-新加坡走廊年交易额 >$10 亿；UPI 接受国 8 个（UAE / 新加坡 / 不丹 / 尼泊尔 / 马尔代夫 / 毛里求斯 / 法国 / 斯里兰卡）
- **UPI 国内体量**: 2026-03 单月 226.4 亿笔 · 29.53 万亿卢比（IMF 认证 = 全球实时支付 49%）
- **MOSIP 输出**: 20 国部署（埃塞俄比亚 / 菲律宾 / 摩洛哥 / 塞拉利昂 / 多哥 / 斯里兰卡 …）· 活跃用户 1.21 亿
- **ARC 稳定币**: Polygon × Anq 联合开发 · 2026-Q1 上线 · 仅企业账户铸造 · 与 RBI LRS 兼容
- **政策态度**: 2023 印度 G20 主席国推动 IMF-FSB 综合纸，但拒绝单纯效仿 GENIUS Act
- **Sandeep Nailwal**: Polygon CEO + ARC 操盘者，X 粉丝 250 万+，是该联盟的人格化代言
- **Nithin Kamath（Zerodha）**: 2026-05-12 公开表态"美元背景稳定币对印度是糟糕主意"——印度顶级 fintech KOL 共振
- **JioCoin**: Reliance Jio 4.5 亿订户 Polygon 链上忠诚 Token，通过"非交易性"分类规避 30% 资本利得税

## Mechanism / How it works

```
        印度反美元 DPI 联盟（三轴）
        │
   ┌────┼──────┬────────────────┐
   ▼    ▼      ▼                ▼
  UPI   MOSIP  ARC          政策框架
  │     │      │            │
  支付  身份   稳定币          反 GENIUS
  │     │      │            │
 跨境 8 20 国  Polygon × Anq  RBI / FM 协调
  国    输出   2026-Q1        DPI 优先
```

**三轴互锁逻辑**：

1. **UPI（支付层）**: 跨境直连消除"需要美元中介"的场景。印度-UAE / 新加坡走廊已绕开 USD
2. **MOSIP（身份层）**: 把 Aadhaar 技术开源到全球南方 20 国，与中国"数字丝绸之路"形成对照——抢占新兴市场身份基础设施
3. **ARC（货币层）**: Polygon 链上 INR 稳定币，**仅企业账户铸造 + 白名单 swap + 与 LRS 兼容**——给 RBI 一个"替代 USDT/USDC"的合规答案，减弱财政部推动美元稳定币合法化的政治压力

**反美元逻辑链**：USDT/USDC 在印度成为"事实美元化"通道 → 削弱卢比购买力 → 影响货币主权 → 必须在国内（ARC）和跨境（UPI）双向堵截。具体国家许可型稳定币 + DPI 输出模式见 [[fintech/national-license-private-stablecoin-with-dpi-export|国家许可型私营稳定币 + DPI 输出]]。

## Origin & evolution

```
2010s         Aadhaar 推广 → 14.3 亿登记
2016          UPI 上线（NPCI / RBI）
2018          MOSIP 启动（IIITB 托管）
2023-02       UPI × Singapore PayNow 跨境互联
2023          印度 G20 主席国 · IMF-FSB 综合纸
2024-02       UPI × UAE AANI 协议
2025-01       Polygon × Jio 4.5 亿订户独家合作
2025-06       Sandeep Nailwal 接任 Polygon Foundation CEO
2025-07       UPI-PayNow 扩容 19 家印度银行
2025-10       Coinbase 重返印度（USDC 主导）
2026-01       Polygon Open Money Stack 发布
2026-Q1       ARC 卢比稳定币上线（Polygon × Anq）
2026-05-12    Nithin Kamath（Zerodha）反 USD 稳定币公开表态
```

**战略演化**: 早期（2010s-2023）是国内 DPI 建设；2023 印度 G20 主席国后开始**对外输出**；2025-2026 Polygon × ARC 把"链上层"补齐，从此 DPI 联盟从"国家支付基础设施"升级为"完整的反美元金融堆栈"。

## Counterpoints

- **UPI 跨境实际体量小**: $10 亿/年 vs USDT 月度 7000 亿——量级差距 70 倍以上，"反美元"短期更像政治姿态
- **ARC 设计自缚**: 仅企业账户铸造 + 白名单 swap = 没有真正的 DeFi 可组合性，本质"许可型稳定币"，国际接受度低
- **MOSIP 输出对手不止美元**: 中国"数字丝绸之路"同样竞争同一批新兴市场，印度未必占优
- **印度国内 USDT 渗透依然深**: 30% / 1% TDS 阻碍只压制了境内合规通道，灰色市场 P2P 持续——参见 [[fintech/gray-market-dollar-network-formalization|灰色市场 USDT 韧性]]
- **政策不一致**: 财政部（推动 GENIUS-like 框架）vs RBI（反美元稳定币）内部张力持续，ARC 是当前的妥协产物
- **国际接受度**: ARC 在印度境外几乎无认知和流动性，"卢比国际化"实质距离仍远

## Open questions

- ARC 主网上线后 6 个月内 TVL / 交易量能否突破临界规模
- UPI × UAE / 新加坡走廊能否在 2027 突破年 $50 亿
- MOSIP 是否会在某关键非洲国家被美方支持的替代方案（如 ID4D）反超
- 印度财政部 vs RBI 内部政策博弈如何收敛——是否最终允许 USDC 在印度合规化
- Polygon × ARC 模式是否会被复制到其他金砖国家（巴西 / 南非）
- Sandeep Nailwal 个人因素的脆弱性——若离开 Polygon CEO，联盟叙事的可持续性

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[business/sandeep-nailwal-polygon-india-dpi-pattern|Sandeep Nailwal · Polygon × 印度 DPI 模式]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆稳定币 MRA 框架]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|稳定币 × 链 × 主权货币三层分流]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

