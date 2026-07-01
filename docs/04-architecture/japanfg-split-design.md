# JapanFG 拆分设计 / JapanFG Split Design

> 状态：**已执行（v2026.06.04-4，2026-06-04）**。本文是 JapanFG（≈620 entity）物理拆分的权威设计。实际落地为 **17 个顶级域**（设计时 14，执行中数据显示 payments-cards-leasing-finance 杂类需再分，新增 consumer-finance / trading-company-finance / financial-conglomerates）。决策与评估见 [adr.md](adr.md) ADR-008；发布记录 `releases/v2026.06.04-4.md`。验证：`--check --strict` EXIT=0、dead=0、drift=0、domains=40。

## 1. 背景与决定

JapanFG 是旗舰领域：≈620 个具体金融机构 entity 页 + **58,061 条 `[[JapanFG/…]]` 入链**（corpus-wide）+ ja/en 双语镜像。当前用 9 个 tag 驱动 sub-INDEX 做导航（[ADR-004](adr.md#adr-004japanfg-用-sub-index-细分而非移文件)：**刻意不移文件**，因为移动会改 URL + 重写数万入链，代价极大且不可逆）。

用户判断 JapanFG「太笼统」，决定**物理拆分为新顶级领域**——这是对 ADR-004 的**知情推翻**：接受 ~58,061 条 wikilink 重写 + ≈620 个 URL 变更（旧 URL 404、非 301、不可逆）+ i18n×2 + 站点配置 + audit map + root INDEX 全部同步的代价，换取更细的领域结构。

**用户已批准的四个关键决定**：
1. 拆分方式 = **物理拆成新顶级领域**（非逻辑拆分、非子目录）。
2. 粒度 = **更细**（把 3 个大/混类再拆）。
3. 命名 = **角色复数名**（`securities-firms` / `life-insurers` …，避开与现有主题领域 `securities`/`insurance`/`payments` 冲突，并标明「机构」属性）。
4. 牌照子树 = **独立成 `financial-licenses` 领域**。

## 2. 落地分类（17 个新机构类型领域）

实际落地时，把 9 个 sub-INDEX 升为顶级领域，并把混类继续拆到机构类型足够清晰的粒度。`JapanFG/INDEX` 保留为 umbrella hub；具体实体页迁入下列 17 个领域。

| 新领域（role-plural） | 来源/判定 |
|---|---|
| `megabanks` | megabanks and financial groups |
| `regional-banks` | regional and digital-bank entity pages |
| `cooperative-banks` | shinkin / shinkumi / cooperative finance |
| `trust-banks` | trust banks and trust companies |
| `life-insurers` | life-insurance operators |
| `non-life-insurers` | non-life and kyosai-adjacent operators |
| `securities-firms` | securities firms / FIEA operators |
| `asset-managers` | investment managers and trust-investment operators |
| `payment-firms` | payments, funds transfer, prepaid and settlement operators |
| `card-issuers` | credit-card issuers and card companies |
| `leasing-firms` | leasing and captive leasing operators |
| `consumer-finance` | consumer-credit / personal-finance operators |
| `trading-company-finance` | sogo-shosha finance subsidiaries |
| `financial-conglomerates` | non-bank financial groups and parent-company finance clusters |
| `foreign-financial-institutions` | foreign bank, broker, insurance and asset-management branches/entities |
| `financial-regulators` | regulators, SROs, policy agencies and public bodies |
| `financial-licenses` | license and registration route pages |

**领域数：23 → 40**。`JapanFG/INDEX` 仍是 0-entry umbrella hub；17 个机构类型领域各有自己的 `INDEX.md`。

命名与原主题领域零冲突（`banking`≠`megabanks`/`regional-banks`；`securities`≠`securities-firms`；`insurance`≠`life-insurers`；`payments`≠`payment-firms`）。

## 3. entity → 领域映射方法

一个脚本按 frontmatter `tags` 给每个 entity 派生 home（主类 → 拆分 tag）。sub-INDEX 成员合计（644）略 > entity 数（≈620）→ 少量 entity 被多个 sub-INDEX 列出；**每个文件只有一个 home**（主 tag 胜出）。脚本产出：

- `mapping.tsv`：`entity_path → new_domain`（所有 entity 必须 100% 分配）。
- `ambiguous.tsv`：多类/无类的 entity，**移动前人工逐一裁定**。

**任何文件在 mapping 100% 分配且 ambiguous 清零之前不移动。**

## 4. 边界情况与处置

| 情况 | 处置 |
|---|---|
| **registry index 页**（foreign-bank-branches / nonlife-insurer-registry / trust-companies / financial-reports-2020） | 进各自类别领域，作为该领域的二级 index。 |
| **未分类 / sogo-shosha 母公司** | 执行中按数据裁定后新增 `consumer-finance` / `trading-company-finance` / `financial-conglomerates`，避免把实质不同的金融集团塞进同一混类。 |
| **JapanFG umbrella** | 所有具体 entity 迁出，旧 `JapanFG/<entity>` URL 404（与 v9 governance→non-profit 改名同样接受 404、非 301）。`JapanFG/INDEX` 保留为日本金融机构 umbrella hub。 |
| **`legal-financial-licenses/` 子树** | 7 个牌照栈主题页 → `financial-licenses/` 领域（扁平化，去掉 `legal-financial-licenses/` 中间目录）。 |
| **canonical_anchor 入链** | 12 个 mirror 的 anchor 指向 `JapanFG/x` → 必须重写为新领域路径，否则 canonical_anchor_drift>0 会被新门禁拦（v2026.06.04-3）。脚本一并处理。 |

## 5. migration 机制（脚本化、原子）

一个脚本对全部 ≈620 entity ×{root, ja, en} 执行：

1. `git mv` 到新领域目录（含双语镜像）。
2. 重写**全部 58,061 条 `[[JapanFG/x]]` → `[[new-domain/x]]`**（精确 path map；正文叙述词、historical CHANGELOG/releases 的史实记述不动，仅改 link target）。
3. 更新每个 entity frontmatter `domain:`。
4. 生成 17 个新 `INDEX.md`（landing page）。
5. 同步站点配置 3 处（`site/src/content.config.ts` 的 `ENTRY_DOMAIN_DIRS`、`site/src/lib/siteIndex.mjs` 的 `DOMAIN_TITLES` / index reader、`site/src/i18n/groups.ts` super-group）。
6. 同步 `tools/wiki_link_audit.ts` 的 domain route map。
7. 同步 root `INDEX.md` 的 domain 表（保留 0-entry `JapanFG` umbrella，新增 17 行 + count）。
8. 重生成 discovery surfaces（`generate_ai_discovery.ts`）。

这是 v9（governance→non-profit，~460 链接）模式的 **~80× 规模**版。

## 6. 执行方式：单次原子 migration（在 git worktree）

**推荐单次原子**而非分阶段：分阶段会在 release 之间留下成千上万条断链的中间态。单脚本在隔离 worktree 跑、验证通过后作为**一个 release** 提交，保证每个已提交点 corpus 链接自洽。

## 7. 验证门禁（提交前必须）

- `bun tools/release.ts --check --strict` **EXIT=0**：link audit `issues=0`、**dead wikilinks=0**、`canonical_anchor_drift=0`。
- public source entity 的旧 `JapanFG/<entity>` route 不再作为 canonical path；已迁实体使用 17 个新领域路径。
- `sitemap.xml` 内旧 `JapanFG/<entity>` URL = 0；`JapanFG/INDEX` umbrella 与 17 个新领域 URL 齐全。
- domain 数 = 40；i18n 镜像 ×2 全部迁移（ja/en 各域文件数一致）。
- `git diff` 无敏感信息/本地路径；sitemap lastmod 仅当天真实改动页。
- push 后 GitHub Actions「Deploy FinWiki」build 绿（改了 `site/` 配置，必须 CI 验证）。

## 8. 回滚

worktree 隔离；若 audit 到不了 issues=0 / dead=0，**提交前 abort**（对 `main` 零影响）。一旦 commit+push，URL 变更即公开不可逆——故 §7 是硬门禁。

## 9. 分阶段任务大纲（feed 实现计划）

1. **盘点 + 映射**：脚本生成 `mapping.tsv` + `ambiguous.tsv`；人工裁定 ambiguous；锁定 17 领域 × entity 清单。
2. **迁移脚本**：`git mv` ×{root,ja,en} + 全 wikilink 重写 + frontmatter domain + canonical_anchor 重写。
3. **新 INDEX + 站点配置 + audit map + root INDEX**。
4. **discovery 重生成 + 验证门禁**（§7 全过）。
5. **文档**：ADR-008（推翻 ADR-004 的理由 + 40 领域）、roadmap/backlog/domains 更新、双语 README/CHANGELOG/release notes。
6. **发布**：worktree → main → tag → GitHub Release → CI 绿。

## 10. 风险

- **wikilink 重写遗漏/误伤**：58k 条规模，必须精确 path map（只改 `[[JapanFG/<slug>` 前缀，保留 alias/锚点/label），重写后 grep `[[JapanFG/` 必须为 0 且 dead=0。
- **多 home entity 误分**：ambiguous 必须人工裁定，不能脚本武断。
- **i18n 不同步**：双语镜像必须同迁，否则 site build 缺文件。
- **site config 漏改**：ENTRY_DOMAIN_DIRS 等 3 处任一漏掉 → 新域不被 Astro 拾取（本地无 node_modules，靠 CI 验证）。
- **URL 永久变更**：≈620 页旧 URL 消失（已知情接受）。

## 11. 文档/发布义务

按 `AGENTS.md` 与当前双语发布规则：同 session 内更新双语 README + CHANGELOG，跑 discovery 生成，写 `releases/vX.md`，push，更新 GitHub Release。本设计文档在 `docs/`（corpus 排除），不计入公开计数。
