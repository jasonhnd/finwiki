---
source: systems/restaking-avs-landscape-matrix-eigenlayer-vs-symbiotic
source_hash: 91d67a92b21cdcdd
lang: en
status: machine
fidelity: ok
title: "Restaking and AVS Landscape Matrix · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM"
translated_at: 2026-06-01T04:15:40.183Z
---
# Restaking and AVS Landscape Matrix · EigenLayer vs Symbiotic vs Karak vs Mellow vs EtherFi vs Lido CSM

## TL;DR

- Compare 6  restaking infrastructures across 2026-Q2  **TVL · restaking model · slashing · AVS economics · correlation risk · operator concentration · governance · audit · Lido overlap · regulatory exposure** on 10  axes
- **The 3  quadrants of restaking model**: **Operator-delegated** (EigenLayer · Karak · Symbiotic) · **LRT vault aggregator** (EtherFi · Mellow · Renzo) · **Native protocol restaking** (Lido CSM · LST itself provides the restake hook)
- **TVL 2026-Q2  estimate**: EigenLayer ~$14B · Symbiotic ~$3.2B · EtherFi LRT (eETH) ~$5.5B · Mellow LRT ~$1.8B · Karak ~$1.0B · Lido CSM ~$280M (early)
- **AVS landscape, 5  large names**: **EigenDA** (~$120M revenue 2026 estimate · multiple ZK rollup users) · **Hyperlane** (borrows EigenLayer/Symbiotic through ISM) · **Espresso** (shared sequencer · Polygon/zkSync/Caldera and others connected) · **Lagrange** (coprocessor + state proof) · **Witness Chain** (POI · physical-infrastructure verification)
- 2025 年 EigenLayer slashing formally enabled · actual slash events ≤ 5 件 · cumulative < $5M (far below early concerns) · but correlation risk (rehypothecation) is still not sufficiently priced
- **Lido stake overlap rate**: ~25% of EigenLayer TVL comes from stETH restaking · ~40% in Symbiotic · Mellow is entirely LST-set based. Lido is the "base-layer liquidity source" of the restaking ecosystem
- Routing: [[systems/eigenlayer-overview]] (core) · [[exchanges/liquid-staking-restaking-cex-exposure]] (LRT CEX exposure) · [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · 2048 ETH validator]] (institutional staking route)

## Wiki route

This entry sits under [[systems/INDEX|systems index]]. Read it against [[systems/eigenlayer-overview|EigenLayer overview]] as the canonical anchor, [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism · Operator · Slashing · EIGEN 仲裁]] for the slashing + AVS economics depth, and [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]] for how new chains use restaking to launch security. For the validator economics meta-context, see [[systems/bft-validator-economy-overview|BFT validator economics overview]] and [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]. For consensus models that restaking touches, see [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]] and [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]. For the EIP-7251 institutional staking lane that interacts with restaking economics, see [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]]. For CEX exposure to LRT and the "liquid staking → restaking → CEX leverage" stack, see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]. Cross-link to [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]] when reasoning about Hyperlane / LayerZero / Wormhole as AVS consumers.

## Why this matrix matters

Restaking in 2023-2024 年 was EigenLayer's single-player concept of an "ETH crypto-economic security marketplace." By 2024-2025 年 it evolved into multi-protocol competition: Symbiotic offers multi-asset restaking (not only ETH) · Karak centers developer UX + universal restaking · Mellow is an LRT vault aggregator · EtherFi inherits the LST market through LRT (eETH) · Lido itself also enters through CSM (Community Staking Module) and stVaults.

For developers (AVS builders · for example [[systems/hyperlane-overview|Hyperlane]] / EigenDA / Lagrange), which restaking layer to choose determines: **operator pool depth · true enforceability of slashing · scale of economic security from TVL backing · governance predictability**. For users (stETH holders considering restake), which LRT (eETH · ezETH · pufETH · mevETH, etc.) to choose determines: **revenue sharing · slashing risk exposure · withdrawal liquidity · whether it is listed on CEXs**.

For regulators (SEC / ESMA / FSA · see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking · restaking · CEX エクスポージャー]]), whether restaking constitutes a "security" / "investment contract" is an issue awaiting judgment in 2026 年, and protocols have different regulatory exposures because their governance + revenue structures differ.

This matrix compares 6  active restaking infrastructures cross-sectionally · 10  axes · 2026-Q2  data snapshot. The AVS landscape is an independent section · listing the economic image of 5  major AVSs. Stand-alone LRTs (Renzo / Puffer / Kelp / Swell) are not listed independently in the comparison; some are mentioned inside the EtherFi / Mellow analysis.

## Per-protocol sections

### EigenLayer

**Restaking model**: Operator-delegated (the staker chooses an operator, and the operator chooses which AVSs to opt into). Supports native ETH restaking (through EigenPod) · LST restaking (8  types of strategies such as stETH · rETH · cbETH) · EIGEN token native restaking.

**TVL May 2026**: ~$14B (estimate · at the 2025  high reached $20B+ · 2026  saw a mild adjustment from some LRT exits + yield compression).

**Slashing implementation**: 2025-Q2  mainnet slashing enabled. AVSs define custom slashing conditions (see [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]). Actual slash events ≤ 5 件 (2026-Q2) · cumulative slash amount < $5M (mainly operator misconfiguration · not malice).

**AVS economics**: ~40  AVSs active · including EigenDA · Hyperlane · Espresso · Lagrange · Witness Chain · AltLayer · Brevis · etc. Operator rewards come from AVS charges (EIGEN + each AVS native token) · adding annualized +1-3% on top of base ETH staking yield.

**Correlation risk**: Rehypothecation coefficient 2.5-3x (each 1  unit of ETH opts into an average of 2.5-3  AVSs) · Vitalik has warned multiple times about "system-wide slashing cascade" risk. EIGEN inter-subjective dispute is a mitigation mechanism, but it itself depends on token holder vote (which can be capital-manipulated).

**Operator concentration**: Top 5  operators account for ~50% of TVL (Coinbase Cloud · Figment · P2P · Stakefish · DSRV) · the remainder is distributed across ~200  operators.

**Governance**: EigenLabs (team-led) · EIGEN token + Operating Token holders · Security Council 7-of-13. After the 2025  EIGEN voting launch, decentralization proceeds gradually.

**Audit**: Trail of Bits · ChainSecurity · OpenZeppelin · Sigma Prime · Code4rena · Cantina. Multiple rounds of independent audit before slashing was enabled.

**Lido stake overlap**: ~25% of EigenLayer TVL comes from the stETH strategy (the rest is mainly native ETH via EigenPod + cbETH · rETH).

**Regulatory exposure**: The SEC has not made a clear statement on whether the EIGEN token constitutes securities · in 2024 年 EigenLayer actively delayed EIGEN airdrops to US users. Under EU MiCA, restaking yield may be classified as a "tokenized money market service" · awaiting judgment.

### Symbiotic

**Restaking model**: **Multi-asset restaking** (not only ETH · supports any ERC-20 , including LSTs · stablecoins · project tokens). Modular vault architecture · vault curators custom-define collateral + AVS opt-in strategy.

**TVL May 2026**: ~$3.2B (2024-09  alpha launch · 2025  fast growth · second-largest restaking in 2026-Q1  · some TVL is non-ETH assets, so direct comparison with EigenLayer needs adjustment).

**Slashing implementation**: Supports vault-level slashing from day 1  (2025-Q1  mainnet enabled). Operator slashed = the entire vault collateral is damaged · but vault curators can customize the slashing strategy (ratio · trigger conditions).

**AVS economics**: ~15  AVSs active (2026-Q2) · main pushes are Ethena USDe / sUSDe restake · 1  of Hyperlane ISM · Mellow vault deep integration · GearBox credit account, etc. Operator rewards are diversified (stablecoin · vault token · AVS native).

**Correlation risk**: Theoretically higher than EigenLayer (multi-asset classes · complex slashing trigger conditions) · but in practice, diversified assets can diversify single-ETH risk. Vault curator selection is the risk anchor.

**Operator concentration**: Top 5  operators ~60% (P2P · Kiln · Chorus One · Everstake · DSRV) · concentration is higher than EigenLayer.

**Governance**: Symbiotic Labs team-led · token + DAO governance planned in 2026-Q4 . Vault curators are de facto sub-governance (each vault is independent).

**Audit**: OpenZeppelin · Sigma Prime · Cantina contest · early stage · audit coverage is less than EigenLayer but continues to expand.

**Lido stake overlap**: ~40% of TVL comes from LST vaults (stETH · rETH · wstETH · etc.). Mellow, as Symbiotic's main vault curator, routes LRT funds into Symbiotic AVSs.

**Regulatory exposure**: Multi-asset structure makes Symbiotic's regulatory positioning more complex (some vaults include stablecoins = closer to money market regulation) · but the impact of single-asset regulatory events is also more limited.

### Karak

**Restaking model**: Universal restaking (supports ETH · BTC · USDC · K2  is Karak's own L2) · emphasizes developer UX ("any asset can secure any service").

**TVL May 2026**: ~$1.0B (2024  launch · 2025  growth but slower than Symbiotic · 2026  rises with BTC restaking module + K2  integration).

**Slashing implementation**: Enabled in 2025-Q3  · but actual AVS count is low · triggers slash events ≤ 2 件.

**AVS economics**: ~10  AVSs active · mainly services incubated by the Karak team itself (K2 L2 sequencer / DA) · few third-party AVSs.

**Correlation risk**: Correlation is complex under the multi-asset model · but TVL scale is small · systemic risk is low for now.

**Operator concentration**: Top 5  operators ~70% (Karak self-operated + a small number of partners).

**Governance**: Karak Foundation-led · KAR token planned to launch in 2026-Q3-Q4 .

**Audit**: Sigma Prime · Halborn · Cantina (partial).

**Lido stake overlap**: ~20% of TVL comes from stETH (Karak has a larger share of BTC + stablecoin restaking).

**Regulatory exposure**: BTC restaking triggers SEC interest in "BTC yield products." USDC restaking is closer to money market regulation. Overall regulatory surface is broader than EigenLayer.

### Mellow

**Restaking model**: LRT vault aggregator (not base-layer restaking, but a vault layer built on top of EigenLayer + Symbiotic) · Mellow vault users deposit stETH / wstETH · the vault automatically restakes into EigenLayer/Symbiotic AVSs · revenue sharing + slashing risk are pooled.

**TVL May 2026**: ~$1.8B (2024-Q4  launch · 2025-2026  fast growth · Symbiotic's largest vault curator · also deploys some EigenLayer vaults).

**Slashing implementation**: Slashing is socialized at the vault layer (a slash of 1  AVS is borne by all vault holders according to shares) · users implicitly accept portfolio slashing risk.

**AVS economics**: Mellow vaults select multiple AVS pools to optimize risk-adjusted yield · users receive a basket of "mixed AVS rewards."

**Correlation risk**: Highest layer: vaults hold multiple AVSs at the same time · slash cascade risk inside a single vault is pronounced. Mellow mitigates through vault diversification (different AVS pools in different vaults).

**Operator concentration**: Borrows the EigenLayer / Symbiotic operator set · does not introduce new concentration itself.

**Governance**: Mellow DAO + MLW token (2025-Q2  launch) · vault curator team as sub-governance.

**Audit**: Sigma Prime · Spearbit · Code4rena · joint audit with Symbiotic.

**Lido stake overlap**: ~100% (Mellow vaults are predominantly based on stETH, wstETH, and other LST sets) · the largest single route from Lido → restaking.

**Regulatory exposure**: Vault structure is close to a "managed fund" · may be classified as a collective investment scheme under EU MiCA / SEC. Mellow actively avoids US users.

### EtherFi LRT (eETH / weETH)

**Restaking model**: Integrated LST + restaking: users deposit ETH and receive eETH (rebasing) or weETH (wrapped non-rebasing) · EtherFi simultaneously stakes the underlying ETH (beacon chain validator)+ restakes it (EigenLayer + Symbiotic + Karak partial). Leader in the LRT market.

**TVL May 2026**: ~$5.5B (2024  high $7B · 2026  mild adjustment) · largest LRT.

**Slashing implementation**: EtherFi operates nodes itself (node operator network · strictly screened) · slash risk is borne by the EtherFi insurance fund + protocol reserve. Users face it through eETH price reflecting slash losses.

**AVS economics**: EtherFi chooses to restake ETH into mainstream AVSs (EigenDA · Hyperlane · Espresso · Lagrange) · returns are reflected in eETH yield (annualized ~4-6% · including base staking 3-4% + restaking premium 1-2%).

**Correlation risk**: eETH holders are naturally exposed to the 3 -layer slash cascade of EigenLayer + Symbiotic + Karak. EtherFi insurance fund of ~$50M acts as first-loss buffer.

**Operator concentration**: EtherFi node network ~200  operators · some directly operated by EtherFi · some outsourced (Pier Two · ChainSafe · Validation Cloud, etc.).

**Governance**: EtherFi DAO + ETHFI token (2024-Q2  launch) · Foundation + Security Council 7-of-15.

**Audit**: Spearbit · Halborn · Certora · Hats Finance bug bounty.

**Lido stake overlap**: EtherFi is a direct competitor to Lido (LST market share) · EtherFi does not use stETH (it operates its own validators) · but when some EtherFi stake is put into EigenLayer, it sits inside the same AVS pools as stETH.

**Regulatory exposure**: LRT is a key SEC focus (2024  SEC chair Gensler publicly mentioned "staking + restaking = potential security"). EtherFi actively geo-fences US retail users.

### Lido CSM (Community Staking Module)

**Restaking model**: Lido itself did not enter restaking for a long time (rejected multiple times in Lido v2  governance) · but announced CSM (Community Staking Module) in 2024 年, allowing small operators to join the Lido validator set · while also exploring stVaults (2026  plan) so stETH holders can opt into restaking. Lido v3 (2026  roadmap) formally introduces a restaking hook.

**TVL May 2026**: ~$280M (CSM early adoption · rapid growth expected after 2026 Q3-Q4  stVaults launch). Total Lido stETH TVL ~$32B (restaking portion < 1%).

**Slashing implementation**: CSM operators bring their own bond (2-4 ETH) as collateral · slash first deducts the bond · any shortfall is borne by the Lido insurance fund. stVaults restaking slash is borne by vault users according to shares.

**AVS economics**: Lido stVaults plan to support mainstream AVSs on EigenLayer + Symbiotic · but Lido DAO strictly manages the AVS whitelist (only fully audited + governance-stable services can connect).

**Correlation risk**: Lido's design philosophy is "minimize correlation" · after stVaults opt-in, users implicitly bear it · but Lido DAO limits through AVS whitelist + floating caps.

**Operator concentration**: Lido main set ~30  operators (institutions)+ CSM ~200  small operators. CSM improves decentralization · introduces long-tail home stakers.

**Governance**: Lido DAO + LDO token + public referendum · highest governance complexity (connecting any AVS to stVaults requires passing an LDO vote).

**Audit**: Sigma Prime · ChainSecurity · OpenZeppelin · Certora · Statemind · MixBytes · audit coverage is the deepest in the industry.

**Lido stake overlap**: Lido is the stETH issuer · "Lido stake overlap" here = 100%. Secondary restaking of stETH in EigenLayer / Symbiotic / Mellow / EtherFi accounts for 25-40% of the whole restaking ecosystem, and Lido is effectively the source of restaking liquidity (see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]]).

**Regulatory exposure**: Lido DAO governance structure is close to a "decentralized issuer" from the SEC perspective · but LDO token holder voting + governance revenue distribution may constitute securities. Whether stETH constitutes an "asset-referenced token" under EU MiCA is awaiting judgment.

## AVS landscape — economic image of 5  major AVSs

| AVS | Type | Main backing | 2026  revenue estimate | TVL backing | Customers |
|---|---|---|---|---|---|
| **EigenDA** | Data Availability | EigenLayer | ~$120M ARR | ~$6B ETH | Mantle · Movement · Cyber · Rivalz · multiple ZK Stack hyperchains |
| **Hyperlane** | Cross-chain messaging ISM | EigenLayer + Symbiotic + own | ~$30M ARR (messaging fee distribution) | ~$1.5B ETH (EigenLayer ISM) + some Symbiotic | Eclipse · Celestia · Renzo · multiple app-chains |
| **Espresso** | Shared sequencer | EigenLayer | ~$15M ARR (early) | ~$800M ETH | Polygon zkEVM · zkSync ZK Stack · Caldera · AltLayer rollup-as-a-service |
| **Lagrange** | Coprocessor + state proof | EigenLayer | ~$8M ARR | ~$500M ETH | LayerZero · Polyhedra · multiple DeFi protocols |
| **Witness Chain** | POI (Proof of Inference)/ DePIN verification | EigenLayer | ~$5M ARR (experimental) | ~$200M ETH | DePIN projects + AI inference verification |

**2  types of AVS economic model**:
- **Direct fee**: users / customers are charged (EigenDA customers pay DA fees · Hyperlane customers pay messaging fees) → distributed to operators
- **Token incentive**: AVS has its own token · provides initial emission to operators as bootstrapping (Espresso · Lagrange · Witness Chain)

**Rehypothecation impact**: The top 3  AVSs (EigenDA · Hyperlane · Espresso) all draw backing mainly from EigenLayer · it is normal for each 1  unit of ETH to secure 3  AVSs simultaneously. The "cascade risk" Vitalik warns about mainly refers to this situation.

## Big comparison matrix table

**6  restaking infrastructures × 10  axis comparison** (state as of 2026-Q2 ):

| Protocol | Restaking Model | TVL May 2026 | Slashing | AVS Economics | Correlation Risk | Operator Concentration | Governance | Audit | Lido Overlap | Regulatory |
|---|---|---|---|---|---|---|---|---|---|---|
| **EigenLayer** | Operator-delegated · native ETH+LST+EIGEN | ~$14B | 2025-Q2  enabled · ≤5 events · <$5M cumulative | ~40 AVS · EIGEN+AVS token rewards · +1-3% on base | Rehypothecation 2.5-3x · cascade concern | Top 5 ~50% | EigenLabs+EIGEN+SC 7/13 | Trail of Bits · ChainSecurity · OZ · Sigma Prime · C4 · Cantina | ~25% stETH | SEC EIGEN security not stated · EU MiCA awaiting judgment |
| **Symbiotic** | **Multi-asset** (ETH+LST+stablecoin+token) · modular vault | ~$3.2B | Day 1 design · 2025-Q1  enabled · vault-level | ~15 AVS · stablecoin/vault/AVS token rewards | Complex multi-asset · vault curator anchor | Top 5 ~60% | Symbiotic Labs · 2026 Q4 token+DAO | OZ · Sigma Prime · Cantina · early stage | ~40% stETH (Mellow vault main route) | Complex multi-asset regulatory surface |
| **Karak** | Universal (ETH+BTC+USDC) · K2 L2  integration | ~$1.0B | 2025-Q3  enabled · ≤2 events | ~10 AVS · Karak-incubated centered | Multi-asset complex · small TVL, low risk for now | Top 5 ~70% (high concentration) | Karak Foundation · KAR 2026 Q3-Q4 | Sigma Prime · Halborn · Cantina partial | ~20% stETH | BTC restaking SEC interest · USDC close to MM regulation |
| **Mellow** | **LRT vault aggregator** (on EigenLayer+Symbiotic) · socialize slashing | ~$1.8B | Vault-level socialize | Multi-AVS pool basket rewards | Highest (in-vault cascade) | Borrows underlying · no new concentration | Mellow DAO+MLW 2025-Q2 · vault curator sub-gov | Sigma Prime · Spearbit · C4 · joint with Symbiotic | ~100% (predominantly LST-based) | Close to managed fund · avoids US |
| **EtherFi LRT** | **Integrated LST+restaking** · own nodes+multi-layer restake | ~$5.5B (largest LRT) | EtherFi node responsibility · insurance fund first-loss | EigenDA+Hyperlane+Espresso+Lagrange · annualized 4-6% | 3  layer slash cascade · insurance ~$50M buffer | EtherFi network ~200 operator | EtherFi DAO+ETHFI 2024 Q2 · SC 7/15 | Spearbit · Halborn · Certora · Hats bounty | Lido competitor · own validators · indirect AVS pool overlap | LRT is SEC focus · US retail geo-fence |
| **Lido CSM / stVaults** | CSM home staker + stVaults restaking hook (2026  plan) | ~$280M CSM · total stETH $32B | CSM operator bond first · insurance backup · stVaults users bear | Strict AVS whitelist (DAO vote) | Lido philosophy minimize · AVS cap limits | CSM ~200  small operators + main set 30 | Lido DAO+LDO+referendum (heaviest governance) | Sigma Prime · ChainSecurity · OZ · Certora · Statemind · MixBytes · industry deepest | **100% (Lido itself)** · stETH is restaking liquidity source | LDO security awaiting judgment · stETH MiCA ART awaiting judgment |

**How to read the matrix**:
- **Restaking model 3  quadrant comparison**: operator-delegated (EigenLayer · Karak · Symbiotic) → direct delegation · vault aggregator (Mellow) → wraps other restaking · integrated LST+restaking (EtherFi · Lido stVaults) → users receive LRT tokens
- **TVL vs operator concentration tradeoff**: EigenLayer has the largest TVL · highest operator dispersion · Karak has small TVL · high concentration · Mellow borrows others' operators and adds no new concentration
- **Lido overlap is a hidden systemic risk**: secondary restaking of stETH in EigenLayer / Symbiotic / Mellow / EtherFi · if stETH price depegs or a Lido protocol incident occurs, the whole restaking ecosystem is affected simultaneously
- **Actual state of slashing**: even after 1+ years from enablement, actual slash events ≤ 10 件 · cumulative amount < $10M · far below the "$100M+ cascade" scenario Vitalik warned about · but the sample size is small, so one cannot conclude that risk has been priced

## Boundary cases / future trajectory

**Interaction between restaking and EIP-7251 ** (see [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 · institutional staking]]):
- EIP-7251  expands validator max effective balance from 32 → 2048 ETH, enabling large institutions to consolidate validators and lower operating cost.
- Institutional validators can simultaneously restake large amounts of ETH · further raising operator concentration. EigenLayer has already confirmed in 2025 年 a small rise in the top 5 operator ratio.
- Over the long term, if institutional staking (SWIFT custodians · BNY · Coinbase Custody · BlackRock · see [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]]) enters restaking, TVL may rise from 2026 年's $20B class to, in 2027-2028 年, $50B+.

**Lido v3 restaking connection**: Lido DAO 2026-2027  stVaults mainline development · once connected, stETH becomes a direct restaking primitive and secondary wrappers are no longer necessary. This would mean:
- Some value of Mellow / EtherFi is absorbed (stETH holders directly opt in · intermediary vault unnecessary)
- But Lido's strict AVS whitelist also limits bootstrapping of long-tail AVSs
- In the long term, Lido + EigenLayer form a de facto duopoly, while Symbiotic / Karak / Mellow / EtherFi handle peripheral subdivisions

**Evolution of AVS business models**:
- **2024-2025  stage**: Most AVSs depend on token incentive bootstrapping (distributing their own tokens to operators) · real fee revenue is small.
- **2026  stage**: Head AVSs (EigenDA · Hyperlane · Espresso) begin to have real fee revenue, but AVS-to-operator distribution ratios do not match (EigenDA gives 90%+ to operators · Hyperlane is 50/50 · Espresso is still bootstrapping).
- **2027+ trend**: The AVS market may split into "DA commoditization" (EigenDA / Celestia / Avail price war) and "differentiated services" (Espresso shared sequencer · Lagrange coprocessor · Witness Chain DePIN verification).

**Rehypothecation systemic risk**:
- Vitalik in 2024 年 repeatedly warned against overextending EigenLayer into "application-layer consensus": concern about slashing cascade when each 1  unit of ETH simultaneously secures 5+ AVSs.
- Actual data: 2026-Q2  average rehypothecation coefficient 2.5-3x · far below the theoretical maximum (any number of AVSs) · because most ETH opts into only 2-3  head AVSs.
- But LRT vaults such as EtherFi / Mellow opt into multiple AVSs by default · users implicitly bear cascade. Mellow vault internal diversification mitigates · but cross-vault correlation still exists (the same operator runs multiple AVSs at the same time).

**Symbiotic multi-asset strategy vs EigenLayer ETH-pure**:
- EigenLayer maintains ETH (+LST) purity · because Ethereum community consensus + ETH is the deepest crypto-economic security pool.
- Symbiotic accepts any asset (including stablecoins · project tokens), letting AVSs self-select risk profiles.
- Over the long term, Symbiotic may win customers EigenLayer cannot get in "non-ETH-native AVSs" (BTC cross-chain · DePIN · AI inference); EigenLayer keeps its advantage in "ETH-aligned AVSs" (customers are ETH-native dApps).

**Slashing case studies being collected**:
- 2025-Q3  EigenLayer operator (mid-sized node) 1 件 triggered a ~$200K slash through validator-key misconfiguration · operator compensated at its own cost.
- 2025-Q4  EigenDA 1 件 quorum-shortage event triggered a ~$80K collective slash · the AVS mitigated itself.
- 2026-Q1  Symbiotic 1 件 vault configuration bug caused a ~$1M slash · vault curator compensated with insurance.
- Actual slash cases cumulative < $5M · but each case raised community vigilance · promoted stronger audits + insurance pools.

**Regulatory boundary**:
- The SEC in 2024 年 repeatedly stated that "staking-as-a-service" is close to securities (already took action against Coinbase · Kraken) · restaking is a superset of staking · same risk.
- Under EU MiCA, LST may be classified as ART (asset-referenced token) · LRT is more complex (base layer is LST · upper layer adds restaking yield) · regulatory route is unclear.
- Japan FSA 2025  public statement: staking-as-a-service is an entry subject for "ERS (Electronic Recordable Securities)" · restaking should also follow this.
- Before institutional customers (BNY · BlackRock · J.P. Morgan) enter restaking, regulatory clarity is needed · timeline is at least 2027+.

**Formal verification / engineering quality**:
- EigenLayer has the most complete audit coverage in restaking (6+ independent audit firms + multiple rounds before slashing enablement)
- Lido CSM / stVaults have the industry's highest audit depth (7+ firms + Certora formal verification)
- Symbiotic / Karak / Mellow / EtherFi are still catching up in audit coverage · some early audits do not include slashing logic

**Relation between restaking and DAG-BFT / threshold consensus**: Restaking lets AVSs launch without newly recruiting validators · but AVSs' own consensus-algorithm choice remains important (see [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]] and [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]). Espresso shared sequencer uses HotShot (a DAG-BFT variant) · Lagrange coprocessor leans toward a threshold-signature model. AVS consensus choice affects operator real workload + revenue structure, and in reverse affects which restaking layer is welcomed by operators.

**Intersection of validator economy 4  variables**: See [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]: the 4  variables of security budget · stake mobility · validator count · slashing severity are all rewritten at the restaking layer. Restaking expands stake mobility from a single chain to multi-AVS · reuses validator count instead of newly recruiting · but complicates slashing severity (the same ETH has different slash conditions across multiple AVSs). This is why Vitalik repeatedly warns that restaking should not be overextended into "application-layer consensus": when the number of AVSs exceeds operator monitoring bandwidth, validator economic variables are no longer well-defined.

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[systems/INDEX|systems index]]
- [[systems/eigenlayer-overview|EigenLayer overview]]
- [[systems/eigenlayer-avs-mechanism|EigenLayer AVS mechanism]]
- [[systems/eigenlayer-l1-bootstrapping|EigenLayer L1 bootstrapping]]
- [[systems/pectra-eip-7251-institutional-staking|Pectra EIP-7251 institutional staking]]
- [[systems/bft-validator-economy-overview|BFT validator economics overview]]
- [[systems/bft-validator-economy-four-variables|BFT validator economy four variables]]
- [[systems/threshold-bft-consensus-rust-implementations|threshold BFT consensus Rust implementations]]
- [[systems/dag-bft-vs-chain-bft-architecture|DAG-BFT vs Chain-BFT]]
- [[exchanges/liquid-staking-restaking-cex-exposure|liquid staking restaking CEX エクスポージャー]]
- [[systems/cross-chain-five-pole-comparison-matrix|cross-chain five-pole comparison matrix]]
- [[systems/hyperlane-overview|Hyperlane overview]]
<!-- /wiki-links:managed -->

## Sources

- EigenLayer docs · https://docs.eigenlayer.xyz/
- Symbiotic docs · https://docs.symbiotic.fi/
- Karak docs · https://docs.karak.network/
- Mellow docs · https://docs.mellow.finance/
- EtherFi docs · https://docs.ether.fi/
- Lido docs · https://docs.lido.fi/
- EigenDA docs · https://docs.eigenda.xyz/
- Hyperlane docs · https://docs.hyperlane.xyz/
- Espresso docs · https://docs.espressosys.com/
- Lagrange docs · https://docs.lagrange.dev/
- Witness Chain docs · https://docs.witnesschain.com/
- DefiLlama restaking · https://defillama.com/protocols/Restaking
- L2Beat DA summary · https://l2beat.com/data-availability/summary
- Vitalik blog · "Don't overload Ethereum's consensus" (2023  public post)
