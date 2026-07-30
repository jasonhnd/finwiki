---
source: fintech/issuer-distributor-incentive-realignment-arc-strategy
source_hash: b1e70d0d26dde054
lang: ja
model: source-language-sync
status: machine
fidelity: ok
title: "Circle Arc 戦略 · 発行体と分配者の経済性"
translated_at: 2026-07-30T02:03:00+09:00
---

# Circle Arc 戦略 · 発行体と分配者の経済性

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/issuer-distributor-incentive-realignment-50-50-model|issuer / distributor model]], [[fintech/stablecoin-chain-token-strategy-trilemma|stablecoin-chain trilemma]], and [[systems/cctp-v2-overview|CCTP v2]].

> [!info] TL;DR
> Circle は 2025-08 の決算資料で Arc を公表し、2025-10-28 に public testnet を開始した。Circle の 2025 Form 10-K は Arc、Circle Digital Assets、Circle Applications を相互補完する三本柱として説明する。同じ 10-K は Coinbase への USDC distribution costs と、第三者 incentive payment を必要としない organic growth が増えれば distribution costs が低下し得ることも開示する。ただし、Circle は Arc の目的を「Coinbase への 50% 支払い回避」と公表しておらず、Arc 上の USDC が契約上どの payment-base bucket に入るかも公開資料だけでは確定できない。 ^[https://www.circle.com/pressroom/circle-reports-second-quarter-2025-results] ^[https://investor.circle.com/news/news-details/2025/Circle-Launches-Arc-Public-Testnet/default.aspx] ^[https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm]

## 確認できる Arc の状態

- Circle は Arc を open、EVM-compatible の Layer-1 と説明する。
- Public testnet は 2025-10-28 に開始され、100 以上の launch / design participants が公表された。
- Circle は initial development and operation を steward しつつ、長期的には validator participation と governance を広げる構想を示す。
- 2025 年度決算時点で mainnet は 2026 年中の launch を目標としていたが、固定日を示していない。
- 2025 10-K は Arc を USDC だけの distribution channel ではなく、payments、FX、capital markets などを支える platform pillar と位置付ける。

^[https://investor.circle.com/news/news-details/2025/Circle-Launches-Arc-Public-Testnet/default.aspx] ^[https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm]

## Coinbase 契約で確認できること

Circle と Coinbase の 2025 Form 10-K は同じ基本構造を開示する。Circle が issuer portion を保持し、両社が各 platform 上の残高に基づく allocation を受け、承認済み第三者への支払い控除後、Coinbase が broader-ecosystem payment base の残りの半分を受ける。これは単純な「全 USDC reserve income の 50/50」ではない。 ^[https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm] ^[https://www.sec.gov/Archives/edgar/data/1679788/000167978826000015/coin-20251231.htm]

Circle は 2025 年に Coinbase 関連 distribution costs として $1.4 billion、2024 年に $924.5 million を計上したと開示した。この費用には契約式による複数の allocation が含まれるため、全額を「50% revenue share」と呼ぶべきではない。

## 事実と分析の分離

下表は公開開示と、そこから導ける限定的な戦略仮説を分ける。 ^[https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm] ^[https://investor.circle.com/news/news-details/2025/Circle-Launches-Arc-Public-Testnet/default.aspx]

| 論点 | 公開資料で確認できる事実 | 分析上の境界 |
|---|---|---|
| Arc の目的 | Circle platform の一柱として stablecoin finance、payments、FX、capital markets を支える | Coinbase 支払い回避が「真の目的」とは確認できない |
| Distribution economics | Coinbase と他 distributor への費用があり、organic growth mix が費用を左右し得る | Arc 残高の契約上の扱いは非公開条項を含み得る |
| Mainnet | 2026 年中を目標とする会社説明 | 2026-Q4 の固定予定とは扱わない |
| CCTP / multichain | Circle は既存 partner chains との interoperability 維持を説明 | Base を意図的に侵食する数量目標は確認できない |
| Native economics | Arc の fees、stablecoin gas、network participation は設計論点 | `$5B × 4.5% × 50%` は前提依存の scenario であり forecast ではない |

## 適切な戦略仮説

Arc が成功すれば、Circle は issuance、network infrastructure、applications を同一 platform strategy の中で調整しやすくなる。また 10-K が述べるように、第三者 incentive payments を必要としない成長の比率は distribution-cost mix に影響し得る。したがって「Arc が Circle の outside option を増やす」は検証可能な仮説である。

一方で、次の旧記述は公開資料で裏付けられないため撤回した。

- Arc 上の USDC reserve income は Coinbase 契約の対象外である。
- Circle が 40/60 再交渉を目標としている。
- Base token 発行と引き換えに Coinbase が USDC 分配から撤退する。
- Arc が 5 年以内に Base の USDC を上回る。
- GENIUS の特定条項により Circle が Coinbase の compliance support を不要とした。

## 追跡指標

今後の検証は、(1) mainnet launch と network governance、(2) Arc 上の native USDC / other stablecoin supply、(3) Circle の distribution-cost disclosures、(4) Coinbase Collaboration Agreement の更新、(5) Arc applications の外部利用を分けて追う。契約変更が開示されるまでは、ネットワーク残高から revenue-share の変更を逆算しない。

## Related

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|発行体・分配者モデル]]
- [[fintech/stablecoin-chain-token-strategy-trilemma|ステーブルコイン・チェーン戦略]]
- [[systems/cctp-v2-overview|CCTP v2]]
- [[fintech/portfolio-winner-structure-arm-analog|ポートフォリオ構造]]
<!-- /wiki-links:managed -->

## Sources

- Circle · Q2 2025 results / Arc announcement: https://www.circle.com/pressroom/circle-reports-second-quarter-2025-results
- Circle · Arc public testnet: https://investor.circle.com/news/news-details/2025/Circle-Launches-Arc-Public-Testnet/default.aspx
- Circle · 2025 Form 10-K: https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm
- Coinbase · 2025 Form 10-K: https://www.sec.gov/Archives/edgar/data/1679788/000167978826000015/coin-20251231.htm
