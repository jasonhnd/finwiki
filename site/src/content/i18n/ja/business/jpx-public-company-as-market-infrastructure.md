---
source: business/jpx-public-company-as-market-infrastructure
source_hash: 4c135e7a8303c287
lang: ja
status: machine
fidelity: ok
title: "日本取引所グループ (JPX 8697) — 市場インフラとしての上場取引所運営者"
translated_at: 2026-06-02T11:47:37.310Z
---

# 日本取引所グループ (JPX 8697) — 市場インフラとしての上場取引所運営者

## ウィキ上の位置づけ

このエントリは [[business/INDEX|business INDEX]] の下に位置し、上場企業の戦略的ケースである。暗号資産ネイティブの並行例については [[business/brian-armstrong-coinbase-public-company-template|Brian Armstrong Coinbase exchange-as-public-company template]]、インターネットインフラから金融への並行例については [[business/gmo-internet-group|GMO Internet Group]]、より広範な配管のコンテキストについては [[securities/INDEX|securities INDEX]] / [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] と照らし合わせて読むこと。システムそのものとしての JPX については [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] と [[securities/osaka-exchange|Osaka Exchange]] を参照。

## 要約

**日本取引所グループ(JPX、TSE 8697)** は、東京証券取引所(TSE)、大阪取引所(OSE)、東京商品取引所(TOCOM)、および日本の現物株式・デリバティブ・商品市場のための中央清算／保管機関を所有する上場持株会社である。TSE グループと OSE グループの合併により2013 年に設立された JPX は、**それ自体が規制監督の対象となる上場営利企業である重要市場インフラ運営者**の日本における典型的なケースである。

この二重のステータス — 規制監督されるユーティリティでありかつ利益最大化を図る上場エンティティ — はビジネスモデルの中心に緊張を生む。このテンプレートは、上場するあらゆる市場インフラのガバナンスに示唆を与える:利益インセンティブをシステム安定義務とどう整合させるか、営業マージンを配管への再投資と株主還元の間でどう配分するか、規制当局(FSA)が株式を所有せずにプライシングと戦略的方向性にどう影響するか。

比較可能なグローバルケース:ICE(NYSE／先物)、CME Group、Deutsche Börse、Nasdaq Inc.、HKEX、SGX。JPX は同じグローバルコホートに位置するが、明確に日本的な規制および構造的特徴を持つ。

## 1. グループ構造

| レイヤー | エンティティ | 機能 |
|---|---|---|
| **持株会社** | 日本取引所グループ株式会社(JPX, 8697) | 上場持株会社 |
| **現物株式** | 東京証券取引所(TSE) | 株式上場 + 取引 |
| **デリバティブ** | 大阪取引所(OSE) | 株価指数先物／オプション |
| **商品** | 東京商品取引所(TOCOM) | 商品デリバティブ |
| **清算** | 日本証券クリアリング機構(JSCC) | 株式 + デリバティブの中央清算機関 |
| **保管** | (別個の機関 — JASDEC) | 証券保管／決済 |

JPX は4つの運営取引所 + 清算を1つの上場持株会社の下にまとめる。JASDEC は別個だが運用上統合されている。完全な図については [[securities/japan-market-infrastructure-map|Japan market infrastructure map]] を参照。

## 2. 2013 の TSE-OSE 合併 — 戦略的根拠

JPX は2013-01-01に以下の合併を通じて設立された:

- **東京証券取引所グループ**(現物株式、当時は日本株式売買高の約95%超)
- **大阪証券取引所グループ**(デリバティブ — 日経225 先物、かつては一部株式も)

合併の論理:

1. **市場横断の複雑性を終わらせる** — 合併前、OSE は日経先物を上場する一方、TSE はそれらの原資産銘柄の現物株式を上場していた;現物 + デリバティブを1つの運営者で扱うことはグローバルに業界標準である
2. **グローバル取引所統合者と競争するための規模** — ICE, CME, Deutsche Börse, HKEX が統合を進めていた;日本もこれに対応する必要があった
3. **清算統合** — 現物株式とデリバティブにわたる統一清算は担保の断片化を減らす
4. **コスト合理化** — 2つの競合する技術スタック → 1つに
5. **持株会社の上場** — 両合併前グループは既に上場企業だった;合併はよりクリーンな構造で上場企業ステータスを維持した

合併後:デリバティブは完全に OSE に移り、現物株式は TSE に残り、1つの共有技術スタック(現物は Arrowhead、デリバティブは J-GATE)を持つ。

## 3. ビジネスミックス

| 収益ライン | 説明 | 収益のおおよそのシェア |
|---|---|---|
| **取引手数料** | 現物株式、デリバティブ、商品注文の取引単位手数料 | 最大 |
| **上場手数料** | 発行体からの新規 + 年間上場手数料 | 重要 |
| **清算手数料** | JSCC の中央清算収益 | 重要 |
| **情報サービス／データ** | リアルタイム + 遅延の市場データライセンス | 成長中 |
| **その他** | コロケーション、インデックス、技術サービス | より小さい |

上場手数料は安定した年金的収益を提供する;取引手数料は市場のボリュームとともに変動する。データ／情報ラインはデータ駆動の取引が拡大するにつれて成長しており、グローバルな ICE / CME パターンを反映している。

## 4. グローバル上場取引所運営者との比較

| 運営者 | ティッカー | カバーする市場 | 際立った特徴 |
|---|---|---|---|
| **JPX** | TSE 8697 | TSE, OSE, TOCOM, JSCC | 国内フォーカス、FSA 監督、円建て収益 |
| **ICE**(Intercontinental Exchange) | NYSE: ICE | NYSE, 先物, 債券, データ | 住宅ローンデータ + 債券の拡大 |
| **CME Group** | NASDAQ: CME | シカゴ先物(CME, CBOT, NYMEX, COMEX) | 純粋な先物フォーカス、規制上の優位性 |
| **Deutsche Börse** | DB1: XETR | フランクフルト現物 + Eurex デリバティブ + Clearstream | 汎 EU 統合の推進 |
| **Nasdaq Inc.** | NDAQ | Nasdaq 市場 + Nordic Bourse + 市場技術 | 製品としての技術(「Market Technology」セグメント) |
| **HKEX** | HK: 388 | 香港現物 + デリバティブ + LME(商品) | 中国ストックコネクトリンク |
| **SGX** | SGX: S68 | シンガポール現物 + デリバティブ | アジア太平洋デリバティブハブ |
| **LSE Group** | LON: LSEG | ロンドン現物 + Refinitiv(データ) + LCH(清算) | データ駆動(Refinitiv 後 2021) |

JPX は以下によって区別される:

- **国内のみの収益ベース** — 国際的な上場競争はほぼない;クロスボーダー取引高はほぼ捕捉していない
- **FSA 監督のプライシング** — 上場手数料スケジュールと取引手数料構造に対する非公式の規制監督
- **データ／技術への遅い拡大** — LSEG-Refinitiv や Nasdaq-Market-Technology パターンと比べて
- **PBR 1 割れの推進** — JPX 自身が、JPX 自身のバリュエーションとは別に、2023, 年から上場企業向けに注目を集めた「PBR を改善する」イニシアチブを推進した

## 5. 規制当局-ユーティリティ-上場企業の緊張

JPX は上場市場インフラ運営者に固有の緊張のもとで運営される:

| 次元 | 利益最大化の衝動 | システム安定義務 |
|---|---|---|
| 上場手数料 | 収益最大化のために引き上げる | 発行体を引きつけ市場を成長させるために低く保つ |
| 取引手数料 | 収益最大化のために引き上げる | 取引と価格発見を奨励するために低く保つ |
| システムへの設備投資 | マージンのために最小化 | レジリエンス／災害復旧のために大量投資 |
| 障害対応 | 評判を守るために開示を最小化 | 完全な透明性(FSA により義務付け) |
| 株主還元 | 配当／自社株買いを最大化 | 清算機関のデフォルトファンド + 技術投資のために資本を留保 |
| 戦略的提携 | 価値を高める M&A を追求 | 市場参加者間で中立性を維持 |

JPX の手数料スケジュール、システム投資要件、運用レジリエンス基準に対する FSA の影響は、純粋な利益最大化行動を制約する。2020-10 年のシステム障害(現物株式を丸1日閉鎖した Arrowhead の障害)とその後のガバナンス改革は、この緊張を実際に示している。

## 6. 暗号資産ネイティブ取引所への読み替え

| JPX | Coinbase ([[business/brian-armstrong-coinbase-public-company-template|Coinbase template]]) | Binance ([[business/cz-binance-founder-handoff-case|CZ Binance handoff]]) |
|---|---|---|
| 上場企業 | 上場企業 | 非公開 |
| FSA 監督 | SEC + 州レベルの監督 | 複数法域 |
| 規制当局-ユーティリティの緊張 | 規制当局-訴訟当事者の緊張 | 規制当局-執行対象の緊張 |
| 13年超の上場 | 2021 年以降の上場 | 非上場 |
| 国内フォーカスの収益 | 米国フォーカスで国際的に拡大 | グローバル |
| 障害開示義務 | 同じ | 可変 |

テンプレートの教訓:上場取引所運営者の戦略的柔軟性は、純粋なブローカーやアセットマネージャーには当てはまらない形で、規制当局との関係によって制約される。JPX は、取引所運営における「完全にコンプライアントで、規制当局と整合し、上場している」状態がどのようなものかについての有用なベースラインを提供する。

## 7. 戦略的パターン

JPX のプレイブックは以下のように要約できる:

1. **重要市場インフラを規制されたユーティリティとして運営する**
2. **ユーティリティ運営を上場営利持株構造でラップする**
3. **FSA との関係を制約と競争上の堀の両方として使う**(代替取引所参入への事実上の障壁)
4. **運用上の信頼性を維持するために技術インフラに再投資する**
5. **隣接する収益ラインに慎重に拡大する**(データ、インデックス、清算サービス)
6. **上場企業のガバナンス改革を推進する**(PBR>1 イニシアチブ、プライム市場基準)を株主アドボカシーと市場品質の引き上げの両方として

## 8. 反論点

- PTS(私設取引システム)市場 — Japannext, Cboe Japan — は一部の株式取引高を捕捉しているが、米国の ATS / EU の MTF のシェアよりはるかに少ない
- 国内のみの収益ベースは M&A なしには成長を制限する;JPX は LSEG-Refinitiv のような変革的なクロスボーダー買収を行っていない
- 規制当局-ユーティリティの緊張は、純粋な上場ピアが追求できる自社株買い／配当の野心を制約する
- 上場企業ステータスは理論上 ICE / CME / Nasdaq が JPX を買収することを可能にする;実際には、規制上・政治上の障壁がこれを非常に起こりにくくしている
- 一部の批評家は JPX が技術支出に保守的すぎると主張する;他の批評家はシステムレジリエンス投資に行き過ぎたと主張する

## 9. 未解決の問い

- JPX は国際的に拡大する(買収、他の取引所への JV 出資)のか、それとも国内フォーカスのままなのか?
- 暗号通貨／トークン／デジタル資産取引の台頭は JPX の長期的な競争上の堀にどう影響するか? 並行トラックの展開については [[exchanges/INDEX|exchanges INDEX]] を参照
- データ／情報／インデックス収益ラインは、LSEG / Nasdaq のように取引手数料に匹敵するまで成長するのか?
- [[securities/odx-start-stb-secondary-market|ODX-START secondary market for security tokens]] は株式類似商品に対する TSE の独占にどう影響するか?
- PTS の市場シェアは JPX の取引手数料収益を実質的に侵食するほど成長しうるか?

## 関連項目

- [[business/INDEX|business INDEX]]
- [[business/brian-armstrong-coinbase-public-company-template|Brian Armstrong Coinbase template]]
- [[business/cz-binance-founder-handoff-case|CZ Binance founder-handoff case]]
- [[business/gmo-internet-group|GMO Internet Group]]
- [[securities/tokyo-stock-exchange|Tokyo Stock Exchange]]
- [[securities/osaka-exchange|Osaka Exchange]]
- [[securities/japan-market-infrastructure-map|Japan market infrastructure map]]
- [[securities/japan-securities-clearing-corp|Japan Securities Clearing Corp]]
- [[securities/japan-securities-depository-center|Japan Securities Depository Center]]
- [[securities/japan-ipo-listing-disclosure-route|Japan IPO listing / disclosure route]]
- [[securities/odx-start-stb-secondary-market|ODX-START secondary market]]
- [[securities/japan-pts-liquidity-data-guide|Japan PTS liquidity data guide]]
- [[INDEX|FinWiki index]]

## 出典

- JPX Group About: https://www.jpx.co.jp/english/corporate/about-jpx/
- JPX Investor Relations: https://www.jpx.co.jp/english/corporate/investor-relations/
- JPX News: https://www.jpx.co.jp/english/news/
- FSA English portal: https://www.fsa.go.jp/en/
- ICE Investor Relations(ピア参照): https://ir.theice.com/

---

> [!info] 校核状態
> confidence: **likely**。JPX の構造、2013 の合併、ビジネスミックス、規制フレームワークは公的記録である。ラインごとの正確な収益シェアと将来予測的な競争ダイナミクスは通常の不確実性を伴う。
