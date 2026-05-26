---
title: Fork and Rebrand プロジェクトの五層監査フレームワーク
aliases: [fork and rebrand audit, 5-layer audit framework, code provenance audit, smart contract fork security]
domain: security
kind: framework
topic: fork-and-rebrand-5-layer-audit-framework
created: 2026-05-20
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-20
confidence: certain
tags: [security, audit, smart-contract, forensic, open-source]
status: candidate
sources: []
---

# Fork and Rebrand プロジェクトの五層監査フレームワーク


## Wiki route

This entry sits under [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode フォレンジック — 三層 verify 技術]]. Read it against [[systems/INDEX|systems index]] for peer / contrast context and [[INDEX|FinWiki index]] for the broader system / regulatory boundary.

> [!info] TL;DR
> プロジェクト側が著名なオープンソース・プロトコル(Uniswap、Compound、GMX等)を複製(Fork)してブランドを差し替え(Rebrand)、サービス開始する場合、伝統的なモノリシック・コード監査では大量の盲点が生じる。**五層監査フレームワーク(5-Layer Audit Framework)** は、この種のプロジェクトに専用設計された体系的な安全 / 起源監査手法で、コード差分、既知脆弱性の遺伝、コンパイル指紋、チーム関連性、コンプライアンス・リスクまでを網羅する。

## 中核メカニズム

Fork-and-Rebrand監査の中核思想は**「重要なのは変わらなかったコードではなく、何を変えたか、何を遺伝させたか、何を隠したか、である」**。

```
Layer 5: コンプライアンス & ライセンス監査 (License & Copyleft Verification)
  └── Layer 4: チーム & デプロイヤー起源 (Team & Deployer Provenance)
        └── Layer 3: コンパイル指紋 & バイトコード比較 (Compilation Fingerprint & Diff)
              └── Layer 2: 既知脆弱性 & 修正の遺伝 (Inherited Vulnerability Scan)
                    └── Layer 1: コードベース上流比較 (Upstream Source Diff)
```

---

### Layer 1: コードベース上流比較 (Upstream Source Diff)
- **目的**:フォーク・コードとオリジナル・コードの1行ごとの差分を厳密に識別する。
- **手法**:
  - `git merge-base` でフォークの正確なCommitノードを特定。
  - 純粋なリネーム置換(例:`UniswapV3` を一括 `BrandSwap` に置換)を剥離したうえでロジック差分を比較。
  - **レッドライン**:中核数学ライブラリ(Math/SafeMath)、権限制御Modifiers、状態遷移ロジックに改変がある場合。

### Layer 2: 既知脆弱性 & 修正の遺伝 (Inherited Vulnerability Scan)
- **目的**:オリジナル・プロトコルでforkポイント以降に開示された既知脆弱性が、当該プロジェクトで修正済みかを検証する。
- **手法**:
  - 上流プロトコルでforkコミット以降に発生した全脆弱性開示、監査レポート、GitHub Security Advisoriesを検索。
  - 当該プロジェクト内の対応コード片を指定して点検。
  - **典型的な失敗例**:多数のCompound V2 Forkプロジェクトが2023-2024年において、オリジナルでは既に修正済みのRead-only Oracle Manipulation脆弱性を遺伝していた。日本のVASP側における同種の論点は [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全監査認証体系]] の強制disclosure要求を参照。

### Layer 3: コンパイル指紋 & バイトコード比較 (Compilation Fingerprint & Diff)
- **目的**:[[security/bytecode-forensic-three-tier-verify|三層 verify 技術]] を用いて、チェーン上に実際にデプロイされているBytecodeが、プロジェクト側が主張するオープンソース・コードと完全に一致するかを検証する。
- **手法**:
  - Metadata Hash(Swarm/IPFSコンパイル指紋)を剥離後、Runtime Bytecodeの類似度を比較。
  - コンパイラ・バージョン(solc version)とEVMターゲット・バージョンの互換性差分を検証(例:PUSH0未対応チェーンでSolidity 0.8.20以上を強引にデプロイした場合のopcode異常)。

### Layer 4: チーム & デプロイヤー起源 (Team & Deployer Provenance)
- **目的**:プロジェクト背後の開発チームの真の学術 / 安全分野での背景や、過去の前科を識別する。
- **手法**:
  - デプロイヤー・アドレス(Deployer Address)の資金来源チェーンを抽出([[security/forensic-identity-anchor-chain|司法級身元アンカーチェーン]] を活用)。
  - [[security/wayback-machine-as-forensic-tool|Wayback Machine]] が保存する過去ウェブページ、早期GitHubコミット記録のcommitter emailおよびPGP署名を活用し、チームの前科を特定。
  - クロスチェーンで類似度が極めて高いunverifyコントラクトのバイトコード照合(Twin Fingerprint Mapping)。

### Layer 5: コンプライアンス & ライセンス監査 (License & Copyleft Verification)
- **目的**:オリジナル・プロトコルのオープンソース・ライセンス制限(Business Source License, BSL 1.1 等)を監査し、侵害により法的差止やリクイディティ凍結のリスクに晒されることを防ぐ。
- **手法**:
  - BSL制限期間(例:Uniswap V3の2年BSL期間)が満了しているかを確認。
  - GPL Copyleftの伝染性を確認:オリジナルがGPLの場合、当該プロジェクトは要求どおり改変後コードの全公開を行っているか。

---

## 適用シーン

- **DeFiレゴ集約事業者**:新型レンディング / DEXプロトコルを統合する前に、それが粗悪なForkでないかを評価。
- **セキュリティ監査機関**:プロジェクト側に対し、フォーク特化型の安全 / コンプライアンス・レポートを提供。規制下インフラのシーンでは、[[systems/hook-enforced-compliance|hook-enforced compliance]] パターンを参考に検出をランタイムへ前倒しすることも可能。
- **司法 / 被害回収のフォレンジック**:ハッカー攻撃後、被害プロジェクトが上流既知脆弱性の遺伝により被害を受けたか判定し、責任の帰属を整理。主要事件としては [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin Lazarus hack]] や [[exchanges/mtgox-bankruptcy-processing-timeline|Mt.Gox 破産処理 timeline]] 等の歴史的パラダイムを参照。

## 関連の制約と境界

- **ゼロ知識 / 非EVMチェーン**:Solana、Aptos等の非EVMチェーン上ではバイトコード比較と指紋抽出に全く異なるツールチェーン(Anchor build検証等)が必要。許可型 / privacy-preserving型チェーン例えば [[systems/canton-overview|Canton]] のDAML modelでは、contract-templateレベルの差分比較がさらに必要となる。
- **難読化コンパイラ**:プロジェクト側が独自難読化技術を使用し、あるいはsolcコンパイラを改変している場合、Layer 3の類似度マッチング効果は大幅に低下する。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode フォレンジック — 三層 verify 技術]]
- [[security/forensic-identity-anchor-chain|司法級身元アンカーチェーン — 物理 / オンチェーン混合の帰属推定]]
- [[security/wayback-machine-as-forensic-tool|Wayback Machineを司法フォレンジック・ツールとして用いる標準手順]]
- [[security/module-path-confusion-supply-chain-attack.md|モジュールパス詐称によるサプライチェーン攻撃 — 精密投毒メカニズム]]
<!-- /wiki-links:managed -->
