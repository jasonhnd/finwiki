---
title: Agent2Agent (A2A) · cross-vendor agent interoperability protocol
aliases: [google-a2a-agent-interop-protocol, agent2agent, A2A, a2a-protocol, agent-card-json]
domain: agent-economy
created: 2026-07-03
last_updated: 2026-07-29
last_tended: 2026-07-29
review_by: 2026-10-27
confidence: certain
tags: [agent-economy, protocol, a2a, agent2agent, interoperability, google, linux-foundation, mcp, ap2, agent-card]
sources:
  - https://github.com/a2aproject/A2A
  - https://a2a-protocol.org/latest/specification/
  - https://a2a-protocol.org/latest/announcing-1.0/
  - https://a2a-protocol.org/latest/topics/agent-discovery/
  - https://a2a-protocol.org/latest/topics/a2a-and-mcp/
  - https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
  - https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/
  - https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents
  - https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
  - https://www.microsoft.com/en-us/microsoft-cloud/blog/2025/05/07/empowering-multi-agent-apps-with-the-open-agent2agent-a2a-protocol/
  - https://aws.amazon.com/blogs/machine-learning/introducing-agent-to-agent-protocol-support-in-amazon-bedrock-agentcore-runtime/
  - https://cloud.google.com/blog/products/ai-machine-learning/agent2agent-protocol-is-getting-an-upgrade
  - https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
status: active
---

# Agent2Agent (A2A) · cross-vendor agent interoperability protocol

## Wiki route

This entry sits beside [[agent-economy/ai-agent-payment-protocols-overview|AI Agent payment protocols overview]] because agent commerce needs a non-payment coordination layer before money moves. Read it against [[agent-economy/ap2-overview|AP2 · Google Agent Payments Protocol]] and [[agent-economy/agent-payment-protocol-four-way-comparison-2026|agent payment protocol comparison]] for the payment boundary, [[agent-economy/agent-identity-defi-and-traditional-finance-bridge|agent identity bridge]] for identity and authorization, and [[agent-economy/claude-code-extension-architecture|Claude Code extension architecture]] for a contrasting tool / extension surface. Use [[systems/INDEX|systems index]] for the broader software interoperability layer and [[payments/INDEX|payments index]] for the regulated payment boundary.

## Key facts

- Agent2Agent (A2A) is an open protocol created by Google for secure agent-to-agent communication and collaboration across vendors, platforms, and frameworks. ^[extracted]
- Google announced A2A on 2025-04-09 with support from more than 50 technology and service partners, then transferred the specification, SDKs, and developer tooling to a Linux Foundation-hosted project on 2025-06-23. ^[extracted]
- The Linux Foundation described A2A as vendor-neutral under its governance, with more than 100 supporting companies at launch and more than 150 supporting organizations by 2026. ^[extracted]
- As of 2026-07-29, the official specification identifies 1.0.0 as the latest released version; the A2A project calls v1.0 its first stable, production-ready release, and the Linux Foundation reports active production deployments across multiple industries. ^[extracted]
- A2A is the discovery / delegation / messaging layer: agents advertise capabilities, exchange messages, manage tasks, and collaborate without exposing private memory, internal tools, or implementation state. ^[extracted]
- The protocol standardizes Agent Cards, including the recommended public discovery path `https://{agent-server-domain}/.well-known/agent-card.json`. ^[extracted]
- A2A is distinct from AP2: AP2 is the payment / mandate layer for agent-led commerce, while A2A is the peer-agent communication layer that AP2 can extend or ride on. ^[extracted]
- A2A is complementary to MCP: MCP connects an agent to tools and resources, while A2A connects independent agents to each other across organizational boundaries. ^[extracted]
- By 2026, A2A had cloud-platform support across Microsoft Azure AI Foundry / Copilot Studio, Amazon Bedrock AgentCore Runtime, and Google Cloud surfaces such as ADK, Agent Engine, Cloud Run, Gemini Enterprise, and AI Agent Marketplace. ^[extracted]

## Mechanism / How it works

A2A treats agents as peers rather than as hidden function calls. A **client agent** discovers or is configured with a **remote agent**, inspects the remote agent's Agent Card, chooses an interaction mode and authentication scheme, then sends task-oriented messages. The remote agent can return immediate results, stream progress, or continue a long-running task whose state and artifacts can be fetched later.

The Agent Card is the discovery primitive. It is a JSON document describing the remote agent's identity, provider, endpoint URL, supported capabilities, authentication requirements, input / output modes, and skills. The public-web pattern is deliberately simple: publish the card under `/.well-known/agent-card.json` so another agent can fetch it with HTTP GET. Enterprise deployments can also use curated registries or private configuration when public discovery would expose sensitive capabilities.

The protocol's core operation is delegation, not settlement. A recruiting agent can hand off background checks to a compliance agent; an incident-response coordinator can route log analysis to an observability agent and remediation research to another agent; a commerce agent can discover a merchant or payment agent before a payment layer is invoked. A2A supplies the shared language for the handoff: messages, tasks, artifacts, status updates, streaming, push notifications, and protocol-version negotiation.

That boundary matters for the adjacent standards:

| Layer | What it standardizes | Relation to A2A |
|---|---|---|
| A2A | Agent discovery, peer messaging, task state, delegation, and multimodal exchanges | Horizontal agent-to-agent fabric |
| MCP | Tool and resource access for an agent, such as databases, APIs, files, or local functions | Vertical agent-to-tool interface |
| AP2 | User authorization mandates and payment accountability for agent-led commerce | Payment / commerce extension that can compose with A2A |

In production clouds, A2A has become a way to avoid one-off adapters between agent frameworks. Microsoft describes A2A support for Azure AI Foundry and Copilot Studio; AWS documents A2A support in Amazon Bedrock AgentCore Runtime, including authenticated Agent Cards at `/.well-known/agent-card.json`; Google Cloud documents native A2A build / deploy / marketplace flows across ADK, Agent Engine, Cloud Run, Gemini Enterprise, and AI Agent Marketplace.

## Origin & evolution

Google announced A2A in April 2025 as an open protocol for agent interoperability, positioning it as complementary to Anthropic's MCP. The original design principles were pragmatic web alignment: HTTP, SSE, JSON-RPC, enterprise authentication / authorization, support for long-running tasks, and modality-agnostic content parts rather than a text-only chat pipe.

In June 2025, Google donated A2A to the Linux Foundation. The donation included the specification, SDKs, and developer tooling, and the Linux Foundation framed the project as a neutral home for agent interoperability. Foundational participants named in the donation announcement included Amazon Web Services, Cisco, Google, Microsoft, Salesforce, SAP, and ServiceNow.

By 2026, the project had shifted from launch-stage signaling to platform integration. The Linux Foundation reported more than 150 supporting organizations, version 1.0 as the first stable specification, Signed Agent Cards for cryptographic identity verification, multi-protocol support, and cloud integrations. Google Cloud also moved A2A into its own product surfaces: ADK for building A2A agents, Agent Engine / Cloud Run / GKE for deployment, Gemini Enterprise for registering external A2A agents, and AI Agent Marketplace for distribution.

The strategic reading is that A2A tries to become the **inter-agent control plane**. It does not decide who pays, who holds funds, or which wallet / card / bank rail settles the transaction. Instead, it makes agents legible and reachable to each other. That is why the protocol is most useful when read beside [[agent-economy/ap2-overview|AP2]] and [[agent-economy/ai-agent-payment-protocols-overview|agent payment protocols]]: AP2 can prove user authorization to transact, but A2A lets the relevant agents find each other, delegate work, and preserve task context before and after the payment step.

## Related
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

## Sources

- A2A project repository - https://github.com/a2aproject/A2A
- A2A protocol specification - https://a2a-protocol.org/latest/specification/
- A2A Protocol, "A2A Protocol Ships v1.0: Production-Ready Standard for Agent-to-Agent Communication" - https://a2a-protocol.org/latest/announcing-1.0/
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
