# Information Architecture

## Public Knowledge Structure

| Layer | Location | Purpose |
|---|---|---|
| Root map | `INDEX.md` | 全站主题入口和 domain count。 |
| Domain | `<domain>/` | 某一金融主题或机构类型的正文集合。 |
| Domain index | `<domain>/INDEX.md` | 该 domain 的导航、范围和 entry 表。 |
| Entry | `<domain>/<slug>.md` | 具体知识条目。 |
| Control docs | root Markdown files | 公开说明、schema、导航、变更记录。 |
| Release notes | `releases/v*.md` | 发布说明和历史快照。 |

## Developer Documentation Structure

`docs/` 是内部开发文档，不进入公开知识结构。入口是 [docs README](../README.md)，目录按工作流排列：governance -> strategy -> product -> requirements -> architecture -> functional specs -> implementation -> quality -> operations。

## Site Structure

- `/`：公开站点首页。
- `/{lang}/`：语言首页。
- `/{lang}/browse/`：全站浏览。
- `/{lang}/domains/`：domain 列表。
- `/{lang}/domains/{domain}/`：domain 页面。
- `/{lang}/{domain}/{slug}/`：entry 页面。

## Machine Structure

- `robots.txt` 和 `sitemap.xml`：crawler 入口。
- `llms.txt`：AI reader 短入口。
- `llms-full.txt`：完整机器可读 manifest。
- `ai-index.json`：程序化检索 manifest。
- `api/`：静态 JSON API。

## Boundary Rule

公开知识结构和开发文档结构必须分离。`docs/` 可以解释如何维护 FinWiki，但不得成为 wiki entry 的来源路径或站点路由。
