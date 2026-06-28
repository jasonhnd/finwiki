---
source: fintech/global-stablecoin-regulatory-five-pole-matrix
source_hash: 931f5b08a3be6b33
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "グローバル・ステーブルコイン規制五極比較マトリクス"
translated_at: 2026-06-26T08:29:01.754Z
---

# グローバル・ステーブルコイン規制五極比較マトリクス

## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]の配下に位置づけられ、各レジーム概要の上位に置く法域横断マトリクスである。[[fintech/three-circles-stablecoin-mra-framework]]の地政学レンズ（世界を3つのMRA圏に単純化する見方）を補完し、ここでは**稼働中の5つのステーブルコイン・ライセンス制度すべて**を機能別に列挙する。法務チームや財務チームが物語ではなくマトリクスで法域を選べるようにするためである。VASP / オンランプの隣接領域は[[exchanges/INDEX|exchanges]]を参照。

> [!info] 要約
> 2026-05 時点で世界には、US GENIUS Act、EU MiCA（EMT/ART）、Japan EPI三類型、HKMA Stablecoin Ordinance、MAS PSA + SCSという**5つの稼働中ステーブルコイン・ライセンス制度**が存在する。これらは、1:1 の現金 / 短期ソブリン債による準備資産、分別保管、月次証明、法的償還権の義務化、アルゴリズム型SC禁止という**おおむね5つの譲れない原則に収斂**している。一方で、(a) 許容発行体類型、(b) クロスボーダー / 第三国アクセス、(c) 資本閾値、(d) 準備資産構成の細則では**大きく分岐**する。その結果、MRAパスポートがギャップを閉じるまで**18–24 か月の規制裁定ウィンドウ**が生じている。

## 五極比較が必要な理由単一発行体ナラティブ（「USDCがどこでも支配する」）は、大西洋または太平洋を越えると誤りになる。GENIUSの下で米国適格payment stablecoinとして発行されたものが、EU EMTステータス、日本EPI上場、HK発行体ライセンス、SG SCS認定を自動的に得るわけではない。各レジームは独自の準備資産、ガバナンス、資本、償還、AML/CFTルールを持つ。同じUSDペッグ・トークンでも、どの法人が発行し、どこで提供されるかによって5つの異なる法的分類を持ち得る。下のマトリクスはその現実を扱う作業面である。各極の深掘りは[[fintech/genius-act-501-denylist-mandate]]（US）、[[fintech/mica-overview]]（EU）、[[fintech/japan-stablecoin-regulatory-landscape]]（JP）、[[fintech/hkma-stablecoin-licensing-overview]]（HK）、[[fintech/singapore-mas-payment-services-act-overview]]（SG）を参照。

## マトリクス A · 法令、規制当局、日付

| 極 | 法令 | 主務規制当局 | 発効 | 移行期間 |
|---|---|---|---|---|
| 🇺🇸 US GENIUS | Payment Stablecoin Act（GENIUS） | OCC + Federal Reserve + 州規制当局（二重トラック） | 2025-07, に署名、2026-H2 に規則最終化 | 非準拠発行体が米国市場から退出するまで18 か月 |
| 🇪🇺 EU MiCA | Regulation (EU) 2023/1114  | EBA（重要発行体）+ ESMA + 各国NCA | SC部分は2024-06-30に発効、MiCA全面は2024-12-30に発効 | 18 経過措置が2026-07 に終了 |
| 🇯🇵 Japan EPI | 改正資金決済法（PSA 2022 改正） | FSA + 関東財務局 + 信託業界協会 | 2023-06-01に施行済み | 移行期間なし — 3つの新ライセンス類型を中心に構築された新制度 |
| 🇭🇰 HK | Stablecoin Ordinance（Cap. 656） | HKMA | 2025-08-01に施行済み、初回ライセンスは2026-05-21 | 既存sandbox参加者向けに、sandboxからlicenseへの6か月のブリッジ期間 ^[HKMA stablecoin issuer regime page; HKMA press releases] |
| 🇸🇬 SG | PS Act 2019  + SCS Framework 2023-08  + DTSP Regime 2024-04  | MAS | PSA 2020-01、SCSはAug 2023、DTSPはApr 2024  | DTSP経過措置は2025-06 に終了 |

最も早く動いたのは日本（2023-06）であり、最も新しい稼働中レジームはHKMA（2025-08）である。制度的な重みが最も大きいのはGENIUS（2025-07）である。MiCAは、決済法にライセンス類型を追加したものではなく、単一の400ページ規則として起草された唯一のレジームである。

## マトリクス B · 対象範囲と除外設計

| 極 | ペッグ通貨の範囲 | アルゴリズム型SC | マルチアセット・バスケット | 無記名 / 未登録 |
|---|---|---|---|---|
| US GENIUS | USDのみ (payment stablecoin) | ❌ 禁止 | ❌ 対象外 (treated as commodity / security) | ❌ |
| EU MiCA | 任意の単一fiat (EMT) またはマルチアセット / マルチfiat (ART) | ❌ 禁止 (Art. 19) | ✅ ART類型は存在するが採用はほぼゼロ | ❌ |
| Japan EPI | JPY + foreign fiat (USD via SBI Circle) | ❌ 暗黙に禁止 (額面償還が必須) | ❌ 想定されていない | ❌ |
| HKMA | 任意の単一fiat (HKD + USDが中心) | ❌ 禁止 | ❌ 対象外 | ❌ |
| MAS SCS | SGD + 任意の G10 単一fiat | ❌ 禁止 | ❌ 対象外 (SCSではなくDPTのみの規律対象) | ❌ |

**収斂している線**: **五極すべてがアルゴリズム型ステーブルコインを禁止している**。これはMay-2022 のUST崩壊への直接的な対応である。**分岐している線**: MiCAだけがマルチアセット類型（ART）を創設したが、市場では実質的に失敗し、大規模ART発行体は実現していない。これは[[fintech/genius-act-501-denylist-mandate]]に見られる「規制が商品を形作る」力学を確認している。

## マトリクス C · 許容される発行体類型

| 極 | 認められる発行体類型 |
|---|---|
| US GENIUS | (a) 連邦適格payment stablecoin発行体（OCCチャーター）、(b) 流通量$10B以下の州適格発行体、(c) 銀行子会社 |
| EU MiCA | (a) 信用機関（EU銀行）、(b) EMT向け認可電子マネー機関（EMI）、(c) 認可ART発行体（別ライセンス） |
| Japan EPI | (a) 信託型（信託銀行が発行体）、(b) 銀行型（銀行が発行体）、(c) 資金移動業者型（登録資金移動業者） |
| HKMA | (a) 香港法人のステーブルコイン発行体（新たな専用ライセンス）。既存銀行ライセンスへの便乗は不可 |
| MAS SCS | (a) MASライセンスSCS発行体（PS Act下の専用類型）。シンガポール法人かつ現地経営が必要 |

**収斂している線**: すべての極が、銀行だけでなく**専用ステーブルコイン発行体ライセンス**を認めている。**分岐している線**: 日本だけが発行体類型を3つの別個の法形式（信託 / 銀行 / 資金移動業者）に分け、それぞれ実質的に異なる運用範囲を持つ。信託・銀行・資金移動業者の分岐は[[fintech/japan-epi-three-types-overview]]を参照。

## マトリクス D · 準備資産構成、償還、資本

| 極 | 準備資産構成 | 償還権 | 最低資本 / 流動性 |
|---|---|---|---|
| US GENIUS | 100%を (i) 米国通貨、(ii) 被保険預金取扱機関の要求払い預金、(iii) 93日以内のTreasuries、(iv) Treasuries担保のリバースレポで保有 | 額面で義務的、T+1 法令上 | 主たる連邦規制当局が決定。OCCチャーターは約$50Mの下限 |
| EU MiCA | EMTは30%以上をEU銀行預金（重要EMTは60%）に置き、残りをHQLAで保有。分別管理、倒産隔離 | 額面で義務的、T+1 （Art. 39） | EMI最低資本€350K + 流通量に応じて拡大する自己資金要件 |
| Japan EPI | 信託型は100%信託分別管理、銀行型は銀行BSに紐づき預金保険は¥10Mまで、資金移動業者型は預金 / 保証金による完全分別 | 額面価値で義務的、類型ごとにT+0/T+1  | 信託は払込資本¥100M以上、銀行は銀行法上の自己資本比率、資金移動業者型は¥10M + 取引ごとの上限 |
| HKMA | HKD / USD短期Treasuries、中央銀行準備、分別銀行預金に100%を保有。日次時価評価 | 額面で義務的、T+1。拒絶事由はAMLに限定 | 払込資本HK$25M以上、さらに発行済みSC価値の2%以上の継続資本 |
| MAS SCS | 100%を現金、現金同等物、または3か月以内のAA−以上格付けソブリン債で保有し、MAS承認機関で分別保管 | 額面で義務的、5 営業日以内に償還 | 基礎資本S$1M以上、またはS$1Mと年間OpExの50%の高い方 |

**最も厳格な**準備資産レジームは**MAS SCS**（3か月ソブリン、AA−以上、日次証明）であり、**最も許容的**なのは**US GENIUS**（預金取扱機関の要求払い預金とリバースレポを認める）である。EU MiCAは、信用の質にかかわらず準備資産の**固定割合**をEU銀行に置くことを義務づける唯一の制度であり、発行体NIMを犠牲にEU銀行を補助する副作用を持つ。

## マトリクス E · クロスボーダーおよび第三国アクセス

| 極 | 外国発行体アクセス | 第三国レジーム |
|---|---|---|
| US GENIUS | 米国所在の適格発行体経由、または財務省が認める「同等外国規制当局」ルート（§502）のみ | 「同等外国規制当局」リストを財務省が管理。MRA主導。Japanは2026-02, に署名、EUは2026-Q3 署名予想 |
| EU MiCA | 外国EMT発行体はEU CRR信用機関またはEMIを設立する必要がある。受動的マーケティングのカーブアウトなし | リバース・ソリシテーションを除き第三国オファーは禁止。MiCAにはLevel 1 で同等性レジームが組み込まれていない |
| Japan EPI | 外国SCはライセンスEPIサービス提供者経由でのみ流通できる（例: USDCのSBI VC Trade）。外国発行体は直接提供できない | 分配者モデル + 二国間MRA（US-Japan MRA 2026-02） |
| HKMA | 外国通貨アンカーSC（例: USDペッグ）は、香港ライセンス現地法人が発行する必要がある。オフショア支店は認められない | 第三国同等性なし。二国間MoUのみ |
| MAS SCS | 外国発行体はシンガポール子会社を設立し、SCSライセンスを取得する必要がある。既存DPTライセンスは自動昇格しない | DTSPレジームは「Singapore hub serves global customers」という抜け穴を閉じる。同等性レジームなし |

これは**最大の分岐点**である。米国は§502 とMRAを通じて意図的な同等性オンランプを創設した。EUはリバース・ソリシテーションだけを逃げ道とする閉じた庭を作った。日本は分配者モデルを使う。香港とシンガポールはいずれも現地法人化を求める。要約で述べた18か月の裁定ウィンドウは、二国間MRAが署名される時点（2026–2027）と完全運用される時点（2027–2028）の時間差に由来する。

## マトリクス F · 開示、監査、AML、破綻処理

| 極 | 証明頻度 | AML/CFT | 破綻処理レジーム |
|---|---|---|---|
| US GENIUS | 月次準備資産構成 + 年次財務諸表監査、CEO/CFO証明 | BSA、OFAC SDNスクリーニング、FinCEN経由のTravel Rule | 州適格発行体はFDIC型管財、連邦発行体はOCC経由で清算 |
| EU MiCA | 月次準備資産証明 + 四半期開示 + 年次監査、white paperとNCAへの継続報告 | AMLD6  + Transfer-of-Funds Reg（Travel Rule）+ EU制裁 | Bank Recovery & Resolution Directive（BRRD）を重要EMT発行体へ拡張 |
| Japan EPI | 月次準備資産開示（信託型は信託業協会経由）、年次監査済み財務諸表 | 犯罪収益移転防止法（AML）+ 業界協会経由のTravel Rule + 経産省制裁 | 信託業法（信託分別管理）が保有者優先を確保。銀行型は銀行法上の破綻処理 |
| HKMA | 独立監査人による月次準備資産証明、四半期公開開示 | AMLO + JFIU + UN/HKMA制裁スクリーニング。Travel Ruleは発行体フローに適用 | HK Financial Institutions (Resolution) Ordinanceが適用。発行体固有の再建計画が必須 |
| MAS SCS | 日次準備資産開示 + 月次第三者証明、年次監査 | PS Act AML + MAS Notice PSN02  + Travel Rule + UN/MAS制裁 | 発行体固有の再建・破綻処理計画。MAS管財権限 |

MASは**日次**開示で特に厳格である。五極すべてが収斂した項目は、最低線としての**月次第三者証明**と、必須AML統制としての**Travel Rule + 制裁スクリーニング**である。破綻処理レジームはなお分断されており、銀行破綻処理の仕組みをSC発行体へ明示的に拡張しているのはEUと香港だけである。

## マトリクス G · 許容用途、流通、相互運用性

| 極 | リテール利用 | ホールセール / 機関投資家 | 組込みウォレット流通 |
|---|---|---|---|
| US GENIUS | あり。取引ごとの上限なし。決済利用を想定 | あり。DvPおよびトークン化預金を含む | 許容。OCC監督下 |
| EU MiCA | EMTではあり。重要EMT（>€5B）は取引量に追加上限 | あり。ARTは主にトークン化ファンド向け | 許容。ただしEUライセンスウォレット事業者のみ |
| Japan EPI | あり。資金移動業者型は取引ごとに約¥1Mで上限（サブライセンスによる部分上限） | B2B大口向けに信託型が設計される | 許容。CASP / ウォレット提供者は別途EPI分配者登録が必要 |
| HKMA | あり。オンランプでKYCが必要。明示的な取引上限なし | あり。主要ユースケースは中国本土アンカー銀行と連携するクロスボーダー貿易 | 許容。HKMAライセンス事業者のみ |
| MAS SCS | あり。DPT会場経由で提供される場合はDPT分配者KYCの対象 | あり | 許容。MASライセンスDPT分配者が必要 |

## レジーム間相互運用性と裁定ウィンドウ

1. **MRAブリッジが唯一の法的パスポートである。** 二国間MRAがなければ、ある制度で適合するトークンが別の制度で自動的に適合するわけではない。US-Japan MRA（2026-02署名）は、米国適格USDCをEPIとしてSBI VC Trade経由で日本に流通させられる。同等のパスポートはUS-EU間またはUS-HK間にはまだ存在しない。[[fintech/three-circles-stablecoin-mra-framework]]参照。
2. **準備資産裁定。** SGライセンスSCS発行体はAA−以上の3か月ソブリン債を保有する必要がある。一方、米国適格発行体は93日物Treasuriesと要求払い預金を保有できる。純利息マージン差は金利サイクル次第で約30–60 bpsとなり、大規模USD発行体を米国チャーターへ誘導する。
3. **資本裁定。** SingaporeのS$1M下限、Hong KongのHK$25M、OCCチャーターの実質約$50M、EU EMIの€350Kには4桁規模の差がある。小規模発行体はSG/EUへ、大規模発行体はUS/HKへ向かう。
4. **クロスボーダー取扱いギャップ。** US §502 と日本の分配者モデルは開かれている。一方、EU/HK/SGは閉じている。同等性条約が成立するまで、同じトークンでも各閉鎖市場で別々の法的ラッパーが必要になる。
5. **アルゴリズム型除外は普遍的である。** UST型設計に**適合ルートはどこにもない**。これは五極すべてで確認されている。これによりアルゴリズム型SCの能力は非規制チェーンへ押し出され、[[fintech/genius-act-501-denylist-mandate]]で示した二分化を強める。
6. **ウォレット / VASP流通。** すべてのレジームは、**分配者**（取引所、ウォレット、オンランプ）が発行体ライセンスとは別に自らのライセンスを保有することを求める。そのため[[exchanges/INDEX|exchanges]]面が各法域におけるSC採用の律速段階になる。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|Fintech Index]]
- [[fintech/three-circles-stablecoin-mra-framework|三圆 MRA 框架]]
- [[fintech/genius-act-501-denylist-mandate|GENIUS Act §501]]
- [[fintech/mica-overview|MiCA 概览]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 SC 法制度の三層構造]]
- [[fintech/japan-epi-three-types-overview|日本 EPI 三型]]
- [[fintech/hkma-stablecoin-licensing-overview|HKMA 牌照概览]]
- [[fintech/singapore-mas-payment-services-act-overview|MAS PSA + SCS 概览]]
- [[exchanges/INDEX|Exchanges]]
<!-- /wiki-links:managed -->

## 出典

- US Treasury · Digital Assets policy hub: https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/digital-assets
- OCC · Charters and licensing: https://occ.treas.gov/topics/charters-and-licensing/index-charters-and-licensing.html
- ESMA · Crypto-assets policy: https://www.esma.europa.eu/policy-activities/crypto-assets
- EBA · MiCA technical standards: https://www.eba.europa.eu/regulation-and-policy/markets-in-crypto-assets-mica
- FSA Japan · EPI / 電子決済手段: https://www.fsa.go.jp/policy/dem_dl/index.html
- HKMA · Stablecoin Ordinance press releases: https://www.hkma.gov.hk/eng/news-and-media/press-releases/
- HKMA - Stablecoin issuers regime: https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/
- MAS · Payments regulation: https://www.mas.gov.sg/regulation/payments
- MAS · Digital token offering guide: https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings
