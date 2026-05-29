---
title: "[opinion] Agent-driven market data interpretation pipeline · feed → LLM → signal → trading system"
source_entry: agent-economy/agent-driven-market-data-interpretation-pipeline.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推定セクション / 推論 / 反論）。公開面・監査・計数から除外。
---

# 主観内容の隔離 — Agent-driven market data interpretation pipeline · feed → LLM → signal → trading system

> 出典エントリー: `agent-economy/agent-driven-market-data-interpretation-pipeline.md`

<!-- Phase 1.5 追加抽出 (2026-05-29) -->

## Counterpoints / open questions

- **"BloombergGPT-class finance LLMs are overrated"**: general frontier models (GPT-5, Claude Opus, Gemini Ultra) are catching up fast on finance benchmarks. BloombergGPT's 50B-param finance-specific advantage may be eroded by 2026-2027 if frontier models continue scaling. Bloomberg's moat shifts from model to data + Terminal distribution.
- **The audit trail cost may break the economics**: terabytes/day of logs at multi-year retention represents real infrastructure cost. Some firms may quietly cap retention; this could become a regulator examination finding.
- **Vendor concentration risk on the LLM provider side**: if Anthropic / OpenAI / Google goes down, 30%+ of LLM-driven signal generation fails simultaneously. Some firms run dual providers for redundancy (BBVA: Claude + GPT; JPM: internal + OpenAI).
- **Will regulators accept LLM chain-of-thought as model documentation?**: under SR 11-7, models require formal documentation (purpose, design, assumptions, limitations). Chain-of-thought traces are not yet considered equivalent. Until they are, firms maintain dual documentation.
- **News-event arbitrage compression**: if every G-SIB runs LLM-driven event extraction with sub-second latency, the alpha decays fast. The 2025-2026 indication: alpha in headline-reaction strategies has compressed materially; alpha in deep-document interpretation (10-K, earnings transcript, central-bank policy statements) remains.
- **Open-source finance LLMs (FinGPT, FinBERT successors)**: capable but lag frontier models by 12-18 months. Some firms use them for non-sensitive R&D to avoid frontier-model token costs. None are major in production.
