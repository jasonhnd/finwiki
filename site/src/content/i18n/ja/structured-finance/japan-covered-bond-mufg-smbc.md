---
source: structured-finance/japan-covered-bond-mufg-smbc
source_hash: 882ddddea7850088
lang: ja
status: machine
fidelity: ok
title: "日本の契約型カバードボンド — 検証済みのSMBCプログラムとMUFGに関する根拠の範囲"
translated_at: 2026-07-29T09:39:12.134Z
---
# 日本の契約型カバードボンド — 検証済みのSMBCプログラムとMUFGに関する根拠の範囲

## TL;DR

SMBCの公式開示は、契約型カバードボンド・プログラムを裏付けている。発行体は、特定金銭信託の受託者としてのSMBCである。債券保有者は、分別管理された信託財産とSMBCの固有財産の双方に対する遡求権を有する。カバープールは、特定されていないSPVが直接保有する住宅ローン・プールではなく、主として高格付の自己組成国内RMBSで構成される。SMBCは最低超過担保比率を25%と明記し、当該債券が法定カバードボンドではないと注意喚起している。今回の調査では、引用したMUFGの債券投資家向け一次情報において、同等のMUFGカバードボンド・プログラムを確認できなかった。このため、プログラム資料がない限り、MUFGを検証済みのカバードボンド発行体として記載してはならない。

## Wiki内の参照先

本ページは、[[structured-finance/INDEX|structured-finance index]]配下の**日本のカバードボンド**ノードであり、[[structured-finance/japan-rmbs-issuance-structure|RMBS]]とメガバンクのシニア無担保債の間に位置する、ストラクチャード・クレジットに隣接した資金調達商品を扱う。ストラクチャード・クレジット全体の文脈については[[structured-finance/japan-abs-market-overview|Japan ABS market overview]]、担保面で最も近い商品については[[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]、国内格付機関とグローバル格付機関の取扱いについては[[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]、ストラクチャー上のビークルについては[[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK/GK/TMK/SPC vehicle choice]]と対照して読む。システム全体の枠組みは[[finance/INDEX|finance index]]、発行銀行の参照先は[[megabanks/mufg|MUFG]] / [[megabanks/mufg-bank|MUFG Bank]]および[[megabanks/smfg|SMFG]] / [[megabanks/sumitomo-mitsui-banking-corp|SMBC]]である。

## 1. カバードボンドとは何か — 簡潔な確認

**カバードボンド**は銀行が発行する債務であり、投資家に**二重遡求**を与える。

1. シニア無担保債権者として発行銀行に対する遡求
2. 銀行がデフォルトした場合に、高品質資産（通常は住宅ローンまたは公的部門債務）からなる**分別管理されたカバープール**に対する遡求

カバープールは、発行体の一般財産から**倒産隔離**される。発行体がデフォルトした場合、カバードボンド投資家はまずカバープールのキャッシュフローから支払を受ける。カバープールが不足する場合は、発行体に対する残余のシニア無担保請求権を有する。

カバードボンドは、発行体の信用力と、特定されたカバー資産への遡求を組み合わせる。倒産時の取扱い、支払順位、権利行使の正確な結果は、適用法令または契約上のプログラムによって異なる。

## 2. 欧州の法定構造と日本の契約構造

[SMBCの公式プログラム注意事項および概要](https://www.smfg.co.jp/english/investor/debt/covered_bond.html)は、日本のプログラム欄を裏付けている。比較対象は、検証済みのSMBCストラクチャーに限定する。

| 比較項目 | 法定カバードボンド | 検証済みのSMBC契約型カバードボンド |
|---|---|---|
| 地位 | 適用されるカバードボンド法に基づき創設・監督される | SMBCは、当該債券が法定カバードボンドに該当しないと明記している |
| 発行体 | 適用法令上の規制対象発行体 | 特定金銭信託の受託者としてのSMBC |
| 二重遡求 | 法定制度により付与 | 信託財産およびSMBCの固有財産に対する契約上の遡求 |
| 分別管理 | 適用法令に基づく | 日本の信託法に基づき信託財産を分別し、債券保有者の担保権に服する |
| 資産カバレッジ | 法定要件およびプログラム要件 | TRS/CSAおよび資産カバレッジ・テスト。最低OC比率は25%と明記 |

契約型という表示は重要である。規制上の適格性と投資家による取扱いは、投資家自身に適用される規則および各シリーズの資料に基づいて確認する必要がある。

### MUFG Bankのカバードボンド・プログラム

[MUFG Bankの債券投資家向けページ](https://www.bk.mufg.jp/global/aboutus/investorinfo/index.html)は、以下の表に関する一次確認先である。

| 検証項目 | 結果 |
|---|---|
| 一次プログラム資料 | July 29, 2026 review（調査）では、引用したMUFGの債券投資家向けページで確認できなかった |
| 発行体、カバープール、通貨、格付 | MUFGのプログラム資料がない限り主張しない |
| 編集ルール | SMBCのプログラムまたは一般的なEMTN発行から、MUFGのカバードボンド・プログラムを推測しない |

### SMBCのカバードボンド・プログラム

[SMBCの公式カバードボンド概要および発行一覧](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html)は、以下の全行を裏付けている。

| 項目 | SMBCカバードボンドの詳細 |
|---|---|
| 発行体 | 特定金銭信託の受託者としての[[megabanks/sumitomo-mitsui-banking-corp|SMBC]] |
| 遡求 | 信託財産およびSMBCの固有財産に対する遡求権を伴うSMBCのシニア担保付債務 |
| カバープール | Aaa格の自己組成国内RMBSシニア・トランシェ。Aa格RMBSは20%のヘアカットを適用して組入れ可能 |
| その他の適格資産 | 10%を上限とするJGB、およびCSAに基づき差し入れられた現金 |
| 超過担保 | プログラム条件に従い、最低OC比率25% |
| 公表済み発行 | SMBCは2019年、2025年および2026年のEUR建て各シリーズについて、発行額、クーポン、満期を個別に掲載 |

## 4. カバープールの構成 — 適格な国内RMBS

[SMBCの公式プログラム・ページ](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html)は、以下の検証済みカバープール表を裏付けている。

| カバープールの特徴 | 検証済みのSMBCプログラム |
|---|---|
| 主要資産 | 自己組成国内RMBSのシニア・トランシェのみ |
| 格付適格性 | Aaa格RMBS。Aa格RMBSは明記された20%のヘアカットを適用して組入れ可能 |
| 代替資産 | 10%を上限とするJGB |
| 現金 | CSA担保がプールの一部を構成する場合がある |
| カバレッジの仕組み | TRS/CSAのキャッシュフローおよび資産カバレッジ・テスト |
| 最低OC | 25%。プログラムに基づき当該最低水準を条件として調整可能 |

原資産RMBSは住宅ローンを裏付けとするが、カバードボンドのカバープールを、特定されていない動的な住宅ローン・プールを債券が直接保有するかのように説明してはならない。

## 5. シニア無担保債との価格比較

[SMBCの公表済み発行一覧](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html)は各発行条件を示すが、すべての無担保債・資本性商品に対する普遍的な価格序列を立証するものではない。

| 商品 | 再現可能な比較 |
|---|---|
| SMBCカバードボンド | 特定シリーズ、発行日、通貨、満期、クーポンを使用する |
| SMBC無担保債 | 通貨、満期、価格決定日、ベンチマークを揃える |
| 劣後債または資本性商品 | 支払順位、コール構造、損失吸収条項を調整せずに比較しない |
| MUFGの商品 | MUFGのカバードボンド・プログラムの根拠にはならない |

対応する取引データがない限り、時間を問わず「シニア無担保債より内側」であるとのスプレッド主張は記載しない。

## 6. カバードボンドとRMBS — 資金調達商品の選択

[SMBCのプログラム・ページ](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html)は特定カバードボンドの条件を立証する。RMBSとの比較には、特定RMBSの資料が必要である。

| 比較項目 | SMBCの契約型カバードボンド | [[structured-finance/japan-rmbs-issuance-structure|Private RMBS]] |
|---|---|---|
| 法的な債務者 | 受託者としてのSMBC。開示された契約上の遡求を伴う | 特定の発行体 / 信託 / SPV |
| カバー資産 / 担保 | SMBCプログラムが定める適格資産 | 特定の住宅ローン・プール |
| 遡求 | プログラム固有の二重遡求 | 取引ごとに異なる |
| 資産の差替え | SMBCプログラムおよびシリーズ資料を確認 | 特定RMBSの資料を確認 |
| 会計 / 自己資本 | SMBCの現行開示および適用規則に基づく分析 | 取引固有の認識中止 / 自己資本分析 |
| 価格 | 特定のSMBCシリーズおよび対応するベンチマーク | 特定RMBSクラスおよび対応するベンチマーク |

## 7. 留意点

- SMBCは明確に注意喚起しているため、SMBC債券を法定カバードボンドと呼ばない。
- 検証済みの主要資産は適格な国内RMBSであるため、カバープールを住宅ローンの直接保有と説明しない。
- SMBCのプログラム条件、格付、OC、通貨、投資家による取扱いを、MUFGその他の発行体へ転用しない。
- 対応する日付付きの根拠がない限り、価格面の利益、会計結果、規制上の適格性、RMBS代替効果を主張しない。

## 関連ページ

- [[structured-finance/INDEX|structured-finance index]]
- [[structured-finance/japan-abs-market-overview|Japan ABS market overview]]
- [[structured-finance/japan-rmbs-issuance-structure|Japan RMBS issuance structure]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i|JCR / R&I methodology]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax|SPV TK / GK / TMK / SPC vehicle choice]]
- [[structured-finance/jhf-mbs-mechanics|JHF MBS mechanics]]
- [[structured-finance/jhf-mbs-vs-private-rmbs-spread|JHF MBS vs private RMBS spread]]
- [[structured-finance/japan-clo-issuance-japanese-banks|Japanese banks as CLO investors]]
- [[structured-finance/synthetic-securitization-japan-bank-rwa-relief|synthetic securitization Japan bank RWA relief]]
- [[structured-finance/tmk-special-purpose-company-mechanics|TMK special-purpose company mechanics]]
- [[structured-finance/japan-green-securitization|Japan green securitization]]
- [[megabanks/mufg|MUFG]] · [[megabanks/mufg-bank|MUFG Bank]]
- [[megabanks/smfg|SMFG]] · [[megabanks/sumitomo-mitsui-banking-corp|SMBC]]
- [[megabanks/mizuho-fg|Mizuho FG]] · [[megabanks/mizuho-bank|Mizuho Bank]]
- [[INDEX|FinWiki index]]

## 出典

- [SMBC, covered-bond program overview and issue list](https://www.smfg.co.jp/english/investor/debt/covered_bond_issues.html).
- [SMBC, contractual covered-bond warning](https://www.smfg.co.jp/english/investor/debt/covered_bond.html).
- [MUFG Bank, bond investor information](https://www.bk.mufg.jp/global/aboutus/investorinfo/index.html).
