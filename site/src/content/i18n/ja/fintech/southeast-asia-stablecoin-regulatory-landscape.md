---
source: fintech/southeast-asia-stablecoin-regulatory-landscape
source_hash: 4821b504922a1a07
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "東南アジアのステーブルコイン規制 2026 · 公式資料マトリクス"
translated_at: 2026-07-30T02:03:00+09:00
---
# 東南アジアのステーブルコイン規制 2026 · 公式資料マトリクス

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の下にあり、ASEAN と香港のステーブルコイン政策を案内する**地域 routing surface**である。MAS と HKMA を世界の中に位置づける [[fintech/global-stablecoin-regulatory-five-pole-matrix|global five-pole matrix]]、規制地図の下で user が実際に行うことを説明する [[fintech/em-market-crypto-dollarization-pattern|EM dollarization counter-pattern]] とあわせて読む。法域別 deep dive は [[fintech/singapore-mas-payment-services-act-overview]] と [[fintech/hkma-stablecoin-licensing-overview]]。本項目は Thailand、Indonesia、Philippines、Vietnam、Malaysia を隣に置く**地図 view**である。

> [!info] 要約
> これらの法域を一つの「stablecoin friendliness」ladder で順位づけることはできない。Singapore には finalized MAS single-currency-stablecoin framework があり、ASEAN-adjacent comparator としてのみ扱う Hong Kong には statutory issuer-licensing regime がある。本項目の他 market は、digital-asset trading、payment use、sandbox、CBDC experiment など異なる部分を規制する。framework、sandbox participant、exchange registration、CBDC pilot、issuer licence は別 status である。このページは 2026-07-30 時点で link 先の公式資料が立証することだけを記録する。

## 地域地図が重要な理由

legal question は layer ごとに変わる。issuance、offering、exchange intermediation、custody、payment use、redemption、cross-border transfer は異なる rule・regulator の対象になり得る。同じ token が registered trading venue で利用可能でも、国内発行や money としての利用が可能とは限らない。したがって、このページは地域全体で token に単一の legal label を付与しない。

同じ regulatory surface の on-ramp / exchange 側は [[exchanges/INDEX]]、[[exchanges/sg-mas-dpt-licensing-overview]]、cross-region view は [[exchanges/global-vasp-regulatory-comparison-matrix]]を参照。

### Singapore MAS · framework は issuer register ではない

MAS の [stablecoin explainer](https://www.mas.gov.sg/regulation/explainers/regulatory-approach-to-stablecoin-related-activities) は、Singapore で発行され SGD または G10 currency に peg する single-currency stablecoin の framework を説明する。reserve asset、capital、redemption、disclosure の要件を定め、framework を満たす stablecoin に「MAS-regulated stablecoin」label を限定する。

framework announcement だけでは、特定 token または issuer が現在その label を持つと証明できない。entity・licence status は [MAS Financial Institutions Directory](https://eservices.mas.gov.sg/fid/institution) で確認し、approval scope は該当 record から読む必要がある。したがって、このページは current issuer-specific record なしに XSGD、USDP、USDC、USDT、その他 token を MAS-regulated SCS と表示しない。

### Hong Kong HKMA · ASEAN-adjacent comparator

Hong Kong は Southeast Asia や ASEAN の一部ではないが、Asian financial centre として Singapore と頻繁に比較されるため含める。[HKMA regime page](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/regulatory-regime-for-stablecoin-issuers/) は、2025 年 8 月 1 日に発効した Stablecoins Ordinance の licensing perimeter を説明する。regime は特定 fiat-referenced stablecoin の issuance・marketing activity を対象とし、reserve、redemption、governance、paid-up-capital requirement を課す。

HKMA の [2025 annual report](https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf) は、最初の 2 licensed issuer が 2026 年 4 月に発表されたと記載する。この aggregate statement は issuer や rejected applicant の特定を裏付けないため、本ページは current issuer register または licence record なしに HSBC、Standard Chartered、Anchorpoint、その他企業へ licence を帰属させない。

### Singapore と Hong Kong · 比較できること

以下の表は [MAS framework](https://www.mas.gov.sg/regulation/explainers/regulatory-approach-to-stablecoin-related-activities) と [HKMA regime page](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/regulatory-regime-for-stablecoin-issuers/) に基づく。legal design を比較し、issuer success や将来の mutual recognition を比較しない。

| 問い | Singapore | Hong Kong |
|---|---|---|
| Regulatory instrument | Singapore で発行される要件適合 single-currency stablecoin の MAS framework | Stablecoins Ordinance に基づく statutory licensing regime |
| Currency perimeter | MAS framework の SGD または一つの G10 currency | Ordinance の範囲にある特定 fiat-referenced stablecoin |
| Issuer-status evidence | current MAS directory と issuer-specific record | current HKMA licensee register と issuer-specific record |
| framework だけから推定できないこと | 特定 token が「MAS-regulated stablecoin」であること | 特定 applicant が licence を取得・維持していること |

### Thailand · payment-use rule と sandbox は別

Thailand SEC は 2022 年 3 月 23 日、[digital-asset business operator が digital asset を means of payment として利用促進することを制限する rule を発行し](https://www.sec.or.th/EN/Pages/News_Detail.aspx?SECID=9366)、2022 年 4 月 1 日に発効した。final rule は operator-facilitated payment use を扱い、それ自体は stablecoin-issuer licence でも、あらゆる possession・trading の禁止でもない。

Bank of Thailand の [regulatory-sandbox page](https://www.bot.or.th/en/financial-innovation/digital-finance/fintech-in-thailand/regulatory-sandbox.html) は別途 programmable-payment testing を掲載する。sandbox participation は特定 condition 下の bounded test を立証し、THB stablecoin の general circulation permission ではない。本項目は sandbox participant list から issuer authorization を推定しない。

### Malaysia · digital-asset market regulation は stablecoin regime ではない

Securities Commission Malaysia の [digital-assets page](https://www.sc.com.my/digital-assets) は regulated digital-asset market を説明し、registered operator へ link する。[registered digital-asset-exchange list](https://www.sc.com.my/regulation/guidelines/recognizedmarkets/list-of-registered-digital-asset-exchanges) は掲載 entity の exchange status の証拠であり、ringgit stablecoin を発行できる証拠ではない。

従来主張に合致する official BNM stablecoin discussion paper は、今回確認した material から見つからなかった。したがって、主張されていた 2026 consultation、reserve model、projected licence date を削除する。将来 BNM document を追加する場合は、direct official publication link と date を付ける。

### Philippines · wholesale CBDC と VASP access は別

BSP の [Project Agila report](https://www.bsp.gov.ph/PaymentAndSettlement/Project-Agila/Project-Agila-Report.pdf) は participating financial institution 間の transfer に関する wholesale CBDC proof of concept を説明する。retail stablecoin sandbox ではなく、PHPC、PHPX、その他特定 private-issued token の approval を立証しない。

BSP [Memorandum M-2025-031](https://www.bsp.gov.ph/Regulations/Issuances/2025/M-2025-031.pdf) は、memorandum の exception・review を条件に、2025 年 9 月 1 日から new VASP licence moratorium を継続した。entity status は [BSP verifier](https://www.bsp.gov.ph/SitePages/FinancialStability/BSPVerifier.aspx) で確認すべきである。VASP status、e-money-issuer status、stablecoin-issuer approval、Project Agila participation は相互に置き換えられない。

### Vietnam · 新 digital-asset law と範囲限定 pilot

Vietnam の [Law on Digital Technology Industry No. 71/2025/QH15](https://vbpl.moj.gov.vn/bokhoahoccongnghe/Pages/vbpq-toanvan.aspx?ItemID=179989) は 2026 年 1 月 1 日に発効し、digital・crypto asset の statutory basis を提供する。政府の [Resolution 05/2025/NQ-CP](https://chinhphu.vn/?classid=1&docid=215249&pageid=27160) は指定 condition 下の pilot crypto-asset market を設置する。

pilot は general stablecoin licence ではない。特に issuance condition は、Vietnam が特定 USD-stablecoin rail に支配される単純な「grey」regime だったとの従来主張を裏付けない。retail ranking、chain dominance、merchant acceptance、delayed draft decree に関する claim は、引用公式資料が立証しないため除外する。

### Indonesia · OJK market oversight と BI currency issuance は別

[official handover announcement](https://www.ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Pages/Bappebti-Kemendag-Alihkan-Tugas-Aset-Keuangan-Digital-termasuk-Aset-Kripto-serta-Derivatif-Keuangan-kepada-OJK-dan-BI.aspx) は、statutory transition の下で、crypto asset を含む digital financial asset の regulatory・supervisory duty が 2025 年 1 月 10 日に Bappebti から OJK・BI へ移管されたことを記録する。exchange または product の正確な authorization は該当 OJK・BI record で確認する必要があり、handover だけでは IDR stablecoin を license しない。

Bank Indonesia の [Project Garuda page](https://www.bi.go.id/en/rupiah/digital-rupiah/default_2.aspx) は Digital Rupiah を CBDC と明示し、crypto asset または stablecoin と区別する。したがって CBDC design project は private stablecoin authorization の証拠ではない。本項目は obsolete な「PMA exchange」用語と、裏付けのない remittance-volume claim も削除する。

## 公式資料による status matrix

以下の各行は evidence column の公式資料に紐づく。「結論なし」は確認資料がより広い主張を立証しないという意味で、activity が禁止されるとの主張ではない。

| 法域 | 検証済み regulatory surface | 直接の公式証拠 | 証拠が立証しないこと |
|---|---|---|---|
| Singapore | Singapore 発行の要件適合 single-currency stablecoin に関する MAS framework | [MAS stablecoin explainer](https://www.mas.gov.sg/regulation/explainers/regulatory-approach-to-stablecoin-related-activities) | issuer-specific record なしで特定 token の current label・licence status |
| Hong Kong（comparator） | 2025-08-01 発効の statutory stablecoin-issuer licensing regime | [HKMA regime page](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/regulatory-regime-for-stablecoin-issuers/) | register または decision なしで licensee の identity・current status |
| Thailand | 2022-04-01 発効の operator-facilitated payment use 制限 final rule。programmable-payment sandbox | [SEC final payment-use rules](https://www.sec.or.th/EN/Pages/News_Detail.aspx?SECID=9366); [BoT sandbox](https://www.bot.or.th/en/financial-innovation/digital-finance/fintech-in-thailand/regulatory-sandbox.html) | general THB-stablecoin circulation approval |
| Malaysia | SC-regulated digital-asset market と registered exchange operator | [SC digital-assets page](https://www.sc.com.my/digital-assets) | BNM stablecoin-issuer regime または issuer approval |
| Philippines | wholesale-CBDC proof of concept。2025-09-01 から VASP licensing moratorium | [Project Agila report](https://www.bsp.gov.ph/PaymentAndSettlement/Project-Agila/Project-Agila-Report.pdf); [BSP M-2025-031](https://www.bsp.gov.ph/Regulations/Issuances/2025/M-2025-031.pdf) | 特定 private PHP stablecoin の approval |
| Vietnam | digital-asset statutory basis と government crypto-asset-market pilot | [Law 71/2025/QH15](https://vbpl.moj.gov.vn/bokhoahoccongnghe/Pages/vbpq-toanvan.aspx?ItemID=179989); [Resolution 05/2025/NQ-CP](https://chinhphu.vn/?classid=1&docid=215249&pageid=27160) | general stablecoin issuance・payment permission |
| Indonesia | digital-financial-asset supervision の移管。Digital Rupiah CBDC project | [OJK/BI handover](https://www.ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Pages/Bappebti-Kemendag-Alihkan-Tugas-Aset-Keuangan-Digital-termasuk-Aset-Kripto-serta-Derivatif-Keuangan-kepada-OJK-dan-BI.aspx); [BI Project Garuda](https://www.bi.go.id/en/rupiah/digital-rupiah/default_2.aspx) | private IDR-stablecoin authorization または特定 exchange/product の approval |

## クロスボーダー分析の境界

corridor 両端の exchange または payment institution が何らかの regulatory status を持つだけでは、その corridor を「licensed」と呼べない。根拠を示せる corridor assessment には最低限、次が必要である。

1. 各 intermediary の legal identity と current authorization。
2. 各 leg の approved activity と customer class。
3. settlement token の issuer・redemption status。
4. payment use、marketing、custody、cross-border transfer に関する rule。
5. AML/CFT、sanctions、travel-rule control。
6. claimed volume、chain、settlement route の evidence。

従来の corridor table と「dominant rail」claim はこの standard を満たさず、削除した。Project Agila、Project Garuda、programmable-payment sandbox も private stablecoin corridor の evidence の代わりにならない。

## 安全な比較方法

このページを更新するときは、次を行う。

- entity status には regulator current register または dated decision を用いる。
- legal perimeter には legislation、rule、official guidance を用いる。
- consultation、framework、sandbox、conditional approval、licence を別々に label する。
- exchange、VASP、DPT、e-money status から stablecoin licence を推定しない。
- CBDC pilot から private-token authorization を推定しない。
- dated dataset と methodology なしに retail adoption、chain share、cross-border volume を推定しない。
- Hong Kong を ASEAN member ではなく ASEAN-adjacent comparator として扱う。

この方法は proposal や adjacent licence を issuer approval に変えず、有用な regional view を維持する。

## 関連項目

- [[fintech/INDEX|Wiki Index]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PSA + SCS framework]]
- [[fintech/singapore-mas-payment-services-act-strategic-implications|MAS strategic implications]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA licensing overview]]
- [[fintech/hkma-stablecoin-licensing-implications|HKMA strategic implications]]
- [[fintech/hk-frtb-stablecoin-reserve-overview|HK FRTB reserve treatment]]
- [[fintech/global-stablecoin-regulatory-five-pole-matrix|Global five-pole matrix]]
- [[fintech/jurisdiction-list-monetary-protectionism|法域 list の evidence boundary]]
- [[fintech/indonesia-ovo-stablecoin-route|Indonesia OVO / stablecoin route]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/india-anti-dollar-dpi-alliance|India anti-dollar DPI alliance]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge BIS multi-CBDC]]
- [[exchanges/sg-mas-dpt-licensing-overview|SG MAS DPT licensing]]
- [[exchanges/hk-sfc-vasp-licensing-overview|HK SFC VASP licensing]]
- [[exchanges/global-vasp-regulatory-comparison-matrix|Global VASP regulatory matrix]]

## 出典

- [MAS の stablecoin-related activity regulatory approach](https://www.mas.gov.sg/regulation/explainers/regulatory-approach-to-stablecoin-related-activities)
- [MAS Financial Institutions Directory](https://eservices.mas.gov.sg/fid/institution)
- [HKMA regulatory regime for stablecoin issuers](https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/regulatory-regime-for-stablecoin-issuers/)
- [HKMA Annual Report 2025, International Financial Centre chapter](https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/16_International_Financial_Centre.pdf)
- [Thailand SEC final rules concerning digital assets as means of payment](https://www.sec.or.th/EN/Pages/News_Detail.aspx?SECID=9366)
- [Bank of Thailand regulatory sandbox](https://www.bot.or.th/en/financial-innovation/digital-finance/fintech-in-thailand/regulatory-sandbox.html)
- [Securities Commission Malaysia digital-assets page](https://www.sc.com.my/digital-assets)
- [SC Malaysia registered digital-asset exchanges](https://www.sc.com.my/regulation/guidelines/recognizedmarkets/list-of-registered-digital-asset-exchanges)
- [BSP Project Agila report](https://www.bsp.gov.ph/PaymentAndSettlement/Project-Agila/Project-Agila-Report.pdf)
- [BSP Memorandum M-2025-031](https://www.bsp.gov.ph/Regulations/Issuances/2025/M-2025-031.pdf)
- [BSP verifier](https://www.bsp.gov.ph/SitePages/FinancialStability/BSPVerifier.aspx)
- [Vietnam Law on Digital Technology Industry No. 71/2025/QH15](https://vbpl.moj.gov.vn/bokhoahoccongnghe/Pages/vbpq-toanvan.aspx?ItemID=179989)
- [Vietnam Resolution 05/2025/NQ-CP](https://chinhphu.vn/?classid=1&docid=215249&pageid=27160)
- [Indonesia regulatory handover to OJK and BI](https://www.ojk.go.id/id/berita-dan-kegiatan/siaran-pers/Pages/Bappebti-Kemendag-Alihkan-Tugas-Aset-Keuangan-Digital-termasuk-Aset-Kripto-serta-Derivatif-Keuangan-kepada-OJK-dan-BI.aspx)
- [Bank Indonesia Project Garuda](https://www.bi.go.id/en/rupiah/digital-rupiah/default_2.aspx)
