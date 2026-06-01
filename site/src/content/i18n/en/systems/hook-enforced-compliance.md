---
source: systems/hook-enforced-compliance
source_hash: f760e5e1747f8cc6
lang: en
status: machine
fidelity: ok
title: "Hook-Enforced Compliance"
translated_at: 2026-06-01T04:15:40.098Z
---
# Hook-Enforced Compliance


## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）]] for peer / contrast context and [[fintech/INDEX|fintech index]] for the broader system / regulatory boundary.

## 5 -Layer Defense Model (personal OS)

| Layer | Nature | Implementation |
|---|------|------|
| 1 | **Pre-injection** (hardest) | UserPromptSubmit hook → injects a HARD RULE reminder before response generation |
| 2 | **Output-format enforcement** | Pre-flight Compliance Check → `🌅 Trigger: ...` in the first ROUTER line |
| 3 | **Subagent self-attestation** | Subagent declares "Task() true launch" on the first line |
| 4 | **Post-run audit** | AUDITOR Compliance Patrol (Mode 3) 7-class taxonomy |

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
