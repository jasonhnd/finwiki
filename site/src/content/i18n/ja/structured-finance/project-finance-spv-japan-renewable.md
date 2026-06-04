---
source: structured-finance/project-finance-spv-japan-renewable
source_hash: 82d60f4a5b13d9ec
lang: ja
status: machine
fidelity: ok
title: "日本の再生可能エネルギー向けプロジェクトファイナンスSPV: 太陽光、風力、地熱"
translated_at: 2026-06-03T00:53:08.262Z
---
# 日本の再生可能エネルギー向けプロジェクトファイナンスSPV: 太陽光、風力、地熱

## 要約

日本の再生可能エネルギープロジェクト、すなわち太陽光（ユーティリティ規模PV）、陸上・洋上風力、地熱、バイオマスは、通常、限定責任・リミテッドリコースの[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV]]構造で資金調達される。エクイティは総合商社コンソーシアムが拠出し、デットはメガバンク主導のシンジケートが担い、地域銀行が参加することも多い。収益は長期PPAまたはFIT／FIP契約に基づく。2012 のFeed-in Tariff（FIT）制度は、高IRRのユーティリティ規模太陽光案件を10年にわたり生み出し、再エネSPV市場の土台となった。2022 のFeed-in Premium（FIP）という市場価格プラスプレミアム制度への移行により、表面IRRは低下したが、構造自体は維持された。洋上風力のラウンド1 採択（2021）とラウンド2 採択により、重心は[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corporation]]、[[financial-conglomerates/mitsui-co|Mitsui & Co.]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corporation]]およびコンソーシアム・パートナーをエクイティスポンサーとする大規模洋上風力SPVへ移っている。FIT期太陽光案件を、運用期債券または新たなSPVデットへリファイナンスする市場も、今では重要なセグメントとなっている。

## ウィキ上の位置づけ

この項目は、[[structured-finance/INDEX|structured-finance index]]配下の**再生可能エネルギー・プロジェクトファイナンス**ノードである。政策金融側（JBIC、NEXI、JOGMEC）は[[policy-finance/japan-project-finance-stack-diagram|Japan project finance stack]]、クロスボーダー資源プロジェクト文脈は[[policy-finance/jbic-overseas-investment-underwriting-process|JBIC overseas-investment underwriting]]とあわせて読む。システム上の枠組みは、法的構造の[[structured-finance/spv-tk-gk-vehicle-japan-tax|TK / GK SPV vehicle]]、SPVデットに格付が付く場合の格付取扱いの[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]、より広いインフラ資産金融文脈の[[real-estate-finance/INDEX|real-estate-finance index]]を参照する。

## 1. FIT期（2012–2022）の文脈

[[policy-finance/INDEX|METI]]により2012 年7月に導入されたFeed-in Tariff（FIT）制度は、福島後のエネルギー政策転換を背景に、次を保証した。
- 再生可能電力に対する固定買取価格（¥/kWh）
- 長期の買取義務（ユーティリティ規模PVでは通常20 年）
- 送配電事業者による義務的オフテイク

ユーティリティ規模太陽光については、具体的に次の特徴があった。
- 初期2012 の買取価格は¥40/kWh（メガソーラー）で、国際基準から見て非常に高かった。
- コスト低下に合わせて、買取価格は年度ごとに引き下げられた。
- 2012–2015 ビンテージの認定は最高水準の買取価格を固定し、最大級のエクイティIRRを生んだ。

FIT制度は、日本の太陽光に大量の資本を呼び込んだ。国際開発業者（一部は後に撤退）、日本の商社、IPP専門会社、機関投資家系インフラ投資家が参入した。2010年代後半までに、日本は世界第3位の太陽光市場となっていた。

## 2. FIT期ユーティリティ規模太陽光SPVの典型構造

```
スポンサー（総合商社 + IPPパートナー）
        |
        | エクイティ（約30%）
        v
+---------------------------------+
|       プロジェクト会社（SPV）    |
|  - PV発電所資産を保有           |
|  - 20年FIT契約を保有          |
|  - スポンサーへのリコースは限定 |
+--+----------+----------+--------+
   |          |          |
シニア     劣後       メザニン
デット     シニア     （時々）
   |          |          |
   v          v          v
+--+--+   +---+----+   +-+-----+
|メガ |   |地域   |   |保険会社|
|バンク|   |銀行   |   |/基金   |
|主導 |   |クラブ |   |        |
+-----+   +--------+   +-------+
```

典型条件（FIT期、ユーティリティ規模、10–50MW）:
- **テナー**: 18–20 年（FIT期間にマージン・バッファを合わせる）
- **シニアLTV**: プロジェクトコストの65–80%
- **DSCR目標**: ベースケース1.20x–1.40x、ダウンサイド1.10x
- **スポンサー・エクイティIRR**: 8–15%（最高ビンテージでは上限側に到達）
- **主幹事アレンジャー**: 通常[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]]、または[[financial-regulators/dbj|Development Bank of Japan]]
- **参加行**: 地域銀行（特に発電所所在地の都道府県の銀行）
- **エクイティスポンサー**: 総合商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui]]、[[financial-conglomerates/sumitomo-corp|Sumitomo Corp]]）、IPP専門会社、インフラファンド、場合によりSPVファンドへのLPとしての機関投資家の組み合わせ

## 3. 陸上風力: 構造

陸上風力SPVも似た構造を採ったが、FIT風力買取期間に合わせてテナーは短く（15–18 年）、CAPEX集約度は高かった。陸上風力のFIT採用は太陽光より遅かった。理由は次の通りである。
- 日本では良質な風況サイトが限られる。
- 環境影響評価のタイムラインがFIT適格期間を超えることが多かった。
- 地域コミュニティ／土地利用の反対が許認可を遅らせた。

結果として、風力プロジェクト・パイプラインは、FIT買取価格が示唆した規模より小さくなった。

## 4. 洋上風力: 新たな重心

2018 の海洋再生可能エネルギー発電設備整備促進法改正後、日本は**洋上風力ラウンド1 入札**（2021採択）を開始した。

| ラウンド1 採択 | 海域 | スポンサー・コンソーシアム（例示） |
|---|---|---|
| 秋田（能代・三種） | 秋田県 | 総合商社とIPPを含む複数当事者コンソーシアム |
| 銚子 | 千葉県 | 複数当事者コンソーシアム |
| 由利本荘 | 秋田県 | 複数当事者コンソーシアム |

ラウンド2 以降により、パイプラインは拡大している。洋上風力SPVの主な特徴は次の通りである。
- **プロジェクトコスト**は1案件あたり数千億円規模。
- **テナー**: 20–25 年。
- **PPA／FIP**構造（FIT後）。
- **スポンサー・コンソーシアム**は通常、総合商社、日本の電力会社、グローバル洋上風力開発業者（Ørsted型の国際パートナー）を含む。
- **主幹事貸し手**には[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMBC]]、[[megabanks/mizuho-fg|Mizuho]]、[[financial-regulators/dbj|DBJ]]、および輸出信用支援付きタービン調達では[[financial-regulators/jbic|JBIC]] / [[policy-finance/nexi|NEXI]]が含まれる。
- **保険**: 海上建設リスク、天候リスク、サプライチェーンリスク。

洋上風力SPVは、ユーティリティ規模太陽光SPVより大幅に複雑である。CAPEXが大きく、建設期間が長く、相手方が多く、天候リスクも大きい。

## 5. 地熱: 小さいが戦略的に支援される

地熱プロジェクトの件数は少ないが、ベースロード再生可能資源として政治的に支援されている。典型構造は次の通りである。
- **エクイティスポンサー**: 電力会社（例: Kyushu Electric、Hokkaido Electric）、JOGMEC支援を受ける開発業者、総合商社。
- **デット**: メガバンク・シンジケート + DBJ + 地域銀行。
- **探鉱リスク**: JOGMECのエクイティ／保証参加によって大きく緩和される。
- **テナー**: 20年以上。
- **規模**: 通常10–30 MW程度。

地熱の探鉱リスク特性は、案件構造上、太陽光よりも上流石油・ガスに近い。

## 6. 2022 FITからFIPへの移行

2022, 年4月から、日本は新規ユーティリティ規模プロジェクトをFIT（固定買取価格）から**FIP（Feed-in Premium）**へ移行した。
- 発電事業者は卸電力市場価格で売電する。
- FIP参照価格との差を埋めるプレミアムを受け取る。
- プレミアムが一部相殺するものの、マーチャント価格リスクを負う。

SPVファイナンスにとっての意味は次の通りである。
- FITと比べてキャッシュフローの確実性が低下する。
- 貸し手はより保守的なDSCRを適用し、ヘッジ（企業オフテイカーとのPPA、市場ヘッジ）を求める。
- FIP下の新規プロジェクトのIRRは、FIT期ビンテージより一般に低い。
- 主要な日本企業（Sony、Amazon、Microsoft、Appleサプライヤー）とのコーポレートPPAが、意味のある需要源となっている。

## 7. リファイナンス・サイクル

FIT期太陽光案件は現在（2020年代半ば）、リファイナンス時期に入っている。
- 当初建設デットが中間期に入っている。
- 運用実績により、よりタイトなスプレッドと長い実効テナーでのリファイナンスが可能になる。
- 一部スポンサーは、機関投資家向けにプロジェクトボンド形式へリファイナンスする。
- 他のスポンサーは、マージン・ステップダウンと更新されたコベナンツを伴って銀行デットを延長する。

DSCRが許す場合、エクイティの再レバレッジ（キャッシュアウト・リファイナンスによるスポンサーへの資本返還）も特徴となる。

## 8. 投資家とエクイティIRRの動態

| ビンテージ | FIT買取価格 | エクイティIRRレンジ（推定） |
|---|---|---|
| 2012–2013 （高買取価格ユーティリティ太陽光） | ¥36–40/kWh | 12–18% |
| 2014–2016 （段階的引下げ） | ¥27–32/kWh | 9–13% |
| 2017–2019 （さらなる引下げ + 入札） | ¥18–24/kWh | 6–9% |
| 2020–2022 （最終FIT） | ¥10–15/kWhレンジ | 5–7% |
| FIP後（2022以降） | 市場価格 + プレミアム | 5–8%（PPA／ヘッジに依存） |

この「IRR圧縮」カーブは、FIT期がこれほど集中的な資本展開の窓だった理由の一つである。

## 9. 反論・留意点

- **「FIT買取価格は寛大すぎた」**。2012 の買取価格に対する批判は、価格が過剰設計され、特に初期ビンテージで電気料金負担者からスポンサー（とくに外国開発業者）へ過大な価値移転を生んだというもの。
- **「外国開発業者の撤退」**。FIT期初期の外国開発業者の一部は、FIT固定後にプロジェクトを売却した。セカンダリー市場での売却により、運用スポンサーに残り得た価値を取り込んだ。
- **「洋上風力ラウンド1 の価格論争」**。最初の採択ラウンドは、入札手法と特定コンソーシアムの優位性をめぐり論争を招いた。後続ラウンドでは採点方法が調整された。
- **「系統制約」**。PPA／FIPによるキャッシュフロー可視性があっても、北日本の送電制約はプロジェクト拡大を制限する。SPV構造は出力抑制リスクを考慮しなければならない。
- **「FIPはヘッジ基盤を必要とする」**。日本のコーポレートPPA市場はなお発展途上である。SPV貸し手はヘッジ契約を要求することがあり、それはFIT期の単純さと比べてコストを増やす。

## 10. 未解決の論点

- 次の洋上風力採択ビンテージと、スポンサー集中が変化するかどうか。
- 日本の銀行が、他ポートフォリオからの資本圧力の下で再エネ・プロジェクトファイナンスの融資姿勢を弱めるかどうか。
- リファイナンス・サイクルにおけるプロジェクトボンド買い手としての[[regional-banks/japan-post-bank|Japan Post Bank]]と生命保険会社の役割。
- METI／GX政策が系統用大型蓄電池と水素を重視する中で、[[policy-finance/japan-project-finance-stack-diagram|policy-finance stack]]がどう適応するか。
- インフラJ-REITまたはYieldCoが、運用中再エネSPVの公開市場出口を提供するかどうか。
- [[financial-regulators/boj|BOJ]]の金利正常化下におけるプロジェクトファイナンスローンの取扱い、すなわちリファイナンスコストの動態。

## 関連項目

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

## 出典

- METI FIT / FIP scheme disclosures — https://www.meti.go.jp/english/
- JBIC project finance disclosures — https://www.jbic.go.jp/en/
- DBJ disclosures — https://www.dbj.jp/en/
- Megabank IR (project-finance loan disclosures)
- Sogo shosha IR — renewable equity disclosures (Mitsubishi Corp, Mitsui & Co, Sumitomo Corp)

---

> [!info] 校核状態
> confidence: **likely**. FIT制度の買取価格と段階的引下げの歴史はMETIの公開データである。SPV構造の慣行とIRRレンジは、単一案件の精密値ではなく、業界標準の議論レベルの記述である。洋上風力ラウンド1 の落札者は公開されている。個別取引レベルの開示は抽象化している。
