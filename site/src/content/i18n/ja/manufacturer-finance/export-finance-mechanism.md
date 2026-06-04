---
source: manufacturer-finance/export-finance-mechanism
source_hash: 975ebc84f2626f37
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "輸出金融の仕組み (Export Finance Mechanism — buyer credit / supplier credit / ECA)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Export Finance Mechanism (輸出金融の仕組み — buyer credit / supplier credit / ECA)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] as the **mechanism page** behind export-oriented manufacturer finance. The Japanese manufacturer that runs this mechanism most visibly is documented in [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]; [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] uses the same ECA stack for rail and energy exports. It is the cross-border sibling of the domestic [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]. The Japanese policy-finance institutions that supply the official support are [[financial-regulators/jbic|JBIC (国際協力銀行)]] and [[policy-finance/nexi|NEXI (日本貿易保険)]]; the international rulebook is [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]. For how Japan's three export-support pillars compare, see [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]]. Pair with [[JapanFG/INDEX|JapanFG index]] for the broader regulatory boundary.

## TL;DR

**Export finance (輸出金融)** とは、メーカーが資本財 (プラント、発電設備、鉄道車両、航空機、船舶、産業機器) を **海外の買い手に長期与信付きで輸出する** ための金融の仕組み。captive (自社製品の消費者金融) と異なり、輸出金融は **政府系の export credit agency (ECA) の「公的支援」を組合せる** のが核心。日本では **[[financial-regulators/jbic|JBIC]] が融資 (financing) を、[[policy-finance/nexi|NEXI]] が貿易保険 (pure cover) を担い、メガバンクのシンジケートと共に組成** する。与信形態は **(1) buyer credit (買い手/買い手の銀行に貸す)** と **(2) supplier credit (輸出メーカーが買い手に直接信用供与し、それを ECA 保険でカバー/銀行が買取)** の 2 系統。これら公的支援の条件 (頭金・返済期間・最低金利) は **[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]** が国際的に統制し、各国の補助金競争を抑える。manufacturing 視点では「captive を持たない重工業メーカーが、ECA + 商業銀行を組合せて事実上の輸出金融プラットフォームを運用する」モデル ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] が典型)。

## 1. buyer credit と supplier credit

| 与信形態 | 貸し手 | 借り手 | メーカーの位置 |
|---|---|---|---|
| **Buyer credit (バイヤーズクレジット)** | 輸出側の銀行 / ECA | 海外の買い手 (またはその銀行) | メーカーは現金回収。与信は買い手と銀行/ECA の間 |
| **Supplier credit (サプライヤーズクレジット)** | 輸出メーカー自身 (→ 銀行が債権買取) | 海外の買い手 | メーカーが一旦信用供与、ECA 保険でリスクをカバーし銀行が買取 |

- **buyer credit** はメーカーにとって最もクリーンで、輸出代金を実質前払いで回収できる。プラント・インフラ大型案件で主流。
- **supplier credit** はメーカーが一時的に与信リスクを負うが、NEXI 等の貿易保険でカバーし、銀行に債権を売却すれば資金化できる。
- 期間区分: **短期 (通常 2 年未満) / 中期 (2〜5 年) / 長期 (5 年超)**。資本財は中長期が中心。

## 2. ECA の「公的支援」3 形態

export credit agency (ECA) の支援は、概ね次の 3 つに分類される。

| 支援形態 | 内容 | 日本の担い手 |
|---|---|---|
| **Pure cover (純粋カバー)** | 融資はせず、輸出者/貸し手にカントリーリスク・信用リスクの**保険・保証**を提供 | [[policy-finance/nexi|NEXI]] (貿易保険) |
| **Financing support (融資支援)** | 直接融資・リファイナンス・金利支援を提供 | [[financial-regulators/jbic|JBIC]] (輸出金融・投資金融) |
| **Aid financing (援助金融)** | 譲許的なクレジット・グラント (tied aid を含む) | JICA / 政府 ODA との連携 |

日本の典型パターンは **JBIC が融資、NEXI が保険、メガバンクがシンジケート参加** という三者組成。詳細な役割比較は [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] 参照。

## 3. OECD Arrangement (国際ルール)

**[[policy-finance/oecd-export-credit-arrangement|OECD Arrangement on Officially Supported Export Credits]]** は、参加国が「公的支援できる輸出与信の最も寛大な条件」(最低頭金、最長返済期間、最低金利 = CIRR、最低保険料率) を定めた紳士協定。目的は **level playing field** の確保 — 各国 ECA の補助金競争・貿易歪曲を抑えること。

- メーカー視点では、ライバル国メーカー (独・仏・韓・中の競合) と同じ条件土俵で戦えることを意味する。
- セクター別の特則 (航空機、船舶、原子力、再生可能エネルギー、climate-related 等) があり、案件の返済期間・条件を左右する。
- 中国など非参加国の ECA は Arrangement の規律外で動くため、競争上の論点になる。

## 4. 案件組成の流れ (典型例)

```
海外の買い手 (政府/事業会社) が日本メーカーの資本財を発注
   │
   ├─ メーカー (例: [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]]) が EPC / 機器供給契約を締結
   │
   ├─ JBIC が buyer credit を組成 (買い手/買い手銀行へ融資)
   │     + メガバンク ([[financial-regulators/jbic|JBIC]] 協調融資にシンジケート参加)
   │
   ├─ NEXI が貿易保険でカントリー/信用リスクをカバー (pure cover)
   │
   ├─ OECD Arrangement の条件 (頭金・期間・金利・保険料) に準拠
   │
   └─ プロジェクトファイナンス (IPP・発電・洋上風力) では SPV を介在
         → [[structured-finance/infrastructure-finance-spv-japan|インフラ SPV]] 構造と接続
```

メーカー本体のコーポレート財務とプロジェクト本部が、この ECA + 商業銀行のシンジケートを案件ごとにデザインする。これが「captive を持たない重工業メーカーの事実上の finance arm」の実態 ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] / [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]])。

## 5. 規制・政策

- **OECD Arrangement**: 公的支援条件の上限規律 (上記)。
- **外為法 / 安全保障貿易管理 (METI)**: 防衛・原子力・デュアルユース品目の輸出許可。
- **原子力**: IAEA セーフガード、輸出先国の原子力規制、二国間原子力協定 (123 協定型)。
- **環境・人権**: ECA の環境社会配慮ガイドライン (JBIC / NEXI のガイドライン)、OECD コモンアプローチ。
- **GX / 気候**: グリーン分野では JBIC GX 枠、OECD Arrangement の climate-related 特則の活用余地が拡大。
- **政策金融の役割**: 日本の輸出金融は [[policy-finance/japan-policy-finance-system|日本の政策金融システム]] の一部として、商業ベースで取りにくい長期・大型・新興国案件を補完する設計。

## Related

- [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]
- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] (domestic sibling mechanism)
- [[financial-regulators/jbic|JBIC (国際協力銀行)]] · [[policy-finance/nexi|NEXI (日本貿易保険)]] · [[policy-finance/oecd-export-credit-arrangement|OECD Arrangement]]
- [[trade/jetro-vs-nexi-vs-jbic-comparison|JETRO vs NEXI vs JBIC]] · [[policy-finance/japan-policy-finance-system|日本の政策金融システム]] · [[structured-finance/infrastructure-finance-spv-japan|インフラ SPV (project finance)]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[JapanFG/INDEX|JapanFG INDEX]] · [[INDEX|FinWiki index]]

## Sources

- OECD「Export credits」: https://www.oecd.org/en/topics/export-credits.html
- OECD「Arrangement on Officially Supported Export Credits」: https://legalinstruments.oecd.org/Instruments/instruments/OECD-LEGAL-5005
- JBIC (国際協力銀行): https://www.jbic.go.jp/en/
- NEXI (日本貿易保険): https://www.nexi.go.jp/en/
- EDINET (メーカー有価証券報告書 — 輸出案件の開示): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校正ステータス
> confidence: **likely**。buyer credit / supplier credit・ECA の 3 支援形態 (pure cover / financing / aid)・OECD Arrangement の規律は、OECD 公式・JBIC / NEXI 公式・業界解説 (Clifford Chance 等) に基づく一般的な仕組みの記述。特定案件の金額・条件は秘匿性が高く変動するため本ページでは扱わず、企業別エントリ ([[manufacturer-finance/mitsubishi-heavy-export-finance|MHI]] 等) と政策金融エントリに委ねる。脆い financial figures より mechanism 知識を優先。
