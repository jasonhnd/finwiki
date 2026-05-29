---
title: グローバル VASP 規制 8 極比較マトリクス — JP / KR / HK / SG / EU / US / UAE / UK
aliases:
  - Global VASP regulatory comparison matrix
  - Crypto exchange license comparison 8 jurisdictions
  - VASP eight-pole comparison
  - VASP regulatory regime side-by-side
domain: exchanges
created: 2026-05-24
last_updated: 2026-05-24
last_tended: 2026-05-24
review_by: 2026-11-20
confidence: likely
tags:
  - exchanges
  - vasp
  - regulation
  - comparison
  - matrix
  - benchmark
  - global
status: active
sources:
  - https://www.fsa.go.jp/en/policy/virtual_currency/
  - https://www.fsc.go.kr/eng/
  - https://www.sfc.hk/en/Rules-and-standards/Suitability-requirements/Virtual-asset-related-products-and-services
  - https://www.mas.gov.sg/regulation/payments
  - https://www.esma.europa.eu/policy-activities/crypto-assets
  - https://www.dfs.ny.gov/virtual_currency_businesses
  - https://www.vara.ae/
  - https://www.fca.org.uk/firms/cryptoassets
---

# グローバル VASP 規制 8 極比較マトリクス — JP / KR / HK / SG / EU / US / UAE / UK

## TL;DR

世界の主要 VASP (Virtual Asset Service Provider) 規制は **8 極構造** に収斂してきた: 日本 (FSA + JVCEA 二層) / 韓国 (FSC + FIU 単一) / 香港 (SFC VATP) / シンガポール (MAS DPT) / EU (MiCA CASP) / 米国 (連邦 + 50 州フラグメント) / UAE (VARA 単独) / 英国 (FCA AML 中心 + 段階的本格化)。本エントリは **法源・ライセンス階層・必要資本・分別管理 (cold storage %)・AML/Travel Rule・ステーブルコイン規制・クロスボーダー・マーケティング・代表執行例・開示・カーブアウト** の 13 軸で側並び比較する。各極の詳細は [[exchanges/jp-vasp-regulatory-timeline]] / [[exchanges/eu-mica-casp-regime-overview]] / [[exchanges/us-crypto-licensing-multi-layer-system]] / [[exchanges/hk-sfc-vasp-licensing-overview]] / [[exchanges/sg-mas-dpt-licensing-overview]] を起点に。

## Wiki route

This entry sits under [[exchanges/INDEX|exchanges index]]. It is the **横串 (cross-cut)** counterpart to the per-pole files above and reads against [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin regulatory five-pole matrix]] for the parallel stablecoin axis, and [[JapanFG/legal-financial-licenses/INDEX|legal/financial licenses]] for the system / regulatory boundary on the Japan side.

## Key facts

- **8 極構造の収斂**: 2017 (日本 FSA 登録制) → 2020 (シンガポール PSA) → 2021 (韓国特金法) → 2023 (香港 VATP / UK FCA promotion 強化) → 2024 (EU MiCA CASP 完全施行) → 2024-2025 (UAE VARA 完全運用) と 8 年で世界主要 8 極が VASP 法体系を整備完了 ^[extracted]
- **コールド保管比率の世界最厳は香港 (98%)**、次に日本 JVCEA 自主規制 (95%) ^[extracted]

### A. 法源・規制当局・施行時期

| 極 | 法源 (statute) | 主規制当局 | VASP 制度施行 |
|---|---|---|---|
| **日本** | 改正資金決済法 (2016 成立 / 2017 施行) + 改正金商法 (2020 デリバ) | **FSA** (金融庁) + 自主規制 **JVCEA** | 2017-04 ([[exchanges/jp-vasp-regulatory-timeline]]) |
| **韓国** | 特定金融情報法 (특정금융정보법) + 仮想資産利用者保護法 (2024-07 施行) | **FSC** (금융위원회) + **FIU** (금융정보분석원) | 2021-03-25 |
| **香港** | 改正 AMLO (Anti-Money Laundering Ordinance) + SFO (Securities and Futures Ordinance) | **SFC** (証券及期貨事務監察委員會) | 2023-06-01 ([[exchanges/hk-sfc-vasp-licensing-overview]]) |
| **シンガポール** | Payment Services Act 2019 (2020-01 施行) | **MAS** (Monetary Authority of Singapore) | 2020-01 |
| **EU** | MiCA = Regulation (EU) 2023/1114 | **ESMA** (調整) + 各国 NCA (BaFin/AMF/AFM 等) | 2024-12-30 CASP 完全施行 |
| **米国** | Bank Secrecy Act + 各州 Money Transmitter Acts + NY DFS Reg 200 (BitLicense) + Securities Act / CEA | **FinCEN** (連邦) / **NYDFS** (州) / **SEC** / **CFTC** / **OCC** | 連邦 1970 + NY BitLicense 2015-06 + OCC Trust 2021 |
| **UAE** | Dubai Law No. 4 of 2022 + VARA Rulebooks (2023-02 発効) | **VARA** (Dubai) / **ADGM-FSRA** (Abu Dhabi) | 2022-03 設立 / 2023-02 ルールブック発効 |
| **英国** | Money Laundering Regulations 2017 + FSMA 2023 拡張 | **FCA** (Financial Conduct Authority) | 2020-01 (MLR 改正・AML 登録) |

### B. ライセンス区分・階層

| 極 | 区分名 | 数 | 階層構造 |
|---|---|---|---|
| **日本** | 暗号資産交換業登録 / 暗号資産デリバ取引業 (金商法 1 種) | 2 (現物+デリバ) | 単一登録 (財務局長 第NNNNN号) |
| **韓国** | 仮想資産事業者 (VASP / 가상자산사업자) | 1 区分内で取引所/カストディ/Brokerage/送金 細分化 | FIU 登録 + KISA ISMS 認証 (二段階) |
| **香港** | VATP ライセンス (Type 1 + Type 7 SFC) | 1 (リテール + 機関は同一ライセンス) | 単一 |
| **シンガポール** | DPT サービス = MPI / SPI / Money-Changing | 3 区分 | 規模ベース階層 |
| **EU** | CASP = MiCA Article 60 サービス 10 種 | 10 (custody / trading / exchange / 注文執行 等) | サービス別認可、組合せ取得 |
| **米国** | (a) FinCEN MSB / (b) 州 MTL ×~50 / (c) NY BitLicense / (d) OCC Trust / (e) SEC ATS or broker-dealer / (f) CFTC DCM/SEF | 4-6 重 | 連邦 + 州マトリクス |
| **UAE** | VASP 活動別 7 区分 (Advisory / Broker-Dealer / Custody / Exchange / Lending / Management / Transfer) | 7 | 活動別組合せ |
| **英国** | MLR 暗号資産事業者登録 (現行) → 規制活動 (2026-2027 phased) | 1 → 拡張中 | AML 単層 → 二段階 (planned) |

### C. 活動カバレッジ (spot / derivatives / custody / staking / lending / NFT marketplace)

| 極 | Spot | Deriv | Custody | Staking | Lending | NFT mkt |
|---|---|---|---|---|---|---|
| **日本** | ○ | ○ (金商法 1 種、別ライセンス) | ○ | △ JVCEA 自主規制下 ([[exchanges/jp-cex-staking-lending-regulation]]) | △ 同上 | △ 別途検討 |
| **韓国** | ○ | ✕ (利用者保護法でリテール禁止) | ○ | △ ガイドライン未確定 | △ 同上 | △ |
| **香港** | ○ | ○ (機関のみ、リテール禁止) | ○ | ✕ (2024-04 ガイダンス保留) | ✕ | △ 検討中 |
| **シンガポール** | ○ | △ (機関 MAS 個別承認) | ○ | △ ガイダンス制限 | △ 同上 | ✕ 慎重 |
| **EU** | ○ | △ (MiFID II 既存 framework) | ○ | △ MiCA staking 明文化なし | △ 別途 | △ 適用整理中 |
| **米国** | ○ (州別) | ○ (CFTC DCM / SEF) | ○ (Trust Charter) | △ SEC enforcement 警告多発 | △ Genesis 等の破綻で慎重 | △ |
| **UAE** | ○ | ○ (VARA フル許可) | ○ | ○ | ○ | ○ |
| **英国** | ○ (AML 登録のみ) | △ FCA 別途 | △ FCA 別途 | △ 議論中 | △ | △ |

### D. 資本要件・分別管理

| 極 | 最低資本 | 顧客資産分別管理 | コールド保管比率 |
|---|---|---|---|
| **日本** | 資本金 1,000 万円 + 純資産プラス | 金銭は信託銀行、暗号資産は分別管理 | **コールド 95% 以上 / ホット 5% 以下** (JVCEA 自主規制、[[exchanges/jp-vasp-cold-storage-segregation-rules]]) |
| **韓国** | 業種別 (10 億〜30 億ウォン目安) | 顧客預け金は別途管理銀行 (실명확인 입출금) | **70% コールド原則** (FSC 2024 強化指針) |
| **香港** | **HK$5M (約 1 億円)** | trustee 経由信託保管 | **98% 以上** (世界最厳) |
| **シンガポール** | MPI: SG$250K 基本 | trust account 必須 (2024-) | 比率規定なし (MAS notice で趣旨指示) |
| **EU** | 注文取次 €50K / 両替・執行 €125K / 取引所・カストディ **€150K** | 信託 or segregation 義務 | 比率規定なし (NCA 裁量) |
| **米国** | 州別 (NY BitLicense は実質的に高額 surety bond + capital) | NY: 顧客資産 100% 同種別 backing | 州別、NY DFS は事実上 cold dominant 求める |
| **UAE** | VASP カテゴリ別 (Exchange は AED 1.5M〜) | 信託または segregated wallet | VARA Rulebook で risk-based 規定 |
| **英国** | 規定なし (現行 MLR ベースのため) | MLR では未義務、FSMA 2026+ 拡張で導入予定 | 規定なし |

### E. Fit-and-proper / 出資金来源

- **日本**: 主要株主・取締役のバックグラウンド審査 (反社・国際制裁・PEP)、追加出資の出所証明
- **韓国**: 実名口座銀行が KYC/CDD 連動で出資検証実施 (銀行 1:1 ルール)
- **香港**: SFC fit-and-proper test (歴代の deeper test of character ・ 経歴・財務状況・能力)
- **シンガポール**: MAS Notice on Fit and Proper Criteria (FSG-N16) 適用
- **EU**: MiCA Article 81 で management body の good repute 義務 + 大口株主 (qualifying holding) 通知
- **米国**: NY BitLicense では Cybersecurity coordinator / Compliance Officer 個別審査 + Background check
- **UAE**: VARA は senior management approval 必須、犯罪歴・破産歴チェック
- **英国**: FCA Threshold Conditions + Senior Managers and Certification Regime (SMCR) 適用拡大

### F. AML / Travel Rule 実装

| 極 | 閾値 | Travel Rule | 国内伝達基盤 |
|---|---|---|---|
| **日本** | 10 万円超 (送金 10 万円・受領 30 万円基準) | 2022-04 義務化 → 2026 強化 | TRC-20 や Sumsub 連携、JVCEA 共通基盤 ([[exchanges/jp-vasp-aml-travel-rule-implementation]]) |
| **韓国** | 100 万ウォン超 (約 10 万円) | 2022-03 義務化 | VerifyVASP 等業界 共通 |
| **香港** | HK$8,000 超 | AMLO で義務 (2023-06-) | 業界 protocol 任意選択 |
| **シンガポール** | SG$1,500 超 | PSA Notice PSN02 で義務 | 業界 protocol 任意 |
| **EU** | **€1,000 超** (TFR = Regulation 2023/1113) | 完全実装 (CASP 義務) | Sumsub / Notabene 等 |
| **米国** | $3,000 超 (FinCEN Travel Rule、暗号資産は OFAC 連動) | FinCEN proposed rule pending | TRP (Travel Rule Protocol) |
| **UAE** | AED 3,500 超 | VARA Rulebook で義務 | VARA approved protocols |
| **英国** | £1,000 超 (Cryptoasset Travel Rule 2023-09 施行) | 完全実装 | Notabene 等 |

### G. ステーブルコイン発行ルール (cross-link [[fintech/global-stablecoin-regulatory-five-pole-matrix]])

- **日本**: 改正資金決済法 2023-06 施行 → 銀行・信託銀行・資金移動業者の 3 類型のみ発行可 (JPYC 2025-運用開始)
- **韓国**: 仮想資産利用者保護法 2024-07 施行、ステーブルコイン規制は 2026 別途立法予定
- **香港**: HKMA Stablecoin Ordinance 2025-08-01 施行 → 法定通貨ペッグ stablecoin は HKMA 認可必須
- **シンガポール**: MAS Stablecoin Framework 2023-08 発表、SCS (Single-Currency Stablecoin) 認可制
- **EU**: MiCA Title III (ART = Asset-Referenced Token) + Title IV (EMT = E-Money Token) を 2024-06-30 から先行施行
- **米国**: GENIUS Act 2025-07 連邦 stablecoin 法成立 → 連邦 + 州二層構造、OCC Trust Charter 経路もあり
- **UAE**: Central Bank Stored Value Facilities Reg + VARA でステーブルコイン分担
- **英国**: FCA + Bank of England 共同で systemic stablecoin 規制、2026 法整備中

### H. クロスボーダー solicitation / passporting

- **日本**: 国内居住者向け solicitation は登録必須 → 海外無登録業者には FSA 警告 ([[exchanges/fsa-foreign-exchange-warning-system]])
- **韓国**: 国内居住者向けは VASP 登録必須、銀行口座要件で実質的に外資排除
- **香港**: 香港居住者向けは SFC VATP 必須、外部からの solicitation は restricted
- **シンガポール**: シンガポール居住者向け solicitation は PSA 適用、外資は MPI 取得が必要
- **EU**: **MiCA passporting で 1 ヵ国認可 → 27 ヵ国アクセス可能** (米国 50 州との決定的違い)
- **米国**: 州ごとの solicitation 規制、Reg D / Reg S 等で外資調達ルートあり
- **UAE**: VARA 認可で UAE 全域 (DIFC 除く)、ADGM とは別途、外部からの solicitation 制限
- **英国**: UK 居住者向け financial promotion は FCA 認可業者経由必須 (2023-10 強化)

### I. マーケティング / プロモーションルール

- **日本**: JVCEA 広告ガイドライン (リスク警告必須、誇大表現禁止、芸能人起用に制限)
- **韓国**: 利用者保護法で誇大広告禁止、新規 token 上場時のリスク説明義務
- **香港**: SFC Code of Conduct 適用、リテール向けは大型流動性 token のみ宣伝可能
- **シンガポール**: **2022-01 MAS guidelines で DPT サービスのリテール広告を実質的全面禁止** (機関志向 hub の象徴)
- **EU**: MiCA Article 7 (白書)・Article 29 (marketing communications) で fair / clear / not misleading 義務
- **米国**: 州別 + SEC Reg BI / FINRA rule 適用、影響力ある人物の disclosure 必須
- **UAE**: VARA Marketing Regulations 2023-12 で詳細ルール、海外 influencer の使用にも制約
- **英国**: **Financial Promotion Order + Cooling-off period 24 時間** (新規顧客は申込後 24h 待機必須)、risk warning + appropriateness assessment 義務

### J. 代表的 enforcement 事例 (1-2 件 / 極)

- **日本**: Coincheck NEM 580 億円流出 (2018-01) → 業務改善命令 (詳細 [[exchanges/coincheck-nem-hack-detailed-analysis]]) ; DMM Bitcoin Lazarus ハック (2024-05) → 自主廃業 ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]])
- **韓国**: Terra-Luna 崩壊 (2022-05) → Do Kwon 韓国検察起訴・モンテネグロ捕縛 ; FTX 顧客損失で韓国検察捜査拡大
- **香港**: JPEX 詐欺 (2023-09) → 香港警察 11 名逮捕、損失 HK$15 億超、香港 SFC 警告リスト改善契機
- **シンガポール**: Three Arrows Capital 破綻 (2022-06) → MAS が 3AC を 9 年間禁止業務、Su Zhu/Kyle Davies 米司法協力中
- **EU**: Binance France AMF 警告 (2023) → 2024 SAS Société 形態で再認可 ; BaFin が Coinbase Germany 個別承認 2021-06
- **米国**: SEC v. Coinbase (2023-06 提訴 → 2024-03 dismissed in part) ; SEC v. Binance.US (2023-06) ; FTX 破綻 → SBF 25 年実刑 (2024-03)
- **UAE**: Bybit (UAE 本社) ・ 日本市場撤退 (2026-03) ; OKX FIU 違反で米国和解 2025
- **英国**: Binance UK FCA 警告 → 2024 撤退 ; Copper.co 認可後の expansion 加速

### K. 開示・財務報告・proof-of-reserves

- **日本**: JVCEA 月次顧客資産分別管理状況提出 + 年次決算公表 (FSA 提出)
- **韓国**: FIU への月次 STR 報告 + KISA ISMS 年次更新監査
- **香港**: SFC への monthly returns + IFRS audited financials 年次提出 + monthly client asset attestation
- **シンガポール**: MAS への annual financial statement + assurance report (大規模 MPI は monthly customer asset report)
- **EU**: MiCA Article 67 で annual report + key information disclosure + monitoring 強化
- **米国**: NY BitLicense は **quarterly financial reports** + **annual audited financials** + **monthly proof-of-reserves 推奨**
- **UAE**: VARA Rulebook で **monthly proof-of-reserves attestation 義務** (世界最厳の頻度の一つ)
- **英国**: MLR 下では disclosure 限定的 → FSMA 拡張で本格化見込み

### L. 注目カーブアウト・例外

- **日本**: NFT は原則 VASP 対象外 (機能で個別判定) ; 銀行・信託銀行は ステーブルコイン発行で別 framework
- **韓国**: 利用者保護法はリテールデリバ全面禁止 → 機関含む CME 系の海外引受も restricted
- **香港**: HKMA stablecoin は SFC VATP と並行、デュアル監督
- **シンガポール**: DBS Digital Exchange は **MAS 個別承認** (PSA とは別)、機関専用
- **EU**: 既存 NCA 認可業者は 18 ヶ月の transitional period (2024-12-30 → 2026-07-01) で MiCA 移行
- **米国**: **OCC Federal Trust Charter** で 50 州 MTL 全免除 (Anchorage Digital 2021-01 が初取得、Circle 2025 取得)
- **UAE**: DIFC は VARA 管轄外 (DFSA 単独)、ADGM は FSRA 独立 (UAE 内で 3 系統併存)
- **英国**: MLR 登録は AML 義務のみ、市場行為規制は FSMA に依存 (二段階構造)

### 統合型 (single-passport regime)

- **EU MiCA**: 1 ライセンス → 27 ヵ国 passporting (世界最広域)
- **日本**: FSA 単一登録、ただし JVCEA 自主規制で二層
- **韓国**: FSC + FIU 単一、銀行 1:1 ルールでさらに集中
- **シンガポール / 香港**: 都市国家 / SAR 内で単一監督

### フラグメント型 (multi-layer regime)

- **米国**: 連邦 (FinCEN/SEC/CFTC/OCC) + 州 (50 州 MTL + NY BitLicense) で世界最複雑
- **UAE**: VARA + DFSA + ADGM-FSRA + 連邦 SCA + Central Bank で 5 系統併存

### 段階的整備型 (phased regime)

- **英国**: MLR 2017 (AML 中心、現行) → FSMA 2023 拡張 (2026-2027 phased) で本格規制移行
- **韓国**: 特金法 (2021) → 利用者保護法 (2024) → ステーブルコイン規制 (2026 予定) で段階追加

## 3. グローバル CEX 戦略への含意

- **MiCA passporting** が EU 拠点取得競争を 2024-2025 激化 → Coinbase EU (Luxembourg) / Kraken EU (Ireland) / Crypto.com EU (Malta) / Binance France の構図確定
- **米国の州別 MTL コスト**は全米展開で数千万ドル規模に達し、結果として大手数社へのエコシステム集中
- **UAE VARA** の低法人税 + フルスタックライセンス + リテール解禁が「グローバル信認の floor」を提供 → Bybit / OKX / Crypto.com の本社移転トレンド
- **APAC 三都市分業**: シンガポール (機関志向) / 香港 (リテール解禁・大型銘柄限定) / 日本 (リテール許容・ホワイトリスト厳格) の役割分担が固定化
- **米国 GENIUS Act 2025** + **OCC Trust 経路**で米国は世界最大のステーブルコイン発行 hub に再上昇 (Circle / Paxos / OCC 経由 USD bank)

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/jp-vasp-regulatory-timeline]] — 日本タイムライン (本マトリクスの JP anchor)
- [[exchanges/fsa-vasp-registration-system]] — 日本登録制度詳細
- [[exchanges/jvcea-self-regulatory-overview]] — 日本自主規制
- [[exchanges/eu-mica-casp-regime-overview]] — EU 詳細
- [[exchanges/us-crypto-licensing-multi-layer-system]] — 米国詳細
- [[exchanges/hk-sfc-vasp-licensing-overview]] — 香港詳細
- [[exchanges/sg-mas-dpt-licensing-overview]] — シンガポール詳細
- [[exchanges/uae-vara-licensing-overview]] — UAE 詳細
- [[exchanges/uk-fca-crypto-registration-overview]] — 英国詳細
- [[exchanges/korea-cex-five-pillars-comparison]] — 韓国 5 大 CEX 比較
- [[exchanges/jp-vasp-aml-travel-rule-implementation]] — Travel Rule 日本実装
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — コールド保管詳細
- [[exchanges/global-cex-top10-comparison]] — グローバル CEX 10 強位置付け
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — ステーブルコイン版 5 極マトリクス (並行作成中、両方公開後にリンク解決)
- [[JapanFG/legal-financial-licenses/INDEX|legal/financial licenses]] — 日本側の規制境界

## Sources

- FSA: https://www.fsa.go.jp/en/policy/virtual_currency/
- Korea FSC: https://www.fsc.go.kr/eng/
- HK SFC: https://www.sfc.hk/en/Rules-and-standards/Suitability-requirements/Virtual-asset-related-products-and-services
- MAS: https://www.mas.gov.sg/regulation/payments
- ESMA MiCA: https://www.esma.europa.eu/policy-activities/crypto-assets
- NYDFS BitLicense: https://www.dfs.ny.gov/virtual_currency_businesses
- UAE VARA: https://www.vara.ae/
- UK FCA: https://www.fca.org.uk/firms/cryptoassets
