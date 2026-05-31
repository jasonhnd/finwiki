---
source: fintech/ai-payment-two-tracks
source_hash: 6f3b09e04a749894
lang: zh
status: machine
fidelity: ok
title: "AI 产业的 2  条支付轨道"
translated_at: 2026-05-31T06:16:15.739Z
---

# AI 产业的 2  条支付轨道


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for peer / contrast context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 当前AI产业跨境收款存在非对称的 2  条轨道：

**Stripe 轨道**（已开通）：美国AI企业（OpenAI、Anthropic、Google）通过 Stripe 连接全球信用卡网络，资金在用户无感知的情况下直接划入美国法人账户。几乎覆盖全球所有持有信用卡的用户（同一路径的扩展详见 [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe 5 層トロイの木馬]]）。

**稳定币轨道**（尚未开通）：非美国AI企业向海外销售代币 / 算力资源 / 订阅服务时，Stripe 轨道存在主体限制（需在境外设立法人以持有Stripe账户）、外汇管制、合规复杂性等障碍。稳定币（[[fintech/usd-stablecoin-interchange|USDC/USDT]]）在成本与速度上均具有优势，但用户采用率较低，且面向AI产业的收款基础设施尚不完善。日本稳定币法制环境详见 [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]。

两条轨道并存并非过渡状态。即便在未来的A2A经济时代，Agent间的微支付（$0.001-$1.00 量级）也无法承受 Stripe 最低 $0.30  的手续费，必然走稳定币轨道——这一规模化趋势与 [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin クロスボーダー決済]] 的爆炸性增长相吻合。Agent侧协议的主战场在 [[agent-economy/ai-agent-payment-protocols-overview|AI agent 決済プロトコル 7 層]] 与 [[agent-economy/x402-http-payment-overview|x402 HTTP 決済]]；agent-issuer层的具体参与方请参阅 [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire closed-loop agent issuer]] 和 [[agent-economy/nevermined-compute-payment-protocol|Nevermined 計算リソース決済プロトコル]]。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin クロスボーダー決済の爆発的成長（733% YoY、$226B）]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]]
- [[agent-economy/skyfire-closed-loop-agent-issuer|Skyfire · closed-loop agent issuer]]
- [[agent-economy/nevermined-compute-payment-protocol|Nevermined · compute payment protocol]]
<!-- /wiki-links:managed -->

---

**Last refresh** (2026-05-26): 日本化，更新日期，新增 Wave 10  agent-economy 对等 wikilink（Skyfire、Nevermined）。
