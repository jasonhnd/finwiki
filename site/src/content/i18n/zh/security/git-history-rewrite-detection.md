---
source: security/git-history-rewrite-detection
source_hash: 1976c318ed86639c
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Git 历史改写检测 — 恢复被压缩和强制推送的状态"
translated_at: 2026-06-05T00:00:00.000Z
---

# Git 历史改写检测 — 恢复被压缩和强制推送的状态

## Wiki 路由

本条目位于 [[security/INDEX|security domain]] 之下。它是 [[security/wayback-machine-as-forensic-tool|Wayback Machine as a forensic tool]]（恢复已下线的 *web* 内容）的源代码对应版本，并通过恢复改写试图抹去的提交者邮箱和时间戳，为 [[security/forensic-identity-anchor-chain|forensic identity anchor chain]] 中的人员层工作提供输入。

> [!info] TL;DR
> 强制推送或压缩会 *改写* 分支指针，但 Git 不会立即删除旧提交——它们会作为不可达（"dangling"）对象存活，直到垃圾回收为止；任何在改写之前获取的克隆、复刻或 CI 检出仍然持有它们。在 GitHub 上，Events API 会独立地记录改写前的提交 SHA。因此「我们已经清理掉了」是一个可恢复的说法：枚举 dangling 对象、重放 reflog、读取 PushEvent 历史。改写本身就是一个信号，表明有人想让先前的状态消失。

## 为何被改写的历史可以恢复

| 机制 | 它保留了什么 | 公开命令 / 端点 |
|---|---|---|
| Dangling 对象 | 改写后不再被引用的提交会留在对象 DB 中直到 `gc` | `git fsck --lost-found` / `git fsck --unreachable` |
| Reflog | 记录 `HEAD`/分支曾经指向何处的本地日志，默认保留约 90 天 | `git reflog`（以及 `git reflog show <branch>`） |
| 改写前的克隆/复刻/CI | 任何在 push 之前获取的副本都完整持有旧图 | 检查该副本的 `git log --all` |
| GitHub Events API | `PushEvent` 记录被推送提交的 SHA，与后续改写无关 | `GET /repos/{owner}/{repo}/events` |

强制推送将远程分支指针移动到新历史；被挤出的提交成为孤儿，但会持续存在直到下一个 GC 周期。在本地，`git reflog` 仍然记得确切的先前提交哈希，`git fsck` 会枚举不可达对象。在远程，[GitHub Events API](https://docs.github.com/en/rest/activity/events) 会返回近期的 `PushEvent`，携带 before/after 的 SHA——实际上是一份你无法控制的远程 reflog。

## 检测流程（公开、可复现）

1. **寻找强制推送的指纹。** 非线性的时间戳、提交数量的骤降，或一个被压缩的 "Initial commit" 取代了已知更长的历史，都是迹象。在提交消息中残留的 "for `<upstream-project>`" 字符串，正是 [[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]] 所指出的那种自我暴露。
2. **枚举 dangling 对象。** 在你持有的任何克隆中：`git fsck --lost-found`，并用 `git show <sha>` 检查 `dangling commit <sha>` 条目。
3. **重放 reflog。** `git reflog` / `git reflog show <branch>` 会在保留窗口内揭示先前的顶端，即使在「覆盖」之后也是如此。
4. **查询远程事件日志。** `GET /repos/{owner}/{repo}/events` 并读取 `PushEvent` 载荷以获取改写前的 SHA；与当前分支所显示的内容交叉比对。（关于 `PushEvent` 的结构，参见 [GitHub event types](https://docs.github.com/en/rest/using-the-rest-api/github-event-types)。）
5. **比对恢复结果与当前状态。** 将任何被删除的文件（LICENSE、较早的 README、被删除的合约、泄漏的配置）视为证据——这一 *删除* 及其时间戳，就是发现项。
6. **保全。** 将恢复的对象快照到带外存储中；发布者之后可能会对远程执行 GC 或再次改写。

## Wayback 的搭档

| 层 | 工具 | 恢复对象 |
|---|---|---|
| 已发布的 web 页面 / 文档 / PDF | [[security/wayback-machine-as-forensic-tool|Wayback Machine]] | 已下线的站点内容和先前声明 |
| 源代码仓库状态 | 本条目（`git fsck` / reflog / Events API） | 被压缩/强制推送的提交、被删除的文件、提交者元数据 |

两者都要运行：web 层恢复 *主张*，git 层恢复其背后的 *代码与署名*。

## 何时使用

- 某项目的仓库显示出可疑地短或被压缩的历史，而市场宣传却暗示了漫长的开发。
- 某个 LICENSE、审计报告或敏感合约「从未存在过」，但先前的克隆/复刻却暗示并非如此。
- 恢复被改写抹去的提交者邮箱 / 作者名，以供 [[security/forensic-identity-anchor-chain|identity anchor chain]] 交叉核对。

## 何时不应使用

- 不存在改写前的副本，*并且* 远程已经 GC 过，*并且* reflog 窗口已过期——恢复可能无法实现（应记录这一缺口，而非过度断言）。
- 正当的、已披露的历史改写（例如移除意外提交的密钥）——改写是信号，而非恶意的证明；归因之前先行佐证。
- 非 Git 版本控制或完全闭源的项目——应使用不同的证据路径。

## 相关

- [[security/INDEX|Security domain index]]
- [[security/wayback-machine-as-forensic-tool|Wayback Machine as a forensic tool]]
- [[security/forensic-identity-anchor-chain|Forensic identity anchor chain]]
- [[security/module-path-confusion-supply-chain-attack|Module path confusion supply chain attack]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]

## 来源

- git-scm — git-fsck (unreachable / dangling object enumeration) — https://git-scm.com/docs/git-fsck
- git-scm — git-reflog (local history of branch tips, retention window) — https://git-scm.com/docs/git-reflog
- GitHub Docs — REST API endpoints for events (PushEvent before/after SHAs) — https://docs.github.com/en/rest/activity/events
- GitHub Docs — GitHub event types (PushEvent payload) — https://docs.github.com/en/rest/using-the-rest-api/github-event-types
