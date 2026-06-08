# Public Information Policy

## Policy

FinWiki 是公开知识库。仓库内容只能包含公开互联网信息、官方资料、公开披露，或基于公开来源的分析。任何正文、开发文档、release note、自动生成 surface 都不得包含密钥、token、个人信息、客户信息、非公开对话或内部案件细节。

## Scope

| 区域 | 规则 |
|---|---|
| Wiki body | 只允许公开来源事实、公开分析、公开链接。 |
| `README.md` / `CHANGELOG.md` / release notes | 可写操作记录和验证结果，不写私密路径、凭据、客户细节。 |
| `docs/` | 内部开发文档但位于公开 repo，同样不得写密钥、隐私、非公开信息。 |
| Generated surface | 由 corpus 派生，必须避免把内部文档或私密字段导出。 |

## Allowed

- 官方网站、监管机构页面、法律法规、公开 filings。
- 公开市场资料和公开新闻报道。
- 对公开来源的综合、分类、比较、体系化说明。
- repo 内工具、目录、发布门禁的公开工程说明。

## Not Allowed

- API key、token、cookie、私钥、访问凭证。
- 个人邮箱、电话、住址、身份证明等个人信息，除非是公开人物的公开职务信息且与条目相关。
- 客户、相手方、内部项目、非公开会议、非公开聊天记录。
- 本地机器隐私路径或用户个人环境细节。必要的通用命令可以写，具体私密路径不写入长期文档。

## Review Checklist

- 是否所有事实都能由公开来源解释。
- 是否存在凭据、token、cookie、private key。
- 是否包含个人信息或客户信息。
- 是否把内部聊天或 agent 过程当作事实来源写入正文。
- 是否会被 `release.ts --write` 导出到 discovery surface。
