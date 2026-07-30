---
title: 米国・EU・日本の stablecoin 制度比較 —— MRA は未確認、market access は個別審査
aliases: [three circles MRA, US-EU-Japan stablecoin regimes, stablecoin market access]
domain: fintech
kind: framework
topic: three-circles-stablecoin-mra-framework
created: 2026-05-13
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-10-30
confidence: certain
tags: [fintech, stablecoin, MRA, regulation, cross-border, framework]
status: active
sources:
  - https://www.govinfo.gov/app/details/PLAW-119publ27
  - https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html
  - https://eur-lex.europa.eu/eli/reg/2023/1114/oj
  - https://finance.ec.europa.eu/publications/joint-statement-eu-us-joint-financial-regulatory-forum-july-2026_en
  - https://www.fsa.go.jp/en/news/2018/20180717.html
  - https://www.fsa.go.jp/en/regulated/licensed/index.html
  - https://www.fsa.go.jp/en/conference/minister/2026/20260417.html
---

# 米国・EU・日本の stablecoin 制度比較 —— MRA は未確認、market access は個別審査

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]], [[fintech/mica-overview|MiCA overview]], and [[fintech/regulatory-reset-2025-usa-crypto-policy|US 2025–2026 policy reset]].

> [!info] TL;DR
> 2026 年 7 月 30 日時点で確認した米国、EU、日本の一次資料は、3 法域の stablecoin license が自動的に相互承認される「三大円 MRA」を示していない。米国 GENIUS Act は将来の comparable-regime determination と reciprocal arrangement を認めるが、外国発行体には Treasury determination、OCC registration などの条件が残る。EU MiCA は EU 内で EMT を公募・取引承認する issuer に EU credit institution / electronic money institution の地位を求める。日本も発行、売買・交換、仲介を国内法上の登録・免許で区分する。**同じ token が複数法域で扱われる場合も、1 つの license が自動 passport されたとは限らない。**

## 3 法域の現在の market-access 構造

| 法域 | 現行の主要根拠 | 外国・域外 token への入口 | 自動相互承認か |
|---|---|---|---|
| 米国 | GENIUS Act, Public Law 119-27 | Section 18 は Treasury による comparable-regime determination、OCC registration、米国内 reserve 等を要求し、reciprocal arrangement の余地を設ける | いいえ。法定条件と個別手続がある |
| EU | MiCA Regulation (EU) 2023/1114 | Article 48 は EU で EMT を公募・取引承認する issuer に credit institution または electronic money institution の authorization と white paper notification を求める | いいえ。第三国 license の自動 passport 条項ではない |
| 日本 | Payment Services Act / EPI regime | 発行には資金移動業・信託会社・信託銀行等の該当資格、売買・交換・仲介等には EPI service provider registration が必要 | いいえ。FSA の登録・免許構造に従う |

出典: [GENIUS Act Section 18](https://www.govinfo.gov/app/details/PLAW-119publ27)、[OCC GENIUS Act proposed rule](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html)、[MiCA Article 48](https://eur-lex.europa.eu/eli/reg/2023/1114/oj)、[FSA FinTech Support Desk Q&A 9](https://www.fsa.go.jp/en/news/2018/20180717.html)、[FSA licensed-institutions list](https://www.fsa.go.jp/en/regulated/licensed/index.html)。

## 米国: reciprocity は可能性であって既成の passport ではない

GENIUS Act Section 18 は、外国 payment stablecoin issuer に対する例外の条件を定める。主要条件は次のとおりである。

1. Treasury が当該法域の制度を GENIUS Act と comparable と判断する。
2. 外国 issuer が OCC に登録する。
3. 原則として米国顧客の liquidity demand を満たす reserve を米国金融機関に保有する。
4. issuer の本拠法域が包括的制裁対象または primary money-laundering concern ではない。

Treasury は comparable determination を Federal Register で理由付き公表し、一覧を維持することとされる。また reciprocal arrangement / bilateral agreement を作ることができるが、発効の少なくとも 90 日前に公表しなければならない。

この statutory authority は「米日 MRA が 2026 年 2 月に署名済み」という証拠ではない。2026 年 7 月 30 日までに本ページで確認した Treasury、OCC、Federal Register、FSA の一次資料には、その名称・署名日・本文・発効通知を確認できなかった。OCC の 2026 年資料も外国 issuer 向け規則を **proposal** として扱っている。

出典: [GENIUS Act, Public Law 119-27](https://www.govinfo.gov/app/details/PLAW-119publ27) および [OCC 2026 proposed rule](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html)。

## EU: MiCA authorization と第三国 license は同じではない

MiCA Article 48 によれば、EU 内で e-money token を公募し、または取引承認を求める者は原則として当該 token の issuer であり、credit institution または electronic money institution として authorization を受け、crypto-asset white paper を通知・公表する必要がある。issuer の書面同意を受けた他者による offer も、MiCA 上の要件から自由になるわけではない。

2026 年 6 月の EU–US Joint Financial Regulatory Forum では、EU 側が MiCA review と digital euro の検討状況を共有した。共同声明は継続的な regulatory dialogue を記録するが、stablecoin license の相互承認協定や 2026-Q3 の署名予定を公表していない。

さらに European Systemic Risk Board は、第三国 issuer を含む multi-issuer stablecoin scheme について金融安定上の懸念を示し、現行 MiCA の下で許容されると扱わないよう勧告している。これは「米国 token が米国 license だけで EU に自動 passport される」という理解と整合しない。

出典: [MiCA](https://eur-lex.europa.eu/eli/reg/2023/1114/oj)、[EU–US Joint Financial Regulatory Forum, July 2026](https://finance.ec.europa.eu/publications/joint-statement-eu-us-joint-financial-regulatory-forum-july-2026_en)、[ESRB Recommendation 2025/9](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32025Y06342)。

## 日本: issuer、intermediary、handled instrument を分ける

FSA Q&A は、電子決済手段の発行、売買・交換、仲介、管理を別の regulated activity として説明している。日本で発行するには token の法的類型に応じて資金移動業、信託会社、信託銀行等の資格が必要となり、売買・交換や仲介等を業として行う場合は電子決済手段等取引業の登録が必要になる。

現在の FSA 登録一覧に token 名が記載されることは、その token の外国 license が日本へ passport されたことを意味しない。登録事業者、issuer、handled instrument は別々に記録すべきである。現在の point-in-time map は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] を参照。

日本の travel rule には「同等の travel-rule 規制を持つ法域」を指定する仕組みがある。しかし、それは originator / beneficiary 情報通知の適用範囲であり、stablecoin issuer license の相互承認ではない。

2026 年 4 月の金融担当大臣会見も、stablecoin の国際的に一貫した regulatory and supervisory framework に向けた議論の重要性を述べたもので、締結済み MRA を発表したものではない。

出典: [FSA FinTech Support Desk Q&A 9](https://www.fsa.go.jp/en/news/2018/20180717.html)、[FSA licensed-institutions list](https://www.fsa.go.jp/en/regulated/licensed/index.html)、[FSA travel-rule announcement](https://www.fsa.go.jp/en/news/2026/20260707/20260707.html)、[FSA Minister press conference, 2026-04-17](https://www.fsa.go.jp/en/conference/minister/2026/20260417.html)。

## MRA を確認するための証拠チェック

将来、相互承認を主張する場合は、少なくとも次の証拠を揃える。

| 確認項目 | 必要な一次資料 | 不十分な代替 |
|---|---|---|
| 当事国・機関 | 署名主体を明記した official agreement | conference での一般的な協調発言 |
| 対象 license | issuer / intermediary / CASP 等の対象範囲 | 「stablecoin regulation」の総称 |
| 法的効果 | 自動承認、簡易登録、reserve relief 等の条項 | bilateral dialogue の開催 |
| 発効 | 発効日、国内手続、Federal Register 等の公示 | 署名予定との報道・予測 |
| 例外 | sanctions、AML、supervision、revocation 条項 | token が複数市場で扱われている事実 |

出典: 米国側の公表要件は [GENIUS Act Section 18](https://www.govinfo.gov/app/details/PLAW-119publ27)。上表は、その要件を他法域比較に拡張した検証フレームである。

## 分析上の結論

- USDC など同一ブランドの token が複数法域に存在しても、issuer entity、local authorization、intermediary registration、reserve structure を個別に確認する。
- Tether や他 issuer を「三圈の外」「新興市場だけ」と一括分類するには、法域別の offer・listing・service status の証拠が必要である。
- BIS、FATF、G20 の国際基準協調は重要だが、個別 issuer license の passporting と同義ではない。
- 将来の MRA 日程を確定事実として掲載するのは、署名済み本文または公式交渉日程が公開された後に限る。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act analysis]]
- [[fintech/stablecoin-chain-sovereign-currency-divide|ステーブルコイン地政学通貨 5 極対立]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]]
- [[fintech/carf-1099da-end-of-crypto-anonymity|CARF + 1099-DA]]
<!-- /wiki-links:managed -->

## Sources

- [GENIUS Act, Public Law 119-27](https://www.govinfo.gov/app/details/PLAW-119publ27)
- [OCC GENIUS Act proposed rule](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-3.html)
- [MiCA Regulation (EU) 2023/1114](https://eur-lex.europa.eu/eli/reg/2023/1114/oj)
- [EU–US Joint Financial Regulatory Forum, July 2026](https://finance.ec.europa.eu/publications/joint-statement-eu-us-joint-financial-regulatory-forum-july-2026_en)
- [FSA FinTech Support Desk Q&A](https://www.fsa.go.jp/en/news/2018/20180717.html)
- [FSA licensed financial institutions](https://www.fsa.go.jp/en/regulated/licensed/index.html)
- [FSA Minister press conference, 2026-04-17](https://www.fsa.go.jp/en/conference/minister/2026/20260417.html)
