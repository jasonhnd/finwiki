---
title: "trading-company-finance — 商社系グループ財務 (sogo-shosha group-treasury arms) index"
aliases:
  - "trading-company-finance INDEX"
  - "trading-company finance domain"
  - "商社系金融子会社 index"
  - "sogo-shosha group-treasury index"
  - "trading house finance arm index"
domain: trading-company-finance
created: 2026-06-04
last_updated: 2026-06-04
last_tended: 2026-06-04
review_by: 2027-06-04
confidence: likely
tags: [trading-company-finance, JapanFG, index, sogo-shosha, group-treasury, factoring, cms]
status: active
sources:
  - "各商社 有価証券報告書 (関係会社一覧) — EDINET https://disclosure.edinet-fsa.go.jp/"
  - "伊藤忠商事 (8001) / 三菱商事 (8058) / 三井物産 (8031) / 住友商事 (8053) / 丸紅 (8002) / 豊田通商 (8015) / 双日 (2768) 公式 IR・統合報告書"
  - "公益社団法人リース事業協会 (JLA) https://www.leasing.or.jp/"
---

# trading-company-finance — 商社系グループ財務 (sogo-shosha group-treasury arms) index

## Scope

`trading-company-finance/` holds the **internal finance / treasury / factoring arms of the sōgō shōsha** (general trading companies) — the non-listed, wholly-owned **group-treasury subsidiaries** that run cash-management services (CMS), 一括ファクタリング (bulk factoring), intra-group lending, FX / rate-hedge brokerage, and cross-border settlement for their parent's trading subsidiaries. This is the **inward-facing (内向け)** finance layer, distinct from the **outward-facing (外向け)** listed leasing / asset-finance arms (三菱HCキャピタル, SMFL, 東京センチュリー, JA三井リース, みずほリース) that live under the leasing domain.

The domain currently holds **7 entries** (excluding this INDEX), one per major trading house. All share the same group-treasury template: CMS + bulk factoring + group finance + hedge brokerage + overseas remittance + trade-finance support. Scale tracks the parent — the five majors (三菱 / 三井 / 住友 / 伊藤忠 / 丸紅) run the largest, with 豊田通商 (Toyota-group) and 双日 (mid-tier) running the same function set at smaller scale.

## Disambiguation

The two domains are **paired one-to-one**: every parent holding company in [[financial-conglomerates/INDEX|financial-conglomerates]] has its inward-facing finance arm here.

| Parent (financial-conglomerates) | Finance arm (this domain) | Outward-facing leasing arm |
|---|---|---|
| [[financial-conglomerates/itochu-corp\|伊藤忠商事]] | [[trading-company-finance/itochu-finance\|伊藤忠ファイナンス]] | [[leasing-firms/tokyo-century\|東京センチュリー]] |
| [[financial-conglomerates/mitsubishi-corp\|三菱商事]] | [[trading-company-finance/mitsubishi-corp-finance\|三菱商事フィナンシャルサービス]] | [[leasing-firms/mitsubishi-hc-capital\|三菱HCキャピタル]] |
| [[financial-conglomerates/mitsui-co\|三井物産]] | [[trading-company-finance/mitsui-bussan-financial-services\|三井物産フィナンシャルサービス]] | [[cooperative-banks/ja-mitsui-leasing\|JA三井リース]] |
| [[financial-conglomerates/sumitomo-corp\|住友商事]] | [[trading-company-finance/sumitomo-corp-financial-management\|住友商事フィナンシャルマネジメント]] | [[leasing-firms/smfl\|SMFL]] |
| [[financial-conglomerates/marubeni-corp\|丸紅]] | [[trading-company-finance/marubeni-financial-services\|丸紅フィナンス]] | [[leasing-firms/mizuho-lease\|みずほリース]] |
| [[financial-conglomerates/toyota-tsusho-corp\|豊田通商]] | [[trading-company-finance/toyota-tsusho-finance\|豊田通商フィナンス]] | (group captive; cf. [[leasing-firms/toyota-financial\|TFS]]) |
| [[financial-conglomerates/sojitz-corp\|双日]] | [[trading-company-finance/sojitz-finance\|双日フィナンス]] | (no dedicated arm) |

Distinctions to hold:

- **This domain vs [[financial-conglomerates/INDEX|financial-conglomerates]]** — here are the *finance subsidiaries*; there are the *parent trading houses* (the entity anchors for these arms). Each entry below cross-links to its parent.
- **This domain vs the leasing domain** — group treasury (内向け CMS) here; listed leasing / asset finance (外向け) under the leasing-firms entries (e.g. [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]], [[leasing-firms/smfl|SMFL]], [[leasing-firms/tokyo-century|東京センチュリー]]). The 豊田通商フィナンス entry doubles as a disambiguation note against [[leasing-firms/toyota-financial|TFS]] (Toyota Motor's captive auto-finance, a separate lineage).
- **Restructuring / strategy cases** that exercise these groups (spinoffs, holding-company conversions, going-private) → [[corporate-strategy/INDEX|corporate-strategy]].
- **Umbrella** — the operating-company layer lives under [[JapanFG/INDEX|JapanFG]].

## Members

The five majors (5 大商社):

- [[trading-company-finance/mitsubishi-corp-finance|三菱商事フィナンシャルサービス (Mitsubishi Corporation Financial Services)]] — 三菱商事 100% 子会社、内向け CMS / グループファクタリング / 為替金利ヘッジ仲介
- [[trading-company-finance/mitsui-bussan-financial-services|三井物産フィナンシャルサービス (Mitsui & Co. Financial Services)]] — 三井物産 100% 子会社、資源・エネルギー取引付随金融に厚い
- [[trading-company-finance/sumitomo-corp-financial-management|住友商事フィナンシャルマネジメント (Sumitomo Corporation Financial Management)]] — 住友商事 100% 子会社、SMFG / SMFL との内部統合度が深い
- [[trading-company-finance/itochu-finance|伊藤忠ファイナンス (ITOCHU Finance Corporation)]] — 伊藤忠 100% 子会社、食料 / 住生活 / 情報セグメント中小サプライヤー向け CMS・ファクタリング
- [[trading-company-finance/marubeni-financial-services|丸紅フィナンス (Marubeni Finance Corporation)]] — 丸紅 100% 子会社、芙蓉グループ系、電力 IPP / プラント取引付随金融

Toyota-group and mid-tier:

- [[trading-company-finance/toyota-tsusho-finance|豊田通商フィナンス (Toyota Tsusho Finance)]] — 豊田通商 100% 子会社、トヨタサプライチェーン + アフリカ 54 ヶ国通貨ヘッジ・送金。[[leasing-firms/toyota-financial|TFS]] とは別系列
- [[trading-company-finance/sojitz-finance|双日フィナンス (Sojitz Finance)]] — 双日 100% 子会社、7 大中堅商社の group-treasury 典型例、外向け専業リース子会社は不在

## Cross-domain bridges

- [[financial-conglomerates/INDEX|financial-conglomerates]] — the paired parent trading houses (entity anchors for every arm above).
- Leasing domain — the outward-facing listed asset-finance peers: [[leasing-firms/mitsubishi-hc-capital|三菱HCキャピタル]], [[leasing-firms/smfl|SMFL]], [[leasing-firms/tokyo-century|東京センチュリー]], [[leasing-firms/mizuho-lease|みずほリース]], [[cooperative-banks/ja-mitsui-leasing|JA三井リース]] (no `leasing-firms/INDEX` landing page exists yet).
- [[corporate-strategy/INDEX|corporate-strategy]] — restructuring / spinoff / holding-company tax regimes that these groups exercise.
- [[finance/japan-acquisition-finance|日本アクイジションファイナンス]] — the acquisition-finance context these arms feed into.
- [[finance/INDEX|finance index]] · [[finance/japan-listed-financial-groups-investable-universe|Japan 上場金融 G 投資ユニバース]] — broader system frame.
- [[JapanFG/INDEX|JapanFG]] — operating-company umbrella.
- [[INDEX|FinWiki index]] — root.

## Sources

- 各商社 有価証券報告書 (関係会社一覧) — EDINET https://disclosure.edinet-fsa.go.jp/
- 伊藤忠商事 (8001) / 三菱商事 (8058) / 三井物産 (8031) / 住友商事 (8053) / 丸紅 (8002) / 豊田通商 (8015) / 双日 (2768) 公式 IR・統合報告書
- 公益社団法人リース事業協会 (JLA) https://www.leasing.or.jp/

---

> [!info] 検証状況
> confidence: **likely**。各 finance arm は非上場 100% 子会社で外部開示が限定的だが、group-treasury 機能の典型像と親子対応は親商社の 有価証券報告書 関係会社一覧 で確認可能。最新の業務範囲・持分構造は都度更新。
