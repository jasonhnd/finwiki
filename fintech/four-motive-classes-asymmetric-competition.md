---
title: 4 動機クラスの非対称分析 —— 7 陣営の対称競争ではない
aliases: [4 motive classes, asymmetric competition, 非対称ゲーミング, プレイヤー動機分類]
domain: fintech
kind: framework
topic: four-motive-classes-asymmetric-competition
created: 2026-05-16
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-16
confidence: certain
tags: [fintech, game-theory, stablecoin, competition-analysis, motive-mapping]
status: candidate
sources:
  - https://www.circle.com/en/business
  - https://tether.to/en/
  - https://www.federalreserve.gov/publications/2024-financial-stability-report.htm
  - https://www.bis.org/publ/arpdf/ar2023e3.htm
  - https://www.imf.org/en/Topics/fintech
---

# 4 動機クラスの非対称分析


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> 通用的な手法は市場参加者を「競争陣営」に分類すること(ある金融グループの deck の 7 陣営、本調査 v1 の 5 極など)。これは**対称競争**仮定を暗黙に含む。**実際にはプレイヤーには 4 種類の構造的動機**があり、**全く異なる撤退ゲーム**に対応する。動機分類を理解しなければ、各プレイヤーが圧力下でどう行動するか予測できない。

## 4 動機クラス

### クラス 1:詰まれた勝者(Locked-in Winners)

**特徴**:他のビジネスモデルに退避できず、勝つか死ぬか。

**例**:
- Circle(USDC が唯一のプロダクトライン)
- [[fintech/tether-business-model-short-treasury-yield|Tether]](USDT が唯一のプロダクトライン)
- Paxos([[fintech/paypal-pyusd-stablecoin|PYUSD]] / USAT / 各 SC 発行)
- Stripe(垂直統合の賭けは全て [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Bridge + Tempo + Privy]])
- Coinbase(Base + USDC 契約 + Prime がコア収益)
- ステーブルコイン L1 / L2 チェーン

**圧力下行動**:**高リスクを受け入れる** + 能動的買収 + 規制アービトラージを行う。

### クラス 2:ポートフォリオ勝者(Portfolio Winners)

**特徴**:多数に投資し、いずれかが勝てば勝ち、リスク分散。

**例**:
- a16z crypto(Arc $75M リード + 他多数の SC / チェーンプロジェクトに投資)
- BlackRock(Arc 投資 + 8 チェーン上の [[fintech/blackrock-buidl-tokenized-mmf-overview|BUIDL]] + Tempo 投資)
- Apollo(Arc 投資 + 6 チェーン上の [[fintech/apollo-acred-private-credit-tokenization|ACRED]])
- SBI Holdings(Circle 投資 + [[JapanFG/jpyc|JPYC]] 保有 + SBI Circle Holdings 50% 保有 + 他多数)
- Mubadala(Arc + 中東 RWA ファンド投資)
- Visa(Arc 投資 + Tempo validator + 全 SC 受入 + 自社 SC 非発行)
- Mastercard(Visa 同様だが時期は遅い)

**圧力下行動**:**多元化を維持** + 一方的に打開しない + fragmentation persistent の結末を受け入れる。

参照:[[portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造 / ARM アナロジー]]

### クラス 3:インフラ勝者(Infrastructure Winners)

**特徴**:churn 自体が収益、全交戦側に販売。

**例**:
- AWS / Azure / GCP(クラウドインフラ)
- Cloudflare(x402、AP2、AI 推論エージェント)
- Anchorage(OCC charter as a service、20 社の SC 発行体にホワイトラベル提供)
- Bridge(OCC charter as a service)
- Chainalysis / TRM Labs / Elliptic(オンチェーンコンプライアンス as a service)
- FIDO Alliance / Linux Foundation AAIF(プロトコル標準化 as ガバナンス)
- AT&T / Verizon(電信 KYC as a service、アジアで強い)

**圧力下行動**:**fragmentation 持続を喜ぶ** —— プレイヤーが多いほど収益が増える。

### クラス 4:主権コーディネーター(Sovereign Coordinators)

**特徴**:商業競争に参加せず、政治論理で動く。

**例**:
- BIS Project Agorá(7 中銀 + 40 商業銀行)
- mBridge(中国主導 + UAE / タイ / HK)
- Project Nexus(5 新興国、2026 商用)
- 各国中銀(PBoC, ECB, BoJ, Fed, RBI, MAS, HKMA, VARA)
- FATF(グローバル AML/CFT フレーム)
- IMF / 世銀(システム安定)

**圧力下行動**:**政治時間軸で移動**(緩慢だが不可逆)+ 商業論理のアービトラージを受け入れない。

## なぜこの分類が「7 陣営」より有用なのか

ある金融グループの deck の「7 陣営」分類:民間 vs 中銀コンソーシアム / 銀行単独 DLT / 中国国家垂直 / 新興国 IPS / M&A / 大型テック / 等。

**問題**:a16z(投資家)と Coinbase(運営者)を同次元に置き、Visa(カードネットワーク)と PayPal(ウォレット)を同次元に置く。**だが圧力下での行動は完全に異なる**:
- a16z は持分を「売却」して Coinbase の支援と交換しない → ポートフォリオ勝者
- Coinbase は 2026-08 の Circle 契約圧力下で**必ず**反撃する → 詰まれた勝者
- Visa はいずれかを片務的に支持しない → ポートフォリオ勝者
- PayPal は PYUSD 上で 4× 成長率の圧力下にある → 詰まれた勝者

**4 動機クラスにより予測可能**:
- 誰が**能動的に**衝突を激化させるか?詰まれた勝者
- 誰が**能動的に**衝突を調停するか?ポートフォリオ勝者 + インフラ勝者
- 誰が衝突を**無視**するか?主権コーディネーター(政治的に介入が必要な場合を除く)

## 応用テンプレート

**任意の市場構造的イベントを分析**:

1. 全主要プレイヤーをリスト化
2. 4 動機クラスに分類
3. 各クラスの「圧力下行動」を識別
4. **圧力増幅 → 誰が能動的か? 誰が受動的か? 誰が退場するか?** を推論

**典型応用 1:ステーブルコイン戦争**
- 詰まれた勝者(5-7 社):正面衝突
- ポートフォリオ勝者(8-10 社):分散投資
- インフラ勝者(5-7 社):ツール販売
- 主権コーディネーター(10+ 機関):規制 + CBDC

**典型応用 2:2008 グローバル金融危機**
- 詰まれた勝者:Lehman、Bear Stearns(強制破綻 / 買収)
- ポートフォリオ勝者:Goldman、JPMorgan(多元収益構造で生存)
- インフラ勝者:BlackRock(不良資産を引取)、ICE(NYSE 引取で構造強化)
- 主権コーディネーター:Fed、TARP、IMF(システミック介入)

**4 動機クラス分類法は、あらゆる金融インフラ再編イベントに拡張可能**。

## 関連

- [[wall-street-crypto-network-neutrality|Wall Street ネットワーク中立性]]
- [[portfolio-winner-structure-arm-analog|ポートフォリオ勝者構造]]
- [[central-banking-function-unbundling|中央銀行機能の解体 5 層]]

---

