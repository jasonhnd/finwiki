---
title: USDC 発行体・分配者の収益分配 · Coinbase ↔ Circle 公開契約構造
aliases: [issuer distributor incentive realignment 50 50 model, Coinbase Circle 50-50, USDC revenue split]
domain: fintech
created: 2026-05-18
last_updated: 2026-08-14
last_tended: 2026-08-14
review_by: 2027-02-10
confidence: likely
tags: [fintech, coinbase, circle, usdc, revenue-split, distribution-economics, genius-501]
sources:
  - https://www.circle.com/en/usdc
  - https://investor.coinbase.com/financials/sec-filings/default.aspx
  - https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001679788&type=10-K
  - https://www.sec.gov/Archives/edgar/data/1876042/000119312525178989/d839239ds1.htm
  - https://www.circle.com/en/transparency
  - https://www.coinbase.com/blog
status: active
---

# USDC 発行体・分配者の収益分配 · Coinbase ↔ Circle 公開契約構造

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> Coinbase と Circle の契約は単純な「全収益 50/50」ではない。Circle の SEC 届出によれば、発行体留保、各社製品内の USDC 残高に応じた product economics、承認済み参加者への支払い後に Coinbase が残余 payment base の 50% を受け取る ecosystem economics から成る。将来の再交渉は可能性であり、GENIUS Act だけから必然とは断定できない。

## Key facts

- Circle は USDC 準備資産から reserve income を得て、Coinbase への支払いを distribution costs として計上する。
- 契約は日次の payment base から issuer retention と参加者への支払いを控除し、残高帰属と ecosystem economics を計算する。
- Coinbase の 50% は「承認済み参加者への支払い後の残余 payment base」に適用されるため、Circle の reserve income 全体の固定 50% ではない。
- 金額は USDC 流通残高、金利、保有場所、他の参加者、契約上の控除に連動する。単純な年率換算はしない。

## Mechanism / How it works

**契約の公開構造**: Coinbase は USDC の主要な分配・保管チャネルであり、Circle は発行と準備資産管理を担う。Centre の解散後も両社は Collaboration Agreement に基づいて協業している。

下表は Circle の [SEC S-1](https://www.sec.gov/Archives/edgar/data/1876042/000119312525178989/d839239ds1.htm) が説明する計算順序の要約であり、非公開の料率や将来条件を推定しない。

| 計算要素 | 公開された仕組み | 解釈上の注意 |
|---|---|---|
| Issuer retention | Circle が発行・準備管理の間接費を一部回収する留保 | 金額・算式の全詳細は公開説明だけでは再計算できない |
| Party product economics | Circle / Coinbase が各社のカストディ商品・managed wallet にある残高比率に応じて受領 | 「どこで USDC が保有されるか」が分配に影響する |
| Approved-participant payments | USDC エコシステムの他の承認済み参加者への支払いを控除 | 二社だけの閉じた 50/50 ではない |
| Ecosystem economics | 控除後の残余 payment base の 50% を Coinbase が受領 | reserve income 全体の 50% と同義ではない |

この構造は発行と流通の利害を結ぶが、法改正後の交渉結果や代替チェーン戦略は別途、契約変更・SEC 届出・会社発表で確認する必要がある。

## Origin & evolution

Centre は 2018 に設立され、その後 Coinbase と Circle は USDC の発行・流通を共同で拡大した。Centre は 2023 に解散し、Circle が USDC の単独発行体となって、両社の経済条件は Collaboration Agreement に移った。Circle の 2025 SEC 届出は上記の複層的な分配方法を開示している。将来の法改正や製品投入が契約条件をどう変えるかは、更新された SEC 届出で追跡する。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-arc-strategy|Arc 戦略 · 50% の回収]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン収益分配エコノミクス]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン公開チェーン・トークン戦略のトリレンマ]]
- [[fintech/circular-reserve-asset-flywheel-overview|準備資産相互ロックのフライホイール · 概要]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act の実施状況]]
<!-- /wiki-links:managed -->

## Sources

- Circle SEC S-1 — https://www.sec.gov/Archives/edgar/data/1876042/000119312525178989/d839239ds1.htm
- Coinbase SEC filings — https://investor.coinbase.com/financials/sec-filings/default.aspx
