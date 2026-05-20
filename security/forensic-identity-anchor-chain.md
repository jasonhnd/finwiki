---
type: wiki
kind: technique
slug: forensic-identity-anchor-chain
domain: security
title: "团队真实身份 forensic anchor chain — 多源指纹拼合"
aliases: []
status: candidate
confidence: possible
evidence_count: 2
challenges: 0
created: 2026-05-12
last_updated: 2026-05-18
last_tended: 2026-05-12
review_by: 2026-11-08
related:
  - "[[bytecode-forensic-three-tier-verify]]"
  - "[[fork-and-rebrand-5-layer-audit-framework]]"
  - "[[module-path-confusion-supply-chain-attack]]"
---

> [!info] TL;DR
> 当门面团队 (LinkedIn 公司页 / 官网 about / PR 宣传) 与真实写代码的人不一致,用 6 个独立指纹源拼合 -> 单点身份链 -> 锁定"门面 vs 真团队"分离结构.

## 6 个独立指纹源

1. **TLS 证书 SAN** — 域名 cert 里的 Subject Alternative Names · 同一 ops 一般共用一证或一签发机构
2. **GitHub 账号注册时间集中度** — 多账号在 < 1h 内连续注册 = sock-puppet 信号
3. **Email 域偏好** — ProtonMail / iCloud / 自定义域 vs Gmail · 团队整体偏好往往一致
4. **LinkedIn 公司页人名语种** — 西非 / 东南亚 / 印度 / 中文 / 日文 名字混搭
5. **GitHub commit author name 语种** — 真实 commit 的 name field (vs LinkedIn 门面名)
6. **CLI / config path 暴露** — home-directory config paths, SSH known-host leftovers, document metadata, and PDF author fields

## 拼合 logic

- **门面 vs 真团队判定**: source 4 (LinkedIn 名字) 不等于 source 5 (commit author name) + source 3 (email 偏好) -> 二元分离
- **Sock-puppet 判定**: source 2 (注册时间集中度) + source 5 (邮箱重叠跨"独立"账号) -> 同一人多马甲
- **个体身份锚定**: source 1 (TLS) 交集 source 6 (CLI path) -> 单点 dev 身份

## Anti-pattern

不要单点定身份 (e.g. 仅 LinkedIn 一条就下结论) · 必须 ≥3 个独立 source 交叉印证.

## When to Use

- 项目 claim "国际化团队" 但代码风格 / 注释语言不一致
- 多个"独立公司 / 外包" 的 commit 出现同邮箱
- LinkedIn 人名与 Whitepaper author / commit author 完全不同语种

## When NOT to Use

- 项目方公开透明 (有 GPG 签名 / 公开身份)
- 个人开源项目 (无需 vs 门面 对照)
- 仅做 code quality DD 不做团队真实性

## Counterpoints

> [!question] Open questions
> - 如何区分"国际化外包" (合法) vs "sock-puppet 门面"?
> - email 域偏好 source 是否对"老 dev (Gmail) + 新 dev (Proton)" 混合团队有误判风险?

## Provenance

- case study (vaporware audit): 多个 GitHub 账号短时间内集中注册 + LinkedIn 公司页人名语种 vs commit author name 语种不一致 + Whitepaper PDF metadata author + CLI path 残留 + 自定义域 email · 多个 anchor 交叉印证锁定门面/真团队分离
