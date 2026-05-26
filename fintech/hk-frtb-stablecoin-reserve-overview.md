---
title: HK FRTB ステーブルコイン準備金要件 · HKMA Reserve Framework
aliases: [hk-frtb-reserve, HKMA stablecoin reserve, HK FRTB SA]
domain: fintech
created: 2026-05-18
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-18
confidence: likely
tags: [fintech, law, regulation, hk, hkma, stablecoin, reserve, frtb]
sources:
  - https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/regulatory-regime-for-stablecoin-issuers/
  - https://www.legco.gov.hk/yr2024/english/bills/b202412201.pdf
  - https://www.bis.org/bcbs/publ/d457.htm
  - https://www.bis.org/bcbs/publ/d533.htm
  - https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/12/20241218-3/
status: candidate
---

# HK FRTB ステーブルコイン準備金要件 · HKMA Reserve Framework


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> HKMA 2025-08 ステーブルコイン立法の準備金条項は、アジアで初めて Basel III FRTB(Fundamental Review of the Trading Book)基準に対応する SC reserve framework である。コア要件:100% 1:1 法定通貨準備金 + Tier 1 資産(HKD/USD 短期国債 + HKMA 預金)+ 第三者カストディ + 月次監査 + 資本金 HKD 100M+。GENIUS §501(≤ 93 日 T-bill)+ MiCA EMT(≥ 30% 銀行預金)と相まって三円アーキテクチャの第三の差別化座標を形成する。

## Key facts

- HKMA SC 立法:2025-08 Stablecoin Ordinance 採択 ^[extracted]
- 資本閾値:HKD 100M+(MAS S$5M / MiCA EMT 資本最低 €350K より遥かに高い)^[extracted]
- 準備金国債期限:≤ 1 年(GENIUS 93 日 vs MiCA 制限なしの中間)^[extracted]
- Tier 1 厳格度:Basel III FRTB SA と整合 · アジア初 ^[extracted]
- 100% 1:1 法定通貨準備金(HKD-pegged または USD-pegged)^[extracted]
- 第三者独立カストディ(ライセンス TCSP/Trust)+ 月次監査 + 四半期公開開示 ^[extracted]
- Bankruptcy-remote segregation ^[extracted]
- e-CNY との境界画定:中国本土リテール顧客は受け入れない · 政治バランスのハード条項 ^[extracted]

## Mechanism / How it works

**HKMA ステーブルコイン準備金のコア**:100% 1:1 法定通貨準備金(HKD / USD pegged)+ Tier 1 資産構成(HKD 現金 + HKMA 中銀預金 + HKD/USD 短期国債 ≤ 1 年 + 限定比率の商業手形)+ 第三者独立カストディ(ライセンス TCSP/Trust)+ 月次監査 + 四半期公開開示 + Bankruptcy-remote segregation + HKD 100M+ paid-up capital。

**FRTB との接続**:HKMA は SC reserve を銀行 trading book 類資産とみなす → Basel III FRTB SA(Standardised Approach)を適用。市場リスク資本計算:interest rate risk + currency risk + credit spread risk。これは SC reserve を明確に Basel 資本フレームに組み込んだ世界初の規制設計である。資本計量が銀行端まで波及することによる暗黙の USDC vs USDT プレミアムロジックは [[fintech/basel-iii-frtb-crypto-exposure-implications|Basel III FRTB 戦略的含意]] を参照。

**三円アーキテクチャ比較**:
| 次元 | HKMA | GENIUS §501 | MiCA EMT |
|---|---|---|---|
| 準備金比率 | 100% 1:1 | 100% 1:1 | 100% 1:1 |
| 国債期限 | ≤ 1 年 | ≤ 93 日 T-bill | 制限なし |
| 銀行預金 | 上限なし | ≤ 50% 上限 | ≥ 30% 下限 |
| 中銀預金 | HKMA 直接 | FRB master account(論争) | NCB(国別中銀) |
| 資本金 | HKD 100M | OCC charter で決定 | EMI 資本 + 比率 |
| 資本フレーム | Basel III FRTB | 銀行法案 + PCAOB | CRR/CRD VI |

## Origin & evolution

HKMA は 2022-12 に SC consultation を開始、2023-12 第二回 CP で Sandbox を確立(ZA Bank / Standard Chartered / HSBC / Animoca × HKT consortium)、2025-08 に Stablecoin Ordinance を採択。2026-04 HKMA Consultation Paper《Capital treatment for licensed stablecoins》が BCBS SCO60 を母基準として直接引用。2026-05-21 初回ライセンス決定:9 社申請のうち実際は 2 件のみ(HSBC + StanChart Anchorpoint)、戦略的含意の詳細は [[fintech/hkma-stablecoin-licensing-implications|HKMA ライセンス戦略的含意]] を参照。アジア / グローバル横軸比較は [[exchanges/global-vasp-regulatory-comparison-matrix|グローバル VASP 規制比較マトリクス]] を参照。

## Counterpoints

- HKD 100M 閾値は中小 issuer を排除 · シンガポール S$5M と比べ競争劣勢を形成
- Tier 1 厳格度が高い · 利益率が圧縮される · GENIUS §501 ≤ 93 日と比べて短期金利差は限定的
- e-CNY 境界画定条項は政治的に敏感 · 北京と HK 国際化の二重要求の矛盾

## Open questions

- 中国本土系大手(JD-HKD / Ant International / BOCHK)のライセンス取得時期は?
- HK §501(d) リスト入りの第三波(2027-H2)は遅延するか?
- e-CNY オフショア CNH ウィンドウ(2026-Q4)と HK SC ライセンスはどう協調するか?

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA ステーブルコイン・ライセンス概観]]
- [[fintech/basel-iii-frtb-crypto-exposure-overview|Basel III FRTB 概観]]
- [[fintech/three-circles-stablecoin-mra-framework|三円 MRA フレームワーク]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
<!-- /wiki-links:managed -->

## Sources

