---
source: fintech/jamaica-jam-dex-cbdc
source_hash: d6cf1ad54e7b87a0
lang: ja
status: machine
fidelity: ok
title: "ジャマイカ JAM-DEX - Bank of Jamaica のリテール CBDC、Lynk ウォレット採用、eCurrency Mint ベンダー"
translated_at: 2026-06-02T13:21:55.086Z
---

# ジャマイカ JAM-DEX - Bank of Jamaica のリテール CBDC、Lynk ウォレット採用、eCurrency Mint ベンダー

## ウィキ上の位置づけ

この項目は、**JAM-DEX（Jamaica Digital Exchange）**に関する法域別ケーススタディとして [[fintech/INDEX|fintech index]] の下に位置する。JAM-DEX は Bank of Jamaica が 2022  に開始したリテール CBDC で、Bahamas Sand Dollar（2020）と Nigeria eNaira（2021）に続く主要な小国リテール CBDC の第三例であり、人口比で見た採用は三者の中で最も明瞭である。[[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]（最長運用のピア、AFI 配布モデル）、[[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]（採用失敗例、Bitt ベンダー）、[[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]（法域横断の位置づけ）と照らして読む。アーキテクチャ文脈は [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]、[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]、[[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]] を参照。

> [!info] 要約
> Bank of Jamaica (BoJ) は、**2022-07** に、8か月のパイロットを 2021 に終えた後、法定通貨型リテール CBDC として **JAM-DEX (Jamaica Digital Exchange)** を発行した。JAM-DEX は **Bank of Jamaica Act の改正（2022可決）により法定通貨**とされ、ローンチと並行して CBDC 固有の立法を行った最初期の法域の一つになった（既存の通貨発行権限を使った Bahamas と Nigeria より法的に明示的）。決定的な配布面の特徴は、NCB Financial Group 子会社 TFOB Limited が運営するウォレット **Lynk** であり、**約200K-300K 登録ユーザー**に 2024  までに達し、Sand Dollar や eNaira より成人人口に対する浸透率が高かった。技術パートナーは **eCurrency Mint**（Bitt ではなく、Sand Dollar / eNaira / DCash とは明確に異なるベンダー）である。政府の **インセンティブ支払い（J$2,500 の登録ボーナスと加盟店受け入れ補助）**が初期のウォレット登録急増を支えた。プログラム規模は e-CNY や eRupee より大幅に小さいが、比較可能な四つ以上のピア・プログラムの中では**最も明瞭な小国経済 CBDC 採用事例**である。

## プログラム・アーキテクチャ

```
                         Bank of Jamaica
                                │
                                ▼
                       JAM-DEX (J$ retail CBDC)
                                │
       ┌────────────────────────┴────────────────────────┐
       ▼                                                  ▼
   発行体 (BoJ; 法定通貨の中央銀行負債)   技術パートナー
                                                       (eCurrency Mint, USA;
                                                        DSC2 platform)
       │                                                  │
       ▼                                                  ▼
   Two-tier intermediated distribution               Wallet apps
   (BoJ → Authorised payment-service                  - Lynk (NCB / TFOB) — dominant
    providers (PSPs) + DTIs (deposit-taking            - JAM-DEX-enabled bank apps
    institutions) → consumer wallets)
       │
       ▼
   Tiered KYC
   - Standard (BoJ-aligned J$ KYC tiers)
   - Merchant tier
```

## Matrix A · 法令、規制当局、フェーズ状況

| Item | Detail |
|---|---|
| 主導当局 | **Bank of Jamaica (BoJ)** |
| 法的根拠 | Bank of Jamaica (Amendment) Act 2022  - 明示的な CBDC 法定通貨認可 |
| Pilot phase | 2021-08 to 2022-04 (8-month pilot, primarily Kingston / urban) |
| **Live launch** | **2022-07** — third major small-economy retail CBDC |
| Technology partner | **eCurrency Mint** (US-headquartered; deployed via DSC2 platform) |
| 基盤技術 | 暗号学的に保護されたデジタル記号 / 階層型デジタル署名（eCurrency Mint アーキテクチャ。Bitt 導入で使われた Hyperledger Fabric とは別系統） |
| Wholesale CBDC | None — retail only |
| クロスボーダー CBDC | 2026-05 時点ではなし。[[fintech/mbridge-bis-multi-cbdc-overview|mBridge]] / [[fintech/bis-project-agora-overview|Agorá]] との統合なし |
| 法定通貨ステータス | あり - 2022 BoJ Act 改正で明示 |

**法定通貨化の改正**は、小国経済のリテール CBDC の中で最も明瞭な法的構造である。Nigeria は既存の通貨権限に基づき eNaira を発行し、Bahamas Sand Dollar は CBOB Act の 2020 改正に依拠した。Jamaica は、デジタル・ジャマイカドルを法定通貨として具体的に名指しする専用の 2022 改正を可決し、最も踏み込んだ。

## Matrix B · 設計選択 — ウォレット-first、インセンティブ主導、銀行利用層重視

| Design choice | Detail | Why |
|---|---|---|
| **PSP と DTI を通じた二層仲介モデル** | BoJ が発行し、消費者は Authorised 決済サービス提供事業者 (PSPs) と Deposit-Taking Institutions (DTIs) を通じて取引する | 規制対象仲介者の役割を維持 |
| **旗艦ウォレットとしての Lynk** | NCB Financial Group 子会社 TFOB Limited が Lynk ウォレット を運営し、JAM-DEX ウォレットとして圧倒的に最も使われている | 単一の高品質な消費者向けアプリにウォレット UX を集中 |
| **登録インセンティブ - J$2,500 (約US$16) ボーナス** | 最初の 100K 人の消費者ウォレット登録者に対する政府 / BoJ 資金の一回限りインセンティブ（2022-03発表） | ローンチ後数週間の初期ウォレット登録急増を後押し |
| **加盟店補助** | 小規模加盟店の受け入れを促す政府資金の補助 | 両面市場の鶏卵問題を狙う |
| **Zero interest** | No yield on JAM-DEX balances | Same anti-disintermediation logic as peers |
| **消費者から加盟店への取引手数料なし** | BoJ は取引ごとの手数料を課さない | 採用を促す |
| **Account-based ledger** | Balances tied to identified ウォレット via PSP / DTI onboarding | AML/CFT-compatible |
| **eCurrency Mint ベンダー（Bitt ではない）** | Bitt の許可型 DLT モデルに対するアーキテクチャ上の代替 | Sand Dollar / eNaira / DCash とは異なる技術系譜 |
| **中央銀行への直接債権** | JAM-DEX は BoJ の負債である | 日本の DCJPY（預金トークンであり CBDC ではない）と異なる |

インセンティブ主導のローンチは、最も議論を呼ぶ設計選択である。政府 / BoJ はコールドスタートの採用問題を克服するため、J$2,500 の登録ボーナスと加盟店補助に資金を投じた。批判側は、これは持続的利用を確保せず見出し向けの登録数を買ったものだと主張する。一方、擁護側は **2023-2024 までにアクティブ利用指標が初期インセンティブ層を超えて伸びた**ことを指摘し、導入によって一定の実需が生まれたと見る。

## Matrix C · 採用指標（直近の公開値）

| 指標 | Most-recent public figure |
|---|---|
| Live status | **Live since 2022-07** (~3.5+ years) |
| Registered ウォレット (cumulative) | ~200K-300K (Lynk-led, multiple public statements through 2024) |
| **Active ウォレット** | Materially smaller than registered; public BoJ statements have not disclosed precise daily-active counts |
| **成人人口に対する浸透率** | 成人人口（総成人数約2M）に対して数パーセント - **人口比では Sand Dollar や eNaira より高い** |
| Cumulative tx value | Modest in absolute terms; J$ billions cumulative over multi-year window |
| Coverage | Nation-wide; Kingston / urban concentration |
| 加盟店受け入れ | 数千の加盟店が報告され、ファストフード / 小売 / インフォーマル部門のパイロットに集中 |
| Cross-border CBDC | None |

JAM-DEX のウォレット・経済圏では **Lynk ウォレット** が支配的である。NCB Financial Group が、既にマーケティング済みの消費者向け決済アプリ（Lynk）の中に JAM-DEX レールを組み込んだ戦略判断は、小国経済 CBDC の中で最も明瞭な配布チャネル所有の事例である。NCB は Jamaica 最大の商業銀行グループで、強い既存消費者接点を持つ。これは、PBoC が六大国有商業銀行と四大決済 / 通信事業者を活用した e-CNY モデルに構造的に近く、Bahamas の AFI 相互運用型パターンとは異なる。

## Matrix D · Lynk ウォレット — 配布チャネル所有の優位性

```
   Bank of Jamaica (BoJ)
        │
        ▼
   NCB Financial Group (largest commercial banking group in Jamaica)
        │
        ▼
   TFOB Limited (NCB subsidiary; consumer-fintech vehicle)
        │
        ▼
   Lynk wallet (JAM-DEX 対応の消費者ウォレット + 隣接する決済機能)
        │
        ▼
   ~200K-300K registered users + ~thousand+ merchants
```

**なぜ重要か:** Lynk の浸透率は JAM-DEX 採用を左右する最大の決定要因である。NCB Financial Group は預金と消費者接点で Jamaica の支配的な商業銀行であり、Lynk を通じて JAM-DEX を推進する戦略的意思が、eNaira を苦しめた配布インセンティブ問題（DMB / MMO が自社商品より CBDC を推す動機が乏しい問題）を解いた。Lynk は BoJ に、実際の消費者マーケティング能力を持つ単一のアンカーウォレットを与えた。

eNaira との対比は構造的である:

- **eNaira**: many DMBs + MMOs, none particularly incentivised to push.
- **Sand Dollar**: multiple AFIs, interoperable but small absolute base.
- **JAM-DEX / Lynk**: 支配的な商業銀行グループが運営する単一アンカーウォレット。配布インセンティブが一致。

**配布チャネル所有の教訓**は、四極の小国経済 CBDC 比較から最も頻繁に引用される発見である。

## Matrix E · 政府インセンティブ設計

Jamaica 政府 / BoJ は、初期採用を促すために三つの具体的な補助レバーを使った:

| Subsidy | Detail | Effect |
|---|---|---|
| **消費者登録ボーナス** | J$2,500 の一回限り支払いを最初の約100K 人のウォレット登録者に提供（2022-03発表） | 初期登録急増を後押ししたが、見出し用の数字を買ったとの批判も受けた |
| **加盟店受け入れ補助** | 小規模加盟店の受け入れ登録への補助 | 初期加盟店基盤を構築 |
| **公務員向け支払い実験** | 一部の公共部門パイロット支払いを JAM-DEX で実施 | 政府から個人への（G2P）ユースケースを試験 |

これらの補助は、ピアの CBDC プログラムにも広く利用可能な**政策ツール**だが、すべてが実施したわけではない。Sand Dollar は同等の消費者登録ボーナスを使わず、eNaira も登録ボーナスを使わなかった（採用ギャップを考えると使うべきだった可能性がある）。Jamaica のアプローチは、小国経済リテール CBDC の中で**最も積極的なインセンティブ設計**であり、現在はテンプレート候補として研究されている。

## Matrix F · Comparison to peer CBDCs

| Item | Jamaica JAM-DEX | [[fintech/bahamas-sand-dollar-cbdc\|Bahamas Sand Dollar]] | [[fintech/nigeria-enaira-retail-cbdc\|Nigeria eNaira]] | China e-CNY |
|---|---|---|---|---|
| Live launch | 2022-07 | 2020-10-20 | 2021-10-25 | 2020-04 (pilots) |
| 発行体 | Bank of Jamaica | Central Bank of The Bahamas | Central Bank of Nigeria | PBoC |
| 法定通貨改正 | あり（BoJ Act 改正 2022） | あり（CBOB Act 2020） | なし（既存の通貨権限に基づく） | あり（PBoC Law 2020） |
| Distribution model | PSPs + DTIs; Lynk dominant | AFIs (interoperable) | DMBs + MMOs | 10 designated 事業者 |
| Technology vendor | **eCurrency Mint** (US) | Bitt Inc. (Barbados) | Bitt Inc. (Barbados) | Proprietary PBoC |
| 登録インセンティブ | **J$2,500 登録ボーナス** + 加盟店補助 | なし | なし | なし（国家主導の採用推進） |
| アンカーウォレット | **Lynk** (NCB / TFOB) | 複数 AFI ウォレットの相互運用 | eNaira Speed ウォレット + DMB アプリ | AliPay / WeChat Pay 連携 + 銀行アプリ |
| アクティブ浸透率 | 成人人口の数% | 人口の一桁% | 成人人口の <0.5% | 180M+ 登録のうち一桁百万の日次アクティブ |
| Status (2026-05) | Live; modest growth | Live (5+ years); slow growth | Live but de-emphasised | Live; mass-rollout phase |

**eCurrency Mint vs Bitt** のベンダー分岐は、静かだが重要なデータ点である。Bitt ベンダー群（Sand Dollar、eNaira、ECCU DCash）の成果は混在から低調である一方、eCurrency Mint 導入（JAM-DEX）は小国経済で最も明瞭な採用事例である。これは必ずしもベンダー能力の話ではない。配布設計が技術選択を上回る。ただし、このパターンは CBDC ベンダー選定文献で注目に値する。

## Origin and evolution

```
2020-2021    BoJ internal work on retail CBDC; eCurrency Mint selected as technology partner
2021-08      Pilot phase begins (8 months, primarily Kingston-area)
2022-03      Pilot concludes; government announces J$2,500 enrolment-bonus programme
2022-05       Bank of Jamaica (Amendment) Act 2022  可決 - JAM-DEX を法定通貨化
2022-07      JAM-DEX launched nation-wide; Lynk wallet goes live
2022-08      First ~100K wallet enrolments; J$2,500 bonus disbursed
2023          加盟店受け入れが拡大。Lynk がウォレットシェアを支配
2023-2024    Continued growth; public BoJ statements emphasise gradual scaling
2024-2025    JAM-DEX continues; wallet count grows past 200K Lynk users
2025-2026    Live; modest organic growth post-incentive
```

**パターン**: ローンチは、パイロット → 立法 → インセンティブ → ウォレット展開という形できれいに順序立てられた。Jamaica の CBDC 物語は、公開記録上で**最もよく順序設計された小国経済リテール CBDC ローンチ**である。構造的な教訓は、最も明瞭な順序（立法権限 + アンカーウォレット + インセンティブ）が、最速の順序（eNaira）や最長運用の順序（Sand Dollar）より、人口比の採用で上回るという点である。

## Jamaica における民間レール代替との比較

Jamaica's private-rail digital-payment landscape:

- **商業銀行アプリ** - NCB、Scotiabank Jamaica、BNS、JN Bank。
- **Lynk** - TFOB / NCB。JAM-DEX ウォレットと単独の決済アプリの二目的を担う。
- **Existing card / ATM rails** — Visa, Mastercard.
- **送金** - 大規模なディアスポラ送金フローがある。MoneyGram、Western Union、JNMS Remit、USD 連動の Lynk 機能、ステーブルコイン代替（USDT ベース送金アプリ）が台頭中。
- **Crypto / USDT P2P** - Jamaica では Nigeria に比べて小規模だが、台頭中。

JAM-DEX の競争上の滑走路は、Opay / PalmPay / Moniepoint が既に数億人規模の利用者を抱える Nigeria より**混雑しておらず**、Bahamian 銀行システムが高度に発達している Sand Dollar より**成熟度が低い**。アンカーウォレット（Lynk）+ 支配的な商業銀行グループ（NCB）+ 法定通貨立法 + 政府インセンティブという組み合わせは、これまでの公開記録上で**最も明瞭な小国経済 CBDC 採用スタック**である。

## 関連項目

- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/bahamas-sand-dollar-cbdc|Bahamas Sand Dollar]]
- [[fintech/nigeria-enaira-retail-cbdc|Nigeria eNaira]]
- [[fintech/cbdc-adoption-curve-china-japan-eu-india-2026|CBDC adoption curve 2026]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式]]
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡]]
- [[fintech/e-euro-retail-rollout|digital euro retail rollout]]
- [[fintech/boe-digital-pound-consultation|BoE digital pound consultation]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto dollarization pattern]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC bridge]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá]]
- [[fintech/jp-stablecoin-dcjpy|DCJPY / ディーカレット DCP]]

## 出典

- Bank of Jamaica - 機関トップページ: https://boj.org.jm/
- BoJ - CBDC / JAM-DEX プロジェクトページ: https://boj.org.jm/core-functions/currency/cbdc/
- BoJ — JAM-DEX consumer / 加盟店 pages: https://boj.org.jm/jam-dex/
- Lynk ウォレット事業者 (TFOB / NCB Financial Group): https://lynk.us/
- BIS Innovation Hub CBDC topic landing: https://www.bis.org/about/bisih/topics/cbdc.htm
- BIS Working Paper No. 1116 — "The next-generation monetary system — a blueprint" (2024)
- Bank of Jamaica (Amendment) Act 2022  - パブリックドメインの法令テキスト
- BoJ public press releases on JAM-DEX launch and J$2,500 enrolment-bonus programme (2022)
