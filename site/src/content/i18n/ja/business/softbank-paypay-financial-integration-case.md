---
source: business/softbank-paypay-financial-integration-case
source_hash: 879466b2c70bf31a
lang: ja
model: qwen3-4b-instruct-2507-4bit-guarded-full-sync+manual-review
status: machine
fidelity: ok
title: "SoftBank／PayPayの金融統合事例 — 金融子会社、ナスダック上場、およびLINEアカウント連携"
translated_at: 2026-07-29T05:13:34.783Z
---

# SoftBank／PayPayの金融統合事例 — 金融子会社、ナスダック上場、およびLINEアカウント連携

## ウィキルート

この項目は[[business/INDEX|business INDEX]]の下に公開会社の戦略的ケースとして位置づけられています。現在の事業体およびKPIプロファイルについては[[megabanks/paypay-fg|PayPay finance ecosystem]]を参照し、[[business/kddi-au-financial-bundling-case|KDDI / au financial bundling case]]、[[business/ntt-docomo-d-point-telco-finance-case|NTT DOCOMO finance integration case]]、および[[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]]を参照してください。

## TL;DR

PayPayは、利用頻度の高い決済アプリに、カード、銀行、証券の隣接会社を組み合わせ、**2026-03-12**にティッカー `PAYP` でNasdaq上場を完了した。IPO後もソフトバンクおよびグループ会社は議決権の62.2%、経済持分の40.8%を保有し、PayPayはソフトバンクの連結子会社にとどまった。PayPayは2026年7月時点の登録ユーザー数を74 millionと公表した。^[Sources: https://about.paypay.ne.jp/en/pr/20260312/01/; https://www.softbank.jp/en/corp/set/data/ir/documents/presentations/fy2025/investors/pdf/sbkk_investors_presentation_20260511_en.pdf; https://about.paypay.ne.jp/en/pr/20260702/01/.]

旧版は、PayPayが2026年3月にLINE Payを吸収すると誤って記載していた。実際には、LY Corporationが2025-04-30にLINE Payの日本国内サービスを終了し、任意の残高移行手段を用意した。同社は、LINE Payの海外サービスがこの終了の対象外であることも明記した。2026年7月、PayPayとLYはLINEとPayPayのアカウント連携を段階的に進めると発表した。^[Sources: https://www.lycorp.co.jp/en/news/release/008632/; https://about.paypay.ne.jp/en/pr/20260702/01/.]

## 1. 金融領域

各法的事業体は、それぞれ個別に免許を受けた事業者である。本Wikiの「PayPay金融グループ」は分析上の呼称であり、法定の金融持株会社名ではない。現行のグループ会社一覧とSoftBankの開示は、以下のマップを支持する。 ^[Sources: https://about.paypay.ne.jp/en/about/; https://www.softbank.jp/en/corp/set/data/ir/documents/presentations/fy2025/investors/pdf/sbkk_investors_presentation_20260511_en.pdf.]

| レイヤー | 事業体 | 確認された位置付け |
|---|---|---|
| Payments | PayPay Corporation | Nasdaq上場の決済会社で、ソフトバンクの連結子会社 |
| Card | [[card-issuers/paypay-card|PayPay Card]] | PayPayグループ会社；ソフトバンクのFY2025開示ではグループ議決権比率100.0% |
| 銀行 | PayPay Bank | 2025-04-11以降PayPayの子会社；PayPay発表では優先株転換後の所有割合75.53%、SMBCは21.54% |
| 証券 | [[securities-firms/paypay-securities|PayPay Securities]] | PayPayは2025-04-01付で子会社化する取引の完了を発表 |
| その他グループ会社 | PayPay SC、PayPay India、Credit Engine | PayPay公式会社概要に掲載；サービスと規制上の境界はそれぞれ異なる |

## 2. 確認されたタイムライン

以下のタイムライン表は、PayPay、LY CorporationおよびSoftBankの主要発表をもとに作成されており、完了済みの取引とその後のサービス統合を別々に分けています。^[Sources: https://about.paypay.ne.jp/en/pr/20250210/01/; https://about.paypay.ne.jp/en/pr/20250414/01/; https://www.lycorp.co.jp/en/news/release/008632/; https://about.paypay.ne.jp/en/pr/20260312/01/; https://about.paypay.ne.jp/en/pr/20260702/01/.]

| 日付 | 事件 | そのことの意味でない点 |
|---|---|---|
| 2025-04-01 | PayPay SecuritiesがPayPayの子会社となった | 証券業の免許が決済会社へ統合されたわけではない |
| 2025-04-11 | PayPay BankがPayPayの子会社となった | SMBCは明示された少数株主地位を維持した |
| 2025-04-30 | LINE Payの日本サービスが終了 | これはPayPayによる日本市場のLINE Pay事業の譲渡または吸収ではない |
| 2026-03-11 (米国時間) | PayPayは54,987,214 ADSを1 ADS当たりUS$16で価格決定 | 新規発行31,054,254 ADSと売出株主による23,932,960 ADSの合計 |
| 2026-03-12 | Nasdaq Global Select Marketで`PAYP`にて取引開始 | SoftBankは統制を放棄しなかった |
| 2026-07-02 | PayPayとLYがフェーズ別にLINE／PayPayアカウント連携を発表 | この発表は、サービスの将来の段階的な機能について述べたものであり、両サービスの合併を完了したわけではない |

## 3. IPOが確立したこと

PayPayの価格決定発表によると、オーバーアロットメント行使前の内訳は、PayPayによる新規発行31,054,254 ADSと、SVF II Piranha (DE) LLCによる売出23,932,960 ADSの合計54,987,214 ADSだった。その後、ソフトバンクのFY2025決算資料はPayPayが連結子会社にとどまったことを確認した。両者の経済的な流れは異なり、新規発行分はPayPayの資金調達、売出分は売出株主による持分の一部現金化である。^[Sources: https://about.paypay.ne.jp/en/pr/20260312/01/; https://www.softbank.jp/en/corp/set/data/ir/documents/presentations/fy2025/investors/pdf/sbkk_investors_presentation_20260511_en.pdf.]

上場によりPayPayの市場価格は形成されるが、米国市場が日本上場より恒久的に高い評価を付けることまでは証明しない。その主張には、比較企業分析と反実仮想のバリュエーション分析が必要である。

## 4. 分配アーキテクチャ

この表は顧客の入口となる機能を示すもので、全商品が一つの免許、貸借対照表、契約条件を共有するという主張ではない。^[Sources: https://about.paypay.ne.jp/en/about/; https://about.paypay.ne.jp/en/pr/20260702/01/.]

| クライアント入力 | 隣接サービス | 証拠に基づく解釈 |
|---|---|---|
| PayPayアカウントおよびアプリ | 支払い、送金、本人確認 | 高頻度の利用入口；商品の利用対象は各サービスのルールに従う |
| PayPayカード | クレジットおよびカード決済 | 分離されたカード発行会社がPayPay顧客体験に統合されている |
| PayPay銀行 | 預金および銀行連携サービス | 個別に免許を受け、別個のガバナンスを持つ銀行 |
| PayPay証券 | 証券商品 | 個別に免許を受けた証券事業者が運営 |
| LINEアカウント連携 | 決済、送金・受取機能、ポイント交換を段階的に計画 | 2026年7月に商業連携を発表；LINE Pay吸収の証拠ではない |

## 5. 同業者構造との比較

以下の比較表は、引用された開示に則った構造的ものであり、顧客規模、利益性、または製品品質の順位付けを含んでいない。^[Sources: PayPay: https://about.paypay.ne.jp/en/about/; NTT DOCOMO: https://www.docomo.ne.jp/info/news_release/2026/03/31_00.html; KDDI / MUFG: https://www.mufg.jp/dam/pressrelease/2024/pdf/news-20241129-003_en.pdf; Rakuten Group: https://global.rakuten.com/corp/investors/financial/.]

| グループ | 主なデジタル取引 | 銀行境界 | 株式境界 | 上場金融特性 |
|---|---|---|---|---|
| **SoftBank / PayPay** | PayPayアプリ | PayPay BankはPayPayの子会社で、SMBCが少数持分を保有 | PayPay SecuritiesはPayPayの子会社 | PayPayは2026年3月にNasdaq上場 |
| **NTT DOCOMO** | dブランドの顧客チャネル | 三井住友信託銀行との共同議決権ガバナンスを持つ連結銀行 | マネックス証券は中間持株会社を通じて連結 | NTT DOCOMO Financial Groupは別個の上場会社とは記載されていない |
| **KDDI／au** | au ID／au PAY | 銀行中心の金融事業範囲 | KDDI／MUFG取引により証券事業の境界が変化 | au Financial Holdingsが引き続き統括レイヤー |
| **Rakuten** | 楽天ID／ポイント・エコシステム | 楽天銀行は別個に上場 | 楽天証券はみずほ証券と資本提携 | 法的に別個の複数グループ会社 |

## 6. 証拠の範囲および監視ポイント

- 登録ユーザー、本人確認済みユーザー、月間取引ユーザー、およびアクティブユーザーは異なる測定基準である。
- PayPay連結GMVとPayPay単体の取引件数は対象範囲が異なり、両者を割って平均取引額を推定してはならない。
- アプリの統合は、銀行、証券、カード、決済に関する規制境界を消すものではない。
- 段階的なLINE／PayPay連携の提供状況と利用条件を追跡し、発表された機能を実装済みとして扱わない。
- 今後のSECおよびSoftBankの提出資料を用いて、稀薄化、投票権の支配、IPO手取金、およびその後の売却株主取引を追跡する。

## 関連

- [[business/INDEX|business INDEX]]
- [[megabanks/paypay-fg|PayPay finance ecosystem]]
- [[card-issuers/paypay-card|PayPay Card]]
- [[securities-firms/paypay-securities|PayPay Securities]]
- [[business/kddi-au-financial-bundling-case|KDDI / au financial bundling case]]
- [[business/ntt-docomo-d-point-telco-finance-case|NTT DOCOMO finance integration case]]
- [[business/rakuten-group-mobile-finance-bundling-case|Rakuten Group mobile-finance bundling case]]
- [[payments/cashless-jp-landscape|Japan cashless payment landscape]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SoftBank / Yahoo / PayPay points ecosystem]]
- [[INDEX|FinWiki index]]

## 出典

- PayPay company profile: https://about.paypay.ne.jp/en/about/
- PayPay, PayPay Securities subsidiary transaction (2025-02-10): https://about.paypay.ne.jp/en/pr/20250210/01/
- PayPay, PayPay Bank subsidiary transaction (2025-04-14): https://about.paypay.ne.jp/en/pr/20250414/01/
- LY Corporation, LINE Pay Japan termination announcement (2024-06-13): https://www.lycorp.co.jp/en/news/release/008632/
- PayPay, IPO pricing and Nasdaq trading announcement (2026-03-12): https://about.paypay.ne.jp/en/pr/20260312/01/
- SoftBank, FY2025 results presentation: https://www.softbank.jp/en/corp/set/data/ir/documents/presentations/fy2025/investors/pdf/sbkk_investors_presentation_20260511_en.pdf
- PayPay, LINE / PayPay account-linkage announcement (2026-07-02): https://about.paypay.ne.jp/en/pr/20260702/01/

---

> [!info] Verification status
> confidence: **certain** for the completed subsidiary transactions, LINE Pay Japan termination, IPO pricing and listing, and July 2026 account-linkage announcement. The old “PayPay absorbs LINE Pay in March 2026” and “IPO still pending” claims were removed.
