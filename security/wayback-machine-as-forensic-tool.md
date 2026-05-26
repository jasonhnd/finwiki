---
type: wiki
kind: technique
slug: wayback-machine-as-forensic-tool
domain: security
title: "能動的に de-publishされた内容の救出 — Wayback Machineをフォレンジック武器として使う"
aliases: []
status: candidate
confidence: possible
evidence_count: 2
challenges: 0
created: 2026-05-12
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-08
related:
  - "[[fork-and-rebrand-5-layer-audit-framework]]"
  - "[[bytecode-forensic-three-tier-verify]]"
tags: [security/forensic, web-archives, evidence-preservation]
sources:
  - "https://web.archive.org/"
  - "https://mementoweb.org/"
  - "https://archive.org/about/"
---

# 能動的に de-publishされた内容の救出 — Wayback Machineをフォレンジック武器として使う

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/forensic-identity-anchor-chain|forensic identity anchor chain]] for peer context and [[systems/INDEX|systems index]] for the broader evidence boundary.

> [!info] TL;DR
> プロジェクト側が能動的に公式サイト / docs / PDFリンクから撤回した文書 = 当事者がリスクを認識していたことの強いシグナル。Wayback Machine (web.archive.org) で救出した原文は、「現在の自首 / 否認」と「過去の発言」のトーン乖離を対照するうえで単一論点の証拠源となりうる。PDFリンクの403は終点ではなくデータ。[[exchanges/mtgox-bankruptcy-processing-timeline|Mt.Gox 破産処理 timeline]] のような取引所事件の初期disclosureも、こうしたアーカイブ保全に大きく依存してきた。

## 操作手順

1. **直リンクfetch + HTTP code記録** — 現在404/403、数ヶ月前は200というtimeline自体が証拠
2. **Wayback Machineの履歴スナップショット** — web.archive.org/web/*/<target-url> で全スナップショット時刻を取得
3. **最古 + 直近の2スナップショットを比較** — 静かな改訂(完全撤去ではない)が入っていないかを確認
4. **PDFを直接ダウンロードしてmetadataを検証** — author / 作成ソフト / 作成日時
5. **原文をbackstoreに保存** — プロジェクト側が後日Wayback自体に撤回申請を出す可能性あり(takedown申請の仕組みが存在)

## When to Use

- プロジェクト側のREADME / docs / PDFで新たに404が出現したケース
- ホワイトペーパーのページが「一時メンテナンス中」のまま1週間以上経過したケース
- 重要なclaimが最新版ドキュメントから消えているが、過去版に記載があった記憶があるケース
- 「公開されているはずだが見つからない」あらゆるartifact — [[exchanges/jp-vasp-incident-history|JP VASP incident history]] に含まれる破綻 / 免許剥奪済み取引所の初期marketing / risk disclosureページも該当

## When NOT to Use

- プロジェクト自体のrobots.txtがアーカイブをブロックしているケース(Wayback側にも保存されていない)
- そもそも一度も公開されていない文書(de-publishではなくnever-publish)
- 単なるCDNの一時障害(status code + retryで除外可能)

## Counterpoints

> [!question] Open questions
> - プロジェクト側がWaybackに撤回申請を出せるか?(yes — ただし法的請求が必要で、一般的なプロジェクト側はあまり実行しない)
> - Waybackにもスナップショットが無い場合の代替手段は?(Google cache / Bing cache / 個人バックアップ — いずれも時効あり)

## Provenance

- ケーススタディ(vaporware audit):ホワイトペーパーPDFリンクが403 · Waybackで原文を救出 · 唯一の証拠源としてプロジェクト側の「撤回済 / 否認」claimとのトーン乖離を対比
- inferred forensic standard practice in chain investigation — 商用 [[exchanges/global-crypto-forensics-vendor-layer|オンチェーン forensics vendor]] はWaybackをオンチェーン cluster データとjoinし、完全なattribution packageを構築するのが定石
