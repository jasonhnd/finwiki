---
source: fintech/bis-agora-vs-mbridge-2026-update
source_hash: 9adea4fe10b6e888
lang: ja
status: machine
fidelity: ok
title: "BIS Agora vs mBridge · 2026 更新 — 三極CBDCマップと規制摩擦"
translated_at: 2026-06-02T13:21:55.068Z
---

# BIS Agora vs mBridge · 2026 更新 — 三極CBDCマップと規制摩擦

## 要約

2025-10 のBISによるmBridge離脱（[[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · BIS 2025 同年切换]]で扱う）は、プロジェクト終了ではなかった。BISがAgoraに注力する一方で、mBridgeは**参加中央銀行への引き継ぎ**となった。2026-05, 時点で、引き継ぎ後の構図はより明確である。**mBridgeはPBoC + HKMA + BoT + CBUAE + SAMAの管理の下で継続し、現在は8番目のメンバーを積極的に交渉している**（DREX相互運用を通じたブラジルBCBが最も議論される候補で、インドネシアとロシアも有力候補として挙げられている）。**Agora**は民間セクター層を拡大し、**BlackRock、Citi、Morgan Stanley**がいずれもトークン化作業部会に参加している。一方、**米国財務省の制裁懸念**により、どの相手方が参加できるかをめぐる新たな政治的摩擦が生じた。香港の**Project Ensemble**、シンガポールの**Project Guardian**と合わせ、CBDC / トークン化マネーの地理は明確に**三極構造**へ落ち着いた。Agora（Fedアンカー、トークン化預金アーキテクチャ）、Ensemble + Guardian（アジア金融センター、ハイブリッド・ホールセール）、mBridge（非米国中央銀行、純CBDCアーキテクチャ）である。

## ウィキ上の位置づけ

この項目は[[fintech/INDEX|fintech index]]の配下に位置づけられる。Agoraの技術的ベースラインは[[fintech/bis-project-agora-overview|BIS Project Agora 总览]]、従来の枠組みは[[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge 初版对照]]、mBridgeの基礎は[[fintech/mbridge-bis-multi-cbdc-overview|mBridge 总览]]、[[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · 2025 BIS 切换]]では2025 の変曲点イベント、取扱量の文脈は[[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非美元结算环规模]]、メンバーシップ・マップは[[fintech/mbridge-six-central-banks-roster|mBridge 六央行 roster]]、香港側の経路は[[fintech/bis-project-ensemble-overview|BIS Project Ensemble]] / [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble vs mBridge dual-track]]、シンガポール側の経路は[[fintech/bis-project-guardian-overview|BIS Project Guardian]] / [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian vs Agora Asia 三极]]と併読する。

## 2026 時点で2025 ベースラインから新たに加わった点

2025 時点のナラティブは「BISがどちらか一方を選ぶ」というものだった。2026 更新では、次の5つの構造的事実が新たに見えている。

1. **mBridgeはBIS離脱後も存続している** — 現在はBISブランドなしで運用される5中央銀行コンソーシアムであり、運用の継続性は保たれている。PBoCとHKMAは2026年初に技術作業部会を共同開催した。
2. **mBridgeの8番目のメンバー交渉は進行中である** — 公的確認は限られるが、DREX相互運用を通じたブラジルBCBが最も議論される候補である。交渉がまとまれば、mBridgeは6 （ブラジル）へ拡張し、7 （インドネシアBI）および8 （ロシアCBRまたはイラン。政治的摩擦はより大きい）も活発な議論対象となる。
3. **Agoraの民間セクター名簿は拡大した** — BlackRockは資産運用会社側、Citiはキャッシュマネジメント側、Morgan Stanleyは機関投資家向けトークン化側で参加している。当初の41 商業銀行名簿は約50社超へ拡大した。
4. **米国財務省の制裁をめぐる摩擦が浮上した** — Agoraに参加するロシア、中国、イランの相手方銀行支店が、米国監督下の主体と同一台帳で決済できるのかが問われている。OFACは個別ガイダンスを出していないが、参加に対する萎縮効果は実在する。
5. **三極マップが明確化した** — Agora（US/EU/JP/KR/MX/CH）、Ensemble + Guardian（HK + SG、資産トークン化主導）、mBridge（中国 + GCC + 非米国新興国）である。

## BIS離脱後のmBridge — 運用継続性

BISが2025, 年10月に離脱した時点で、直後の問いはmBridgeが継続するかどうかだった。2026 時点の証拠は、**明らかな運用劣化なしに継続している**ことを示す。

| 機能 | BIS離脱前 (2024) | BIS離脱後 (2026) |
|---|---|---|
| MVP技術プラットフォーム | BIS Innovation Hub HK Centreがホスト | PBoC Digital Currency Research InstituteとHKMA技術チームが共同ホスト |
| ガバナンス | BIS協調、5 中央銀行 + オブザーバー | 5中央銀行コンソーシアム、持ち回り議長 |
| コンプライアンス枠組み | BISテンプレートのAML/KYC | 各参加者の国内枠組みを相互承認 |
| 決済量 | 公開開示なし | HKMAの公開発言によれば、2倍成長（H2-2025 対H1-2025 ）とされる |
| オンボーディング・パイプライン | 積極募集なし（BISブランド上の制約） | 新規中央銀行メンバーを積極募集 |
| 対外広報姿勢 | BIS協調のコミュニケーション | 各参加者が二国間で発信 |

政治的な読み筋は、**BIS離脱こそmBridgeが取り除く必要のあった制約だった**ということである。BIS加盟国の拒否権なしに、ロシア、イラン、インドネシアなど政治的摩擦の大きい参加者を勧誘できるようになった。残った5つの中央銀行は、BISよりも強い拡張インセンティブを持っている。

## 「8番目のメンバー」問題

公開議論では、複数の中央銀行候補が挙げられている。

| 候補 | 可能性 | 根拠 | 摩擦 |
|---|---|---|---|
| **Brazil BCB (DREX)** | 高 | mBridge-DREX相互運用パイロットが進行中。ブラジルは既にBRICS+に入り、BCBにとって政治コストが低い | ブラジル銀行エコシステムの複雑さ、複数利害関係者の調整 |
| **Indonesia BI** | 中-高 | インドネシアはProject Garuda CBDC作業を既に進めている。非同盟姿勢の大規模新興国 | 米中バランスへの慎重姿勢。陣営入りのシグナルを避ける必要 |
| **Russia CBR** | 中（政治コストは高い） | ロシアは非米ドル決済を強く求め、CBRはルーブルCBDCパイロットを持つ | ロシア相手方に触れる参加銀行への米欧二次制裁リスク |
| **Iran CBI** | 低-中 | イランの動機は明確で、CBIはリアルCBDCに取り組んできた | 最大級の米国制裁エクスポージャー。中国関連の参加でも二次制裁リスクがある |
| **Kazakhstan / Belarus / Uzbekistan** | 中 | EAEU協調、RUB/CNY回廊との関連性 | 規模が小さく、象徴性も弱い |
| **South Africa SARB** | 低 | BRICS+メンバーだが、SARBは歴史的に保守的 | 南アフリカ銀行セクターの米国コルレス依存 |
| **Egypt / Pakistan** | 低 | Belt and Roadへの関心 | 国内規制の成熟度不足 |

想定される2026 の帰結は、ブラジルが参加（発表または確認）、インドネシアが2026-H2 または2027-H1, に参加し、ロシア判断は政治的理由で先送りされる、というものだ。見え方は重要である。ロシアを加えれば、mBridgeは「非米国決済インフラ」から「明示的な対米制裁インフラ」へ変質し、米国財務省の反応をより強める。

[[fintech/mbridge-six-central-banks-roster|mBridge 六央行 roster]]の名簿ベースラインも参照すること。同項目はBISオブザーバー階層の名簿を既に含み、「6」はBISの従前の役割を含む。

## Agoraの民間セクター拡大

当初の2024 Agora発表には、41 の商業銀行（JPMorgan、Citi、HSBC、MUFG、BNP Paribas、Santander、Deutsche、UBSなど。[[fintech/bis-project-agora-overview|BIS Project Agora 总览]]参照）が含まれていた。2025-2026 の拡大で、次が加わった。

1. **BlackRock** — トークン化資産の発行体として参加し、BUIDL（米国債MMF）や将来的なプライベートクレジットのトークン化を統合する。接続点は[[fintech/blackrock-buidl-tokenized-mmf-overview|BlackRock BUIDL 总览]]および[[fintech/blackrock-buidl-sc-issuer-adoption|BUIDL stablecoin issuer adoption]]。
2. **Citi** — Citi Treasury ServicesはAgora内でのトークン化預金実験に明示的にコミットしている。CitiのToken Services製品群は、米国銀行の中で最も発展したトークン化預金提供である。
3. **Morgan Stanley** — 機関投資家向けトークン化作業部会で、トークン化ファンド持分と担保移動性に焦点を当てる。MS Wealth Managementのダイレクト・インデックス基盤が機関投資家側のアンカーである。
4. **State Street / BNY Mellon** — カストディアン側の拡大であり、当初はオブザーバー階層だったが現在は能動的参加者である。
5. **Mastercard / Visa** — 消費者信用レールとの統合点として、決済ネットワーク側から参加する。

Agoraのアーキテクチャは引き続き**トークン化コルレス銀行**である。中央銀行がトークン化準備（場合によってはホールセールCBDC経由）を発行し、商業銀行がそれらの準備に裏付けられたトークン化預金を発行し、資産運用会社がトークン化ファンド持分を発行し、すべてが統一台帳上で原子的に決済される。これは本番化された**預金トークン仮説**である（[[fintech/institutional-stablecoin-deposit-token-thesis|deposit token 论题]]参照）。

### この拡大が重要な理由

2024 時点のAgoraは「中央銀行と商業銀行がトークン化された原子決済を試す」ものだった。2026 時点のAgoraは、「準備 → 預金 → MMF → ファンド → 株式エクスポージャーまで、資本市場スタック全体を単一台帳上でトークン化する」姿に近づいている。これはSWIFTコルレス銀行の置換を超え、**ホールセール資本市場配管全体の置換**へ向かう。

Agoraがこの規模で成功するなら、民間ステーブルコイン（USDC、USD1, USDT）はリテール / 新興国 / エージェント経済の文脈でのみ意味を持つ**二層目の資産**になるのか、という問いが生じる。この対比は[[fintech/onchain-finance-vs-crypto-bifurcation|on-chain finance vs crypto 分叉]]で設定されている。

## 米国財務省制裁をめぐる摩擦

新たな2026 層として、**Agoraの多法域名簿の拡大は、Agoraが7 中央銀行 + 41 G7アンカー銀行だった時には存在しなかったOFAC上の問い**を生み出した。

具体的には次の通りである。

1. **韓国とメキシコの中央銀行**はAgora名簿に含まれるが、制裁対象の相手方（ロシア、イラン、北朝鮮）に触れる銀行とのコルレス関係を持つ。
2. **Agora内のメキシコペソ決済**は、理論上、米国制裁対象のカルテル隣接主体に由来する取引を清算し得る（拡張的な論点だが、規制コメントでは法的に主張されている）。
3. **日本の銀行参加者**にはロシア・エクスポージャーのレガシーがある。
4. **CitiとHSBC**自体にも過去のOFAC和解実績があり、新たな多法域台帳への参加はコンプライアンスリスクを高める。

OFACは2026-05, 時点でAgora固有のガイダンスを出していないが、財務省の講演や公開声明は次を示している。

- 共有インフラ上で決済されるトークン化資産にも既存の制裁法が適用される。
- 原子決済は、相手方スクリーニングを免除しない。
- 米国監督下の参加銀行は、ウォレット / アドレス単位でOFACスクリーニングを適用しなければならない。
- Agoraに参加する中央銀行は、参加商業銀行のコンプライアンス義務について主権免除による遮断を享受しない。

萎縮効果として、**一部の新興国中央銀行はAgora参加を見送る可能性がある**。参加すれば、自国の商業銀行参加者に米国制裁スクリーニング義務を課すためである。その結果、米国中央銀行を含まないことでプラットフォーム層で米国制裁スクリーニングを課さないmBridgeへ向かいやすくなる。より広いパターンは[[fintech/jurisdiction-list-monetary-protectionism|jurisdiction list = 通貨保護主義]]参照。

## CBDCとトークン化預金アーキテクチャのトレードオフ

AgoraとmBridgeの分岐は、単なる地政学的分岐ではなく、アーキテクチャ上の分岐としても理解されるようになっている。

| アーキテクチャ | mBridge | Agora |
|---|---|---|
| 準備マネー | ホールセールCBDC | ホールセールCBDC、またはトークン化中央銀行準備 |
| 商業マネー | 商業銀行マネー層なし | 商業銀行が発行するトークン化預金 |
| 相手方モデル | 中央銀行 ↔ 中央銀行、サブ参加者あり | 中央銀行 ↔ 商業銀行 ↔ エンド顧客の原子決済 |
| 商業銀行のディスインターメディエーションリスク | 高い（中央銀行が企業へ直接到達し得る） | 低い（商業銀行による預金発行を温存） |
| 中央銀行から見たプライバシー | 低い（CBDCは発行中央銀行から本質的に可視） | より高い（預金は商業銀行に残る） |
| 決済ファイナリティ | CBDC = 主権ファイナリティ | トークン化預金 = 銀行信用リスクを含み、中央銀行は準備レッグのファイナリティを提供 |
| クロスボーダー摩擦 | CBDC ↔ CBDCスワップをネイティブに実行 | トークン化預金 ↔ トークン化預金 + 準備レッグ・スワップ |

mBridgeモデルは**純CBDC型**である。より単純で、より主権直結型だが、商業銀行を暗黙に中抜きする。これは商業銀行が国有または国家と整合している法域（中国、GCCのソブリンウェルス支援型）では受け入れられる。一方、商業銀行ロビーが政治的に強い法域（米国、EU、日本）では**受け入れにくい**。

Agoraモデルは**トークン化預金 + CBDCのハイブリッド**である。商業銀行仲介を温存し、アーキテクチャはより複雑だが、商業銀行が支配的な法域では政治的に実行可能である。BlackRock、Citi、Morgan Stanleyを含むAgoraの2026 拡大は、将来のクロスボーダー・トークン化マネー基盤が預金トークン + 資産運用会社層を温存するようにするための、**商業金融セクターの協調的な押し上げ**そのものである（[[fintech/institutional-stablecoin-deposit-token-thesis|institutional SC deposit token 论题]]と比較）。

## 三極マップ — 2026 時点の最終像

CBDC + トークン化マネーの構図は、現在明確に三分化している。

| 極 | アンカー中央銀行 | アンカー商業 / 資産参加者 | アーキテクチャ | 到達範囲 |
|---|---|---|---|---|
| **Agora** | Fed、BoE、BoJ、SNB、Banque de France、BoK、Banco de México | JPM、Citi、HSBC、BNP、Santander、Deutsche、UBS、MUFG、BlackRock、Morgan Stanley、Mastercard、Visa | トークン化コルレス銀行 + トークン化資産発行 | G7 + KR + MX + 開放的な参加募集 |
| **Ensemble + Guardian** | HKMA + MAS | HSBC、Standard Chartered、DBS、UBS、JPM、Goldman、BlackRock、Apollo、Fidelity | 資産トークン化主導、ハイブリッド・ホールセール | HK + SG金融センター軸。Agoraと協調するが別ガバナンス |
| **mBridge** | PBoC、HKMA、BoT、CBUAE、SAMA、[BCB保留中]、[BI保留中] | 商業銀行層は限定的、CBDC直接アーキテクチャ | 純粋なマルチCBDC決済 | 中国 + GCC + ASEAN軸 + BRICS+参加募集 |

香港の極はEnsemble（アジア・ハブ）とmBridge（従来の創設側）の双方に現れる。HKMAの戦略的位置は独自に二面性を持つ。[[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble vs mBridge dual-track]]参照。

シンガポールのGuardian極とAgoraの関係は、[[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian vs Agora Asia 三极]]で記録された**アジア金融センターの三角測量**である。

クロスボーダーの帰結として、**三極すべてはいずれ相互運用を必要とする**。mBridge ↔ Agoraの相互運用パイロットはBIS報告書で議論されてきたが、正式には開始されていない。正式な相互運用への政治的経路はHKMAとMASを通る。両者がmBridgeへ向かう橋でもあるためだ。

## 関連項目

<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/INDEX|fintech index]]
- [[fintech/bis-project-agora-overview|BIS Project Agora 总览]]
- [[fintech/bis-project-agora-vs-mbridge|Agora vs mBridge 对照]]
- [[fintech/bis-project-ensemble-overview|BIS Project Ensemble 总览]]
- [[fintech/bis-project-ensemble-vs-mbridge-dual-track|Ensemble vs mBridge dual-track]]
- [[fintech/bis-project-guardian-overview|BIS Project Guardian 总览]]
- [[fintech/bis-project-guardian-vs-agora-asia-three-poles|Guardian vs Agora Asia 三极]]
- [[fintech/mbridge-bis-multi-cbdc-overview|mBridge 总览]]
- [[fintech/mbridge-bis-multi-cbdc-vs-agora|mBridge vs Agora · 2025 BIS 切换]]
- [[fintech/mbridge-non-usd-settlement-ring-scale|mBridge 非美元结算环规模]]
- [[fintech/mbridge-six-central-banks-roster|mBridge 六央行 roster]]
- [[fintech/institutional-stablecoin-deposit-token-thesis|deposit token 论题]]
- [[fintech/onchain-finance-vs-crypto-bifurcation|on-chain finance vs crypto 分叉]]
- [[fintech/jurisdiction-list-monetary-protectionism|jurisdiction list = 通貨保護主義]]
<!-- /wiki-links:managed -->

## 出典

- BIS Project Agoraプレスリリース（bis.org、2024-2026）
- BIS mBridgeプロジェクト開示（2021-2025）
- PBoC Digital Currency Research Institute声明
- HKMAクロスボーダーCBDCイニシアチブ更新
- Bank of Thailand、CBUAE、SAMAのmBridge参加声明
- 米国財務省OFAC制裁枠組み（2024-2026 更新）
- BlackRockのCBDCおよびトークン化キャッシュに関する公開コメント
- Citi Treasury Servicesのトークン化預金製品発表（2025-2026）
- Morgan Stanleyの機関投資家向けトークン化イニシアチブ
- BIS Annual Report 2025 + 2026 中間声明
- 香港Project Ensemble更新（HKMA）
- シンガポールMAS Project Guardian更新
- BCB DREX-mBridge相互運用報告（公開発表）
