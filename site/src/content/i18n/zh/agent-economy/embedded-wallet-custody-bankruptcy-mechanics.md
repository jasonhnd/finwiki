---
source: agent-economy/embedded-wallet-custody-bankruptcy-mechanics
source_hash: 57b3bbb2bbce57c5
lang: zh
status: machine
fidelity: ok
title: "Embedded-wallet 托管破产机制 · 若 Privy / Stripe / Coinbase CDP / AWS Bedrock 倒闭,终端用户资金会怎样"
translated_at: 2026-05-30T17:04:08.787Z
---

# Embedded-wallet 托管破产机制 · 若 Privy / Stripe / Coinbase CDP / AWS Bedrock 倒闭,终端用户资金会怎样

## TL;DR

embedded wallet 中的终端用户资金是 **on-chain 上、位于一个由用户与 provider 共同控制的地址**,而不在 provider 的资产负债表上。若 Privy、Stripe(Privy 母公司)、Coinbase CDP,或底层 AWS Bedrock TEE 基础设施倒闭,用户可能被欠付现金的 **法律破产求偿权(legal-bankruptcy claim)** 很小(因为 provider 几乎不持有用户现金),但真正的风险是 **运营恢复问题(operational-recovery question)** — 用户能否重建其 MPC key shard 并把 on-chain 资产转移到新钱包。该品类已收敛到三个保护性原语:(1) **MPC sharding**(没有单一方能独自签名),(2) **social-recovery + Passkey 设备端 shard**(用户侧能在 provider 倒闭后存活),以及(3)面向更高价值机构用户的 **multisig 支撑的逃生舱(escape hatch)**。embedded-wallet 倒闭在结构上 **更接近 MetaMask 丢失其 seed-phrase 恢复 UI,而非 FTX 丢失客户的币**,但这一保护只有在用户确实持有一份可恢复的设备端或云端 shard 时才成立。§501友好的托管设计参见 [[agent-economy/embedded-wallet-network-effects-moat|integrator moat]],经典的 MPC + TEE 模型参见 [[agent-economy/privy-embedded-wallet-overview|Privy overview]],更宽泛的 UX 框定参见 [[fintech/embedded-wallet-fintech-disintermediation-overview|fintech disintermediation overview]]。

## Wiki route

This entry sits under [[agent-economy/INDEX|agent-economy index]]. Read it with [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]] for the MPC + TEE primitive, [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]] for the alternative architecture, [[agent-economy/embedded-wallet-network-effects-moat|embedded wallet network effects · integrator moat]] for the regulatory framing, and [[fintech/INDEX|fintech index]] for the deposit-protection and SIPC / FDIC analog framing.

## 四种倒闭场景

| 场景 | 倒闭的是什么 | 对用户资金的直接影响 | 运营恢复问题 |
|---|---|---|---|
| 1. Privy / Magic / CDP 资不抵债 | SDK 厂商的公司级运营停摆 | 对底层链上余额无影响 | 用户能否在没有 provider 服务端 shard 的情况下重建 MPC 签名? |
| 2. Stripe(Privy 母公司)进入 Ch. 11 | 公司母体处于破产中 | 对钱包地址无直接影响;钱包不在 Stripe 处托管法币(在多数产品配置下) | Privy TEE 是否在 DIP 融资下继续运营,还是被破产法院强制出售? |
| 3. Coinbase 进入 Ch. 11 | CDP 母体倒闭;Coinbase Wallet(消费者)与 CDP(SDK)受影响方式不同 | Coinbase Wallet(消费者)是 self-custody — 链上地址不受影响。Coinbase Custody / Coinbase Prime(机构托管)位于独立的 qualified-custodian 实体 — 同样在法律上隔离。用户资金风险最大的是 **Coinbase Exchange** 余额,而这不属于 embedded-wallet 品类 | 对 CDP 管理的 Smart Wallets,用户能否在没有 CDP 侧服务端 shard 的情况下签名? |
| 4. AWS Bedrock / AWS TEE 中断或关停 | 持有一份 MPC shard 的底层 TEE 基础设施变得不可用 | 若中断是暂时的,TEE 恢复后用户即可签名。若永久(此事在 AWS 无先例),持有可恢复设备端或云端 shard 的用户能存活 | provider 是否维护一份 TEE 可移植性方案,以把服务端 shard 迁移到另一个云 / 硬件 enclave? |

在全部四种场景中,**on-chain 钱包地址都持续存在** — 它是一个由公钥确定性派生的字符串,不在乎 SDK 厂商的公司状态。会失效的是 **组装出一个有效签名的能力**,这取决于存活下来的 shard。

## MPC sharding · 结构性保护

embedded-wallet 品类在多数主要 provider 上都收敛到 [n / m] MPC 门限签名设计。经典的 Privy 切分(记载于 docs.privy.io/security):

- **Shard 1 (用户设备)。** 存于用户设备上,由 iOS / Android 上的 Passkey / WebAuthn / Secure Enclave,或桌面端的浏览器凭证 API 保护。
- **Shard 2 (provider TEE)。** 存于 provider 运营的 Trusted Execution Environment 内 — Privy 用 AWS Nitro Enclaves 或同类,CDP 用 Coinbase 管理的 enclave,等等。
- **可选 shard 3 (用户备份)。** 在用户 social-recovery 密钥(绑定 Google / Apple ID)下加密的云备份,或一份显式由用户持有的备份。

一个有效签名需要 t-of-n 个 shard(典型为 2-of-2 或 2-of-3)。provider 的 TEE 单独无法签名 — 它缺少用户设备 shard。用户设备单独也无法签名 — 它缺少 TEE shard。**provider 的破产本身既不会解锁也不会窃取用户资金。**

在 2-of-2 设计中真正要紧的失效模式是 provider 的 TEE 被 **销毁**(不是被盗 — 是被销毁)。在带用户云备份的 2-of-3 设计中,即便 shard 2 彻底消失,用户也能用 shard 1 + shard 3 重建。这就是为何 **带可恢复用户侧备份的 2-of-3 是抗监管(regulator-resilient)的配置**,也是多数中端 2026  provider 文档中的默认。

## Social-recovery + Passkey 设备端 shard

用户侧原语围绕两种模式标准化:

**模式 A · Passkey + WebAuthn。** 用户设备 shard 持于 Secure Enclave(iPhone)、TEE(Android)或平台凭证库(浏览器),由 FaceID / TouchID / Windows Hello 解锁。该 shard 从不以明文导出。风险:设备丢失且无云同步 Passkey = shard 丢失。Apple iCloud Keychain 同步与 Google Password Manager 同步缓解此点;两者都会在同一 Apple ID / Google 账户下的用户设备间同步 Passkey。

**模式 B · Social recovery。** 用户指定 3-5 个「guardian」(可信联系人、额外设备、硬件 key),它们可共同(k-of-n)重建用户侧 shard。这是 Argent 原生、并被 CDP Smart Wallets 与其他 ERC-4337 钱包采用的 ERC-4337 social-recovery 原语。风险:guardian 间合谋;指定带来的 UX 成本。

embedded-wallet provider 通常以模式 A 为默认,模式 B 作为面向更高价值用户的可选项。

## 面向机构用户的 multisig 逃生舱

更高价值的机构用户(treasury、持有大额稳定币浮存的 AI-agent operator、tokenization 发行方)通常不单独使用 2-of-2 MPC。这些模式:

- **2-of-3 搭配一个 Safe multisig signer。** 用户侧控制一个 signer,provider 的 MPC 系统是第二个,处于用户机构治理下的 Gnosis Safe(或 Safe{Wallet})multisig 是第三个。provider 倒闭 = 用户用设备 + Safe 签名并恢复。
- **带 timelock 的 smart account。** 带 timelock 的「recovery owner」(通常是硬件钱包或 Safe multisig)的 ERC-4337 / ERC-7702 smart account,可在通知期后接管该账户。
- **链下 hot/cold 清扫(sweep)策略。** 一项定时清扫,周期性地把超过阈值的资金从 embedded wallet 移到一个单独托管的 [[fintech/onchain-finance-vs-crypto-bifurcation|cold storage]] 或 Anchorage / BitGo / Fireblocks qualified-custodian 钱包。embedded wallet 被当作热钱包,而非托管面。

该模式与 [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] 文档区分消费者 self-custody、Smart Wallets,以及 Coinbase Prime / Custody(一个受 New York limited-purpose trust charter 监管、与 Coinbase Exchange 在法律上隔离的 qualified-custodian 实体)的方式相平行。

## Stripe Treasury · 法币侧托管链

当 embedded wallet 由法币注入时 — 例如一个接受 USD 并经由 Privy + Bridge 转换为 USDC 的 Stripe Connect merchant — 在 on-chain 这一段开始之前,法币侧会触及 **Stripe Treasury** 托管链。该链(记载于 stripe.com/treasury):

- **Stripe Payments Inc.**(在许多美国州为非银行 money transmitter,在英国受 FCA 监管,在其他地区按区域牌照运营)持有来自 card networks 的应收款。
- **Stripe Treasury partner banks**(历史上公开为 Goldman Sachs 与 Evolve Bank & Trust)在隔离的 FBO(「for benefit of」)账户中持有实际现金存款。
- **FDIC pass-through insurance** 在 per-end-customer 基础上适用于底层 partner-bank 账户,受 $250,000 标准最高存款保险额与 FDIC 记录保存要求(12 CFR Part 370)约束。
- **在 on-chain 这一段**,转换为 USDC / USDB / 等之后,法币 → 稳定币的转换在运营上发生于 Bridge(Stripe 子公司,自 2025-06起)或 Circle / Tempo 内部。一旦资产在链上成为稳定币,FDIC insurance 便不再适用 — 稳定币储备保护是另一套体制(Circle 的储备披露、GENIUS Act §501 设计,等等)。

因此破产问题分裂为 **两半**:

1. **转换前的法币侧。** 由 FBO 隔离 + FDIC pass-through(在 partner bank 满足记录保存要求处)保护。Stripe Ch. 11 本身不会损失用户资金,因为用户资金不在 Stripe 资产负债表上 — 它们在 FDIC 投保的 partner bank。风险:partner bank 倒闭、Stripe Treasury 记录保存与 FBO bank 记录保存之间的缝隙,或一个就保险状态误导用户的面向客户「可用余额」UI。
2. **转换后的稳定币侧。** 由发行方的储备体制保护,而非 Stripe / Privy。USDC 储备位于 BlackRock 管理的货币市场基金 + Bank of New York Mellon 现金 + 选定的 partner banks。USDB 储备按 Bridge / Stripe 所选的鉴证体制披露。在储备失败场景下,用户对发行方持有的是无担保求偿权,而非对 Stripe / Privy。

## SIPC / FDIC pass-through 类比 · 监管问题

截至 2026年中,在任何主要法域都不存在针对 embedded-wallet 终端用户资金的 SIPC 等价体制。最接近的类比:

| 体制 | 它保护什么 | embedded wallet 是否在范围内 |
|---|---|---|
| FDIC(每个存款人在每家投保银行 $250K 标准最高存款保险) | 银行存款 | 是,在通过带 pass-through 的 partner-bank FBO 账户的 **法币侧那一段** |
| FDIC pass-through(12 CFR Part 370) | 由非银行为可识别客户之利益持有的银行存款余额 | 是,条件是该非银行中介(Stripe 等)满足记录保存要求 |
| SIPC($500K 保障,其中 $250K 可为现金) | 在某证券交易中、由 SIPC 成员 broker-dealer 持有的经纪证券与现金 | 否,embedded wallet 不是 broker-dealer 账户 |
| Coinbase NY Limited Purpose Trust charter(NYDFS) | Coinbase Custody Trust 的机构托管 | 部分 — 适用于 Coinbase Custody,而非 CDP 的 embedded wallet |
| US OCC / SAB 121 (经由 SAB 122于 2025 年 1 月撤销 SAB 121 ) | 银行资产负债表上 crypto 资产的托管 | 与提供托管的银行相关;非终端用户的直接保护 |
| GENIUS Act §501 (US) | 稳定币发行方储备与隔离 | 适用于 USDC / USDB / 等价储备,不适用于钱包 provider |
| FCA Cryptoasset register + safeguarding rules(UK) | 在即将到来的 UK 体制下的托管钱包 provider 与稳定币公司 | 将适用于 UK 注册地的钱包 provider;embedded-wallet 厂商通常通过设计避开托管来规避这些 |
| FSA Japan 暗号資産交換業(Crypto Asset Exchange) | 持有客户 crypto 的 VASP | 设计成不「持有」客户 crypto 的 embedded wallet 可规避归类 — 参见 [[exchanges/jp-cex-deposit-token-stablecoin-integration|JP CEX integration]] |
| MAS Singapore Payment Services Act | DPT(digital payment token)服务提供商 | 持有或传输 DPT 的 embedded wallet 厂商在范围内;从不触及密钥的纯 SDK 厂商可能在范围外 |

模式是一致的:**没有任何一个主要法域专门为 embedded-wallet 终端用户资金构建过 SIPC 式保险方案**。监管上的赌注是,embedded-wallet 设计本质上规避了这个问题(用户始终控制一份 shard;provider 从不持有资产)。

## 每种场景实际会发生什么 · 分步

**场景 1 · Privy 资不抵债,Stripe 仍有偿付能力。** Stripe 最可能的回应是把 Privy 作为 Stripe 内部服务、在 DIP 融资或简单的母公司出资续命下继续运营。若 Privy 无论如何被清盘,Stripe 会发布迁移工具,引导用户用 shard 1 + 用户侧可恢复 shard 3 (云备份)重建其 MPC 签名、导出私钥,并导入 MetaMask 或任何其他钱包。**结果:持有可恢复备份的用户无资金损失;既无备份又无可用设备的用户全损。**

**场景 2 · Stripe 处于 Ch. 11。** Stripe 的美国业务是 money transmitter,在许多其他法域是 FCA 授权公司。在 Ch. 11, 下,Stripe Treasury FBO 账户中的客户法币被隔离,并(在符合 FDIC 记录保存的前提下)受 pass-through insurance 保护。Privy 产品作为 debtor-in-possession 服务继续运营,很可能被出售给后继 operator。**结果:法币侧资金经由 FBO 隔离受保护;on-chain 钱包密钥经由 MPC + 设备端 + 云端 shard 可恢复。**

**场景 3 · Coinbase 处于 Ch. 11。** Coinbase 的 qualified-custodian 实体(NYDFS 下的 Coinbase Custody Trust、Coinbase Prime)有独立牌照与独立资本 — 隔离正是 trust-charter 结构的明确要点。CDP 的 embedded wallet 在运营上是链上的 Smart Wallets,而非 Coinbase 资产负债表上的托管余额。Coinbase Exchange 现货余额是一个独立类别,也是 Coinbase Ch. 11 中最大的资金损失风险(这正是为何交易所客户余额是否 bankruptcy-remote 的问题在 2020年代早期一直在法律上存在争议;可比分析见 SDNY 关于 FTX 事项的卷宗)。**对 CDP-embedded-wallet 用户的结果:MPC + 设备端 shard 加 social recovery — 资金损失风险很小。**

**场景 4 · AWS Bedrock TEE 中断 / 关停。** AWS Nitro Enclaves 在 AWS region 内部运行。区域性中断 = 受影响区域的暂时签名不可用;跨区域 MPC shard 复制是 provider 的标准缓解。完整的 AWS Nitro 关停无先例,且会触发全行业重建。**结果:暂时中断可存活;永久性基础设施失效需要 provider 的 TEE 可移植性方案。**

## 法律理论分析 · MPC shard 到底归谁所有

MPC shard 在破产中的法律定性尚未确定,其要紧程度与设计对服务端 shard 赋予的权重成正比。三种可能的定性:

**定性 1 · shard 是 provider 的财产,但用户的签名权是一项合同权利。** 按此观点,在 Ch. 7 清算中,trustee 继承该 shard,理论上可拒绝参与签名重建。用户的救济是合同损害赔偿求偿,而非财产求偿。这对用户是最坏情形,且会使 MPC-only 设计从破产角度实际上变成托管型。

**定性 2 · shard 在推定上是用户的财产,由 provider 作为 bailee 或 custodian 持有。** 按此观点,shard 是用户 bankruptcy-remote 财产的一部分,trustee 无求偿权。这是对用户友好的观点,与保险箱内容物及信托账户资产的处理方式一致。在多数主要法域,该法律定性尚未被确定性地诉讼;最接近的类比是托管型 crypto 交易所处存储加密密钥的处理 — 经大量诉讼后,SDNY 在 FTX 事项中将其视为客户财产。

**定性 3 · shard 单独不可用,且无独立法律地位。** 按此观点,shard 无法签名,因而作为破产财产无价值;是否参与重建是用户与 trustee 之间的合同问题。这是分析上最干净的观点,且与「无单一方能独自签名」这一技术事实相吻合。

2026 年中的行业实践是按定性 2 或 3 (对用户友好)来设计,并发布使设计意图明确的安全文档。该意图能否在破产诉讼中存活则未经检验。

## UNCITRAL 与统一法委员会指引

UNCITRAL 关于身份管理与信任服务之使用及跨境承认的示范法(2022, ,带处理电子可转让记录与 AI 相关考量的 2024-2025 补充),以及美国统一法委员会的 Uniform Electronic Transactions Act(UETA)与 UCC 修订第 12 条(controllable electronic records,于 2024-2026在许多美国州采纳),为对用户友好的定性提供了一些结构性支撑。关键的公开文本特征:

- **UCC 第 12条** 明确设想了「controllable electronic records」— 即通过获取经济利益的实际能力来确立控制的资产。一份用户可用以参与签名重建的 MPC shard,即便实物占有被切分,也大致可视为由用户控制。
- **UETA** 将电子记录与签名视为在法律上与纸质等同,支撑把 MPC 签名交易在运营上视为用户交易。
- **UNCITRAL Model Law on Electronic Transferable Records(MLETR)** 支撑在适当技术控制下持有的电子记录的 bankruptcy-remote 处理。

这些文书均未被确定性地解释为涵盖 embedded-wallet MPC shard。它们为朝对用户友好方向的论证提供了学理脚手架,而非最终答案。

## Agent-as-principal · AI 侧变体

当钱包的 principal 是一个 **在用户签发的 [[agent-economy/erc-7715-overview|ERC-7715 wallet permission]] 下运行的 AI agent** 而非人类终端用户时,一个更微妙的破产问题浮现。该变体:

- 用户已授权一个 AI agent(运行于 AgentCore / Foundry / Vertex)在指定用途下每期支出至多 X USDC。
- AI agent 的钱包就是用户的钱包,权限委托给一个由 agent 控制的 session key。
- 钱包 provider(Privy、CDP)倒闭。用户的 MPC shard 存活。agent 的 session key 也可恢复。

结构性答案相同:on-chain 钱包地址持续存在,用户可轮换 session key,AI agent 只需在新 session key 下恢复运营。但运营层增加了复杂度 — agent 的运行时位于某 hyperscaler(AWS Bedrock、Azure AI Foundry、GCP Vertex),若该 hyperscaler 的 agent 平台在同一时间窗内也倒闭,则在用户手动介入之前 agent 无法自主恢复。依赖栈是:链(有韧性) → 钱包 provider(provider 倒闭场景) → agent 运行时(hyperscaler 倒闭场景) → 用户(始终可作为 fallback principal)。关于此处 agent 是否具有任何独立法律地位的更深层问题,参见 [[agent-economy/agent-actorship-debate|agent actorship debate]]。

## 来自非钱包托管失败的比较先例

三个公开的托管失败先例为合理预期提供参照:

- **Mt. Gox(东京地方法院民事再生,2014→)。** 一次托管型交易所崩塌,其中 on-chain 资产丢失 / 被盗,客户求偿花了十年才开始分配。embedded-wallet 设计在结构上不同(provider 不持有资产),但 Mt. Gox 树立了「托管失败的恢复缓慢而颠簸」的预期。
- **FTX(SDNY Chapter 11, 2022→)。** 一次托管型交易所崩塌,其关键诉讼问题 — 客户余额是客户财产还是破产财团财产 — 花了 18+ 个月才解决。客户的回收最终超过了申请日的 USD 价值,但分配耗时很长。embedded-wallet 设计完全规避了客户财产定性风险,但此对比凸显了为何在设计层面规避托管优于经诉讼回收。
- **Synapse(Delaware Ch. 11, ,2024)。** 一次非银行中介的失败,其中 FDIC pass-through 取决于结果不完整的 partner-bank 记录保存。客户资金在 partner banks 处总量可用,但因无法重建逐客户账本而无法及时拨付给单个客户。对 embedded-wallet provider 的相关警示是:记录保存的纪律与法律定性同等要紧。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/privy-embedded-wallet-overview|Privy embedded wallet overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/embedded-wallet-network-effects-moat|Embedded wallet integrator moat]]
- [[agent-economy/embedded-wallet-landscape-2026-consolidation|Embedded-wallet landscape 2026 consolidation]]
- [[fintech/embedded-wallet-fintech-disintermediation-overview|Embedded wallet fintech disintermediation overview]]
- [[fintech/embedded-wallet-fintech-disintermediation-stripe-trojan-horse|Stripe five-layer Trojan horse]]
- [[fintech/INDEX|Fintech index]]
<!-- /wiki-links:managed -->

## Sources

- Privy Security documentation (docs.privy.io/security)
- Coinbase Developer Platform Security documentation (docs.cdp.coinbase.com)
- Magic Security documentation (magic.link/docs/wallets/security)
- Stripe Treasury public documentation (stripe.com/treasury)
- FDIC public materials on pass-through insurance and 12 CFR Part 370
- SEC public materials including SAB 121 history and SAB 122 (January 2025)
- SIPC public materials on coverage scope
- FCA UK cryptoasset register and safeguarding rules consultation papers
- FSA Japan public materials on 暗号資産交換業 and 電子決済手段
- MAS Singapore Payment Services Act and DPT service-provider register
- US Bankruptcy Code Chapter 11 and Chapter 7 public statutes
- Public docket materials from FTX SDNY proceedings on customer-property characterization (for comparative custody analysis)
