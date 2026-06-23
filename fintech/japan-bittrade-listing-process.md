---
title: 日本 BitTrade 上場プロセス — 登録交易所 Listing の 8 段階構造
aliases: [bittrade-listing, jp-cex-listing, 日本上場プロセス]
domain: fintech
created: 2026-05-13
last_updated: 2026-05-26
last_tended: 2026-06-23
review_by: 2026-08-07
confidence: likely
tags: [fintech, needs-verification]
status: active
sources:
  - https://www.bittrade.co.jp/
  - https://jvcea.or.jp/about/list/
  - https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx
  - https://www.bittrade.co.jp/news/
note: ユーザー註「必ずしも正確とは限らず、継続的にトラッキング要」· 実案件で逐次検証
---

# 日本 BitTrade 上場プロセス — 登録交易所 Listing の 8 段階構造


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] コア認知 `[V?]`
> 日本の登録交易所(BitTrade 等)の上場プロセスは、本質的に「ビジネスがまとまれば上場」という話ではなく、**ある token を日本の規制体系内で長期運営可能な金融商品に変換する**プロセスである。JVCEA 自律規則 + FSA 監督 + 法律意見書 + 技術安全審査 + AML/KYC + 流動性安定性の 6 重審査を同時にクリアする必要がある。

## 検証ステータスの凡例

| ラベル | 意味 |
|------|------|
| `[V?]` | 未検証 — 暫定的にユーザーメモ |
| `[V~]` | 部分的に検証済み |
| `[V✓]` | 確認済み |
| `[V✗]` | 反証済み |

検証の優先順位:実際の上場案件 → JVCEA / FSA 公式文書 → BitTrade 内部コンタクト → コンサルタント / 法律事務所。

## 8 段階の全景

```
1. 初期ビジネス接触 (Business Screening)
   ↓
2. プロジェクト・デューデリ (Due Diligence · 会社/Token/市場 3 層)
   ↓
3. 法務 / コンプラ審査 (Token 分類 + 証券判定)
   ↓
4. 技術安全審査 (Smart Contract + Chain Risk)
   ↓
5. JVCEA / FSA 対応 (自律審査 + 金融庁折衝)
   ↓
6. 流動性とマーケットメイク (MM Agreement + 初期深さ)
   ↓
7. 上場実行 (Go Live · 技術連携 + 広報)
   ↓
8. 上場後の継続モニタリング (Post Listing Monitoring)
```

## 第 1 段階: 初期ビジネス接触 `[V?]`

**プロジェクト側の提出物**: Whitepaper · Tokenomics · Team · 資金調達情報 · GitHub · Audit 報告 · 法的構造 · Token 用途。

**BitTrade の判断基準**(海外 CEX と顕著に異なる):日本ユーザー基盤 · 取引量 / OTC キャパシティ · IEO 適性 · 長期協業の可能性 · **FSA に潰されにくいか**。

> 日本の交易所が最も気にするのは話題性ではなく、「規制当局に説明できるか / 事故を起こさないか」である。

## 第 2 段階: プロジェクト・デューデリ `[V?]`

- **会社層**: 登記主体 · 株式構成 · UBO · 取締役 · 制裁名簿 · 銀行取引 · 過去訴訟
- **Token 層**: 総量 · 発行権限 · Admin Key · Freeze · Blacklist · Mint/Burn · Vesting · Unlock — 重点は**凍結能力 / upgrade 権限 / owner 境界**(USDC / JPYC / XAU₮ を参照)
- **市場層**: マーケットメイカー · 流動性ソース · OTC バックアップ · 暴落 / wash trade リスク(FSA は market manipulation に対する感度が極めて高い)

## 第 3 段階: 法務 / コンプラ審査 `[V~]`

> Token 分類表 = `[V✓]`(資金決済法 / 金商法 / 電子決済手段 三軌は複数ソースで検証済み) · 「偽 Utility, 真の証券」レッドライン = `[V?]`

| 種別 | 規制法 | 実際の規制主体 |
|------|--------|--------------|
| 暗号資産 | 資金決済法 | 関東財務局 · 暗号資産交換業 |
| 有価証券 / ST | 金商法(FIEA) | 第一種金商業 or PTS |
| 電子決済手段(ステーブルコイン) | 電子決済手段等取引業 | 2026 制度 |
| 前払式 | 前払式支払手段 | 限定用途 |

詳細は [[fintech/japan-financial-regulation|日本金融規制 — 三法体系]] を参照。

### 「偽 Utility, 真の証券」レッドライン

危険シグナル(証券判定されやすい):分配金 · 元本保証 · 買戻し約束 · 固定利回り · NAV 対応 · 債権マッピング。

> 「契約上 buyback を約束できない」は、日本で証券分類を回避するための典型的な経験則。

## 第 4 段階: 技術安全審査 `[V?]`

- **Smart Contract**: 監査報告(必須) · Upgradeability / Proxy · MultiSig · Emergency Pause · Reentrancy · Oracle リスク
- **Chain リスク**: 公開チェーンの安全性 · チェーン停止可能性 · Bridge リスク · クロスチェーン複雑度

> 日本の機関は **per-chain issuance** を bridge より好む(規制事故の帰責境界が明確)。

## 第 5 段階: JVCEA / FSA 対応 `[V?]`

**よくある誤解**: 「日本の交易所が単独で上場を決める」 → ❌

```
BitTrade → JVCEA(自律審査) → FSA(金融庁)
```

**提出資料リスト**: リスク説明 · 利用者保護策 · AML リスク分析 · 市場操作リスク評価 · Token 分類の法律意見書 · 技術リスク説明 · 流動性プラン。JVCEA 自律審査の全景は [[exchanges/jvcea-self-regulatory-overview|JVCEA 自律規則概要]] を、FSA 登録の流れは [[exchanges/fsa-vasp-registration-system|FSA VASP 登録制度]] を参照。

## 第 6 段階: 流動性とマーケットメイク `[V?]`

**多くのプロジェクトが死ぬポイント**。注目点:上場後の volume · spread · OTC 引受 · MM の安定性。

通常要件:MM agreement · Liquidity provider のロックアップ · 初期深さのコミットメント · マーケットメイク資金の保証。

## 第 7 段階: 上場実行 `[V?]`

- **技術連携**: Wallet 統合 · Deposit / Withdrawal · Memo/tag · Hot/Cold wallet · Monitoring · Travel Rule
- **広報**: プレスリリース · AMA · Campaign · OTC プロモーション · 日本 KOL

## 第 8 段階: 上場後の継続モニタリング `[V?]`

**日本では「上場で終わり」ではない**。継続モニタリング:Token unlock スケジュール · クジラの送金 · 市場操作 · 法令変更 · プロジェクト運営 · Treasury の健全性。

深刻時の対応手段:出金停止 → 上場廃止 → リスク告知。

## IEO 追加層 `[V?]`

IEO は標準上場プロセスに 1 層追加:資金調達構造設計 · 日本ユーザー向け販売規則 · Lockup · Vesting スケジュール · 投資者保護 · 募集説明書 · リスク開示。

## 日本 vs 海外 上場比較 `[V?]`

| 項目 | 日本 BitTrade | 海外一般 CEX |
|------|---------------|--------------|
| 法務審査 | 極めて重い | 軽め |
| JVCEA/FSA の関与 | あり | なし |
| 証券判定 | 極めて厳格 | 緩い |
| AML 要件 | 極めて重い | 中程度 |
| 技術監査 | 深い | ケースバイケース |
| 上場スピード | 遅い(数か月~1年+) | 速い(数週間) |
| 上場コスト | 高い | 中 |
| 持続可能性 | 強い | 変動大 |

## BitTrade が真に気にする 7 つの指標 `[V?]`

多くのプロジェクトが「技術が優秀なら上場できる」と誤解する。実際の優先順位:

1. 長く存続できるか
2. 規制事故を起こさないか
3. 交易所が FSA から叱責されないか
4. ユーザークレームを引き起こさないか
5. AML がクリーンか
6. Token 価格が安定しているか
7. 証券と定義されにくいか

## Applicable When

- 日本の登録交易所への上場が必要なプロジェクトの評価
- 海外 token プロジェクトから「日本上場にどれくらい時間 / 難易度がかかるか」と聞かれた際の回答フレーム
- 手持ち token 設計が証券化レッドラインに触れるかの自己評価
- BitTrade / bitbank / Coincheck 等の登録交易所と初回ビジネス接触する前のセルフチェック
- 日本 VASP 規制のタイムライン背景は [[exchanges/jp-vasp-regulatory-timeline|日本 VASP 規制タイムテーブル]] を参照

## 未検証項目

- [ ] JVCEA 審査の実際の所要期間
- [ ] FSA 関与のトリガー条件
- [ ] MM agreement の標準条項(初期深さ / spread / 期間)
- [ ] 上場申請の実際の reject 率
- [ ] BitTrade 内部審査委員会の構成
- [ ] IEO vs 直接 listing のコスト / 時間差

## Sources

- 公開:JVCEA 自律規則 / FSA 監督指針 / 資金決済法
- 業界一般:日本登録 CEX の上場実務

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-financial-regulation|日本金融規制]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]]
- [[fintech/japan-ecisb-license|日本 ECISB ライセンス]]
<!-- /wiki-links:managed -->
