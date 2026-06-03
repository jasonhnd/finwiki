---
source: security/fork-and-rebrand-5-layer-audit-framework
source_hash: 1149b0aa7ce1325b
lang: ja
status: machine
fidelity: ok
title: "Fork and Rebrand プロジェクトの五層監査フレームワーク"
translated_at: 2026-06-03T00:53:08.304Z
---

# Fork and Rebrand プロジェクトの五層監査フレームワーク


## ウィキ上の位置づけ

このエントリは [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode フォレンジック — 三層 verify 技術]] の下にあります。ピア/コントラストのコンテキストについては [[systems/INDEX|systems index]]、より広範なシステム/規制の境界については [[INDEX|FinWiki index]] と照らし合わせて読み取ってください。

> [!info] 要約
> プロジェクト側が著名なオープンソース・プロトコル(Uniswap、Compound、GMX等)を複製(Fork)してブランドを差し替え(Rebrand)、サービス開始する場合、伝統的なモノリシック・コード監査では大量の盲点が生じる。**五層監査フレームワーク(5-Layer Audit Framework)** は、この種のプロジェクトに専用設計された体系的な安全 / 起源監査手法で、コード差分、既知脆弱性の遺伝、コンパイル指紋、チーム関連性、コンプライアンス・リスクまでを網羅する。

## 中核メカニズム

Fork-and-Rebrand監査の中核思想は**「重要なのは変わらなかったコードではなく、何を変えたか、何を遺伝させたか、何を隠したか、である」**。

```
レイヤー 5: コンプライアンス & ライセンス監査 (ライセンス & コピーレフト検証)
└── レイヤー 4: チーム & デプロイヤー起源 (Team & Deployer Provenance)
└── レイヤー 3: コンパイル指紋 & バイトコード比較 (コンパイル指紋 & 差分)
└── レイヤー 2: 既知脆弱性 & 修正の遺伝 (Inherited Vulnerability Scan)
└── レイヤー 1: コードベース上流比較 (Upstream Source Diff)
```

---

### レイヤー 1: コードベース上流比較 (上流ソース差分)
- **目的**:フォーク・コードとオリジナル・コードの1行ごとの差分を厳密に識別する。
- **手法**:
  - `git merge-base` でフォークの正確なCommitノードを特定。
  - 純粋なリネーム置換(例:`UniswapV3` を一括 `BrandSwap` に置換)を剥離したうえでロジック差分を比較。
  - **レッドライン**:中核数学ライブラリ(Math/SafeMath)、権限制御Modifiers、状態遷移ロジックに改変がある場合。

### レイヤー 2: 既知脆弱性 & 修正の遺伝 (継承された脆弱性スキャン)
- **目的**:オリジナル・プロトコルでforkポイント以降に開示された既知脆弱性が、当該プロジェクトで修正済みかを検証する。
- **手法**:
  - 上流プロトコルでforkコミット以降に発生した全脆弱性開示、監査レポート、GitHub Security Advisoriesを検索。
  - 当該プロジェクト内の対応コード片を指定して点検。
  - **典型的な失敗例**:多数のCompound V2 Forkプロジェクトが2023-2024年において、オリジナルでは既に修正済みのRead-only Oracle Manipulation脆弱性を遺伝していた。日本のVASP側における同種の論点は [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全監査認証体系]] の強制disclosure要求を参照。

### Layer 3: コンパイル指紋 & バイトコードコード比較 (コンパイル指紋 & 差分)
- **目的**:[[security/bytecode-forensic-three-tier-verify|三層 verify 技術]] を用いて、チェーン上に実際にデプロイされているBytecodeが、プロジェクト側が主張するオープンソース・コードと完全に一致するかを検証する。
- **手法**:
- メタデータ ハッシュ (Swarm/IPFS コンパイル 指紋) を剥離した後、実行時バイトコードの類似度を比較します。
  - コンパイラ・バージョン(solc version)とEVMターゲット・バージョンの互換性差分を検証(例:PUSH0未対応チェーンでSolidity 0.8.20以上を強引にデプロイした場合のopcode異常)。

### レイヤー 4: チーム & デプロイヤー起源 (チーム & デプロイヤーの来歴)
- **目的**:プロジェクト背後の開発チームの真の学術 / 安全分野での背景や、過去の前科を識別する。
- **手法**:
  - デプロイヤー・アドレス(Deployer Address)の資金来源チェーンを抽出([[security/forensic-identity-anchor-chain|司法級身元アンカーチェーン]] を活用)。
  - [[security/wayback-machine-as-forensic-tool|Wayback Machine]] が保存する過去ウェブページ、早期GitHubコミット記録のcommitter emailおよびPGP署名を活用し、チームの前科を特定。
  - クロスチェーンで類似度が極めて高いunverifyコントラクトのバイトコード照合(Twin Fingerprint Mapping)。

### レイヤー 5: コンプライアンス & ライセンス監査 (ライセンスとコピーレフトの検証)
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

## 出典

- Uniswap v3-core LICENSE（Layer 5 の代表例: Business Source License 1.1、Change Date 2023-04-01、Change License GPL v2.0+） — https://github.com/Uniswap/v3-core/blob/main/LICENSE
- Compound Protocol リポジトリ（最も多くフォークされる Compound V2 系コードベース、Layer 1/2 の上流比較・既知脆弱性遺伝の対象） — https://github.com/compound-finance/compound-protocol
- GitHub Advisory Database（Layer 2 が参照する GitHub Security Advisories の公式データベース） — https://github.com/advisories

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[security/bytecode-forensic-three-tier-verify|スマートコントラクト bytecode フォレンジック — 三層 verify 技術]]
- [[security/forensic-identity-anchor-chain|司法級身元アンカーチェーン — 物理 / オンチェーン混合の帰属推定]]
- [[security/wayback-machine-as-forensic-tool|Wayback Machineを司法フォレンジック・ツールとして用いる標準手順]]
- [[security/module-path-confusion-supply-chain-attack.md|モジュールパス詐称によるサプライチェーン攻撃 — 精密投毒メカニズム]]
<!-- /wiki-links:managed -->
