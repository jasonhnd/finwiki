---
title: 日本 SC 4 ルート比較 · 発行者 / 流通業者 / 基盤 / 実証
aliases: [japan-epi-four-camps, SBI Circle Holdings, JPYC Progmat routes]
domain: fintech
created: 2026-05-18
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-10-30
confidence: confirmed
tags: [fintech, law, japan, stablecoin, sbi-circle, jpyc, progmat]
sources:
  - https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
  - https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
  - https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch
  - https://www.sbigroup.co.jp/news/2025/0822_15679.html
  - https://www.sbivc.co.jp/assets/docs/manual_tt.pdf
  - https://progmat.co.jp/wp-content/uploads/2025/11/20251106_%E3%83%97%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9_%E3%80%8C%E8%A4%87%E6%95%B0%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%AB%E3%82%88%E3%82%8C%E3%82%8B%E5%85%B1%E5%90%8C%E3%81%A7%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%B3%E3%82%A4%E3%83%B3%E7%99%BA%E8%A1%8C%E3%81%A8%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E6%B1%BA%E6%B8%88%E3%81%AE%E9%AB%98%E5%BA%A6%E5%8C%96%E3%81%AB%E4%BF%82%E3%82%8B%E3%80%8D.pdf
  - https://corporate.minna-no-ginko.com/information/corporate/2025/07/04/696/
  - https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
status: active
---

# 日本 SC 4 ルート比較 · 発行者 / 流通業者 / 基盤 / 実証

## Wiki route

この項目は [[fintech/INDEX|fintech index]] 配下で、日本のステーブルコイン関連プロジェクトを、法的役割と現在の実装段階で比較する。制度の発行経路は [[fintech/japan-epi-three-types-overview|日本 EPI 三型アーキテクチャ]]、発行者・流通業者・基盤の区別は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造]] と併読する。

> [!info] TL;DR
> 「4 陣営」は法令上の分類ではない。2026-07-30 時点で比較できるのは、(1) JPYC の資金移動業者型発行、(2) SBI VC トレードによる登録済み電子決済手段の流通、(3) Progmat / Project Pax の基盤・銀行実証、(4) みんなの銀行の Solana 上での共同検討という、役割と実装段階の異なる四つのルートである。SBI Circle Holdings は USDC 普及のための合弁会社だが、金融庁一覧上の登録業者は SBI VC トレードであり、両社を同一主体として扱わない。米 GENIUS Act による日本商品の自動承認や公式順位表は存在しない。

## Current map

| ルート | 法的・実務上の役割 | 2026-07-30 時点で確認できる状態 | 確認時の注意 |
|---|---|---|---|
| **[[payment-firms/jpyc\|JPYC]]** | JPYC 株式会社が資金移動業者型の円建て電子決済手段を発行・償還 | 関東財務局長 第00099号。2025-10-27 に JPYC と発行・償還窓口 JPYC EX の提供を開始 | 旧 JPYC Prepaid は前払式支払手段であり、電子決済手段 JPYC とは別商品 |
| **SBI VC トレード / SBI Circle Holdings** | SBI VC トレードは電子決済手段等取引業者。SBI Circle Holdings は SBI と Circle の USDC 普及合弁 | 金融庁一覧の登録業者は SBI VC トレード（関東財務局長 第00001号）1 社で、取扱欄は USDC・RLUSD・JPYSC。SBI Circle Holdings は 2025-08 設立 | 合弁会社、登録流通業者、USDC 発行者 Circle、RLUSD 発行者 Standard Custody、JPYSC 発行者 SBI 新生信託銀行を分ける |
| **[[payment-firms/progmat\|Progmat]] / Project Pax** | Progmat Coin とクロスボーダー送金基盤を提供し、銀行・信託銀行・Datachain 等が案件ごとの役割を担う | 2025-11 公表の共同発行・クロスボーダー決済は金融庁 FinTech 実証実験ハブの支援案件。商用発行の一括認可ではない | Progmat はプラットフォーム提供者であり、すべてのコインの法的発行者ではない |
| **みんなの銀行** | 銀行アプリ、Web3 ウォレット、Solana 上のステーブルコイン活用を検討 | 2025-07 に Solana Japan、Fireblocks、TIS と事業化に向けた共同検討を開始 | 技術検証・ユースケース検討を、発行済み商品や登録済み流通サービスと同一視しない |

Source: 金融庁の [電子決済手段等取引業者一覧](https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx) と [資金移動業者一覧](https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf)（2026-07-30 閲覧）、[JPYC 正式リリース](https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch)、[SBI Circle Holdings 設立](https://www.sbigroup.co.jp/news/2025/0822_15679.html)、[SBI VC トレード契約締結前交付書面](https://www.sbivc.co.jp/assets/docs/manual_tt.pdf)、[Progmat の共同実証公表](https://progmat.co.jp/wp-content/uploads/2025/11/20251106_%E3%83%97%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9_%E3%80%8C%E8%A4%87%E6%95%B0%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%AB%E3%82%88%E3%82%8B%E5%85%B1%E5%90%8C%E3%81%A7%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%B3%E3%82%A4%E3%83%B3%E7%99%BA%E8%A1%8C%E3%81%A8%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E6%B1%BA%E6%B8%88%E3%81%AE%E9%AB%98%E5%BA%A6%E5%8C%96%E3%81%AB%E4%BF%82%E3%82%8B%E3%80%8D.pdf)、[みんなの銀行の共同検討](https://corporate.minna-no-ginko.com/information/corporate/2025/07/04/696/)。

## Why there is no ranking

この四つは同じ競争単位ではない。JPYC は発行・償還を行う主体、SBI VC トレードは登録流通業者、Progmat は基盤提供者、みんなの銀行の案件は検討・実証段階である。したがって、流通量、目標値、代表者名、チェーン選択を一つの点数にまとめて「第 1 位」を決めると、規制上の役割と実装段階を混同する。

また、金融庁一覧への掲載は、金融庁自身が価値を保証または推奨することを意味しない。登録番号、取扱銘柄、発行主体は更新され得るため、一覧の取得日を併記する。

## U.S. law does not create an automatic Japan route

米 GENIUS Act（Public Law 119-27）に「§501(d) 入榜リスト」はない。外国発行者・外国制度に関係する比較可能性判断と登録手続は主に section 18 にあり、財務長官による判断、外国発行者の OCC 登録、準備資産・監督・AML 等の条件を伴う。二国間の相互取決めも公表手続を要し、USDC を日本で取り扱うだけで JPYC や他の日本円建て商品が米国で自動承認されるわけではない。

Source: [Public Law 119-27, sections 18 and 20](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf).

## Verification sequence

1. 発行者と発行根拠を確認する。
2. 流通・交換・管理を行う登録業者を金融庁一覧で確認する。
3. 基盤提供者、受託者、銀行、ウォレット提供者の役割を分ける。
4. 「検討」「実証」「発行開始」「一般提供」を別の状態として記録する。
5. 越境利用は相手国の発行者・流通・登録要件を別途確認する。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 3 型アーキテクチャ概観]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC アーキテクチャ]]
- [[fintech/jurisdiction-list-monetary-protectionism|司法区リスト通貨保護主義]]
- [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]]
<!-- /wiki-links:managed -->

## Sources

- 金融庁 電子決済手段等取引業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx
- 金融庁 資金移動業者一覧: https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.pdf
- JPYC 正式リリース: https://corporate.jpyc.co.jp/news/posts/jpyc-ex-launch
- SBI Circle Holdings 設立: https://www.sbigroup.co.jp/news/2025/0822_15679.html
- SBI VC トレード 契約締結前交付書面: https://www.sbivc.co.jp/assets/docs/manual_tt.pdf
- Progmat 共同実証: https://progmat.co.jp/wp-content/uploads/2025/11/20251106_%E3%83%97%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9_%E3%80%8C%E8%A4%87%E6%95%B0%E3%81%AE%E9%8A%80%E8%A1%8C%E3%81%AB%E3%82%88%E3%82%8B%E5%85%B1%E5%90%8C%E3%81%A7%E3%81%AE%E3%82%B9%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%B3%E3%82%A4%E3%83%B3%E7%99%BA%E8%A1%8C%E3%81%A8%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E6%B1%BA%E6%B8%88%E3%81%AE%E9%AB%98%E5%BA%A6%E5%8C%96%E3%81%AB%E4%BF%82%E3%82%8B%E3%80%8D.pdf
- みんなの銀行 共同検討: https://corporate.minna-no-ginko.com/information/corporate/2025/07/04/696/
- Public Law 119-27: https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf
