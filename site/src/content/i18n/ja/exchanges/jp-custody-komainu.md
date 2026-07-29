---
source: exchanges/jp-custody-komainu
source_hash: efe75a8413537e33
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Komainu — 機関投資家向けデジタル資産カストディ専業"
translated_at: 2026-07-29T11:23:34.000Z
---

# Komainu — 機関投資家向けデジタル資産カストディ専業


## ウィキ上の位置づけ

この項目は [[exchanges/INDEX|exchanges index]] の下位に位置づけられる。隣接領域の文脈は [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]]、より広いシステム境界は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] とあわせて読む。

> Jersey FSC 登録（2019）· UK FCA Crypto 登録（2025）· VARA（Dubai）登録（2023）· **日本拠点なし / 日本 FSA 未登録**

## 1. 法人・株主

- **商号**: Komainu Holdings Limited（英文）/ コマイヌ（カナ通称）
- **設立**: 2018 年（Jersey, Channel Islands）
- **本店所在地**: Jersey（英国王室属領）
- **設立形態**: 野村ホールディングス（Nomura Holdings）・CoinShares・Ledger の三者合弁（Joint Venture）として創業
- **現在の主要株主（公表分）**: 2025年 1 月時点で Blockstream が戦略的投資家として Series B をリード。Laser Digital（野村 digital asset 子会社）は 取締役会参画継続。CoinShares・Ledger は創業時からの出資者。
- **非上場**（公開株式市場への上場情報なし）

## 2. ライセンス・登録状況

以下の表は Komainu の現行法人・規制開示と公式沿革に限定する。FCA 登録は Komainu UK、JFSC 規制は Komainu (Jersey)、VARA ライセンスは Komainu MEA に帰属し、グループ全体に一律適用される免許ではない。^[出典: https://komainu.com/entities/; https://komainu.com/about/.]

| 規制当局 | 種別 | 取得時期 |
|---------|------|---------|
| Jersey Financial Services Commission (JFSC) | Komainu (Jersey) Limited の fund services business 規制 | 2019 年 |
| UK Financial Conduct Authority (FCA) | Komainu UK Limited の MLR 登録（FRN 985974） | 2025 年 |
| Italy OAM (Organismo Agenti e Mediatori) | 公式沿革に掲載される virtual-asset 登録 | 2025 年 |
| VARA (Virtual Asset Regulatory Authority, Dubai) | Komainu MEA FZE の VASP custody ライセンス | 2023 年 |

- **日本 FSA 暗号資産交換業**: 未登録
- **JVCEA 会員**: 非加盟
- 日本国内においては金融庁・財務局への登録なし。日本法人の設立情報も公表なし。

## 3. 取扱 asset（カストディ対象）

公式サイト上で特定銘柄リストは非公表（カストディ専業のため取引所のような銘柄一覧は存在しない）。

- 公式サイトは機関向けのマルチアセット・カストディとステーキングを案内するが、対応銘柄の固定一覧は掲載していない
- custodial ステーキング対応：資産をカストディに保ったままオンチェーン報酬を得るサービスを提供
- Komainu Connect（2023 年~）では取引・担保利用・貸借をカバー
- 2026 年 7 月確認時点で Komainu CORE（collateral-as-a-service）を現行サービスとして掲載。公式ページは提供開始月を明示していない

## 4. 業務範囲

同社の提供サービスはカストディ-first（保管を軸）の 4 本柱：

1. **カストディ（保管）**: MPC（Multi-Party Computation）+ HSM（Hardware Security Module）ウォレット技術を活用した cold カストディ。独立検証可能なオンチェーン分別管理。
2. **Custodial Staking**: 資産をカストディに保ったままオンチェーン報酬（ステーキング）を獲得する機関向けサービス。
3. **Komainu Connect（コラテラル管理）**: カストディ内の資産を担保として取引・借入・貸出に活用できる接続基盤。2023 年開始。OKX 等の主要取引所と提携。
4. **Komainu CORE**: デジタル資産を規制準拠の担保として機能させる Collateral-as-a-Service ソリューション。2026 年 7 月確認時点で公式サイトに掲載されているが、提供開始月は明示されていない。

法定通貨入金チャネル等の リテール向けサービスは非提供（純粋な機関向け infrastructure）。

## 5. 市場ポジション・顧客層

- **ターゲット**: 機関投資家・金融機関・主権国家 / 政府系ファンド
- **公表サービス連携**:
  - **Komainu Connect**: 公式沿革は 2023 年のサービス開始と取引所接続を掲載する。個別顧客名や契約規模は本項で推定しない
- **競合比較**: Anchorage Digital、[[exchanges/jp-custody-fireblocks-japan|Fireblocks]]、BitGo 等の機関向け カストディプロバイダーと競合（[[exchanges/global-institutional-custody-five-pillars|グローバル institutional カストディ 5 本柱]] 参照）。同社の差別化点は Jersey・UK FCA・[[exchanges/uae-vara-licensing-overview|VARA]] の多重規制準拠 + [[securities-firms/nomura-hd|Nomura]] グループとの親和性。
- **口座数・預り AUM**: 非公表

## 6. 沿革・重大事件

以下の沿革は、Komainu の公式 About と現行サービスページが明示する節目だけを収録する。報道のみで裏付けた案件、円換算額、提供開始月が公式資料で確認できない項目は除外した。^[出典: https://komainu.com/about/; https://komainu.com/services/komainu-core/.]

| 時期 | 出来事 |
|------|--------|
| 2018 年 | 野村 HD・CoinShares・Ledger の三者合弁として創業 |
| 2019 年 | Jersey Financial Services Commission（JFSC）登録取得 |
| 2021 年 3 月 | Series A 資金調達（$2,500 万ドル）完了 |
| 2021 年 | MPC 技術をテックスタックに統合、custodial ステーキング開始 |
| 2023 年 | VARA（Dubai）VASP ライセンス取得 |
| 2023 年 | Komainu Connect 開始、OKX と提携 |
| 2025 年 | **Series B $7,500 万ドル** 完了（Blockstream が戦略的投資家として参加） |
| 2025 年 | UK FCA crypto 登録取得、イタリア OAM 登録取得 |
| 2026 年 7 月確認 | **Komainu CORE** を現行サービスとして掲載。公式ページは開始月を明示していない |

- 2026-07-29 に本輪で指定した公式・規制当局資料の範囲では、行政処分・ハック・大規模障害の記録を識別していない。これは不存在を断定するものではない

## 7. 戦略動向（直近 12 ヶ月）

- **Blockstream Series B（2025）**: 公式沿革は $75M の Series B と Blockstream の戦略的参加を掲載する。本項は用途や個別資産への配分を推定しない。
- **規制対象地域の拡張（2025）**: 公式沿革は UK FCA 登録と Italy OAM 登録を掲載する。実際に利用できるサービスは契約法人と適用法域ごとに確認が必要。
- **Komainu CORE**: 2026 年 7 月確認時点で規制準拠の collateral-as-a-service として公式サイトに掲載。開始時期や将来の商品範囲は公表資料の範囲を超えて推定しない。
- **日本展開**: 2026-07-29 に本輪で列明した Komainu 公式法人・規制資料の範囲では、日本法人、日本 FSA 登録、日本向けサービス開始の開示を識別していない。これは不存在を断定するものではなく、野村グループとの関係だけを根拠に日本展開を推定しない。

## 8. 経営陣

| 氏名 | 役職 | 略歴（公表分） |
|------|------|--------------|
| **Paul Frost-Smith** | Co-CEO | JPMorgan・Credit Suisse・Swiss Re 等で 30 年超の国際金融経験。Komainu 参画 2024-05。Cambridge Trinity Hall 法学修士。 |
| **Robert Johnson** | Co-CEO / CTO | MUFG Securities に 18 年、Coremont CTO・Partner 歴任。Komainu 参画 2023-10。London Queen Mary College PhD（Automated Reasoning Systems）。 |
| **Tony Larkin** | CFO | JPMorgan（欧州・アジアトップアナリスト）・Citi・Credit Suisse・BofA ML 歴任。Komainu 参画 2024-06。ICAEW フェロー。 |
| **Sebastian Widmann** | Head of Dubai | 野村 HD Digital Assets VP（デジタル資産スタートアップ投資・Komainu 立上げ支援）出身。Komainu 参画 2021。UCL 卒（DLT 研究）。 |
| **Susan Patterson** | Head of Jersey | 元 JFSC（Jersey 金融サービス委員会）規制当局出身。State Street・Credit Suisse・Brevan Howard・UBS 歴任。Komainu 初期参画（2018-22）後 2023 年に復帰。 |
| **Darren Jordan** | CCO | HSBC・ABN Amro・F&C Asset Management 等 25 年金融キャリア。BitGo にて EMEA 責任者。Komainu 参画 2022。 |

**取締役会 of Directors（公表分）**:
- Adam Back（Blockstream Corporation / CEO）
- Steve Ashley（Laser Digital / Co-CEO）
- PeterPaul Pardi（Blockstream Capital Partners）
- Jez Mohideen（Laser Digital / Co-CEO）
- Paul Frost-Smith（Komainu）
- Nicolas Brand（Blockstream Capital Partners）

## 関連項目

- [[exchanges/jp-exchange-laser-digital-japan]] — 野村グループの digital asset 投資・運用子会社（Komainu と 取締役会 を共有）
- [[exchanges/jp-exchange-crypto-garage]] — 野村 HD が出資する別の日本向けデジタル資産法人
- [[exchanges/jp-custody-ginco]] — 日本国内の 機関投資家向け カストディ比較対象
- [[fintech/japan-financial-regulation]] — 日本金融規制全体
- [[exchanges/global-institutional-custody-five-pillars]] — グローバル機関投資家向け カストディ 5 本柱
- [[exchanges/uae-vara-licensing-overview]] — UAE VARA ライセンス制度（Komainu Dubai 拠点）
- [[exchanges/jp-institutional-custody-three-pillars]] — JP 機関投資家向け カストディ三本柱

## 出典

- [Komainu About Us](https://komainu.com/about/)（取得 2026-05-19）
- [Komainu Services](https://komainu.com/services/)（取得 2026-05-19）
- [Komainu 公式サイト TOP](https://komainu.com/)（取得 2026-05-19）
- [Komainu Entities](https://komainu.com/entities/)（取得 2026-07-29）
- [Komainu CORE](https://komainu.com/services/komainu-core/)（取得 2026-07-29）
- [CoinPost 「Komainu」検索結果](https://coinpost.jp/?s=Komainu)（取得 2026-05-19）— 野村 HD ら設立のカストディアン Komainu シリーズ記事（2020-2026 年）
- [CoinPost — Komainu $75M Series B Blockstream 報道](https://coinpost.jp/p/596xxx)（取得 2026-05-19、記事タイトル「野村 HD ら設立の Komainu、ビットコインで約 116 億円を調達」2025-01-17）
- [CoinPost — Propine 買収報道](https://coinpost.jp/?s=Komainu)（取得 2026-05-19、記事タイトル「野村出資の Komainu、シンガポールのカストディ企業 Propine を買収」2024-10-23）
