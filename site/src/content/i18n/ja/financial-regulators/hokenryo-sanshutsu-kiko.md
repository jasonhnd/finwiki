---
source: financial-regulators/hokenryo-sanshutsu-kiko
source_hash: 70f509cd59df419c
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Non-Life Insurance Rating Organization of Japan (GIROJ / 損害保険料率算出機構)"
translated_at: 2026-06-26T08:32:07.548Z
---

# Non-Life Insurance Rating Organization of Japan (GIROJ / 損害保険料率算出機構)

## TL;DR

GIROJ（損害保険料率算出機構）は、日本の損害保険業界における法定の保険料率算出団体である。損害保険料率算出団体に関する法律（1948）に基づき設立・認可され、機能的に異なる二つの制度を運営する——すなわち、自動車保険と火災保険を対象とする **参考純率** であり、会員保険会社が自社の保険料率を届け出る際のベンチマークとして利用できるもの、そして自動車損害賠償責任保険（CALI / 自賠責）と地震保険を対象とする **基準料率** であり、参加する全保険会社が使用しなければならないものである。したがって GIROJ は [[financial-regulators/sonpo-kyokai|GIAJ]] の意味での業界団体ではなく、特定の保険種目において拘束力を持つ料率算出権限を備えた法定機関である。

## Wiki route

本項目は [[financial-regulators/INDEX|financial-regulators INDEX]] の下に位置する。損害保険の業界団体である [[financial-regulators/sonpo-kyokai|General Insurance Association of Japan]]、生命保険側の対応団体である [[financial-regulators/seiho-kyokai|Life Insurance Association of Japan]]、法定の契約者保護に対応する [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]] とあわせて読むこと。法的背景は [[financial-licenses/INDEX]] および [[financial-licenses/insurance-license-and-solvency|insurance license and ソルベンシー route]] にあり、より広範な事業者ユニバースは [[insurance/INDEX]] にある。

## 法的位置づけ（法令の根拠）

GIROJ は、損害保険料率算出団体に関する法律（1948 法律第 193 号）に基づいて設立されている。[^riting-act] 同法は、FSA 認可の料率算出団体に対し、特定の損害保険種目について参考純率および基準料率を算出する権限を付与しており、その算出方法、データソース、料率の届出は、保険監督指針に従って FSA の審査の対象となる。[^fsa-ins] 保険分野における認可法人の FSA リストは、GIROJ を料率算出団体として認めている。[^fsa-licensed]

GIROJ は 2002  に、前身の損害保険料率算出団体と自動車保険料率算定会の合併によって設立され、火災・傷害料率の算出と自動車料率の算出を単一の団体に統合した。これにより、同機構は構造的に、業界団体側（[[financial-regulators/sonpo-kyokai|GIAJ]]）ではなく、法定機関側（[[financial-regulators/yokin-hoken-kiko|DICJ]] や各保護機構と並ぶ）に位置づけられる。

## 機能・範囲

GIROJ が公表する概要は、その業務を次のように整理している。[^giroj-about]

1. **参考純率の算出**（参考純率）——プールされた業界データに基づき、**任意自動車**保険および**火災**保険について、エクスポージャー単位当たりの予定損害額を算出する。会員保険会社は、これらの参考純率を、自社の経費率と利潤マージンを加えて自社の保険料率を FSA に届け出る際のベンチマークとして利用できる。GIROJ の参考値に従う義務はない。
2. **基準料率の算出**（基準料率）——**自動車損害賠償責任保険**（自動車損害賠償責任保険 / CALI / 自賠責保険）および**地震保険**（地震保険）について、拘束力のある基準料率を算出する。CALI については、自動車損害賠償保障法に基づき、全ての免許を受けた引受会社が基準料率を使用しなければならない。地震保険については、GIROJ の料率が政府による地震再保険スキームに組み込まれる。
3. **損害データの収集と統計**——料率算出対象の各種目にわたる損害データの中央業界データベースを運営し、定期的な料率改定報告書において統計的・保険数理的分析を公表する。
4. **損害調査 / 巨大災害対応**——地震保険金請求のための損害調査インフラを運営する（事後に業界全体で連携した損害調査ロジスティクスを要する）。
5. **調査・政策インプット**——自然災害損害モデリング（地震、台風、洪水）、自動車事故の頻度 / 損害度のトレンドに関する保険数理的調査と、保険料率規制に関する FSA 政策へのフィードバック。

## 会員・ガバナンス会員は、料率算出対象の種目について引受免許を有する損害保険会社で構成される。[^giroj-members] 実務上、これには本ボールトに記載された日本の損害保険会社が事実上すべて含まれる——[[non-life-insurers/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]]（ページが存在する場合）、[[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]]、[[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]、[[non-life-insurers/sony-insurance|Sony Insurance]]、[[non-life-insurers/au-insurance|au Insurance]]、[[non-life-insurers/sbi-insurance|SBI Insurance]]、[[non-life-insurers/sompo-direct|Sompo Direct]]、[[non-life-insurers/anicom-insurance|Anicom Insurance]]（ペット保険のサブセットについて）、[[non-life-insurers/sakura-insurance|Sakura Insurance]]、加えて自動車 / 火災 / 地震の種目で営業する外資系の損害保険会社。

ガバナンスは同法に従う。非業務執行者が議長を務める理事会、保険数理委員会、そして種目別（任意自動車、CALI、火災、地震）に専門化した業務部門である。FSA の監督審査は、すべての料率改定サイクルに組み込まれている。

## 関連する業界の隣接領域損害保険のスタックにおいて、GIROJ は法定の料率算出団体であり——[[financial-regulators/sonpo-kyokai|GIAJ]]（業界団体の層）や [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]]（法定の契約者保護のバックストップ）とは異なるが、それらを補完する。生命保険側の対応物は [[financial-regulators/seiho-kyokai|LIAJ]]（業界団体）と [[financial-regulators/seimei-hokensha-hogo-kiko|Life Insurance Policyholders Protection Corporation of Japan]]（法定のバックストップ）である。生命保険の価格設定は、異なる法的経路の下で保険数理的な死亡率方法論に従うため、生命保険側に GIROJ の直接の同等物は存在しない。銀行側の法定の相互バックストップは [[financial-regulators/yokin-hoken-kiko|DICJ]] である。残りの業界団体 / 法定機関のスタックについては、[[financial-regulators/zenginkyo|JBA]]、[[financial-regulators/zenchugin-kyo|Regional Banks Association of Japan]]、[[financial-regulators/dai2-chigin-kyo|Second Association of Regional Banks]]、[[financial-regulators/zenshin-kyo|Zenshin-kyō]]、[[financial-regulators/shintaku-kyokai|Trust Companies Association of Japan]]、[[financial-regulators/jsda|JSDA]] を参照のこと。

## なぜこのページが重要か

GIROJ は、日本の自動車保険の保険料率、火災保険の料率、CALI の料率、地震保険の料率が実際にどのように動くかを理解するうえで、アンカーすべき最も重要な単一の団体である。経路のアンカーなしに「GIROJ 参考純率改定」や「自賠責保険料率改定」に言及する JapanFG の項目は、出典を不明確なままにしてしまう。本ページは次の点を固定する。

- **二つの制度**: 参考純率（ベンチマークであり拘束力なし）対基準料率（CALI と地震について拘束力あり）——しばしば混同される区別。
- **法定機関と業界団体の区別**: GIROJ は法定の委任の下で料率算出権限を持つが、[[financial-regulators/sonpo-kyokai|GIAJ]] は持たない。
- **種目ごとの範囲**: GIROJ は任意自動車、CALI、火災、地震を対象とし——損害保険の全保険種目を対象とするわけではない。海上、傷害、賠償責任、および大半の特殊種目は、GIROJ の参考料率なしに、個々の保険会社と再保険会社によって相対で価格設定される。
- **データプールの出所**: 参考純率はプールされた業界データに依拠する——だからこそ、自社の独自料率を届け出る会社も含め、免許を有する全ての損害保険会社が参加する。

## Related

- [[financial-regulators/INDEX|financial-regulators INDEX]]
- [[financial-regulators/sonpo-kyokai|General Insurance Association of Japan]]
- [[financial-regulators/seiho-kyokai|Life Insurance Association of Japan]]
- [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]]
- [[financial-regulators/seimei-hokensha-hogo-kiko|Life Insurance Policyholders Protection Corporation of Japan]]
- [[financial-regulators/yokin-hoken-kiko|Deposit Insurance Corporation of Japan]]
- [[financial-regulators/jsda|JSDA]]
- [[financial-regulators/zenginkyo|Japanese Bankers Association]]
- [[financial-regulators/shintaku-kyokai|Trust Companies Association of Japan]]
- [[financial-regulators/fsa|FSA]]
- [[financial-licenses/INDEX]]
- [[financial-licenses/insurance-license-and-solvency|insurance license and ソルベンシー route]]
- [[non-life-insurers/sompo-japan-insurance|Sompo Japan Insurance]]
- [[non-life-insurers/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]]
- [[non-life-insurers/sony-insurance|Sony Insurance]]
- [[insurance/INDEX]]

## Sources

[^giroj-about]: 損害保険料率算出機構「機構について」, https://www.giroj.or.jp/about/
[^giroj-members]: 損害保険料率算出機構「会員一覧」, https://www.giroj.or.jp/member/
[^riting-act]: 損害保険料率算出団体に関する法律 (Act No. 193 of 1948), https://laws.e-gov.go.jp/law/323AC0000000193
[^fsa-ins]: FSA, "保険会社向けの総合的な監督指針", https://www.fsa.go.jp/common/law/guide/ins/
[^fsa-licensed]: FSA, "免許・許可・登録等を受けている事業者一覧", https://www.fsa.go.jp/menkyo/menkyo.html?guid=ON

---

> [!info] Confidence note
> confidence: **likely**。二制度の区別（参考純率 対 基準料率）、種目ごとの範囲（任意自動車、CALI、火災、地震）、および損害保険料率算出団体に関する法律を通じた法的経路は、GIROJ 自身の概要ページおよび会員ページに加え、確認した時点での FSA 保険監督指針を出典とする 2026-05-24。個別の料率改定の数値は改定サイクルごとに変動するため、引用前に GIROJ の最新の料率改定届出から再検証すること。
