---
title: "ssjbank 誤リンク監査"
aliases:
  - "ssjbank"
  - "SSJ Bank"
domain: "JapanFG"
created: 2026-05-19
last_updated: 2026-05-20
last_tended: 2026-05-20
review_by: 2026-11-16
confidence: unlikely
tags: [JapanFG, graph-repair, deprecated-alias, link-audit]
status: deprecated
sources:
  - "FinWiki P3 graph repair inbound from JapanFG/proclair-hd.md"
  - "https://www.zenginkyo.or.jp/abstract/outline/organization/member-01/"
  - "https://www.zenginkyo.or.jp/bankdb/bc0125/"
  - "https://www.77bank.co.jp/"
  - "https://sbjbank.co.jp/about_sbj/about/"
---

# ssjbank 誤リンク監査

## TL;DR

`ssjbank` は公式に確認できる日本の金融機関名ではなく、FinWiki 内では [[JapanFG/proclair-hd|proclair-hd]] の「七十七銀行・宮城ベース」という文脈から発生した誤リンクと判断する。正しい参照先は既存の [[JapanFG/77-bank|七十七銀行]]。`SBJ銀行` は実在するが、公式英名は Shinhan Bank Japan であり、このリンク文脈とは一致しない。

## 判定

| 観点 | 判定 |
|---|---|
| `ssjbank` という公式銀行名 | 確認できず |
| 元の入链文脈 | `七十七銀行・宮城ベース` |
| 最も近い既存ページ | [[JapanFG/77-bank|77-bank]] |
| `SBJ銀行` との関係 | 別物。公式英名は Shinhan Bank Japan |
| 今後の扱い | deprecated alias / 誤リンク監査ページとして保持 |

## Graph repair note

このページは削除せず、Obsidian の旧リンクや自動生成ログが `ssjbank` を参照しても、誤リンクの判断根拠にたどれるように残す。新しい本文では `[[JapanFG/77-bank|七十七銀行]]` を使う。

## Related

- [[JapanFG/77-bank|七十七銀行]]
- [[JapanFG/proclair-hd|proclair-hd]]
- [[JapanFG/INDEX|JapanFG INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- 全国銀行協会「会員一覧」: https://www.zenginkyo.or.jp/abstract/outline/organization/member-01/
- 全国銀行協会「銀行コード検索 七十七銀行」: https://www.zenginkyo.or.jp/bankdb/bc0125/
- 七十七銀行 公式サイト: https://www.77bank.co.jp/
- SBJ銀行「会社概要」: https://sbjbank.co.jp/about_sbj/about/
- FinWiki P3 graph repair inbound: [[JapanFG/proclair-hd]]

---

> [!warning] 校核状态
> confidence: **unlikely** for `SSJ Bank` as a real target. This is intentionally deprecated and should not be promoted to an active entity page.
