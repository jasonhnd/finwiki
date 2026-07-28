---
source: fintech/paypal-pyusd-stablecoin
source_hash: c28108b97b112dd1
lang: ja
model: canonical-ja-source-sync
status: machine
fidelity: ok
title: "PayPal PYUSD · PayPal ブランドのドル建てステーブルコイン"
translated_at: 2026-07-28T19:25:32.800Z
---

# PayPal PYUSD · PayPal ブランドのドル建てステーブルコイン

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for adjacent context and [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] for the broader system boundary.

> [!info] TL;DR
> PayPal USD（PYUSD）は、Paxos が発行し、米ドル預金・米国債・同等の現金等価物で全額裏付けるドル建てステーブルコインである。PayPal は 2023-08-07 に Ethereum 上で提供を開始し、2024-05-29 に Solana を追加した。現在の PayPal 送金案内では Ethereum、Solana、Arbitrum が対応ネットワークとして示され、2026-03-17 には PayPal アカウントでの提供地域を 70 市場へ拡大した。準備金利回りの PayPal/Paxos 間配分、チェーン別残高比率、DEX 流動性については、今回確認した公式資料からは検証できないため本稿の確定事実から除外する。^[PayPal launch (2023-08-07): https://newsroom.paypal-corp.com/2023-08-07-PayPal-Launches-U-S-Dollar-Stablecoin; Solana launch (2024-05-29): https://investor.pypl.com/news-and-events/news-details/2024/PayPal-USD-Stablecoin-Now-Available-on-Solana-Blockchain-Providing-Faster-Cheaper-Transactions-for-Consumers/default.aspx; supported networks: https://www.paypal.com/us/cshelp/article/how-do-i-transfer-my-crypto-help822; 70-market expansion (2026-03-17): https://newsroom.paypal-corp.com/2026-03-17-PAYPAL-BRINGS-PAYPAL-USD-TO-USERS-ACROSS-70-MARKETS]

## Key facts

- 2023-08-07: PayPal が PYUSD を発表し、対象となる米国顧客へ段階提供を開始。^[https://newsroom.paypal-corp.com/2023-08-07-PayPal-Launches-U-S-Dollar-Stablecoin]
- 2024-05-29: Solana 上での PYUSD 提供を開始。^[https://investor.pypl.com/news-and-events/news-details/2024/PayPal-USD-Stablecoin-Now-Available-on-Solana-Blockchain-Providing-Faster-Cheaper-Transactions-for-Consumers/default.aspx]
- 対応ネットワーク: Ethereum、Solana、Arbitrum。^[https://www.paypal.com/us/cshelp/article/how-do-i-transfer-my-crypto-help822]
- 発行・準備金: Paxos が発行し、米ドル預金・米国債・同等の現金等価物で全額裏付ける。^[https://newsroom.paypal-corp.com/2026-03-17-PAYPAL-BRINGS-PAYPAL-USD-TO-USERS-ACROSS-70-MARKETS]
- 2026-03-17: PayPal アカウントでの提供を世界 70 市場へ拡大。^[https://newsroom.paypal-corp.com/2026-03-17-PAYPAL-BRINGS-PAYPAL-USD-TO-USERS-ACROSS-70-MARKETS]

## Mechanism / How it works

PYUSD の公開確認可能な仕組みは、Paxos による発行・準備金管理と、PayPal / Venmo による顧客接点の組み合わせである。対象ユーザーは PayPal、Venmo、対応する外部ウォレットの間で PYUSD を移転でき、外部送金時には対応ネットワークを選ぶ。PayPal と Paxos の収益配分条件は公式資料で開示されていないため、他社の収益分配モデルを PYUSD に当てはめない。^[PayPal/Venmo availability: https://newsroom.paypal-corp.com/2023-09-20-PayPal-USD-is-now-available-on-Venmo; transfer mechanics: https://www.paypal.com/us/cshelp/article/how-do-i-transfer-my-crypto-help822]

## Origin & evolution

PayPal は 2023-08-07 の発表当日から対象となる米国顧客への段階提供を開始し、Ethereum 上の ERC-20 として PYUSD を導入した。2023-09-20 に Venmo での提供を開始し、2024-05-29 に Solana を追加した。PayPal の現行ヘルプは Ethereum、Solana、Arbitrum への外部送金を案内している。2026-03-17 の 70 市場への拡大は、PYUSD の利用範囲が米国内の初期提供から国際的な PayPal アカウントへ広がった節目である。^[Launch chronology: https://newsroom.paypal-corp.com/2023-08-07-PayPal-Launches-U-S-Dollar-Stablecoin; Venmo: https://newsroom.paypal-corp.com/2023-09-20-PayPal-USD-is-now-available-on-Venmo; Solana: https://investor.pypl.com/news-and-events/news-details/2024/PayPal-USD-Stablecoin-Now-Available-on-Solana-Blockchain-Providing-Faster-Cheaper-Transactions-for-Consumers/default.aspx; current networks and global expansion: https://www.paypal.com/us/cshelp/article/how-do-i-transfer-my-crypto-help822 and https://newsroom.paypal-corp.com/2026-03-17-PAYPAL-BRINGS-PAYPAL-USD-TO-USERS-ACROSS-70-MARKETS]

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配エコノミクス]]
- [[fintech/ripple-rlusd-stablecoin|Ripple RLUSD]]
- [[fintech/world-liberty-usd1-political-stablecoin|WLF USD1]]
- [[fintech/stablecoin-crossborder-b2b-growth|ステーブルコイン・クロスボーダー B2B 成長]]
- [[agent-economy/coinbase-cdp-developer-platform|Coinbase CDP]]
- [[fintech/circle-usdc-stablecoin|Circle USDC · ホワイトサークル首位対比]]
<!-- /wiki-links:managed -->

## Sources

- PayPal — PYUSD launch (2023-08-07): https://newsroom.paypal-corp.com/2023-08-07-PayPal-Launches-U-S-Dollar-Stablecoin
- PayPal — PYUSD on Venmo (2023-09-20): https://newsroom.paypal-corp.com/2023-09-20-PayPal-USD-is-now-available-on-Venmo
- PayPal — PYUSD on Solana (2024-05-29): https://investor.pypl.com/news-and-events/news-details/2024/PayPal-USD-Stablecoin-Now-Available-on-Solana-Blockchain-Providing-Faster-Cheaper-Transactions-for-Consumers/default.aspx
- PayPal — supported transfer networks: https://www.paypal.com/us/cshelp/article/how-do-i-transfer-my-crypto-help822
- PayPal — expansion to 70 markets (2026-03-17): https://newsroom.paypal-corp.com/2026-03-17-PAYPAL-BRINGS-PAYPAL-USD-TO-USERS-ACROSS-70-MARKETS
