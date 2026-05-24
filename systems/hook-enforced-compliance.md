---
title: Hook-Enforced Compliance（Hook で強制される規則順守）
aliases: []
domain: systems
kind: knowledge
slug: hook-enforced-compliance
created: 2026-04-21
last_updated: 2026-05-18
last_tended: 2026-05-05
review_by: 2026-10-30
confidence: possible
tags: [compliance, enforcement, hook, documentation-vs-execution, meta]
status: candidate
evidence_count: 1
sources:
  - "Public agent-framework documentation on hook-based automation and instruction injection."
  - "Public Codex / AGENTS-style repository instruction patterns."
  - "Public Claude Code hook documentation and workflow examples."
---

# Hook-Enforced Compliance


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## 5 層防御モデル（personal OS）

| Layer | 性質 | 実装 |
|---|------|------|
| 1 | **前置注入**（最硬） | UserPromptSubmit hook → 応答生成前に HARD RULE reminder を注入 |
| 2 | **出力形式強制** | Pre-flight Compliance Check → ROUTER 首行で `🌅 Trigger: ...` |
| 3 | **サブエージェント自己証明** | Subagent 第一行で「Task() 真実 launch」を宣言 |
| 4 | **事後監査** | AUDITOR Compliance Patrol（Mode 3）7-class taxonomy |

**層別の本質**：
- Layer 1 は**注入**（主契約前）
- Layer 2-3 は**形式強制**（応答の構造）
- Layer 4 は**追跡**（過去の violation を積み上げてエスカレーション）
- Layer 5 は**防止**（改変が過去バグを復活させない）

## 首次 verification pattern

deployment ≠ working。Hook を配置しても、実際に firing するかは別問題。

**首次実働までの流れ**：
1. Deploy（配置）→ 静的状態
2. First trigger（最初のトリガー）→ firing するか観測
3. Firing success（成功）→ reminder 注入が到達
4. Observable effect（観測可能な影響）→ LLM の応答が変化

本 wiki 項目自体がその瞬間を記録している：2026-04-21 本次退朝で Layer 1 hook 初回 firing 成功。

## 昇級階段（違反頻度に応じた強制度上昇）

この設計は単一防御ではなく **頻度に応じて強制度が上昇**：

- ≥3 同類 / 30 日 → hook 厳格度 UP（reminder が具体名指し化）
- ≥5 同類 / 30 日 → Start Session briefing に `🚨 Compliance Watch: [type]` 予置
- ≥10 同類 / 90 日 → AUDITOR Patrol を毎 Session 実行


## 応用可能性


- **契約書・SOP**：「書いた = 守られる」ではない · 監査・罰則・ログが強制機構
- **コード規約**：lint / CI / pre-commit hook が Layer 1 相当
- **組織プロセス**：review step / sign-off が Layer 4 相当
- **法令順守**：監督官庁の査察 が Layer 4 相当 · 自主検査が Layer 3 相当（金融ドメインの実例は [[exchanges/fsa-business-improvement-orders-history|FSA 業務改善命令史]] や [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制体系]] が並走）

## 認知特性との関係

このパターンへの敏感性は SOUL `強規則意識・システム完整性希求`（observing 候補 · 2026-04-21 新設）と連動。本 wiki 項目の出現自体がその特性の証跡。

## 関連

- personal-os-architecture（準備中）

## 出典

- Public hook and agent-instruction documentation.
- Public workflow-design examples for pre-generation and post-run compliance checks.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
<!-- /wiki-links:managed -->
