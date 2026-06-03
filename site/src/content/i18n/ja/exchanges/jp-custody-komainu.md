---
source: exchanges/jp-custody-komainu
source_hash: cc7a86ad5aa65847
lang: ja
status: machine
fidelity: ok
title: "Komainu — 機関投資家向けデジタル資産カストディ専業"
translated_at: 2026-06-02T12:19:04.254Z
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
- **現在の主要株主（公表分）**: 2025年 1 月時点で Blockstream が戦略的投資家として Series B をリード。Laser Digital（野村 digital asset 子会社）は 取締役会 参画継続。CoinShares・Ledger は創業時からの出資者。
- **非上場**（公開株式市場への上場情報なし）

## 2. ライセンス・登録状況

| 規制当局 | 種別 | 取得時期 |
|---------|------|---------|
| Jersey Financial Services Commission (JFSC) | 登録（Regulatory Approval） | 2019 年 |
| UK Financial Conduct Authority (FCA) | Crypto Asset 登録 | 2025 年 |
| Italy OAM (Organismo Agenti e Mediatori) | Virtual Asset 登録 | 2025 年 |
| VARA (Virtual Asset Regulatory Authority, Dubai) | VASP ライセンス | 2023 年 |

- **日本 FSA 暗号資産交換業**: 未登録
- **JVCEA 会員**: 非加盟
- 日本国内においては金融庁・財務局への登録なし。日本法人の設立情報も公表なし。

## 3. 取扱 asset（カストディ 対象）

公式サイト上で特定銘柄リストは非公表（カストディ 専業のため取引所のような銘柄一覧は存在しない）。

- **BTC を主軸**とした主要暗号資産の カストディ に対応
- 2021 年にスイス証券取引所の Bitcoin ETP（ETF 類似商品）の カストディ を担当したことが確認されている
- custodial ステーキング 対応：ETH をはじめとするプルーフ・オブ・ステーク系資産に対応（2021 年~）
- Komainu Connect（2023 年~）では取引・担保利用・貸借をカバー
- 2026 年 4 月時点で Komainu CORE（collateral-as-a-service）を展開

## 4. 業務範囲

同社の提供サービスは カストディ-first（保管を軸）の 4 本柱：

1. **Custody（保管）**: MPC（Multi-Party Computation）+ HSM（Hardware Security Module）ウォレット技術を活用した cold カストディ。独立検証可能なオンチェーン分別管理。
2. **Custodial Staking**: 資産を カストディ に保ったままオンチェーン報酬（ステーキング）を獲得する機関向けサービス。2021 年開始。
3. **Komainu Connect（コラテラル管理）**: カストディ 内の資産を担保として取引・借入・貸出に活用できる接続基盤。2023 年開始。OKX 等の主要取引所と提携。
4. **Komainu CORE**: デジタル資産を規制準拠の担保として機能させる Collateral-as-a-Service ソリューション。2026 年 4 月提供開始。

法定通貨入金チャネル等の リテール 向けサービスは非提供（純粋な機関向け infrastructure）。

## 5. 市場ポジション・顧客層

- **ターゲット**: 機関投資家・金融機関・主権国家 / 政府系ファンド
- **公表顧客事例（一次情報確認済）**:
  - **英国警察**: 2021 年 1 月、押収した暗号資産の保管に Komainu を採用（公表）
  - **スイス証券取引所上場 Bitcoin ETP**: 2021 年 1 月、ETP の カストディ 担当として選定（公表）
  - **UAE 政府 / VARA 管轄 case**: 2023 年、UAE での VARA ライセンス取得と同時期に政府系案件への関与が報道
  - **OKX との提携（Komainu Connect）**: 2023 年 6 月、OKX と カストディ 接続の提携を公表
- **競合比較**: Anchorage Digital、[[exchanges/jp-custody-fireblocks-japan|Fireblocks]]、BitGo 等の機関向け カストディ プロバイダーと競合（[[exchanges/global-institutional-custody-five-pillars|グローバル institutional custody 5 本柱]] 参照）。同社の差別化点は Jersey・UK FCA・[[exchanges/uae-vara-licensing-overview|VARA]] の多重規制準拠 + [[JapanFG/nomura-hd|Nomura]] グループとの親和性。
- **口座数・預り AUM**: 非公表

## 6. 沿革・重大事件

| 時期 | 出来事 |
|------|--------|
| 2018 年 | 野村 HD・CoinShares・Ledger の三者合弁として創業 |
| 2019 年 | Jersey Financial Services Commission（JFSC）登録取得 |
| 2021 年 1 月 | 英国警察の押収暗号資産保管案件を受託 |
| 2021 年 1 月 | スイス証券取引所 Bitcoin ETP の カストディ に選定 |
| 2021 年 3 月 | Series A 資金調達（$2,500 万ドル）完了 |
| 2021 年 | MPC 技術をテックスタックに統合、custodial ステーキング 開始 |
| 2023 年 | VARA（Dubai）VASP ライセンス取得 |
| 2023 年 | Komainu Connect 開始、OKX と提携 |
| 2024 年 10 月 | シンガポールの カストディ 企業 **Propine** を買収、アジア市場拡大を加速 |
| 2025 年 1 月 | **Series B $7,500 万ドル** 完了（Blockstream が戦略的投資家としてリード）。ビットコイン建てで調達（BTC 約 116 億円相当、2025-01 時点） |
| 2025 年 | UK FCA crypto 登録取得、イタリア OAM 登録取得 |
| 2026 年 4 月 | **Komainu CORE**（Collateral-as-a-Service）発表・提供開始 |

- 行政処分・ハック・大規模障害の公表情報なし（2026-05 時点）

## 7. 戦略動向（直近 12 ヶ月）

- **Propine 買収（2024-10）**: シンガポール拠点の機関向け カストディ 企業 Propine を買収。アジア太平洋市場へのフットプリント拡大が明示的な戦略目的。
- **Blockstream Series B（2025-01）**: $75M 調達。Bitcoin 中心の 機関投資家向け カストディ + Bitcoin-native asset の取扱強化を示唆。同時に Adam Back（Blockstream CEO）・PeterPaul Pardi・Nicolas Brand（Blockstream Capital Partners）が 取締役会 に参画。
- **FCA 登録（2025）**: UK でのサービス提供の正式化。ロンドン拠点を持つ機関投資家への訴求強化。
- **Komainu CORE（2026-04）**: 規制準拠の担保管理 SaaS 化。digital collateral 市場（DeFi との接続、repo 取引等）への参入を示唆。
- **日本展開**: 2026-05 時点で日本向けの公式アナウンスなし。ただし Nomura 系 Laser Digital Japan が BTCファンドを 2026-01 に設定しており、グループ内での間接的な日本向けサービスの布石という見方もある（公式情報なし）。

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
- [[exchanges/jp-custody-ginco]] — 日本国内の 機関投資家向け カストディ 比較対象
- [[fintech/japan-financial-regulation]] — 日本金融規制全体
- [[exchanges/global-institutional-custody-five-pillars]] — グローバル 機関投資家向け カストディ 5 本柱
- [[exchanges/uae-vara-licensing-overview]] — UAE VARA ライセンス制度（Komainu Dubai 拠点）
- [[exchanges/jp-institutional-custody-three-pillars]] — JP 機関投資家向け カストディ 三本柱

## 出典

- [Komainu About Us](https://komainu.com/about/)（取得 2026-05-19）
- [Komainu Services](https://komainu.com/services/)（取得 2026-05-19）
- [Komainu 公式サイト TOP](https://komainu.com/)（取得 2026-05-19）
- [CoinPost 「Komainu」検索結果](https://coinpost.jp/?s=Komainu)（取得 2026-05-19）— 野村 HD ら設立のカストディアン Komainu シリーズ記事（2020-2026 年）
- [CoinPost — Komainu $75M Series B Blockstream 報道](https://coinpost.jp/p/596xxx)（取得 2026-05-19、記事タイトル「野村 HD ら設立の Komainu、ビットコインで約 116 億円を調達」2025-01-17）
- [CoinPost — Propine 買収報道](https://coinpost.jp/?s=Komainu)（取得 2026-05-19、記事タイトル「野村出資の Komainu、シンガポールのカストディ企業 Propine を買収」2024-10-23）
