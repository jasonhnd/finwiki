---
source: systems/hook-enforced-compliance
source_hash: 9afb20ea631598d0
lang: en
status: machine
fidelity: ok
title: "Hook-Enforced Compliance"
translated_at: 2026-07-28T22:03:26.809Z
---
# Hook-Enforced Compliance


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## 5-layer public control-point model

| Layer | Public hook / control point | Enforceable boundary | Implementation caution |
|---|---|---|---|
| 1 | `UserPromptSubmit` / `SessionStart` | Adds public rules or validation context before execution | Minimize injected content and include no secrets |
| 2 | `PreToolUse` | Branches a tool call to allow / ask / deny | Test matcher, input schema and exit code / JSON response |
| 3 | `PermissionRequest` | Handles permission decisions according to policy | Do not allow unconditionally; match the target resource and action |
| 4 | `PostToolUse` / `PostToolUseFailure` | Records results and returns additional feedback | Cannot undo side effects that already occurred, so it is not a substitute for a pre-execution gate |
| 5 | `Stop` / `SubagentStop` and regression tests | Blocks completion when required validation is missing and detects recurrence after configuration changes | State the policy for infinite hook loops, timeouts and fail-open / fail-closed behavior |

Sources: ^[https://code.claude.com/docs/en/hooks]


**Essence by layer**:
- Layer 1  is **injection** (before the main contract)
- Layer 2-3  is **format enforcement** (response structure)
- Layer 4  is **tracking** (accumulating past violations and escalating)
- Layer 5  is **prevention** (preventing modifications from reviving past bugs)

## First verification pattern

deployment ≠ working. Even if a Hook is placed, whether it actually fires is a separate issue.

**Flow until the first actual operation**:
1. Deploy (placement) → static state
2. First trigger → observe whether it fires
3. Firing success → reminder injection arrives
4. Observable effect → the LLM's response changes

This wiki entry itself records that moment: during the 2026-04-21 session close, the Layer 1 hook fired successfully for the first time.

## Escalation Staircase (higher enforcement strength according to violation frequency)

This design is not a single defense; **enforcement strength rises according to frequency**:

- ≥3 same type / 30 days → hook strictness UP (the reminder names the specific issue)
- ≥5 same type / 30 days → pre-place `🚨 Compliance Watch: [type]` in the Start Session briefing
- ≥10 same type / 90 days → run AUDITOR Patrol every Session


## Applicability


- **Contracts and SOPs**: "written = followed" is not true · audits, penalties, and logs are the enforcement mechanism
- **Code conventions**: lint / CI / pre-commit hooks are equivalent to Layer 1 
- **Organizational processes**: review steps / sign-off are equivalent to Layer 4 
- **Regulatory compliance**: inspections by supervisory authorities are equivalent to Layer 4  · self-inspections are equivalent to Layer 3  (financial-domain examples run alongside [[exchanges/fsa-business-improvement-orders-history|FSA 業務改善命令史]] and [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制体系]])

## Relationship with cognitive traits

Sensitivity to this pattern is linked to SOUL `strong rule awareness and pursuit of system integrity` (observing candidate · 2026-04-21 newly created). The appearance of this wiki entry itself is evidence of that trait.

## Related

- personal-os-architecture (in preparation)

## Sources

- Public hook and agent-instruction documentation.
- Public workflow-design examples for pre-generation and post-run compliance checks.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
<!-- /wiki-links:managed -->
