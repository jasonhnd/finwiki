# 条目撰写标准 / Entry Authoring Guide

> 面向**维护者 / agent**：如何写一条高质量的 wiki entry。本文是 [architecture.md](architecture.md) 「如何新增一个 wiki entry」一节的**操作化展开**，不重复其内容。
> **唯一真相源是根目录 [`SCHEMA.md`](../SCHEMA.md)**——frontmatter 字段、必填/可选、canonical key order、public-surface 要求都以它为准。本文若与 `SCHEMA.md` 冲突，以 `SCHEMA.md` 为准。
> 死链与 body-link 密度的最终裁判是 `bun tools/wiki_link_audit.ts`（经 `release.ts --check --strict`）；不要信裸 grep（见 [gotchas.md](gotchas.md#4-假死链中危)）。

一句话：**一条好 entry = schema-valid frontmatter + `## Wiki route` 开场 + ≥3 条已验证 body wikilink + 公开信息正文 + `## Related` / `## Sources` 收尾 + 在领域 `INDEX.md` 登记一行。**

---

## 1. Frontmatter

字段权威定义见 [`SCHEMA.md`](../SCHEMA.md)。**键顺序必须照抄 `SCHEMA.md` 的 Canonical Key Order**（title → aliases → domain → slug → topic → created → last_updated → last_tended → review_by → confidence → tags → status → sources → … → canonical_anchor → type → note）。可选键不用就整行省略，**不要写空键占位**。

复制粘贴模板（含全部常用字段，可选项已标注）：

```yaml
---
title: "<人读标题，简洁；案例类可较长，见 §1 title>"
aliases:
  - "<domain>/<slug>"              # 完整路径别名，帮助 Obsidian 解析
  - "<slug>"                       # 文件名 stem
  - "<英文别名>"
  - "<日文读法，如 セゾン自動車火災保険>"   # 日文实体务必加假名/汉字读法
domain: "<父目录名，必须等于所在目录>"
slug: <文件名 stem>                # 可选；通常 = 文件名（不含 .md）
created: 2026-MM-DD
last_updated: 2026-MM-DD
last_tended: 2026-MM-DD            # 上次「实质审阅」日期，非 cosmetic 编辑
review_by: 2026-MM-DD             # wiki-decay 再次浮出的目标日；默认 +180d
confidence: likely                # impossible | unlikely | possible | likely | certain
tags: [<domain>, <topic-tag>, ...]
status: active                    # candidate | confirmed | active | borderline | deprecated
sources:
  - "https://<公开 URL，优先>"
  - "<或公开文档/公开来源描述>"
canonical_anchor: <vault-root 路径>  # 可选；仅 mirror page 设，见下
---
```

字段约定（house style，补充 `SCHEMA.md`）：

| 字段 | 约定 |
|---|---|
| `title` | 机制/框架类用术语标题；案例类常用「实体 — 一句话定位」长标题（如 Aeon 案例）。日文/中文术语条目可把术语放标题首（如 `合併 (Japan corporate merger) — …`）。 |
| `aliases` | 用 `[]` 表示无。日文实体**必须**含假名或汉字读法别名，否则 `[[别名]]` 无法解析。建议同时放 `domain/slug` 全路径与裸 `slug`。 |
| `domain` | 等于所在父目录名，**不可臆造**。领域是 `INDEX.md` 表的唯一真相源（见 architecture.md）。 |
| `created` / `last_updated` / `last_tended` | 新建时三者同日。`last_tended` 只在**实质审阅**时更新（cosmetic 编辑不动它），驱动 wiki-decay。 |
| `review_by` | 默认 created +180d。`confidence` 越低、领域越易变，可设更短。 |
| `confidence` | 按 `SCHEMA.md` 的 Confidence Enum 选；机制/法条类常 `likely`，单源早期合成用 `possible`。**不要为了好看虚标 `certain`**——`certain` 要多源收敛或一手核验。 |
| `status` | 路由面/活跃条目 `active`；新捕获待验证 `candidate`；审阅逾期/信心下降 `borderline`。 |
| `tags` | 首个一般是 `domain`，其余为 cross-cutting 检索标签（实体名、主题、地域）。 |
| `sources` | **复数数组，优先 URL**。只放公开 URL / 公开文档 / 公开来源描述（见 §4）。与正文 `## Sources` 人读列表镜像。 |

### `canonical_anchor`——mirror page 专用

`canonical_anchor` = 某个**跨领域实体或 mirror page** 的「单一真相源锚点条目」的 vault-root 路径（如 `JapanFG/saison-automobile-fire-insurance`）。

- **何时设**：同一实体在多个领域有页面时。**实体主页（anchor）不设** `canonical_anchor`；各**镜像/视角页**（domain-specific view）设 `canonical_anchor` 指向那个 anchor。
  例：`insurance/saison-automobile-fire.md` 是 SOMPO Direct 的**保险领域视角页**，它 `canonical_anchor: JapanFG/saison-automobile-fire-insurance`（指向 JapanFG 实体 anchor）。
- **如何避免 drift**：设了 `canonical_anchor` 后，**必须在 core body（通常 `## Wiki route`）里也用 `[[anchor|label]]` 显式交叉链接同一个 anchor**。canonical_anchor 审计会核对 frontmatter 锚点是否在正文里被链回——只写 frontmatter、正文不链，会被判 drift。saison 页的做法：frontmatter `canonical_anchor` + Wiki route 里 `The canonical entity anchor for this insurer is [[JapanFG/saison-automobile-fire-insurance|its JapanFG entity page]]`，两者一致。
- 普通单一领域条目**不需要** `canonical_anchor`，整行省略。

---

## 2. Body structure

**core body 的定义：frontmatter 之后、`## Related` 之前的一切**。body-link 要求与 canonical_anchor 交叉链接都只认 core body——footer 里的链接不算数。所以路由链接、anchor 回链都要写进 core body。

推荐骨架（顺序取自最佳条目）：

```markdown
# <title 同 frontmatter>

## Wiki route
<定位 + 路由链接，见下>

## TL;DR
<2-4 句：是什么、关键事实、为什么重要>

## <实质小节 1..N>
<机制 / 对比 / 法条 / 时间线…鼓励用表格>

## Related
- <footer 链接列表>

## Sources
- <镜像 frontmatter sources[] 的人读列表>
```

- **`## Wiki route`（开场必写）**：一段话，做两件事——(1) 用 `[[domain/INDEX|…]]` 声明本条所属领域路由；(2) 给出 peer/contrast 与 system/regulatory 的 `[[…|…]]` 链接，并（若是 mirror page）链回 `canonical_anchor`。这是满足 body-link 要求的主力段落。措辞模板见各最佳条目，如 TORF 的 “This entry sits under `[[money-market/INDEX|…]]`. Read it against … for … and … for the supervisory anchor `[[JapanFG/fsa|…]]`.”
- **实质小节**：表格优先（公司身份表、对比矩阵、法条/时间线表都是 house style）。机制类条目可加 `## Counterpoints` / `## Open questions` / `## Boundary cases`；案例类常加 `## Strategic rationale` / `## Counterpoints`。
- **可选 `校核状态` blockquote**：部分条目在 `## Sources` 后加 `> [!info] 校核状态` 注明 `confidence:` 与哪些是公开事实、哪些是 forecast/shape（见 Aeon、合併 条目）。信心非 `certain` 时推荐加。
- **`## Related`（footer）**：纯链接列表，首行一般是 `[[domain/INDEX|… INDEX]]`，末行常是 `[[INDEX|FinWiki index]]`。footer 链接**不满足** body-link 要求，只是导航补充。
- **`## Sources`**：镜像 frontmatter `sources[]`，人读化（可写「机构名: 页面标题」或带 URL）。

---

## 3. Wikilink rules

> 死链/密度的最终裁判是 `wiki_link_audit`（经 `release.ts --check --strict`，要求 `issues=0`）。下列规则就是为了一次过这道门禁。

1. **core body ≥ 3 条 `[[wikilink]]`**（在 `## Related`/`## Sources` 之前）。按 `SCHEMA.md` Body-Link Requirement，三条应覆盖：**一条路由链接到领域 `INDEX`**、**一条 peer / contrast**、**一条 system / regulatory**。`## Wiki route` 一段通常就能凑齐。
2. **每个 `[[target]]` 必须解析到已存在的条目**。链接前**先核实目标存在**：
   - `ls <domain>/` 看文件名；或
   - `bun tools/wiki_link_audit.ts` 跑一遍看有无新增 issue。
   - 别用裸 `grep '[[domain/'` 判断死活——它不解析 frontmatter `aliases`，会**误报**（gotchas #4）。
3. **alias 解析**：`buildAliasMap` 用目标条目的 frontmatter `aliases` 解析 `[[别名]]`。链日文实体可用其读法别名，但**该别名必须真的在目标的 `aliases` 里**。
4. **用 piped label**：`[[domain/slug|人读标签]]`，让正文通顺、目标明确。
5. **绝不链向不存在或 pending 的条目**。宁可不链，也不要留下指向「计划中」页面的死链——它会直接卡住发布门禁。
6. **散文里别写字面 `[[domain/...]]`**（gotchas #6）：本 `docs/` 已排除出审计，**但** `README.md`/`CHANGELOG.md`（属 `CONTROL_DOCS`，会被审计）里举例路径时，用反引号路径前缀 `` `domain/slug` ``（**无双括号**），不要写带闭合 `]]` 的 `[[domain/slug]]`——审计正则不理会反引号，会把它当真 wikilink 解析成死链。

---

## 4. Content standards

- **只放公开信息（PUBLIC-INFORMATION-ONLY）**。可写：公开公司、监管机构、法律法条、公开 filings、官方网站、公开市场数据、以及对**公开来源的综合**。权威边界见 `SCHEMA.md` 的 Public-Surface Requirement。
- **绝不包含**（哪怕本条很「内部」）：个人隐私（收入/账户/税务/资产/护照/住址/电话/家庭）、本地文件系统路径、非公开会话/客户/对手方信息、内部项目史、以及**任何捏造的具体数字**。这是公共 GitHub repo。
- **偏好机制 / 制度 / 框架知识，而非脆弱的公司财务数字**。法条、市场结构、监管框架、产品机制是稳定且可公开核验的；具体 cap table、stake、季度数字易过期且常非公开。需要描述 footprint 时，写**「形状 shape」而非「快照 snapshot」**，并显式 hedge——参照 Aeon 条目的 “treat the above as the **shape** of the footprint from public disclosures, not a fixed cap table.”
- **引用公开来源**：每条实质主张应可回溯到 `sources[]` 里的公开来源。信心非 `certain` 时，用 `校核状态` blockquote 标明哪些是公开事实、哪些是 forecast。
- **三语现实（trilingual reality）**：entry **只用一种语言撰写**（通常英文或中文），`ja/zh/en` 译文是 `site/src/content/i18n/{ja,zh,en}/…` 的**机器翻译产物**，**不要手写多语正文**。日文/中文术语保留原文（如 `合併`、`適格合併`、`TONA`）是好的，但整篇正文保持单一撰写语言即可。

---

## 5. Worked example

一条最小但完整、schema-valid 的虚构示范条目（机制类，`payments` 领域）。直接复制改写即可——**前提是其中每个 `[[target]]` 在你的 vault 里都真实存在**，否则换成存在的目标。

```markdown
---
title: "Account-to-account (A2A) push payment rail — pull 卡网络之外的实时清算路径"
aliases:
  - "payments/a2a-push-payment-rail"
  - "a2a-push-payment-rail"
  - "account-to-account push payment"
  - "A2A push rail"
domain: "payments"
slug: a2a-push-payment-rail
created: 2026-06-04
last_updated: 2026-06-04
last_tended: 2026-06-04
review_by: 2026-12-04
confidence: likely
tags: [payments, a2a, push-payment, real-time, clearing]
status: active
sources:
  - "https://www.bis.org/cpmi/publ/d106.htm"
  - "https://www.fsa.go.jp/en/"
---

# Account-to-account (A2A) push payment rail — pull 卡网络之外的实时清算路径

## Wiki route

This entry sits under [[payments/INDEX|payments INDEX]]. Read it against
[[payments/card-pull-payment-model|the card pull-payment model]] for the
peer / contrast (who initiates the debit), and against
[[JapanFG/fsa|the FSA]] for the supervisory / regulatory boundary over
fund-transfer service providers.

## TL;DR

An **A2A push rail** moves funds directly between two deposit accounts on a
*payer-initiated push*, settling in (near) real time, rather than a
*payee-initiated pull* through a card network. It removes the card
interchange layer and changes who bears authorization risk.

## Push vs Pull

| Property | A2A push | Card pull |
|---|---|---|
| Initiator | Payer | Payee (merchant) |
| Interchange | None | Yes |
| Settlement | Near real-time | Deferred net |
| Reversal | Hard (credit push) | Chargeback path |

Because a push is hard to reverse, dispute / fraud handling differs sharply
from the chargeback machinery of [[payments/card-pull-payment-model|the card
model]]; this shifts authorization risk onto the payer side.

## Related

- [[payments/INDEX|payments INDEX]]
- [[payments/card-pull-payment-model|card pull-payment model]]
- [[JapanFG/fsa|FSA]]
- [[INDEX|FinWiki index]]

## Sources

- BIS CPMI: payment-system principles (real-time clearing context).
- FSA English portal: fund-transfer service regulatory context.
```

注：此示范有 3 条 core-body wikilink（route 到 `payments/INDEX`、peer 到 card model、regulatory 到 FSA），满足密度要求；无 `canonical_anchor`（单一领域条目）。

---

## 6. Pre-submit checklist

提交前逐项核对（任一不过都别 push——发布门禁是硬约束，见 gotchas #9）：

- [ ] **frontmatter 完整**：必填字段齐全，键顺序照 `SCHEMA.md` Canonical Key Order，无空键占位。
- [ ] `domain` = 所在目录名；`aliases` 含日文读法（若是日文实体）。
- [ ] `confidence` / `status` 诚实选取；信心非 `certain` 时加 `校核状态` blockquote。
- [ ] **`## Wiki route` 开场**已写，含路由 + peer + system/regulatory 链接。
- [ ] **core body ≥ 3 条 `[[wikilink]]`**（`## Related` 之前），覆盖 route / peer / regulatory 三类。
- [ ] **每个 `[[target]]` 已验证存在**（`ls` / audit，不信裸 grep）；无指向 pending/不存在条目的链接。
- [ ] 若设了 `canonical_anchor`：core body 里已用 `[[anchor|…]]` 链回同一锚点（防 drift）。
- [ ] **只含公开信息**：无个人隐私 / 本地路径 / 非公开内容 / 捏造数字；财务用「shape 而非 snapshot」并 hedge。
- [ ] `## Sources` 镜像 frontmatter `sources[]`，优先公开 URL。
- [ ] **在领域 `INDEX.md` 加一行**登记本条（按该 INDEX 的表格列格式）；若领域 count 变动，手动核对 `INDEX.md` 根表（`release.ts` 不自动改）。
- [ ] 正文/任何会被审计的 control doc 里**未写字面带 `]]` 的 `[[domain/...]]`**（散文举例用反引号路径前缀）。
- [ ] 最终以 `bun tools/release.ts --check --strict` `EXIT=0`（link audit `issues=0` + counts in sync）为准；之后走 [release-process.md](release-process.md)。
