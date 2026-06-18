---
source: finance/japan-cross-shareholding-unwinding-economics
source_hash: 6e8ffc00b5e25eeb
lang: ja
status: machine
fidelity: ok
title: "日本の政策保有株式解消の経済学"
translated_at: 2026-06-18T15:47:13.940Z
---

# 日本の政策保有株式解消の経済学

## Wiki ルート

このページは [[finance/INDEX|finance domain]] の下に位置する。銀行／保険会社の発行体側については [[finance/japan-listed-financial-groups-investable-universe|listed financial groups investable universe]] と、アクティビストによる圧力との接点については [[finance/japan-activist-investor-playbook|Japan activist investor playbook]] と、処分タイミングの情報管理については [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]] と、交換社債によるマネタイズについては [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]] と、保有比率変動の報告については [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] と併せて読むこと。

## 要点（TL;DR）

日本の株式持合い（政策保有株、*seisaku hoyū kabushiki*、すなわち「政策保有株式」）は、上場企業が投資リターンの理由ではなく関係維持の理由から、取引先、顧客、サプライヤー、銀行、グループ会社の株式を保有する旧来の慣行である。2015 年の CG コード改訂後、2018 年／2021 年／2024, 年の強化、ならびに金融庁／経済産業省の精査がこれを後押しし、持続的な解消プログラムが進められてきた。会計処理は、IFRS では原価／売却可能から、その他の包括利益を通じた公正価値（FV-OCI）へと移行し（9 、処分時に純損益へのリサイクリングなし）、改訂された JGAAP の下でも同様の FV-OCI のメカニクスとなった。税効率的な処分ルートには、市場売却、ToSTNeT による立会外取引、発行体による自己株式取得、および交換社債によるマネタイズが含まれる。メガバンク（[[megabanks/mufg|MUFG]]、[[megabanks/smfg|SMFG]]、[[megabanks/mizuho-fg|Mizuho FG]]）、保険会社、商社（[[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]]、[[financial-conglomerates/mitsui-co|Mitsui & Co]]、[[financial-conglomerates/itochu-corp|Itochu Corp]]）が解消プログラムを牽引している。

## 何が政策保有株式に該当するか

| 項目 | 詳細 |
|---|---|
| 定義 | 純投資目的以外で、通常は取引関係を維持するために保有される株式 |
| 開示トリガー | TSE の CG コードは、上場企業に対し政策保有株式の保有とその根拠の開示を求める |
| 閾値 | 上位の保有銘柄は有価証券報告書で個別に開示され、残りは合算開示 |
| 相互保有 | 両社が互いの株式を保有する持合い（相互持合い、*sōgo mochiai*） |
| 議決権 | 政策保有株主は一般に経営陣寄りに議決権を行使する。アクティビストの精査が高まっている |

定義は原則主義に基づく。ある保有株式は、表明された目的に応じて純投資（純投資、*jun-tōshi*）と政策保有との間で再分類され得る。再分類自体が CG コードの開示事象となる。

## 規制圧力の軌跡

| 年 | 進展 |
|---|---|
| 2014 | スチュワードシップ・コードが導入 |
| 2015 | 政策保有株式の開示原則を含む、初のコーポレートガバナンス・コード |
| 2018 | CG コード改訂が政策保有の開示と取締役会レビュー義務を強化 |
| 2021 | CG コード改訂がプライム上場企業をより厳格なレビューへと促す |
| 2023-2024 | 金融庁、JPX、経済産業省が不十分な解消ペースに関する公的メッセージを強化。TSE プライム市場改革が補強 |
| 継続中 | 各政策保有について保有継続の根拠を毎年取締役会で見直し |

CG コードは「コンプライ・オア・エクスプレイン」である。上場企業は、政策保有に関する方針、取締役会のレビュー・プロセス、および個別の保有銘柄ごとの経済的根拠を開示しなければならない。

### IFRS 9 （IFRS を適用する発行体向け）

| 項目 | 処理 |
|---|---|
| 分類 | 資本性金融商品は、当初認識時に取消不能で FV-OCI に指定されない限り、デフォルトで FV-PL となる |
| FV-OCI の選択 | 政策保有では一般的──純損益のボラティリティを避けるため FV-OCI に指定される |
| 配当 | 純損益で認識 |
| 公正価値の変動 | OCI（その他の包括利益）で認識 |
| 処分 | 純損益へのリサイクリングなし。累積損益は資本の中でのみ振り替えられる |
| 減損 | 資本性金融商品については FV-OCI の下で適用されない（減損テストは不要だが、公正価値が市場を反映する） |

リサイクリングなしのルールは、処分が純損益の利益を生まないことを意味する。これは、実現損益が純損益に計上された旧来の IAS 39 売却可能モデルと対比される、決定的な会計上のインセンティブ変化である。

### 改訂 JGAAP

市場性ある資本性金融商品についての JGAAP の同等処理（主要に新基準への対応）も、近年の改訂の下で同様のリサイクリングなしの処理を伴う FV-OCI を用いており、JGAAP 適用の発行体を IFRS 9と整合させている。

| 項目 | 改訂 JGAAP の下での処理 |
|---|---|
| 市場性ある資本性金融商品（非トレーディング） | FV-OCI |
| 配当 | 純損益 |
| 公正価値の変動 | OCI |
| 処分損益 | OCI で実現、純損益へのリサイクリングなし（改訂後） |
| 非市場性 | 主体に応じて原価または減損ベース |

完全な FV-OCI 整合のない旧来の JGAAP を適用する発行体は、文脈の中で読み解くべきである。趨勢は IFRS 同等の処理へ向かっている。

## 税効率的な処分ルート

| ルート | メカニクス | 税効率 |
|---|---|---|
| 市場売却 | 取引所を通じて売却 | 標準的な法人所得税の処理。利益は課税対象 |
| ToSTNeT 立会外取引 | JPX の立会外ブロック | 同じ税処理、市場インパクトはより低い |
| 発行体による自己株式取得 | 発行体が保有者から自己株式を買い戻す | みなし配当＋譲渡益への分解として扱われる。保有者にとって税効率的になり得る |
| 交換社債 | 発行体が交換社債を通じて保有株式をマネタイズする──[[finance/japan-convertible-bond-mechanics|convertible bond mechanics]] を参照 | 処分を転換まで繰り延べる。社債保有者が株式リスクを負う |
| スピンオフ／パーシャルスピンオフ | 保有株式を自社株主に分配 | 課税繰延ルートが可能──[[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime|partial spinoff tax deferral]] を参照 |
| 現物配当 | 保有株式を自社株主に分配 | 現物配当として扱われる。税処理は仕組みに依存 |
| クロス取引 | 相互保有者間の協調的売却 | 対称的な解消 |
| オークション／二次株式募集 | 大口ブロックが二次株式募集を通じて販売される | 非常に大規模な保有でしばしば用いられる |

処分益に対する法人所得税が支配的な税務上の摩擦である。発行体による自己株式取得のメカニクスは、処分代金の一部をみなし配当に転換し、これは日本の受取配当益金不算入（受取配当益金不算入）ルールの下でしばしば部分的に非課税となる。

## 解消における戦略的シグナル

| シグナル | 解釈 |
|---|---|
| メガバンクの解消が加速 | CG コード遵守を示し、資本を解放し、CET1 比率を支える |
| 商社の解消が選択的 | 一部は戦略／サプライチェーンのアンカーとして保持。純金融保有は処分 |
| 保険会社の解消 | ALM とソルベンシー・マージンの整合。株式ボラティリティ負担を軽減 |
| 相互保有者の解消の非対称性 | 一方のみの処分は関係の悪化を示唆し得る |
| アクティビストが標的とする解消 | アクティビストの要求はしばしば、自己株式取得／配当の原資とするための政策保有処分を含む |
| 保有継続の根拠 | 2024 年以降、詳細な取締役会レビューの開示が期待される |

保有株式を処分する保有者は通常、解消を資本還元プログラム（自己株式取得、増配）と組み合わせ、解放された資本が低リターンで再配分されるのではなく株主へ還元されることを示す。

## 同業比較フレームワーク

適切な比較は、公開された有価証券報告書の保有および CG 報告書の開示を用いる。

### メガバンク

| グループ | 公開開示の出典 |
|---|---|
| [[megabanks/mufg|MUFG]] | MUFG の年次有価証券報告書および統合報告書。TSE 上の CG 報告書 |
| [[megabanks/smfg|SMFG]] | SMFG の年次有価証券報告書および統合報告書。TSE 上の CG 報告書 |
| [[megabanks/mizuho-fg|Mizuho FG]] | みずほ FG の年次有価証券報告書および統合報告書。TSE 上の CG 報告書 |

メガバンクは、政策保有について複数年の削減目標（通常は CET1 資本に対する割合、または絶対的な簿価／公正価値残高として表現される）を公式に表明している。開示サイクルは年次財務報告と整合する。

### 商社

| グループ | 保有プロファイル |
|---|---|
| [[financial-conglomerates/mitsubishi-corp|Mitsubishi Corp]] | 持合いにはグループ／取引先株式が含まれ、主要ポジションが公開開示される |
| [[financial-conglomerates/mitsui-co|Mitsui & Co]] | 政策保有とその根拠を公開開示 |
| [[financial-conglomerates/itochu-corp|Itochu Corp]] | 政策保有とその根拠を公開開示。伊藤忠は処分に比較的前向きである |

商社の政策保有は、しばしば川上／川中／川下のバリューチェーンにおける戦略的保有を含む。処分ペースは取引先の戦略的重要性によって異なる。

### 保険会社

主要な生命保険・損害保険グループは歴史的に非常に大規模な株式ポートフォリオを保有してきた。処分プログラムは、CG コード改訂後および IFRS 9同等の会計変更後に加速している。ソルベンシー／ALM の圧力が構造的な撤退を駆動する。

### 製造業および取引先

事業会社は、サプライヤー、顧客、グループ会社に対する相互保有株式を保有する。処分ペースは大きく異なる。セメント、紙、鉄鋼、電機、自動車の各セクターには相当な残存持合いがある。

## 開示サーフェス

| サーフェス | 文書 |
|---|---|
| 有価証券報告書（有価証券報告書） | 年次提出書類。上位の個別保有銘柄が根拠とともに開示される |
| CG 報告書（コーポレートガバナンス報告書） | TSE 上の定期的な CG コード遵守報告書。政策保有に関する方針 |
| 統合報告書 | 任意の年次ナラティブ。政策保有戦略の詳細をしばしば含む |
| TDnet | 重要な処分／取得の適時開示 |
| EDINET 大量保有報告書 | 処分が5 パーセントの閾値を下方に超えると、変更報告書が提出される（[[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] を参照） |
| 株主総会招集通知 | 政策保有の議決権行使方針の詳細。アクティビスト提案項目となり得る（[[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]] を参照） |

## アクティビストとの接点

アクティビスト投資家は、資本効率の問題として持合いをますます標的としている。典型的なアクティビストの要求には次が含まれる。

- 政策保有の処分と、自己株式取得／配当を通じた代金の還元。
- 取締役会レベルのレビュー強化と開示の厳格化。
- 政策保有方針に対する独立委員会の監督。
- 相互保有者による相互的な処分。

要求と応答のルーティングについては [[finance/japan-activist-investor-playbook|activist playbook]] を参照。

## 処分情報の管理

大口処分は価格を動かす情報である。処分前の情報は、FIEA のインサイダー取引規制および金融庁のフェア・ディスクロージャーの枠組みの下で管理されなければならない。情報取扱いの基軸については [[finance/japan-fair-disclosure-and-insider-trading-controls|Japan fair disclosure and insider trading controls]] を参照。

| 論点 | 管理ポイント |
|---|---|
| 情報漏洩 | インサイダー制限リスト、案件コードネーム、IT 統制 |
| ブロック取引アレンジャーの選定 | 守秘義務を伴う RFP、しばしば [[finance/japan-ib-league-table|league-table]] 社 |
| 価格決定プロセス | 執行価格への影響を最小化するためのオークションまたは RFQ |
| 発行体決算に対するタイミング | ウィンドウ・トレーディングの抵触を回避 |
| 取引相手との関与 | 相互的な場合の相互保有者との協議 |

## 資本および CG コードへの含意

政策保有株式は、規制資本と資本効率比率に影響する。

| 指標 | 処分の効果 |
|---|---|
| メガバンク CET1 ／ リスク加重資産 | 株式リスク加重資産の負担を軽減。CET1 比率を支える |
| 保険会社のソルベンシー・マージン | 株式リスクの配分を軽減。ソルベンシー・マージンを支える |
| 企業の ROE | 処分は自己株式取得の原資となり、資本ベースを縮小して ROE を引き上げ得る |
| 資本効率のナラティブ | 資本配分を意識する投資家への規律を示す |
| TSE プライム PBR-1倍要件 | 処分と株主還元が PBR 引き上げのナラティブを支える |

## TSE PBR-1倍イニシアティブ

TSE プライム市場は、PBR が持続的に1倍を下回る上場企業に対し、資本効率計画の公表という明示的な圧力を導入した。持合いの処分は、自己株式取得、増配、資産処分と並んで、これらの計画で引き合いに出される一般的なレバーである。

## 関連

- [[finance/INDEX]]
- [[finance/japan-listed-financial-groups-investable-universe]]
- [[finance/japan-activist-investor-playbook]]
- [[finance/japan-fair-disclosure-and-insider-trading-controls]]
- [[finance/japan-large-shareholding-disclosure]]
- [[finance/japan-shareholder-proposal-and-agm-voting-route]]
- [[finance/japan-convertible-bond-mechanics]]
- [[finance/japan-ib-league-table]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/cross-border-m-a-japan]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[banking/regional-bank-consolidation-pattern]]
- [[corporate-strategy/japan-kabushiki-bunpai-spinoff-regime]]
- [[securities/japan-underwriting-market-structure]]
- [[megabanks/mufg]]
- [[megabanks/smfg]]
- [[megabanks/mizuho-fg]]
- [[financial-conglomerates/mitsubishi-corp]]
- [[financial-conglomerates/mitsui-co]]
- [[financial-conglomerates/itochu-corp]]
- [[financial-regulators/dbj]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁: コーポレートガバナンスのハブおよび CG コード改訂のページ。
- JPX: コーポレートガバナンス・コード（英語）および TDnet 適時開示の概要。
- 経済産業省: M&A ガイドラインの公表ハブ。
- EDINET: 有価証券報告書および大量保有報告書。
- 日本銀行: 株式保有構造に関するリサーチ・ノート。
- 国税庁: 法人税の概要ページ。
