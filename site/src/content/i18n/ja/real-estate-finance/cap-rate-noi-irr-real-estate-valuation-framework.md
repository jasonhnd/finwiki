---
source: real-estate-finance/cap-rate-noi-irr-real-estate-valuation-framework
source_hash: df4671fe53de5d43
lang: ja
status: machine
fidelity: ok
title: "キャップレート・NOI・IRR による不動産評価フレームワーク"
translated_at: 2026-06-03T00:53:08.341Z
---
# キャップレート・NOI・IRR による不動産評価フレームワーク

## 要約

日本の不動産評価は、相互に結びつく四つの指標、すなわちキャップレート (NOI 利回り)、NOI / NCF (純営業収益 / 純キャッシュフロー)、アンレバード IRR (プロジェクトリターン)、レバード IRR (エクイティリターン) を中心に構成される。これらの指標は、[[real-estate-finance/japan-real-estate-appraisal-methodology|不動産鑑定評価基準]] で成文化された三方式の鑑定評価フレームワーク、すなわち収益方式、比較方式、原価方式の上に重なる。J-REIT の価格形成は、JREI のキャップレート入力を用いる [[real-estate-finance/j-reit-market-overview|price-to-NAV mechanics]] が支配的である一方、私募不動産ファンドは保有期間 IRR の引受と明示的なレバレッジを追加する。JREI の半期ごとの Real Estate Investor Survey は事実上のキャップレート・ベンチマークであり、[[real-estate-finance/real-estate-cap-rate-compression-2026|current 2026 cap-rate ranges]] は NIRP 期の低水準からの緩やかな拡大を反映している。このページは手法参照であり、投資助言ではない。意思決定に使う前には、現在の JREI / ARES 公表資料でキャップレートと IRR レンジを確認する。

## ウィキ上の位置づけ

このページは、評価手法のルーティング面として [[real-estate-finance/INDEX|real-estate-finance index]] の下に位置づけられる。法定の MLIT 鑑定評価フレームワークは [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]]、現在のキャップレート・レンジマップは [[real-estate-finance/real-estate-cap-rate-compression-2026|cap-rate compression 2026]]、上場ビークルの価格形成文脈は [[real-estate-finance/j-reit-market-overview|J-REIT market overview]]、非上場ビークルの並行文脈は [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]]、利回りスプレッドの読み方は [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]]、レバレッジ側の引受は [[real-estate-finance/bank-commercial-real-estate-lending-japan|bank commercial real-estate lending Japan]]、クロスドメイン評価文脈は [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework|DCF / multiples / NAV framework]] とあわせて使う。割引率の入力レイヤーは [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] と組み合わせる。

## 相互に結びつく四つの指標

| 指標 | 式 | 捉えるもの |
|---|---|---|
| キャップレート (NOI 利回り) | NOI / 不動産価格 | 初年度の安定化後インカム利回り |
| NOI / NCF | 下記定義を参照 | 物件レベルのキャッシュフロー定義 |
| アンレバード IRR | 物件レベルのキャッシュフロー (取得 + NOI + 売却) の IRR | 資産レベルのプロジェクトリターン |
| レバード IRR | エクイティ・キャッシュフロー (債務返済 + 金融手数料後) の IRR | エクイティ投資家リターン |

## NOI と NCF (定義の突合)

定義は JREI 調査、[[real-estate-finance/j-reit-market-overview|J-REIT]] IR、私募ファンド LP 報告、鑑定実務の間で分岐する。手法横断の比較では、これらを突き合わせることが不可欠である。

| 項目 | NOI | NCF |
|---|---|---|
| 賃料収入 (総額) | + | + |
| その他収入 (駐車場、看板、共用部) | + | + |
| 空室 / 未回収損 | − | − |
| 物件運営費 | − | − |
| 固定資産税 / 都市計画税 | − | − |
| 保険 | − | − |
| プロパティマネジメント報酬 | − | − |
| ビルマネジメント報酬 | − | − |
| 修繕 / 維持管理 (経常) | − | − |
| Capex / TI / リーシング手数料 (一時的) | 通常は除外 | 通常は控除 |
| 資本的修繕リザーブ | 通常は除外 | 通常は控除 |
| 減価償却 | 除外 | 除外 |
| 支払利息 | 除外 | 除外 |
| 所得税 | 除外 | 除外 |

一般的な慣行では、NOI は capex / リザーブ前の物件運営収益であり、NCF は NOI から capex / リザーブを控除したもので、実際の分配 / 債務返済を支えるキャッシュフローである。J-REIT IR は通常、両方を突合つきで開示する。

## キャップレート — 三つの下位定義

| 種類 | 定義 |
|---|---|
| 取得時キャップレート | 初年度 NOI / 取得価格 |
| 安定化キャップレート | 満室 / 安定化状態の NOI / 現在価格 |
| リバージョン / ターミナルキャップ | DCF の終価に対して N+1 年目 NOI に適用されるキャップレート |
| 期待 (フォワード) キャップレート | 調査ベースの将来利回り期待。JREI 半期調査がベンチマーク |
| 取引 (市場) キャップレート | 成約済み取引から示唆されるキャップレート |

JREI 調査は物件タイプと都市別に期待キャップレートのレンジを公表し、ARES は J-REIT の取引キャップレートと物件別データを公表する。両者を合わせると、公開情報に基づくキャップレート参照となる。

## 収益方式 DCF の仕組み

[[real-estate-finance/japan-real-estate-appraisal-methodology|appraisal practice]] における収益方式 DCF は以下を用いる。

```
Value = Σ(NCF_t / (1+r)^t) + (TerminalValue_(N+1) / (1+r)^N)

TerminalValue = NCF_(N+1) / TerminalCap
```

| 入力 | 出所 |
|---|---|
| 予測 NCF | 賃貸ロール予測、市場賃料想定、空室想定、capex 計画 |
| 割引率 r | キャップレート + 成長 + リスクプレミアム成分 |
| 保有期間 N | 機関投資家向け評価では通常 10 年 |
| ターミナルキャップ | 調査ベースまたは限界買い手の引受。通常は取得時キャップより 25-50bp ワイド |

MLIT 準拠の鑑定評価意見では、直接還元法 (V = NOI / キャップレート) と DCF 法を突合する必要がある。

## J-REIT と私募不動産ファンドの価格形成

同じ基礎不動産でも、上場 J-REIT ビークルと私募不動産ファンドでは価格形成が異なる。

| 項目 | J-REIT (上場) | 私募ファンド |
|---|---|---|
| 価格の基準 | 一口あたり NAV に対する上場投資口価格 | 取得キャップレート + 保有期間 IRR 引受 |
| キャップレート入力 | JREI 鑑定キャップレート (半期サイクル) | 取引比較に基づく引受キャップレート |
| 割引メカニズム | NAV に対する取引価格倍率 (ディスカウントまたはプレミアム) | 保有期間 IRR とファンド目標 IRR の比較 |
| レバレッジ方針 | 保守的。LTV は通常 ~40-50% | より高い。戦略により LTV はしばしば 50-70% |
| 分配プロファイル | 税務パススルーのため ~90% の分配が必須 | 任意。再投資 / レバレッジの柔軟性 |
| 流動性 | 日次の上場流動性 | ロックアップ + 償還枠構造 |
| 投資家基盤 | 個人 + 機関 + 海外買い手 + 生命保険会社 | 主に機関 (生命保険、年金、海外 GP) |
| 限界買い手の引受 | 公開市場の割引率 | 私募市場のハードル IRR (バリューアッドでしばしば 12-18%) |

この価格形成の分岐が、同じ資産タイプについて J-REIT が私募市場の買い手の引受とは異なるキャップレート / NAV 比率で取引されうる構造的理由である。[[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread|J-REIT dividend yield vs JGB spread]] と [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]] を参照。

## アンレバード IRR とレバード IRR

| IRR | キャッシュフロー基準 | 測るもの |
|---|---|---|
| アンレバード IRR | 物件レベル: 取得支出 + NCF + 売却代金 | 資産レベルのプロジェクトリターン。レバレッジから独立 |
| レバード IRR | エクイティレベル: 投入エクイティ + 債務返済後 NCF + 債務控除後売却代金 | エクイティ投資家リターン。レバレッジに敏感 |

### 仕組み

単一物件について、以下の想定を置く。
- 取得価格 P
- LTV L (債務 = L × P)
- 債務の全込みコスト Rd
- 保有期間 N
- 1 年目 NCF C
- NCF 成長率 g
- 売却時キャップレート K_exit

```
Unlevered IRR solves: −P + Σ(C × (1+g)^(t−1)) + (C × (1+g)^N / K_exit − sale cost) over t = 1..N

Levered IRR solves: −P×(1−L) + Σ((C × (1+g)^(t−1)) − (debt service)_t) + (sale proceeds − remaining debt)
```

### レバレッジが IRR に与える影響

| キャップレートと債務コストの関係 | 影響 |
|---|---|
| キャップレート > 債務コスト (ポジティブキャリー) | レバレッジがエクイティ IRR を上方に増幅する |
| キャップレート ≈ 債務コスト | レバレッジはエクイティ IRR にほとんど寄与せず、リスクを増やす |
| キャップレート < 債務コスト (ネガティブキャリー) | レバレッジはエクイティ IRR を下げ、下方リスクを集中させる |

[[real-estate-finance/real-estate-cap-rate-compression-2026|2026 environment]] では、キャップレートが 3-5%、資金調達コストが NIRP 後の正常化局面にあるため、プライム資産のポジティブキャリー・スプレッドは NIRP 期より狭い。これによりレバード IRR の押し上げ効果が圧縮され、保有期間想定がより重要になる。

## 保有期間感応度

保有期間想定は、キャップレート圧縮 / 拡大の期待と相互作用する。

| 想定 | 方向性 |
|---|---|
| キャップレート安定下での長期保有 (10y+) | インカムリターンが総リターンを支配する |
| キャップレート圧縮下での短期保有 (3-5y) | 売却時キャップの利得が総リターンを支配する |
| キャップレート拡大下での長期保有 | インカムリターンが売却時キャップ損を相殺する |
| キャップレート拡大下での短期保有 | 売却時キャップ損が支配的になり、レバード IRR がマイナスになる可能性がある |

金利正常化環境では、慎重な引受は売却時キャップが取得時キャップよりややワイドになると想定する (例: +25-50bp)。これは予測 IRR を抑え、ファンド引受の質を試す規律テストとなる。

## JREI 鑑定評価手法との重なり

[[real-estate-finance/japan-real-estate-appraisal-methodology|JREI appraisal methodology]] は私募ファンド引受と同じ入力を多く用いるが、重要な違いがある。

| 項目 | JREI 鑑定評価 | 私募ファンド引受 |
|---|---|---|
| キャップレート入力 | 市場調査ベース。JREI Real Estate Investor Survey のレンジ | 取引ベース。案件比較に基づく |
| 成長想定 | 通常は保守的。実質賃料成長は控えめ | 戦略固有。バリューアッドは事業計画上の賃料上昇を想定 |
| Capex 想定 | リザーブベース。長期平均率 | 戦略固有。改装 / リポジショニング capex |
| 保有期間 (DCF) | 通常 10 年 | 戦略固有 (コア+ は 3-7y、バリューアッドは 5-10y) |
| 突合 | 収益 / 比較 / 原価方式の間で必須 | 単一の収益方式 DCF が支配的なことが多い |
| 独立性 | 法定の鑑定士独立性 | 運用者自身による引受 |

J-REIT NAV は JREI に基づく鑑定評価額から構築される。鑑定評価のラグ (2-4 四半期の更新サイクル) が、上場 J-REIT の価格対 NAV が鑑定 NAV より速く動く構造的理由である。

## キャップレートと割引率 (重要な区別)

| 概念 | 定義 |
|---|---|
| キャップレート | NOI / 価格。初年度利回り。静的指標 |
| 割引率 | 要求総リターン。リスクフリー + リスクプレミアム − 成長 |

関係式: キャップレート ≈ 割引率 − 期待 NOI 成長率。

3.5% のキャップレートに 1.0% の期待 NOI 成長率を置くと、約 4.5% の割引率が示唆される。キャップレートを割引率と同一視すること (一般的な略記) が成り立つのは、成長ゼロの定常状態に限られる。割引率の組み立ては [[finance/cost-of-capital-japan-2026-reference|cost of capital Japan 2026 reference]] を参照。

## 関連項目

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/real-estate-cap-rate-compression-2026]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/j-reit-vs-us-reit-governance-comparison]]
- [[real-estate-finance/j-reit-sponsor-structure-conflict]]
- [[real-estate-finance/j-reit-dividend-yield-vs-jgb-spread]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/bank-commercial-real-estate-lending-japan]]
- [[real-estate-finance/real-estate-private-credit-japan]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[finance/INDEX]]
- [[finance/dcf-vs-multiples-vs-nav-cross-domain-valuation-framework]]
- [[finance/cost-of-capital-japan-2026-reference]]
- [[finance/real-options-valuation-japan-applications]]
- [[finance/esg-sustainability-cross-domain-framework]]
- [[money-market/japan-money-market]]
- [[INDEX|FinWiki index]]

## 出典

- JREI (Japan Real Estate Institute): Real Estate Investor Survey (semi-annual cap-rate publication).
- ARES (Association for Real Estate Securitization): J-REIT data and survey publications.
- J-REIT.jp: market portal and educational materials.
- MLIT: 不動産鑑定評価基準 (Real Estate Appraisal Standards) framework.
- JPX: REIT segment data and disclosure framework.
- BoJ: macro and rate data for risk-free reference.
- Damodaran: real-estate-valuation methodology reference for unlevered / levered IRR mechanics.
