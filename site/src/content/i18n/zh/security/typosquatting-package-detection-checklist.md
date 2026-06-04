---
source: security/typosquatting-package-detection-checklist
source_hash: a940d468c765373f
lang: zh
model: claude-opus-4-8
status: machine
fidelity: ok
title: "抢注（typosquatting）包检测清单 — npm / PyPI / Go 名称混淆分诊"
translated_at: 2026-06-05T00:00:00.000Z
---

# 抢注（typosquatting）包检测清单 — npm / PyPI / Go 名称混淆分诊

## Wiki 路由

本条目位于 [[security/INDEX|security domain]] 之下。它把 [[security/module-path-confusion-supply-chain-attack|module path confusion + LICENSE strip supply chain attack]] 中的具体攻击，一般化为一份可复用、与注册表无关的分诊清单；当某个被抢注的包需要被追溯回某个发布者时，它与 [[security/forensic-identity-anchor-chain|forensic identity anchor chain]] 共享同一证据层。

> [!info] TL;DR
> 抢注以一个 *貌似* 流行包的名称发布恶意包，押注开发者打错字或复制粘贴出错。它有别于 **dependency confusion**（使用相同的内部名称，利用构建期的命名空间解析）以及 **slopsquatting**（LLM 可能幻觉出来的名称）。本条目是一份固定清单，用于在某个可疑依赖落入 lockfile 之前，跨 npm、PyPI 和 Go 对其名称进行分诊，并附上将其自动化的公开工具。

## 三个混淆家族（不要混为一谈）

| 家族 | 攻击者名称 vs 目标 | 利用什么 | 主要防御 |
|---|---|---|---|
| Typosquatting | *相似* 但不相同 | 一次打字 / 复制错误 | 名称距离检查 + 注册表声誉 |
| Dependency confusion | 与某个内部包 *完全相同* | 偏好公共注册表的构建系统命名空间解析 | 命名空间预留 / 带作用域的注册表 / 固定来源 |
| Slopsquatting | 一个 *听起来貌似合理* 的杜撰名称 | LLM 幻觉出一个并不存在的包 | 在安装之前确认该包确实存在且被广泛使用 |

[[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]] 中记录的 module-path / `replace` 劫持是其 Go 风味的表亲：*模块路径*（而不仅是显示名称）冒充上游，同时一个 `replace` 指令把请求改道到某个 fork。

## 常见的抢注名称变换

攻击者偏好可预测的变异，因此候选名称可以按模式进行分诊：

- **换位** — `reqeusts` → `requests`、`urlib3` → `urllib3`
- **省略 / 添加** — `boto` vs `boto3`；`colourama` → `colorama`
- **同形字 / 替换** — `0`↔`o`、`1`↔`l`、`rn`↔`m`
- **分隔符混淆** — 连字符 vs 下划线 vs 无（`python-dateutil` vs `python_dateutil`）
- **听起来权威的后缀** — `requests-utils`、`<lib>-core`、`<lib>-extended` 假冒官方扩展

## 分诊清单（按每个可疑依赖）

- [ ] **到某个流行名称的编辑距离。** 该名称是否在同一生态系统中某个知名包的 1–2 个字符编辑距离之内？如果是，在排除之前视为可疑。
- [ ] **正版目标是否存在，而这是否就是它？** 在注册表上确认 *预期* 包的确切规范名称；逐字符比较（留意分隔符和同形字）。
- [ ] **成熟度信号。** 下载量、年限、发布节奏、仓库星标，以及维护者数量。一个历史几乎为零的近似名称是危险信号。
- [ ] **源 ↔ 注册表关联。** 该包是否链接到一个真实、匹配的源代码仓库？对于 Go，**模块路径** 是否与实际仓库 URL 匹配，是否存在 `replace` 指令？（交叉参考 module-path 条目）。
- [ ] **来历 / 签名。** 该包是带着 provenance 证明或签名发布的，还是匿名发布的？
- [ ] **安装期脚本。** npm 的 `preinstall`/`postinstall`（或 PyPI 的 `setup.py` 执行）在安装时获取或运行代码——高风险，安装前先检查。
- [ ] **LICENSE 是否存在且自洽。** 与被复制代码并存的缺失或不匹配的许可证，是供应链三连击中的法律面线索。
- [ ] **交叉核对公告。** 用 [OSV](https://osv.dev/) / OSV-Scanner 以及注册表自身的公告，查询确切名称和已知的抢注。

## 将清单自动化的工具

| 工具 | 覆盖范围 |
|---|---|
| OSV / OSV-Scanner | 跨 npm、PyPI、Go 模块及更多的语言无关公告查询 |
| 注册表原生防护 | 发布时的 npm typosquat 阻断；PyPI 自动 typosquat 检测；命名空间预留 |
| Lockfile + provenance | 固定确切版本并验证 provenance，可缩小安装期窗口 |

把整个工作视为 [OWASP](https://owasp.org/www-project-top-ten/) 软件与数据完整性失效类别的供应链实例，并把受监管构建流水线上的发现项，路由到将第三方依赖风险纳入范围的 [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]]。

## 何时使用

- 添加一个名称与某个知名包相近的新的传递依赖或直接依赖。
- 在一次复制粘贴安装或一次 AI 建议的包名之后审计 lockfile（slopsquatting 检查）。
- 必须为依赖来历和许可证提供证据的供应商 / OSS 许可证审查。

## 何时不应过度套用

- 从一个 *私有、带作用域* 且带命名空间预留的注册表安装的第一方 / 内部包——相关威胁是 dependency confusion，由注册表配置而非名称距离来处理。
- 一个确切、根基稳固且成熟度信号强的包——此处的名称距离告警是误报。
- 没有包注册表攻击面的闭源二进制文件——适用另一种供应链控制。

## 相关

- [[security/INDEX|Security domain index]]
- [[security/module-path-confusion-supply-chain-attack|Module path confusion supply chain attack]]
- [[security/forensic-identity-anchor-chain|Forensic identity anchor chain]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]]

## 来源

- npm Docs — Threats and mitigations (typosquatting, install scripts) — https://docs.npmjs.com/threats-and-mitigations/
- OWASP Top Ten — software and data integrity failures framing — https://owasp.org/www-project-top-ten/
- OSV-Scanner — language-agnostic vulnerability / advisory scanning — https://google.github.io/osv-scanner/
- OSV — open source vulnerability database — https://osv.dev/
