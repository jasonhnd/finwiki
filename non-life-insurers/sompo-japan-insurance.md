---
title: "損害保険ジャパン"
aliases:
  - "損保ジャパン"
  - "Sompo Japan"
  - "Sompo Japan Insurance"
  - "損害保険ジャパン株式会社"
  - "non-life-insurers/sompo-japan"
domain: non-life-insurers
created: 2026-05-21
last_updated: 2026-05-21
last_tended: 2026-05-21
review_by: 2026-11-21
confidence: likely
tags: [JapanFG, insurance, non-life-insurance, sompo, operating-company]
status: active
sources:
  - "https://www.fsa.go.jp/menkyo/menkyoj/songai.pdf"
  - "https://www.sonpohogo.or.jp/outline/member-companies.html"
  - "https://www.sompo-japan.co.jp/"
entity_node:
  kind: operating_company
  scope: japan_core
  status: anchor
entity_edges:
  - relation: holds_license
    target: financial-licenses/insurance-license-and-solvency
    evidence: insurance_license_context
    source: "https://www.fsa.go.jp/menkyo/menkyo.html"
    as_of: 2026-06-21
    confidence: likely
  - relation: regulated_by
    target: financial-regulators/fsa
    evidence: supervisory_authority
    source: "https://www.fsa.go.jp/"
    as_of: 2026-06-21
    confidence: likely
  - relation: subsidiary_of
    target: non-life-insurers/sompo
    evidence: group_profile
    source: "public company profile / IR source listed in this page sources"
    as_of: 2026-06-21
    confidence: likely
---

# 損害保険ジャパン


## Wiki route

This entry sits under [[non-life-insurers/INDEX|non-life-insurers INDEX]]. Read it against [[non-life-insurers/sompo-direct|SOMPOダイレクト損害保険]] for peer / contrast context and [[insurance/INDEX|insurance index]] for the broader system / regulatory boundary.

## TL;DR

損害保険ジャパン株式会社は、[[non-life-insurers/sompo]] group の core non-life insurance operating company。金融庁の損害保険会社免許一覧と損害保険契約者保護機構会員一覧に掲載される licensed insurer で、SOMPO group の Japan non-life underwriting, claims, agency and commercial-risk surface を担う。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal name | 損害保険ジャパン株式会社 |
| License route | Insurance Business Act non-life insurance company; FSA non-life insurer list |
| Protection scheme | Non-Life Insurance Policyholders Protection Corporation member |
| Group boundary | [[non-life-insurers/sompo]] core non-life operating company |
| Wiki role | SOMPO group's Japan non-life underwriting arm |

## 2. Operating model

SOMPO group includes non-life, life, nursing care, digital / health services, and overseas insurance businesses. 損害保険ジャパン is the domestic non-life operating-company anchor; [[life-insurers/sompo-himawari-life]] is the life-insurance arm.

## 3. Why this page matters

- Separates [[non-life-insurers/sompo]] holding-company strategy from non-life operating-company analysis.
- Core peer for Tokio Marine and MS&AD operating-company pages.
- Registry-backed D3 non-life major page.

## Related

- [[non-life-insurers/sompo]]
- [[life-insurers/sompo-himawari-life]]
- [[non-life-insurers/tokio-marine-nichido-fire]]
- [[non-life-insurers/mitsui-sumitomo-insurance]]
- [[non-life-insurers/aioi-nissay-dowa-insurance]]
- [[insurance/natcat-reinsurance-japan]]

## Sources

- FSA: non-life insurance company license list, as of 2026-04-01.
- Non-Life Insurance Policyholders Protection Corporation of Japan: member-company list, as of 2026-04.
- 損保ジャパン official website.

