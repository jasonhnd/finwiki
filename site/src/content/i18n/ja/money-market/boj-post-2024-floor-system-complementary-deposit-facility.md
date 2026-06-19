---
source: money-market/boj-post-2024-floor-system-complementary-deposit-facility
source_hash: 72f03f3f62832028
lang: ja
status: machine
fidelity: ok
title: "日銀 2024 以降のフロアシステムと補完当座預金制度（補完当座預金制度）"
translated_at: 2026-06-19T06:09:18.090Z
---

# 日銀 2024 以降のフロアシステムと補完当座預金制度（補完当座預金制度）

## Wiki route

この項目は [[money-market/INDEX|money-market index]] の下に位置する。同業 / 対比の文脈については [[money-market/boj-open-market-operations|BoJ open market operations]] と、より広いシステム / 規制境界については [[money-market/japan-money-market|Japan money market]] と対比して読むこと。

## TL;DR

2024, 年 3 月、日本銀行はマイナス金利政策（NIRP）とイールドカーブ・コントロール（YCC）を終了し、政策金利が日銀における銀行の当座預金残高の政策金利残高ティアに付される金利として設定される短期金利目標の枠組みへと移行した。これは **フロアシステム** のアプローチであり、構造的に Fed の IORB や ECB の預金ファシリティと類似している。

準備金への付利のレールは補完当座預金制度（補完当座預金制度）であり、歴史的には当座預金残高に階層構造を適用してきた。2024 年 3 月の枠組み移行後、政策金利残高ティアは見出しの短期政策金利を担い、短期マネーマーケットの価格付けはこのフロアの上にアンカーされる。

## 枠組みマップ

| 層 | 2024 年 3 月以前の読み | 2024 年 3 月以降の読み |
|---|---|---|
| 政策金利目標 | NIRP 枠組みの下で短期目標はマイナス 10 ベーシスポイント前後；長期端は YCC の下で管理。| 無担保コールレート（オーバーナイト）がプラスの短期金利目標前後に誘導される。|
| 準備金の階層化 | 三つのティア：基礎残高、マクロ加算残高、政策金利残高で、政策金利残高がマイナス金利を担う。| 準備金付利は補完当座預金制度を通じて適用；現行の公表ティア金利を確認のこと。|
| 長期端の管理 | 10年物 JGB 利回りに対する YCC バンド。| YCC 廃止；長期端は市場で決定されることが許容される。|
| 資産購入 | 大規模な JGB / ETF / J-REIT / CP / 社債の購入プログラムを全速で実施。| JGB 購入ペースは段階的に縮小；ETF / J-REIT の新規購入は終了；社債系プログラムは縮小。|
| 運営思想 | 純粋に量主導で、マイナス金利のフロアと YCC の上限を伴う。| フロアシステムの仕組みを用いた従来型の金利目標枠組み。|

## 補完当座預金制度の仕組み

補完当座預金制度（補完当座預金制度）は、日銀が商業銀行の当座預金残高に付利する法的・運営上のルートである。歴史的な要点：

- 日銀のマーケットオペレーション枠組みの拡張として 2008 年に導入。
- 金融危機時の流動性拡大の際に封じ込めツールとして使用。
- 日銀ネットの当座預金システムを通じて運営。
- 公表される日銀政策委員会の決定を通じて実施。

NIRP および NIRP 後の正常化に伴う政策の階層化の変更後、正確なティアの定義と適用金利は時とともに変化する。現行の金利とティアの定義については、常に現行の日銀金融政策決定会合（MPM）の決定文書と現行のオペレーションページを参照すること。

## 階層化された IOER 構造（参照のための読み）

2024 年以前の NIRP ティア枠組みは、有用な読みのテンプレートを提供する：

| ティア | 概念 | 読み |
|---|---|---|
| 基礎残高 | 過去の準備金額によって定義される参照残高。| プラスの金利を担った。|
| マクロ加算残高 | 準備預金所要額と貸出促進の算術によって定義される加算ティア。| ゼロ金利を担った。|
| 政策金利残高 | 他の二つを上回る限界ティア。| NIRP を定義したマイナス金利を担った。|

2024, 年 3 月以降、日銀の枠組みは懲罰的なマイナス金利の限界ティアから、準備金残高に対するプラス金利のフロアへと移行した。日銀が公表する正確なティアの定義と適用金利は、現行の数値を引用する前に常に参照すべきである。

## なぜフロアシステムは機能するのか

フロアシステムは、短期マネーマーケットレートを準備金に付される金利の上にアンカーする。銀行が余剰現金を公表政策金利で日銀に預けられるのであれば、[[money-market/call-market-structure|call market]] で意味のある低い金利で貸し出す経済的理由は限られる。総準備金の希少性 / 潤沢性を管理する [[money-market/boj-open-market-operations|open market operations]] と組み合わせることで、フロアは明確な短期金利のコリドーを設定する。

実務上の読み：

- 実際の [[money-market/call-market-structure|uncollateralized overnight call rate]] は政策金利残高の金利に近い水準で取引されるはずである。
- レポレート（[[money-market/jgb-repo-market-japan|JGB repo]]）は、担保の希少性によって修正されつつ、フロア周辺の狭いバンドで取引されるはずである。
- [[money-market/japan-tbill-treasury-discount-bill|TDB]] の利回りは、わずかな担保 / 希少性プレミアムを差し引いたフロアに近い水準で取引されるはずである。
- [[money-market/japan-ncd-negotiable-cd-market|NCD]] と [[money-market/japan-cp-commercial-paper-market|CP]] の利回りは、発行体の信用スプレッドの分だけフロアを上回って取引されるはずである。

## Fed IORB および ECB DFR との比較

| 特徴 | 日銀 2024 以降 | 米 Fed | ECB |
|---|---|---|---|
| 政策金利の名称 | 補完当座預金制度を通じて適用される短期政策金利。| フェデラルファンド目標レンジ；フロアは準備金付利（IORB）。| 預金ファシリティ金利（DFR）。|
| フロアの手段 | 日銀当座預金の政策金利残高ティアへの付利。| 連邦準備制度における準備金残高への付利。| ECB 預金ファシリティにおける超過残高への付利。|
| 準備金の潤沢性 | 日銀は長期にわたる量的緩和の遺産により潤沢な準備金を運用。| Fed は 2008 年以降の枠組みの下で潤沢な準備金を運用。| ECB は 2014 年以降の枠組みの下で潤沢な準備金を運用。|
| ティア構造 | 階層システムを歴史的に使用；現行の日銀 MPM 決定を確認のこと。| ティアなしの単一 IORB 金利。| NIRP 期に二層システムを歴史的に適用；枠組みは定期的に改定。|
| 長期端の管理 | YCC は 2024年 3 月に終了；長期端は裁量的購入を伴い市場で決定。| 長期端の利回り目標なし；バランスシートのランオフを使用。| 長期端の目標なし；APP / PEPP は縮小。|

構造的な類似性は意図的なものである：三つの中央銀行はいずれも、2008 年以降の潤沢な準備金の時代の後にフロアシステムの設計へと移行した。

## オペレーションメニューの隣接性

フロアシステムは、能動的なオペレーションと組み合わせて機能する：

- **資金供給オペレーション**：共通担保に対する貸付、[[money-market/japan-tbill-treasury-discount-bill|TDB]] 購入、[[money-market/jgb-repo-market-japan|JGB repo]] 型のオペレーション、[[money-market/japan-cp-commercial-paper-market|CP]] レポ。総準備金の希少性を管理するために使用。
- **資金吸収オペレーション**：日銀手形の発行、買戻条件付きの JGS 売却オペレーション。必要に応じて超過準備金を吸収するために使用。
- **常設ファシリティ**：補完貸付制度（補完貸付制度）がコリドーの上限として機能する。
- **フォワードガイダンス**：MPM 声明と展望レポートが金利の期待を形成する。

フロア（預金ファシリティ金利）と上限（貸付ファシリティ金利）の組み合わせが、運営上のコリドーを形成する。

## 読みのチェックリスト

1. 最新の日銀 MPM 決定文書から現行の政策金利水準を特定する。
2. 日銀のオペレーションページから補完当座預金制度の現行ティア定義を確認する。
3. 政策金利のフロアに対して [[money-market/call-market-structure|call rate]] を読み、トランスミッションをチェックする。
4. [[money-market/japan-tbill-treasury-discount-bill|TDB]] の利回りをフロアと比較し、担保 / 希少性のシグナルを得る。
5. 中期的な準備金の軌道について、日銀の JGB 購入ペースとバランスシートのランオフの声明を注視する。
6. 政策金利のラベルではなく、補完当座預金制度の金利を運営上のフロアとして扱う。

## JapanFG 関連性

- メガバンク [[megabanks/mufg]]、[[megabanks/smfg]]、[[megabanks/mizuho-fg]] は日銀当座預金のポジションを直接持ち、準備金残高にフロアレートを得る。
- 信託銀行とカストディ銀行は日銀に決済残高を保有し、これもフロアの対象となる。
- 証券会社 [[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]]、[[securities-firms/nomura-hd]] は、レポファイナンスとディーラーのバランスシート価格付けを通じてフロアと相互作用する。
- [[financial-regulators/tokyo-tanshi]]、[[financial-regulators/central-tanshi]]、[[financial-regulators/ueda-yagi-tanshi]] は、フロアを基準に価格付けされるコールおよび CP のビジネスを仲介する。

## 境界事例

- **政策金利のラベル vs フロアレート**：MPM 声明で公表される政策金利は、補完当座預金制度のティア定義が金利のラベルと整合する場合にのみ運営上のフロアとなる。両方を確認のこと。
- **フロアシステム vs コリドーシステム**：日銀 2024 以降は、準備金が潤沢であるためフロアシステムである；コリドーシステムは、潤沢な準備金に依拠せずに能動的な金利バンド管理を必要とする。
- **IOER vs IORB**：米 Fed の以前の IOER と現行の IORB の名称は異なるが、機能は同等である。
- **NIRP の終了 vs QQE の終了**：NIRP の終了は限界ティアの金利を変える；QQE 型の資産購入の終了は別個の決定である。

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/japan-money-market]]
- [[money-market/call-market-structure]]
- [[money-market/jgb-repo-market-japan]]
- [[money-market/boj-open-market-operations]]
- [[money-market/japan-cp-commercial-paper-market]]
- [[money-market/japan-ncd-negotiable-cd-market]]
- [[money-market/japan-tbill-treasury-discount-bill]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[financial-regulators/boj-monetary-policy]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[INDEX|FinWiki index]]

## Sources

- 日本銀行：金融政策決定会合の決定サーフェス。
- 日本銀行：公開市場操作および補完当座預金制度のページ。
- 日本銀行：MPM スケジュールと議事要旨 / 展望レポート。
- 日本銀行：マーケットオペレーションと政策ガイドラインに関する教育ページ。
- 日本銀行：マネーマーケット概観。
- 日本銀行：当座預金残高統計のページ。
