---
source: fintech/e-euro-retail-rollout
source_hash: 15fa0b8e1d92cac6
lang: ja
status: machine
fidelity: ok
title: "デジタルユーロのリテール展開 — 準備フェーズ2023-2026, 、反ディスインターメディエーション設計、e-krona停止との比較"
translated_at: 2026-06-02T13:21:55.070Z
---

# デジタルユーロのリテール展開 — 準備フェーズ2023-2026, 、反ディスインターメディエーション設計、e-krona停止との比較

## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]の配下に位置づけられ、2026 準備フェーズ時点のECBデジタルユーロに関する法域別の深掘りである。4か国比較ビューは[[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]、アーキテクチャ文脈は[[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]、3パラダイム分類は[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]と併読する。法域別ピアは[[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]および[[fintech/erupee-india-pilot-status|eRupee India pilot status]]、EU側に関連するホールセールCBDC文脈（BoF / BdF、BdI、Bundesbankが参加）は[[fintech/bis-project-agora-overview|BIS Project Agorá]]、デジタルユーロの競争上の滑走路を形作るより広いEUステーブルコイン規制文脈は[[fintech/mica-overview|MiCA overview]]および[[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]を参照する。

> [!info] 要約
> 2026 年半ば時点で、デジタルユーロはなお **Preparation Phase** にある。当初は2023-11 から2025-10 までの2年間とされていたが、現在はEU共同立法の結果を待つため2026-Q4+へ延長されている。**本番発行はなく**、**リテールwalletもなく**、**本番merchantもない**。決定的な設計選択は、監督下PSP経由の**二層仲介型配布**、連携銀行口座へのreverse waterfallを伴う**1人あたり€3,000-€4,000の保有限度額案**、リテール残高の**無利息**であり、いずれも明示的な反ディスインターメディエーション防衛策である。最も近い教訓事例はスウェーデンのe-kronaで、Riksbankは2024-2025 に発行決定も本番リテール商品もないまま実質的に停止し、「準備は無期限に延び得る」ことを示した。デジタルユーロのペースは**技術的制約ではなく政策選択**であり、€18T+の商業銀行預金基盤を守りながら政治的合意を待つものだ。

## プログラム構造

```
                ECBデジタルユーロ・プログラム
                          │
       ┌──────────────────┴──────────────────┐
       ▼                                      ▼
   調査フェーズ                         準備フェーズ
   (2021-10 → 2023-10)                  (2023-11 → 2026-Q4+)
       │                                      │
   設計検討                             ルールブック作成
   （オフライン / オンライン、           技術ベンダー選定
    保有限度額、仲介型モデル）           手動・プロバイダー試験
   intermediated model)                 Manual + provider
                                        testing
       │                                      │
   「準備へ進む」勧告で終了              発行決定は未実施
                                         立法結果を待つ
                                         状態
                                            │
                                            ▼
                                  発行判断フェーズ
                                  （未移行）
                                            │
                                            ▼
                                  実発行（未定）
```

## マトリクス A · 法令、規制当局、フェーズ状況

| 項目 | 詳細 |
|---|---|
| 主務当局 | European Central Bank (ECB) Governing Council + ECB Executive Board |
| 法的根拠 | デジタルユーロ創設規則 — 欧州委員会提案 June 2023; EU理事会 + 欧州議会の共同決定（三者協議）中 |
| 調査フェーズ | 2021-10 → 2023-10 （完了） |
| 準備フェーズ | 2023-11 → 当初はOctober 2025まで。立法結果待ちで**2026-Q4+へ延長** |
| 発行判断フェーズ | 2026-05時点で未移行。政策理事会決定と法的根拠が必要 |
| 発行開始 | 未定。発行判断フェーズの結果に依存し、現実的な最速は2027-2028  |
| 報告頻度 | ECBはデジタルユーロ・プロジェクトページで四半期または定期の進捗報告を公表 |

ECBは各進捗報告で、**準備フェーズへの移行は発行決定ではない**と明示している。発行には、(i) EU共同立法規則の採択、(ii) 開始に関する別個の政策理事会決定が必要である。2026-05 時点では、いずれも実現していない。

## マトリクス B · 設計選択 — 反ディスインターメディエーションの明文化

| 設計選択 | 詳細 | 理由 |
|---|---|---|
| **二層仲介型** | ECB → 監督下PSP（銀行、EMI、決済機関）→ ユーザー。ECBは直接配布しない | 商業銀行の役割を維持し、[[fintech/cbdc-multi-tier-architecture-three-paradigms|three-paradigms]]の二層モデルと整合させ、中央銀行から消費者への直接配布によるディスインターメディエーションを避ける |
| **1人あたり保有限度額** | Proposed €3,000-€4,000 per person (立法判断次第で未確定) | 1人あたりデジタルユーロ総残高のハードキャップ; 大規模な転換を防ぐ of 銀行預金から中央銀行マネーへの転換 |
| **リバース・ウォーターフォール** | 支払いが受取人の保有限度額を超える場合、超過分は受取人の連携商業銀行口座へ自動振替される | 限度額超過の個別支払いでも、保有限度額がUX上の阻害要因にならないようにする |
| **無利息** | リテール・デジタルユーロは利息を支払わない | 商業銀行預金に対する貯蓄代替インセンティブを除去する |
| **オンライン + オフラインモード** | 一般利用向けオンラインモード; 少額・現金類似のオフラインモード P2P | オフラインモードは現金に近いプライバシーとレジリエンスを再現する; オンラインモードはmerchant決済を支える |
| **プライバシー階層** | オフラインモードは少額P2Pに中央記録を残さない現金類似のプライバシー、オンラインモードは監督下PSPの可視性とECBのデータ最小化 | プライバシー期待とAML/CFT義務のバランスを取る |
| **監督下PSPのみが配布** | ウォレットは銀行と監督下PSPが提供し、ECBは消費者向けアプリを運営しない | チャネル所有を商業銀行エコシステムに残す |
| **リテールは無利息かつプログラマビリティなし** | リテール・デジタルユーロにおけるプログラマブル・マネーを明示的に拒否 | 柔軟性を維持し、条件付支払いの濫用や福祉国家自動化という見方を避ける |
| **ホールセールは別トラック** | ホールセールCBDCのユースケースは、リテール・デジタルユーロではなく別個のEurosystem探索作業で扱う | 2つの別トラックであり、立法上の焦点はリテールである |

中核となる反ディスインターメディエーション設計は、**保有限度額 + リバース・ウォーターフォール + 無利息**の3点であり、最も議論の多い公共政策項目である。商業銀行は低い上限（€1,000-€2,500 レンジ）を求め、高い上限のシステミックリスクを強調してきた。ECBは€3,000-€4,000 に一定の許容感を示しているが、最終化していない。立法結果は政治交渉で決まる。

## マトリクス C · 準備フェーズの作業ストリーム

| Work-stream | 状況 (2026-05) |
|---|---|
| ルールブック作成 | PSP、加盟店、消費者代表を含むECB調整ワーキンググループで進行中 |
| 技術ベンダー選定（フレームワーク契約） | 選定ベンダーを公表済み。リスク管理、不正防止、オフライン決済、アプリSDK、エイリアス検索などの部品を競争調達 |
| 手動・技術試験 | 閉じた環境でのパイロット規模の技術試験。一般利用者向けパイロットではない |
| ユーザー調査 / 消費者フォーカスグループ | ユーロ圏加盟国全体で進行中 |
| 加盟店働きかけ / 受容設計 | 進行中。決済スキーム統合設計が進んでいる |
| クロスボーダー相互運用設計 | ユーロ圏全体設計を議論。外部CBDCとの関与は限定的 |
| 立法対話 | EU CouncilおよびEuropean Parliamentと積極的に対話し、ECBが技術助言を提供 |

準備フェーズは**公開パイロットではない**。内部設計と技術ベンダー作業である。最も近い比較対象は、消費者向け実証ではなく、設計段階にある大型金融インフラ計画である。

## マトリクス D · 採用指標（最新公開値）

| 指標 | 最新の公開値 |
|---|---|
| 稼働中のリテール利用者 | **0**（未発行） |
| 稼働中の加盟店 | **0**（受容なし） |
| 累計取引量 | **0** |
| 都市 / カバレッジ | **0** |
| 稼働中ウォレットアプリ | **0** |
| クロスボーダーCBDC決済 | **0** |
| 公開パイロット参加者 | **0**（準備フェーズ作業は内部 / ベンダー側であり、消費者側ではない） |
| ベンダー・フレームワーク契約 | リスク管理、アプリSDK、エイリアス検索、オフライン決済など複数部品レベル。2024-2025 にかけて選定ベンダー名を公表 |

決定的な事実は、2026-05時点で**デジタルユーロが4つの参照CBDCプログラムの中で唯一、稼働中のリテール活動がゼロである**ことだ。「中国に遅れている」という見方は技術的には正しいが、実質的には誤解を招く。ECBはこれが**政策選択**であり、技術格差ではないと明示している。

## マトリクス E · 保有限度額とディスインターメディエーション防衛（深掘り）

```
一人当たり保有限度額案（例示、未最終化）
       │
       ▼
   €3,000-€4,000  ← 直近で公開議論されているレンジ
       │
       ├── 上限以下: PSP提供ウォレットでデジタルユーロ残高を保有
       │
       └── 上限超過: 連携商業銀行口座へリバース・ウォーターフォール
                       （UX上は支払いがブロックされない）
```

3つの保護層:

1. **一人当たりのハードキャップ** — 何個ウォレットを開いてもデジタルユーロ保有残高の合計を制限する。上限はウォレット単位ではなく個人単位であり、エイリアス / 本人確認検索が必要になる。
2. **リバース・ウォーターフォール** — 支払いにより上限を超える場合、超過分は連携商業銀行口座へ自動ルーティングされる。利用者は任意の金額を送受金でき、デジタルユーロとして保有する残高だけが制限される。
3. **無利息** — 貯蓄代替インセンティブを完全に取り除く。デジタルユーロを保有する経済的理由は取引目的であり、貯蓄目的ではない。

ECBの技術分析では、提案上限の高い側でも、ユーロ圏全体のデジタルユーロ保有額は商業銀行預金総額（€18T+）の小さな割合にとどまり、リバース・ウォーターフォールが急増時の動きを処理できるとされる。商業銀行ロビーはこれに異議を唱えている。どちらの見方が採用されるかは立法結果で決まる。

比較すると、他の3つの参照CBDCプログラムはいずれも同じ形で保有限度額を明文化していない。
- **China e-CNY**はオペレーター階層別の限度（低階層は¥10K取引上限、¥50K残高。高階層KYCではより高い）を使う。
- **India eRupee**はアプリ設定の日次取引上限を使う。公開された厳格な残高上限はない。
- **Japan DCJPY**はCBDCではなく、トークン化銀行預金であるため、構造上は銀行ごとの預金保険上限¥10Mに覆われる。

## マトリクス F · 配布モデル

| レイヤー | 配布上の役割 |
|---|---|
| ECB | 発行体（中央銀行マネー）。基礎スキームと技術インフラを運営 |
| 監督下PSP（銀行、EMI、決済機関） | ウォレット提供、ユーザー・オンボーディング、KYC、利用者向けアプリ |
| 加盟店 | 決済スキーム統合を通じてデジタルユーロ支払いを受容 |
| 消費者 | PSP提供ウォレットでデジタルユーロを保有し、加盟店支払いやP2Pに利用 |

この配布モデルは、**商業銀行を消費者関係の中心に残す**ことを明示的に目的としている。これは、10 の指定オペレーターに配布権限を与えるがPBoCがその枠組みを定義する中国の二層型、および17 の参加銀行を使うインドの二層型との最大の設計差である。EU設計は既存の商業銀行配布チャネルを最も保護している。

## Sweden e-krona停止との比較

Sveriges Riksbankが2017, 以降進めてきたSweden e-kronaプロジェクトは、デジタルユーロ議論における警告例である。Riksbankの公開姿勢は、積極的なパイロット（2017-2022）から意図的な未決定状態（2023-2024）へ、さらに事実上の停止（2024-2025）へと変化した。公開情報上の主なシグナルは以下の通り。

- Riksbankは2017以降、複数フェーズにわたるe-krona PoC報告書を公表している。
- 2023-2024 までに、Riksbankの公開コミュニケーションは、発行が中央銀行だけの問題ではなく、議会判断を要する**政治的委任の問題**であることをより強調するようになった。
- Riksbankはe-krona開始よりも、既存決済インフラ（RIX-INST即時決済レール）の改善へ重点を移した。
- e-kronaの議論は、他のRiksbank作業ストリームに比べて事実上優先度が下がっている。

デジタルユーロへの教訓は、政治条件が収束しなければ**「準備」は無期限に延び得る**ということだ。Swedenの経験は、発行する技術能力は確立済みでも、発行する政治経済上の判断こそが制約条件であることを示す。デジタルユーロも同じ軌道にあり、技術は構築されているが、発行判断はECB単独では下せない。

| 項目 | EUデジタルユーロ | Sweden e-krona |
|---|---|---|
| 当局 | ECB Governing Council | Sveriges Riksbank |
| 法的根拠 | EU共同決定規則が保留中 | Swedish議会判断が必要 |
| アーキテクチャ | 監督下PSP経由の二層仲介型 | 設計中の二層仲介型モデル |
| 保有限度額 | €3,000-€4,000 を提案 | 未最終化。概念設計では上限に言及 |
| 稼働中リテール | なし | なし |
| 状況（2026-05） | 準備フェーズ（延長） | 事実上停止。発行判断なし |
| 政治的勢い | 中低位。商業銀行が抵抗 | 低位。Riksbankは優先度を下げた |
| 理由 | 反ディスインターメディエーション政策と共同立法ペース | 消費者・政治側の引力が乏しい |

ChinaとIndiaとの対比は構造的である。Chinaでは政治的委任が疑問視されず、PBoCが実装を進める直接権限を持つ。IndiaではRBIに制度的権限と明確な技術的委任がある。EUではECBが立法上の同意を必要とし、SwedenではRiksbankがまだ具体化していない議会委任を必要とする。ペースの差は**政治的**であり、技術的ではない。

## 競争環境 — MiCA EMTとEurosystemホールセール

デジタルユーロの競争上の滑走路は、EUにおける2つの並行展開によって形作られる。

1. **MiCA EMT制度** — 2024-06-30（SC部分）および2024-12-30（全面）に発効。EU信用機関とEMIによる規制下のユーロ建て電子マネートークン（EMT）はすでに市場にある。EMTは、民間仲介者を通じて「デジタルユーロ」用途の一部（プログラマブルなユーロ支払い）を提供する。[[fintech/mica-overview|MiCA overview]]および[[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]参照。
2. **Eurosystemホールセール探索作業** — リテール・デジタルユーロとは別であり、中央銀行マネーによるホールセール決済（DLTベース決済を含む）の試験を実施する。一部のユーロ圏中央銀行（BdF、Banca d’Italia、Bundesbank）は[[fintech/bis-project-agora-overview|BIS Project Agorá]]に参加し、独自のDLT実証も持つ。

この2つの補完的トラックは、**EUがデジタルマネー・インフラ全体で「遅れている」わけではない**ことを意味する。EUには稼働中のMiCAライセンスEMTと、稼働中のホールセールCBDC技術作業がある。滞っているのは、特に**リテールCBDC発行**である。これは、EUのペースを真の技術格差ストーリーから区別する構造的パターンである。

## 起源と展開

```
2017-2019     ECB内部のCBDC作業、Working Paperシリーズ
2020-10       ECBが「Report on a digital euro」を公表し、協議を開始
2021-10       調査フェーズ開始（2年）
2023-06       European Commissionがデジタルユーロ創設規則を提案
2023-10       調査フェーズ終了。ECBが準備フェーズ入りを勧告
2023-11       準備フェーズ開始（当初2年、2025-10まで）
2024-2025     ベンダー・フレームワーク契約、ルールブック作成、技術パイロット
2025          準備フェーズ進捗報告を四半期または定期に公表
2025-2026     立法結果待ちで準備フェーズを2026-Q4+へ延長
2026          EU CouncilとEuropean Parliamentが規則案の三者協議を継続
2026-05       発行判断なし。準備は継続
2026-2027    （想定）発行判断フェーズ入りは立法結果が条件
2027-2028    （現実的な最速）リテール実発行は発行判断が条件
```

**パターン**: 主要ステップはいずれも複数機関の同意に依存する。ECBはプロジェクトの制度的権限を持つが、法的根拠や拘束力ある政治的委任を単独では持たない。Riksbankのe-krona経験は、この依存関係がタイムラインを無期限に伸ばし得ることを示している。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/mica-overview|MiCA overview]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin five-pole matrix]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA framework]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge strategic comparison]]
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS 多 CBDC 跨境结算桥]]
- [[fintech/ecny-supply-chain-expansion|e-CNY supply-chain expansion]]
- [[fintech/erupee-india-pilot-status|eRupee India pilot status]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|央行职能解体五层]]

## 出典

- European Central Bank — デジタルユーロ・プロジェクトページ: https://www.ecb.europa.eu/euro/digital_euro/html/index.en.html
- ECB — デジタルユーロ準備フェーズ進捗報告: https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html
- European Commission — デジタルユーロ提案・政策ページ: https://commission.europa.eu/business-economy-euro/euro-area/digital-euro_en
- European Commission — デジタルユーロ創設規則案（June 2023）
- Council of the EU — デジタルユーロ政策ページ: https://www.consilium.europa.eu/en/policies/digital-euro/
- ECB — Report on a digital euro（October 2020）
- ECB — CBDC設計・分析に関するWorking Paper Series
- Sveriges Riksbank — e-kronaプロジェクトページおよびPoC報告: https://www.riksbank.se/en-gb/payments--cash/e-krona/
- BIS Innovation Hub — CBDCトピックページ: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Project Agorá公開資料（Eurosystem中央銀行参加）: https://www.bis.org/about/bisih/topics/cbdc/agora.htm
