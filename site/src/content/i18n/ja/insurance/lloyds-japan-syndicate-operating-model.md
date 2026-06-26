---
source: insurance/lloyds-japan-syndicate-operating-model
source_hash: 9c0b7a699b6b2764
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Lloyd's Japan syndicate operating model"
translated_at: 2026-06-26T08:32:07.535Z
---

# Lloyd's Japan syndicate operating model

## TL;DR

要点：日本における Lloyd's のキャパシティは、ロンドンを拠点とするシンジケートによって供給され、その資本は法人会員から、歴史的には Names から拠出される。Japan 支店はリスクを負担するバランスシートではなく、規制および業務上のインターフェースである。

## Wiki ルート

この項目は [[insurance/INDEX|insurance index]] の配下にある。エンティティレベルのページは [[non-life-insurers/lloyd-japan|Lloyd's Japan]]、従来型の外国再保険者パネルとの比較は [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer Japan landscape]]、海上スペシャルティの文脈は [[insurance/marine-insurance-and-pi-cover-market|marine insurance and P&I cover market]]、Lloyd's が誰と競合し誰を補完するかは [[insurance/japan-nonlife-big-three|Japan non-life big three]]、隣接するスペシャルティ・リスク移転経路は [[insurance/captive-insurance-japan-market|captive insurance Japan market]]、親会社レベルで Lloyd's を監督する ソルベンシー II／PRA フレームワークは [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison matrix]] と照らし合わせて読むこと。

## 1. Lloyd's of London が実際には何であるか

Lloyd's は会社ではなく、規制された市場（マーケットプレイス）である。

| 構成要素 | 役割 |
|---|---|

**規制。** Lloyd's は親会社レベルで英国 PRA および FCA によって監督されている。Society of Lloyd's は、市場全体を資本化する ソルベンシー II 内部モデルを保有しており、その EU 相当物が Lloyd's Insurance Company S.A.（Lloyd's Brussels）である。ソルベンシー II の枠組みについては [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison matrix]] を参照。

**Chain of Security。** Lloyd's はその有名な**三連鎖のセキュリティ（three-link chain of security）**に依拠している：

1. シンジケートレベルの **Premiums Trust Funds** — 第一順位の請求。
2. **Members' Funds at Lloyd's (FAL)** — 第二順位の請求。各会員が自らの引受シェアを支える ために拠出する。

この連鎖は、単一バランスシートの保険会社に対する構造的な代替手段である。これはまた、Lloyd's Japan Inc. が財務諸表上の指標で [[non-life-insurers/aig-japan|AIG Japan]] や [[non-life-insurers/chubb-insurance-japan|Chubb Insurance Japan]] と同等に比較できない理由でもある — バランスシートはロンドンにある。

## 2. Lloyd's Japan Inc. — それが何であり、何でないか

| 項目 | ステータス |
|---|---|
| FSA 免許 | 保険業法上の損害保険会社／一般保険会社 ^[extracted] |
| FSA 登録簿への掲載 | 損害保険会社免許一覧 (songai.pdf)、外国保険者セクション ^[extracted] |
| ブランド | Lloyd's of London / Lloyd's |

## 3. 流通および付保（プレースメント）フロー

日本のリスクが Lloyd's シンジケートに到達する仕組み：

```
Japanese insured (corporate / SME / shipowner)
   ↓ (broker)
Licensed Japanese broker (insurance broker under 保険業法 仲立人 license)
   ↓
Lloyd's Japan Inc. (FSA-licensed local entity)
   ↓
London-based Lloyd's broker
   ↓
Lloyd's syndicate(s) — subscription market
   ↓
Risk is bound; each syndicate writes its share line (5%, 10%, 15%...)
   ↓
Premium and claims flow back through Lloyd's Japan Inc. to the cedent
```

## 4. シンジケートレベルのキャパシティ・カバレッジ

Lloyd's 市場は、シンジケートレベルのキャパシティ数値（Stamp Capacity）と Society レベルの業績を毎年公表している。日本固有のシンジケート参加は、種目（line-of-business）の詳細レベルでは*公的に分解されていない*が、構造的な読み方は次のとおり：

| シンジケート・クラスター | 典型的な日本での関与 |
|---|---|

## 5. Lloyd's が日本でリードする種目

5 つの種目から成るスペシャルティのストーリーは、Lloyd's の公的な市場コメンタリー全体で一貫している：

## 6. 再保険と直接引受の境界日本における Lloyd's シンジケートは、直接引受市場と再保険市場の*両方*で、時には同じ種目で、事業を行っている：

| モード | どのように見えるか | カウンターパーティ | 例 |
|---|---|---|---|
| **直接（保険）** | Lloyd's Japan Inc. が日本のブローカーを通じて日本の被保険者に証券を発行する | 日本の法人／中小企業／船主 | JAL の航空機ハル；製油所のエネルギーパッケージ；総合商社向け政治リスク |
| **再保険（特約）** | Lloyd's シンジケートが大手3社のアウトワード特約に再保険者として参加する | 大手3社 の出再者（cedent） | Tokio Marine のキャットタワーへの Cat XL 参加 |
| **再保険（任意）** | Lloyd's シンジケートが大手3社の引き受ける単一の大型リスクに任意再保険を行う | 大手3社 の出再者（cedent） | 単一船舶のハル任意再保険；大型物件の任意再保険 |

これが、Lloyd's が [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer panel]] の議論*にも*直接保険者比較にも登場する理由である — Lloyd's は両方の層に構造的に存在している。

## 7. 比較：Lloyd's Japan vs 従来型の外国保険者

| 次元 | Lloyd's Japan ([[non-life-insurers/lloyd-japan]]) | 従来型の外国保険者 (例、[[non-life-insurers/aig-japan|AIG Japan]], [[non-life-insurers/chubb-insurance-japan|Chubb]]) |
|---|---|---|
| 構造 | マーケットプレイス・プラットフォーム；リスクごとに複数のシンジケート | 単一バランスシートを持つ単一の保険者 |
| 資本の裏付け | 三連鎖のセキュリティ (Premiums Trust Funds → FAL → Central Fund) | 親会社のバランスシート |
| 親会社の規制当局 | 英国 PRA／FCA (Society レベルの ソルベンシー II 内部モデル) | 本国の規制当局 (NAIC／EIOPA／等) |
| 資本規制の読み方 | ソルベンシー II (Lloyd's グループ) | 適用される本国規制のいずれか |
| 引受の意思決定 | シンジケートごとに行われる；サブスクリプションが可能 | キャリアが中央集権的に行う |
| スペシャルティ種目 | 強い — 航空、エネルギー、政治、テロ、サイバー | 可変 — キャリアによる |
| 単一バランスシート比較 | 意味をなさない — リスクはロンドンのシンジケートにある | 直接比較が可能 |

## 9. この事業モデルが重要な理由

- **ソルベンシー II のクロスオーバー。** Lloyd's の親会社の資本規制が ソルベンシー II であるため、サイクルを通じた Lloyd's のプライシングは、日本の自然災害（natcat）に対する ソルベンシー II SCR 感応度に部分的に駆動される — これは US-RBC 規制下のキャリアには存在しない伝達チャネルである。[[insurance/global-solvency-framework-comparison-matrix]] を参照。

## 関連

- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/foreign-reinsurer-japan-landscape]]
- [[insurance/marine-insurance-and-pi-cover-market]]
- [[insurance/captive-insurance-japan-market]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/natcat-reinsurance-japan]]
- [[non-life-insurers/nonlife-insurer-registry-japan-index]]
- [[non-life-insurers/lloyd-japan]]
- [[non-life-insurers/aig-japan]]
- [[non-life-insurers/chubb-insurance-japan]]
- [[non-life-insurers/allianz-fire-marine-japan]]
- [[financial-regulators/japan-pi-club]]
- [[non-life-insurers/tokio-marine-nichido-fire]]
- [[non-life-insurers/mitsui-sumitomo-insurance]]
- [[non-life-insurers/sompo-japan-insurance]]
- [[non-life-insurers/munich-re-japan]]
- [[non-life-insurers/swiss-re-japan]]
- [[financial-licenses/insurance-license-and-solvency]]
- [[INDEX|FinWiki index]]

## Sources

- Lloyd's of London: Japan page (https://www.lloyds.com/japan).
- Lloyd's of London: About Lloyd's and Our Market pages (Society structure, syndicate count, chain of security).
- Lloyd's Annual Report and Accounts (Society of Lloyd's, latest public version).
- FSA: 損害保険会社免許一覧 (songai.pdf), foreign-insurer section.
- General Insurance Association of Japan (損保協会): industry overview.
