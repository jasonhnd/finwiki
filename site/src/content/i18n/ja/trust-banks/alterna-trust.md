---
source: trust-banks/alterna-trust
source_hash: 22f949f4ccb1cd6f
lang: ja
status: machine
fidelity: ok
title: "オルタナ信託"
translated_at: 2026-06-24T09:30:00.000Z
---
# オルタナ信託 (Alterna Trust)

## ウィキ上の位置づけ

オルタナ信託は、[[trust-banks/INDEX|信託銀行インデックス]] の配下に置く独立した信託会社ルートであり、[[trust-banks/trust-companies-japan-index|日本の信託会社登録インデックス]] から昇格した項目である。[[payment-firms/progmat|Progmat]]、[[fintech/jp-stablecoin-progmat|Progmat のステーブルコイン／デジタル資産ルート]]、[[securities/osaka-digital-exchange|ODX]]、[[trust-banks/smtb|SMTB]] と併せて読むこと。

デジタル証券、セキュリティトークン信託、受益証券発行信託、信託会社プラットフォームに関する論点には、本ページを用いること。

## TL;DR

オルタナ信託は、Mitsui & Co. Digital Asset Management (MDM) と [[trust-banks/smtb|Sumitomo Mitsui Trust Bank]] が設立したデジタル証券特化の信託会社である。SMTG の英文リリースは、オルタナ信託をデジタル証券に特化した信託会社と説明し、受益証券発行信託の管理がセキュリティトークン（ST）の発行において重要な役割を担うと述べる。^[source:smtg-alterna-release-2025] MDM のリリースは、ALTERNA ブランドのもとで ST の取得・運用・受託・販売を一気通貫で提供する体制を構築し、[[payment-firms/progmat|Progmat]] が Progmat SaaS を MDM とオルタナ信託に提供すると説明する。^[source:mdm-alterna-release-2025] FSA の信託会社一覧では、オルタナ信託株式会社が 2025-07-03 免許日、法人番号 9010001253166、所在地 東京都中央区日本橋堀留町1-9-8 として掲載される。^[source:fsa-trust-list-2026]

## エンティティ境界

| 項目 | 内容 |
|---|---|
| 正式名称 | オルタナ信託株式会社 / Alterna Trust Co., Ltd.。^[source:mdm-alterna-release-2025][source:smtg-alterna-release-2025] |
| 免許／登録 | FSA の `sintaku01.xlsx` は、信託会社一覧にオルタナ信託株式会社を 2025-07-03 免許日で掲載する。^[source:fsa-trust-list-2026] |
| 所在地 | 東京都中央区日本橋堀留町1-9-8；SMTG リリースは人形町 PREX 3F と明記する。^[source:fsa-trust-list-2026][source:smtg-alterna-release-2025] |
| 代表者 | MDM・SMTG の両リリースは、代表取締役社長／CEO として池田匠作（Shosaku Ikeda）を挙げる。^[source:mdm-alterna-release-2025][source:smtg-alterna-release-2025] |
| 資本金／出資比率 | SMTG リリースは、資本準備金を含む資本金 JPY 665百万円、出資比率は MDM 85.1%、SuMiTB 14.9% とする。^[source:smtg-alterna-release-2025] |

本ページは証券会社・取引所・ステーブルコイン発行会社のページではない。有益な境界は、セキュリティトークン・ファンド組成における **受託者／信託管理の役割** にある。

## デジタル証券における信託機能

| 機能 | FinWiki 上の意義 |
|---|---|
| 受益証券発行信託 | SMTG リリースは、オルタナ信託が受益権を表示する証券を伴う信託の管理に特化しており、これがデジタル証券の発行において重要な役割を果たすと述べる。^[source:smtg-alterna-release-2025] |
| ST 発行スキームにおける受託者 | SMTG リリースは、オルタナ信託がデジタル証券を発行するスキームにおいて、資産運用会社・証券会社その他と受託者として協働すると述べる。^[source:smtg-alterna-release-2025] |
| ALTERNA との統合 | MDM リリースは、MDM とオルタナ信託が ALTERNA ブランドのもとで ST の取得・運用・信託管理・販売の体制を構築したと述べる。^[source:mdm-alterna-release-2025] |
| Progmat SaaS | MDM リリースは、Progmat が Progmat SaaS を MDM とオルタナ信託に提供し、デジタル資産の発行／管理インフラを支えると述べる。^[source:mdm-alterna-release-2025] |
| 対象アセットクラス | SMTG リリースは、オルタナ信託が当初は不動産に注力し、その後 SuMiTB が保有する他のオルタナティブ資産・社債・債権を追加する意向であると述べる。^[source:smtg-alterna-release-2025] |

## グループ／提携関係

### MDM 側

MDM は本体制におけるプラットフォーム／資産運用の側を担う。そのリリースによれば、MDM は個人投資家向けに ALTERNA サービスを構築し、ST ファンドの組成・運用・販売を手がける。また、Progmat SaaS の活用により MDM 自身で ST の管理を完結でき、スキームコストを抑えて投資家へのリターン最大化を目指すとする。^[source:mdm-alterna-release-2025]

### 三井住友トラスト側

[[trust-banks/smtb|SuMiTB]] は信託のノウハウと信託銀行グループのルートを提供する。SMTG リリースによれば、SuMiTB と MDM はデジタル証券に関する業務提携を締結し、オルタナ信託の共同運営、専門人材の派遣／ノウハウの共有、ALTERNA を用いた商品組成、銀行が保有または取り扱う債権を含む資産の紹介、MDM への資金提供、そして MDM による SuMiTB の販売網の活用などを含むとする。^[source:smtg-alterna-release-2025]

### Progmat との境界

[[payment-firms/progmat|Progmat]] はインフラであって、信託会社ではない。MDM リリースは、Progmat SaaS を、金融機関が自前のブロックチェーン／DLT ノードを構築することなく、台帳管理やカストディ機能などのデジタル資産関連事業を立ち上げられるようにする商品と説明する。^[source:mdm-alterna-release-2025]

## 独立ページである意義

1. **信託レイヤーが明示される**：多くの ST ページはプラットフォームや取引所を過度に強調する。オルタナ信託は、FinWiki に受託者／受益証券発行信託のアンカーを与える。
2. **信託銀行とフィンテックを結ぶ**：本ページは [[trust-banks/smtb]]、[[payment-firms/progmat]]、ALTERNA、セキュリティトークン・ファンドの発行を橋渡しする。
3. **緩い提携メモではない**：FSA の一覧と各社リリースは、概念にとどまらない具体的な規制対象の事業体を裏づける。
4. **役割の混同を防ぐ**：市場の場としては [[securities/osaka-digital-exchange|ODX]]、インフラとしては [[payment-firms/progmat|Progmat]]、信託管理としては本ページを用いること。

## Related

- [[trust-banks/INDEX]]
- [[trust-banks/trust-companies-japan-index]]
- [[trust-banks/smtb]]
- [[payment-firms/progmat]]
- [[fintech/jp-stablecoin-progmat]]
- [[securities/osaka-digital-exchange]]
- [[financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## Sources

- **FSA**: 信託会社一覧 `sintaku01.xlsx`（オルタナ信託株式会社、2025-07-03 免許日、2026-06-24 確認）https://www.fsa.go.jp/menkyo/menkyoj/sintaku01.xlsx
- **Mitsui & Co. Digital Asset Management**: デジタル証券特化の新たな信託会社「オルタナ信託株式会社」の設立および「Progmat」と「ALTERNA」の協業深化について (2025-07-03) https://corp.mitsui-x.com/news/2025/07/03/pr20250703_2.html
- **Sumitomo Mitsui Trust Group**: Establishment of "Alterna Trust," a New Company that Specializes in Digital Securities (2025-07-03) https://www.smtg.jp/english/-/media/tg/english/news/2025/E250703.pdf

---

> [!info] 検証状況
> confidence: **likely**（2026-06-24）。FSA trust-company workbookを直接確認し、MDM / SMTG releasesで設立、ownership、trustee role、Progmat / ALTERNA relationshipを確認。broker / exchange / platform とは役割を分離して記述。
