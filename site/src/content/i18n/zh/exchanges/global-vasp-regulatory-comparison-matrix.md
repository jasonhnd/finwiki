---
source: exchanges/global-vasp-regulatory-comparison-matrix
source_hash: 20430bae936c0172
lang: zh
status: machine
fidelity: ok
title: "全球 VASP 监管 8 极比较矩阵 — JP / KR / HK / SG / EU / US / UAE / UK"
translated_at: 2026-06-18T23:33:48.312Z
---

# 全球 VASP 监管 8 极比较矩阵 — JP / KR / HK / SG / EU / US / UAE / UK

## TL;DR

世界主要 VASP (Virtual Asset Service Provider) 监管已收敛为 **8 极结构**: 日本 (FSA + JVCEA 双层) / 韩国 (FSC + FIU 单一) / 香港 (SFC VATP) / 新加坡 (MAS DPT) / 欧盟 (MiCA CASP) / 美国 (联邦 + 50 州碎片化) / 阿联酋 (VARA 单独) / 英国 (以 FCA AML 为中心 + 分阶段正式化)。本词条按 **法源・牌照层级・所需资本・分别管理 (cold storage %)・AML/Travel Rule・稳定币监管・跨境・营销・代表性执法案例・披露・豁免** 的 13 轴进行并列比较。各极详情请以 [[exchanges/jp-vasp-regulatory-timeline]] / [[exchanges/eu-mica-casp-regime-overview]] / [[exchanges/us-crypto-licensing-multi-layer-system]] / [[exchanges/hk-sfc-vasp-licensing-overview]] / [[exchanges/sg-mas-dpt-licensing-overview]] 为起点。

## Wiki route

本词条位于 [[exchanges/INDEX|exchanges index]] 之下。它是上述各极别文件的 **横串 (cross-cut)** 对应物，并对照 [[fintech/global-stablecoin-regulatory-five-pole-matrix|global stablecoin regulatory five-pole matrix]] 以了解并行的稳定币轴，对照 [[financial-licenses/INDEX|legal/financial licenses]] 以了解日本一侧的系统 / 监管边界。

## Key facts

- **8 极结构的收敛**: 2017 (日本 FSA 登记制) → 2020 (新加坡 PSA) → 2021 (韩国特金法) → 2023 (香港 VATP / UK FCA promotion 强化) → 2024 (欧盟 MiCA CASP 完全施行) → 2024-2025 (阿联酋 VARA 完全运行)，在 8 年内世界主要 8 极完成了 VASP 法体系的整备 ^[extracted]
- **冷存储比例全球最严的是香港 (98%)**，其次是日本 JVCEA 自律监管 (95%) ^[extracted]

### A. 法源・监管当局・施行时期

| 极 | 法源 (statute) | 主监管当局 | VASP 制度施行 |
|---|---|---|---|
| **日本** | 修订资金决济法 (2016 成立 / 2017 施行) + 修订金商法 (2020 衍生品) | **FSA** (金融厅) + 自律监管 **JVCEA** | 2017-04 ([[exchanges/jp-vasp-regulatory-timeline]]) |
| **韩国** | 特定金融信息法 (특정금융정보법) + 虚拟资产用户保护法 (2024-07 施行) | **FSC** (금융위원회) + **FIU** (금융정보분석원) | 2021-03-25 |
| **香港** | 修订 AMLO (Anti-Money Laundering Ordinance) + SFO (Securities and Futures Ordinance) | **SFC** (证券及期货事务监察委员会) | 2023-06-01 ([[exchanges/hk-sfc-vasp-licensing-overview]]) |
| **新加坡** | Payment Services Act 2019 (2020-01 施行) | **MAS** (Monetary Authority of Singapore) | 2020-01 |
| **欧盟** | MiCA = Regulation (EU) 2023/1114 | **ESMA** (协调) + 各国 NCA (BaFin/AMF/AFM 等) | 2024-12-30 CASP 完全施行 |
| **美国** | Bank Secrecy Act + 各州 Money Transmitter Acts + NY DFS Reg 200 (BitLicense) + Securities Act / CEA | **FinCEN** (联邦) / **NYDFS** (州) / **SEC** / **CFTC** / **OCC** | 联邦 1970 + NY BitLicense 2015-06 + OCC Trust 2021 |
| **阿联酋** | Dubai Law No. 4 of 2022 + VARA Rulebooks (2023-02 生效) | **VARA** (Dubai) / **ADGM-FSRA** (Abu Dhabi) | 2022-03 设立 / 2023-02 规则手册生效 |
| **英国** | Money Laundering Regulations 2017 + FSMA 2023 扩展 | **FCA** (Financial Conduct Authority) | 2020-01 (MLR 修订・AML 登记) |

### B. 牌照区分・层级

| 极 | 区分名 | 数 | 层级结构 |
|---|---|---|---|
| **日本** | 加密资产交换业登记 / 加密资产衍生品交易业 (金商法 1 种) | 2 (现货+衍生品) | 单一登记 (财务局长 第NNNNN号) |
| **韩国** | 虚拟资产业者 (VASP / 가상자산사업자) | 1 区分内细分为交易所/托管/Brokerage/汇款 | FIU 登记 + KISA ISMS 认证 (两阶段) |
| **香港** | VATP 牌照 (Type 1 + Type 7 SFC) | 1 (零售 + 机构为同一牌照) | 单一 |
| **新加坡** | DPT 服务 = MPI / SPI / Money-Changing | 3 区分 | 基于规模的层级 |
| **欧盟** | CASP = MiCA Article 60 服务 10 种 | 10 (custody / trading / exchange / 订单执行 等) | 按服务认可，可组合取得 |
| **美国** | (a) FinCEN MSB / (b) 州 MTL ×~50 / (c) NY BitLicense / (d) OCC Trust / (e) SEC ATS or broker-dealer / (f) CFTC DCM/SEF | 4-6 重 | 联邦 + 州矩阵 |
| **阿联酋** | 按 VASP 活动分 7 区分 (Advisory / Broker-Dealer / Custody / Exchange / Lending / Management / Transfer) | 7 | 按活动组合 |
| **英国** | MLR 加密资产业者登记 (现行) → 受监管活动 (2026-2027 phased) | 1 → 扩展中 | AML 单层 → 两阶段 (planned) |

### C. 活动覆盖 (spot / derivatives / custody / staking / lending / NFT marketplace)

| 极 | Spot | Deriv | Custody | Staking | Lending | NFT mkt |
|---|---|---|---|---|---|---|
| **日本** | ○ | ○ (金商法 1 种、另一牌照) | ○ | △ JVCEA 自律监管下 ([[exchanges/jp-cex-staking-lending-regulation]]) | △ 同上 | △ 另行研究 |
| **韩国** | ○ | ✕ (用户保护法禁止零售) | ○ | △ 指引未定 | △ 同上 | △ |
| **香港** | ○ | ○ (仅机构，禁止零售) | ○ | ✕ (2024-04 指引暂缓) | ✕ | △ 研究中 |
| **新加坡** | ○ | △ (机构 MAS 个别批准) | ○ | △ 指引限制 | △ 同上 | ✕ 慎重 |
| **欧盟** | ○ | △ (MiFID II 既有 framework) | ○ | △ MiCA staking 无明文 | △ 另行 | △ 适用梳理中 |
| **美国** | ○ (按州) | ○ (CFTC DCM / SEF) | ○ (Trust Charter) | △ SEC enforcement 警告频发 | △ 因 Genesis 等破产而慎重 | △ |
| **阿联酋** | ○ | ○ (VARA 全许可) | ○ | ○ | ○ | ○ |
| **英国** | ○ (仅 AML 登记) | △ FCA 另行 | △ FCA 另行 | △ 讨论中 | △ | △ |

### D. 资本要求・分别管理

| 极 | 最低资本 | 客户资产分别管理 | 冷存储比例 |
|---|---|---|---|
| **日本** | 资本金 1,000 万円 + 净资产为正 | 金钱由信托银行，加密资产分别管理 | **冷 95% 以上 / 热 5% 以下** (JVCEA 自律监管，[[exchanges/jp-vasp-cold-storage-segregation-rules]]) |
| **韩国** | 按业种 (10 億〜30 億韩元为目标) | 客户存款由另设管理银行 (실명확인 입출금) | **70% 冷原则** (FSC 2024 强化指引) |
| **香港** | **HK$5M (约 1 億円)** | 经由 trustee 信托保管 | **98% 以上** (全球最严) |
| **新加坡** | MPI: SG$250K 基本 | 必须设 trust account (2024-) | 无比例规定 (MAS notice 指示其趣旨) |
| **欧盟** | 订单中介 €50K / 兑换・执行 €125K / 交易所・托管 **€150K** | 信托 or segregation 义务 | 无比例规定 (NCA 裁量) |
| **美国** | 按州 (NY BitLicense 实质上为高额 surety bond + capital) | NY: 客户资产 100% 同种类 backing | 按州，NY DFS 实际上要求 cold dominant |
| **阿联酋** | 按 VASP 类别 (Exchange 为 AED 1.5M〜) | 信托或 segregated wallet | VARA Rulebook 按 risk-based 规定 |
| **英国** | 无规定 (因现行基于 MLR) | MLR 下未义务化，FSMA 2026+ 扩展拟引入 | 无规定 |

### E. Fit-and-proper / 出资金来源

- **日本**: 主要股东・董事的背景审查 (反社・国际制裁・PEP)、追加出资的来源证明
- **韩国**: 实名账户银行联动 KYC/CDD 实施出资验证 (银行 1:1 规则)
- **香港**: SFC fit-and-proper test (历来的 deeper test of character・经历・财务状况・能力)
- **新加坡**: 适用 MAS Notice on Fit and Proper Criteria (FSG-N16)
- **欧盟**: MiCA Article 81  规定 management body 的 good repute 义务 + 大股东 (qualifying holding) 通知
- **美国**: NY BitLicense 中对 Cybersecurity coordinator / Compliance Officer 个别审查 + Background check
- **阿联酋**: VARA 必须 senior management approval、犯罪记录・破产记录检查
- **英国**: FCA Threshold Conditions + Senior Managers and Certification Regime (SMCR) 适用扩大

### F. AML / Travel Rule 实施

| 极 | 阈值 | Travel Rule | 国内传递基础 |
|---|---|---|---|
| **日本** | 超 10 万円 (汇出 10 万円・收取 30 万円标准) | 2022-04 义务化 → 2026 强化 | TRC-20 或 Sumsub 联动、JVCEA 共通基础 ([[exchanges/jp-vasp-aml-travel-rule-implementation]]) |
| **韩国** | 超 100 万韩元 (约 10 万円) | 2022-03 义务化 | VerifyVASP 等业界共通 |
| **香港** | 超 HK$8,000  | AMLO 下义务 (2023-06-) | 业界 protocol 任意选择 |
| **新加坡** | 超 SG$1,500  | PSA Notice PSN02  下义务 | 业界 protocol 任意 |
| **欧盟** | **超 €1,000 ** (TFR = Regulation 2023/1113) | 完全实施 (CASP 义务) | Sumsub / Notabene 等 |
| **美国** | 超 $3,000  (FinCEN Travel Rule、加密资产与 OFAC 联动) | FinCEN proposed rule pending | TRP (Travel Rule Protocol) |
| **阿联酋** | 超 AED 3,500  | VARA Rulebook 下义务 | VARA approved protocols |
| **英国** | 超 £1,000  (Cryptoasset Travel Rule 2023-09 施行) | 完全实施 | Notabene 等 |

### G. 稳定币发行规则 (cross-link [[fintech/global-stablecoin-regulatory-five-pole-matrix]])

- **日本**: 修订资金决济法 2023-06 施行 → 仅银行・信托银行・资金移动业者的 3 类型可发行 (JPYC 2025-开始运行)
- **韩国**: 虚拟资产用户保护法 2024-07 施行，稳定币监管拟于 2026 另行立法
- **香港**: HKMA Stablecoin Ordinance 2025-08-01 施行 → 法定货币挂钩 stablecoin 须 HKMA 认可
- **新加坡**: MAS Stablecoin Framework 2023-08 发布，SCS (Single-Currency Stablecoin) 认可制
- **欧盟**: 将 MiCA Title III (ART = Asset-Referenced Token) + Title IV (EMT = E-Money Token) 自 2024-06-30 起先行施行
- **美国**: GENIUS Act 2025-07 联邦 stablecoin 法成立 → 联邦 + 州两层结构，亦有 OCC Trust Charter 路径
- **阿联酋**: 由 Central Bank Stored Value Facilities Reg + VARA 分担稳定币
- **英国**: FCA + Bank of England 共同进行 systemic stablecoin 监管，2026 法整备中

### H. 跨境 solicitation / passporting

- **日本**: 面向境内居民的 solicitation 须登记 → 对境外无登记业者由 FSA 发出警告 ([[exchanges/fsa-foreign-exchange-warning-system]])
- **韩国**: 面向境内居民须 VASP 登记，以银行账户要件实质排除外资
- **香港**: 面向香港居民须 SFC VATP，来自外部的 solicitation 受限
- **新加坡**: 面向新加坡居民的 solicitation 适用 PSA，外资须取得 MPI
- **欧盟**: **MiCA passporting 以 1 国认可 → 可接入 27 国** (与美国 50 州的决定性区别)
- **美国**: 各州的 solicitation 监管，存在 Reg D / Reg S 等外资募集路径
- **阿联酋**: VARA 认可覆盖 UAE 全境 (DIFC 除外)，与 ADGM 另行，来自外部的 solicitation 受限
- **英国**: 面向 UK 居民的 financial promotion 须经 FCA 认可业者 (2023-10 强化)

### I. 营销 / 推广规则

- **日本**: JVCEA 广告指引 (必须风险警告、禁止夸大表述、对启用艺人有限制)
- **韩国**: 用户保护法禁止夸大广告，新 token 上市时有风险说明义务
- **香港**: 适用 SFC Code of Conduct，面向零售仅可宣传大型流动性 token
- **新加坡**: **2022-01 MAS guidelines 实质上全面禁止 DPT 服务的零售广告** (机构导向 hub 的象征)
- **欧盟**: MiCA Article 7 (白皮书)・Article 29 (marketing communications) 规定 fair / clear / not misleading 义务
- **美国**: 按州 + 适用 SEC Reg BI / FINRA rule，有影响力人物须 disclosure
- **阿联酋**: VARA Marketing Regulations 2023-12  规定详细规则，对境外 influencer 的使用亦有约束
- **英国**: **Financial Promotion Order + Cooling-off period 24 小时** (新客户须于申请后 24h 等待)、风险警告 + appropriateness assessment 义务

### J. 代表性 enforcement 案例 (1-2 件 / 极)

- **日本**: Coincheck NEM 580 億円流出 (2018-01) → 业务改善命令 (详情 [[exchanges/coincheck-nem-hack-detailed-analysis]]) ; DMM Bitcoin Lazarus 黑客 (2024-05) → 自主停业 ([[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis]])
- **韩国**: Terra-Luna 崩溃 (2022-05) → Do Kwon 被韩国检方起诉・在黑山共和国被捕 ; 因 FTX 客户损失韩国检方调查扩大
- **香港**: JPEX 诈骗 (2023-09) → 香港警方 11 名逮捕，损失超 HK$15 億，成为香港 SFC 警告名单改善契机
- **新加坡**: Three Arrows Capital 破产 (2022-06) → MAS 对 3AC 禁止业务 9 年，Su Zhu/Kyle Davies 与美方司法合作中
- **欧盟**: Binance France AMF 警告 (2023) → 以 2024 SAS Société 形态再认可 ; BaFin 对 Coinbase Germany 个别批准 2021-06
- **美国**: SEC v. Coinbase (2023-06 起诉 → 2024-03 dismissed in part) ; SEC v. Binance.US (2023-06) ; FTX 破产 → SBF 25 年实刑 (2024-03)
- **阿联酋**: Bybit (UAE 总部)・撤出日本市场 (2026-03) ; OKX 因 FIU 违规与美方和解 2025
- **英国**: Binance UK FCA 警告 → 2024 撤出 ; Copper.co 认可后加速 expansion

### K. 披露・财务报告・proof-of-reserves

- **日本**: 向 JVCEA 月度提交客户资产分别管理状况 + 年度决算公布 (向 FSA 提交)
- **韩国**: 向 FIU 月度 STR 报告 + KISA ISMS 年度更新审计
- **香港**: 向 SFC monthly returns + IFRS audited financials 年度提交 + monthly client asset attestation
- **新加坡**: 向 MAS annual financial statement + assurance report (大型 MPI 为 monthly customer asset report)
- **欧盟**: MiCA Article 67  规定 annual report + key information disclosure + 强化 monitoring
- **美国**: NY BitLicense 为 **quarterly financial reports** + **annual audited financials** + **推荐 monthly proof-of-reserves**
- **阿联酋**: VARA Rulebook 规定 **monthly proof-of-reserves attestation 义务** (全球最严频率之一)
- **英国**: MLR 下披露有限 → 预计随 FSMA 扩展而正式化

### L. 值得关注的豁免・例外

- **日本**: NFT 原则上不在 VASP 范围内 (按功能个别判定) ; 银行・信托银行在稳定币发行上适用另一 framework
- **韩国**: 用户保护法全面禁止零售衍生品 → 含机构在内的 CME 系海外承销亦受限
- **香港**: HKMA stablecoin 与 SFC VATP 并行，双重监督
- **新加坡**: DBS Digital Exchange 为 **MAS 个别批准** (与 PSA 另行)，机构专用
- **欧盟**: 既有 NCA 认可业者享 18 个月的 transitional period (2024-12-30 → 2026-07-01) 以迁移至 MiCA
- **美国**: **OCC Federal Trust Charter** 全免 50 州 MTL (Anchorage Digital 2021-01 首获，Circle 2025 取得)
- **阿联酋**: DIFC 在 VARA 管辖外 (DFSA 单独)，ADGM 为 FSRA 独立 (UAE 内 3 系统并存)
- **英国**: MLR 登记仅为 AML 义务，市场行为监管依赖 FSMA (两阶段结构)

### 整合型 (single-passport regime)

- **EU MiCA**: 1 牌照 → 27 国 passporting (全球最广域)
- **日本**: FSA 单一登记，但以 JVCEA 自律监管形成双层
- **韩国**: FSC + FIU 单一，以银行 1:1 规则进一步集中
- **新加坡 / 香港**: 在城邦 / SAR 内单一监督

### 碎片型 (multi-layer regime)

- **美国**: 联邦 (FinCEN/SEC/CFTC/OCC) + 州 (50 州 MTL + NY BitLicense)，全球最复杂
- **阿联酋**: VARA + DFSA + ADGM-FSRA + 联邦 SCA + Central Bank，5 系统并存

### 分阶段整备型 (phased regime)

- **英国**: MLR 2017 (以 AML 为中心，现行) → FSMA 2023 扩展 (2026-2027 phased) 以转向正式监管
- **韩国**: 特金法 (2021) → 用户保护法 (2024) → 稳定币监管 (2026 拟定) 分阶段追加

## 3. 对全球 CEX 战略的含意

- **MiCA passporting** 使取得 EU 据点的竞争自 2024-2025 激化 → Coinbase EU (Luxembourg) / Kraken EU (Ireland) / Crypto.com EU (Malta) / Binance France 的格局确定
- **美国的州别 MTL 成本** 在全美展开时可达数千万美元规模，结果导致生态向少数大型公司集中
- **UAE VARA** 的低法人税 + 全栈牌照 + 零售解禁提供了「全球公信的 floor」→ Bybit / OKX / Crypto.com 的总部迁移趋势
- **APAC 三城分工**: 新加坡 (机构导向) / 香港 (零售解禁・限大型币种) / 日本 (允许零售・白名单严格) 的角色分担固定化
- **美国 GENIUS Act 2025** + **OCC Trust 路径** 使美国重新升至全球最大稳定币发行 hub (Circle / Paxos / 经由 OCC 的 USD bank)

## Related

- [[exchanges/INDEX|exchanges index]]
- [[exchanges/jp-vasp-regulatory-timeline]] — 日本时间线 (本矩阵的 JP anchor)
- [[exchanges/fsa-vasp-registration-system]] — 日本登记制度详情
- [[exchanges/jvcea-self-regulatory-overview]] — 日本自律监管
- [[exchanges/eu-mica-casp-regime-overview]] — 欧盟详情
- [[exchanges/us-crypto-licensing-multi-layer-system]] — 美国详情
- [[exchanges/hk-sfc-vasp-licensing-overview]] — 香港详情
- [[exchanges/sg-mas-dpt-licensing-overview]] — 新加坡详情
- [[exchanges/uae-vara-licensing-overview]] — 阿联酋详情
- [[exchanges/uk-fca-crypto-registration-overview]] — 英国详情
- [[exchanges/korea-cex-five-pillars-comparison]] — 韩国 5 大 CEX 比较
- [[exchanges/jp-vasp-aml-travel-rule-implementation]] — Travel Rule 日本实施
- [[exchanges/jp-vasp-cold-storage-segregation-rules]] — 冷存储详情
- [[exchanges/global-cex-top10-comparison]] — 全球 CEX 10 强定位
- [[fintech/global-stablecoin-regulatory-five-pole-matrix]] — 稳定币版 5 极矩阵 (并行编制中，两者公开后解决链接)
- [[financial-licenses/INDEX|legal/financial licenses]] — 日本一侧的监管边界

## Sources

- FSA: https://www.fsa.go.jp/en/policy/virtual_currency/
- Korea FSC: https://www.fsc.go.kr/eng/
- HK SFC: https://www.sfc.hk/en/Rules-and-standards/Suitability-requirements/Virtual-asset-related-products-and-services
- MAS: https://www.mas.gov.sg/regulation/payments
- ESMA MiCA: https://www.esma.europa.eu/policy-activities/crypto-assets
- NYDFS BitLicense: https://www.dfs.ny.gov/virtual_currency_businesses
- UAE VARA: https://www.vara.ae/
- UK FCA: https://www.fca.org.uk/firms/cryptoassets
