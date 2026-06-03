---
source: finance/japan-cross-shareholding-unwinding-economics
source_hash: b379c3120db556d0
lang: ja
status: machine
fidelity: ok
title: "日本の政策保有株解消の経済性"
translated_at: 2026-06-02T13:21:55.029Z
---
# 日本の政策保有株解消の経済性

## ウィキ上の位置づけ

このページは [[finance/INDEX|finance domain]] の配下に位置する。銀行 / 保険会社の発行体側は [[finance/japan-listed-financial-groups-investable-universe|listed financial groups investable universe]]、アクティビスト圧力との接点は [[finance/japan-activist-investor-playbook|Japan activist investor playbook]]、売却タイミングに関する情報管理は [[finance/japan-fair-disclosure-and-insider-trading-controls|fair disclosure controls]]、交換社債による資金化は [[finance/japan-convertible-bond-mechanics|convertible bond mechanics]]、所有割合変更報告は [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]] とあわせて読む。

## 要約

日本の政策保有株（政策保有株、*seisaku hoyū kabushiki*、または "policy holding stock"）は、上場企業が投資リターンではなく取引関係を維持する目的で、取引先、顧客、仕入先、銀行、グループ会社の株式を保有する従来慣行である。2015  以降のコーポレートガバナンス・コード改訂、2018 / 2021 / 2024,  での強化、FSA / METI の監視により、継続的な解消プログラムが進んだ。会計処理は、IFRS 9  の下で取得原価 / 売却可能金融資産から FV-OCI（その他包括利益を通じた公正価値、売却時の P&L リサイクリングなし）へ移行し、改訂 JGAAP でも類似の FV-OCI メカニクスが採用された。税効率の高い売却ルートには、市場売却、ToSTNeT ブロック取引、発行体による自社株買い、交換社債による資金化がある。メガバンク（[[JapanFG/mufg|MUFG]]、[[JapanFG/smfg|SMFG]]、[[JapanFG/mizuho-fg|Mizuho FG]]）、保険会社、総合商社（[[JapanFG/mitsubishi-corp|Mitsubishi Corp]]、[[JapanFG/mitsui-co|Mitsui & Co]]、[[JapanFG/itochu-corp|Itochu Corp]]）が解消プログラムを主導している。

## 政策保有株に該当するもの

| 項目 | 詳細 |
|---|---|
| 定義 | 純投資以外の目的、典型的には取引関係維持のために保有される株式 |
| 開示トリガー | TSE CG code は上場企業に政策保有株の保有状況と保有理由の開示を求める |
| 閾値 | 有価証券報告書 で上位銘柄を個別開示し、残りは集計開示 |
| 相互保有 | 両社が互いの株式を保有する相互持合い（*sōgo mochiai*） |
| 議決権行使 | 政策保有株主は一般に経営陣寄りに投票するが、アクティビストの監視 が強まっている |

定義は原則ベースである。保有目的の説明に応じて、ある持分は純投資（純投資、*jun-tōshi*）と政策保有の間で再分類され得る。再分類自体も コーポレートガバナンス・コード上の開示事象 である。

## 規制圧力の推移

| 年 | 展開 |
|---|---|
| 2014 | スチュワードシップ・コードを導入 |
| 2015 | 政策保有株の開示原則を含む初版コーポレートガバナンス・コードを導入 |
| 2018 | コーポレートガバナンス・コード改訂により政策保有株開示と取締役会レビュー義務を厳格化 |
| 2021 | コーポレートガバナンス・コード改訂によりプライム上場会社に一段厳格なレビューを促進 |
| 2023-2024 | FSA、JPX、METI が解消ペース不足への公的メッセージを強め、TSE プライム市場改革が後押し |
| 継続中 | 各政策保有株について、保有継続理由を取締役会が毎年検証 |

CG code は "comply or explain" である。上場企業は、政策保有株に関する方針、取締役会の検証プロセス、個別保有ごとの経済合理性を公表しなければならない。

### IFRS 9 (IFRS 適用発行体向け)

| Field | Treatment |
|---|---|
| 分類 | 資本性金融商品は、当初認識時に取消不能で FV-OCI 指定しない限り、原則 FV-PL |
| FV-OCI 選択 | 政策保有株では一般的で、P&L 変動を避けるため FV-OCI に指定 |
| Dividend | Recognised in P&L |
| 公正価値変動 | OCI（その他包括利益）に認識 |
| 売却 | P&L へのリサイクリングなし。累積損益は資本内で振替のみ |
| 減損 | FV-OCI の資本性商品では適用なし（減損テスト不要。ただし公正価値は市場を反映） |

ノンリサイクリング規則により、売却しても P&L 上の利益は発生しない。これは、実現益が P&L に入っていた旧 IAS 39  の売却可能金融資産モデルと比べた重要な会計インセンティブの変化である。

### 改訂 JGAAP

市場性株式に関する JGAAP 相当の処理（主要に新基準への対応）でも、近年の改訂により類似のノンリサイクリング FV-OCI 処理を用い、JGAAP 適用発行体を IFRS 9 に近づけている。

| 項目 | 改訂 JGAAP 上の処理 |
|---|---|
| 市場性株式（売買目的以外） | FV-OCI |
| Dividend | P&L |
| Fair-value changes | OCI |
| 売却損益 | OCI で実現し、改訂後は P&L リサイクリングなし |
| 非市場性株式 | 企業に応じて取得原価または減損ベース |

FV-OCI への完全な整合前の旧 JGAAP を適用する発行体は文脈込みで読む必要があるが、傾向としては IFRS 相当の処理へ向かっている。

## 税効率の高い売却ルート

| Route | Mechanics | Tax efficiency |
|---|---|---|
| 市場売却 | 取引所を通じて売却 | 標準的な法人税処理で、売却益は課税対象 |
| ToSTNeT ブロック取引 | JPX の立会外ブロック | 税務処理は同じで、市場インパクトを抑えやすい |
| 発行体による自社株買い | 発行体が保有者から自己株式を取得 | みなし配当とキャピタルゲインに分解され、保有者にとって税効率が高い場合がある |
| 交換社債 | 発行体が交換社債で保有株を資金化（[[finance/japan-convertible-bond-mechanics|convertible bond mechanics]] 参照） | 転換まで処分を繰り延べ、債券保有者が株式リスクを負う |
| スピンオフ / 部分スピンオフ | 保有株式を自社株主へ分配 | 税務繰延ルートの可能性（[[corporate-strategy/partial-spinoff-tax-deferral|partial spinoff tax deferral]] 参照） |
| 現物配当 | 保有株式を自社株主へ分配 | 現物配当として扱われ、税務処理は構造に依存 |
| クロス取引 | 相互保有者間で調整して売却 | 対称的な解消 |
| オークション / 売出し | 大口ブロックを売出しで配置 | 非常に大きい持分でよく用いられる |

売却益に対する法人税が最大の税務摩擦である。発行体による自社株買いの仕組みでは、売却対価の一部がみなし配当に変換され、日本の受取配当益金不算入ルールにより一部非課税となることが多い。

## 解消が示す戦略シグナル

| Signal | Interpretation |
|---|---|
| Megabank unwinding accelerating | Demonstrates CG-code compliance, frees capital, supports CET1 ratios |
| Shōsha unwinding selective | Some retained as strategic / supply-chain anchor; disposal of pure-financial holdings |
| Insurer unwinding | ALM and solvency-margin alignment; reduces equity-vol burden |
| 相互保有者間の解消非対称 | 片側だけの売却は関係悪化のシグナルになり得る |
| アクティビスト対象企業の解消 | アクティビストの要求には、自社株買い / 配当の原資とする政策保有株売却が含まれることが多い |
| 保有継続理由 | 2024  以降は詳細な取締役会レビュー開示が期待される |

持分を売却する保有者は通常、解消とあわせて資本還元プログラム（自社株買い、増配）を示し、解放された資本を低リターン用途に再投下するのではなく株主へ還元する姿勢を示す。

## ピア比較フレームワーク

適切な比較では、公開された有価証券報告書の保有明細とコーポレートガバナンス報告書の開示を用いる。

### Megabanks

| グループ | 公開開示ソース |
|---|---|
| [[JapanFG/mufg|MUFG]] | MUFG annual securities レポrt and integrated レポrt; CG レポrt on TSE |
| [[JapanFG/smfg|SMFG]] | SMFG annual securities レポrt and integrated レポrt; CG レポrt on TSE |
| [[JapanFG/mizuho-fg|Mizuho FG]] | Mizuho FG annual securities レポrt and integrated レポrt; CG レポrt on TSE |

メガバンクは、政策保有株について複数年の削減目標を公表している。通常は CET1  資本に対する比率、または簿価 / 公正価値残高の絶対額で示される。開示サイクルは年次財務報告と一致する。

### Shōsha

| Group | Holding profile |
|---|---|
| [[JapanFG/mitsubishi-corp|Mitsubishi Corp]] | Cross-holdings include group / パートナー equity, with public disclosure of major positions |
| [[JapanFG/mitsui-co|Mitsui & Co]] | 政策保有株と保有理由を公開開示 |
| [[JapanFG/itochu-corp|Itochu Corp]] | 政策保有株と保有理由を公開開示。Itochu は売却に比較的前向き |

総合商社の政策保有株には、上流 / 中流 / 下流のバリューチェーンにおける戦略持分が含まれることが多い。売却ペースは相手方の戦略的重要性によって異なる。

### 保険会社

大手生保・損保グループは歴史的に非常に大きな株式ポートフォリオを保有してきた。コーポレートガバナンス・コード改訂と IFRS-9 相当の会計変更後、売却プログラムは加速した。ソルベンシー / ALM 上の圧力が構造的な退出を促している。

### 製造業と取引先

事業会社は仕入先、顧客、グループ会社の株式を相互保有している。売却ペースは大きく異なり、セメント、紙、鉄鋼、エレクトロニクス、自動車セクターにはなお意味のある相互保有が残る。

## 開示面

| Surface | Document |
|---|---|
| 有価証券報告書 | 年次提出書類。上位保有銘柄を保有理由付きで個別開示 |
| CG Report (コーポレートガバナンス報告書) | Periodic CG-code compliance レポrt on TSE; policy on policy-holdings |
| 統合報告書 | 任意の年次ナラティブ。政策保有株戦略の詳細を含むことが多い |
| TDnet | Timely disclosure of significant disposal / acquisition |
| EDINET large shareholding レポrts | When disposal crosses 5 percent threshold downward, change レポrts filed (see [[finance/japan-large-shareholding-disclosure|large shareholding disclosure]]) |
| 株主総会招集通知 | 政策保有株の議決権行使方針の詳細。アクティビスト提案項目になる場合がある（[[finance/japan-shareholder-proposal-and-agm-voting-route|shareholder proposal route]] 参照） |

## アクティビストとの接点

アクティビスト投資家は、相互保有株を資本効率の問題としてますます標的にしている。典型的な要求は次の通り。

- Disposal of policy-holdings and return of proceeds via buyback / dividend.
- 取締役会レベルのレビュー強化と開示の厳格化。
- Independent committee oversight of policy-holding policy.
- Counter-holder reciprocal disposal.

要求と対応の導線は [[finance/japan-activist-investor-playbook|activist playbook]] を参照。

## 売却情報の管理

大口売却は価格変動を起こし得る情報である。売却前情報は、金商法のインサイダー取引規制と FSA のフェアディスクロージャー枠組みに基づいて管理する必要がある。情報管理の中核は [[finance/japan-fair-disclosure-and-insider-trading-controls|Japan fair disclosure and insider trading controls]] を参照。

| Issue | Control point |
|---|---|
| Information leakage | Restricted insider list, deal codename, IT controls |
| Block-trade arranger selection | RFP with confidentiality, often [[finance/japan-ib-league-table|league-table]] firms |
| Pricing process | Auction or RFQ to minimise execution-price impact |
| Timing relative to issuer earnings | Avoid window-trading conflicts |
| Counterparty engagement | Counter-holder 市中協議 where reciprocal |

## 資本と CG-code への影響

政策保有株は規制資本と資本効率指標に影響する。

| Metric | Effect of disposal |
|---|---|
| Megabank CET1 / risk-weighted assets | Reduces equity-RWA burden; supports CET1 ratio |
| Insurer solvency margin | Reduces equity-risk allocation, supports solvency margin |
| 企業 ROE | 売却資金を自社株買いに充て、自己資本を減らして ROE を引き上げ得る |
| 資本効率ナラティブ | 資本配分を重視する投資家に規律を示す |
| TSE Prime PBR-1倍要件 | 売却と株主還元が PBR 改善ナラティブを支える |

## TSE PBR-1x イニシアチブ

TSE プライム市場は、PBR が継続的に 1倍を下回る上場会社に対し、資本効率改善計画の公表を明示的に求める圧力を導入した。相互保有株の売却は、自社株買い、増配、資産売却と並び、これらの計画でよく挙げられる手段である。

## 関連項目

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
- [[corporate-strategy/partial-spinoff-tax-deferral]]
- [[securities/japan-underwriting-market-structure]]
- [[JapanFG/mufg]]
- [[JapanFG/smfg]]
- [[JapanFG/mizuho-fg]]
- [[JapanFG/mitsubishi-corp]]
- [[JapanFG/mitsui-co]]
- [[JapanFG/itochu-corp]]
- [[JapanFG/dbj]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: コーポレートガバナンスのハブおよびコード改訂ページ.
- JPX: コーポレートガバナンス・コード（英語版）および TDnet 適時開示概要.
- METI: M&A 指針の公開ハブ.
- EDINET: securities レポrts and large-shareholding レポrts.
- BOJ 株式保有構造に関する調査ノート.
- NTA: 法人税概要ページ.
