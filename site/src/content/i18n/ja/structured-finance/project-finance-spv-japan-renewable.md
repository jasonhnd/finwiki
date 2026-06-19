---
source: structured-finance/project-finance-spv-japan-renewable
source_hash: 0de05c20b39cb9ca
lang: ja
status: machine
fidelity: ok
title: "日本の再生可能エネルギーのプロジェクトファイナンス SPV —— 太陽光、風力、地熱"
translated_at: 2026-06-19T12:43:19.941Z
---

# 日本の再生可能エネルギーのプロジェクトファイナンス SPV —— 太陽光、風力、地熱

## TL;DR

日本の再生可能エネルギー・プロジェクト —— 太陽光（事業用規模 PV）、陸上および洋上風力、地熱、ならびにバイオマス —— は、通常、総合商社のコンソーシアムからのエクイティ、しばしば地方銀行が加わるメガバンク主導のシンジケートからのデット、そして長期の PPA または FIT/FIP 契約のもとでの収益を伴う、限定遡及型の [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV]] 構造を通じてファイナンスされる。2012  年の固定価格買取（FIT）制度は、再生可能エネルギー SPV 市場をアンカーした、10 年にわたる高 IRR の事業用規模太陽光案件を生み出した；2022  年の固定プレミアム（FIP）市場価格プラス・プレミアム制度への移行は、見出しの IRR を低下させたが、構造は無傷のまま保った。洋上風力の第 1 ラウンドの落札（2021）および第 2 ラウンドの落札は、重心を、[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corporation]]、[[financial-conglomerates/mitsui-co|Mitsui & Co.]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corporation]]、およびコンソーシアムのパートナーをエクイティ・スポンサーとする大規模な洋上風力 SPV へとシフトさせた。FIT 時代の太陽光案件を運営フェーズの債券または新たな SPV デットへとリファイナンスすることは、現在、意味のある市場セグメントである。

## Wiki route

このエントリは [[structured-finance/INDEX|structured-finance index]] のもとに、**再生可能エネルギーのプロジェクトファイナンス** ノードとして位置する。政策金融側（JBIC、NEXI、JOGMEC）については [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]] と、クロスボーダーの資源プロジェクトのコンテキストについては [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]] と併せて読むこと。システムのフレーム: 法的構造については [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、SPV デットが格付けされる場合の格付け処理については [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]、そしてより広範なインフラ資産ファイナンスのコンテキストについては [[real-estate-finance/INDEX|real-estate-finance index]]。

## 1. FIT 時代（2012–2022）—— コンテキスト

[[policy-finance/INDEX|METI]] によって 2012  年 7 月に導入された固定価格買取（FIT）制度（福島後のエネルギー政策のシフト）は、以下を保証した:
- 再生可能エネルギー電力の固定買取価格（¥/kWh）
- 長期の買取義務（事業用規模 PV では通常 20 年）
- 送電事業者による義務的な買取

事業用規模太陽光に特に関して:
- 当初の 2012  年の買取価格は ¥40/kWh（メガソーラー）—— 国際的な基準では並外れて高い
- 買取価格はコストが低下するにつれて各年度ごとに段階的に引き下げられた
- 2012–2015  年のヴィンテージの認定は、最も高い買取価格を固定し、最大のエクイティ IRR を生み出した

FIT 制度は、日本の太陽光に膨大な資本を引き寄せた —— 国際的なデベロッパー（そのうちのいくつかは後に撤退した）、日本の商社、IPP の専門会社、および機関のインフラ投資家である。2010 年代後半までに、日本は世界第 3 位の太陽光市場となっていた。

## 2. 典型的な FIT 時代の事業用規模太陽光 SPV 構造

```
Sponsors (sogo shosha + IPP partner)
        |
        | equity (~30%)
        v
+---------------------------------+
|       Project Co (SPV)          |
|  - Holds PV plant assets        |
|  - Holds 20-year FIT contract   |
|  - Limited recourse to sponsor  |
+--+----------+----------+--------+
   |          |          |
Senior     Sub-       Mezzanine
debt       senior     (sometimes)
   |          |          |
   v          v          v
+--+--+   +---+----+   +-+-----+
|Mega-|   |Regional|   |Insurer|
|bank |   | banks  |   |/ fund |
|lead |   | club   |   |       |
+-----+   +--------+   +-------+
```

典型的な条件（FIT 時代、事業用規模、10–50MW）:
- **テナー**: 18–20 年（FIT のテナーにマージン・バッファーを合わせる）
- **シニア LTV**: プロジェクト・コストの 65–80%
- **DSCR 目標**: ベースケースで 1.20x–1.40x、ダウンサイドで 1.10x
- **スポンサーのエクイティ IRR**: 8–15%（最も高いヴィンテージは上端に達した）
- **リード・アレンジャー**: 通常 [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]]、または [[financial-regulators/dbj|Development Bank of Japan]]
- **参加者**: 地方銀行（特にプラントが所在する県の地方銀行）
- **エクイティ・スポンサー**: 総合商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corp]]）、IPP の専門会社、インフラ・ファンド、および（時折）SPV ファンド構造における LP としての機関投資家のミックス

## 3. 陸上風力 —— 構造

陸上風力 SPV は、より短いテナー（FIT 風力買取価格に合わせた 15–18 年）とより高い CAPEX 強度を伴って、類似の構造に従った。陸上風力の FIT の取り込みは、以下の理由で太陽光よりも遅かった:
- 日本における高品質な風力資源サイトの限定性
- 環境影響評価のタイムラインがしばしば FIT 適格性のウィンドウを超過した
- 地域コミュニティ / 土地利用の反対が許認可を遅らせた

その結果、FIT 買取価格が示唆したよりも小さい風力プロジェクト・パイプラインとなった。

## 4. 洋上風力 —— 新たな重心

海洋再生可能エネルギー資源を利用する発電設備の整備に係る海域の利用の促進に関する法律への 2018  年の改正に続いて、日本は一連の **洋上風力の第 1 ラウンドのオークション**（落札 2021）を立ち上げた:

| Round-1 award | Site | Sponsor consortium (illustrative) |
|---|---|---|
| Akita (Noshiro and Mitane) | Akita Prefecture | Multi-party consortium with sōgō shōsha and IPP |
| Choshi | Chiba Prefecture | Multi-party consortium |
| Yurihonjo | Akita Prefecture | Multi-party consortium |

第 2 ラウンドおよび後続のラウンドはパイプラインを拡大した。洋上風力 SPV の主要な特徴:
- **プロジェクト・コスト** はプロジェクトごとに数千億円で計測される
- **テナー**: 20–25 年
- **PPA / FIP** 構造（FIT 後）
- **スポンサー・コンソーシアム** は通常、総合商社、日本の電力会社、およびグローバルな洋上風力デベロッパー（Ørsted スタイルの国際パートナー）を含む
- **リード・レンダー** には [[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]]、[[financial-regulators/dbj|DBJ]]、および（輸出信用支援のタービン調達については）[[financial-regulators/jbic|JBIC]] / [[policy-finance/nexi|NEXI]] が含まれる
- **保険**: 海上建設リスク、天候リスク、サプライチェーン・リスク

洋上風力 SPV は、事業用規模太陽光 SPV よりも実質的に複雑である —— より高い CAPEX、より長い建設、より多くのカウンターパーティー、より多くの天候リスク。

## 5. 地熱 —— 小規模だが戦略的に支援されている

地熱プロジェクトは数では小規模だが、ベースロードの再生可能エネルギー資源として政治的に支援されている。典型的な構造:
- **エクイティ・スポンサー**: 電力会社（例: 九州電力、北海道電力）、JOGMEC が支援するデベロッパー、総合商社
- **デット**: メガバンク・シンジケート + DBJ + 地方銀行
- **探査リスク**: JOGMEC のエクイティ / 保証の参加によって著しく緩和される
- **テナー**: 20+ 年
- **規模**: プロジェクトごとに通常 10–30 MW

地熱の探査リスク・プロファイルは、案件構造において太陽光よりも上流の石油・ガスに近いものとする。

## 6. 2022  年の FIT → FIP 移行

2022,  年 4 月に発効し、日本は新しい事業用規模プロジェクトを FIT（固定買取価格）から **FIP（固定プレミアム）** へと移行させた:
- 発電事業者は卸売市場価格で売却する
- FIP 参照価格へとブリッジするためにその上にプレミアムを受け取る
- マーチャント価格リスクを負う（プレミアムを部分的なオフセットとして）

SPV ファイナンスにとって、これは以下を意味する:
- キャッシュフローの確実性が FIT と比較して低下する
- レンダーはより保守的な DSCR を適用し、ヘッジ（事業会社のオフテイカーとの PPA、市場ヘッジ）を要求する
- FIP のもとでの新しいプロジェクトの IRR は、通常、FIT 時代のヴィンテージよりも低い
- 日本の主要な事業会社（ソニー、アマゾン、マイクロソフト、アップルのサプライヤー）との事業会社 PPA は、意味のある需要源となった

## 7. リファイナンス・サイクル

FIT 時代の太陽光案件は現在（2020 年代半ば）、そのリファイナンスのウィンドウに入りつつある:
- 当初の建設デットは中盤である
- 運営のトラックレコードは、よりタイトなスプレッドおよびより長い実効テナーでのリファイナンスを可能にする
- 一部のスポンサーは、機関投資家向けのプレースメントのためにプロジェクト・ボンド形式へとリファイナンスする
- 他のスポンサーは、マージンのステップダウンおよび更新されたコベナンツ・パッケージを伴って銀行デットを延長する

DSCR が許す場合、エクイティの再レバレッジ（キャッシュアウト・リファイナンスを介してスポンサーに資本を返還すること）も特徴である。

## 8. 投資家およびエクイティ IRR のダイナミクス

| Vintage | FIT tariff | Equity IRR range (estimated) |
|---|---|---|
| 2012–2013 (high-tariff utility solar) | ¥36–40/kWh | 12–18% |
| 2014–2016 (step-down) | ¥27–32/kWh | 9–13% |
| 2017–2019 (further step-down + auction) | ¥18–24/kWh | 6–9% |
| 2020–2022 (final FIT) | ¥10–15/kWh range | 5–7% |
| Post-FIP (2022+) | Market + premium | 5–8% (depends on PPA / hedge) |

「IRR 圧縮」のカーブは、FIT 時代がこれほど集中した資本展開のウィンドウであった理由の 1 つである。

## 9. 反論

- **「FIT 買取価格は寛大すぎた」** —— 2012  年の買取価格の批評家は、価格が過剰に設計され、初期のヴィンテージにおいて電気料金支払者からスポンサー（特に外国のデベロッパー）へと過剰な価値を移転したと主張する
- **「外国デベロッパーの撤退」** —— 一部の初期 FIT 時代の外国デベロッパーは、FIT 固定後にプロジェクトを売却した；セカンダリー市場での売却は、運営スポンサーに残りえた価値を捕捉した
- **「洋上風力第 1 ラウンドの価格設定の論争」** —— 最初のラウンドの落札は、入札方法論および特定のコンソーシアムの優位性についての論争を促した；後続のラウンドはスコアリングを調整した
- **「グリッドの制約」** —— PPA / FIP のキャッシュフローの可視性があっても、日本北部の送電制約はプロジェクトのスケーリングを制限する；SPV の構造化は出力抑制リスクを考慮しなければならない
- **「FIP はヘッジ・インフラを要求する」** —— 日本の事業会社 PPA 市場はまだ発展途上である；SPV のレンダーは、FIT 時代のシンプルさと比較してコストを増加させるヘッジ・アレンジメントを要求するかもしれない

## 10. 未解決の問い

- 洋上風力の次のヴィンテージの落札、およびスポンサーの集中が変化するかどうか
- 日本の銀行が、他のポートフォリオからの資本圧力のもとで再生可能エネルギー・プロジェクトファイナンスの貸出意欲を低下させるかどうか
- リファイナンス・サイクルにおけるプロジェクト・ボンドの買い手としての [[regional-banks/japan-post-bank|Japan Post Bank]] および生命保険会社の役割
- METI / GX 政策がグリッド規模のバッテリー・ストレージおよび水素を強調するにつれて、[[policy-finance/japan-project-finance-stack-diagram|policy-finance stack]] がどのように適応するか
- インフラ J-REIT または YieldCo が、運営中の再生可能エネルギー SPV に対する公開市場のエグジットを提供するかどうか
- [[financial-regulators/boj|BOJ]] の金利正常化のもとでのプロジェクトファイナンス・ローンの取扱い —— リファイナンス・コストのダイナミクス

## Related

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[real-estate-finance/INDEX|real-estate-finance index]]
- [[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]
- [[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]]
- [[finance/INDEX|finance index]]
- [[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]] · [[financial-conglomerates/mitsui-co|Mitsui & Co.]] · [[financial-conglomerates/sumitomo-corp|Sumitomo Corp]]
- [[megabanks/mufg|MUFG]] · [[megabanks/smfg|SMFG]] · [[megabanks/mizuho-fg|Mizuho FG]]
- [[financial-regulators/dbj|DBJ]] · [[financial-regulators/jbic|JBIC]] · [[financial-regulators/japan-exchange-group|JPX]]

## Sources

- METI FIT / FIP scheme disclosures — https://www.meti.go.jp/english/
- JBIC project finance disclosures — https://www.jbic.go.jp/en/
- DBJ disclosures — https://www.dbj.jp/en/
- Megabank IR (project-finance loan disclosures)
- Sogo shosha IR — renewable equity disclosures (Mitsubishi Corp, Mitsui & Co, Sumitomo Corp)

---

> [!info] 校核状态
> confidence: **likely**。FIT 制度の買取価格およびステップダウンの履歴は公開の METI データである。SPV 構造化の慣行および IRR の範囲は、単一案件の精度ではなく、業界標準の議論レベルの記述である。洋上風力第 1 ラウンドの落札者は公開されている。具体的な取引レベルの開示は抽象化されている。
