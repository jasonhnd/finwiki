---
source: fintech/brazil-mexico-cbdc-stablecoin-push-2026
source_hash: 09d1303d82049bb2
lang: ja
status: machine
fidelity: ok
title: "ブラジル DREX × メキシコ Banxico CoDi × ラテンアメリカ CBDC と stablecoin 並行アーキテクチャ 2026"
translated_at: 2026-06-02T13:21:55.076Z
---

# ブラジル DREX × メキシコ Banxico CoDi × ラテンアメリカ CBDC と stablecoin 並行アーキテクチャ 2026

## 要約

ブラジルとメキシコは 2026 年に同時期に「CBDC + 民間 stablecoin + 米ドル SC グレー化」の三軌道並行段階に入る。**ブラジル DREX** は 2025-12 に第 2 ラウンド試験運用を 16 機関に拡大し、ホールセール + リテールの dual-layer をカバーする（[[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]] と一致);**Mercado Bitcoin** は Polygon / Ethereum 上で **BRL アンカー stablecoin** を発行し DREX の市場版を補完、DREX とは「公私デュアル・トラック」を形成。**メキシコ Banxico** はリテール CBDC を発行しないが **CoDi 即時決済** を深化させ、**Bitso × Mercado Bitcoin × M0 連合発行の MXNB**（メキシコペソ stablecoin、[[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]] 参照）を黙認することで、USDC/USDT グレードル化に対する「防御的本国通貨 SC」の代替を提示する。この構図はラテンアメリカを [[fintech/em-market-crypto-dollarization-pattern|EM ドル化パターン]] の外の **第二の経路** として位置付ける: 本国通貨を放棄するのではなく、本国通貨 SC + CBDC を並行させて米ドル SC の浸透を抑制する。

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置する。ドル圧力の背景は [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]]、cross-CBDC payments の文脈は [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]] とあわせて読む。[[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]] とは、ラテンアメリカ vs インドという 2 つの本国通貨防御ルートを横断比較する。

## 主要事実 (2026-05 スナップショット)

- **DREX 第 2 ラウンド試験運用** 2025-12 開始、参加機関 16 社（Itaú / Bradesco / Santander Brasil / Banco do Brasil / Caixa / BTG Pactual / Mercado Bitcoin / Visa Brasil 等を含む） ^[bcb-press]
- **DREX TVL (pilot 段階)** ~R$3.5B (~$700M) のシミュレーション金融資産が流通 ^[bcb-press]
- **Mercado Bitcoin BRL stablecoin (MBR$)** 流通量約 R$280M (~$56M, 2026-05);デプロイチェーンは Polygon + Ethereum + Avalanche ^[issuer-press]
- **Banxico CoDi 月次取引量** ~7,200 万件 (2026-03)、前年比 +120%（SPEI 制限引き下げが牽引） ^[banxico]
- **MXNB stablecoin (M0 + Bitso)** 流通量約 MXN 450M (~$25M);第 1 フェーズは Bitso 内部 + DeFi テストに限定 ^[bitso-press]
- **ブラジルにおける USDC/USDT** 月次オンチェーン流入額約 $4.5B (2026-Q1)、主に Bitso BR / Mercado Bitcoin / Foxbit 経由 ^[chainalysis-report]
- **メキシコにおける USDC/USDT** 月次オンチェーン流入額約 $2.8B (2026-Q1)、Bitso が取引所サイドの 60%+ シェアを占有 ^[chainalysis-report]
- **ブラジル CVM（証券委員会）2026-04 公告** で BRL アンカー SC を e-money / payment instrument 規制枠組みに組み込み、証券属性を排除 ^[cvm-press]
- **メキシコ CNBV / Banxico 2026-Q1 共同声明** で本国通貨 SC に対する「観察 + 不阻止」の立場を示唆、米ドル SC に対する「明確に推奨しない」立場と対照的 ^[banxico-press]

## DREX (ブラジル) 詳細

**プロジェクト正式名称**: Digital Real (DREX) — ブラジル中央銀行 (Banco Central do Brasil, BCB) 主導、2020 年に研究開始、2023 年に第 1 ラウンド試験運用、2025-12 に第 2 ラウンド試験運用を拡大。

**アーキテクチャ**: dual-tier — ホールセール CBDC（銀行間 DLT 層、Hyperledger Besu private chain） + トークン化商業銀行預金（CBDC バックド・デポジット・トークン）でリテールに対応。これは [[fintech/cbdc-multi-tier-architecture-three-paradigms|多層 CBDC アーキテクチャ三パラダイム]] における「間接発行 + 商業銀行トークン化預金」パラダイムと一致する。

**第 2 ラウンド試験運用 (2025-12 開始) の主な変化**:

1. **資産範囲の拡大**: 第 1 ラウンドは国債 + 不動産トークン化のみテスト;第 2 ラウンドでは企業債 / 売掛債権 / 農産物倉荷証券 / セカンダリ市場決済 / FX 交換を追加
2. **機関数**: 2023 年の 9 社から 16 社に拡大
3. **暗号資産ネイティブ事業者の参入**: Mercado Bitcoin が初の DREX 試験運用資格を取得した暗号取引所となり、「プライベートチェーン CBDC + パブリックチェーン SC」の相互運用試行のマイルストーンに
4. **クロスボーダー接続**: BCB は BIS Innovation Hub と mBridge モデルとの互換性経路について検討中（[[fintech/mbridge-bis-multi-cbdc-overview|mBridge マルチ CBDC 概要]] 参照）だが、ブラジルは mBridge 6 か国メンバー **ではない**

**DREX と Pix の関係**: Pix（BCB 即時決済システム、2020 ローンチ）はすでにブラジル国民レベルの決済チャネルとなっており、月次取引量 60 億件超。DREX は Pix を置き換えるのではなく、Pix の上にプログラマビリティ + アトミック決済の層を金融機関向けに付加する。**Pix 国民レベル + DREX 機関レベル + Mercado Bitcoin BRL SC 暗号ネイティブ・レベル** = ブラジル決済層の三軌道アーキテクチャ。

## Mercado Bitcoin BRL stablecoin

**発行体**: Mercado Bitcoin（ブラジル最大の本土暗号取引所、2013 設立、2021 年にソフトバンク・グループがリードで $2.1B のバリュエーション）

**メカニズム**: BRL 1:1 アンカー、準備はブラジル短期国債（LFT） + 中央銀行預金 + 商業銀行預金。準備の月次開示は KPMG Brazil が監査。

**位置付け**: DREX を置き換えるのではなく、**DREX の全面ローンチ前（2027-2028 予定）の市場空白を埋める** とともに、DREX 時代に「民間 BRL トークンと CBDC の相互運用」のための橋頭堡を提供する。

**チェーン選定**: Polygon を主軸（[[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ]] における Polygon と複数のラテンアメリカ中央銀行との協業背景に駆動される） + Ethereum（クロスボーダー流動性） + Avalanche（DeFi 互換）。

**用途**: (1) 暗号取引所内の BRL ペアによる法定通貨入金遅延の代替;(2) クロスボーダー決済（アルゼンチン / ウルグアイ / パラグアイ向け輸出業者への BRL 決済）;(3) DeFi プロトコルでの BRL 担保 / 流動性マイニング;(4) Mercado Pago その他 fintech に組み込む BRL トークン・ウォレット。

## Banxico CoDi × MXNB pilot (メキシコ)

**Banxico（メキシコ中央銀行）の立場**: リテール CBDC もホールセール CBDC も発行しないが、**CoDi**（即時決済 QR コード・プロトコル、2019 ローンチ） + SPEI（銀行間即時送金、2004 ローンチ）を深化させる。Banxico 総裁 Victoria Rodríguez は繰り返し公的に表明: 「デジタルペソの本質的問題は技術ではなく、既存決済システムの効率性である」。これは中国 e-CNY / ブラジル DREX の強い CBDC 路線とは **逆方向**。

**CoDi 2026 状況**:

- 月次取引量 ~7,200 万件 (2026-03)、前年比 +120%
- 主要ドライバー: SPEI の上限が MXN 8,000 から 0 に引き下げられ、小額 CoDi と SPEI が連続的にカバー
- 加盟店接続数 ~3.5M (2026-05)
- Pix（ブラジル、月 60 億件）との比較ではまだ 2 桁小さいが、成長率は高い

**MXNB (M0 + Bitso pilot)**:

- 発行体: Bitso がアレンジ、Mercado Bitcoin（ブラジル側）が副 issuer、ベースインフラは M0（[[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]] 参照）
- チェーン: Base / Ethereum / Polygon
- 準備: メキシコ短期国債（CETES） + 商業銀行 MXN 預金
- 流通 MXN 450M (~$25M, 2026-05)、依然 pilot 段階
- 戦略的意図: Banxico が CBDC を発行しない時期に **民間本国通貨 SC + M0 中立インフラ** を活用し、USDC/USDT のグレー化に対抗する本国通貨防御層を構築

**Bitso の役割**: Bitso はメキシコ最大の暗号取引所 + Latam クロスボーダー決済チャネル（Stellar と長期協業して米墨間 remittance を提供）。2024 バリュエーション $2.2B。Bitso は同時に:

1. USDC / USDT のメキシコ最大ディストリビューター（米ドル SC 浸透を抑制できず）
2. MXNB の共同発行体（本国通貨代替オプションを能動的に提供）
3. Banxico CoDi の加盟店接続ゲートウェイの 1 つ

この「三角ポジショニング」が Bitso をメキシコ決済層で最も重要な市場ノードにしている。

## デュアル・トラック（CBDC + 本国通貨 SC） vs シングル・トラック（グレードル化）

| 次元 | ブラジル (DREX + BRL SC) | メキシコ (CoDi + MXNB) | アルゼンチン (CBDC なし + グレー USDT) | ベネズエラ (Petro 失敗 + USDT) |
|---|---|---|---|---|
| CBDC 路線 | DREX 積極推進 | なし（Banxico 拒否） | なし（政治不安定） | Petro 失敗 |
| 本国通貨 SC | Mercado Bitcoin BRL ~$56M | MXNB ~$25M | ほぼなし | ほぼなし |
| 米ドル SC 月次流入 | ~$4.5B | ~$2.8B | ~$2.5B（対 GDP 比最大） | ~$1.2B |
| 即時決済チャネル | Pix 60 億/月 | CoDi 7,200 万/月 | 弱い | 極弱 |
| 規制の立場 | 積極（BCB + CVM の明文枠組み） | 黙認 + 観察 | 矛盾（中央銀行は厳格、財務省は緩い） | 名目上厳格、実質放任 |
| 反米ドル SC 効果 | 中（Pix + DREX で本国通貨代替を提供） | 弱（CoDi 規模が小さい） | 失敗 | 失敗 |

**中核的洞察**: ブラジルは **Pix + DREX + BRL SC** の三層で本国通貨の利便性、プログラマビリティ、暗号相互運用性をすべて整備しており、これは現在の EM 国家で最も完成度の高い「反ドル化テックスタック」である。メキシコがそれに次ぐ（CoDi + MXNB はまだスケールアップ中）。アルゼンチン / ベネズエラは「本国通貨放棄 → USDT 化」の反例で、[[fintech/jurisdiction-list-monetary-protectionism|規制管轄リスト · 通貨保護主義]] における「ソブリン通貨崩壊国」リストと一致する。

## mBridge / Project Agora との距離

ブラジル、メキシコは **共に mBridge 6 か国メンバーではない**（[[fintech/mbridge-bis-multi-cbdc-overview|mBridge 概要]] 参照）。BIS 2025-09 ワーキング・ペーパー (BIS WP No. 1156) はラテンアメリカのマルチ CBDC 橋渡しが mBridge への参加ではなく **IADB（Inter-American Development Bank）主導の地域試験運用** に向かう可能性が高いと示唆する。

DREX と mBridge の技術互換性（両者とも Hyperledger Besu permissioned chain）から「将来の接続」は可能だが、政治的にはブラジル + メキシコは中国主導の mBridge 連合との距離を保っている。これは [[fintech/jurisdiction-list-monetary-protectionism|規制管轄]] におけるラテンアメリカの「非同盟 + プラグマティズム」の立場と一致する。

## M0 MXNB pilot との縦深な結合

MXNB pilot は M0（[[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]] 参照）にとって最初の **非ドル partner SC** であり、ラテンアメリカで初の **完全に中立 SC インフラ上で稼働する本国通貨 SC** でもある。これは Mercado Bitcoin BRL（自社インフラ）との対比をなす:

| 次元 | MXNB (M0 インフラ) | Mercado Bitcoin BRL (自社構築) |
|---|---|---|
| コンプライアンス・テンプレート | M0 標準化 + Bitso ローカル接続 | Mercado Bitcoin 自社コンプライアンス・スタック |
| スマートコントラクト | M0 共用（OpenZeppelin + Trail of Bits + Certora 監査） | 自社開発 + 自社監査 |
| 準備接続 | M0 バックエンド（CETES + 商業銀行預金） | 自社カストディ（LFT + 中央銀行預金 + 商業銀行預金） |
| クロスチェーン | M Bridge canonical | LayerZero + 汎用ブリッジ |
| ガバナンス | $M DAO + Bitso/Mercado Bitcoin の実質コントロール | Mercado Bitcoin 100% コントロール |
| 規制負担 | M0 テンプレート共有で単一の負担を軽減 | メキシコ/ブラジル規制負担を単独で担う |

**含意**: ラテンアメリカでは 2027-2028 に「自社構築 vs インフラ共有」の分化が現れる可能性 — 大型ローカル・プレイヤーは自社構築（Mercado Bitcoin BRL モデル）、中小プレイヤーは共有（M0 MXNB モデル）。これは Latam 版の [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]]。

## 規制協調と対立

- **ブラジル CVM 2026-04 公告**: BRL アンカー SC = e-money（NOT 証券）を明示、Howey Test 適用を排除、民間本国通貨 SC に明確なコンプライアンス経路を提供
- **ブラジル BCB Resolução 2026-006（草案）**: 「BRL アンカー SC 流通量」を決済システム監督ダッシュボードに組み込むことを提案、EU MiCA の大型 EMT 制限条項と類似（[[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]] 参照）
- **メキシコ CNBV 2026-Q1 声明**: 「民間本国通貨 SC に対しては観察 + 不阻止の立場、外貨 SC に対しては推奨しない」
- **ラテンアメリカ地域 IADB 2026-Q2 報告**: 加盟国に「統一本国通貨 SC 規制枠組み」 + 「KYC/AML 情報共有メカニズム」採用を提言
- **[[fintech/fatf-travel-rule-overview|FATF Travel Rule]] との互換性**: ブラジル + メキシコは共に FATF / GAFILAT メンバーであり、BRL/MXN SC のクロスボーダー流通は Travel Rule に準拠する必要

## 関連項目

- [[fintech/INDEX|FinWiki Fintech Index]]
- [[fintech/em-market-crypto-dollarization-pattern|EM 市場暗号ドル化パターン]]
- [[fintech/india-anti-dollar-dpi-alliance|India 反ドル DPI アライアンス]]
- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多層アーキテクチャ概要]]
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 多層アーキテクチャ三パラダイム]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS マルチ CBDC 概要]]
- [[fintech/jurisdiction-list-monetary-protectionism|管轄リスト · 通貨保護主義]]
- [[fintech/gray-market-dollar-network-formalization|グレーマーケット・ドル・ネットワークの正式化]]
- [[fintech/m0-network-infrastructure-update-2026|M0 2026 インフラ更新]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非ドル決済リング規模]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain-token 戦略トリレンマ]]
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART]]
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule]]

## 出典

- Banco Central do Brasil — DREX official page https://www.bcb.gov.br/en/financialstability/drex_en
- Banxico — CoDi (Cobro Digital) https://www.banxico.org.mx/sistemas-de-pago/codi-cobro-digital-banco.html
- IADB — "Digital currencies and stablecoins in Latin America: 2026 outlook" https://www.iadb.org/en/news/digital-currencies-latam-2026
- Bitso blog — MXNB pilot announcement https://bitso.com/blog/mxnb-stablecoin-pilot
- Mercado Bitcoin blog — BRL stablecoin (MBR$) launch https://www.mercadobitcoin.com.br/blog/brl-stablecoin
- BIS Working Paper No. 1156 — "Multi-CBDC arrangements in Latin America" (2025) https://www.bis.org/publ/work1156.htm
- Reuters — "Brazil's DREX enters second phase with 16 institutions" (2025-12) https://www.reuters.com/business/finance/brazil-drex-second-phase-2026
- CVM Comunicado 2026-04 — BRL stablecoin classification (public release)
- Chainalysis Geography of Crypto 2026 — LatAm chapter (referenced via aggregate stat)
