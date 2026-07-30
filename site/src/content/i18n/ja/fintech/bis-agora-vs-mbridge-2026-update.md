---
source: fintech/bis-agora-vs-mbridge-2026-update
source_hash: 85e31d1a107cd212
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "BIS Project Agorá と mBridge · 2026 年の証拠限定アップデート"
translated_at: 2026-07-30T02:03:00+09:00
---
# BIS Project Agorá と mBridge · 2026 年の証拠限定アップデート

## 要約

BIS は、mBridge が minimum viable product（MVP）段階に達した後、2024 年 10 月に同プロジェクトをパートナーへ引き渡した。BIS のページは、各法域の準備状況を条件として MVP で実価値取引が可能になったと説明するが、商用稼働、追加メンバーをめぐる交渉、Brazil DREX との統合は記録していない。Project Agorá は 2026 年 5 月 27 日、8 の参加中央銀行と 40 超の規制対象民間機関によるプロトタイプを報告し、選定した実価値取引を含む追加テストを計画している。BIS はプロジェクトの招集者であり、追加の中央銀行でも、いずれかの枠組みの中央銀行メンバーでもない。Agorá は完成品ではない。^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下にある。Agorá の技術的基準線は [[fintech/bis-project-agora-overview|BIS Project Agorá 概要]]、従来の枠組みは [[fintech/bis-project-agora-vs-mbridge|Agorá と mBridge の初版比較]]、mBridge の基礎は [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]、2025 年の転換点は [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge と Agorá · 2025 年 BIS 切替]]、取引量の文脈は [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非ドル決済圏の規模]]、メンバー地図は [[fintech/mbridge-six-central-banks-roster|mBridge ロスター]] と比較する。香港側は [[fintech/bis-project-ensemble-overview|BIS Project Ensemble]] / [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble と mBridge の dual-track]]、シンガポール側は [[fintech/bis-project-guardian-overview|BIS Project Guardian]] / [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian と Agorá のアジア三極]]を参照。

## 2025 年の基準線から見た 2026 年の更新点

2024 年の基準線から変わった、出典で裏付けられる点は次のとおり。

1. **mBridge は MVP に到達し、BIS は 2024 年 10 月に引き渡した。** 4 つの創設当局が validator node を保有し、SAMA は 2024 年に参加した。
2. **observer は member ではない。** 引渡し時点の BIS observer list には BCB、Bank Indonesia、RBI、SARB が掲載されていたが、BIS はこれらを member として示していない。
3. **Agorá は 2026 年 5 月にプロトタイプを完成した。** BIS は、トークン化された中央銀行準備と商業銀行預金を使う atomic multi-currency settlement を報告している。
4. **Agorá は引き続き実験段階である。** BIS は完成品ではないと明記し、本番化にはレジリエンス、ガバナンス、運用規則の追加作業が必要としている。
5. **公的 roster と民間 roster は別である。** BIS は 8 の参加中央銀行と 40 超の規制対象民間機関を記載しており、BIS 自体を別の中央銀行として数えてはならない。^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## BIS 引渡し後の mBridge — 運用継続性

下表は、2024 年 10 月の引渡し時点で BIS が裏付けた状況だけを記録し、その後の本番稼働を推定しない。^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/speeches/sp241031.htm]

| 機能 | 引渡し時点の文書記録 | 2026-07-30 時点の証拠の境界 |
|---|---|---|
| プラットフォーム段階 | 2024 年半ばに MVP 到達 | BIS は本番稼働開始を説明していない |
| 参加者 | 4 創設当局に加え、2024 年に SAMA が参加 | 引用した BIS ページは追加メンバーを特定していない |
| Validator model | 4 創設当局がそれぞれ validator node を配置 | その後の node topology は引用資料に明記されていない |
| 取引 | 法域の準備状況を条件に、MVP で実価値取引が可能 | 引渡し後に比較可能な取引量 series を BIS は公表していない |
| ガバナンス | rulebook を含む専用の governance・legal framework | BIS は 2024 年 10 月にパートナーへ引き渡したが、その後の governance 詳細は記載されていない |
| Observer | BIS 掲載の 30 超の機関 | Observer status は membership や onboarding timetable を示さない |

引渡しによりパートナーが次の段階を決められるようになったが、BIS の公開資料は、制裁対象国の参加を可能にする意図があった、または特定国との交渉が進行しているとの主張を裏付けない。

## 「8 番目のメンバー」をめぐる問い

以下の機関は、引渡し時に公表された BIS list で observer だった。この list が示すのは observer status だけであり、候補順位、交渉、加盟、予測の証拠ではない。^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm]

| 機関 | BIS 掲載の status | 安全に推論できること |
|---|---|---|
| Central Bank of Brazil | Observer | プロジェクトを確認または追跡した。そこから membership や DREX integration は導けない |
| Bank Indonesia | Observer | プロジェクトを確認または追跡した。加盟時期は記載されていない |
| Reserve Bank of India | Observer | プロジェクトを確認または追跡した。加盟時期は記載されていない |
| South African Reserve Bank | Observer | プロジェクトを確認または追跡した。加盟時期は記載されていない |
| その他の掲載 observer | Observer | いずれかの機関を member と記述する前に、live roster を確認する必要がある |

roster の基準線は [[fintech/mbridge-six-central-banks-roster|mBridge ロスター]] を参照する。この履歴ページを使う際は、BIS を中央銀行として数えず、observer status から membership を推定しない。

## Agorá prototype の範囲

BIS は Agorá を、8 中央銀行と 40 超の規制対象民間機関が参加する官民協働と説明している。参加者数は実験の規模を示すが、本番稼働や、公表された wholesale-payment prototype を超える mandate を示すものではない。^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

prototype は、**tokenised central-bank reserves** と **tokenised commercial-bank deposits** を共有 programmable platform 上で組み合わせ、wholesale cross-border payment の atomic multi-currency settlement を検証する。BIS は、完成品ではなく prototype を提供したと明記する。選定した real-value testing は次の段階であり、完了済みの production launch ではない。より広い分析文脈は [[fintech/institutional-stablecoin-deposit-token-thesis|deposit-token thesis]] を参照。^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

### prototype が立証すること

2026 年の結果は、検証対象の準備と預金の表現を prototype 内で組み合わせ、atomic multi-currency settlement に使えることを立証する。tokenised fund share、money-market fund、equity exposure、商用稼働、または既存 wholesale-market infrastructure の置換は立証しない。

また、prototype は銀行預金、中央銀行マネー、民間ステーブルコインの間の序列も立証しない。これらは発行者、法的請求権、用途が異なるため、比較は [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融と暗号資産]] のような別途出典を伴う市場分析で扱う。

## 法務・compliance の境界

Agorá の作業は settlement finality、AML/CFT、data privacy を、検討中の法務・規制上の問題として扱う。prototype 自体は、すべての法域・参加者がこれらの要件をどう実装するかを確定しない。適用法と将来の運用規則を別途確認する必要がある。^[https://www.bis.org/about/bisih/topics/fmis/agora.htm]

## CBDC とトークン化預金アーキテクチャの trade-off

下表は、文書で確認できる設計要素と分析上の含意を区別する。プロジェクト記述の出典は mBridge の BIS page と Agorá の 2026 report であり、両プロジェクトは共通の本番 benchmark を公表していない。^[https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.bis.org/about/bisih/topics/fmis/agora.htm]

| アーキテクチャ | mBridge | Agorá |
|---|---|---|
| プロジェクト対象 | クロスボーダー決済と FX のための共通 multi-CBDC platform | 法域別の tokenized central-bank reserve と tokenized commercial-bank deposit を組み合わせる共通 programmable platform |
| 商業銀行の役割 | 商業銀行は MVP 上で実価値取引を実行 | 商業銀行は tokenized deposit を発行し、payment workflow に参加 |
| Ledger 設計 | 創設当局が validator を運用する mBridge Ledger | 預金用 unifying layer と、別個の central-bank-reserve ledger |
| Settlement | real-time peer-to-peer cross-border payment と FX。準備状況を条件に MVP で実価値取引が可能 | validation と balance lock 後の atomic multi-currency settlement を prototype で実証 |
| 段階 | 2024 年 10 月に MVP をパートナーへ引渡し | 2026 年 5 月に prototype を報告。選定した実価値取引の test を計画 |
| 分析上の含意 | より直接的な multi-CBDC arrangement | 中央銀行・商業銀行の二層構造を明示的に維持 |

mBridge の設計は、参加商業銀行を関与させながら、wholesale CBDC の直接交換を中心に置く。その設計が仲介機能を変えるかは access rule と実装に左右され、MVP だけでは経済全体の disintermediation を証明しない。

Agorá prototype は、tokenized deposit と central-bank reserve を組み合わせて二層構造を明示的に維持する。公表された project scope は、より広い capital-markets stack や production deployment を立証しない（[[fintech/institutional-stablecoin-deposit-token-thesis|機関向け stablecoin と deposit-token thesis]]と比較）。

## 2026-07-30 時点の別個の project scope

下表は scope の比較であり、正式な連携、排他性、本番準備完了、必然的な interoperability を主張するものではない。各行は、引用した公式プロジェクト説明の範囲に限定している。^[https://www.bis.org/about/bisih/topics/fmis/agora.htm; https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm; https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/project-ensemble/; https://www.mas.gov.sg/schemes-and-initiatives/project-guardian]

| Initiative | 公的部門の anchor | 文書で確認できる民間部門 layer | 文書で確認できる段階 | 範囲 |
|---|---|---|---|---|
| **Agorá** | BIS と 8 partner central bank | 公表 roster にある 40 超の規制対象機関 | Prototype。選定した実価値取引を含む追加 test を計画 | tokenized deposit と reserve を使う wholesale cross-border payment |
| **Ensemble / Guardian** | HKMA / MAS | 各 programme が指名する use-case-specific financial institution | Sandbox、trial、industry workstream | 香港・シンガポール ecosystem の tokenized asset と money |
| **mBridge** | 4 創設当局と SAMA | MVP の参加商業銀行 | MVP をパートナーへ引渡し。本ページでは本番稼働を主張しない | Multi-CBDC cross-border payment と FX |

HKMA は mBridge に参加し、別途 Project Ensemble を運営する。この重複だけでは、両 programme 間の bridge、政治的経路、coordination dependency は立証されない。[[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble と mBridge の dual-track]]を参照。

Project Guardian と Project Agorá は、公式に説明された異なる scope を扱う。[[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian と Agorá]]で比較する場合も、その分離を維持する。

引用資料は、mBridge–Agorá interoperability pilot、将来の必須接続、または HKMA / MAS 主導の経路を記録していない。今後の interoperability claim には、参加 project による日付付きの直接発表が必要である。

## 関連項目

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/bis-project-agora-overview|BIS Project Agorá 概要]]
- [[fintech/bis-project-agora-vs-mbridge|Agorá と mBridge の比較]]
- [[fintech/bis-project-ensemble-overview|BIS Project Ensemble 概要]]
- [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble と mBridge の dual-track]]
- [[fintech/bis-project-guardian-overview|BIS Project Guardian 概要]]
- [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian と Agorá のアジア三極]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge と Agorá · 2025 年 BIS 切替]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非ドル決済圏の規模]]
- [[fintech/mbridge-six-central-banks-roster|mBridge ロスター]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|預金トークン論]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|オンチェーン金融と暗号資産の分岐]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域リストと通貨保護主義]]
<!-- /wiki-links:managed -->

## 出典

- [BIS: Project mBridge の MVP 到達](https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm)
- [BIS: 2024 年 10 月の引渡し説明](https://www.bis.org/speeches/sp241031.htm)
- [BIS: Project Agorá の 2026 年結果と次段階](https://www.bis.org/about/bisih/topics/fmis/agora.htm)
- [BIS: Agorá 民間部門 participant list](https://www.bis.org/innovation_hub/projects/agora_list_participants.pdf)
- [BIS Annual Economic Report 2026, Chapter III](https://www.bis.org/publ/arpdf/ar2026e3.htm)
- [HKMA: Project Ensemble](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/project-ensemble/)
- [MAS: Project Guardian](https://www.mas.gov.sg/schemes-and-initiatives/project-guardian)
