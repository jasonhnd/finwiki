---
source: financial-regulators/yokin-hoken-kiko
source_hash: 25683d58df11f46b
lang: ja
status: machine
fidelity: ok
title: "預金保険機構 (DICJ / 預金保険機構)"
translated_at: 2026-06-18T23:59:13.109Z
---

# 預金保険機構 (DICJ / 預金保険機構)

## TL;DR

預金保険機構（DICJ、預金保険機構）は、日本の銀行システムにおける法定の預金保険および破綻処理の当局である。預金保険法に基づき、日本政府、日本銀行、および会員金融機関が共同で出資する特別な法人として設立されている。[[financial-regulators/zenginkyo|Zenginkyō]] や [[financial-regulators/jsda|JSDA]] のような業界団体とは異なり、DICJ は拘束力ある権限を有する法定当局であり、保護限度額までの預金を保険し、破綻した銀行の破綻処理を運営し、銀行システムのための公的な相互セーフティネットとして機能する。

## Wiki 内の位置づけ

本エントリは [[financial-regulators/INDEX|financial-regulators INDEX]] の配下にある。銀行業界団体スタック——[[financial-regulators/zenginkyo|Japanese Bankers Association]]、[[financial-regulators/zenchugin-kyo|Regional Banks Association of Japan]]、[[financial-regulators/dai2-chigin-kyo|Second Association of Regional Banks]]、[[financial-regulators/zenshin-kyo|Zenshin-kyō]]、[[financial-regulators/shintaku-kyokai|Trust Companies Association of Japan]]——と併せて読むことでセーフティネットの全体的な階層構造が見え、また保険サイドの法定対応機関である [[financial-regulators/seimei-hokensha-hogo-kiko|Life Insurance Policyholders Protection Corporation of Japan]] および [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]] と併せて読むこと。法的な背景は [[financial-licenses/INDEX]] と [[financial-licenses/bank-license-and-baas-boundary]] にあり、より広いオペレーターの全体像は [[banking/INDEX]] にある。

## 法令ルート／法的位置づけ (法令の根拠)

DICJ は預金保険法（1971年法律第 34 号）に基づき設立されている。[^dic-act] DICJ は認可法人であり——私的な団体ではなく——国、日本銀行、および会員金融機関が共同で出資し、金融庁を主管監督当局、財務省／日本銀行をより広い金融システムの安定に関する共同ステークホルダーとする。[^dic-overview] これにより DICJ は、業界団体の層（[[financial-regulators/zenginkyo|JBA]] 等）と規制当局の層（[[financial-regulators/fsa|FSA]]）との間に構造的に位置づけられる——DICJ は預金保険制度および金融システム・セーフティネットの法定オペレーターであり、規制当局でも業界団体でもない。

会員加入は次の機関に義務づけられている: 都市銀行、地方銀行（第一地銀および第二地銀）、信託銀行、信用金庫、信用組合、労働金庫、および同法のもとで指定されるその他の預金取扱機関。注目すべきは、[[regional-banks/yucho|Japan Post Bank]] は民営化後に標準の DICJ 制度に加入した一方、預金取扱の商業銀行レーンの外にある機関（JA バンクを通じた農業協同組合金融など）は、別個ではあるが類似のセーフティネット枠組みを有する点である。

## 機能／範囲

DICJ が公表する概要は、その業務を次のように整理している:[^dic-overview]

1. **預金保険** — 会員機関からの保険料徴収、預金保険準備金の維持、および会員機関が破綻した際の保険対象預金の支払い。標準の保護額は、預金者一人当たり一機関当たり元本 10 万円および利息であり、無利息の決済用預金については恒久的な決済用預金保護制度のもとで全額保護が維持される。
2. **破綻処理** — 破綻銀行の処理の運営。これには、承継機関への資金援助、破綻銀行からの資産買取、および即時の買い手が得られない場合のブリッジバンク機構の運営が含まれる。
3. **危機対応措置** — 預金保険法の危機管理規定のもと、内閣総理大臣により指定され金融危機対応会議により確認された場合の、第 102 条措置（資本注入、預金全額保護、特別管理）の運営。
4. **資産管理・回収** — 破綻銀行の貸出ポートフォリオの整理回収のための整理回収機構（RCC、資産回収子会社）の運営。回収金は預金保険準備金に戻される。
5. **破綻処理の事前準備** — 迅速な預金者への名寄せ払戻し（いわゆる名寄せのデータ品質）に必要なデータ品質要件に関する会員機関との協調的な訓練、システム上重要な機関について金融庁および日本銀行と連携した再建・破綻処理計画（RRP）の調整。
6. **業界協調** — 長期間休眠している預金が所定の手続のもとで会員銀行から公益活動へ移される休眠預金移管制度（休眠預金等活用法）の運営。

DICJ はまた、より近年の法的拡張のもとで、協同組織金融機関向けおよび暗号資産カストディ向けの専門制度も運営している。

## 会員／ガバナンス

会員機関は、法的に指定された預金取扱機関である。本ヴォールトに記録されている例としては——[[banking/INDEX|banking index]] にわたって——[[megabanks/mufg-bank|MUFG Bank]]、[[megabanks/sumitomo-mitsui-banking-corp|SMBC]]、[[regional-banks/aozora-bank|Aozora Bank]]、[[regional-banks/seven-bank|Seven Bank]]、[[regional-banks/sony-bank|Sony Bank]]、[[regional-banks/daiwa-next-bank|Daiwa Next Bank]]、[[card-issuers/aeon-bank|AEON Bank]]、[[regional-banks/yucho|Japan Post Bank]]、加えてシステム全体の地方銀行および信用金庫が含まれる。

ガバナンスは預金保険法によって定められている: 金融庁／財務省／日本銀行の関与のもとで任命される理事会があり、理事長は高位の公的部門の任命であり、技術的決定のための運営委員会がある。資金は会員機関の保険料徴収に加え、危機期間中に歴史的に充当された政府／日本銀行の拠出から賄われる。

## 関連する業界隣接領域

DICJ は銀行サイドの法定セーフティネットである。保険サイドの対応物は [[financial-regulators/seimei-hokensha-hogo-kiko|Life Insurance Policyholders Protection Corporation of Japan]] および [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]] である。証券レーンにおける投資者保護は、日本投資者保護基金（[[financial-regulators/jsda|JSDA]] の自主規制とは別）を通じて運営される。銀行業界団体の層については [[financial-regulators/zenginkyo|JBA]]、[[financial-regulators/zenchugin-kyo|Regional Banks Association of Japan]]、[[financial-regulators/dai2-chigin-kyo|Second Association of Regional Banks]]、[[financial-regulators/zenshin-kyo|Zenshin-kyō]]、[[financial-regulators/shintaku-kyokai|Trust Companies Association of Japan]] を参照。会員適格性を決定する免許ルートについては [[financial-licenses/INDEX]] および [[financial-licenses/bank-license-and-baas-boundary]] を参照。

## このページが重要な理由

DICJ は本ヴォールトのほぼすべての銀行エントリで暗黙的に参照されている——「預金保険 10 万円まで」、「破綻処理バックストップ」、「休眠預金移管」——が、専用のページがなければそれらの参照は錨を欠いたままになる。本エントリは次の点を固定する:

- **法定当局としての区別**: DICJ は拘束力ある法定機能を持つ認可法人であり、業界団体ではない——DICJ は破綻処理を運営し RCC を運営できるが、いずれも業界団体にはできないことである。
- **保険料で賄われる相互の性質**: 預金保険は、法的に求められる保険料を通じて会員機関自身によって賄われており、機構そのものは法定当局であるものの、これを公的相互制度としている。
- **危機モードのトリガー**: 第 102 条措置は例外的であり、正式な指定を要する; 通常の銀行破綻は標準の保険および処理レーンを用いる。
- **業界の自主規律との境界**: DICJ は行為規範を定めない——それは監督指針を通じた金融庁および業界団体のモデル規則の役割である。DICJ は破綻が宣言された後に行動するのであり、行動変容を促す機関としてではない。

## 関連

- [[financial-regulators/INDEX|financial-regulators INDEX]]
- [[financial-regulators/zenginkyo|Japanese Bankers Association]]
- [[financial-regulators/zenchugin-kyo|Regional Banks Association of Japan]]
- [[financial-regulators/dai2-chigin-kyo|Second Association of Regional Banks]]
- [[financial-regulators/zenshin-kyo|National Association of Shinkin Banks]]
- [[financial-regulators/shintaku-kyokai|Trust Companies Association of Japan]]
- [[financial-regulators/seimei-hokensha-hogo-kiko|Life Insurance Policyholders Protection Corporation of Japan]]
- [[financial-regulators/sonpo-hosho-kiko|Non-Life Insurance Policyholders Protection Corporation of Japan]]
- [[financial-regulators/jsda|JSDA]]
- [[financial-regulators/fsa|FSA]]
- [[financial-licenses/INDEX]]
- [[financial-licenses/bank-license-and-baas-boundary]]
- [[megabanks/mufg-bank|MUFG Bank]]
- [[megabanks/sumitomo-mitsui-banking-corp|SMBC]]
- [[regional-banks/yucho|Japan Post Bank]]
- [[banking/INDEX]]

## 出典

[^dic-overview]: 預金保険機構「機構概要」, https://www.dic.go.jp/yokinsha/index.html ; DICJ English overview, https://www.dic.go.jp/english/
[^dic-act]: 預金保険法 (1971年法律第 34 号), https://laws.e-gov.go.jp/law/346AC0000000034

---

> [!info] Confidence note
> confidence: **likely**。預金保険法を通じた法定ルート、会員範囲、破綻処理および第 102 条危機措置を含む機能区分、ならびに RCC 子会社の構造は、DICJ 自身の概要ページおよび預金保険法の条文（2026-05-24時点で確認）に基づく。具体的な準備金／カバレッジ統計は時間とともに変動するため、定量分析で引用する前に DICJ の最新の年次報告書から再検証すべきである。
