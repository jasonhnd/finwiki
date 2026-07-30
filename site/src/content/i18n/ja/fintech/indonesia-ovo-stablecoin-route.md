---
source: fintech/indonesia-ovo-stablecoin-route
source_hash: e36205903b2e40fb
lang: ja
model: manual-issue-239-provenance-repair
status: machine
fidelity: ok
title: "インドネシア e-wallet と stablecoin route — 規制境界と証拠 checklist"
translated_at: 2026-07-29T17:24:34.289Z
---
# インドネシア e-wallet と stablecoin route — 規制境界と証拠 checklist

## ウィキ上の位置づけ

この項目は [[fintech/INDEX|フィンテック索引]] の配下にあり、[[fintech/southeast-asia-stablecoin-regulatory-landscape|東南アジア stablecoin 規制]] が利用するインドネシア固有の証拠境界を示す。一般的な分析 pattern は [[fintech/gray-market-dollar-network-formalization|gray-market dollar network の formalization]]、contract-analysis framework は [[fintech/issuer-distributor-incentive-realignment-50-50-model|issuer / distributor economics]] とあわせて読む。これらのページは、インドネシアの wallet、bank、exchange、payment firm が rupiah token の発行を認められていることを証明しない。

> [!info] TL;DR
> インドネシアの公開 framework は、Bappebti からの 2025-01 の移管後、Bank Indonesia の payment-system・central-bank function と、digital financial asset に対する OJK supervision を分けている。BI の **QRIS**・**Project Garuda** page は、payment standard と digital rupiah の work を説明する。確認した公式資料は、rupiah stablecoin 専用発行 route の創設、承認済み private issuer の特定、OVO / GoPay / DANA / ShopeePay への token 発行許可、crypto venue の順位付け、stablecoin remittance corridor の定量化を**行っていない**。2026-07-30 の確認時点で、IDR-token claim には現行 regulation、licence-register entry、named legal-entity disclosure、product-level evidence が必要である。^[Regulator handover: https://www.ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Documents/Pages/Bappebti-Transfers-Regulation-and-Supervision-Duties-on-Digital-Financial-Assets-Crypto-Assets-and-Derivatives-to-OJK-BI/JPR%20Bappebti%20of%20Indonesian%20Ministry%20of%20Trades%20Transfers%20Regulation%20and%20Supervision%20Duties%20on%20Digital%20Financial%20Assets%20Crypto%20Assets%20and%20Derivatives%20to%20OJK%20and%20BI.pdf; QRIS: https://www.bi.go.id/QRIS/default.aspx; Project Garuda: https://www.bi.go.id/en/publikasi/ruang-media/cerita-bi/Pages/Project-Garuda.aspx]

## 規制境界 · OJK、BI、Bappebti

下表は [2025-01-10 付 OJK / BI / Bappebti 共同移管 release](https://www.ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Documents/Pages/Bappebti-Transfers-Regulation-and-Supervision-Duties-on-Digital-Financial-Assets-Crypto-Assets-and-Derivatives-to-OJK-BI/JPR%20Bappebti%20of%20Indonesian%20Ministry%20of%20Trades%20Transfers%20Regulation%20and%20Supervision%20Duties%20on%20Digital%20Financial%20Assets%20Crypto%20Assets%20and%20Derivatives%20to%20OJK%20and%20BI.pdf)、[Bank Indonesia QRIS page](https://www.bi.go.id/QRIS/default.aspx)、[Project Garuda page](https://www.bi.go.id/en/publikasi/ruang-media/cerita-bi/Pages/Project-Garuda.aspx) を要約し、2026-07-30 に確認した。

| Function または claim | 証拠で裏付けられる境界 |
|---|---|
| Payment system、rupiah、central-bank money | BI 資料が QRIS、payment-system rule、Project Garuda の一次資料 |
| Crypto asset を含む digital financial asset | 共同 release は、関連する regulation・supervision duty の OJK・BI への移管を記録 |
| 歴史的 commodity-supervision route | Bappebti は記載された digital-financial-asset / crypto duty を 2025-01-10 に移管 |
| Private rupiah-stablecoin 発行 | 引用した移管、QRIS、Project Garuda page は専用発行 route を確立しない |
| E-wallet または exchange token の authorization | 現行 regulator register または named approval で示す必要；ecosystem association では不十分 |

移管は所管する supervision perimeter を変更する。それ自体は stablecoin licence の付与、reserve model の承認、QRIS を通じた distribution の許可、private issuer の特定を行わない。

## 現行資料が確立すること

下表は regulator の直接的事実と、追加の first-party evidence が必要な claim を分ける。同じ [共同移管 release](https://www.ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Documents/Pages/Bappebti-Transfers-Regulation-and-Supervision-Duties-on-Digital-Financial-Assets-Crypto-Assets-and-Derivatives-to-OJK-BI/JPR%20Bappebti%20of%20Indonesian%20Ministry%20of%20Trades%20Transfers%20Regulation%20and%20Supervision%20Duties%20on%20Digital%20Financial%20Assets%20Crypto%20Assets%20and%20Derivatives%20to%20OJK%20and%20BI.pdf)、[QRIS page](https://www.bi.go.id/QRIS/default.aspx)、[Project Garuda page](https://www.bi.go.id/en/publikasi/ruang-media/cerita-bi/Pages/Project-Garuda.aspx) を用いる。

| Claim class | 現在の結論 | より強い claim に必要な証拠 |
|---|---|---|
| Supervision の移管 | 2025-01-10 の共同 release で確認 | Perimeter が変わる場合は後続 regulation |
| BI payment infrastructure としての QRIS | BI の QRIS page で確認 | Merchant または transaction scale の日付付き BI statistics |
| BI の digital-rupiah workstream としての Project Garuda | BI の Project Garuda page で確認 | Production issuance または named deployment に関する後続 BI decision |
| Private IDR-stablecoin 専用 route | 確認した資料では未確立 | Regulation、effective date、application procedure、regulator register |
| Named approved issuer または distributor | 確認した資料では未確立 | Legal entity・product に紐づく named approval |
| Venue ranking、stablecoin market share、pair depth | 確認した資料では未確立 | Methodology を伴う再現可能な日付付き venue data |
| Informal remittance または trade-settlement volume | 確認した資料では未確立 | Source、geography、measurement method を伴う日付付き corridor dataset |

## E-wallet と corporate relationship の checklist

OVO、GoPay、DANA、ShopeePay は、旧版が issuer prediction を行ったため due-diligence subject として含める。[共同移管 release](https://www.ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Documents/Pages/Bappebti-Transfers-Regulation-and-Supervision-Duties-on-Digital-Financial-Assets-Crypto-Assets-and-Derivatives-to-OJK-BI/JPR%20Bappebti%20of%20Indonesian%20Ministry%20of%20Trades%20Transfers%20Regulation%20and%20Supervision%20Duties%20on%20Digital%20Financial%20Assets%20Crypto%20Assets%20and%20Derivatives%20to%20OJK%20and%20BI.pdf)、[QRIS page](https://www.bi.go.id/QRIS/default.aspx)、[Project Garuda page](https://www.bi.go.id/en/publikasi/ruang-media/cerita-bi/Pages/Project-Garuda.aspx) は、その ownership、現行 licence scope、active-user scale、token programme、stablecoin authorization を証明しない。各 field は日付付き BI register と該当 company の first-party disclosure で確認する必要がある。

Table の証拠境界：[OJK / BI / Bappebti 移管 release](https://www.ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Documents/Pages/Bappebti-Transfers-Regulation-and-Supervision-Duties-on-Digital-Financial-Assets-Crypto-Assets-and-Derivatives-to-OJK-BI/JPR%20Bappebti%20of%20Indonesian%20Ministry%20of%20Trades%20Transfers%20Regulation%20and%20Supervision%20Duties%20on%20Digital%20Financial%20Assets%20Crypto%20Assets%20and%20Derivatives%20to%20OJK%20and%20BI.pdf)。

| Subject | 現行 status の記載前に確認する事項 | ここで確認した資料からの結論 |
|---|---|---|
| OVO | Legal entity、current ownership、BI licence scope、named OJK / BI token approval | Stablecoin issuance authorization は未確立 |
| GoPay | Legal entity、current ownership、BI licence scope、dated user metric、named token programme | Stablecoin issuance authorization は未確立 |
| DANA | Legal entity、current ownership、BI licence scope、named Indonesian token approval | Stablecoin issuance authorization は未確立 |
| ShopeePay | Legal entity、current ownership、BI licence scope、named Indonesian token approval | Stablecoin issuance authorization は未確立 |

Brand association、marketplace reach、foreign affiliate、headquarters location、user-count claim を、インドネシアの product authorization の代替として使ってはならない。したがってこのページは、issuer motivation、float income、net-interest margin、cannibalization、acquisition strategy、comparative compliance posture を推定しない。

## QRIS と Project Garuda · 記載された status のみ

[BI QRIS page](https://www.bi.go.id/QRIS/default.aspx) は QRIS、[Project Garuda page](https://www.bi.go.id/en/publikasi/ruang-media/cerita-bi/Pages/Project-Garuda.aspx) は BI の digital-rupiah initiative の一次資料である。

| Workstream | 直接裏付けられる記述 | 推定してはならないこと |
|---|---|---|
| QRIS | BI は national QR-payment standard と関連公式資料を公開 | 日付付き statistics のない merchant scale；必須 stablecoin-integration route；token authorization |
| Project Garuda | BI は digital-rupiah project page を公開 | Private stablecoin が downstream に置かれること；bank token の reserved market slot；production issuance |
| Cross-border payment link | 特定の BI / counterpart announcement を出典とする必要 | Instant-payment link が CBDC / stablecoin corridor であること；定量的 P2P market と競合すること |

QRIS または Project Garuda の存在は、特定の private-token architecture、commercial incentive、launch sequence を確立しない。

## Crypto venue と stablecoin activity · 証拠境界

2025-01-10 の移管 release は supervision transition を確立するが、venue-level product fact は確立しない。インドネシアの venue を licensed、largest、deepest、dominant、または stablecoin distribution の authorized entity として挙げる前に、次を確認する。

1. 現行 OJK / BI register entry と正確な legal entity。
2. Permitted activity と、named product が対象かどうか。
3. Trading pair または service に関する日付付き first-party product page。
4. Methodology を伴う再現可能な volume、liquidity、market-share data。
5. Issuance、trading、custody、distribution permission が法的に異なるかどうか。

確認した資料は、USDT がインドネシア retail volume で dominant であること、named exchange が最も deep な IDR pair を持つこと、diaspora worker、importer、OTC desk、P2P user が定量的 corridor を形成することを裏付けない。Adoption-index ranking の原因も確立しない。

## 考えられる route · 予測ではなく scenario checklist

下表は [共同移管 release](https://www.ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Documents/Pages/Bappebti-Transfers-Regulation-and-Supervision-Duties-on-Digital-Financial-Assets-Crypto-Assets-and-Derivatives-to-OJK-BI/JPR%20Bappebti%20of%20Indonesian%20Ministry%20of%20Trades%20Transfers%20Regulation%20and%20Supervision%20Duties%20on%20Digital%20Financial%20Assets%20Crypto%20Assets%20and%20Derivatives%20to%20OJK%20and%20BI.pdf) と [Project Garuda](https://www.bi.go.id/en/publikasi/ruang-media/cerita-bi/Pages/Project-Garuda.aspx) を起点とする。各 row は due-diligence scenario であり、probability を付さない。

| Scenario | 最低限必要な確認証拠 | 確認した資料からの status |
|---|---|---|
| Bank tokenized-deposit route | Banking rule、named bank approval、product terms、ledger / redemption documentation | 未確立 |
| Non-bank rupiah stablecoin route | Issuance rule、named issuer licence、reserve、custody、redemption、disclosure term | 未確立 |
| Consortium route | Named participant、regulator approval、governance・liability document | 未確立 |
| Exchange-issued rupiah token | Venue trading permission と異なる issuer permission | 未確立 |
| Wholesale digital-rupiah route | Phase、participant、operational status を記載する BI publication | Project Garuda が公式 reference；production status は同資料で確認が必要 |
| Foreign-token distribution route | Recognition rule、distributor approval、product-specific permission | 未確立 |

Reserve percentage、asset list、attestation interval、capital floor、probability、preferred issuer type を Singapore その他の法域から持ち込んではならない。将来のインドネシアに関する claim は、インドネシアの regulation と product-level disclosure に基づく必要がある。

## 将来の IDR-token claim に必要な evidence packet

公開可能な claim には、該当する次の全項目を含める。

- Regulation title、regulator、effective date、official URL。
- Licence-register entry、legal entity、permitted activity。
- Named issuer、distributor、custodian の role。
- Reserve asset、segregation、custody、attestation requirement。
- Redemption right、timing、fee、eligible customer scope。
- Token contract、network、authoritative product page。
- Issuance approval と別の distribution / venue approval。
- Denominator、geography、methodology を伴う日付付き quantitative data。
- Live status、pilot status、proposal、analyst scenario の明確な分離。

いずれかが利用できない場合は、affiliate relationship、user-scale estimate、regional analogy、market forecast で空白を埋めず、`not established` と表示する。

## Cross-border の境界

確認した regulator page は、Indonesia と Singapore、Hong Kong、Middle East、その他の market の間に stablecoin corridor があることを確立しない。Payment-system linkage、remittance flow、crypto-venue presence、stablecoin settlement route は別々の claim である。それぞれに固有の公式または再現可能な source が必要であり、QRIS、Project Garuda、corporate affiliate、foreign licence から推定してはならない。

## 関連項目

- [[fintech/INDEX|フィンテック索引]]
- [[fintech/southeast-asia-stablecoin-regulatory-landscape|東南アジア規制 landscape]]
- [[fintech/em-market-crypto-dollarization-pattern|EM crypto-dollarization pattern]]
- [[fintech/gray-market-dollar-network-formalization|Gray-market USD network formalization]]
- [[fintech/singapore-mas-payment-services-act-overview|Singapore MAS Payment Services Act]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA stablecoin licensing]]
- [[fintech/national-license-private-stablecoin-with-dpi-export|National-licence stablecoin と DPI export]]
- [[fintech/stablecoin-crossborder-b2b-growth|B2B stablecoin cross-border growth]]
- [[fintech/dual-currency-stablecoin-arbitrage-overview|Dual-currency stablecoin arbitrage]]
- [[fintech/issuer-distributor-incentive-realignment-50-50-model|Issuer / distributor contract model]]

## Sources

- OJK / BI / Bappebti — 2025-01-10 付 supervision handover release: https://www.ojk.go.id/en/berita-dan-kegiatan/siaran-pers/Documents/Pages/Bappebti-Transfers-Regulation-and-Supervision-Duties-on-Digital-Financial-Assets-Crypto-Assets-and-Derivatives-to-OJK-BI/JPR%20Bappebti%20of%20Indonesian%20Ministry%20of%20Trades%20Transfers%20Regulation%20and%20Supervision%20Duties%20on%20Digital%20Financial%20Assets%20Crypto%20Assets%20and%20Derivatives%20to%20OJK%20and%20BI.pdf
- Bank Indonesia — QRIS: https://www.bi.go.id/QRIS/default.aspx
- Bank Indonesia — Project Garuda: https://www.bi.go.id/en/publikasi/ruang-media/cerita-bi/Pages/Project-Garuda.aspx
- Bappebti — 公式 site: https://www.bappebti.go.id/en/
