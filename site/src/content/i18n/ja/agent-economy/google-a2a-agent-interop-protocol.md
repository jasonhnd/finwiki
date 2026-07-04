---
source: agent-economy/google-a2a-agent-interop-protocol
source_hash: 43ecafc586b239dc
lang: ja
model: codex-manual-verified
status: machine
fidelity: ok
title: "Agent2Agent (A2A) · クロスベンダー agent 相互運用プロトコル"
translated_at: 2026-07-03T07:35:00.000Z
---

# Agent2Agent (A2A) · クロスベンダー agent 相互運用プロトコル

## ウィキ上の位置づけ

このエントリは [[agent-economy/ai-agent-payment-protocols-overview|AI Agent 決済プロトコル概観]] の隣に置く。agent commerce では、資金が動く前に非決済の coordination layer が必要になるためである。決済境界については [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol]] と [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent 決済プロトコル比較]]、身元・認可については [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity bridge]]、対照的な tool / extension surface については [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]] と照らして読む。より広い software interoperability layer は [[systems/INDEX|systems index]]、regulated payment boundary は [[payments/INDEX|payments index]] を参照する。

## 主要な事実

- Agent2Agent (A2A) は、Google が作成した open protocol で、vendor、platform、framework をまたいだ安全な agent-to-agent communication と collaboration を目的とする。 ^[extracted]
- Google は 2025-04-09 に A2A を発表し、50 超の technology / service partner が支持した。その後 2025-06-23 に specification、SDK、developer tooling を Linux Foundation hosted project へ移管した。 ^[extracted]
- Linux Foundation は A2A を自らの governance 下にある vendor-neutral な project と位置づけ、launch 時点で 100 超、2026 年までに 150 超の supporting organizations があると説明した。 ^[extracted]
- A2A は discovery / delegation / messaging layer である。agent は capabilities を広告し、message を交換し、task を管理し、private memory、internal tools、implementation state を公開せずに collaborate できる。 ^[extracted]
- A2A は Agent Card を標準化しており、public discovery path として `https://{agent-server-domain}/.well-known/agent-card.json` が推奨されている。 ^[extracted]
- A2A は AP2 とは異なる。AP2 は agent-led commerce の payment / mandate layer であり、A2A は AP2 が拡張または利用できる peer-agent communication layer である。 ^[extracted]
- A2A は MCP と補完関係にある。MCP は agent と tools / resources を接続し、A2A は独立した agent 同士を organization boundary をまたいで接続する。 ^[extracted]
- 2026 年までに、A2A は Microsoft Azure AI Foundry / Copilot Studio、Amazon Bedrock AgentCore Runtime、そして Google Cloud の ADK、Agent Engine、Cloud Run、Gemini Enterprise、AI Agent Marketplace などの surface で cloud-platform support を得ていた。 ^[extracted]

## 仕組み／動作の仕方

A2A は agent を隠れた function call ではなく peer として扱う。**client agent** は **remote agent** を discover するか設定で受け取り、remote agent の Agent Card を読み、interaction mode と authentication scheme を選び、task-oriented message を送る。remote agent は即時結果を返すことも、progress を stream することも、後で state と artifact を取得できる long-running task を継続することもできる。

Agent Card は discovery の基本単位である。これは JSON document で、remote agent の identity、provider、endpoint URL、supported capabilities、authentication requirements、input / output modes、skills を記述する。public web の pattern は意図的に単純で、card を `/.well-known/agent-card.json` に公開すれば、別の agent が HTTP GET で取得できる。public discovery が sensitive capabilities を露出する場合、enterprise deployment では curated registry や private configuration も使える。

この protocol の中核は settlement ではなく delegation である。recruiting agent は background check を compliance agent に引き渡せる。incident-response coordinator は log analysis を observability agent に、remediation research を別の agent に route できる。commerce agent は payment layer を呼ぶ前に merchant agent や payment agent を discover できる。A2A が handoff の共通言語として提供するのは、messages、tasks、artifacts、status updates、streaming、push notifications、protocol-version negotiation である。

この境界は隣接する標準を読むうえで重要である。

| Layer | 標準化するもの | A2A との関係 |
|---|---|---|
| A2A | Agent discovery、peer messaging、task state、delegation、multimodal exchanges | 横方向の agent-to-agent fabric |
| MCP | Database、API、file、local function など、agent から tool / resource への access | 縦方向の agent-to-tool interface |
| AP2 | Agent-led commerce における user authorization mandate と payment accountability | A2A と組み合わせられる payment / commerce extension |

production cloud では、A2A は agent framework 間の one-off adapter を避ける方法になっている。Microsoft は Azure AI Foundry と Copilot Studio での A2A support を説明し、AWS は Amazon Bedrock AgentCore Runtime での A2A support と、`/.well-known/agent-card.json` にある authenticated Agent Cards を文書化している。Google Cloud は ADK、Agent Engine、Cloud Run、Gemini Enterprise、AI Agent Marketplace にまたがる native A2A build / deploy / marketplace flow を文書化している。

## 起源と進化

Google は 2025 年 4 月に A2A を agent interoperability のための open protocol として発表し、Anthropic の MCP と補完関係にあると位置づけた。当初の design principles は、HTTP、SSE、JSON-RPC、enterprise authentication / authorization、long-running tasks、text-only chat pipe ではない modality-agnostic content parts という、実務的な web alignment だった。

2025 年 6 月、Google は A2A を Linux Foundation に寄贈した。寄贈対象には specification、SDK、developer tooling が含まれ、Linux Foundation はこの project を agent interoperability の neutral home として位置づけた。寄贈発表で named foundational participants とされたのは、Amazon Web Services、Cisco、Google、Microsoft、Salesforce、SAP、ServiceNow などである。

2026 年までに、project は launch-stage signaling から platform integration へ移った。Linux Foundation は、150 超の supporting organizations、first stable specification としての version 1.0、cryptographic identity verification のための Signed Agent Cards、multi-protocol support、cloud integrations を報告した。Google Cloud も A2A を自社 product surface に移し、A2A agents を build する ADK、deployment のための Agent Engine / Cloud Run / GKE、external A2A agents を登録する Gemini Enterprise、distribution のための AI Agent Marketplace を用意した。

戦略的には、A2A は **inter-agent control plane** になろうとしている。誰が支払うか、誰が資金を保持するか、どの wallet / card / bank rail で settlement するかは決めない。代わりに、agent 同士が互いを認識し、到達できるようにする。だからこそ、この protocol は [[agent-economy/ap2-overview|AP2]] と [[agent-economy/ai-agent-payment-protocols-overview|agent payment protocols]] の隣で読むと最も有用である。AP2 は user authorization to transact を証明できるが、A2A は payment step の前後で関係する agent が互いを見つけ、work を delegate し、task context を保つための layer である。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[agent-economy/ap2-overview|AP2 overview]]
- [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|Agent identity bridge]]
- [[agent-economy/agent-payment-protocol-four-way-comparison-2026|Agent payment protocol four-way comparison]]
- [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]]
- [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]]
- [[agent-economy/ap2-technical-spec|AP2 technical spec]]
- [[agent-economy/x402-http-payment-overview|x402 HTTP payment overview]]
<!-- /wiki-links:managed -->

## 出典

- A2A project repository - https://github.com/a2aproject/A2A
- A2A protocol specification - https://a2a-protocol.org/latest/specification/
- A2A Agent Discovery documentation - https://a2a-protocol.org/latest/topics/agent-discovery/
- A2A and MCP comparison - https://a2a-protocol.org/latest/topics/a2a-and-mcp/
- Google Developers Blog, "Announcing the Agent2Agent Protocol (A2A)" - https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
- Google Developers Blog, "Google Cloud donates A2A to Linux Foundation" - https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/
- Linux Foundation, "Linux Foundation Launches the Agent2Agent Protocol Project..." - https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents
- Linux Foundation, "A2A Protocol Surpasses 150 Organizations..." - https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- Microsoft Cloud Blog, "Empowering multi-agent apps with the open Agent2Agent (A2A) protocol" - https://www.microsoft.com/en-us/microsoft-cloud/blog/2025/05/07/empowering-multi-agent-apps-with-the-open-agent2agent-a2a-protocol/
- AWS Machine Learning Blog, "Introducing agent-to-agent protocol support in Amazon Bedrock AgentCore Runtime" - https://aws.amazon.com/blogs/machine-learning/introducing-agent-to-agent-protocol-support-in-amazon-bedrock-agentcore-runtime/
- Google Cloud Blog, "Agent2Agent protocol (A2A) is getting an upgrade" - https://cloud.google.com/blog/products/ai-machine-learning/agent2agent-protocol-is-getting-an-upgrade
- Google Cloud Blog, "Announcing Agent Payments Protocol (AP2)" - https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
