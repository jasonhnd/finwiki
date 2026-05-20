# FinWiki

## 中文

FinWiki 是一个面向金融、支付、稳定币、加密资产、资本市场、日本金融机构与方法论研究的 Markdown 知识库。仓库内容主要以 Obsidian 风格的 `[[wikilink]]` 组织，并以 [INDEX.md](INDEX.md) 作为总入口。

### 内容地图

- [INDEX.md](INDEX.md): 全库入口、主题分区与核心条目索引。
- [JapanFG/](JapanFG/): 日本金融集团、银行、保险、证券、支付与政策金融机构。
- [fintech/](fintech/): 稳定币、CBDC、EPI、MiCA、GENIUS、MAS、HKMA、跨境支付与链上金融。
- [exchanges/](exchanges/): 日本与全球加密交易所、VASP、CEX/DEX、监管、托管、安全事件。
- [systems/](systems/): 区块链系统、跨链、BFT、Canton、CCTP、EigenLayer、Hyperlane 等基础设施。

### 维护规则

1. `README.md` 与 `CHANGELOG.md` 必须永远同时维护中文和日文版本。
2. 任何内容同步、目录调整、批量新增、重要删除、规则变更或发布操作，都必须在同一次工作中更新 [CHANGELOG.md](CHANGELOG.md)。
3. `CHANGELOG.md` 不能只写一句版本摘要，必须保留详细时间线与工作记录，包括时间、原因、范围、主要文件或目录、执行过程、验证结果和后续事项。
4. 默认使用日本时间 `JST` 记录时间线。
5. 除非任务本身要求格式清理，不要为了提交而大规模改写既有 Markdown 的空格、换行或正文风格。

### 推荐同步流程

1. 检查工作区：`git status --short --branch`
2. 更新正文内容，并同步更新 `README.md` / `CHANGELOG.md` 中相关的中文与日文说明。
3. 做基础检查：敏感信息扫描、大文件检查、必要的链接或索引检查。
4. 提交：`git commit -m "docs: ..."`
5. 推送：`git push`
6. 推送后确认远端 HEAD 与本地分支一致。

## 日本語

FinWiki は、金融、決済、ステーブルコイン、暗号資産、資本市場、日本の金融機関、調査方法論を扱う Markdown ナレッジベースです。主なリンク形式は Obsidian 形式の `[[wikilink]]` で、全体の入口は [INDEX.md](INDEX.md) です。

### コンテンツマップ

- [INDEX.md](INDEX.md): 全体入口、テーマ別分類、主要エントリー索引。
- [JapanFG/](JapanFG/): 日本の金融グループ、銀行、保険、証券、決済、政策金融機関。
- [fintech/](fintech/): ステーブルコイン、CBDC、EPI、MiCA、GENIUS、MAS、HKMA、クロスボーダー決済、オンチェーン金融。
- [exchanges/](exchanges/): 日本およびグローバルの暗号資産取引所、VASP、CEX/DEX、規制、カストディ、セキュリティ事案。
- [systems/](systems/): ブロックチェーンシステム、クロスチェーン、BFT、Canton、CCTP、EigenLayer、Hyperlane などの基盤技術。

### 運用ルール

1. `README.md` と `CHANGELOG.md` は、必ず中国語と日本語を同時に維持します。
2. コンテンツ同期、ディレクトリ再編、大量追加、重要な削除、運用ルール変更、公開作業を行う場合は、同じ作業内で [CHANGELOG.md](CHANGELOG.md) を更新します。
3. `CHANGELOG.md` は短いバージョン要約だけにせず、時刻、理由、対象範囲、主要ファイルまたはディレクトリ、実行過程、検証結果、残タスクを含む詳細なタイムラインと作業記録を残します。
4. タイムラインの時刻は、原則として日本時間 `JST` で記録します。
5. フォーマット整理そのものが目的でない限り、既存 Markdown の空白、改行、本文スタイルを大規模に変更しません。

### 推奨同期フロー

1. 作業ツリーを確認します: `git status --short --branch`
2. 本文を更新し、関連する `README.md` / `CHANGELOG.md` の中国語・日本語説明も同時に更新します。
3. 基本チェックを行います: 機密情報スキャン、大容量ファイル確認、必要なリンクまたは索引確認。
4. コミットします: `git commit -m "docs: ..."`
5. プッシュします: `git push`
6. プッシュ後、リモート HEAD とローカルブランチが一致していることを確認します。
