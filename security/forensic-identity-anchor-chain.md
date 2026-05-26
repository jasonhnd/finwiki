---
type: wiki
kind: technique
slug: forensic-identity-anchor-chain
domain: security
title: "チームの真の身元フォレンジック・アンカーチェーン — 多源指紋の合成"
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
  - "[[bytecode-forensic-three-tier-verify]]"
  - "[[fork-and-rebrand-5-layer-audit-framework]]"
  - "[[module-path-confusion-supply-chain-attack]]"
tags: [security/forensic, security/identity, security/dd]
sources:
  - "https://certificate.transparency.dev/"
  - "https://docs.github.com/en/rest/commits/commits"
  - "https://web.archive.org/"
---

# チームの真の身元フォレンジック・アンカーチェーン — 多源指紋の合成

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/bytecode-forensic-three-tier-verify|bytecode forensic]] for peer context and [[systems/INDEX|systems index]] for the broader infrastructure boundary.

> [!info] TL;DR
> 表向きの体制(LinkedIn企業ページ / 公式サイトabout / PRリリース)と実際にコードを書いている人物が一致しない場合、6つの独立した指紋源を合成 → 単一論点の身元チェーンを構築 → 「表向きvs実チーム」の分離構造をロックする。[[exchanges/global-crypto-forensics-vendor-layer|商用オンチェーンforensics vendor]] のclusterラベルと組み合わせれば、完全なattributionを形成可能。

## 6つの独立指紋源

1. **TLS証明書のSAN** — ドメイン証明書内のSubject Alternative Names · 同一ops拠点なら同じ証明書または発行機関を共用する傾向
2. **GitHubアカウント登録時刻の集中度** — 複数アカウントが1時間以内に連続登録 = sock-puppetシグナル
3. **Email ドメイン選好** — ProtonMail / iCloud / 自前ドメイン vs Gmail · チーム全体としての選好は揃いやすい
4. **LinkedIn企業ページの氏名言語** — 西アフリカ / 東南アジア / インド / 中国系 / 日本系の氏名が混在
5. **GitHub commit author nameの言語** — 実際のcommitのnameフィールド(LinkedIn上の表向きの氏名と対比)
6. **CLI / configパスからの露出** — ホームディレクトリのconfigパス、SSH known-hostsの残骸、ドキュメントmetadata、PDFのauthorフィールド

## 合成 logic

- **表向き vs 実チーム判定**:source 4(LinkedIn氏名)≠ source 5(commit author name)+ source 3(emailドメイン選好)→ 二元分離
- **Sock-puppet判定**:source 2(登録時刻の集中度)+ source 5(「独立」アカウント間でemailが重複)→ 同一人物の複数アカウント — [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] のような大型取引所事件の帰属推定はまさにこの種の複数アカウントcluster重複分析に依存
- **個体身元アンカー**:source 1(TLS)∩ source 6(CLIパス)→ 単一論点のdev身元 — この層の結果は [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze precedent]] の制裁名簿マッチング処理と直結できる

## Anti-pattern

単一論点で身元を断定しない(例:LinkedIn1件のみで結論)· 必ず3つ以上の独立source で交差照合すること。

## When to Use

- プロジェクトが「グローバル・チーム」と謳いながら、コードスタイル / コメント言語が一貫しないケース
- 複数の「独立企業 / アウトソース」のcommitに同一emailが出現するケース
- LinkedIn氏名とWhitepaper author / commit authorの氏名が完全に異なる言語のケース

## When NOT to Use

- プロジェクト側が公開かつ透明(GPG署名 / 公的身元あり)
- 個人のオープンソース・プロジェクト(表向きとの対照が不要)
- code quality DDのみを行いチームの真正性を検証しないケース

## Counterpoints

> [!question] Open questions
> - 「グローバル・アウトソース」(合法)と「sock-puppetの表向き」をどう区別するか
> - emailドメイン選好sourceは、「ベテランdev(Gmail)+ 新人dev(Proton)」混合チームに対する誤判定リスクをどう扱うか

## Provenance

- ケーススタディ(vaporware audit):複数のGitHubアカウントが短時間に集中登録 + LinkedIn企業ページの氏名言語 vs commit author nameの言語が不一致 + Whitepaper PDFのmetadata author + CLIパス残骸 + 自前ドメインemail · 複数アンカーの交差照合により表向き / 実チームの分離をロックした
- 同種技術は事後の帰属推定にも応用される:[[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack 帰属分析]] や [[exchanges/jp-vasp-incident-history|JP VASP incident history]] における攻撃者追跡の手がかりを参照
