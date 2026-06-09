# Model-Agent Development Workflow

> FinWiki 的默认开发协作模式：高推理规格模型负责写需求、规格、架构和验收文档；快速代码实现模型只按已批准的任务包写代码。主会话负责范围控制、验证、提交和发布。

## Purpose

这份手册把“谁写规格、谁写代码、谁验收”固定下来，避免开发 agent 在没有产品/架构约束时直接改代码，也避免代码 agent 顺手修改需求、发布规则或公开金融事实。

适用范围：

- site、tooling、release gate、i18n pipeline、search、wikilink audit 等代码改动。
- docs、BRD/PRD/ARD/FSD/NFR/RTM、runbook、release note 等开发文档改动。
- 多 agent 并行内容开发、翻译、修复或 QA。

不适用范围：

- 用户要求只做一个只读检查。
- 用户明确要求人工主会话直接完成小修，且不需要拆分给代码 agent。
- 紧急修复中没有时间拆分任务包；这种情况事后仍要补齐 changelog / release note / RTM。

## GitHub-Issue Operating Model

FinWiki development is driven by GitHub Issues. Each non-trivial change starts as an issue and is closed with evidence; the issue — not chat history — is the source of truth for what was in scope and how it was validated.

### When to create an issue

- Any planned change to tooling, the site, the release gate, the i18n pipeline, search, the wikilink audit, generated surfaces, or developer docs.
- Any content batch (new entries, dedup, domain expansion) or UI/UX change.
- Any release or incident that needs a recorded scope and closeout.
- Not required for a single read-only check, a trivial maintainer-only fix the user asked for directly, or emergency local diagnostics — unless the user wants an issue. Emergency fixes still backfill `CHANGELOG.md` / release note / RTM afterward.

### How to scope an issue

Every issue states, before work starts:

- **Goal** — one concrete outcome.
- **Scope and non-goals**.
- **Allowed files / areas** (and forbidden ones where useful).
- **Acceptance criteria** — observable and checkable.
- **Validation** — the exact repo commands that must pass.
- **Release-note impact** — whether `README.md` / `CHANGELOG.md` / `releases/` must change.

### Issue types

| Type | Drives | Typical allowed files |
|---|---|---|
| Planning / governance | Operating rules, specs, roadmap | `docs/**`, `AGENTS.md` |
| Implementation (tooling/site) | Code + config | `tools/**`, `lib/**`, `site/**`, `package.json` |
| Content | Wiki corpus entries | `<domain>/**`, `INDEX.md`, release surface |
| UI/UX | Site theme / layout / tokens | `site/src/**`, theme tokens |
| Release / incident | Publish + recovery | `docs/08-operations/**`, runbooks |

### How agents close an issue

- Reference the implementing commit(s).
- Map each acceptance criterion to evidence (command + exit status, or the diff).
- Record the validation bundle that passed (`bun tools/release.ts --check --strict`, the relevant scans, `git diff --check`).
- Close only after the work is pushed and the gate is green; never close on intent alone.

The issue's scope feeds the [Task Packet Template](#task-packet-template); the role contract below governs who writes the spec, who implements, and who reviews within that issue.

## Role Contract

| Role | Preferred model class | Owns | May edit | Must not do |
|---|---|---|---|---|
| Maintainer / main session | Current lead agent | 任务拆解、scope、worktree、验证、commit/push、GitHub Release | Any file required by the approved task | 推送前跳过 gate；忽略未提交用户改动 |
| Documentation/spec agent | High-reasoning specification model | BRD、PRD、ARD、FSD、NFR、RTM、runbook、acceptance criteria、review brief | `docs/`, `CHANGELOG.md`, `README.md`, `releases/` when assigned | 写未经批准的 production code；把私有上下文写进公开 repo |
| Code implementation agent | Fast code-implementation model | 按任务包修改代码、配置、局部测试 | 任务包列出的 code/config files only | 改 BRD/PRD/ARD/FSD/NFR/RTM、release docs、schema policy 或 scope |
| QA/release reviewer | High-reasoning model or maintainer | diff review、RTM 对账、gate 解释、发布记录 | Review notes and assigned docs | 只看 agent 报告而不看真实 diff / command output |

Model names are intentionally not pinned here. If the available model list changes, keep the split: high-reasoning models write and review specifications; fast coding models implement bounded tasks from those specifications.

## Standard Flow

1. Intent capture: maintainer records the user goal, non-goals, risk level and expected artifact.
2. Spec pass: documentation/spec agent updates or confirms BRD/PRD/ARD/FSD/NFR/RTM and acceptance criteria.
3. Task packet: maintainer writes a bounded implementation packet for the code agent.
4. Code pass: the code implementation agent implements only the authorized files and returns a concise diff/command report.
5. Review pass: maintainer or high-reasoning reviewer compares the diff against the task packet, RTM and acceptance criteria.
6. Release sync: update README/CHANGELOG/release note/generated surface when AGENTS.md requires it.
7. Verification: run the required gates and inspect generated drift.
8. Commit/push: only after the user explicitly asks for publish or the current instruction already includes it.

## Task Packet Template

Use this template when handing implementation to a code implementation agent:

```text
ROLE: Code implementation agent for FinWiki.
GOAL:
- <one concrete outcome>

SOURCE OF TRUTH:
- docs/02-product/prd.md: <relevant PRD IDs>
- docs/04-architecture/ard.md or adr.md: <relevant constraints>
- docs/05-functional-specs/<spec>.md: <functional behavior>
- docs/03-requirements/rtm.md: <traceability rows>

ALLOWED FILES:
- <exact file or directory list>

FORBIDDEN FILES:
- BRD/PRD/ARD/FSD/NFR/RTM unless explicitly assigned
- README.md / CHANGELOG.md / releases/ unless explicitly assigned
- unrelated corpus entries, tools, site files, or domain directories

IMPLEMENTATION RULES:
- Preserve existing patterns and code style.
- Do not change public facts, source hashes, or release rules to make tests pass.
- If scope is ambiguous, stop and report the ambiguity.

VERIFY:
- <commands the code agent should run>

RETURN:
- Files changed
- Behavioral change
- Commands run and exit status
- Blockers or residual risk
```

## Documentation Agent Contract

The documentation/spec agent must produce development-ready instructions, not prose-only summaries.

Required output for any non-trivial feature or tooling change:

- Requirement IDs or a clear statement that no new requirement ID is needed.
- Functional behavior, inputs, outputs, edge cases and non-goals.
- Architecture boundary: what subsystem owns the change and which files should remain untouched.
- Acceptance commands and expected signals.
- Release/documentation obligations.
- A code-agent task packet when implementation should be delegated.

The documentation/spec agent may not:

- Invent facts for wiki entries.
- Treat chat history, private notes or local paths as public sources.
- Broaden implementation scope without maintainer approval.
- Mark requirements as satisfied before the implementation diff and gates are reviewed.

## Code Agent Contract

The fast coding agent is used for implementation because the work packet should already contain the reasoning-heavy decisions. Its job is execution, not requirements negotiation.

The code agent must:

- Read the files listed under `SOURCE OF TRUTH`.
- Modify only files under `ALLOWED FILES`.
- Keep diffs narrow and mechanical where possible.
- Use repo tooling and existing helpers instead of inventing a parallel implementation.
- Stop rather than guess when a requirement conflicts with the codebase.
- Return command output summaries, not just “done”.

The code agent must not:

- Change BRD/PRD/ARD/FSD/NFR/RTM to fit its code.
- Edit release notes or generated surfaces unless the packet explicitly assigns release sync.
- Hide stale i18n by rewriting `source_hash`.
- Use `--no-verify` or skip release gates.
- Start additional subagents.

## Parallel Agent Limits

- Absolute active subagent limit: 10.
- Operational default for web/search-heavy work: 5-6 to avoid rate limiting.
- A new batch starts only after the previous batch is finished and closed/retired.
- Failed agents are audited by real filesystem state before retry; do not trust agent status text alone.
- The maintainer, not the code agent, opens or closes subagents.

## Review Checklist

Before accepting code-agent output:

- The diff only touches allowed files.
- The implementation still matches PRD/FSD/ARD/NFR and the task packet.
- RTM rows still point to the correct implementation and validation evidence.
- Required commands were run, or missing commands are explicitly reported.
- Release docs are updated by the maintainer/spec agent when required.
- `git status --short --branch` has no unrelated or unexplained changes.

## Related Documents

- [Documentation System](../00-governance/documentation-system.md)
- [RTM](../03-requirements/rtm.md)
- [FSD](../05-functional-specs/fsd.md)
- [Parallel Development](parallel-development.md)
- [QA Checklist](../07-quality/qa-checklist.md)
