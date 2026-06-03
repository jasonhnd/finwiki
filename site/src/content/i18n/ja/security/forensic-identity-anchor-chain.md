---
source: security/forensic-identity-anchor-chain
source_hash: 72fad4deb2919683
lang: ja
status: machine
fidelity: ok
title: "チームの真正な身元をめぐるフォレンジック・アンカーチェーン — 多源指紋の合成"
translated_at: 2026-06-03T00:53:08.293Z
---
# チームの真正な身元をめぐるフォレンジック・アンカーチェーン — 多源指紋の合成

## ウィキ上の位置づけ

この項目は [[INDEX|FinWiki index]] 配下にある。関連する比較文脈は [[security/bytecode-forensic-three-tier-verify|bytecode forensic]]、より広いインフラ境界は [[systems/INDEX|systems index]] とあわせて読む。

> [!info] 要約
> 表向きの体制（LinkedIn企業ページ / 公式サイトabout / PRリリース）と実際にコードを書いている人物が一致しない場合、6つの独立した指紋源を合成 → 単一論点の身元チェーンを構築 → 「表向きvs実チーム」の分離構造をロックする。[[exchanges/global-crypto-forensics-vendor-layer|商用オンチェーンforensics vendor]] のclusterラベルと組み合わせれば、完全なattributionを形成可能。

## 6つの独立指紋源

1. **TLS証明書のSAN** — ドメイン証明書内のSubject Alternative Names。同一ops拠点なら同じ証明書または発行機関を共用する傾向がある
2. **GitHubアカウント登録時刻の集中度** — 複数アカウントが1時間以内に連続登録 = sock-puppetシグナル
3. **Email ドメイン選好** — ProtonMail / iCloud / 自前ドメイン vs Gmail。チーム全体としての選好は揃いやすい
4. **LinkedIn企業ページの氏名言語** — 西アフリカ / 東南アジア / インド / 中国系 / 日本系の氏名が混在
5. **GitHub commit author nameの言語** — 実際のcommitのnameフィールド（LinkedIn上の表向きの氏名と対比）
6. **CLI / configパスからの露出** — ホームディレクトリのconfigパス、SSH known-hostsの残骸、ドキュメントmetadata、PDFのauthorフィールド

## 合成ロジック

- **表向き vs 実チーム判定**:source 4（LinkedIn氏名）≠ source 5（commit author name）+ source 3（emailドメイン選好）→ 二元分離
- **Sock-puppet判定**:source 2（登録時刻の集中度）+ source 5（「独立」アカウント間でemailが重複）→ 同一人物の複数アカウント — [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] のような大型取引所事件の帰属推定は、まさにこの種の複数アカウントcluster重複分析に依存する
- **個体身元アンカー**:source 1（TLS）∩ source 6（CLIパス）→ 単一論点のdev身元 — この層の結果は [[fintech/chain-level-ofac-freeze-precedent|オンチェーン OFAC freeze precedent]] の制裁名簿マッチング処理と直結できる

## アンチパターン

単一論点で身元を断定しない（例:LinkedIn1件のみで結論）。必ず3つ以上の独立sourceで交差照合すること。

## 使う場面

- プロジェクトが「グローバル・チーム」と謳いながら、コードスタイル / コメント言語が一貫しないケース
- 複数の「独立企業 / アウトソース」のcommitに同一emailが出現するケース
- LinkedIn氏名とWhitepaper author / commit authorの氏名が完全に異なる言語のケース

## 使わない場面

- プロジェクト側が公開かつ透明（GPG署名 / 公的身元あり）
- 個人のオープンソース・プロジェクト（表向きとの対照が不要）
- code quality DDのみを行いチームの真正性を検証しないケース

## 来歴

- ケーススタディ（vaporware audit）:複数のGitHubアカウントが短時間に集中登録 + LinkedIn企業ページの氏名言語 vs commit author nameの言語が不一致 + Whitepaper PDFのmetadata author + CLIパス残骸 + 自前ドメインemail。複数アンカーの交差照合により表向き / 実チームの分離をロックした
- 同種技術は事後の帰属推定にも応用される:[[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM hack 帰属分析]] や [[exchanges/jp-vasp-incident-history|JP VASP incident history]] における攻撃者追跡の手がかりを参照
