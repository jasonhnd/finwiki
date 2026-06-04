---
source: non-profit/japan-koeki-houjin-accounting-standard
source_hash: 095665cc4697bfef
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日本 公益法人会計基準 — 公益法人のための会計基準"
translated_at: 2026-06-05T00:00:00.000Z
---

# 日本 公益法人会計基準 — 公益法人のための会計基準

## ウィキ上の位置づけ

この項目は [[non-profit/INDEX|non-profit INDEX]] 配下に、法的形態の下にある **会計 / 開示レイヤー** として位置づけられる —— それは 公益財団 / 公益社団 が実際に届け出るものであり、したがって [[non-profit/japan-koeki-vs-general-zaidan-comparison|公益財団 vs 一般財団 vs 一般社団 vs NPO法人 comparison]]（どの形態が報告しなければならないか）および [[non-profit/japan-general-foundation-establishment-requirements|Japan 一般財団法人 establishment requirements]]（誰が監査するか）の自然なコンパニオンである。外部監査の角度は [[financial-regulators/cpaaob|the CPAAOB]]（大規模 公益法人 を監査する CPA 専門職を監督する機関）に結びつく；監督体系については [[financial-regulators/INDEX|financial-regulators INDEX]] を参照。

## TL;DR

**公益法人会計基準** は、公益法人 のための **ファンド会計フレーバーの** 財務報告基準であり、公益認定法 のフレームワークで維持されている（現行ベースライン：**平成20年 (2008) 基準**、2021 改訂）。その特徴的な機能は、損益計算書の代わりの **正味財産増減計算書 (Statement of Changes in Net Assets)**、**指定正味財産 / 一般正味財産 に分割された 正味財産**、そして **公益目的事業会計 / 収益事業等会計 / 法人会計** セグメント別の報告である —— すべて *制限された資金がその制限された目的に支出されたことを証明する* ために設計されており、それはまさに 公益認定 の監督が必要とするものである。

## なぜ特別な基準が存在するか

営利会社は **利益** を報告する。公益法人 には利益動機がない；その会計が答えなければならない問いは異なる：

- **制限された（寄付者指定の）資金** はその指定された目的のみに支出されたか？
- 法人は **50%-支出 (公益目的事業比率)** およびその他の 認定基準 財務テストを満たしたか？
- **純資産** は 認定基準 の保持限度（遊休財産額 cap）内にあるか？

したがって基準は **純資産と制限を中心とする** ものであり、所得を中心とするものではない。これは [[non-profit/japan-koeki-vs-general-zaidan-comparison|the cross-form comparison]] の監督ロジックの会計上の表現である。

## コア財務諸表

| 財務諸表 | 日本語 | 役割 |
|---|---|---|
| 貸借対照表 | 貸借対照表 | 資産、負債、および **正味財産** |
| 正味財産増減計算書 | **正味財産増減計算書** | P&L を置き換える；カテゴリー別の純資産の増減を示す |
| キャッシュ・フロー計算書 | キャッシュ・フロー計算書 | より大きな法人に必要 |
| 注記 & 附属明細書 | 注記・財産目録 等 | 財産目録 (inventory of property) を含む詳細なスケジュール |

**正味財産増減計算書** は基準の心臓部である —— 「収益 − 費用 = 利益」の代わりに、それは 正味財産 がどう動いたかを報告し、制限された流れと制限されていない流れが可視化されるようにセグメント化されている。

## 指定 / 一般 正味財産 の分割

| 純資産クラス | 意味 |
|---|---|
| **指定正味財産 (restricted)** | 使用または時期に関する寄付者/助成者の制限付きで受領した資産 |
| **一般正味財産 (unrestricted/general)** | それ以外のすべて |

制限が満たされると、価値は **指定 から 一般 へ再分類** される —— 世界中の非営利会計で使われるのと同じ制限ファンド解放の考え方である。この分割は、監督者が制限付き贈与が指定された通りに使用されたことを確認できるようにするものであり、通常の企業会計には存在しない。

## セグメント会計 —— 区分経理

公益法人 は **三つの会計セグメント** にわたって報告する：

| セグメント | 何を捕捉するか |
|---|---|
| **公益目的事業会計** | 公益活動（税制優遇されたコア） |
| **収益事業等会計** | 付随的な営利 / 共益 事業 |
| **法人会計** | 一般的な法人オーバーヘッド |

この **区分経理 (segregated accounting)** は義務的である。なぜなら **法人税のラインと 公益認定 財務テストの両方が、公益目的事業 を 収益事業 から分離することに依存する** からである —— 会計基準を [[non-profit/japan-nintei-npo-houjin-tax-benefits|Japan 認定NPO法人 tax benefits]] で記述された税の姿勢および 公益法人等 法人税ルールに直接リンクする。

## 監査と誰が基準を適用するか

- **すべての 公益財団 / 公益社団** が基準を適用し、**公益認定等委員会（内閣府 / 都道府県）** に毎年届け出る。
- **一般財団 / 一般社団** は一般にそれを任意で採用し（セクターの事実上の基準である）、**大規模法人**（負債 ≥ ¥200bn）は **会計監査人 (CPA / audit firm)** を選任しなければならない。
- 会計監査人 監査が必要な場合、監査する CPA は [[financial-regulators/cpaaob|the CPAAOB]] が監督する専門職の下にある —— 非営利報告をより広い監査品質体制に接続する。

監査閾値と機関要件は [[non-profit/japan-general-foundation-establishment-requirements|Japan 一般財団法人 establishment requirements]] に詳述されている。

## 営利および NPO 会計とどう異なるか

- **vs 企業会計 (corporate GAAP)** —— 利益計算書なし；正味財産増減計算書 + 制限/非制限純資産の分割 + 区分経理 が所得計算書中心のモデルを置き換える。
- **vs NPO法人会計基準** —— NPO は *別個の、より軽い* **NPO法人会計基準**（活動計算書 を持つ小規模市民団体向けに構築されたセクター基準）に従い、公益法人会計基準 ではない；二つの法律ファミリーのために両者が共存し、[[non-profit/japan-npo-houjin-overview|Japan NPO法人 overview]] の形態分割と並行する。
- **vs 学校法人会計基準 / 社会福祉法人会計基準** —— 福祉と教育の形態はそれぞれ独自の法律の下に **独自のセクター会計基準** を持つ；公益法人会計基準 は 一般法人法 / 公益認定法 ファミリーを特に規律する。

## 戦略的読解

- この基準は **会計としての監督** として読むのが最善である：すべての特徴的な機能（正味財産増減計算書, 指定/一般 分割, 区分経理）は、公益認定 財務テストと法人税の境界を *監査可能* にするために存在する。
- 公益財団 の財務をモデル化する者は、利益ではなく **純資産の動きと制限ファンドの解放** で考えなければならず —— 初日から 公益目的事業 / 収益事業 / 法人 セグメントを分離し続けなければならない。なぜなら税と 認定 テストの両方がそれらのセグメントから読み取るからである。
- 日本の非営利空間は **マルチ基準**（公益法人 / NPO / 学校法人 / 社会福祉法人 がそれぞれ独自のものを持つ）であり、したがって「日本の非営利会計」は決して単一のルールブックではない —— [[non-profit/japan-koeki-vs-general-zaidan-comparison|the comparison page]] を通じて基準を法的形態に合わせること。

## 関連

- [[non-profit/INDEX|non-profit INDEX]]
- [[non-profit/japan-koeki-vs-general-zaidan-comparison|公益財団 vs 一般財団 vs 一般社団 vs NPO法人 comparison]]
- [[non-profit/japan-general-foundation-establishment-requirements|Japan 一般財団法人 establishment requirements]]
- [[non-profit/japan-npo-houjin-overview|Japan NPO法人 overview]]
- [[financial-regulators/cpaaob|CPAAOB]]
- [[INDEX|FinWiki index]]

## 出典

- 公益法人 information site (Cabinet Office) — 会計基準・FAQ: https://www.koeki-info.go.jp/
- e-Gov 法令検索 — 公益社団法人及び公益財団法人の認定等に関する法律: https://laws.e-gov.go.jp/law/418AC0000000049
- 法務省 — 公益法人制度: https://www.moj.go.jp/MINJI/koeki1.html
- 国税庁 No.5275 — 公益法人等課税: https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5275.htm

> [!info] 校核状態
> confidence: likely. 公益法人会計基準 の存在と目的、正味財産増減計算書、指定/一般正味財産 の区別、公益目的事業/収益事業等/法人 セグメントへの 区分経理、そしてマルチ基準のランドスケープ（別個の NPO/学校法人/社会福祉法人 基準）は公開かつ安定している。正確な現行の改訂年と正確な 大規模法人 監査閾値は、特定の届出について現行の内閣府 公益法人 情報サイトのテキストと照合すべきである。
