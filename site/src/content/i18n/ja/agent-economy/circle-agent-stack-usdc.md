---
source: agent-economy/circle-agent-stack-usdc
source_hash: f37836e4305da284
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Circle Agent Stack · USDC agent wallets, nanopayments & marketplace"
translated_at: 2026-07-28T22:03:26.809Z
---

# Circle Agent Stack · USDC agent wallets, nanopayments & marketplace

## ウィキ上の位置づけ

このエントリは、agent 決済における Circle / USDC 発行体スタック側の見取り図として、[[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル総覧]] の配下に置く。より広い決済資産の選択問題については [[agent-economy/stablecoin-routing-agent-transactions|AI agent 取引の stablecoin routing]]、HTTP 402 の交渉レイヤーについては [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]、最も近い crypto-native な wallet / agent-tool の同位比較としては [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]] と併せて読むこと。

## 主要事実

- Circle は 2026-05-11 に Circle Agent Stack を発表した。これは agent が資金を保持し、サービスを発見し、USDC で取引するための chain-agnostic / protocol-agnostic なインフラである。 ^[extracted]
- 初期スタックは Agent Wallets、Agent Marketplace、Circle CLI、Circle Gateway powered Nanopayments、Circle Skills で構成される。 ^[extracted]
- 2026-07-29 時点でも、Circle の公式 product page と developer documentation は Agent Wallets、Agent Marketplace、Circle CLI、Nanopayments、Circle Skills を公開利用可能な product surface として提供しており、announcement-only の concept ではない。 ^[extracted]
- Circle は、Agent Wallets により agent が人間の定義した policy の範囲内で USDC を保持・移動できると説明している。その policy には、時間制限付き spending limit、transfer / x402 cap、recipient allowlist / blocklist、contract address control が含まれる。 ^[extracted]
- Circle の Agent Wallet 文書は、wallet が Circle user-controlled wallet と 2-of-2 MPC key management に基づき、key share は agent に公開されず、user が custody を保持し、transfer は onchain submission 前に sanctions control によって screening されるとしている。 ^[extracted]
- Circle Gateway powered Nanopayments は、$0.000001 からの gas-free USDC transfer をサポートし、個別 payment を毎回 onchain settle するのではなく Gateway batching を使う。 ^[extracted]
- Nanopayments の x402 flow は、buyer が Gateway Wallet contract に USDC を deposit し、seller が `402 Payment Required` を返し、buyer が offchain の EIP-3009 authorization に署名し、seller または facilitator が検証し、Gateway が後で net position を bulk settle する、という流れである。 ^[extracted]
- Agent Marketplace は、agent と人間が USDC 建て service を discover、evaluate、integrate、pay するための Circle の directory であり、Circle は service listing を machine-readable な構造だと説明している。 ^[extracted]
- Circle CLI は、agent framework または terminal から agent wallet、policy、funding、transfer、swap、signature、contract call、marketplace discovery、skill installation を扱う command surface である。 ^[extracted]
- Circle Skills は Circle product 向けの open-source agent skill であり、agentic USDC payment、crosschain transfer、wallet、smart contract、Circle の documentation / SDK context を含む。 ^[extracted]
- Circle の 2026 年の位置づけは、一般的な multi-stablecoin routing 問題を USDC-first の loop に狭めるものである。wallet funding、policy control、x402 / Nanopayments authorization、Gateway settlement、service discovery、developer skills が同じ issuer rail の周囲に置かれる。 ^[inferred]

## 仕組み / 動作方式

Circle Agent Stack は、USDC を単なる token balance ではなく、agent 向けの運用 loop に変える。user または developer がまず Agent Wallet に資金を入れ、policy boundary を定義する。agent は Agent Marketplace で paid service を発見し、x402-compatible request として呼び出し、Gateway balance から EIP-3009 payment authorization に署名し、seller または facilitator が payment を検証した後に resource を受け取る。Gateway はそれらの signed authorization を集約し、後で net position を onchain で bulk settle する。これが gas-free nanopayment という主張の背後にある仕組みである。

| Component | loop 内の役割 | control surface |
|---|---|---|
| Agent Wallets | agent に、hold、transfer、bridge、swap、sign、x402 service payment が可能な USDC-capable wallet を与える。 | user custody、2-of-2 MPC、spending limit、allowlist / blocklist、sanctions screening。 |
| Nanopayments | signed authorization を offchain verify し、Gateway 経由で settlement を batch 化することで、sub-cent / high-frequency な x402 payment を経済的に成立させる。 | EIP-3009 signature、Gateway unified balance、facilitator / seller verification、後続の bulk onchain settlement。 |
| Agent Marketplace | agent が paid API や service を見つけるための machine-readable service catalog を提供する。 | service metadata、pricing、capability、invocation method、provider distinction。 |
| Circle CLI | human と agent に、wallet、funding、policy、transfer、swap、contract、skill operation のための deterministic command interface を与える。 | `circle wallet ...`、`circle contract ...`、`circle skill ...`、agent 利用向けの JSON / quiet output mode。 |
| Circle Skills | Circle product knowledge と workflow を reusable agent skill として packaged する。 | skill list / info / install / update command と public `circlefin/skills` catalog。 |

Sources: ^[https://developers.circle.com/agent-stack] ^[https://developers.circle.com/agent-stack/agent-wallets] ^[https://developers.circle.com/gateway/nanopayments] ^[https://agents.circle.com/services] ^[https://developers.circle.com/agent-stack/circle-cli/command-reference] ^[https://github.com/circlefin/skills]


settlement path は、API call ごとに標準的な onchain transfer を発生させる方式とは意図的に異なる。

1. buyer が one-time onchain transaction で Gateway Wallet balance に USDC を fund する。
2. paid API が accepted payment requirement を含む `402 Payment Required` を返す。
3. agent が Gateway batching domain に対して offchain EIP-3009 `TransferWithAuthorization` payload に署名する。
4. signed payment payload を付けて request を retry する。
5. seller または facilitator が Gateway verification / settlement のために authorization を submit する。
6. seller は verification 後すぐに resource を提供でき、Gateway は後で batch を netting して onchain commit する。

つまり Circle は x402 を置き換えているのではない。x402 向けの USDC settlement method を供給している。x402 は server が payment を要求し、client が proof を付けて retry する方法を定義する。一方で Nanopayments は、その proof がどのように fund、verify、sub-cent use case として経済的に settle されるかを定義する。

policy layer は agent safety 上の重要な差分である。Agent Wallets は model に private key を渡さない。Circle の文書は、wallet を user-custodied で、agent が CLI command を通じて操作するものと位置づける。policy rule は outbound USDC transfer と x402 payment を制約する。transfer cap は per-transaction または rolling-window limit にでき、allowlist / blocklist は recipient address や contract address を制限できる。実務上、agent は unrestricted balance から推論して支出するのではなく、bounded payment envelope の内側だけで支出できる。

[[agent-economy/stablecoin-routing-agent-transactions|一般的な stablecoin-routing picture]] と比べると、Circle の stack はより垂直統合されている。generic routing は、特定の payment に対してどの stablecoin、chain、wallet、facilitator、merchant acceptance set が勝つべきかを問う。Circle の答えは、asset を USDC に保ち、service を x402 / Nanopayments で公開し、裏側では Gateway と CCTP / Circle infrastructure を使って multichain reach を確保する、というものだ。これは agent の reasoning を単純化するが、Circle の issuer rail を default economic layer にする。

[[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]] と比べると、重心が異なる。Coinbase CDP / AgentKit は developer wallet と onchain action toolkit から始まり、Coinbase-hosted x402 facilitator support と Base を自然な home chain とする。Circle Agent Stack は USDC issuer と Gateway settlement layer から始まり、その周囲に policy wallet、marketplace、CLI、USDC acceptance 向け skill を追加する。どちらの stack も agent が stablecoin で API に支払う世界を狙うが、Coinbase は wallet / chain developer platform に近く、Circle は settlement asset / issuer / service-discovery loop に近い。

## 起源と展開

Circle Agent Stack の launch は、「agent が tool を呼べる」段階から「agent が tool に支払える」段階への 2026 年の移行の一部である。Circle の 2026-05 の発表は、欠けている layer を machine-speed、low-value、high-frequency activity のための financial infrastructure と位置づけた。対象は、agent が API、data、compute、service に real time に支払うユースケースである。Circle は adoption signal として x402 activity も示し、2026-04-29 時点で x402 が過去 30 日に $24.24 million を処理し、transaction value の 99.8% が USDC で settled されたと説明した。

時系列も重要である。Circle はすでに Nanopayments と Gateway を high-frequency / sub-cent agent payment の rail として説明していた。2026-05-08 には、Next.js、x402、Circle Gateway、USDC、LangChain buyer agent を使った Arc Testnet 上の buyer / seller flow の reference implementation を公開した。2026-05-11 には、その payment rail を Agent Wallets、Agent Marketplace、Circle CLI、Circle Skills と組み合わせ、より広い Agent Stack として package 化した。2026 年の報道は、この release を、USDC を autonomous software system 向け programmable payment infrastructure にする Circle の push と説明した。

戦略的な含意は、Circle が settlement だけでなく、より広い領域を取りに行っているという点である。agent が wallet、spend policy、paid API を発見する手段、payment method、CLI surface、reusable implementation skill を必要とするなら、Circle はそれぞれを USDC に向けたい。未解決の論点は adoption と neutrality である。developer は USDC payment 向けの single issuer-backed loop を好む可能性があるが、marketplace や agent platform は、merchant reach、地域規制、wallet default が異なる場所では、multi-asset routing、non-Circle facilitator、または non-stablecoin rail も要求し続ける可能性がある。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/INDEX|Agent economy index]]
- [[agent-economy/stablecoin-routing-agent-transactions|AI agent 取引の stablecoin routing]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP developer platform]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル総覧]]
- [[agent-economy/agent-custody-and-authorization-framework-2026|Agent custody and authorization framework 2026]]
- [[agent-economy/erc-7715-overview|ERC-7715 wallet permissions]]
- [[fintech/usd-stablecoin-interchange|USD stablecoin interchange]]
<!-- /wiki-links:managed -->

## 出典

- Circle blog, "Introducing Circle Agent Stack: Financial Infrastructure for the Agentic Economy" — https://www.circle.com/blog/introducing-circle-agent-stack-financial-infrastructure-for-the-agentic-economy
- Circle press release, "Circle Powers the Agentic Economy with New AI Infrastructure" — https://www.circle.com/pressroom/circle-launches-ai-infrastructure-to-power-the-agentic-economy
- Circle Agent Stack product page — https://www.circle.com/agent-stack
- Circle Agent Stack developer docs — https://developers.circle.com/agent-stack
- Circle Agent Wallets docs — https://developers.circle.com/agent-stack/agent-wallets
- Circle spending-policy docs — https://developers.circle.com/agent-stack/agent-wallets/wallet-operations/custom-policies
- Circle Nanopayments product page — https://www.circle.com/nanopayments
- Circle Nanopayments developer docs — https://developers.circle.com/gateway/nanopayments
- Circle docs, "What is x402?" — https://developers.circle.com/gateway/nanopayments/concepts/x402
- Circle Agent Marketplace — https://agents.circle.com/services
- Circle CLI command reference — https://developers.circle.com/agent-stack/circle-cli/command-reference
- Circle Skills public repository — https://github.com/circlefin/skills
- Cointelegraph via TradingView, "Circle makes USDC push into AI agent payment tools" — https://www.tradingview.com/news/cointelegraph%3Ac6949a402094b%3A0-circle-makes-usdc-push-into-ai-agent-payment-tools/
- Coinbase Agentic Wallet CLI docs — https://docs.cdp.coinbase.com/agentic-wallet/cli/welcome
