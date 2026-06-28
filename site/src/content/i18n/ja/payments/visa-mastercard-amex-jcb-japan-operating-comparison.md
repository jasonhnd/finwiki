---
source: payments/visa-mastercard-amex-jcb-japan-operating-comparison
source_hash: 42288ade60cedf39
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "Visa Mastercard AMEX JCB 日本オペレーション比較"
translated_at: 2026-06-26T08:31:59.828Z
---

# Visa Mastercard AMEX JCB 日本オペレーション比較

## Wiki ルート

このエントリは [[payments/INDEX|payments index]] の配下に、**4ブランドのクロス比較ページ**として位置し、JCB 固有の詳細については [[payments/jcb-three-party-operating-model|JCB three-party operating model]]、役割分離のフレームワークについては [[payments/japan-card-issuer-acquirer-processor-split|Japan card 発行会社 / アクワイアラ / processor split]]、手数料フローの帰結については [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]、クロススキームの経済性ビューについては [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、4ブランドすべてに同時に着地する EMV 3-DS / J-CSC 義務については [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] とペアになる。ブランドアンカーは [[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]]、[[payment-firms/mastercard-japan|Mastercard Japan]]、[[payment-firms/american-express-international-japan|American Express International Japan]]、[[card-issuers/jcb|JCB Co Ltd]] / [[payment-firms/jcb-international|JCB International]] である。参照される主要な発行体 / アクワイアラーのカウンターパーティには [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]、[[card-issuers/epos-card|Epos Card]]、[[card-issuers/paypay-card|PayPay Card]] が含まれる。

## TL;DR

日本で事業を行う4つの国際ブランド — **Visa、Mastercard、American Express、JCB** — は一般に互換可能な「クレジットカードブランド」として扱われるが、それらは **構造的に異なるオペレーションのポジション** に位置する。Visa と Mastercard は、別々の被免許の発行体とアクワイアラーを持つ **4者スキーム** を運営し、日本では主として [[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] その他の被免許者を通じて流通する。American Express は、自社の日本主体を中心とする **3者クローズドループ・スキーム** を運営し、主たる外部発行体パートナーとして **Saison-AMEX Persona 提携を通じた Credit Saison** を持つ。JCB は、JCB Co Ltd のブランド / アクワイアラー / 発行体の役割を、日本における ~30 のパートナー発行体企業と組み合わせる、**ハイブリッドな発行体ライセンス層を持つ3者ブランドモデル** を運営する。4ブランドはまた、法的主体、JP 加盟店の受入シェア（JCB と Visa が受入をリード；AMEX は後塵を拝する）、銀行 JV 構造（V/MC については MUFG NICOS；AMEX については AMEX-Saison Persona）、および各ブランドの戦略が分岐する **2025-2026 エージェント決済 / プッシュ・トゥ・カードのオーバーレイ**（Visa Direct、Mastercard Send、JCB-Pay のオーバーレイ）の点で異なる。このマトリクスは、日本における手数料の経済性、加盟店の選択、発行体関係、競争上のポジションを実際に決定するオペレーションの次元に沿って、4ブランドを並べる。

## この比較が重要な理由

3つの主張が4ブランド分析をしばしば混乱させる。第一に、「それらはみな単なるカードブランドだ」 — 4者対3者の区別（[[payments/jcb-three-party-operating-model|JCB three-party operating model]] を参照）を平板化することは、加盟店の手数料の経済性を駆動するインターチェンジあり対なしの分岐を隠す。第二に、「JCB は国内でしか重要でない」 — JCB International のグローバルなアクワイアラー提携（Discover Global Network、CTBC、KB Kookmin など）と、韓国 / 台湾 / 東南アジアにおける JCB のインバウンド観光客受入の役割は、JCB を見出しの受入フットプリントが示唆するより、よりグローバルに関連したものにする。第三に、「AMEX は単にプレミアムなだけだ」 — **Credit Saison Persona JV** の発行ラインは、AMEX がそのクローズドループの評判が示唆するより、実質的により広範な日本の発行体フットプリントを持つことを意味する。このマトリクスは、この3つすべてを直接読めるよう浮き彫りにする。

## 4大ブランド比較マトリクス

| 次元 | Visa | Mastercard | American Express | JCB |
|---|---|---|---|---|
| **日本の法的主体（主たるもの）** | Visa Worldwide Pte Ltd（日本支店）（[[payment-firms/visa-worldwide-japan\|Visa Worldwide Japan]]） | Mastercard Japan K.K.（[[payment-firms/mastercard-japan\|Mastercard Japan]]） | American Express International Inc.（日本支店）（[[payment-firms/american-express-international-japan\|AMEX International Japan]]） | JCB Co Ltd（[[card-issuers/jcb\|JCB]]）+ JCB International Co Ltd（[[payment-firms/jcb-international\|JCB International]]） |
| **グループ親会社** | Visa Inc.（NYSE: V、米国上場） | Mastercard Inc.（NYSE: MA、米国上場） | American Express Co.（NYSE: AXP、米国上場） | 非公開（主要株主には MUFG、SMFG、みずほ、日本生命、東京海上、NTT データ その他が含まれる） |
| **スキーム種別** | 4者（オープン） | 4者（オープン） | 3者（クローズドループのコア）+ パートナー発行体層 | 広範なパートナー発行体エコシステムを持つ3者（ハイブリッド） |
| **日本におけるブランドの役割** | 純粋なブランド / ネットワーク運営者；自ら発行もアクワイアリングもしない | 純粋なブランド / ネットワーク運営者；自ら発行もアクワイアリングもしない | ブランド + 主たる発行体 + 主たるアクワイアラー（クローズドループ） | ブランド + 主たる発行体 + 主たるアクワイアラー + ~30 パートナーへの発行体ライセンサー |
| **日本の主たる発行体** | [[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/rakuten-card\|Rakuten Card]]、[[card-issuers/credit-saison\|Credit Saison]]、[[card-issuers/aeon-financial-service\|AEON Financial Service]]、[[card-issuers/jaccs\|JACCS]]、[[card-issuers/orico\|Orico]]、[[card-issuers/epos-card\|Epos Card]]、[[card-issuers/paypay-card\|PayPay Card]]、View Card（JR 東日本） | Visa と同じマルチ発行体の日本フットプリント：[[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/rakuten-card\|Rakuten Card]]、[[card-issuers/credit-saison\|Credit Saison]]、[[card-issuers/aeon-financial-service\|AEON Financial Service]]、[[card-issuers/jaccs\|JACCS]]、[[card-issuers/orico\|Orico]] | AMEX 直接（プレミアムなプロプライエタリのラインナップ）；Persona JV を通じた [[card-issuers/credit-saison\|Credit Saison]]；一部のコブランドについては [[card-issuers/mufg-nicos\|MUFG]] | JCB Co Ltd 直接；[[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/aeon-financial-service\|AEON Financial Service]]、[[card-issuers/rakuten-card\|Rakuten Card]]、[[card-issuers/credit-saison\|Credit Saison]]、[[card-issuers/jaccs\|JACCS]]、[[card-issuers/orico\|Orico]]、JR（View）、Lifecard、その他 ~25  |
| **日本の主たるアクワイアラー** | [[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/jcb\|JCB Co]]（クロスライセンスのアクワイアラー）、[[card-issuers/credit-saison\|Credit Saison]] ライン、加えて [[payment-firms/gmo-payment-gateway\|GMO-PG]] / [[payment-firms/sb-payment-service\|SBPS]] / [[payment-firms/dg-financial-technology\|DGFT]] を通じた PSP 経由のアクワイアリング | 同じセット：[[card-issuers/mufg-nicos\|MUFG NICOS]]、[[card-issuers/smbc-card\|SMBC Card]]、[[card-issuers/jcb\|JCB Co]]、[[card-issuers/credit-saison\|Credit Saison]]、主要な PSP を通じて経路設定 | AMEX 直接の加盟店アクワイアラー（クローズドループのコア）；ローエンドの加盟店の広がりについては一部アクワイアラー提携 | JCB Co Ltd 直接（主たるアクワイアラー）；共同加盟店のための協力アクワイアラーとして [[card-issuers/mufg-nicos\|MUFG NICOS]]；PSP を通じてパートナー経由 |
| **受入シェア（CPC / Visa-MC データ、参考）** | n.d.（ブランド別の受入シェアは CPC / METI により未公表）；定性的には日本で最大の国際ブランド受入 | 二番手に大きい国際ブランド受入；加盟店ロケーションのフットプリントで Visa に近い | 歴史的に V/MC/JCB より狭い受入；AMEX-JCB クロス受入 + Saison Persona の拡大以降は広がっている | プレミアムブランドの中で最強の国内日本受入；大規模加盟店ではほぼ普遍的；マイクロ加盟店では V/MC より弱い |
| **インターチェンジ / スキーム手数料の構造** | ブランドが定める公表インターチェンジ・レート（日本標準、2023 ロードマップ以降開示）；明示的なアクワイアラー・スキーム手数料 | Visa と同じ構造；2023 ロードマップ以降、日本標準インターチェンジを公表；明示的なアクワイアラー・スキーム手数料 | クローズドループの加盟店ディスカウントレートは AMEX が二者間で設定（クローズドループのコアでは発行体 = アクワイアラーであるため、別個の発行体とのインターチェンジ分割なし）；パートナー発行カード（Saison など）は内部配分を持つ | JCB Co Ltd 直接の加盟店：インターチェンジ分割なし（発行体 = アクワイアラー）；パートナー発行カード：JCB アクワイアラーとパートナー発行体の間のインターチェンジを 2023-06 に開示（日本初の主要ブランド） |
| **銀行 JV 構造（日本）** | [[card-issuers/mufg-nicos\|MUFG NICOS]]（MUFG をアンカーとする、V/MC のデュアルブランド）；アクワイアリングのための [[card-issuers/smbc-card\|SMBC Card]] との SMBC GMO PAYMENT JV | [[card-issuers/mufg-nicos\|MUFG NICOS]]（Visa とのデュアルブランド）；[[card-issuers/smbc-card\|SMBC Card]] との SMBC GMO PAYMENT JV | **AMEX-Saison Persona 提携**（[[card-issuers/credit-saison\|Credit Saison]] 発行体 JV、2000に遡る）；[[card-issuers/mufg-nicos\|MUFG]] コブランドカード | 株主構造は銀行 FG（MUFG、SMFG、みずほ）にまたがる；JCB Co Ltd 自身がブランド-銀行-発行体のハイブリッドとして機能；大半の主要カード会社とのパートナー発行体 JV |
| **チャージバックに対する発行体側の責任** | 発行体がチャージバックリスクを負う；ブランド調停の階層が利用可能 | 発行体がチャージバックリスクを負う；ブランド調停の階層が利用可能 | AMEX 直接：クローズドループの内部処理；Saison 発行：Persona 条項の下で Saison が発行体チャージバックリスクを負う | JCB 直接：内部処理（発行体 = アクワイアラー）；パートナー発行：パートナーが発行体チャージバックリスクを負う |
| **EMV 3-DS / J-CSC 6.0 義務の遵守（2025-03）** | 必須；Visa Secure（3-DS 2.x）が広く展開 | 必須；Mastercard Identity Check（3-DS 2.x）が広く展開 | 必須；AMEX SafeKey 3-DS が展開 | 必須；J/Secure 3-DS が展開；ブランドが3者ルールを通じて遵守を直接管理 |
| **QR / コード決済のオーバーレイ** | **Visa Direct** プッシュ・トゥ・カードのレール；Visa カード上の Tap-to-Pay / NFC 非接触 | **Mastercard Send** プッシュ・トゥ・カード；Mastercard カード上の Tap-to-Pay / NFC 非接触 | AMEX 非接触 / NFC 標準；主要な QR オーバーレイ商品なし | JCB Tap（非接触）；一部市場における JCB Pay コード決済商品 |
| **エージェント決済 / トークン化のロードマップ（2025-2026）** | エージェント開始決済のための **Visa Agentic Commerce** / **Visa Intelligent Commerce**；Visa Token Service ネットワークトークン | エージェント開始決済のための **Mastercard Agent Pay** / **Mastercard Agentic Tokens**；Mastercard Digital Enablement Service（MDES） | AMEX エージェント決済のロードマップは開発中；SafeKey がエージェントフローに適応 | JCB のロードマップは公的にあまり開示されていない；J/Secure がパートナー発行ポートフォリオでエージェントフローに適応 |
| **インバウンド観光客の受入（日本における外国発行カード）** | 日本の加盟店の中で最大のインバウンド受入フットプリント | 二番手に大きいインバウンド受入フットプリント；Visa とほぼ同等 | 小規模加盟店では V/MC より狭い；ホテル / プレミアム / インバウンド向けリテールでは広い | 韓国 / 台湾 / 中国からの JCB カードは有意なインバウンドセグメント；JCB International がアクワイアラー側 |
| **アウトバウンド観光客の受入（海外における日本発行カード）** | 普遍的なグローバル受入 | 普遍的なグローバル受入 | グローバルなプレミアム受入；海外のマイクロ加盟店では弱い | 韓国 / 台湾 / 香港 / 東南アジアで強い；Discover アライアンスが米国フットプリントを与える；欧州では弱い |
| **国内の規制対話（METI / JFTC）** | 日本の代表事務所を通じて；グローバル HQ と調整 | 日本の代表事務所を通じて；グローバル HQ と調整 | 日本の代表事務所を通じて；米国 HQ と調整 | 直接の国内エンゲージメント（HQ が日本にある）；2023 手数料開示要請に最初に応答 |
| **ブランド手数料は開示されているか？** | 日本標準インターチェンジを 2023-08 に公表（Payments Japan ロードマップ） | 日本標準インターチェンジを 2023-08 に公表（Payments Japan ロードマップ） | 個別には開示なし（クローズドループの加盟店ディスカウントは内部） | 発行体 / アクワイアラーの分割を 2023-06 に開示（日本の主要ブランドの中で初） |

### Visa（Visa Worldwide Pte Ltd 日本支店）

[[payment-firms/visa-worldwide-japan|Visa Worldwide Japan]] は Visa Inc.（NYSE: V）の主たる日本のプレゼンスである。**純粋な4者スキーム** を運営する：Visa は日本でカードの発行も加盟店のアクワイアリングも直接行わない — 代わりに日本国内のオペレーターに発行とアクワイアリングをライセンスする。主たる日本の発行体は、銀行 FG のカードライン（[[card-issuers/mufg-nicos|MUFG NICOS]]、[[card-issuers/smbc-card|SMBC Card]]）、独立系カード会社（[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]]）、EC エコシステムのカード（[[card-issuers/rakuten-card|Rakuten Card]]、[[card-issuers/paypay-card|PayPay Card]]）、リテールをアンカーとするカード（[[card-issuers/aeon-financial-service|AEON Financial Service]]、[[card-issuers/epos-card|Epos Card]]）、交通系をアンカーとするカード（JR 東日本を通じた View Card）にまたがる。アクワイアリングも同様に、銀行 FG のアクワイアラーと PSP（[[payment-firms/gmo-payment-gateway|GMO-PG]]、[[payment-firms/sb-payment-service|SBPS]]、[[payment-firms/dg-financial-technology|DGFT]]）にまたがって分散している。

Visa の特徴的な日本のポジショニング：**最大の国際ブランド受入フットプリント + JCB とのデュアルブランドカードを通じた普遍的な発行体カバレッジ**。日本で発行される大半のクレジットカードは、JCB の国内ベースの上に国際ブランドとして Visa または Mastercard を載せており、Visa は直接発行しないにもかかわらず、実質的にほぼ普遍的な日本の発行リーチを得ている。2025-2026 の **Visa Direct プッシュ・トゥ・カード** のオーバーレイと **Visa Agentic Commerce** / **Visa Intelligent Commerce** のロールアウトは、Visa を日本におけるエージェント開始のカード決済の主たるインフラとして位置づける。

### Mastercard（Mastercard Japan K.K.）

[[payment-firms/mastercard-japan|Mastercard Japan]] は Mastercard Inc.（NYSE: MA）の主たる日本のプレゼンスである。スキーム種別（4者）、被免許の発行体モデル、アクワイアラー関係の点で、構造的に Visa と同一である。主たる日本の発行体とアクワイアラーは、Visa のセットとほぼ完全に重なる — [[card-issuers/mufg-nicos|MUFG NICOS]]（V/MC のデュアルブランド発行）、[[card-issuers/smbc-card|SMBC Card]]、[[card-issuers/credit-saison|Credit Saison]]、[[card-issuers/jaccs|JACCS]]、[[card-issuers/orico|Orico]] その他が通常両ブランドを発行する。

Mastercard の特徴的な日本のポジショニング：**プレミアムセグメントのコブランドへのわずかな傾き** と **2025-2026 Mastercard Send / Mastercard Agent Pay** のオーバーレイ。Mastercard は歴史的に、日本の国際ブランド受入で Visa に次ぐ強力な2番手として位置づけられてきたが、その差は加盟店受入のフットプリントのレベルでは小さい。**Mastercard Digital Enablement Service（MDES）** のネットワークトークン化層は、Mastercard のエージェントコマースのロードマップを下支えし、機能的に Visa Token Service と並行する。

### American Express（American Express International Inc. Japan）

[[payment-firms/american-express-international-japan|AMEX International Japan]] は、そのコアにおいて **3者クローズドループ・スキーム** として日本で AMEX ブランドを運営する。AMEX は自社のプレミアムカード（Platinum、Gold、Green など）を日本のカード会員に直接発行し、受入のために加盟店と直接契約する。歴史的にこの狭いクローズドループは日本の受入の広がりを制限したが、2つの構造的な進展が AMEX のフットプリントを実質的に拡大した：

1. **Credit Saison Persona JV**（saisoncard.co.jp/company/persona/）：Credit Saison（[[card-issuers/credit-saison|Credit Saison]]）は **Persona** ブランド提携の下で日本で AMEX ブランドのカードを発行し、2000に遡る。これは AMEX に、そのクローズドループの評判を実質的に上回る日本の発行体提携フットプリントを与え、多くの「日本の AMEX カード」が実際には Persona JV の下で Saison が発行する AMEX ブランドのカードであることを意味する — JCB のパートナー発行体モデルと構造的に類似する、パートナー発行体の取り決めである。
2. **AMEX-JCB クロス受入**：AMEX カードは AMEX-JCB クロス受入アライアンスを通じて日本で JCB がアクワイアリングする加盟店で受け入れられ、AMEX がそれらの加盟店を直接アクワイアリングする必要なしに、実質的に AMEX に JCB のより広範な日本の受入フットプリントの利用を与える。

AMEX の特徴的な日本のポジショニング：**クローズドループのプレミアムなコア + Persona のパートナー発行 + JCB のクロス受入**。その結果は、AMEX スキームが多くの他の市場で持つよりも、有意に広範な日本のフットプリントを持つ3者スキームである。AMEX のエージェントコマースのロードマップ（SafeKey 適応）は、Visa / Mastercard の公的側の開示よりも早期の開発段階にある。

### JCB（JCB Co Ltd + JCB International Co Ltd）

JCB は **ハイブリッドな発行体ライセンス層を持つ3者ブランドモデル** を運営する — [[payments/jcb-three-party-operating-model|JCB three-party operating model]] で深く扱われる。[[card-issuers/jcb|JCB Co Ltd]]（日本国内のブランド + 主たるアクワイアラー + 発行体 + 発行体ライセンサー）と [[payment-firms/jcb-international|JCB International]]（国際的なアクワイアラー提携 + クロスボーダー決済）の間の企業上の分割は、JCB のオペレーションモデルの基礎である。日本における ~30 のパートナー発行体フットプリント（MUFG NICOS、AEON、Rakuten Card、Saison、JACCS、Orico、JR View、地方銀行、Lifecard など）は、JCB に AMEX の Persona をアンカーとするパートナー発行よりも有意に大きい日本の発行体リーチを与える。

JCB の特徴的な日本のポジショニング：**唯一の国内日本の国際ブランド**、プレミアムな国内受入、米国受入のための **Discover Global Network アライアンス**、韓国 / 台湾 / 東南アジアにおける地域のアクワイアラー提携。JCB は、その発行体 / アクワイアラーの手数料配分レートを公的に開示した最初の主要な日本ブランドであった（2023-06-01 METI / JFTC 共同リリース）。これは、3者モデルの下で JCB が加盟店手数料の分割の両端を管理することを反映している。

## 発行体 / アクワイアラーのクロスオーナーシップ・マトリクス大半の主要な日本のカード発行体は複数のブランドを発行する。クロスオーナーシップのパターンは、日本における発行体競争が **ブランドでセグメント化されているのではなく、ブランドで重なっている** 理由を理解するために構造的に重要である：

| 発行体 | Visa を発行？ | Mastercard を発行？ | AMEX を発行？ | JCB を発行？ | 備考 |
|---|---|---|---|---|---|
| [[card-issuers/mufg-nicos\|MUFG NICOS]] | あり（アンカー） | あり（アンカー） | あり（一部コブランド） | あり（アンカーパートナー） | デュアル / トリプルブランドのカードが一般的 |
| [[card-issuers/smbc-card\|SMBC Card]] | あり（アンカー） | あり（アンカー） | あり（一部コブランド） | あり（一部） | トリプルブランドの SMBC Olive カード |
| [[card-issuers/credit-saison\|Credit Saison]] | あり | あり | あり（Persona JV） | あり | クアッドブランドの発行体フットプリント |
| [[card-issuers/rakuten-card\|Rakuten Card]] | あり | あり | あり（Rakuten Premium Card） | あり | 消費者ベースでのクアッドブランド |
| [[card-issuers/aeon-financial-service\|AEON Financial Service]] | あり | あり | あり（一部） | あり（アンカーパートナー） | AEON CARD Select のマルチブランド |
| [[card-issuers/jaccs\|JACCS]] | あり | あり | あり（一部） | あり | マルチブランドのコブランド |
| [[card-issuers/orico\|Orico]] | あり | あり | あり（一部） | あり | マルチブランドのコブランド |
| [[card-issuers/epos-card\|Epos Card]] | あり（アンカー） | — | — | — | Visa モノブランドのコブランド |
| [[card-issuers/paypay-card\|PayPay Card]] | あり（アンカー） | あり | — | あり | PayPay をアンカーとする発行体 |
| View Card（JR 東日本） | あり | あり | — | あり（VIEW JCB） | JR チャネルのカード |

パターン：**消費者-発行体のレベルでは、ブランドの選択は通常、発行体間の競争上の選択ではなく、商品ラインの決定である**。MUFG-NICOS のカードの間で選ぶ消費者は、異なる発行体の間の選択としてではなく、同じ発行体のブランドのバリアントとして Visa か Mastercard か JCB を選ぶ。

## 日本の加盟店における受入シェア（参考）

公的な Cashless Promotion Council と METI のデータは、このセクションが理想的に要求する精度でブランド別の受入シェアを一貫して内訳していない。権威あるブランド別シェアの数値が公表されていないため、以下のシェア特徴づけの列は `n.d.`（データ未公開）とマークされる；定性的な受入の広がりの観察のみが保持される。

| ブランド | 受入の広がり（日本の加盟店） | 参考的なシェアの特徴づけ | 備考 |
|---|---|---|---|
| Visa | 最大の国際ブランドのフットプリント；チェーン加盟店およびオンラインでほぼ普遍的 | n.d.（ブランド別シェアは未公表） | ブランド受入で普遍的 |
| Mastercard | チェーン加盟店およびオンラインで Visa とほぼ同等 | n.d.（ブランド別シェアは未公表） | ブランド受入で普遍的 |
| AMEX | マイクロ加盟店では狭い；JCB クロス受入を通じて広い | n.d.（ブランド別シェアは未公表） | プレミアムに傾いた受入 |
| JCB | 最大の国内ブランドのフットプリント；大規模加盟店で強い；主要小売で普遍的 | n.d.（ブランド別シェアは未公表） | 国内をリードする受入 |

検証可能なデータソース：METI 2025 キャッシュレスデータリリース（https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html）、Cashless Promotion Council のコード決済調査（https://paymentsjapan.or.jp/category/publications/）、日本クレジット協会（https://www.j-credit.or.jp/）の業界統計。

## QR / コード決済のオーバーレイ戦略の比較

4ブランドは、日本でカード決済と並んで台頭した QR / コード決済レーン（[[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] で扱われる）に参加するかどうか、およびどのように参加するかについて、有意に分岐する：

| ブランド | プッシュ・トゥ・カード / 即時決済の商品 | コード決済の直接商品 | ウォレット発行カードの経済性 |
|---|---|---|---|
| Visa | **Visa Direct**（プッシュ・トゥ・カード；個人間、企業対消費者、クロスボーダー） | 直接はなし；Visa カードは PayPay / Rakuten / 各ウォレットによって資金供給元として消費される | 普遍的 — 日本の大半のウォレットが Visa カードの資金供給を受け入れる |
| Mastercard | **Mastercard Send**（機能的に Visa Direct と並行） | 直接はなし；Mastercard カードは日本のウォレットによって資金供給元として消費される | 普遍的 — 日本の大半のウォレットが Mastercard カードの資金供給を受け入れる |
| AMEX | AMEX Send（プッシュ・トゥ・カード；より限定的な日本のフットプリント） | 直接はなし；AMEX カードが日本のウォレットによって消費されることは V/MC より限定的 | 狭い — MDR の経済性のため AMEX カードの資金供給を受け入れる日本のウォレットは少ない |
| JCB | 一部市場における J-RPay / 国内オーバーレイ商品 | 限定的；一部市場における JCB ブランドのウォレット | 普遍的 — 日本の大半のウォレットが JCB カードの資金供給を受け入れる |

構造的なパターン：**Visa Direct と Mastercard Send は、日本のウォレットと送金商品がますます経路設定する2つの主たるグローバルなプッシュ・トゥ・カードのレールである**。AMEX Send は機能的に類似するが、より狭い日本のフットプリントを持つ。JCB は同じ規模で直接競合するプッシュ・トゥ・カードの商品を構築しておらず、JCB の国内日本へのフォーカスを反映している。

## エージェント決済オーバーレイのロードマップ比較

AI エージェント開始のコマース（決済側で [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] で扱われる）の 2025-2026 台頭は、自社のトークン化 / 認証 / 認可のインフラをエージェント決済の標準レールとして位置づけるための、4ブランド間の並行レースを生み出す：

| ブランド | エージェント決済の商品 / フレームワーク | トークン化層 | 認証の適応 |
|---|---|---|---|
| Visa | **Visa Intelligent Commerce** / **Visa Agentic Commerce** | Visa Token Service（ネットワークトークン、ワンタイムトークン） | エージェントフローのための委任認証で拡張された Visa Secure（3-DS 2.x） |
| Mastercard | **Mastercard Agent Pay** / **Mastercard Agentic Tokens** | Mastercard Digital Enablement Service（MDES） | エージェントフローのための委任認証で拡張された Mastercard Identity Check（3-DS 2.x） |
| AMEX | エージェント決済のロードマップは公的にあまり開示されていない | AMEX 内部のトークン化 | エージェントフローに適応された AMEX SafeKey 3-DS |
| JCB | エージェント決済のロードマップは公的にあまり開示されていない；パートナー発行体への依存 | J/Secure トークン化 | エージェントフローに適応された J/Secure 3-DS |

Visa と Mastercard は、エージェント決済インフラの最も先進的な公的側の開示を持つ；AMEX と JCB はより早期のロードマップ開示段階にある。日本国内のエージェントコマース市場が Visa / Mastercard のグローバルなレールに収束するのか、それともウォレット-PSP 層を通じて日本固有のオーバーレイを発展させるのかは、未解決の問いである — [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] を参照。

## 銀行 JV とパートナーシップ構造の比較

4ブランドは日本の銀行および銀行 FG と構造的に異なる関係を持つ：

| ブランド | 銀行 FG のアンカー関係 | JV / パートナーシップ構造 | 流通チャネル |
|---|---|---|---|
| Visa | MUFG（[[card-issuers/mufg-nicos\|MUFG NICOS]] を通じて）、SMFG（[[card-issuers/smbc-card\|SMBC Card]] + SMBC GMO PAYMENT JV を通じて） | ライセンス関係；エクイティ JV なし | 銀行 FG のカードライン + マルチブランドのコブランドカード |
| Mastercard | Visa と同じ銀行 FG のアンカー | ライセンス関係；エクイティ JV なし | 銀行 FG のカードライン + マルチブランドのコブランドカード |
| AMEX | **Saison Persona JV**（[[card-issuers/credit-saison\|Credit Saison]]、2000以降） | 収益分配を伴う発行体パートナーシップ JV | Persona 発行カード + AMEX 直接発行のプレミアム |
| JCB | JCB Co Ltd の株主構造には MUFG、SMFG、みずほ、日本生命、東京海上、NTT データが有力株主として含まれる | ブランド-アンド-株主のハイブリッド | JCB 直接 + 30+ パートナー発行体のカード |

**AMEX-Saison Persona** 提携と **JCB の株主構造** は、最も構造的に特徴的な2つの銀行関係の取り決めである。AMEX の Persona の下での広範な日本の発行のための Saison への依存は、AMEX を純粋なクローズドループからハイブリッドスキームへと実質的に転換する；JCB の銀行 FG の株主保有は、国際ブランドが複製しない日本の銀行セクターとの構造的なアライメントを JCB に与える。

## 手数料開示と JFTC の圧力の着地

2022-04-08 JFTC のクレジットカード加盟店手数料報告書と、JCB の手数料開示に関する 2023-06-01 METI / JFTC 共同リリースは、日本のカードブランドのオペレーションの経済性に対する有意な進行中の規制圧力を表す：

| ブランド | 手数料開示の状況（日本、2026-05） | JFTC エンゲージメント |
|---|---|---|
| Visa | 日本標準インターチェンジを 2023-08 に公表（Payments Japan ロードマップ）；アクワイアラー別の分割は未開示 | ライセンス関係が中央の開示を制限する |
| Mastercard | 日本標準インターチェンジを 2023-08 に公表（Payments Japan ロードマップ）；アクワイアラー別の分割は未開示 | ライセンス関係が中央の開示を制限する |
| AMEX | クローズドループの加盟店ディスカウント：個別には未開示；Persona 側の配分：内部 | クローズドループが取引ごとのインターチェンジに対する JFTC のスコープを縮小する |
| JCB | 発行体 / アクワイアラーの手数料配分の分割を 2023-06 に開示（日本の主要ブランドの中で初） | 直接のエンゲージメント；開示の先行者 |

JCB の手数料開示における先行者のポジションは、3者モデルを反映している：JCB Co Ltd は手数料の分割の両端を管理し、一方的に開示できるのに対し、Visa と Mastercard は複数の被免許のアクワイアラーにまたがって調整しなければならない（構造的な説明については [[payments/jcb-three-party-operating-model|JCB three-party operating model]] を参照）。

## 他のマトリクスとのクロスリファレンス

- **[[payments/jcb-three-party-operating-model|JCB three-party operating model]]** vs：そのエントリは JCB の3者アーキテクチャを深掘りする；このマトリクスは JCB をクロスブランドの文脈に置く。
- **[[payments/japan-card-issuer-acquirer-processor-split|card 発行会社 / アクワイアラ / processor split]]** vs：そのエントリは役割分離のフレームワークを確立する；このマトリクスはブランドを名指しし、各ブランドが役割をどう組み合わせるか・分離するかを示す。
- **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]** vs：そのマトリクスはスキームクラスのレベルでカード対コード対 A2A 対前払いを扱う；このマトリクスはカードクラスをその4ブランドのオペレーターに分解する。
- **[[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]** vs：そのエントリはインターチェンジ / スキーム / アクワイアラー手数料の構造を扱う；このマトリクスはブランド固有の手数料アーキテクチャをマッピングする。
- **[[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]** vs：そのマトリクスは加盟店とブランドの間に位置する PSP / ゲートウェイ層を扱う；このマトリクスは PSP の上のブランド層を扱う。
- **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]** vs：そのマトリクスは JCB のパートナー発行体のセットを分解する；このマトリクスはその周りにブランド比較のフレームを置く。

## 関連

- [[payments/INDEX]]
- [[payments/jcb-three-party-operating-model]]
- [[payments/japan-card-issuer-acquirer-processor-split]]
- [[payments/japan-payment-scheme-economics-matrix]]
- [[payments/japan-interchange-and-merchant-fee-stack]]
- [[payments/japan-merchant-psp-competitive-scorecard]]
- [[payments/japan-jcb-issuer-ecosystem-positioning-matrix]]
- [[payments/japan-card-security-authentication-controls]]
- [[payments/japan-code-payment-competitive-map]]
- [[payments/credit-purchase-card-operators-japan-index]]
- [[payments/cashless-jp-landscape]]
- [[payment-firms/visa-worldwide-japan]]
- [[payment-firms/mastercard-japan]]
- [[payment-firms/american-express-international-japan]]
- [[card-issuers/jcb]]
- [[payment-firms/jcb-international]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/smbc-card]]
- [[card-issuers/credit-saison]]
- [[card-issuers/rakuten-card]]
- [[card-issuers/aeon-financial-service]]
- [[card-issuers/jaccs]]
- [[card-issuers/orico]]
- [[card-issuers/epos-card]]
- [[card-issuers/paypay-card]]
- [[INDEX|FinWiki index]]

## 出典

- Visa Japan コーポレートサイト：https://www.visa.co.jp/
- Visa Japan について のページ：https://www.visa.co.jp/about-visa.html
- Mastercard Japan コーポレートサイト：https://www.mastercard.co.jp/
- Mastercard Japan について のページ：https://www.mastercard.co.jp/ja-jp/business/about-mastercard.html
- American Express Japan：https://www.americanexpress.com/jp/
- American Express Japan コーポレート：https://www.americanexpress.com/ja-jp/company/
- JCB グローバルサイト（日本語）：https://www.global.jcb/ja/
- JCB ビジネスエリア / ブランド：https://www.global.jcb/ja/about-us/business-area/brand/
- JCB Japan：https://www.jcb.co.jp/
- Credit Saison Persona 提携：https://www.saisoncard.co.jp/company/persona/
- MUFG NICOS コーポレート：https://www.cr.mufg.jp/corporate/
- METI 2023-06-01 の JCB 手数料開示に関するリリース：https://www.meti.go.jp/press/2023/06/20230601003/20230601003.html
- METI 2025 キャッシュレス決済比率リリース：https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- METI キャッシュレス政策ポータル：https://www.meti.go.jp/policy/mono_info_service/cashless/index.html
- Payments Japan Association 2023 キャッシュレス・ロードマップ：https://paymentsjapan.or.jp/wp-content/uploads/2023/08/roadmap2023.pdf
- Payments Japan Association の刊行物：https://paymentsjapan.or.jp/category/publications/
- 日本クレジット協会：https://www.j-credit.or.jp/
- JFTC 2022-04-08 のクレジットカード加盟店手数料報告書：https://www.jftc.go.jp/houdou/pressrelease/2022/apr/220408.html
