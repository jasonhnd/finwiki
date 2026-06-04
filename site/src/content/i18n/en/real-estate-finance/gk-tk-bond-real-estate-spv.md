---
source: real-estate-finance/gk-tk-bond-real-estate-spv
source_hash: 278a0642ab0a926f
lang: en
status: machine
fidelity: ok
title: "GK-TK bond real-estate SPV"
translated_at: 2026-06-01T03:31:12.276Z
---

# GK-TK bond real-estate SPV

## TL;DR

The GK-TK structure (合同会社 + 匿名組合) is the dominant private-SPV vehicle for Japanese real-estate investment by professional and foreign investors. A 合同会社 (GK — Japanese LLC) is the legal-entity layer that holds the asset (typically a 信託受益権 on the underlying real estate), and the 匿名組合 (TK — silent partnership) is the contractual layer through which investors provide capital to the GK in return for profit-distribution rights without becoming members of the GK. The bond-type GK-TK variant (社債型) additionally issues 社債 (corporate bonds) at the GK level, giving senior debt investors a clean bond claim that is bankruptcy-remote from TK equity. The structure is widely used because (a) TK distributions are deductible at the GK level if conditions are met, producing pass-through-like tax efficiency; (b) the GK form is bankruptcy-remote and cheap to set up compared to a TMK ([[real-estate-finance/japan-cmbs-rmbs-securitization|specified-purpose company]]); (c) foreign LP can invest through an offshore feeder into the TK layer without becoming a Japan-tax-resident; and (d) it is flexible across [[real-estate-finance/real-estate-bridge-fund-japan|bridge fund]], private [[real-estate-finance/j-reit-market-overview|REIT]] feeder, single-asset deal, and foreign-direct-investment use cases.

## Wiki route

This entry sits under [[real-estate-finance/INDEX|real-estate-finance index]] and is the legal-vehicle routing page for Japanese real-estate SPV structures. Read it together with [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] for the listed-equity vehicle, with [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison|private REIT vs listed J-REIT comparison]] for the private-fund alternative, with [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] for the dominant bridge-vehicle use case, with [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS securitization]] for the related securitization route (which often uses TMK rather than GK-TK), and with [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] for the asset-valuation inputs. Pair with [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and custody bank landscape]] for the trustee infrastructure that holds the underlying 信託受益権, with [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]] for the operating split, and with [[banking/master-trust-bank-operating-model|master trust bank operating model]] for the asset-administration backstop. Cross-domain anchors: [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] is the senior-bond buyer at the GK-社債 layer; [[policy-finance/japan-housing-finance-agency|JHF]] is not in this commercial-real-estate vehicle chain but [[policy-finance/INDEX|policy-finance index]] is the parallel public-credit reference; and [[finance/INDEX|finance index]] holds the corporate-finance-vehicle context.

### Two layers, one vehicle

| Layer | Form | Function |
|---|---|---|
| GK (合同会社) | Japanese LLC under 会社法 | Legal entity that holds the asset; bears the contracts; has the bank account; can issue 社債 (bonds) |
| TK (匿名組合) | Silent partnership under 商法 | Contractual capital-provision structure; TK investor provides capital to GK and receives profit-distribution rights, without becoming a GK member |

The GK-TK combination produces a vehicle that:

1. has a legal entity (the GK) capable of holding 信託受益権, owning bank accounts, signing contracts, and issuing 社債;
2. has investors (TK investors) who are not legally members of the GK and are not on the public register;
3. allows the GK to deduct TK distributions for tax purposes if TK-distribution conditions are met under National Tax Agency rules, producing pass-through-like tax economics;
4. is bankruptcy-remote — the TK investors' loss is capped at their TK contribution, and the GK is structured to ring-fence the asset.

### Why GK and not KK or LLP

| Form | Why not for this use case |
|---|---|
| 株式会社 (KK) | Member register (株主名簿) is mandatory and disclosed in some contexts; higher set-up cost; no inherent tax-deductibility benefit; less flexible |
| 合資会社 / 合名会社 (general / limited partnership) | Members bear unlimited or partial liability; not suitable for clean SPV structure |
| 有限責任事業組合 (LLP / 投資事業有限責任組合) | Distinct purpose; LPS used for private-equity funds, not for asset-holding SPV |
| 合同会社 (GK) | Limited liability, simple governance (no shareholder meeting structure needed), low set-up cost, can issue 社債, suits the SPV role |

### The 信託受益権 layer

The GK typically does not hold the real estate directly. Instead:

```
Investors (TK + senior bondholders + mezzanine if any)
              │
              │  capital
              ▼
       GK (合同会社) ────── issues 社債 ──── senior bondholders
              │
              │  beneficiary of trust
              ▼
       Trust bank (信託受託者)
              │
              │  legal title
              ▼
       Underlying real estate
```

Reasons for the 信託受益権 layer:

1. **Asset transferability** — beneficial-trust-interest can be transferred by simple notification to the trust-bank rather than by real-estate registration (which carries 登録免許税 and other transfer costs).
2. **Stamp-duty / 不動産取得税 efficiency** — transfers of 信託受益権 are subject to lower transaction costs than transfers of real estate title.
3. **Bankruptcy remoteness** — the trust-bank holding title isolates the asset from the GK's other creditors.
4. **Operational standardization** — the trust-bank provides standardized rental-income collection, expense-payment, and reporting.

The trust-bank role here is typically filled by [[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]], [[trust-banks/sumitomo-mitsui-trust|SMTB]], or [[trust-banks/mizuho-trust-bank|Mizuho Trust]] — not by custody-only specialists like [[trust-banks/master-trust-bank|MTBJ]] or [[trust-banks/custody-bank|CBJ]], because the role is fee-bearing real-estate-trust front-office work rather than asset-administration utility work. See [[banking/trust-bank-custody-operating-comparison|trust-bank custody operating comparison]].

### Structure

The bond-type GK-TK (社債型 GK-TK) adds a senior 社債 layer issued by the GK itself. Capital stack:

| Layer | Form | Position |
|---|---|---|
| Senior bond | 社債 issued by GK | Senior, secured (usually by collateral over the 信託受益権) |
| Mezzanine | 社債 (subordinated) or subordinated loan | Junior to senior bond; senior to TK |
| TK equity | 匿名組合出資 | Most junior; absorbs first loss |

The senior bond gets a clean, transferable, bankruptcy-remote claim. The mezzanine sits between senior and equity. The TK equity is first-loss.

### Why the bond layer

1. **Investor universe** — life insurers, regional banks, asset managers, and other yen institutional investors prefer 社債-format investments for the same reasons they prefer publicly issued bonds: standardized claim form, easy custody, clear maturity, clear coupon.
2. **Risk-weight treatment** — 社債 form supports cleaner risk-weight analysis for bank holders.
3. **JASDEC settlement** — 社債 can settle through [[securities/japan-securities-depository-center|JASDEC]] book-entry, supporting clean institutional custody.
4. **Public ratings** — a 社債 layer can be rated by [[financial-regulators/jcr|JCR]] / [[financial-regulators/rating-and-investment|R&I]] / [[JapanFG/sp-global-ratings-japan|S&P]] / [[JapanFG/moodys-japan|Moody's]] using structured-finance criteria similar to [[real-estate-finance/japan-cmbs-rmbs-securitization|Japan CMBS / RMBS]] criteria.

### How it differs from CMBS

| Aspect | GK-TK 社債型 | Single-borrower CMBS |
|---|---|---|
| Issuing vehicle | GK | Issuing-SPV trust |
| Format | 社債 | Trust certificates / beneficial interests |
| Tranching | Senior 社債 + mezzanine + TK equity | Senior / mezzanine / subordinated tranches |
| Public rating typical | Sometimes — depends on investor base | Yes — usually multi-rated |
| Distribution | Private placement; sometimes 私募 social-bond style | Public or private |
| Use case | Asset-holding SPV with senior bond financing | Loan-securitization with multi-tranche distribution |

In practice, 社債型 GK-TK is the structure of choice for a single-asset or small-portfolio real-estate deal seeking institutional yen senior financing without the full overhead of CMBS issuance. CMBS is the structure of choice when the underlying is a non-recourse loan that needs to be securitized for distribution. The two structures can co-exist — a 社債型 GK-TK can also have its senior bond securitized into a CMBS-style trust.

### TK distribution as deductible expense

The economic core of the GK-TK structure is the tax treatment of TK distributions. Under National Tax Agency rules, distributions to TK investors are deductible at the GK level if specific conditions are met. The conditions are technical and project-specific; public-source headline conditions include:

| Condition (headline) | Reading |
|---|---|
| TK investor not deemed to operate the GK business | TK is a silent-partnership relationship; TK investor cannot direct GK operations |
| Profit and loss share match TK contract | Distributions track contract terms |
| TK contract is genuine | Not a sham or recharacterization risk |
| Other anti-abuse conditions | NTA may challenge structures with mixed indicia of equity / operation |

When conditions are met, GK income flows out as deductible TK distributions, producing pass-through-like economics. The TK investor is taxed on the distribution in its own jurisdiction.

### Foreign-LP treatment

For a foreign-LP TK investor, the public-source position is:

| Aspect | Reading |
|---|---|
| Japan-source income | Real-estate income from Japan property is Japan-source |
| Treaty access | Treaty access requires foreign LP to be a treaty-eligible resident; treaty rate depends on treaty terms |
| Offshore-feeder structure | Foreign LP often invests through an offshore feeder (Cayman, Singapore, Luxembourg, depending on LP preference) into the TK layer |
| Permanent establishment | Properly structured TK investment should not create a Japan PE for the foreign LP — but this is fact-specific and requires advice |

The offshore-feeder GK-TK is the standard structure for foreign sovereign-wealth, pension, and private-equity LP investment into Japan real estate. Details vary materially across deals and require structure-specific tax advice.

### Domestic-LP treatment

Domestic Japanese investors in TK receive distributions as either:

- 不動産所得 (real-estate income) — if the TK is structured to flow through real-estate income character; or
- 雑所得 (miscellaneous income) — if structured differently.

## 4. GK-TK vs TMK

The two main JP real-estate SPV alternatives are GK-TK and TMK (特定目的会社, under 資産流動化法).

| Aspect | GK-TK | TMK |
|---|---|---|
| Statute | 会社法 (GK) + 商法 (TK) | 資産流動化法 (TMK) |
| Set-up | Standard incorporation + TK contract — lower cost, faster | TMK registration with 内閣総理大臣 (delegated) — higher cost, more disclosure |
| Disclosure | Minimal beyond GK basic disclosure | Higher — TMK has 資産流動化計画 filing and ongoing reporting |
| Tax | Pass-through-like via TK-distribution deduction | Pass-through via 導管性 conditions (similar concept, different statutory route) |
| Bankruptcy remoteness | Standard SPV bankruptcy-remoteness with covenant + governance | Statutory bankruptcy-remoteness baked into 資産流動化法 |
| Bond issuance | GK can issue 社債 | TMK can issue 特定社債 (specified bonds) |
| Equity layer | TK contributions (silent) | 特定出資 (preferred / common) — more like corporate equity |
| Typical use case | Single-asset or small-portfolio investment, bridge fund, private REIT feeder | Multi-asset securitization, CMBS-style structure, fund-investor-broad distribution |
| Foreign-LP friendliness | High — offshore-feeder + TK fits foreign LP well | Moderate — TMK is more structured and disclosure-heavy |
| Listing capability | Cannot be a J-REIT vehicle | TMK is not the J-REIT vehicle either; J-REIT uses 投資法人 under 投信法 |

### Cross-vehicle map

| Use case | Typical vehicle |
|---|---|
| [[real-estate-finance/j-reit-market-overview|Listed J-REIT]] | 投資法人 (under 投信法), not GK-TK or TMK |
| Private REIT | 投資法人 (under 投信法) — open-end / private-placement variant |
| Bridge fund / warehouse | GK-TK SPV |
| Single-asset acquisition vehicle | GK-TK SPV |
| Multi-asset CMBS issuance | TMK or specialized trust-issuing structure |
| Foreign-LP direct investment | GK-TK with offshore feeder |

### Disclosure footprint

| Disclosure surface | GK-TK presence |
|---|---|
| Public register of the GK | Yes — name, address, members of the GK (which are the structural sponsor, not the TK investors) |
| TK investor names | Not publicly disclosed |
| 社債 (if 社債型) | Disclosed in JASDEC and in 社債 issuance documentation; public placement triggers FIEA disclosure |
| Real-estate ownership | Held in trust by 信託受託者 (the trust-bank); 不動産登記 shows the trust-bank as registered holder with trust notation |
| Tenant lease arrangements | Private — between the trust-bank (as title holder) and tenants, with the GK as beneficiary |
| Financial statements | GK files 計算書類 with NTA; not publicly disclosed unless 社債 issuance disclosure triggers public release |

The combination of trust-bank title registration + TK-investor non-disclosure means that public visibility into beneficial ownership of Japan commercial real estate held in GK-TK structures is limited.

### Accounting treatment

For the TK investor under Japan GAAP / IFRS treatment:

| Aspect | Reading |
|---|---|
| TK investment classification | Investment-asset; categorization depends on TK contract terms and IFRS-9 / 金融商品会計基準 application |
| Income recognition | TK distribution income recognized per contract |
| Impairment | Standard impairment testing for investment assets |

For the structural sponsor (often the asset-management firm or developer that established the GK):

| Aspect | Reading |
|---|---|
| GK as subsidiary | Sometimes — depends on equity-vs-debt analysis of the structural sponsor's economic interest |
| GK as VIE | IFRS-10 / 連結会計 control assessment applies — if structural sponsor has control over relevant activities and is exposed to variable returns, consolidation may be triggered |

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-cmbs-rmbs-securitization]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[banking/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[policy-finance/INDEX]]
- [[policy-finance/japan-housing-finance-agency]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[trust-banks/master-trust-bank]]
- [[financial-regulators/jcr]]
- [[financial-regulators/rating-and-investment]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## Sources

- ARES (Association for Real Estate Securitization): Japan real-estate securitization market summary statistics.
- JPX: securitized-product disclosure surface.
- FSA: investment-product regulation and disclosure framework.
- e-Gov: 会社法, 商法, 資産流動化法 statutory text.
- National Tax Agency: TK-distribution tax-treatment guidance.
