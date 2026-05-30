---
source: security/forensic-identity-anchor-chain
source_hash: 72fad4deb2919683
lang: zh
status: machine
fidelity: ok
title: "团队真实身份取证锚链 — 多源指纹的合成"
translated_at: 2026-05-30T15:08:51.568Z
---

# 团队真实身份取证锚链 — 多源指纹的合成

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/bytecode-forensic-three-tier-verify|bytecode forensic]] for peer context and [[systems/INDEX|systems index]] for the broader infrastructure boundary.

> [!info] TL;DR
> 当表面体制（LinkedIn 企业页 / 官网 about / PR 发布稿）与实际写代码的人物不一致时，合成 6 个独立的指纹源 → 构建单一论点的身份链 → 锁定「表面 vs 实团队」的分离结构。与 [[exchanges/global-crypto-forensics-vendor-layer|商用オンチェーンforensics vendor]] 的 cluster 标签组合，即可形成完整的 attribution。

## 6 个独立指纹源

1. **TLS 证书的 SAN** — 域名证书内的 Subject Alternative Names · 同一 ops 据点往往共用同一证书或签发机构
2. **GitHub 账号注册时刻的集中度** — 多个账号在 1小时以内连续注册 = sock-puppet 信号
3. **Email 域名偏好** — ProtonMail / iCloud / 自有域名 vs Gmail · 团队整体的偏好容易一致
4. **LinkedIn 企业页的姓名语言** — 西非 / 东南亚 / 印度 / 华裔 / 日裔的姓名混杂
5. **GitHub commit author name 的语言** — 实际 commit 的 name 字段（与 LinkedIn 上表面的姓名对比）
6. **来自 CLI / config 路径的暴露** — 家目录的 config 路径、SSH known-hosts 的残骸、文档 metadata、PDF 的 author 字段

## 合成 logic

- **表面 vs 实团队判定**：source 4（LinkedIn 姓名）≠ source 5（commit author name）+ source 3（email 域名偏好）→ 二元分离
- **Sock-puppet 判定**：source 2（注册时刻的集中度）+ source 5（「独立」账号间 email 重复）→ 同一人物的多个账号 — [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] 这类大型交易所事件的归属推定正是依赖此种多账号 cluster 重复分析
- **个体身份锚点**：source 1（TLS）∩ source 6（CLI 路径）→ 单一论点的 dev 身份 — 此层的结果可与 [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze precedent]] 的制裁名单匹配处理直接对接

## Anti-pattern

不以单一论点断定身份（例如：仅凭 LinkedIn1件 就下结论）· 务必用 3 个以上独立 source 交叉照合。

## When to Use

- 项目自称「全球团队」，但代码风格 / 注释语言不一致的情况
- 多个「独立企业 / 外包」的 commit 出现同一 email 的情况
- LinkedIn 姓名与 Whitepaper author / commit author 的姓名为完全不同语言的情况

## When NOT to Use

- 项目方公开且透明（有 GPG 签名 / 公开身份）
- 个人的开源项目（无需与表面对照）
- 仅做 code quality DD、不验证团队真实性的情况

## Provenance

- 案例研究（vaporware audit）：多个 GitHub 账号在短时间集中注册 + LinkedIn 企业页的姓名语言 vs commit author name 的语言不一致 + Whitepaper PDF 的 metadata author + CLI 路径残骸 + 自有域名 email · 通过多锚点交叉照合锁定了表面 / 实团队的分离
- 同种技术也应用于事后的归属推定：参见 [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack 帰属分析]] 或 [[exchanges/jp-vasp-incident-history|JP VASP incident history]] 中攻击者追踪的线索
