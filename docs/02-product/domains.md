# 领域现状 / Domains

> 数据源是 root [INDEX.md](../../INDEX.md) 的 Domain Map（`parseDomainMap()` 解析的官方表）。当前 corpus / entry / domain 总数统一读取 `ai-index.json` 的 `counts`，每域 entry 数统一读取 root Domain Map，并由 `bun run index:counts` 校验。本表只保留较稳定的规划边界，不复制易漂移计数。

## Current Snapshot

| Metric | Current source |
|---|---|
| Topical domains | `ai-index.json` → `counts.topical_domains` |
| Link-audited entries | `ai-index.json` → `counts.link_audited_entries` |
| Markdown files | `ai-index.json` → `counts.markdown_files` |
| Per-domain entries | root `INDEX.md` Domain Map, verified by `bun run index:counts` |
| Unresolved link issues | strict release / wikilink audit output |

## Development Stance

| Domain | Current role | Next development stance |
|---|---|---|
| `JapanFG` | Umbrella hub for Japanese financial institutions after the 17-domain physical split. | Umbrella hub only; new institution pages should use the split domains. |
| `regional-banks` | Large split-domain for Japanese regional and second-regional banks. | Maintain; expand only when sourced gaps are explicit. |
| `exchanges` | Large thematic domain for CEX/DEX/VASP regulation and incidents. | Maintain; avoid adding more exchange pages until route quality remains clear. |
| `fintech` | Large thematic domain for stablecoins, tokenized money, CBDC and embedded wallets. | Maintain; add only when policy or infrastructure coverage has a sourced gap. |
| `systems` | Cross-chain, BFT, account abstraction, Canton/DAML and protocol implementation. | Maintain; keep technical pages source-backed and linked to fintech/security where relevant. |
| `foreign-financial-institutions` | Foreign banks, securities and AM operators in Japan. | Maintain; add only registry-backed gaps. |
| `non-life-insurers` | Japanese non-life insurers, kyosai, specialty carriers and registry index. | Maintain; avoid duplicating entity pages already covered in split domains. |
| `payment-firms` | Payment-service operators and payment-adjacent fintech. | Maintain; add only license/register-backed gaps. |
| `financial-regulators` | Regulators, SROs, policy bodies and source registries. | Maintain; prioritize auditability and source-route pages. |
| `trust-banks` | Trust banks, trust companies and custody operators. | Maintain; expand through clearly sourced trust/custody gaps only. |
| `life-insurers` | Life-insurance operating companies. | Maintain; add only missing insurer/reinsurer entities with public sources. |
| `cooperative-banks` | Shinkin, shinkumi, JA/JF and central cooperative institutions. | Maintain; avoid registry stub churn without added business context. |
| `agent-economy` | AI-agent payment protocols and agent-commerce infrastructure. | Maintain; add only when protocol adoption or payment rail coverage changes. |
| `payments` | Cashless payment, license stack, bank API, card and settlement routes. | Maintain; keep as thematic route, not institution registry. |
| `banking` | Net banks, BaaS, cooperative banking and trust/custody infrastructure. | Maintain; route institution-specific pages to split domains where appropriate. |
| `securities-firms` | Securities brokers and Type-1 FIEA operators. | Maintain; add only register-backed missing entities. |
| `policy-finance` | Public finance, development finance, export credit and policy bank adjacency. | Maintain; add only public agency/program gaps. |
| `insurance` | Solvency, distribution, governance, reinsurance and insurance system topics. | Maintain as thematic insurance domain; entity pages stay in split domains. |
| `securities` | Market structure, NISA, best execution, PTS, margin, stock lending and FIEA registry. | Maintain; avoid duplicating `securities-firms` entity pages. |
| `derivatives` | Rates, FX, credit, equity volatility and OTC clearing. | Maintain; add only market-structure gaps with clear sources. |
| `structured-finance` | ABS, RMBS/CMBS, CLO, NPL, project finance, SPVs and rating methodology. | Maintain; add only where source-backed coverage is missing. |
| `real-estate-finance` | J-REIT, securitization, developer finance and investor/tax topics. | Maintain; add only source-backed market-structure gaps. |
| `finance` | Public finance reference pages, M&A, tender offers, disclosure and governance routes. | Maintain; keep broad finance routes linked to securities/corporate-strategy. |
| `business` | Public company/person strategic cases and business-model context. | Maintain; add only public-source cases with clear finance relevance. |
| `card-issuers` | Credit-card issuers, acquirers and affinity-card companies. | Maintain; add only missing issuer/acquirer entities with public sources. |
| `leasing-firms` | Leasing, auto-finance and captive lessor operating companies. | Maintain; avoid duplicating manufacturer-finance thematic pages. |
| `megabanks` | Japanese megabanks and banking financial groups. | Maintain; entity updates should be high-signal, not registry-only churn. |
| `money-market` | Call markets, JGB repo, securities finance and BoJ operations. | Deduplicate near-overlap before adding more pages. |
| `loyalty` | Points, rewards, loyalty liabilities and retail/finance data loops. | Deduplicate point-economics overlap before adding more pages. |
| `asset-managers` | Japanese investment managers / 投資運用業. | Maintain; add only register-backed missing entities. |
| `manufacturer-finance` | Manufacturer captive/vendor/export finance arms and OEM finance subsidiaries. | Maintain; parent manufacturer entity pages do not belong here. |
| `non-profit` | Japanese non-profit and public-interest legal structures. | Recently expanded; verify coverage before adding more. |
| `trade` | JETRO, trade channels and trade finance. | Recently expanded; verify coverage before adding more. |
| `corporate-strategy` | Public corporate reorganization and tax-structured spin-off reference. | Maintain; add only public-source legal/transaction structure gaps. |
| `retail` | Retail groups as financial-services, payment, loyalty and distribution platforms. | Selective expansion candidate after overlap audit. |
| `security` | Forensics, supply-chain risk, bytecode verification and Wayback evidence preservation. | Selective expansion candidate after route-quality audit. |
| `financial-licenses` | Cross-cutting Japanese financial license-stack pages. | Small split-domain; add only if a public-source gap is identified. |
| `trading-company-finance` | Finance/treasury/factoring arms of sogo-shosha. | Small split-domain; add only if a public-source gap is identified. |
| `financial-conglomerates` | Sogo-shosha parent holding companies as entity anchors for finance arms. | Small split-domain; add only if a public-source gap is identified. |
| `consumer-finance` | Consumer-finance lenders and consumer-credit operators. | Small split-domain; add only if a public-source gap is identified. |

## Boundary Rules

- Specific Japanese financial institution entities belong in the 17 split institution domains, not in broad thematic domains.
- `JapanFG/INDEX` is an umbrella route, not a place for new entity pages.
- Theme pages remain in broad domains such as `banking`, `payments`, `insurance`, `securities`, `finance`, `structured-finance`, and `real-estate-finance`.
- Manufacturer parent companies are not financial entities by default. Finance arms go to `manufacturer-finance`; ABS structures go to `structured-finance`; financial subsidiaries can belong to split institution domains.
- Corporate/listed-company governance belongs in `finance`, `securities`, `exchanges`, or `corporate-strategy`; public-interest/non-profit governance belongs in `non-profit`.

## Next Planning Use

- Use [next-development-plan.md](../01-strategy/next-development-plan.md) before assigning new content or tooling work.
- Use [Code/Docs Alignment Audit](../07-quality/code-doc-alignment-audit.md) to check whether a proposed task is fixing a real code/documentation gap or only adding more surface area.
- After any content addition/removal, update root `INDEX.md`, this file if the development stance changes, and the release surface.
