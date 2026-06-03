---
source: japanfg/japan-policy-finance-map
source_hash: 6e77ae2ae9262aa3
lang: ja
status: machine
fidelity: ok
title: "日本の政策金融マップ"
translated_at: 2026-06-02T14:25:12.424Z
---
# 日本の政策金融マップ

## 要約

日本の政策金融システムは、単一の政府系銀行ではなく、特定目的の公的金融機関群の積み重ねである。 JapanFG の分析で有用なルーティングは次の通り。

- **Domestic SME / startup / agriculture / crisis credit** -> [[JapanFG/jfc|JFC]].
- **Overseas export, investment, resource, infrastructure, and strategic finance** -> [[JapanFG/jbic|JBIC]].
- **国内の長期開発、インフラ、GX、危機対応、大企業向けリスクマネー** -> [[JapanFG/dbj|DBJ]]。
- **ODA and development cooperation** -> [[policy-finance/jica|JICA]].
- **Trade / investment insurance** -> [[policy-finance/nexi|NEXI]].
- **Energy and mineral 資源安全保障** -> [[policy-finance/jogmec|JOGMEC]].
- **Okinawa-specific consolidated policy finance** -> [[policy-finance/okinawa-development-finance-corp|ODFC]] / [[JapanFG/okinawa-shinko|ODFC]].

分析上の中心的な分岐は、商業銀行免許と政策金融マンデートの違いである。 これらの主体は融資、保険、投資、保証、ODA 提供を行うことがあるが、その権限は通常の民間銀行としての位置付けではなく、特別法や政府マンデートに由来する。 ドメイン入口には [[policy-finance/INDEX|policy-finance INDEX]]、法務・ライセンス層には [[JapanFG/legal-financial-licenses/INDEX|JapanFG legal / financial licenses domain]] を使う。

## 機関マップ

| 領域 | 機関 | 主な役割 | FinWiki ルート |
|---|---|---|---|
| 国内政策金融 | Japan Finance Corporation | 民間金融機関を補完し、小規模事業者、SME、農林水産、食品、危機対応業務を支援する。 | [[JapanFG/jfc|JFC]] |
| 海外政策金融 | Japan Bank for International Cooperation | 融資、出資、保証、関連業務を通じて、資源、国際競争力、環境関連海外事業、金融秩序安定を支援する。 | [[JapanFG/jbic|JBIC]] |
| 開発銀行 / 成長資本 | Development Bank of Japan | 中長期融資、ストラクチャードファイナンス、エクイティ / メザニンのリスクマネー、助言、危機対応業務、特定投資業務を担う。 | [[JapanFG/dbj|DBJ]] |
| ODA 実施 | Japan International Cooperation Agency | 二国間 ODA チャネル。技術協力、有償資金協力、無償資金協力を扱う。 | [[policy-finance/jica|JICA]] |
| 輸出 / 投資保険 | Nippon Export and Investment Insurance | 民間保険では十分にカバーできない海外取引リスクに対する公的貿易・投資保険。 | [[policy-finance/nexi|NEXI]] |
| 資源安全保障 | Japan Organization for Metals and Energy Security | 石油、ガス、金属、鉱物資源、備蓄、鉱害防止、再生可能エネルギー関連機能、資源安全保障支援を担う。 | [[policy-finance/jogmec|JOGMEC]] |
| 沖縄地域政策金融 | Okinawa Development Finance Corporation | 沖縄向けの一元的・総合的な政策金融。本土の制度分散に対する地域例外。 | [[policy-finance/okinawa-development-finance-corp|ODFC]] / [[JapanFG/okinawa-shinko|ODFC]] |

## 法的根拠・マンデート層

| エンティティ | 法的根拠・マンデート | 主な境界 |
|---|---|---|
| [[JapanFG/jfc|JFC]] | 日本政策金融公庫法。公式プロフィールは、JFC が民間金融機関を補完する政策金融機関であると説明する。 | 通常の商業銀行グループではなく、国内政策金融。 |
| [[JapanFG/jbic|JBIC]] | 国際協力銀行法。公式プロフィールは、資源、国際競争力、環境、金融秩序安定の四つの使命分野を示す。 | 海外金融。メガバンクと協働することは多いが、ODA 機関ではない。 |
| [[JapanFG/dbj|DBJ]] | Development Bank of Japan Inc. Act; DBJ's official law page frames post-2008 joint-stock conversion, 危機対応 operations, and Special Investment Operations | Long-term / risk-capital / 危機対応 lane; privatization direction coexists with policy functions |
| [[policy-finance/jica|JICA]] | ODA 実施マンデート。JICA 公式ページは、技術協力、有償資金協力、無償資金協力を通じて二国間援助を提供すると説明する。 | 輸出信用ではなく開発協力。 |
| [[policy-finance/nexi|NEXI]] | 貿易保険法。METI / NEXI は輸出・投資保険として位置付ける。 | 直接融資ではなく、保険 / 保証型のリスク吸収。 |
| [[policy-finance/jogmec|JOGMEC]] | 石油・天然ガス・金属鉱物資源機構の設置法。公式概要は安定供給と資源安全保障機能を説明する。 | 金融 / リスク分担機能を持つ資源安全保障機関。 |
| [[policy-finance/okinawa-development-finance-corp|ODFC]] | 沖縄振興開発金融公庫法。ODFC と内閣府の公式ページは、沖縄向けの一元的政策金融として説明する。 | 地域特殊法人。本土の対応機能は JFC / 住宅 / 福祉 / DBJ 型機能に分かれる。 |

## ユースケース別ルーティング

| 問い | 起点 | 理由 |
|---|---|---|
| 創業者、小規模製造業、飲食店、農家、漁業者、地域 SME が政策金融を必要とする | [[JapanFG/jfc|JFC]] | JFC は民間貸し手を補完するための国内政策金融レーンである。 |
| 日本企業がプラント、インフラ、設備を海外輸出する | [[JapanFG/jbic|JBIC]] + [[policy-finance/nexi|NEXI]] | JBIC は融資でき、NEXI は取引、カントリー、支払、投資リスクを保険で引き受けられる。 |
| 電力、LNG、重要鉱物、水素、CCS、上流資源プロジェクトが公的支援を必要とする | [[policy-finance/jogmec|JOGMEC]] + [[JapanFG/jbic|JBIC]] + [[policy-finance/nexi|NEXI]] | JOGMEC は資源安全保障ノードであり、JBIC と NEXI は金融 / 保険のレッグである。 |
| 開発途上国プロジェクトが ODA または譲許的な開発支援として組成される | [[policy-finance/jica|JICA]] | JICA は技術協力、有償資金協力、無償資金協力を含む ODA 実施レーンを担う。 |
| 国内インフラ、GX、事業再編、大企業向けリスクマネー案件が長期資金を必要とする | [[JapanFG/dbj|DBJ]] | DBJ は SME 向け政策信用よりも、開発銀行 / 成長資本 / 危機対応金融に近い。 |
| 沖縄の借り手または地域開発プロジェクトが政策金融を必要とする | [[policy-finance/okinawa-development-finance-corp|ODFC]] | ODFC は沖縄固有の統合機関であり、機械的に本土 JFC へ振り分けてはならない。 |
| 「この活動をどの法的権限が認めているのか」が論点 | [[JapanFG/legal-financial-licenses/INDEX]] | 法務 / ライセンスページは、銀行、証券、保険、決済、暗号資産、特殊法人の制度を切り分ける。 |

## JapanFG での意義

JapanFG で政策金融が重要なのは、目に見える民間銀行取引の背後に公的機関が入っていることが多いためである。

- **メガバンク協調融資**: 大型インフラ、輸出、エネルギー、海外投資案件では、[[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]] が [[JapanFG/jbic|JBIC]]、[[JapanFG/dbj|DBJ]]、[[policy-finance/nexi|NEXI]] と並んで登場しうる。
- **地域銀行との隣接**: 国内 SME 向け政策金融では JFC / 地元銀行の協調融資が多く、沖縄案件では ODFC が [[JapanFG/okinawa-fg|Okinawa FG]]、[[JapanFG/ryukyu-bank|Ryukyu Bank]]、[[JapanFG/okinawa-kaiho-bank|Okinawa Kaiho Bank]] と関わることがある。
- **政策マンデートとライセンスの違い**: JFC / JBIC / DBJ / ODFC の分析を通常の銀行免許分析に押し込めてはならない。これらのバランスシート、リスク許容度、マンデートは、特別法と公共政策に結び付いている。
- **プロジェクトの積層構造**: 海外資源・インフラ金融では、JOGMEC、JBIC、NEXI、民間銀行、商社、電力・ガス会社が組み合わさり、開発協力レイヤーが実在する場合は JICA も加わることがある。

## 境界事例

- **JICA vs JBIC**: JICA は ODA / 開発協力のレーンであり、JBIC は日本企業、資源、インフラ、金融秩序安定のための海外政策金融レーンである。
- **NEXI vs JBIC**: NEXI は貿易・投資リスクを保険で引き受ける。JBIC は融資、出資、保証、その他金融商品を提供する。
- **JOGMEC vs JBIC**: JOGMEC は資源安全保障政策とリスク分担のアンカーであり、JBIC はプロジェクトに融資しうるより広い海外金融機関である。
- **JFC vs DBJ**: JFC は国内 SME、小規模事業者、農林水産、食品、危機対応を中心とする。DBJ は、より大規模・長期のインフラ、リスクマネー、危機対応機能を担う開発銀行レーンである。
- **ODFC vs 本土機関**: ODFC は単なる「JFC 沖縄支店」ではない。公式出典は沖縄の一元的政策金融として位置付け、内閣府は本土の複数機関に相当する機能を扱うと説明している。
- **特殊会社 vs 独立行政法人**: JFC / JBIC / DBJ / ODFC と JICA / JOGMEC / NEXI は、すべて同じ法的形態ではない。「政策金融」は機能別マップとして扱い、正確な根拠法と法人形態は個別に確認する。

## 関連項目

- [[policy-finance/INDEX]]
- [[policy-finance/japan-policy-finance-system]]
- [[JapanFG/jfc]]
- [[JapanFG/jbic]]
- [[JapanFG/dbj]]
- [[policy-finance/jica]]
- [[policy-finance/nexi]]
- [[policy-finance/jogmec]]
- [[policy-finance/okinawa-development-finance-corp]]
- [[JapanFG/okinawa-shinko]]
- [[JapanFG/legal-financial-licenses/INDEX]]
- [[JapanFG/local-govt-finance]]
- [[JapanFG/local-bond-market]]

## 出典

- JFC official profile: https://www.jfc.go.jp/n/english/about/profile.html
- JBIC official profile / 法定-law page: https://www.jbic.go.jp/en/about/organization.html
- DBJ official New DBJ Act page: https://www.dbj.jp/en/co/info/law.html
- JICA official ODA and JICA page: https://www.jica.go.jp/english/about/basic/oda/index.html
- NEXI official profile: https://www.nexi.go.jp/en/corporate/profile.html
- JOGMEC official overview: https://www.jogmec.go.jp/english/about/overview.html
- ODFC official English profile: https://www.okinawakouko.go.jp/english/1678100259/
- Cabinet Office Okinawa policy page on ODFC: https://www8.cao.go.jp/okinawa/3/36.html
- Local source cross-check: [[policy-finance/INDEX]]
