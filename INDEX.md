# FinWiki Index

> Last privacy review: 2026-05-20 09:15 JST.
> Current public surface: 832 wiki entries checked by the link audit, including domain entries and the root index, plus control documents, templates, and release notes.

FinWiki is a public-facing Markdown knowledge base for finance, fintech, crypto-asset regulation, Japanese financial institutions, payment infrastructure, capital markets, and adjacent industrial context.

## Public-Surface Rule

- Keep only material that can be described as public internet information, public-source synthesis, or repository maintenance metadata.
- Do not include local filesystem paths, private email addresses, personal income / asset figures, private conversations, customer or counterparty details, internal project code names, or unpublished advisory cases.
- Public figures, public companies, public regulators, official corporate addresses, laws, regulatory registers, filings, press releases, and public market data may be used when they are relevant to the entry.
- If a note cannot be sanitized without losing its meaning, remove it from the public repository.

## Domain Map

| Domain | Entries | Route | Scope |
|---|---:|---|---|
| JapanFG | 415 | [[JapanFG/INDEX]] | Japanese financial groups, banks, licensed bank operating companies, regional-bank operating companies, Tohoku / Fidea / Jimoto, Kanto, Chubu, Kansai / Chugoku, Shikoku, Kyushu / Okinawa, second-regional long-tail bank operating-company pages, foreign-bank branch P0 / P1 Asia anchors, P2 ICSD / collateral / China / ASEAN / India / ANZ corridor anchors, P3 Australia / Taiwan / Indonesia / Philippines / Brazil corridor anchors, foreign-bank branch registry index, foreign-bank branch / agency / adjacent-license routes, bank license / BaaS boundary, payment license stack, specialty trust-bank and CCI current-name anchors, trust-company registry index, insurers, insurance holding companies, FSA life-insurer exact-name anchors, life subsidiaries / specialty insurers, non-life major / direct / specialty / reinsurance operating companies, pet / outdoor / telco-linked specialty insurers, securities firms, asset managers, FIEA operators, securities license-stack and insurance license / solvency controls, policy finance, payment / card / PSP / wallet / remittance / stablecoin infrastructure companies, consumer-finance / auto-finance operators, fintech companies, foreign Japan subsidiaries, securities finance, exchange holding-company infrastructure, report-source references, and expansion backlogs. |
| exchanges | 115 | [[exchanges/INDEX]] | Japan and global CEX / DEX, VASP regulation, JVCEA / FSA registered-operator completeness, custody, IEO, warnings, and incidents. |
| fintech | 104 | [[fintech/INDEX]] | Stablecoins, tokenized money, EPI, GENIUS, MiCA, MAS, HKMA, CBDC, embedded wallets, and monetary geopolitics. |
| systems | 44 | [[systems/INDEX]] | Cross-chain infrastructure, BFT / validator economics, account abstraction, Canton / DAML, Besu, Ethereum upgrades, and protocol implementation topics. |
| agent-economy | 21 | [[agent-economy/ai-agent-payment-protocols-overview]] | AI-agent payment protocols, x402, AP2, embedded wallets, and agent-commerce infrastructure. |
| banking | 24 | [[banking/INDEX]] | Net banks, net-bank competition map, BaaS operating models, cooperative banking, JA Bank system, JF Marine Bank system, shinkin / credit-cooperative / rokin registry indexes, trust-bank / custody infrastructure, trust-bank custody operating comparison, master trust / custody bank landscape, regional bank API partnerships, foreign-bank retreat, regional-bank consolidation, and quick-deposit flows. |
| business | 9 | [[business/gmo-internet-group]] | Public company / public person strategic cases and business-model context. |
| policy-finance | 13 | [[policy-finance/INDEX]] | Public finance, development finance, export credit, housing finance, SME / agriculture / fisheries credit guarantees, policy-bank adjacency, JICA, JBIC, NEXI, JOGMEC, and JASSO. |
| insurance | 12 | [[insurance/INDEX]] | Solvency, ESR, life-insurance distribution, mutual-company governance, internet life insurance, life-insurance big-four comparison, non-life big-three comparison, public-private earthquake insurance scheme, agency / brokerage distribution, reinsurance, and direct non-life insurance. |
| finance | 12 | [[finance/INDEX]] | Public finance reference pages for FIRE math, cross-border M&A, acquisition finance, activist / engagement playbook, tender offers / public-company control transactions, MBO / squeeze-out process, large-shareholding disclosure, fair disclosure / insider trading controls, shareholder proposal / AGM voting route, investment-banking league tables, and public tax-jurisdiction comparison. |
| security | 5 | [[security/bytecode-forensic-three-tier-verify]] | Forensics, supply-chain risk, bytecode verification, and Wayback evidence preservation. |
| money-market | 5 | [[money-market/INDEX]] | Call markets, JGB repo / securities financing, BoJ open-market operations, and Japan money-market structure. |
| governance | 2 | [[governance/japan-general-foundation-establishment-requirements]] | Public legal and grant information for Japanese foundations and research grants. |
| manufacturing | 3 | [[manufacturing/INDEX]] | Manufacturing companies relevant to finance, regional banks, and captive finance. |
| retail | 3 | [[retail/INDEX]] | Retail groups as financial-services, payment, loyalty, ATM, and distribution platforms. |
| trade | 2 | [[trade/jetro-organization-structure]] | JETRO and trade-channel knowledge. |
| corporate-strategy | 1 | [[corporate-strategy/partial-spinoff-tax-deferral]] | Public corporate reorganization and tax-structured spin-off reference. |
| loyalty | 2 | [[loyalty/INDEX]] | Japan points, rewards, loyalty liabilities, and retail / finance data loops. |
| payments | 18 | [[payments/INDEX]] | Japan cashless-payment, payment license stack, bank API / electronic payment agency, bank API incident / fraud controls, account-to-account payment, account-direct merchant acquiring, card issuer / acquirer / processor split, card security / authentication controls, interchange / merchant-fee stack, payment clearing / settlement infrastructure, card acquiring / merchant PSP, BNPL / credit-purchase boundary, wallet, prepaid issuer registry, funds-transfer registry, credit / card registry, code-payment competition, PSP settlement risk, and EPI-adjacent settlement landscape. |
| securities | 21 | [[securities/INDEX]] | NISA, IPO listing disclosure, security-token secondary markets, online brokerage competition, best execution / SOR / PTS, PTS liquidity data, margin trading / securities finance, short-selling / stock-loan controls, stock lending market route, prime brokerage / institutional financing, underwriting market structure, FIEA operator registry, JSDA, exchange venues, clearing, settlement, market-infrastructure mapping, and securities-market flow. |

## Control Documents

- [[README]]: bilingual public entry point.
- [[SCHEMA]]: entry frontmatter and maintenance conventions.
- [[OBSIDIAN-SETUP]]: generic Obsidian reading setup without local paths.
- [[CHANGELOG]]: bilingual maintenance record.
- [[AGENTS]]: local agent rules for this repository.
- [wiki-link-improvement-plan.md](wiki-link-improvement-plan.md): body-link density and semantic-link audit report.
- `tools/wiki_link_audit.py`: repeatable internal-link quality audit.
- `.templates/`: new-entry template surface.
- `releases/`: public release-note drafts.

## Link Convention

- Use vault-root wikilinks such as `[[fintech/mica-overview]]`, not local filesystem paths.
- Links should resolve to an existing `domain/slug.md` or `domain/INDEX.md`.
- Prefer domain indexes as routing surfaces before adding new entries.
- Every true wiki entry should have at least three body wikilinks before `## Related` / `## Sources`.
- Body links should include route, peer / contrast, and system / regulatory context where possible.

## Maintenance Checklist

1. Confirm the target file belongs on the public surface.
2. Remove private identifiers and unpublished case details before writing.
3. Add or keep public sources where available.
4. Add body wikilinks, not only footer `Related` links.
5. Update relevant domain indexes when entry lists change.
6. Update `README.md` and `CHANGELOG.md` for public-surface, structure, sync, release, or maintenance-rule changes.
