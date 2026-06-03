---
source: money-market/boj-post-2024-floor-system-complementary-deposit-facility
source_hash: 2182fec9cda02b0b
lang: ja
status: machine
fidelity: ok
title: "BoJ post-2024 floor system と補完当座預金制度"
translated_at: 2026-06-02T16:33:58.475Z
---
# BoJ post-2024 floor system と補完当座預金制度

## ウィキ上の位置づけ

この項目は [[money-market/INDEX|money-market index]] の配下に置かれる。比較・対照の文脈では [[money-market/boj-open-market-operations|BoJ open market operations]] を、より広い制度・規制上の境界については [[money-market/japan-money-market|Japan money market]] を参照する。

## 要約

2024, 年3月、日本銀行はマイナス金利政策 (NIRP) と Yield Curve Control (YCC) を終了し、BoJ 当座預金の政策金利残高階層に支払う利息を政策金利として設定する短期金利目標の枠組みに移行した。これは **floor-system** アプローチであり、構造的には Fed の IORB や ECB の預金ファシリティに近い。

準備預金付利のレールは補完当座預金制度であり、歴史的には当座預金残高に階層構造を適用してきた。2024 年3月の枠組み転換後、政策金利残高階層にはヘッドラインの短期政策金利が適用され、短期金融市場の価格形成はこの床を上回る水準にアンカーされる。

## 枠組みマップ

| レイヤー | 2024 年3月以前の読み方 | 2024 年3月以降の読み方 |
|---|---|---|
| 政策金利目標 | NIRP 枠組みの下で短期目標はマイナス 10 ベーシスポイント近辺。長期側は YCC で管理。 | 無担保コール翌日物金利を正の短期金利目標近辺へ誘導。 |
| 準備預金の階層 | 基礎残高、マクロ加算残高、政策金利残高の三階層。政策金利残高にマイナス金利を適用。 | 補完当座預金制度を通じて準備預金に利息を適用。現在公表されている階層金利を確認する。 |
| 長期金利管理 | 10年物 JGB 利回りに YCC バンドを設定。 | YCC は終了。長期金利は市場決定に委ねられる。 |
| 資産買入 | JGB / ETF / J-REIT / CP / 社債の大規模買入プログラムをフルペースで実施。 | JGB 買入ペースを段階的に減額。ETF / J-REIT の新規買入は終了。企業資産プログラムは縮小。 |
| 運営思想 | マイナス金利の床と YCC の天井を持つ純粋な数量主導型。 | floor-system の仕組みを使う通常型の金利目標枠組み。 |

## 補完当座預金制度の仕組み

補完当座預金制度は、BoJ が民間銀行の当座預金残高に利息を支払う法的・実務的経路である。歴史的な要点は次のとおり。

- BoJ の市場調節枠組みの延長として 2008 年に導入された。
- 金融危機時の流動性拡大を封じ込める手段として使われた。
- 日銀ネットの当座預金システムを通じて運営される。
- 公開された BoJ 政策委員会決定を通じて実施される。

NIRP と NIRP 後の正常化に伴う政策階層の変更後、厳密な階層定義と適用金利は時期により変わる。現在の金利と階層定義を扱う場合は、必ず最新の BoJ MPM 決定文と現在のオペレーションページを参照する。

## 階層型 IOER 構造 (参照用の読み方)

2024 年以前の NIRP 階層枠組みは、有用な読み方のテンプレートを提供する。

| 階層 | 概念 | 読み方 |
|---|---|---|
| 基礎残高 | 過去の準備預金額に基づき定義される参照残高。 | 正の金利が付された。 |
| マクロ加算残高 | 所要準備と貸出促進の計算により定義される加算階層。 | ゼロ金利が付された。 |
| 政策金利残高 | 他の二階層を上回る限界階層。 | NIRP を定義するマイナス金利が付された。 |

2024, 年3月以降、BoJ の枠組みは、懲罰的なマイナス金利の限界階層から、準備預金残高に対する正の金利の床へ移行した。現在の数値を引用する前には、BoJ が公表する正確な階層定義と適用金利を必ず確認する。

## Floor System が機能する理由

floor system は、短期金融市場金利を準備預金付利より上にアンカーする。銀行が余剰資金を公表政策金利で BoJ に預けられるなら、[[money-market/call-market-structure|call market]] でそれを大きく下回る金利で貸し出す経済的理由は限られる。総準備の希少性 / 潤沢性を管理する [[money-market/boj-open-market-operations|open market operations]] と組み合わせることで、床は明確な短期金利コリドーを設定する。

実務上の読み方:

- 実際の [[money-market/call-market-structure|uncollateralized overnight call rate]] は政策金利残高の付利金利に近い水準で取引されるはずである。
- レポ金利 ([[money-market/jgb-repo-market-japan|JGB repo]]) は、担保の希少性により調整されつつ、床の近辺の狭いレンジで取引されるはずである。
- [[money-market/japan-tbill-treasury-discount-bill|TDB]] 利回りは、床から小さな担保 / 希少性プレミアムを差し引いた水準に近づくはずである。
- [[money-market/japan-ncd-negotiable-cd-market|NCD]] と [[money-market/japan-cp-commercial-paper-market|CP]] の利回りは、発行体信用スプレッド分だけ床を上回るはずである。

## Fed IORB および ECB DFR との比較

| 特徴 | BoJ post-2024 | US Fed | ECB |
|---|---|---|---|
| 政策金利名 | 補完当座預金制度を通じて適用される短期政策金利。 | Federal funds target range；床は interest on reserve balances (IORB)。 | 預金ファシリティ金利 (DFR)。 |
| 床となる手段 | BoJ 当座預金の政策金利残高階層への付利。 | Federal Reserve における準備預金残高への付利。 | ECB 預金ファシリティにおける超過保有への付利。 |
| 準備の潤沢性 | 長期にわたる量的緩和のレガシーにより BoJ は潤沢な準備を運営。 | Fed は post-2008 framework の下で潤沢な準備を運営。 | ECB は post-2014 framework の下で潤沢な準備を運営。 |
| 階層構造 | 歴史的に階層型制度を使用。現在の BoJ MPM 決定を確認する。 | 階層なしの単一 IORB 金利。 | NIRP 期に二階層制度を歴史的に適用。枠組みは定期的に改定。 |
| 長期金利管理 | YCC は 2024年3月に終了。長期側は裁量的買入を伴う市場決定へ。 | 長期金利目標なし。バランスシート縮小を使用。 | 長期金利目標なし。APP / PEPP は縮小。 |

構造的な類似は意図的である。三つの中央銀行はいずれも、post-2008 時代の潤沢な準備の後に floor-system 設計へ移行した。

## オペレーションメニューとの隣接

floor system は、能動的なオペレーションと組み合わせて機能する。

- **資金供給オペレーション**: 共通担保資金供給、[[money-market/japan-tbill-treasury-discount-bill|TDB]] 買入、[[money-market/jgb-repo-market-japan|JGB repo]]型オペレーション、[[money-market/japan-cp-commercial-paper-market|CP]] repo。総準備の希少性管理に使われる。
- **資金吸収オペレーション**: 日銀手形の発行、国債売現先オペレーション。必要に応じて余剰準備を吸収する。
- **常設ファシリティ**: 補完貸付制度がコリドーの天井として機能する。
- **フォワードガイダンス**: MPM 声明と展望レポートが金利期待を形成する。

床（預金ファシリティ金利）と天井（貸付ファシリティ金利）の組み合わせにより、運営上のコリドーが形成される。

## 読み方チェックリスト

1. 最新の BoJ MPM 決定文から現在の政策金利水準を特定する。
2. BoJ オペレーションページで補完当座預金制度の現在の階層定義を確認する。
3. [[money-market/call-market-structure|call rate]] を政策金利の床と照合し、波及を確認する。
4. [[money-market/japan-tbill-treasury-discount-bill|TDB]] 利回りを床と比較し、担保 / 希少性シグナルを読む。
5. BoJ の JGB 買入ペースとバランスシート縮小声明を見て、中期的な準備残高の軌道を把握する。
6. 政策金利ラベルではなく、補完当座預金制度の金利を運営上の床として扱う。

## JapanFG での関連性

- メガバンク [[JapanFG/mufg]]、[[JapanFG/smfg]]、[[JapanFG/mizuho-fg]] は BoJ 当座預金ポジションを直接持ち、準備預金残高に床金利を受け取る。
- 信託銀行とカストディ銀行は BoJ に決済残高を保有し、同じく床の対象となる。
- 証券会社 [[JapanFG/mizuho-securities]]、[[JapanFG/mufg-mums]]、[[JapanFG/nomura-hd]] は、レポファイナンスとディーラーのバランスシート価格付けを通じて床と相互作用する。
- [[JapanFG/tokyo-tanshi]]、[[JapanFG/central-tanshi]]、[[JapanFG/ueda-yagi-tanshi]] は、床を基準に価格形成されるコールおよび CP ビジネスを仲介する。

## 境界事例

- **政策金利ラベル vs 床金利**: MPM 声明に公表される政策金利は、補完当座預金制度の階層定義がその金利ラベルと整合する場合に限り、運営上の床となる。両方を確認する。
- **floor system vs corridor system**: BoJ post-2024 は準備が潤沢なため floor system である。corridor system は、潤沢な準備に依存せず能動的に金利帯を管理する必要がある。
- **IOER vs IORB**: US Fed の旧 IOER と現 IORB は名称が異なるが、機能は同等である。
- **NIRP 終了 vs QQE 終了**: NIRP の終了は限界階層金利を変える。QQE 型資産買入の終了は別の決定である。

## 関連項目

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[JapanFG/boj-monetary-policy]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[JapanFG/tokyo-tanshi]]
- [[JapanFG/central-tanshi]]
- [[JapanFG/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## 出典

- Bank of Japan: Monetary Policy Meeting decisions surface.
- Bank of Japan: open market operations and complementary deposit facility pages.
- Bank of Japan: MPM schedule and minutes / Outlook Report.
- Bank of Japan: education pages on market operations and policy guidelines.
- Bank of Japan: Money Market overview.
- Bank of Japan: current-account-balances statistics page.
