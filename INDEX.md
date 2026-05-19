# Wiki Index

> FinWiki baseline. Last update: 2026-05-20 01:52 JST · 554 knowledge entries across 26 domains, plus 15 domain INDEX docs, 1 JapanFG subdomain INDEX, 1 JapanFG report-source index, 4 root control docs, and 1 template. This cloud sync folder copy was seeded from source workspace public knowledge base `wiki/` on 2026-05-19.

> Navigation status: P0 baseline repaired; P1 domain indexes added for `exchanges`, `fintech`, `systems`, and `methodology`; P2 wikilink path normalization completed for standalone FinWiki use; P3 graph repair completed with high-confidence alias rewrites and planned stubs; P4 promotion batches have completed 61 sourced pages and added `banking/INDEX.md`, `policy-finance/INDEX.md`, `insurance/INDEX.md`, `money-market/INDEX.md`, `securities/INDEX.md`, `finance/INDEX.md`, `payments/INDEX.md`, `loyalty/INDEX.md`, `retail/INDEX.md`, and `manufacturing/INDEX.md`; the `banking/` domain is fully promoted, payment / loyalty / retail-finance plus leasing / BNPL / local-bond lanes are active, and all P3 planned graph-repair stubs are resolved. `ssjbank` is retained only as a deprecated alias-audit page pointing back to [[JapanFG/77-bank|77-bank]]. The long auto-compiled section below remains the legacy entry inventory; domain-level INDEX pages are the canonical routing surface for new expansion.

> Graph rule: every listed knowledge entry should have this index as an inbound link and a managed `Related` block as outbound links.

## Open in Obsidian

- [Open FinWiki by path](obsidian://open?path=FinWiki)
- [Open FinWiki by vault name](obsidian://open?vault=FinWiki) after the vault has been opened once in Obsidian.

## FinWiki domain map

| Domain | Entries | Route | Expansion role |
|---|---:|---|---|
| JapanFG | 166 | [[JapanFG/INDEX|JapanFG INDEX]] | Japanese financial groups, banks, insurers, securities firms, payments, fintech, foreign Japan subsidiaries, resolved P3 graph-repair pages, and the [[JapanFG/financial-reports-2020-index|2020+ financial report source ledger]] |
| exchanges | 112 | [[exchanges/INDEX|exchanges INDEX]] | Japan VASP/CEX, JVCEA/FSA regulation, global CEX/DEX, custody, incidents, and market structure |
| fintech | 102 | [[fintech/INDEX|fintech INDEX]] | Stablecoins, tokenized money, EPI, GENIUS/MiCA/MAS/HKMA, CBDC, embedded wallets, and geopolitical money rails |
| systems | 44 | [[systems/INDEX|systems INDEX]] | Cross-chain infrastructure, BFT/validator economics, account abstraction, Canton/DAML, Besu, Pectra, and compliance tooling |
| agent-economy | 21 | [[agent-economy/ai-agent-payment-protocols-overview|agent-economy]] | AI agent economy and protocol strategy |
| banking | 12 | [[banking/INDEX|banking INDEX]] | Net banks, BaaS, cooperative banking, foreign-bank retreat, and regional-bank structure |
| policy-finance | 7 | [[policy-finance/INDEX|policy-finance INDEX]] | Public finance, development finance, export credit, and policy-bank adjacency |
| insurance | 7 | [[insurance/INDEX|insurance INDEX]] | Insurance solvency, channel mix, reinsurance, and internet-insurer operating models |
| finance | 6 | [[finance/INDEX|finance INDEX]] | Personal/cross-border finance plus IB, M&A, and capital-markets reference pages |
| security | 4 | [[security/bytecode-forensic-three-tier-verify|security]] | Forensics and supply-chain/security patterns |
| money-market | 3 | [[money-market/INDEX|money-market INDEX]] | Call-market, BoJ open-market operations, and Japan money-market structure |
| governance | 2 | [[governance/japan-general-foundation-establishment-requirements|governance]] | Foundations, grants, and public-governance topics |
| manufacturing | 2 | [[manufacturing/INDEX|manufacturing INDEX]] | Manufacturing companies referenced from finance / regional-bank pages |
| retail | 2 | [[retail/INDEX|retail INDEX]] | Retail groups as payment, loyalty, ATM, card, and financial-services distribution platforms |
| trade | 2 | [[trade/jetro-organization-structure|trade]] | JETRO and trade-channel knowledge |
| corporate-strategy | 1 | [[corporate-strategy/partial-spinoff-tax-deferral|corporate-strategy]] | Corporate strategy and tax-structured reorganization reference pages |
| loyalty | 1 | [[loyalty/INDEX|loyalty INDEX]] | Japan points, reward economics, loyalty liabilities, and retail / finance data loops |
| payments | 1 | [[payments/INDEX|payments INDEX]] | Japan cashless-payment, wallet, prepaid, card, PSP, and EPI-adjacent settlement landscape |
| securities | 1 | [[securities/INDEX|securities INDEX]] | NISA, retail brokerage, FIEA / JSDA, and securities-market flow |

## Non-knowledge artifacts

- Control docs: [[SCHEMA|frontmatter schema]] · [[OBSIDIAN-SETUP|Obsidian setup]] · [[log|activity log]]
- JapanFG horizontal domains: [[JapanFG/legal-financial-licenses/INDEX|legal / financial licenses]].
- JapanFG report source index: [[JapanFG/financial-reports-2020-index|financial reports 2020+ index]].
- `.templates/` is retained as the new-entry template surface and excluded from knowledge-entry counts.
- `.ruff_cache/` is a copied tooling cache, not a knowledge domain. It is excluded from counts and can be removed later if FinWiki should stay knowledge-only.

## Link convention

- Wikilinks are normalized for `FinWiki` as standalone vault root. Use a real link such as `[[fintech/mica-overview]]`; the generic pattern is `\[\[domain/slug]]`, not `\[\[wiki/domain/slug]]`.

## Expansion lanes

1. Keep P0/P1 index work structural: counts, routing, and source-of-truth pages before adding new body claims.
2. Add new domain entries through the nearest domain INDEX first, then append one line to [[log|wiki activity log]].
3. For `JapanFG`, update [[JapanFG/INDEX|JapanFG INDEX]] whenever a new entity page is added.
4. For `exchanges`, `fintech`, `systems`, and `methodology`, use their domain INDEX pages as the active backlog and navigation surface.
5. P3 graph-repair stubs have been resolved: promote source-verified pages to `active`, and keep false targets such as [[JapanFG/ssjbank|ssjbank]] as deprecated alias-audit pages rather than deleting graph history.

## fintech

- [[fintech/ai-payment-two-tracks|AI 产业的两条支付轨道：Stripe 模式 vs 稳定币模式]] — Stripe 模式（已通）vs 稳定币模式（未通）
- [[fintech/stablecoin-crossborder-b2b-growth|B2B Stablecoin 跨境決済の爆発的成長（733% YoY、$226B）]] — 733% YoY、$226B
- [[fintech/usd-stablecoin-interchange|USD 稳定币互换市场——$33 万亿轨道上的 0.01% 生意]] — $33 万亿轨道上的 0.01% 生意
- [[fintech/japan-ecisb-license|日本 ECISB 牌照——专为"不碰资金的交易路由中介"设计的轻量牌照]] — 2026/6 施行的轻量牌照，专为「不碰资金的交易路由中介」设计
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] — JPYC・USDC・Project Pax
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC 架构(三型对比)]] — 信託型/銀行型/資金移動業者型 三型架构对比 + §501 denylist 关系
- [[fintech/multi-megabank-consortium-governance|多巨行联合体治理(Progmat / BIS Agorá 模式)]] — Progmat 多巨行联合发行治理结构 + BIS Agorá 中央银行联合体对比
- [[fintech/gold-tokenization-scheme-comparison|日本におけるトークン発行スキーム比較]] — 暗号資産型/ST型/信託型の3スキーム
- [[fintech/japan-third-party-allotment-5-step-flow|日本上場会社 第三者割当増資の 5 段階フロー]] — 弁護士書類 → 当局提出 → 公告 → 払込 → 行使（2026-04-24 新設 · 8938.T ケース）
- [[fintech/japan-listed-company-disclosure-monitoring|日本上場会社 開示情報モニタリング SOP（17 チャネル）]] — 17 チャネル三層 map（TDnet / EDINET / Yahoo / Kabutan / Bloomberg 等）+ T-1 〜 T+30 SOP
- [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] — 資金決済法/金商法/信託業法の三法体系
- [[fintech/japan-bittrade-listing-process|日本 BitTrade 上币流程 — 持牌交易所 Listing 的 8 階段構造]] — JVCEA + FSA + 法律 + 技术 + AML + MM 六重审查 · ENI/BT-gloome 等案件复用
- [[fintech/onchain-finance-vs-crypto-bifurcation|ブロックチェーン業界は「オンチェーンファイナンス」と「クリプト」に DNA レベルで分離した]] — 2024+ 机构金融链上化与 crypto 文化分流
- [[fintech/institutional-stablecoin-deposit-token-thesis|機関投資家市場のステーブルコイン = 銀行発行の預金トークンのみが構造的に解]] — 机构结算需要银行级 KYC / 预金 token
- [[fintech/fx-onchain-as-stablecoin-final-boss|為替 onchain 化はステーブルコイン領域の「ラスボス」]] — 24/365 即时 FX 结算 + Herstatt Risk 解消
- [[fintech/cross-border-sc-via-swift-api|跨境 SC via SWIFT API(Project Pax / Agorá 集成)]] — 通过 SWIFT API 实现跨境稳定币结算 · Project Pax 与 BIS Agorá 集成模式
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI(跨链协议对比)]] — Hyperlane / IBC / CCIP / LayerZero 四种跨链方案在金融机构场景下的对比
- [[fintech/retail-stablecoin-dual-bind|リテール用ステーブルコインは「銀行発行 vs パーミッションレス UX」の二律背反に陥る]] — 决済レイヤー単独では勝ち筋がない
- [[fintech/maina-wallet-kyc-permissionless-ux-bridge|マイナウォレットモデルは「KYC 済水準 × パーミッションレス UX」を両立させる日本特有の解]] — 银行 KYC × マイナ実在確認 × wallet UX
- [[fintech/tether-business-model-short-treasury-yield|Tether (USDT) のビジネスモデル = ユーザー資金で短期米国債を買って金利を直接利益化]] — 短期米国債利息 + 低人員体制
- [[fintech/stablecoin-revenue-split-economics|稳定币利息分润经济学 —— Coinbase / Circle 50% off-platform 模型]] — USDC 分销方利息分账数学
- [[fintech/stablecoin-chain-token-strategy-trilemma|稳定币公链 token 策略三态博弈（发币 / 不发 / 已发）]] — Base / Tempo / Arc 三态均衡
- [[fintech/wall-street-crypto-network-neutrality|Wall Street 加密网络中立投资策略（Visa 双线模式）]] — 同时投资/验证竞争网络
- [[fintech/protocol-hedge-strategy-stripe-pattern|协议层多线 hedge 策略（Stripe MPP / ACP / AP2 / x402 模式）]] — 同时 co-author 多套未收敛协议
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501 将链级 Denylist 合法化]] — 合规稳定币原生链的反向解释
- [[fintech/stablecoin-chain-sovereign-currency-divide|稳定币地缘货币对立框架（美 / 欧 / 日 / 中 / 灰 五极格局）]] — 2026-2030 五极货币网络
- [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + IRS 1099-DA = 跨境加密匿名性彻底终结]] — 全球 CEX reporting + 合法 jurisdiction selection
- [[fintech/three-circles-stablecoin-mra-framework|美 / 欧 / 日 "三个大圆" 稳定币全球合规架构（MRA 互认）]] — GENIUS / MiCA / 日本 EPI 合规圈
- [[fintech/chain-level-ofac-freeze-precedent|链级 OFAC freeze = 美元链级霸权（Bybit Hack 30 分钟先例）]] — issuer-level blacklist + real-time forensics
- [[fintech/em-market-crypto-dollarization-pattern|新兴市场加密美元化模式（尼日利亚 / 阿根廷 / 拉美三角）]] — USDT/USDC 作为事实美元代理

- [[fintech/2022-three-variable-cascade-thesis|2022 三变量级联 —— 当前稳定币 / Fintech / 地缘多极化的共同因果]] — 2025-2026 稳定币爆发 / Tokenized Money 三层分化 / 地缘多极化 / AI Agent 经济 —— 这些"独立潮流" 都是2022 年三个变量同时触发后的级联反应。理解这一点能预测下一个相同结构事件。
- [[fintech/central-banking-function-unbundling|中央银行职能解体五层 —— 货币基础设施重组的宏观结构]] — Bretton Woods 体系（1944）建立的隐含假设是央行同时承担货币系统的 5 项职能，且这些职能捆绑出售。2022 年起，5 项中 4 项（#2-#5）被分别私有化、商品化、链原生化、多极化。央行保留计价单位（#1），其余的解体过程是过去 80 年最大的金融基础设施重组。
- [[fintech/enterprise-procurement-deadline-anchor|企业 IT 采购预算锁定 —— 表面市场截止线的隐藏机制]] — 表面看是"市场截止线"或"协议续约日"的事件，真实驱动力是企业 IT 采购预算锁定周期。机构买家不在实时市场决定，而在 6-12 个月前的预算周期决定。2026-08 Coinbase-Circle 协议续约的真实威力来自其对应 2027 年度企业采购预算锁定时段。
- [[fintech/four-motive-classes-asymmetric-competition|4 类动机不对称分析 —— 不是 7 阵营对称竞争]] — 通用做法是把市场参与者分为"竞争阵营"（如 NDFG deck 的 7 阵营、本调研 v1 的 5 极）。这隐含对称竞争假设。实际上玩家有 4 种结构性动机，对应完全不同的退出博弈。理解动机分类才能预测各玩家在压力下的行为。
- [[fintech/gray-market-dollar-network-formalization|灰色市场美元网络的正式化 —— Tether HK 模板]] — 已支配灰色市场的玩家通过申请主流司法管辖区合规身份实现"洗白"——不是把不法资金合法化，而是把灰色市场已合法但缺乏合规身份的资金接入主流金融。Tether 2026-05 申请 HK 牌照是该模式的典型案例，潜在市值上行 +50% - +150%。
- [[fintech/jurisdiction-list-monetary-protectionism|司法管辖区清单 —— 货币保护主义的新形态]] — GENIUS Act §501(d) 要求美国财政部于 2026-Q3 前发布"允许互操作的境外司法管辖区"清单。入榜的司法管辖区获得 12-18 个月跨境合规独占窗口；入榜的稳定币 / 链获得机构准入"通行证"。这是新型"白名单货币保护主义"，与 1980s 关税壁垒 / 2010s 数据本地化…
- [[fintech/national-license-private-stablecoin-with-dpi-export|国家许可型私营稳定币 + DPI 全球输出战略]] — 印度 ARC token × Polygon 2026 Q1 上线 = 全球首个国家许可型私营稳定币 + 数字公共基础设施（DPI）全球输出模式：政府许可单一私营发行方 + 与 UPI / MOSIP / Aadhaar 集成 + 通过 G20 / 双边协议向新兴市场输出全套 stack → 反美…
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC trust bank charter 作为联邦稳定币银行套利路径]] — OCC（Office of the Comptroller of the Currency）颁发的 trust bank charter conditional approval = 联邦层"稳定币银行"，豁免 50 州 Money Transmitter License (MTL) 且具备 Fe…
- [[fintech/portfolio-winner-structure-arm-analog|组合赢家结构 —— ARM Holdings 的金融基础设施版本]] — 当一个层正在多极化时，最佳战略位置是"给所有极都供货的层"。这种结构在 1990s-2010s 由 ARM Holdings 在芯片 IP 市场实现，在 2024-2030s 由 Visa 在稳定币 / AI Agent 经济中复制。"组合赢家"不押注哪家赢，而是让所有交战方都成为客户。
- [[fintech/regulatory-window-strategic-acquisition|监管立法窗口前的战略买家收购模式]] — 当一项关键监管立法进入 最后 6–12 个月 通过窗口，标的赛道会出现"VC 短期 N 倍 exit + 战略买家溢价抢购"的标准时序。Sequoia 在 2 个月内通过 Stripe 收购 Bridge 实现 5× exit，让 Stripe 在 GENIUS Act 通过前 3 个月拿下稳定币…
- [[fintech/sovereign-fund-crypto-allocation-pattern|主权基金加密基础设施配置模式]] — 中东主权基金 + Wall Street 资管联合体在 2024-2026 进入加密基础设施层，规模 $200–500 亿，模式 = 主权基金作 LP（隐身）+ Wall Street 作 GP（公开）+ 投向稳定币 / L1 / RWA tokenization 三层基础设施。Mubadala…

### Articles & series

- [[fintech/stablecoin-war-articles-2026-05|稳定币战争系列 · 23 篇 publication-grade 长文（2026-05）]] — 23 篇 publication-grade 长文集合 reference（articles/2026-05 系列）

### Regulation · US / GENIUS / SEC / CFTC

- [[fintech/cftc-sec-crypto-jurisdiction|CFTC vs SEC 加密管辖权之争 · FIT21/CLARITY Act 商品证券二分]] — BTC/ETH commodity（CFTC）vs SC/Token security（SEC）· Gensler 收缩 + CLARITY/FIT21 立法
- [[fintech/irs-1099-da|IRS 1099-DA · 美国加密税务报告强制]] — 2025-01 生效 · broker 强制报告 · 与 CARF 协同终结跨境匿名性

### Regulation · EU MiCA / DORA

- [[fintech/mica-overview|欧盟 MiCA · Markets in Crypto-Assets Regulation 概览]] — 2023-06 通过 / 2024-12 全面生效 · 三圆 MRA 欧盟支柱
- [[fintech/mica-emt-art-subcategories-deep-dive|MiCA EMT vs ART 子分类深度 · 监管负担塑形产品]] — 用监管负担把多数项目逼成 EMT · ≥30% 银行存款要求是跨大西洋 MRA 关键鸿沟
- [[fintech/mica-cross-border-implications|MiCA 跨境含义 · USDC ↔ EURC 双向互认 + USA-EU MRA 2026-Q3]] — Circle Europe + EURC 双品牌互认原型 · §501(d) 第一波欧盟入榜预期
- [[fintech/dora-eu-digital-operational-resilience-overview|DORA · EU Digital Operational Resilience Act 五大支柱概览]] — 2025-01-17 生效 · 5 支柱 ICT 风险/事件/测试/第三方/信息共享 · 与 MiCA 双轨
- [[fintech/dora-eu-digital-operational-resilience-ctpp|DORA CTPP 第三方风险 · 把 AWS/Anchorage 间接纳入金融监管]] — CTPP 名单将 AWS/Azure/GCP/Anchorage/Coinbase Custody 间接纳入欧盟金融监管

### Regulation · Asia (HKMA / MAS / Japan)

- [[fintech/hkma-stablecoin-licensing-overview|HKMA 稳定币牌照 · 香港 Stablecoin Licensing Regime 概览]] — 2025-08 通过 · 亚洲第一个完整 SC 牌照框架 · 2026-05-21 首批 9 申请决定
- [[fintech/hkma-stablecoin-licensing-implications|HKMA 牌照战略含义 · Tether HK 非对称赌注 + 中国大陆 SC 通道]] — Tether HK 申请 50-60% 获批 → 母公司估值 +50% 至 +150% 非对称赌注
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB 稳定币储备金要求 · HKMA Reserve Framework]] — 亚洲第一个对标 Basel III FRTB 的 SC reserve framework · 与 §501 / MiCA EMT 三圆差异化
- [[fintech/singapore-mas-payment-services-act-overview|Singapore MAS Payment Services Act + SCS 框架概览]] — PSA + SCS(2023-08)+ DTSP regime 亚洲最完整加密支付立法栈 · 2026-03 MAS-US MRA 签署
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS 战略含义 + 与 HK 对比 · Circle SG hub + DBS/StanChart 通道]] — Singapore=合规美元 SC hub · HK=灰色美元合规化试验场 · 资本流先 SG 后 HK
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型架构 · 信託 / 銀行 / 資金移動業者型概览]] — 全球最 nuanced 的 SC framework · 信託型/銀行型/資金移動業者型 三型差异化
- [[fintech/japan-epi-four-camps-comparison|日本 SC 四阵营对比 · §501(d) 视角下 SBI Circle = #1]] — Progmat/JPYC/SBI Circle/みんなの銀行 四阵营 · §501(d) 视角下 SBI Circle 排序 #1

### Regulation · Basel / FATF / international

- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 加密敞口 · BCBS SCO60 1,250% 风险加权概览]] — BCBS SCO60 Group 1/2 分组 · Group 2 适用 1,250% 风险加权 + 1% exposure cap
- [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 战略含义 · USDC 隐性资本溢价 + BUIDL 银行通道]] — USDC PPSI 银行资本 ~10% vs USDT ~100% · USDC 估值隐性 moat
- [[fintech/aml-cft-fatf-grey-list-overview|FATF 灰名单 / 黑名单 · AML/CFT 国家评估机制概览]] — 40 Recommendations + 11 Outcomes · Black/Grey list 每年两更 · R.15 VASP + R.16 Travel Rule 核心
- [[fintech/aml-cft-fatf-grey-list-cross-border-implications|FATF 评级跨境合规含义 · §501(d) 入榜资格前置过滤层]] — FATF 灰名单决定 SC issuer / OCC charter / §501(d) 入榜资格前置门槛
- [[fintech/fatf-travel-rule-overview|FATF Travel Rule · R.16 VASP $1,000 KYC 信息传递概览]] — VASP 转账 ≥ $1,000 强制 sender/receiver KYC 共享 · Notabene/TRISA/Sygna BTS
- [[fintech/fatf-travel-rule-cross-border-stack|FATF Travel Rule 跨境四层 stack · 各国门槛差异 + §501 协同]] — EU TFR $0 / 日 ¥100,000 / 美 $3,000 · BSA + R.16 + EU TFR + §501 四层 stack

### Sovereign / Geopolitics / SC chains

- [[fintech/sovereign-capital-pool-aramco-anchor|主权资本池规模锚 · Aramco $7T 作为中东数字资产配置上限]] — 全口径主权资本 NPV $7T · 0.5-7% 配置即可超过三圆 MRA $130B
- [[fintech/three-circles-mra-2030-economic-scale|三圆 MRA 经济量化 · $130B 合规圈 vs $384B 灰圈共存模式]] — 三圆合规圈 2030 = $130B · USDT 灰区 = $384B · 长期共存模式
- [[fintech/tokenized-deposit-cumulative-volume-scale|代币化存款累计交易规模模式 · Kinexys $1.5T 作为银行存款代币赛道锚]] — Kinexys $1.5T / 日均 $5B · TD 赛道与 SC 赛道互不重叠

### CBDC / BIS / mBridge

- [[fintech/cbdc-multi-tier-architecture-overview|CBDC 多层架构概览 · 双层 / 直接 / token-based 三范式]] — 双层（e-CNY）/ 直接 / token-based（DREX）三发行架构范式
- [[fintech/cbdc-multi-tier-architecture-three-paradigms|CBDC 三大现役范式 · e-CNY / DREX / 数字欧元]] — e-CNY 双层 · DREX token-based · 数字欧元 混合 · 三种架构案例对比
- [[fintech/cbdc-multi-tier-architecture-tradeoffs|CBDC 架构选择 4 核心权衡 · 中介 / 主权 / 隐私 / 创新]] — 央行选架构 4 权衡 · 金融中介存续/货币主权/隐私/创新空间
- [[fintech/bis-project-agora-overview|BIS Project Agorá 概览 · 7 G10 央行 + 40 商行联合代币化实验]] — 2024.04 BIS 启动 · 7 G10 央行 + 40 商行 · 多边主义代币化基础设施候选
- [[fintech/bis-project-agora-vs-mbridge|Agorá vs mBridge · 2026+ 跨境清算双轨制战略对照]] — 美元锚定+G10 vs 金砖+中东+香港 两个地缘轴 · FRBNY 参与差异
- [[fintech/bis-project-ensemble-overview|HKMA Project Ensemble 概览 · 香港代币化货币沙盒]] — 2024.03 HKMA · HSBC/SCB/BoCHK/Hang Seng + Anchorpoint · 代币化港元存款沙盒
- [[fintech/bis-project-ensemble-vs-mbridge-dual-track|HKMA 双轨战略 · Ensemble 境内 + mBridge 跨境]] — 境内 Ensemble + 跨境 mBridge 双轨 · 香港在三圆 MRA 谈判中的差异化资本
- [[fintech/bis-project-guardian-overview|MAS Project Guardian 概览 · 新加坡代币化资产实证联盟]] — 2022.05 MAS · 25+ 全球机构 · 代币化债券/基金/外汇/碳信用
- [[fintech/bis-project-guardian-vs-agora-asia-three-poles|亚洲代币化基础设施三极 · Guardian × Ensemble × Agorá-via-BoJ]] — Guardian(资产)/ Ensemble(存款)/ BoJ-via-Agorá(主权货币）三极互补
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge · BIS 多 CBDC 跨境结算桥（总览）]] — HotStuff BFT + DLT permissioned · 绕开 SWIFT 各国本币 CBDC PvP atomic settlement
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · BIS 2025 同年切换的双轨对照]] — 2025 BIS 切换跑道 · mBridge 中国主导 vs Agora 美欧主导
- [[fintech/mbridge-six-central-banks-roster|mBridge 6 央行清单与角色（2026-Q2）]] — PBoC/HKMA/BoT/CBUAE/SAMA/BCB · 中国+中东+东南亚+拉美非美元结算雏形
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非美元清算环规模模式 · GDP 覆盖率作为 wholesale settlement 上限]] — 用成员国 GDP 覆盖率作上限 · 2026 H2 $35T 影响范围（全球 GDP 33%）

### Tokenized MMF / RWA / TD

- [[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL · 代币化 MMF 标杆 · "稳定币 yield 基础设施"]] — Securitize 发行 · 8 链 · AUM $2.58B · Moody's Aaa-mf · 卖给 USDB/Frax/Ondo/Ethena/Spark
- [[fintech/blackrock-buidl-sc-issuer-adoption|BlackRock BUIDL · 稳定币与 DeFi 协议储备采用矩阵]] — BUIDL 横跨白圈/灰圈所有 SC issuer + DeFi 协议储备 · BlackRock 中立军火商定位
- [[fintech/apollo-acred-private-credit-tokenization|Apollo ACRED · 私募信贷代币化 · 第二梯队 MMF 的独立战略位置]] — Apollo $700B 平台背书 · 7 链 + Wormhole · 不与 BUIDL 同赛道
- [[fintech/jpmorgan-jpmd-coin|JPMorgan JPMD · 代币化存款 · GENIUS §501 法律分类下的 TD 范式]] — JPMD = TD 而非 SC · 可付息/享 FDIC · Kinexys 日均 $5B/累计 $1.5T

### Stablecoin issuers / products

- [[fintech/paypal-pyusd-stablecoin|PayPal PYUSD · 顶级支付公司首次品牌化的稳定币 · Solana 主战场]] — Paxos 发行 · Solana 主战场 · Paxos→PayPal 80-90% 利息分账
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD · 银行级合规优先稳定币 · XRPL + Ethereum 双链]] — 2024-12 双链同步上线 · Standard Custody NY DFS · 合规优先 / 增长次之
- [[fintech/world-liberty-usd1-political-stablecoin|WLF USD1 · 政治背景稳定币 · 总统家族关联 vs §501 中立性张力]] — Trump 家族关联 + Bridge 分销 · 政治背景稳定币标志性案例
- [[fintech/first-digital-fdusd-hk-stablecoin|First Digital FDUSD · HK 牌照候选 · Binance 主交易对替代 BUSD]] — FDT 发行 · BUSD 替代 · Justin Sun 储备争议 → 牌照推迟 2026-Q3
- [[fintech/frax-frxusd-defi-stablecoin|Frax frxUSD · DeFi 原生稳定币的"半合规化"路线]] — 100% UST 储备 + DAO 治理双轨 · sfrxUSD 7-9% APY · 2026-Q2 接入 BUIDL $200M
- [[fintech/sky-usds-decentralized-stablecoin|Sky USDS · §501 时代最大去中心化稳定币尝试 · MakerDAO 重塑]] — Sky 2024-09 重塑 · USDS $8.5B + DAI $4B · sUSDS via RWA vault 间接持 BUIDL $300M
- [[fintech/m-network-m0-neutral-infrastructure|M^0 / M Network · 中性稳定币基础设施 · "瑞士银行模型"]] — 不发自有品牌 · 为多 issuer 提供共享储备/铸造/治理 · 长尾 SC 基础设施层
- [[fintech/cbbtc-institutional-btc-wrapper|cbBTC · Coinbase 包装 BTC · 机构信任替代 WBTC 的窗口期产品]] — Coinbase 托管 wrapped BTC · 流通 89,000 / 市值 $6.1B · Base 上 TVL $839M

### Issuer-distributor / arbitrage / embedded wallet

- [[fintech/issuer-distributor-incentive-realignment-50-50-model|发行方 vs 分销方 50/50 模型 · Coinbase ↔ Circle 利息分成机制]] — Coinbase-Circle 50/50 利息分成 · Coinbase Q1 2025 稳定币收入 $305M
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Circle Arc 战略 · 发行方收回 50% 分成的 §501 终局]] — Arc 自营 L1 让 USDC 利息不分给 Coinbase 50% · $5B 流通 = $112.5M/年增量
- [[fintech/dual-currency-stablecoin-arbitrage-overview|双币稳定币套利 · §501 时代唯一合法 FX 链上化路径]] — USDC↔EURC↔JPYC 三角 · interchange 0.01% · $33T 轨道上 1% = $3.3B 年化
- [[fintech/dual-currency-stablecoin-arbitrage-legal-hack|双币套利 · §501 法律 hack 与监管脆弱性]] — atomic swap ≠ FX 业务的法律 hack · SEC/OCC/FCA/FSA 重定义即失效
- [[fintech/embedded-wallet-fintech-disintermediation-overview|嵌入式钱包对 Fintech 去中介化 · Privy/CDP/Magic/Web3Auth 四强]] — Privy（Stripe $1.1B）/ CDP / Magic / Web3Auth 四强 · ERC-4337/7702/7715 三件套
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|嵌入式钱包 · Fintech 反吃 Web3 的 Trojan Horse(Stripe 五层)]] — Stripe 五层 collapse L5 Checkout→L4 Privy→L3 Bridge USDB→L2 Tempo→L1 AP2/x402

### Systemic risk patterns

- [[fintech/circular-reserve-asset-flywheel-overview|储备金互锁飞轮 · BUIDL ↔ USDC 系统性循环依赖]] — BUIDL 利息→Circle 储备→BUIDL AUM→利息 自反馈系统性互锁
- [[fintech/circular-reserve-asset-flywheel-risk-cases|储备金互锁飞轮 · 三层系统性风险情景]] — 赎回流动性/集中度框架缺失/反身性 三层结构性风险 · SVB 案例

### Japan stablecoin platforms (fintech 残留 · 非 JVCEA)

- [[fintech/jp-stablecoin-progmat|株式会社 Progmat — 信託型 SC platform]] — **非 JVCEA · デジタルアセット発行プラットフォーム提供者** · 2023-10 設立 · 株主 MUTB 49% + SMBC + Mizuho + NTT Data + JPX · **ST 市場シェア ~68%**(4,522 億円) · SC 発行実績ゼロ(2026-05 時点準備段階) · Project Pax クロスボーダー
- [[fintech/jp-stablecoin-dcjpy|DCJPY / 株式会社ディーカレット DCP — 預金トークン専業]] — **非 JVCEA** · 電子決済等代行業 92号 · 旧ディーカレット(現 S.BLOX)と別法人 · IIJ + SBI + ゆうちょ + KDDI + NTT + MUFG 出資 · 2024-08 商用開始 · **2026-07-01 ホールディングスへ吸収合併予定**

## exchanges

> 2026-05-19 fintech から独立 + 6 ラウンドで横切丰富 · 112 entries: 51 single-entity overviews + 61 horizontal-cut atoms (6 ラウンド累計 + P4 overview promotion). 制度 (JP × 10) + 市場構造 + 周辺生態 (× 12) + CEX サービス層 (× 7) + 主要インシデント (× 6) + 国際比較 制度 (× 10) + 国際比較 プレイヤー (× 4) + DEX/DeFi 設計 (× 7) + 市場現象 (× 4) を網羅.

### Horizontal-cut atoms · 制度 (JP) — 10 entries

- [[exchanges/jvcea-self-regulatory-overview|JVCEA — 日本暗号資産取引業協会 自主規制制度]] — 認定金融商品取引業協会 + 第二種認定資金決済事業者協会 · 5 自主規制機能 · FSA 二重監督
- [[exchanges/fsa-vasp-registration-system|FSA 暗号資産交換業登録制度 — 番号体系・財務局管轄・登録要件]] — 関東/近畿/北海道財務局区分 · 関東第00001号 〜 第00031号 · 登録要件 5 本柱
- [[exchanges/jp-vasp-regulatory-timeline|国内暗号資産 VASP 規制タイムライン (2014-2026)]] — 改正資金決済法 + 金商法 + JVCEA 三層 · 14 マイルストーン
- [[exchanges/jp-vasp-derivative-license-system|国内暗号資産デリバティブ取引業 制度]] — 金商法 × 資金決済法 デュアル登録 · デリバ専業 6 社 · 2 倍レバレッジ上限
- [[exchanges/fsa-business-improvement-orders-history|FSA 業務改善命令 (BIO) 国内 VASP 行政処分履歴 (2018-2026)]] — 9 主要事例 · 5 典型構造 · 規制反射 (JVCEA 設立 + 95% 義務)
- [[exchanges/jp-vasp-cold-storage-segregation-rules|国内 VASP コールド保管 95% + 分別管理制度]] — 3 形態 (信託 / 個別 / 混合) · 主要 VASP 運用例 · グローバル比較
- [[exchanges/jvcea-whitelist-token-listing|JVCEA 取扱銘柄 WhiteList 制度]] — Green/Yellow 二段階審査 · 8 大基準 · 国内 30 vs 海外 2,000+ 銘柄ギャップ
- [[exchanges/jvcea-whitelist-listing-timeline|JVCEA WhiteList 上場銘柄 timeline (2017-2026)]] — 17 → 33 銘柄 · Green List 2022 + 国内独占 (ZPG/NIDT/MONA/JPYC/KAIA)
- [[exchanges/jvcea-type2-associate-membership-system|JVCEA Type 2 (第二種会員) 制度]] — 4 賛助会員 (Saxo/Gaudiy/Trek Labs/Laser Digital) · 海外大手の前哨基地 + Web3 IP
- [[exchanges/jp-vasp-aml-travel-rule-implementation|国内 VASP 犯収法 + FATF Travel Rule 国内実装 (2023-)]] — KYC データ伝達義務 · VASPnet/TRUST 技術スタック · sunrise issue

### Horizontal-cut atoms · 市場構造 + 周辺生態 — 12 entries

- [[exchanges/jp-vasp-ma-consolidation-history|国内暗号資産交換業 M&A 統廃合史 (2018-2026)]] — 10 主要案件 timeline · 3 統合トリガー · 5 系列寡占
- [[exchanges/jp-vasp-parent-company-map|国内 VASP 親会社・株主構造マップ]] — 3 分類 (上場/独立/海外系) + 5 大金融 conglomerate
- [[exchanges/jp-listed-cex-related-companies-matrix|国内上場 CEX 関連企業マトリックス]] — 東証 (Monex/SBI/GMO/JN/セレス) + Nasdaq (CNCK/COIN) + HKEX (OSL) · 投資家ルート
- [[exchanges/jp-crypto-vc-fund-landscape|国内暗号資産 VC + クリプトファンド ランドスケープ]] — 独立系 (gumi cryptos) + CVC (SBI/Monex/GMO/三井/NTT/Sony) + 海外大手 LP
- [[exchanges/jp-crypto-market-maker-otc-layer|国内暗号資産マーケットメイカー / OTC デスク業界]] — B2C2 Japan (SBI 系) + Wintermute + Cumberland + 国内独自 (Crypto Garage/Custodiem)
- [[exchanges/jp-institutional-custody-three-pillars|国内機関カストディ三強構造 — Komainu / Ginco / Fireblocks Japan]] — 技術 (cold/MPC) × 親会社軸 · B2B vendor 層
- [[exchanges/jp-cex-sales-vs-exchange-model-economics|国内 CEX 販売所 vs 取引所 ビジネスモデル経済学]] — スプレッド 2-5% vs maker/taker 0.01-0.2% · 国内独自
- [[exchanges/jp-cex-points-economy-integration|国内 CEX × ポイントエコノミー統合モデル]] — 4 連携 (Mercari/楽天/PayPay/LINE) · CAC 削減 + AUM 増加
- [[exchanges/jvcea-spot-volume-statistics-analysis|JVCEA 国内 spot 取引高 統計分析 (2017-2026)]] — 主要 6 指標 · 販売所 70-80% シェア + top 5 集中 · 韓国/米国比較
- [[exchanges/global-crypto-forensics-vendor-layer|グローバル暗号資産 forensics vendor 層]] — Chainalysis (業界標準) + Elliptic + TRM Labs + Crystal · KYT/screening/investigation · 国内 VASP 海外依存
- [[exchanges/global-cex-prime-brokerage-layer|グローバル暗号資産 prime brokerage 層]] — Hidden Road (Ripple 系) / FalconX / Galaxy (Nasdaq) / B2C2 (SBI 系) / Cumberland · multi-CEX cross-margin
- [[exchanges/cex-matching-engine-wallet-architecture|CEX matching engine + cold/hot wallet 内部架構]] — CLOB/RFQ + FIFO/iceberg · cold/warm/hot 3 層 · multi-sig/HSM/MPC/air-gap

### Horizontal-cut atoms · 国内 CEX サービス層 — 7 entries

- [[exchanges/jp-cex-staking-lending-regulation|国内 CEX ステーキング・レンディング規制]] — 預金類似性回避 + 元本保証禁止 + JVCEA 規則 · 米 SEC vs Kraken 比較
- [[exchanges/jp-cex-nft-marketplace-integration|国内 CEX × NFT マーケットプレイス統合]] — Coincheck NFT / Adam byGMO / LINE NFT / 楽天 NFT · 2021-22 進出 → 2023-26 縮小
- [[exchanges/jp-cex-deposit-token-stablecoin-integration|国内 CEX × 預金トークン / EPI 統合戦略]] — JPYC + Progmat + DCJPY 三極 · SBI VC EP USDC + Crypto Garage SETTLENET
- [[exchanges/jp-ieo-system-and-cases|国内 IEO (Initial Exchange Offering) 制度 + 案件]] — JVCEA 規則 5 要件 · Coincheck PLT 2021 + FNCT 2022 · GMO コイン続発
- [[exchanges/jp-crypto-merchant-payment-lightning|国内暗号資産マーチャント決済 + Lightning Network]] — bitFlyer/Coincheck 決済 + Gaia BTM + Crypto Garage SETTLENET · 規制ステータス不明確
- [[exchanges/jp-vasp-security-audit-certification|国内 VASP セキュリティ・監査・ISMS 認証実態]] — ISO27001 + SOC2 + 内部統制 · EY/PwC/Deloitte/KPMG 寡占
- [[exchanges/jp-crypto-asset-taxation-detailed|国内暗号資産 税制 詳細 — 雑所得 vs 申告分離]] — 雑所得 55% vs 申告分離 20% (35pp 差) · 個人 vs 法人 (25pp 差) · 米 ETF 間接 + 法人化 + 海外移住 · 2026 改正動向

### Horizontal-cut atoms · 主要インシデント — 6 entries

- [[exchanges/jp-vasp-incident-history|国内 VASP 暗号資産流出事件史 (2014-2026)]] — Mt.Gox / Coincheck / Zaif / BITPoint / Liquid / DMM Bitcoin 6 大事件マスター timeline · 規制反射 3 段階 · Lazarus 帰属
- [[exchanges/mtgox-bankruptcy-processing-timeline|Mt.Gox 破綻処理 timeline (2014-2026)]] — 850,000 BTC 流出 · 民事再生→破産→再生再開 · 2024-06 弁済開始 · 12 年処理
- [[exchanges/coincheck-nem-hack-detailed-analysis|Coincheck NEM 580 億円流出事件 詳細分析 (2018-01)]] — ホット 100% + マルチシグ未実装 · 50 日全額 JPY 補償 · JVCEA 設立 + 95% 義務トリガー
- [[exchanges/dmm-bitcoin-lazarus-hack-detailed-analysis|DMM Bitcoin 流出事件 詳細分析 (2024-05)]] — 4,502.9 BTC (482 億円) · TraderTraitor 帰属確認 (FBI+警察庁+DC3 2024-12) · 廃業 + SBI VC 移管
- [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus $14.6 億 hack 詳細 (2025-02)]] — 史上最大 · Safe UI 偽装サプライチェーン攻撃 · 30 分 OFAC freeze · 業務継続
- [[exchanges/ftx-japan-100pct-return-case-study|FTX Japan 顧客資産 100% 返還ケース]] — 世界初の即時全額返還 · 分別管理 + 信託保管 + bitFlyer 提携 · 日本制度の実証

### Horizontal-cut atoms · 国際比較 (制度) — 10 entries

- [[exchanges/fsa-foreign-exchange-warning-system|FSA 海外無登録暗号資産取引所 警告書発出制度 (2018-2025)]] — 8 主要事業者 timeline · 3 対応パターン · App Store 削除要請 (2025+)
- [[exchanges/korea-cex-five-pillars-comparison|韓国 5 大 CEX 制度比較]] — Upbit/Bithumb/Coinone/Korbit/GOPAX · 実名口座銀行 + ISMS 認証 · 単一規制機関 (FSC)
- [[exchanges/hk-sfc-vasp-licensing-overview|香港 SFC VASP ライセンス制度 (VATP regime)]] — Type 1+7 · HashKey/OSL 認可 · 98% コールド + 保険義務 · リテール解禁 2023-08
- [[exchanges/sg-mas-dpt-licensing-overview|シンガポール MAS DPT ライセンス制度]] — PSA + MPI/SPI · リテール広告制限 · 機関志向 · 香港対照
- [[exchanges/uae-vara-licensing-overview|UAE VARA ライセンス制度]] — 世界初独立暗号資産規制機関 (2022-03) · 7 区分 · Binance/Bybit/OKX/Kraken 本拠 · ドバイ hub
- [[exchanges/us-crypto-licensing-multi-layer-system|米国暗号資産取引業 ライセンス重層制度]] — FinCEN MSB + 50 州 MTL + NY BitLicense + OCC Trust · SEC/CFTC 管轄競争
- [[exchanges/eu-mica-casp-regime-overview|EU MiCA CASP (Crypto-Asset Service Provider) regime]] — 2024-12 完全施行 · 10 ライセンス区分 · Coinbase EU / Kraken / Crypto.com / Bitpanda · passporting + DORA
- [[exchanges/uk-fca-crypto-registration-overview|UK FCA crypto-asset registration regime]] — Brexit 後 MLR 2017 AML/CFT 中心 · ~50 社認可 · 2024 financial promotion · 2026-27 phased 拡張
- [[exchanges/switzerland-finma-crypto-valley-overview|スイス FINMA + Crypto Valley エコシステム]] — 4 ライセンス区分 · SEBA/Sygnum 銀行 + SDX + 21Shares ETP · Zug 集積 · DLT Act 2021
- [[exchanges/taiwan-fsc-vasp-licensing-overview|台湾 FSC VASP licensing 制度]] — 2021-07 AML 中心 · MaiCoin/BitoPro/ACE · 2024 専門法立法準備 · アジア最柔軟

### Horizontal-cut atoms · 国際比較 (プレイヤー) — 4 entries

- [[exchanges/global-cex-top10-comparison|グローバル CEX top 10 ランキング比較 (2025-2026)]] — Binance/Coinbase/OKX/Bybit/Upbit/Kraken/Crypto.com/Gate.io/Bitget/KuCoin · 規制ホスト分布
- [[exchanges/global-institutional-custody-five-pillars|グローバル機関カストディ五強]] — Coinbase Custody / Fidelity / Anchorage / BitGo / Komainu · MPC vs Cold vs Multi-sig
- [[exchanges/global-crypto-exchange-bankruptcy-comparison|暗号資産取引所 倒産処理 国際比較]] — Mt.Gox / FTX International / Celsius / Voyager / BlockFi / FTX Japan · 分別管理が弁済速度
- [[exchanges/cex-native-token-strategy-comparison|CEX 自家 token 戦略比較]] — BNB/OKB/HT/KCS/BGB/MX/FTT · buyback burn + 手数料割引 + L1 ガス · SEC リスク · 国内不在

### Horizontal-cut atoms · DEX / DeFi 設計 — 7 entries

- [[exchanges/global-dex-major-five-comparison|グローバル DEX 主要 5 社比較]] — Uniswap (AMM) / Curve (stableswap) / Aerodrome (Base) / PancakeSwap (BSC) / Hyperliquid (CLOB perp)
- [[exchanges/global-perp-dex-five-comparison|グローバル Perp DEX 主要 5 社比較]] — Hyperliquid (圧倒) + dYdX v4 + GMX + Vertex + Drift · CLOB vs AMM/oracle
- [[exchanges/amm-design-evolution|AMM 設計の進化]] — Uniswap v1-v4 + Curve/Balancer/TraderJoe · constant product → stable swap → concentrated → hooks
- [[exchanges/ve33-governance-mechanism|ve(3,3) ガバナンス機制]] — veCRV → Solidly → Velodrome → Aerodrome · lock/vote/bribe/rebase · host alignment
- [[exchanges/solana-ecosystem-dex-comparison|Solana エコシステム DEX 群比較]] — Jupiter aggregator + Raydium/Orca/Meteora AMM + Drift/Phoenix CLOB/perp · memecoin 経済
- [[exchanges/liquid-staking-restaking-cex-exposure|Liquid staking + Restaking エコシステム + CEX exposure]] — Lido (stETH $30B) + Rocket Pool + cbETH + EigenLayer + Renzo · CEX 取扱 + SEC リスク
- [[exchanges/rwa-tokenization-cex-integration|RWA tokenization × CEX 取扱]] — BUIDL / Ondo OUSG / Securitize / Maple / Centrifuge · 機関 prime + Coinbase Custody · Progmat 国内 ST

### Horizontal-cut atoms · 市場現象 — 4 entries

- [[exchanges/btc-spot-etf-japan-impact|Bitcoin spot ETF 米承認の国内 CEX 影響 (2024-01〜)]] — IBIT $100B + Coinbase Custody 受託 · 3 経路 (価格/機関化/ETF 議論) · 制度的障壁
- [[exchanges/korea-kimchi-premium-economics|韓国 Kimchi Premium 経済学]] — 局所 1-10% 価格差 · 資本規制 + 需要過剰 + ISMS · 海外アービトラージ困難
- [[exchanges/cex-api-sdk-ecosystem-comparison|CEX API / SDK ecosystem 比較]] — REST + WebSocket + FIX (機関) · 国内 vs 海外 · CCXT/Hummingbot vendor 層
- [[exchanges/cross-chain-bridge-cex-deposit-withdrawal|クロスチェーン bridge と CEX 入出金経路]] — Wormhole/LayerZero/Axelar/Hyperlane/CCIP · 2022 bridge hack year · 国内 VASP 限定

### Japan crypto-exchange single-entity overviews — JVCEA Type 1 + Type 2 (37 entries)

- [[exchanges/jp-exchange-bitflyer|株式会社 bitFlyer — 日本暗号資産交換業者]] — FSA 関東第00003号 · JVCEA #1002 · 2014 設立 · 国内 spot top class · bitFlyer Holdings 親会社
- [[exchanges/jp-exchange-coincheck|コインチェック株式会社 — 日本暗号資産交換業者]] — FSA 関東第00014号 · JVCEA #1017 · Monex Group 子 · 2018 NEM 580 億円流出 · 2024-12 Nasdaq CNCK 上場
- [[exchanges/jp-exchange-bitbank|ビットバンク株式会社 — 日本暗号資産交換業者]] — FSA 関東第00004号 · JVCEA #1004 · 廣末紀之 · アルトコイン豊富 · 2024 FTX Japan 吸収
- [[exchanges/jp-exchange-gmo-coin|GMOコイン株式会社 — 日本暗号資産交換業者]] — FSA 関東第00006号 · JVCEA #1006 · GMO Internet Group · 暗号資産交換 + 派生 + 外為 FX 3 ライセンス兼業 · 2026 ZPG/WILD 国内初上場
- [[exchanges/jp-exchange-sbi-vc-trade|SBI VCトレード株式会社 — 日本暗号資産交換業者]] — FSA 関東第00011号 · JVCEA #1011 · **3 種牌照唯一保有**（spot + 派生 + EP USDC）· TaoTao (2021-12) → DMM Bitcoin (2025-03) → BitPoint (2026-04) 連続吸収
- [[exchanges/jp-exchange-bittrade|ビットトレード株式会社 — 日本暗号資産交換業者]] — FSA 関東第00007号 · JVCEA #1007 · 命名 3 段階（ビットトレード → フォビジャパン → ビットトレード）· 株主 Sinohope SG / 東海東京FHD / FPG
- [[exchanges/jp-exchange-rakuten-wallet|楽天ウォレット株式会社 — 日本暗号資産交換業者]] — FSA 関東第00015号 · JVCEA #1018 · 旧みんなのビットコイン · 2018-10 楽天取得 · 楽天ポイント連携 · 16 銘柄
- [[exchanges/jp-exchange-binance-japan|Binance Japan 株式会社 — 日本暗号資産交換業者]] — FSA 関東第00031号 · JVCEA #1016 · 2022 SEBC 買収 → 2023-08 開始 · **2025-10 PayPay 40% 出資** · 65 銘柄（2026-01）· 親会社グローバルは 2018/2021 警告書発出歴
- [[exchanges/jp-exchange-mercoin|株式会社メルコイン — 日本暗号資産交換業者]] — FSA 関東第00030号 · JVCEA #1039 · メルカリ子 · 2023-03 BTC サービス開始 · 売上金で BTC 購入の独自 UX · BTC→ETH (2024-05)→XRP (2025-04) 拡張
- [[exchanges/jp-exchange-dmm-bitcoin|株式会社DMM Bitcoin — 日本暗号資産交換業者（former VASP）]] — 旧 FSA 関東第00010号 · 2024-05-31 流出 **4,502.9 BTC（約482億円相当・Lazarus/Trader Traitor 帰属）**· 2024-12 サービス停止 · 顧客資産 SBI VCトレード移管
- [[exchanges/jp-exchange-money-partners|株式会社マネーパートナーズ — 日本暗号資産交換業者]] — FSA 関東第00001号 = 国内初登録 · JVCEA #1001 · FX 主業（2025-06 外為どっとコム承継）+ 暗号資産 CFD 4 銘柄 · 親会社 2025-02 TOB 上場廃止 · 縮小フェーズ
- [[exchanges/jp-exchange-custodiem|株式会社 Custodiem — 日本暗号資産交換業者]] — FSA 関東第00002号 · JVCEA #1003 · **法人番号 7010401115356 同一: QUOINE(2014) → FTX Japan(2022-04) → Custodiem(2024-08)** · bitFlyer Holdings 2024-07 完全子会社化 · クリプトカストディ事業転換中
- [[exchanges/jp-exchange-btcbox|BTCボックス株式会社 — 日本暗号資産交換業者]] — FSA 関東第00008号 · JVCEA #1008 · 独立系 spot 老舗(2014) · 資本金 22.27 億円 · BTC/ETH/BCH/LTC/DOT 等
- [[exchanges/jp-exchange-zaif|株式会社 Zaif — 日本暗号資産交換業者]] — FSA **近畿第00001号** · JVCEA #1014 · **旧テックビューロとは別法人**(法人番号で確認) · 5段階法人変遷 · **2025-07 JN グループ(6634)完全子会社化** · 取扱 24 銘柄
- [[exchanges/jp-exchange-line-xenesis|LINE Xenesis株式会社 — 日本暗号資産交換業者]] — FSA 関東第00017号 · JVCEA #1020 · LINEヤフー(LY Corporation) 100% 子 · **2026-06-01 サービス全面終了確定**(2026-03-03 公告) · LINE BITMAX 運営 · 8 銘柄 · LINK→Finschia→KAIA 変遷
- [[exchanges/jp-exchange-okcoin-japan|オーケーコイン・ジャパン株式会社 — 日本暗号資産交換業者]] — FSA 関東第00020号 · JVCEA #1023 · OKX グローバル系 · **2024-08「OKJ」リブランド**(商号不変) · 販売所 49 銘柄
- [[exchanges/jp-exchange-gate-japan|Gate Japan株式会社 — 日本暗号資産交換業者]] — FSA 関東第00018号 · JVCEA #1021 · **前身 LastRoots 株式会社**(c0ban トークン運営) · **2024-12 Coin Master 全株買収で Gate.io 系列入参** · 2026-04 c0ban 取引所廃止 · 過渡期
- [[exchanges/jp-exchange-sblox|S.BLOX株式会社 — 日本暗号資産交換業者]] — FSA 関東第00016号 · JVCEA #1019 · **旧ディーカレット(2018) → Amber Group(2022-02) → ソニーグループ傘下(2023-08) → S.BLOX 改称(2024-07)** · TaoTao とは別法人 · Soneium 連携戦略 · 6 銘柄
- [[exchanges/jp-exchange-osl-japan|OSL Japan株式会社 — 日本暗号資産交換業者]] — FSA 関東第00023号 · JVCEA #1028 · **旧 CoinBest 株式会社**(2017-08-25 設立) → **2025-02-06 OSL Japan 改称** · 親会社 OSL Group(HKEX 863.HK) · 5 銘柄(業界最小水準)
- [[exchanges/jp-exchange-crypto-garage|株式会社 Crypto Garage — 日本暗号資産交換業者]] — FSA 関東第00029号 · JVCEA #1035 · DG × 東京短資合弁(2018-09) · **野村 HD 2021-10 第三者割当** · Blockstream 技術パートナー · 機関向けインフラ特化(SETTLENET PRO/CUSTODY/OTC) · リテール非対応
- [[exchanges/jp-exchange-digital-asset-markets|株式会社デジタルアセットマーケッツ — 日本暗号資産交換業者]] — FSA 関東第00024号 · JVCEA #1029 · **貴金属連動型 SC 専業**(ZPG=金/ZPGAG=銀/ZPGPT=プラチナ 3 銘柄のみ) · 株主 **JPX + 三井物産 + マネックスグループ**等大手金融機関連合
- [[exchanges/jp-exchange-mercury|株式会社マーキュリー (CoinTrade) — 日本暗号資産交換業者]] — FSA 関東第00025号 · JVCEA #1030 · **株式会社セレス(東証プライム 3696) 100% 子会社** · 代表都木聡 · **ビットバンクが関係会社** · 6 銘柄
- [[exchanges/jp-exchange-backseat-exchange|BACKSEAT暗号資産交換業株式会社 — 日本暗号資産交換業者]] — FSA 関東第00026号 · JVCEA #1031 · **旧称 株式会社coinbook**(2018-05 設立) · 商号に「暗号資産交換業」を含む異色設計 · ADA/NIDT 取引 · **元 bitFlyer 社長・元 JVCEA 会長 三根公博 監査役**
- [[exchanges/jp-exchange-tokyo-hash|東京ハッシュ株式会社 — 日本暗号資産交換業者]] — FSA 関東第00027号 · JVCEA #1032 · **HashKey Digital Asset Group(香港) 100% 子会社** · 代表鄧超(HashKey Capital CEO 兼任) · BTC + ETH 2 銘柄限定 · 機関向け
- [[exchanges/jp-exchange-gaia|株式会社ガイア — 日本暗号資産交換業者]] — FSA 近畿第00004号 · JVCEA #1034 · **日本唯一の暗号資産自動両替機 BTM 専業**(2022-08 国内初稼働) · BTC/ETH/ADA 3 銘柄 · 資本金 2,990 万円 · 関西所在 VASP 2 社のうちの 1 社 · 2026-05 BTM 一時停止中
- [[exchanges/jp-exchange-coinbase-japan|Coinbase 株式会社 — 日本暗号資産交換業者(dormant)]] — FSA 関東第00028号 · **JVCEA 非加盟** · 親会社 Coinbase Global(NASDAQ COIN) · 2021-08 サービス開始 → 2023-02 リテール撤退 → FSA 持照のまま dormant 継続
- [[exchanges/jp-exchange-monex|マネックス株式会社 — 暗号資産デリバティブ取引業者]] — JVCEA #1024 · 金商 第165号 · **デリバ専業**(spot は子会社 Coincheck #1017) · 親会社マネックスグループ(東証プライム 8698) · 本業ネット証券
- [[exchanges/jp-exchange-bi-fxtrade|SBI FXトレード株式会社 (BI FXTRADE) — 暗号資産デリバティブ取引業者]] — JVCEA #1026 · 金商 第2635号 · **デリバ専業**(FX 主業 34 通貨ペア + 暗号資産 CFD 6 銘柄) · SBI リクイディティ・マーケット 100% 子会社 · 2020-08 CFD 開始
- [[exchanges/jp-exchange-traders-securities|トレイダーズ証券株式会社 — 暗号資産デリバティブ取引業者]] — JVCEA #1037 · 金商 第123号 · **デリバ専業** · 親会社トレイダーズホールディングス(東証スタンダード 8704) · 1999 設立 FX 主業 · 暗号資産 CFD「みんなのコイン」5 銘柄
- [[exchanges/jp-exchange-sbi-securities|株式会社SBI証券 — 暗号資産デリバティブ取引業者]] — JVCEA #1041 · 金商 第44号 · **国内最大ネット証券 口座 1,500 万** · 暗号資産 CFD「SBI CFD」2025-08 開始(付帯) · 親会社 SBI HD(東証プライム 8473)
- [[exchanges/jp-exchange-goldenway-japan|ゴールデンウェイ・ジャパン株式会社 — 暗号資産デリバティブ取引業者]] — JVCEA #1040 · 金商 第258号 · 親会社 FXTF HOLDINGS Pte. Ltd.(シンガポール) 100% 子会社 · BTC/ETH 4 ペアのみ ニッチ
- [[exchanges/jp-exchange-dmm-com-securities|DMM.com 証券株式会社 — 暗号資産デリバティブ取引業者]] — JVCEA #1043 · 金商 第1629号 · デリバ登録あり vs **公式 CFD 22 銘柄に暗号資産なし** = 登録済・非公開(または停止中) · 廃業 DMM Bitcoin とは別法人
- [[exchanges/jp-exchange-jpyc|JPYC 株式会社 — 円ペッグ stablecoin 発行体]] — JVCEA #1042 · FSA **資金移動業 第00099号**(暗号資産交換業ではない) · 円ペッグ stablecoin JPYC 発行体 · **2026-04 シリーズ B 28 億円**(メタプラネット + 住友生命 参加) · JPYC EX 5 億円・1 万件(2025-12)
- [[exchanges/jp-exchange-saxo-bank-japan|サクソバンク証券株式会社 — JVCEA Type 2]] — #2027 · 親 Saxo Bank A/S(デンマーク) · **FSA 暗号資産交換業登録ゼロ・暗号資産 CFD 取扱記載なし** · 加盟理由公表されず
- [[exchanges/jp-exchange-gaudiy|株式会社 Gaudiy Financial Labs — JVCEA Type 2]] — #2033 · **Web3 IP ファンエコノミープラットフォーム事業者**(暗号資産交換業ではない) · 親 Gaudiy Group(設立 2018 · 石川裕也 CEO) · 累計調達 **134 億円**(ソニー G + バンダイナムコ + 集英社 + 講談社) · MyAnimeList 傘下
- [[exchanges/jp-exchange-trek-labs-japan|Trek Labs Japan 株式会社 — JVCEA Type 2 (Backpack 日本進出)]] — #2034 · **FSA 未登録(申請準備中)** · 親 Backpack Exchange(元 FTX 系 Armani Ferrante 創業 · Coral 出資 FTX 破綻で 72% 喪失) · 日本代表 Can Sun · グローバル累積 $60B / MAU 50 万人超
- [[exchanges/jp-exchange-laser-digital-japan|Laser Digital Japan 株式会社 — JVCEA Type 2 (Nomura)]] — #2037 · 親 Laser Digital Holdings AG(野村 HD 100% 子・スイス本社 2022-09 設立) · 代表 工藤英明 · Komainu Board に Laser Digital 幹部参画 · 野村 FY3Q 損失計上・中長期育成方針

### Japan custody / wallet infrastructure (非 JVCEA · 3 entries)

- [[exchanges/jp-custody-ginco|株式会社 Ginco — B2B custody/wallet infra]] — **非 JVCEA · 暗号資産交換業ではない B2B インフラ提供者** · 設立 2017 · 創業者 森川夢佑斗 · Ginco Enterprise Wallet/Ginco Node 提供 · 2026-04-01 経営体制変更(代表 坂根遼) · 競合 Komainu / Fireblocks Japan
- [[exchanges/jp-custody-komainu|Komainu Holdings Limited — 機関 cold custody (Nomura 系)]] — **非 JVCEA · 英国 Jersey 法人** · 2018 設立 (Nomura HD + CoinShares + Ledger 三者合弁) · 機関・主権国家向け cold custody · UAE 政府等顧客 · 🆕 Propine 買収 (2024-10 Singapore) アジア展開 · Board dual-anchor: Laser Digital(Steve Ashley/Jez Mohideen) + **Blockstream(Adam Back/PeterPaul Pardi)**
- [[exchanges/jp-custody-fireblocks-japan|Fireblocks Japan — MPC custody (海外 vendor)]] — **非 JVCEA · グローバル親 Fireblocks Inc.** (NY HQ · 2018 Israel ルーツ) · MPC custody + policy engine · 2,400+ 機関 / $10T+ 取引 · Series E $550M ($8B valuation) · 日本: Tokyo 5 名 · 三井物産 MDC (Zipangcoin RWA) + SMBC/Ava Labs/TIS SC(2025-04) + みんなの銀行 + CoinTrade

### Japan crypto-bank credit facilities (1 entry)

- [[exchanges/jp-crypto-bank-credit-facilities|CEX × 日本銀行 無担保授信実績図譜（Fintech 行业情报）]] — bitbank × きらぼし先例 + CEX 系融资对照

### 海外無登録 · FSA 警告書発出歴 jp-foreign-exchange-* (8 entries)

- [[exchanges/jp-foreign-exchange-binance-holdings-legacy|Binance Holdings Limited — 解消済 legacy]] — グローバル親会社(CZ → Richard Teng) · FSA 警告 2 回 (2018-03 / 2021-06) · **2022-10 Binance Japan 設立で解消** · 2023-11 米 DOJ 43 億ドル和解 · 海外大手で日本法人化により FSA 無登録状態を自力解消した **唯一の主要事例**
- [[exchanges/jp-foreign-exchange-bybit|Bybit Fintech Limited]] — ドバイ拠点 2018 設立 Ben Zhou · **FSA 警告 3 回(最多)** (2021-05/2023-03/2024-11) · グローバル取引高 top 2 級 · 2025-02 史上最大ハック $15 億 (Lazarus) · 🚨 **2026-03 末 日本居住者向けサービス完全終了** · FIU-IND + UAE VARA 登録
- [[exchanges/jp-foreign-exchange-bitget|Bitget Limited]] — シンガポール拠点 2018 設立 · CEO Gracy Chen · FSA 警告 2 回 (2023-03/2024-11) · Copy Trading 機能著名 · BGB トークン発行体
- [[exchanges/jp-foreign-exchange-mexc|MEXC Global]] — シンガポール拠点 2018-04 設立 · CEO John Chen Ju · FSA 警告 2 回 · **アルトコイン 2,376 銘柄(上場数最多級)** · 🆕 2025-02-07 App Store 削除要請 · MX トークン
- [[exchanges/jp-foreign-exchange-kucoin|KuCoin]] — Mek Global Limited(セーシェル) · FSA 警告 1 回(2024-11) · 🚨 **2025-01 米 DOJ 和解 $297M (Bank Secrecy Act 違反)** · 創業者 2 名起訴(2024-03 係属中) · CEO Johnny Lyu → BC Wong · KCS + KCC
- [[exchanges/jp-foreign-exchange-bitcastle|bitcastle LLC]] — セントビンセント登記 · **日本人代表 関根義光**(海外無登録 9 社中唯一の日本人代表) · SNS 20 万超 + サナエトークン騒動テレビ出演 · FSA 警告 1 回(2024-11) · 2025-04 二重警告(証券・FX 業)
- [[exchanges/jp-foreign-exchange-lbank|LBank Exchange]] — 運営 Superchains Network Technology(香港登記) · 創業 Eric He · FSA 警告 1 回(2024-06) · 代表者・所在地ともに FSA 公表上「不明」 · WFCA = World Friendship Cash
- [[exchanges/jp-foreign-exchange-bitforex|Bitforex Limited]] — セーシェル登記 2017 設立 · 共同創業者 Xinyao (Jason) Luo · FSA 警告 2 回 (2020-06/2023-03) · 🚨 **2024-02 ホットウォレット $56.5M 流出・サービス停止 → exit scam 疑い** · 香港警察調査 · 現実質閉鎖

### DEX 模式 patterns (2 entries · L2 native DEX flip / veToken flywheel)

- [[exchanges/native-dex-flip-incumbent-pattern|L2 原生 DEX 反超 incumbent 模式]] — EVM 多链历史中，原生 DEX 在 L2 主场反超 incumbent（通常 Uniswap）极罕见。Aerodrome 在 Base 上反超至 63% DEX 量份额，是首个有完整复盘的案例。其机制 = ve(3,3) + L2 主导方利益绑定 + 关键 wrapped 资产配对池 + 跨链合…
- [[exchanges/vetoken-host-protocol-flywheel|veToken × 主导方 DEX 自循环飞轮 —— L2/L1 主导方的链上闭环]] — L1/L2 主导方通过持有原生 DEX 的 ve 治理代币，引导 emission 流向自家关键资产池（如 wrapped BTC），既获得排他性流动性，又在该资产托管费上完成 链上闭环回流主业。Coinbase × Aerodrome × cbBTC 案例年化 $130–250M，是 EVM 多…

## agent-economy

- [[agent-economy/ai-company-payment-landscape|AI 公司收款方式现状（2026 年 4 月）]] — 2026 年各主要 AI 公司海外收款路径对比
- [[agent-economy/agent-actorship-debate|Agent 主体性辩论：四个阵营]] — 四个阵营：11 名思想家翰林院
- [[agent-economy/2026-04-08_agent-payment-infrastructure-research|Agent 支付基础设施研究报告]] — ACP/A2A/MCP/x402 四大协议并立格局
- [[agent-economy/claude-code-extension-architecture|Claude Code 扩展组件架构——Agent 生态的基础设施分层]] — 六大组件 + Marketplace + 层级合并规则
- [[agent-economy/skill-market-monetization|Skill 市场收费化]] — LLM/Skill 两层分工，A2A 交易催化

### Protocol framework

- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 支付协议总图 · 七协议格局概览]] — 7 协议三层格局 · 意图/传输/上下文 · FIDO 接管 AAIF 中立化
- [[agent-economy/ai-agent-payment-protocols-seven-layers|AI Agent 支付七协议分层表 · 意图 / 传输 / 上下文]] — 意图 3(AP2/SPT/ACP)+ 传输 2(x402/TAP)+ 上下文 2(MCP/A2A)
- [[agent-economy/ai-agent-payment-protocols-commoditization|Agent 支付协议 commoditization 与价值上移 · Stripe 五层 + Privy 双默认]] — 协议层 commoditization 后价值上移到 distribution 控制点

### AP2 (Google)

- [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol 概览]] — Google 2025-09 发布 / 2026-Q1 v1.0 · 绑 Google Wallet/Pay + Gemini + Verified Credentials
- [[agent-economy/ap2-technical-spec|AP2 技术规范 · Mandate · Payment Intent · Settlement Adapter]] — Authorization Mandate + Payment Intent + Wallet Adapter 三件套
- [[agent-economy/ap2-adoption|AP2 采用版图 · Google 闭环 vs 协议四国杀]] — Google Pay 6 亿用户 + Gemini + W3C VC + fraud AI 四底座 agent-payment 闭环

### x402 / ERC-7715

- [[agent-economy/x402-http-payment-overview|x402 · HTTP 402 复活的 AI agent 支付协议（总览）]] — Coinbase 2025-05 · HTTP 402 复活 · API 先付钱再返数据 · USDC on Base
- [[agent-economy/x402-cloudflare-aws-edge-integration|x402 x Cloudflare / AWS · 边缘层默认支付组件]] — Cloudflare Workers + AWS API Gateway 集成 · web infrastructure 默认 payment rail
- [[agent-economy/erc-7715-overview|ERC-7715 概览 · Wallet Permissions 与 AI Agent 自动支付]] — scoped wallet permissions · agent 一次授权 scope 内自动执行
- [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 与 agent payment stack · x402 + AP2 + 4337/7702 协同]] — 四层 stack · HTTP/x402 + 协商/AP2 + 授权/7715 + 钱包/4337+7702

### Embedded wallet & infrastructure

- [[agent-economy/privy-embedded-wallet-overview|Privy · Stripe 子公司的嵌入式自托管钱包（总览）]] — Stripe 2025-06 收购（~$1.1B）· MPC+TEE 切片 · 110M+ 钱包
- [[agent-economy/privy-aws-agentcore-default-wallet|Privy x AWS Bedrock AgentCore · AI agent 经济默认钱包卡位]] — 2026-05-07 AWS Bedrock AgentCore Payments · Privy + Coinbase CDP 双默认
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP · 开发者平台 · AI agent on-chain 钱包基础设施]] — Coinbase 全栈 API/SDK · embedded wallet · AWS AgentCore 默认 distribution
- [[agent-economy/embedded-wallet-network-effects-moat|嵌入式钱包网络效应 · 集成商而非钱包本身的护城河]] — 网络效应不来自 wallet 本身 · 来自集成商生态 · AWS Privy 范式打通时刻

### Mobile / OS layer

- [[agent-economy/solana-saga-seeker-mobile-stack-overview|Solana Saga / Seeker · 移动原生钱包栈（SMS 总览）]] — Seed Vault + MWA + Solana dApp Store · 把 mobile wallet 升级为 OS 级原语
- [[agent-economy/solana-saga-vs-embedded-wallet-os-thesis|Solana SMS vs Embedded Wallet · OS 层 vs App 层路径之争]] — Embedded(Privy/CDP)做进 dapp vs SMS 做成 Android 系统服务

## banking

- [[banking/minna-bank-baas-model|みんなの銀行 BaaS モデル]] — 2モデル差分は UI のみ・30社超・TD戦略（Solana/Fireblocks）（2026-04-24 更新）
- [[banking/quick-deposit-four-methods|クイック入金の4方式分解フレーム]] — 銀行ログイン型/OAuth口座連携型/Pay-easy MPN型/決済代行経由型 · 認証負荷と責任分界の差異
- [[banking/mercari-bank-license-stack|メルカリバンクのライセンス三層構造]] — 電代業×資金移動業×銀行業の三層・8機能×4ライセンス層の階段表

## business


### 8 信号案例人物模板（blockchain-research 2026-05）

- [[business/christine-moy-talent-signal-jpm-apollo|关键人才跨机构流向作为产业预测信号 · JPM Onyx → Apollo 案例]] — 早期关键技术建设者跳槽 = 产业重心迁移前置信号
- [[business/hester-peirce-sec-regulatory-pivot-case|监管转向关键官员案例 · 个人意识形态 + 制度授权（Hester Peirce / SEC）]] — Peirce + Lummis + Atkins 三角共振
- [[business/jamie-dimon-anti-crypto-pivot-case|反加密 CEO 转向支持的被动适应案例 · Jamie Dimon / JPM Kinexys / JPMD on Base]] — 长期反加密 CEO 的被动适应模板
- [[business/kitao-yoshitaka-sbi-independent-strategy-case|独立路线案例 · 拒绝产业联盟 + 押注跨境合规价值（北尾吉孝 / SBI）]] — 北尾拒绝 Progmat 走 SBI x Circle
- [[business/larry-fink-blackrock-digital-asset-template|资管巨头加密合规三角模板 · ETF + RWA tokenization + 政治影响力（Larry Fink / BlackRock）]] — 资管巨头加密复制母版
- [[business/matt-huang-triple-role-coi-template|三重身份 COI 模板 · VC GP + 大客户 Board + 被投公司 CEO 三角不可复制结构]] — Matt Huang(Paradigm GP + Stripe Director + Tempo CEO) · 不可复制 hedge 结构
- [[business/paolo-ardoino-tether-business-model-template|40 人体制 + 短期美债套利商业模式模板 · Tether / Paolo Ardoino]] — 人均利润 $388M/年 · 必须放弃 KYC + 地缘 hedge 替代监管
- [[business/sandeep-nailwal-polygon-india-dpi-pattern|国家级抱团赢家模式 · 反美元 DPI 联盟与新兴市场链路供应（Sandeep / Polygon / India）]] — Polygon 绑定印度 ARC + Reliance Jio 4.5 亿用户 + DPI 联盟

## finance

- [[finance/fire-math-reverse-derivation|FIRE 数学反推框架]] — 目标本金 = 年支出 × 25 · 缺口分析 + 安全垫设计
- [[finance/multi-jurisdiction-identity-tax-leverage|跨境身份组合的税务杠杆]] — 资本利得 + 继承 + 所得税 3 维度 · Phase 3 行权

## writing


## trade

- [[trade/jetro-members-gateway-model|JETRO Members 有料会員制は B2B 提案の入口ゲート]] — 有料メンバーズ制度の実態と「入口商品」性格
- [[trade/jetro-organization-structure|JETRO は会員組織ではなく経産省傘下の独立行政法人]] — 经产省傘下的独立行政法人（非会员组织）

## JapanFG

- [[JapanFG/INDEX|JapanFG namespace 索引]] — 日本金融集团 entity 页 tracker（145 entity entries + INDEX）· P0-P14 完成
- [[JapanFG/mufg|三菱 UFJ FG (MUFG)]] — 日本最大金融集团 · 商業銀行 + 信託 + Morgan Stanley JV + アジア海外
- [[JapanFG/smfg|三井住友 FG (SMFG)]] — 日本第 2 大 · SBI 提携 + Olive 統合 app · 個人デジタル統合最先端

## strategy


## lifestyle


## m-and-a


## governance

- [[governance/japan-general-foundation-establishment-requirements|日本 一般財団法人 設立要件・プロセス]] — 公益 vs 一般の使い分け・最低 300 万円・理事 3 人以上
- [[governance/japan-research-grant-map-2026|日本 研究助成金 map（2026 年度）]] — 文部科学省・JST・民間財団の系譜整理

## frontend


## methodology



## security

- [[security/wayback-machine-as-forensic-tool|主动 de-published 内容救回 — Wayback Machine 作为 forensic 武器]] — 403/404 不是终点；用历史快照救回项目方撤下的白皮书 / docs / PDF 并保留证据链
- [[security/bytecode-forensic-three-tier-verify|智能合约 bytecode forensic — 三层 verify 技术]] — 链上 bytecode vs GitHub compile、PUSH4 selector 反推、跨链 verified twin fingerprint
- [[security/forensic-identity-anchor-chain|团队真实身份 forensic anchor chain — 多源指纹拼合]] — TLS / GitHub / email / LinkedIn / commit author / CLI path 多源拼合，识别门面团队与真实开发者
- [[security/module-path-confusion-supply-chain-attack|Module path confusion + LICENSE strip = supply chain attack 三连击]] — module path 冒名、replace 劫持、LICENSE 删除组合形成 fork/rebrand 供应链风险

## systems

- [[systems/hook-enforced-compliance|Hook-Enforced Compliance（Hook で強制される規則順守）]] — ドキュメントだけでは守れない規則は Hook で実行強制（Life OS v1.6.3 ケース）
- [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）]] — 阈值 BFT + BLS 聚合签名 + Rust 实现
- [[systems/post-quantum-blockchain-day1-integration|抗量子签名 day-1 集成的经济学（FIPS 205 SLH-DSA on Arc）]] — 签名体积、gas 与 10 年保险
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT 架构本质分歧（mempool 抽象之争）]] — Chain-BFT 审计友好 vs DAG-BFT 高吞吐

- [[systems/eip-7708-native-asset-erc20-event-compat|EIP-7708 native asset → ERC-20 event 索引兼容]] — EIP-7708 让 native asset 的 transfer 自动 emit 标准 ERC-20 Transfer(from, to, value) event，完全复用 Etherscan / Dune / TheGraph / Alchemy / Infura 索引基础设施，零迁移成本…
- [[systems/formal-spec-implementation-codesign|形式化规范 ↔ 实现 co-design —— Quint × Malachite 范式]] — 强一致性系统的新工程范式：形式化规范（TLA+ / Quint MBT）与生产实现（Rust）在同一 PR 内 co-design 并 co-evolve，而非传统的"先写论文 → 数年后做实现"。Arc 链使用 Informal Systems 的 Quint × Malachite 在同一 c…
- [[systems/l1-progressive-decentralization-three-phase|L1 渐进式去中心化三阶段路径]] — 合规导向的新 L1 几乎都采用三阶段去中心化路径：PoA（受信任 N 节点）→ 许可 PoS（白名单 staking）→ 治理 PoS（开放 staking + on-chain governance）。Circle Arc 是当前最透明披露三阶段 KPI 触发条件的案例，构成"满足 GENIUS…
- [[systems/multi-proof-aggregation-fault-prover|多证明系统聚合 fault prover 架构]] — Rollup 的 fault prover 系统从"单一证明范式"演进到"多证明聚合 + 单字节 type tag 路由"。Base Azul Rust 客户端在 aggregate_verifier.rs 通过 proofBytes[0] 区分 TEE（type 0）+ ZK（type 1），实…

### BFT validator economics

- [[systems/bft-validator-economy-overview|BFT validator 经济学概览 · 四变量与机构链退化]] — staking yield / slashing / MEV / 集中度 · 机构链 validator 退化为运营经济
- [[systems/bft-validator-economy-four-variables|BFT validator 经济四变量 · yield / slashing / MEV / 集中度]] — 4 变量互相耦合 · 调高 yield 引中心化 · 削减 slashing 削安全
- [[systems/bft-validator-economy-tempo-vs-arc|Tempo vs Arc · 机构链 validator 设计两条路径]] — Tempo 4 外部 validator 极简 vs Arc PoA→许可 PoS→治理 PoS 三阶段

### Canton / DAML / Hyperledger Besu

- [[systems/canton-overview|Canton Network 概览 · DAML 智能合约的隐私机构链]] — Digital Asset · sub-transaction privacy · 600+ 机构 / $6T tokenized · JPM 主战场迁回
- [[systems/canton-daml-technical-spec|Canton DAML 技术规范 · 函数式金融合约 + Sub-transaction Privacy]] — DAML functional + obligation-based · 隐私默认隔离 · 监管节点一等公民
- [[systems/canton-mmf-coalition|Canton MMF 联盟 · JPM + GS + BNY + DTCC 反 BlackRock 公链路线]] — JPMD cash + GS DAP MMF + BNY custody + DTCC Ion treasury 全 stack · 反 BlackRock 公链
- [[systems/hyperledger-besu-overview|Hyperledger Besu · EVM 兼容企业链（Quorum 进化）]] — ConsenSys 主导 · Quorum 前身 · JPM 2024-11 Kinexys Chain 重命名 · Besu top 5 贡献者
- [[systems/hyperledger-besu-vs-canton-migration|Hyperledger Besu vs Canton · JPM 主战场迁移路径]] — JPM 2026-2027 H1 从 Quorum/Besu 迁 Canton · DAML 更适合金融合约 + 原生 multi-party atomic

### CCTP V2 / Circle bridge

- [[systems/cctp-v2-overview|CCTP V2 概览 · Circle USDC 跨链 burn-and-mint]] — 2024-11 上线 · 源链 burn + 目标链 mint · 无 wrapped token / 无锁仓桥风险
- [[systems/cctp-v2-technical-spec|CCTP V2 技术规范 · Fast Transfer · Hooks · Attestation Service]] — Fast Transfer($4.34B treasury <1s)+ Hooks(目标链合约触发)+ Attestation
- [[systems/cctp-v2-vs-canton|CCTP V2 vs Canton · 公链路线 vs 私链路线根本对峙]] — 公链中立流动性 vs 私链银行控制 · JPM Kinexys 2026-01 明确不集成 CCTP V2

### Cross-chain four poles (LayerZero / CCIP / Wormhole / Hyperlane)

- [[systems/cross-chain-four-poles-overview|跨链四极架构 · LayerZero / CCIP / Wormhole / Hyperlane + CCTP V2 第五极]] — 4 通用极 + 1 Circle 专用极 · 不同主角监管/性能/链覆盖优先级
- [[systems/cross-chain-four-poles-ccip-institutional|CCIP institutional 默认 · TradFi → DeFi 数据桥的护城河]] — CCIP institutional 默认 · DTCC/SWIFT 11000+ 银行/JPM 客户名单 + RMN 双层
- [[systems/cross-chain-four-poles-selection-decision|跨链选型决策树 · 按主角维度匹配协议]] — SC L1→CCIP / EVM L2 多链→CCIP+LayerZero+CCTP / Solana→Wormhole / 长尾→Hyperlane
- [[systems/chainlink-ccip-institutional-messaging|Chainlink CCIP · 机构级跨链消息（SWIFT/DTCC 主轨）]] — OCR2 + RMN 双层验证 · SWIFT + 7 大银行 2024-09 首次代币化资产跨链 pilot
- [[systems/layerzero-v2-omnichain-messaging|LayerZero v2 · DVN 可配置的全链消息协议]] — 100+ 链 · DVN N-of-M 可配置 · Stargate USDT/USDC retail 月均 $10B+
- [[systems/hyperlane-overview|Hyperlane 概览 · Permissionless Cross-chain Interoperability]] — 唯一 permissionless 通用跨链 · 50+ 链 · ISM 可插拔验证 · Cosmos/Solana 接入 EVM 关键
- [[systems/hyperlane-ism-modular-security|Hyperlane Interchain Security Modules（ISM）· 可插拔验证层]] — Multisig/Optimistic/CCIPRead/Aggregation/Routing/EigenLayerISM 可插拔
- [[systems/hyperlane-vs-layerzero-ccip|Hyperlane vs LayerZero/CCIP · Permissionless vs Gated 路线对照]] — Hyperlane permissionless / LayerZero 半 gated / CCIP 重 gated 三种部署哲学

### Chain abstraction

- [[systems/chain-abstraction-pattern-overview|链抽象模式概览 · 用户不感知底层链的下一层基础设施]] — 2024-2026 UX 范式核心演化 · 用户不感知链 · embedded wallet 逻辑延伸
- [[systems/chain-abstraction-pattern-three-solutions|链抽象三大主流方案 · AggLayer / NEAR / EigenLayer]] — AggLayer 流动性抽象 / NEAR 账户抽象 / EigenLayer 安全抽象 三方向
- [[systems/chain-abstraction-pattern-value-capture|跨链桥 commoditization 与链抽象层价值上移]] — 2020-23 跨链桥高利润 → 2024+ commoditization · 价值上移到链抽象层

### EigenLayer / restaking

- [[systems/eigenlayer-overview|EigenLayer 概览 · Restaking 与 Ethereum 加密经济安全租赁]] — 2023-06 主网 · ETH/LST 二次质押 · 150 亿+ TVL · 40+ AVS · 加密经济安全租赁
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS 机制 · Operator · Slashing · EIGEN 仲裁]] — AVS opt-in slashing + Operator + EIGEN inter-subjective dispute resolution
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer 对新 L1 启动期安全的赋能 · Tempo/Arc 潜在路径]] — restaking 提供启动期租用 ETH 安全 · Arc 已公开探讨 restaking-secured permissioned BFT

### ERC-4337 / 7702 (Account Abstraction)

- [[systems/erc-4337-overview|ERC-4337 概览 · Account Abstraction 的应用层实现]] — 2023-03 主网 · 不改协议层 · UserOp + Bundler + EntryPoint · SCW gas/social/batch/session key
- [[systems/erc-4337-userop-bundler-flow|ERC-4337 UserOp/Bundler/EntryPoint 流程详解]] — alt-mempool + 5 核心组件 UserOp/Bundler/EntryPoint/Paymaster/Aggregator
- [[systems/erc-4337-embedded-wallet-adoption|ERC-4337 embedded wallet 采用版图 · Privy/Coinbase/Alchemy/Safe]] — Privy(Stripe)+ CDP + Alchemy + Pimlico/ZeroDev + Safe · 动摇 CEX 托管价值主张
- [[systems/erc-7702-overview|ERC-7702 概览 · EOA 临时获得 SCW 能力的 Pectra 升级]] — Pectra 2025-05 · Vitalik 起草 · SET_CODE_TX type 0x04 · EOA 临时附加 contract code
- [[systems/erc-7702-vs-erc-4337|ERC-7702 vs ERC-4337 · Ethereum AA 双轨对照]] — 4337 新建 SCW vs 7702 升级现有 EOA · 互补不竞争 · Ethereum AA 双轨格局

### Pectra upgrade

- [[systems/pectra-upgrade-overview|Ethereum Pectra 升级 · 四 EIP 双轨战略总览]] — 2025-Q2 主网 · 7702/7251/7691/2537 四 EIP · L1 厚化 + L2 扩容双轨
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · 机构 staking 经济友好化（2048 ETH 上限）]] — MAX_EFFECTIVE_BALANCE 32→2048(64×)· Lido/Coinbase Cloud 合并验证人 · 中心化压力
- [[systems/pectra-eip-7691-blob-l2-impact|Pectra EIP-7691 · blob 翻倍与 L2 经济连锁]] — Dencun blob target 3→6 / max 6→9 · L2 calldata -50% · sequencer/Stripe/Coinbase 受益

### Vitalik / L1+L2 strategy

- [[systems/vitalik-l1-l2-strategy-anchor|L1/L2 双轨战略演化 anchor · Ethereum 路线图与独立 L1 经济激励博弈]] — 2020 rollup-centric → 2025 L1+L2 双轨 · 削弱独立 L1(Arc/Tempo/Plasma)经济激励
