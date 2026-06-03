---
source: insurance/lloyds-japan-syndicate-operating-model
source_hash: 0b5bed0446860127
lang: ja
status: machine
fidelity: ok
title: "Lloyd's Japan シンジケート運営モデル"
translated_at: 2026-06-02T14:01:20.950Z
---

# Lloyd's Japan シンジケート運営モデル

## 要約

要点は、日本における Lloyd's のキャパシティはロンドン所在のシンジケートが供給し、その資本は法人メンバーおよび歴史的には Names に由来するという点である。日本支店は規制・業務上のインターフェースであり、リスクを負担するバランスシートではない。

## ウィキ上の位置づけ

この項目は [[insurance/INDEX|insurance index]] の下に置かれる。エンティティ単位のページは [[JapanFG/lloyd-japan|Lloyd's Japan]]、通常型外資再保険会社の比較は [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer Japan landscape]]、海上スペシャルティの文脈は [[insurance/marine-insurance-and-pi-cover-market|marine insurance and P&I cover market]]、Lloyd's が競合・補完する相手は [[insurance/japan-nonlife-big-three|Japan non-life big three]]、隣接する特殊リスク移転ルートは [[insurance/captive-insurance-japan-market|captive insurance Japan market]]、親レベルで Lloyd's を監督する Solvency II / PRA 枠組みは [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison matrix]] とあわせて読む。

## 1. Lloyd's of London の実体

Lloyd's は会社ではなく、規制されたマーケットプレイスである。

| 構成要素 | 役割 |
|---|---|

**規制。** Lloyd's は親レベルで英国 PRA と FCA の監督を受ける。Society of Lloyd's はマーケット全体を資本化する Solvency II 内部モデルを保有し、EU 側の相当主体は Lloyd's Insurance Company S.A.（Lloyd's Brussels）である。Solvency II の枠組みは [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison matrix]] を参照。

**セキュリティ・チェーン。** Lloyd's は有名な **3 層のセキュリティ・チェーン**に依拠する:

1. シンジケート・レベルの **Premiums Trust Funds** — 第 1 の支払原資。
2. **Members' Funds at Lloyd's (FAL)** — 第 2 の支払原資。各メンバーが自らの引受シェアを支えるために差し入れる。

このチェーンは、単一バランスシート型保険会社に対する構造的な代替である。このため Lloyd's Japan Inc. は、財務諸表指標で [[JapanFG/aig-japan|AIG Japan]] や [[JapanFG/chubb-insurance-japan|Chubb Insurance Japan]] と同列比較できない。バランスシートはロンドン側にある。

## 2. Lloyd's Japan Inc. — 何であり、何ではないか

| 項目 | 状態 |
|---|---|
| FSA 免許 | 保険業法上の損害保険会社 / 一般保険会社 ^[extracted] |
| FSA 登録一覧への掲載 | 損害保険会社免許一覧（songai.pdf）の外国損害保険会社等セクション ^[extracted] |
| ブランド | Lloyd's of London / Lloyd's |

## 3. 販売・プレースメントの流れ

日本のリスクが Lloyd's シンジケートに到達する流れ:

```
日本の被保険者（企業 / 中小企業 / 船主）
   ↓ (broker)
日本の免許保有ブローカー（保険業法上の仲立人免許）
   ↓
Lloyd's Japan Inc.（FSA 免許を持つ国内主体）
   ↓
ロンドン所在の Lloyd's ブローカー
   ↓
Lloyd's シンジケート — 共同引受市場
   ↓
リスクが成約し、各シンジケートが自らのシェアラインを書く（5%、10%、15%...）
   ↓
保険料と保険金は Lloyd's Japan Inc. を通じて出再者へ戻る
```

## 4. シンジケート・レベルのキャパシティ範囲

Lloyd's 市場はシンジケート単位の年次キャパシティ（Stamp Capacity）と Society レベルの業績を公表する。日本固有のシンジケート参加状況は種目別に公開分解されていないが、構造的には次のように読める。

| シンジケート・クラスター | 典型的な日本関与 |
|---|---|

## 5. Lloyd's が日本で強い種目

5 つのスペシャルティ種目の説明は、Lloyd's の公開市場コメント全体で一貫している。

## 6. 再保険と直接引受の境界

日本における Lloyd's シンジケートは、直接引受市場と再保険市場の**両方**で活動し、同じ種目内で両方を行うこともある。

| 形態 | 見え方 | カウンターパーティ | 例 |
|---|---|---|---|
| **直接（保険）** | Lloyd's Japan Inc. が日本のブローカー経由で日本の被保険者に保険証券を発行 | 日本企業 / 中小企業 / 船主 | JAL の航空機機体、製油所のエネルギー包括、総合商社の政治リスク |
| **再保険（特約）** | Lloyd's シンジケートが大手 3社 の出再特約に再保険者として参加 | 大手 3社 出再者 | Tokio Marine の巨大災害タワーにおける Cat XL 参加 |
| **再保険（任意）** | Lloyd's シンジケートが、大手 3社 が引き受けた単一大型リスクに任意再保険を提供 | 大手 3社 出再者 | 単一船舶の船体任意再保険、大型不動産任意再保険 |

このため Lloyd's は [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer panel]] の議論にも直接保険会社の比較にも登場する。Lloyd's は構造的に両方のレイヤーに存在する。

## 7. Lloyd's Japan と通常型外資保険会社の比較

| 軸 | Lloyd's Japan ([[JapanFG/lloyd-japan]]) | 通常型外資保険会社（例: [[JapanFG/aig-japan|AIG Japan]]、[[JapanFG/chubb-insurance-japan|Chubb]]） |
|---|---|---|
| 構造 | マーケットプレイス・プラットフォーム。1 リスクに複数シンジケート | 1 つのバランスシートを持つ単一保険会社 |
| 資本裏付け | 3 層のセキュリティ・チェーン（Premiums Trust Funds → FAL → Central Fund） | 親会社バランスシート |
| 親レベルの規制当局 | 英国 PRA / FCA（Society レベルの Solvency II 内部モデル） | 本国規制当局（NAIC / EIOPA など） |
| 資本規制の読み方 | Solvency II（Lloyd's グループ） | 適用される本国制度 |
| 引受判断 | シンジケートごとに判断。共同引受が可能 | 保険会社が中央集権的に判断 |
| スペシャルティ種目 | 強い。航空、エネルギー、政治リスク、テロ、サイバー | 保険会社により異なる |
| 単一バランスシート比較 | 意味を持たない。リスクはロンドンのシンジケート側にある | 直接比較が可能 |

## 9. この運営モデルが重要な理由

- **Solvency II との交差。** Lloyd's の親資本規制は Solvency II であるため、サイクルを通じた Lloyd's の価格形成は、日本の自然災害リスクに対する Solvency II SCR 感応度にも部分的に左右される。これは US-RBC 規制の保険会社には存在しない伝達経路である。[[insurance/global-solvency-framework-comparison-matrix]] を参照。

## 関連項目

- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/foreign-reinsurer-japan-landscape]]
- [[insurance/marine-insurance-and-pi-cover-market]]
- [[insurance/captive-insurance-japan-market]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[insurance/natcat-reinsurance-japan]]
- [[JapanFG/nonlife-insurer-registry-japan-index]]
- [[JapanFG/lloyd-japan]]
- [[JapanFG/aig-japan]]
- [[JapanFG/chubb-insurance-japan]]
- [[JapanFG/allianz-fire-marine-japan]]
- [[JapanFG/japan-pi-club]]
- [[JapanFG/tokio-marine-nichido-fire]]
- [[JapanFG/mitsui-sumitomo-insurance]]
- [[JapanFG/sompo-japan-insurance]]
- [[JapanFG/munich-re-japan]]
- [[JapanFG/swiss-re-japan]]
- [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]
- [[INDEX|FinWiki index]]

## 出典

- Lloyd's of London: Japan ページ (https://www.lloyds.com/japan).
- Lloyd's of London: Lloyd's と市場に関する説明ページ（Society 構造、シンジケート数、セキュリティ・チェーン）。
- Lloyd's 年次報告書・決算書（Society of Lloyd's の最新公開版）。
- FSA: 損害保険会社免許一覧（songai.pdf）、外国損害保険会社等セクション。
- General Insurance Association of Japan（損保協会）: 業界概要。
