---
source: payments/visa-mastercard-amex-jcb-japan-operating-comparison
source_hash: 1c001bab672eff70
lang: ja
status: machine
fidelity: ok
title: "Visa Mastercard AMEX JCB 日本事業比較"
translated_at: 2026-06-02T16:33:58.528Z
---
# Visa Mastercard AMEX JCB 日本事業比較

## ウィキ上の位置づけ

このエントリは、**4ブランド横断比較ページ**として [[payments/INDEX|payments index]] 配下に位置する。JCB 個別の深掘りは [[payments/jcb-three-party-operating-model|JCB three-party operating model]]、役割分離フレームワークは [[payments/japan-card-issuer-acquirer-processor-split|Japan card issuer / acquirer / processor split]]、手数料フロー上の帰結は [[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]、スキーム横断の経済性視点は [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]、4ブランドすべてに同時にかかる [[payments/japan-card-security-authentication-controls|Japan card security and authentication controls]] の EMV 3-DS / J-CSC 義務の着地点と組み合わせる。ブランドアンカーは [[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]]、[[JapanFG/mastercard-japan|Mastercard Japan]]、[[JapanFG/american-express-international-japan|American Express International Japan]]、[[JapanFG/jcb|JCB Co Ltd]] / [[JapanFG/jcb-international|JCB International]] である。参照される主要なイシュアー / アクワイアラの相手方には、[[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]]、[[JapanFG/epos-card|Epos Card]]、[[JapanFG/paypay-card|PayPay Card]] が含まれる。

## 要約

日本で事業を行う4つの国際ブランド、**Visa、Mastercard、American Express、JCB** は、しばしば互換的な「クレジットカードブランド」として扱われるが、実際には**構造的に異なる事業上の位置**にある。Visa と Mastercard は、分離されたライセンス済みイシュアーとアクワイアラを持つ**4者間スキーム**を運営し、日本では主に [[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]] その他のライセンシーを通じて展開される。American Express は自社日本拠点を中心とする**3者間クローズドループ・スキーム**を運営し、外部イシュアー・パートナーの主軸は **Saison-AMEX Persona 提携を通じた Credit Saison** である。JCB は、JCB Co Ltd のブランド / アクワイアラ / イシュアー機能と、日本国内約 30 社のパートナーイシュアーを組み合わせた、**ハイブリッドなイシュアーライセンス層を持つ3者間ブランドモデル**である。4ブランドは、法人、国内加盟店受入シェア (JCB と Visa が受入を主導し、AMEX は劣後)、銀行 JV 構造 (V/MC は MUFG NICOS、AMEX は AMEX-Saison Persona)、および **2025-2026  の代理決済 / push-to-card オーバーレイ** (Visa Direct、Mastercard Send、JCB-Pay オーバーレイ) でも異なる。このマトリクスは、日本における手数料経済性、加盟店選択、イシュアー関係、競争上の位置を実際に決める事業次元に沿って4ブランドを並べる。

## この比較が重要な理由

4ブランド分析では、3つの主張が混同されやすい。第一に、「すべてただのカードブランド」という見方は、4者間と3者間の違い ([[payments/jcb-three-party-operating-model|JCB three-party operating model]] 参照) を平板化し、加盟店手数料の経済性を動かすインターチェンジ有無の差を隠す。第二に、「JCB は国内でしか重要でない」という見方は、JCB International のグローバルなアクワイアラ提携 (Discover Global Network、CTBC、KB Kookmin など) と、韓国 / 台湾 / 東南アジアからの訪日客受入における JCB の役割を過小評価する。第三に、「AMEX はプレミアムだけ」という見方は、**Credit Saison Persona JV** の発行ラインにより、AMEX がクローズドループの評判以上に広い日本でのイシュアー・フットプリントを持つことを見落とす。このマトリクスは、その3点を直接読める形にする。

## 4大ブランド比較マトリクス

| 次元 | Visa | Mastercard | American Express | JCB |
|---|---|---|---|---|
| **日本法人 (主)** | Visa Worldwide Pte Ltd (日本支店) ([[JapanFG/visa-worldwide-japan\|Visa Worldwide Japan]]) | Mastercard Japan K.K. ([[JapanFG/mastercard-japan\|Mastercard Japan]]) | American Express International Inc. (日本支店) ([[JapanFG/american-express-international-japan\|AMEX International Japan]]) | JCB Co Ltd ([[JapanFG/jcb\|JCB]]) + JCB International Co Ltd ([[JapanFG/jcb-international\|JCB International]]) |
| **グループ親会社** | Visa Inc. (NYSE: V, 米国上場) | Mastercard Inc. (NYSE: MA, 米国上場) | American Express Co. (NYSE: AXP, 米国上場) | 非公開会社 (主要株主に MUFG、SMFG、Mizuho、Nippon Life、Tokio Marine、NTT Data など) |
| **スキーム種別** | 4者間 (オープン) | 4者間 (オープン) | 3者間 (クローズドループ中核) + パートナーイシュアー層 | 広範なパートナーイシュアー・エコシステムを持つ3者間 (ハイブリッド) |
| **日本でのブランド役割** | 純粋なブランド / ネットワーク運営者。直接発行・加盟店獲得は行わない | 純粋なブランド / ネットワーク運営者。直接発行・加盟店獲得は行わない | ブランド + 主要イシュアー + 主要アクワイアラ (クローズドループ) | ブランド + 主要イシュアー + 主要アクワイアラ + 約 30 社へのイシュアーライセンサー |
| **日本の主要イシュアー** | [[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/rakuten-card\|Rakuten Card]]、[[JapanFG/credit-saison\|Credit Saison]]、[[JapanFG/aeon-financial-service\|AEON Financial Service]]、[[JapanFG/jaccs\|JACCS]]、[[JapanFG/orico\|Orico]]、[[JapanFG/epos-card\|Epos Card]]、[[JapanFG/paypay-card\|PayPay Card]]、View Card (JR East) | Visa と同じ多イシュアー国内フットプリント: [[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/rakuten-card\|Rakuten Card]]、[[JapanFG/credit-saison\|Credit Saison]]、[[JapanFG/aeon-financial-service\|AEON Financial Service]]、[[JapanFG/jaccs\|JACCS]]、[[JapanFG/orico\|Orico]] | AMEX 直接発行 (プレミアム独自ライン)、Persona JV 経由の [[JapanFG/credit-saison\|Credit Saison]]、一部提携カードの [[JapanFG/mufg-nicos\|MUFG]] | JCB Co Ltd 直接発行、[[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/aeon-financial-service\|AEON Financial Service]]、[[JapanFG/rakuten-card\|Rakuten Card]]、[[JapanFG/credit-saison\|Credit Saison]]、[[JapanFG/jaccs\|JACCS]]、[[JapanFG/orico\|Orico]]、JR (View)、Lifecard、その他約 25 社 |
| **日本の主要アクワイアラ** | [[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/jcb\|JCB Co]] (クロスライセンス・アクワイアラ)、[[JapanFG/credit-saison\|Credit Saison]] ライン、さらに [[JapanFG/gmo-payment-gateway\|GMO-PG]] / [[JapanFG/sb-payment-service\|SBPS]] / [[JapanFG/dg-financial-technology\|DGFT]] を通じた PSP ルーティング | 同じ集合: [[JapanFG/mufg-nicos\|MUFG NICOS]]、[[JapanFG/smbc-card\|SMBC Card]]、[[JapanFG/jcb\|JCB Co]]、[[JapanFG/credit-saison\|Credit Saison]]、主要 PSP 経由のルーティング | AMEX 直接加盟店アクワイアラ (クローズドループ中核)。低価格帯加盟店の広がりでは一部アクワイアラ提携 | JCB Co Ltd 直接 (主要アクワイアラ)、共同加盟店の協力アクワイアラとして [[JapanFG/mufg-nicos\|MUFG NICOS]]、PSP 経由のパートナー・ルーティング |
| **受入シェア (CPC / Visa-MC データ、参考)** | データ未公開 (CPC / METI はブランド別受入シェアを公表していない)。定性的には日本で最大の国際ブランド受入 | 国際ブランド受入で2位。加盟店所在地ベースでは Visa に近い | 歴史的には V/MC/JCB より狭い。AMEX-JCB 相互受入 + Saison Persona 拡大後は改善 | プレミアムブランドの中で国内最強の日本受入。大手加盟店ではほぼ普遍的。マイクロ加盟店では V/MC より弱い |
| **インターチェンジ / スキーム手数料構造** | ブランド設定の公表インターチェンジ料率 (日本標準、2023 ロードマップ以降開示)。明示的なアクワイアラ向けスキーム手数料 | Visa と同じ構造。2023 ロードマップ以降、日本標準インターチェンジを公表。明示的なアクワイアラ向けスキーム手数料 | AMEX が加盟店割引料率を相対で設定するクローズドループ (中核ではイシュアー = アクワイアラのため別イシュアーとのインターチェンジ分割なし)。Saison 等のパートナー発行カードには内部配分 | JCB Co Ltd 直接加盟店: インターチェンジ分割なし (イシュアー = アクワイアラ)。パートナー発行カード: JCB アクワイアラとパートナーイシュアー間のインターチェンジを 2023-06  に開示 (日本大手ブランド初) |
| **銀行 JV 構造 (日本)** | [[JapanFG/mufg-nicos\|MUFG NICOS]] (MUFG アンカー、V/MC デュアルブランド)、アクワイアリングでは [[JapanFG/smbc-card\|SMBC Card]] との SMBC GMO PAYMENT JV | [[JapanFG/mufg-nicos\|MUFG NICOS]] (Visa とのデュアルブランド)、[[JapanFG/smbc-card\|SMBC Card]] との SMBC GMO PAYMENT JV | **AMEX-Saison Persona 提携** ([[JapanFG/credit-saison\|Credit Saison]] イシュアー JV、2000 から)、[[JapanFG/mufg-nicos\|MUFG]] 提携カード | 株主構造は銀行 FG (MUFG、SMFG、Mizuho) をまたぐ。JCB Co Ltd 自体がブランド・銀行・イシュアーのハイブリッドとして機能。主要カード会社の多くとパートナーイシュアー JV |
| **チャージバックに対するイシュアー側責任** | イシュアーがチャージバックリスクを負担。ブランド仲裁層あり | イシュアーがチャージバックリスクを負担。ブランド仲裁層あり | AMEX 直接: クローズドループ内処理。Saison 発行: Persona 条件の下で Saison がイシュアー側チャージバックリスクを負担 | JCB 直接: 内部処理 (イシュアー = アクワイアラ)。パートナー発行: パートナーがイシュアー側リスクを負担 |
| **EMV 3-DS / J-CSC 6.0 義務対応 (2025-03)** | 必須。Visa Secure (3-DS 2.x) が広く導入 | 必須。Mastercard Identity Check (3-DS 2.x) が広く導入 | 必須。AMEX SafeKey 3-DS を導入 | 必須。J/Secure 3-DS を導入。ブランドが3者間ルールで直接コンプライアンスを管理 |
| **QR / コード決済オーバーレイ** | **Visa Direct** push-to-card レール、Visa カードの Tap-to-Pay / NFC contactless | **Mastercard Send** push-to-card、Mastercard カードの Tap-to-Pay / NFC contactless | AMEX contactless / NFC 標準。主要な QR オーバーレイ商品はない | JCB Tap (contactless)、一部市場の JCB Pay コード決済商品 |
| **代理決済 / トークン化ロードマップ (2025-2026)** | 代理人起点決済向け **Visa Agentic Commerce** / **Visa Intelligent Commerce**、Visa Token Service のネットワークトークン | 代理人起点決済向け **Mastercard Agent Pay** / **Mastercard Agentic Tokens**、Mastercard Digital Enablement Service (MDES) | AMEX の agentic-pay ロードマップは開発中。SafeKey が agentic フローに適応 | JCB のロードマップは公開情報が少ない。J/Secure がパートナー発行ポートフォリオ上の agentic フローに適応 |
| **訪日客受入 (海外発行カードの日本利用)** | 日本加盟店で最大の訪日客受入範囲 | 2番目に大きな訪日客受入範囲。Visa とほぼ同等 | 小規模加盟店では V/MC より狭い。ホテル / プレミアム / 訪日客向け小売では広い | 韓国 / 台湾 / 中国発行の JCB カードが重要な訪日客セグメント。JCB International アクワイアラ側 |
| **海外利用 (日本発行カードの国外利用)** | 世界的に普遍的な受入 | 世界的に普遍的な受入 | グローバルなプレミアム受入。国外のマイクロ加盟店では弱い | 韓国 / 台湾 / 香港 / 東南アジアで強い。Discover 提携で米国フットプリント。欧州では弱い |
| **国内規制対話 (METI / JFTC)** | 日本代表拠点を通じる。グローバル本社と調整 | 日本代表拠点を通じる。グローバル本社と調整 | 日本代表拠点を通じる。米国本社と調整 | 国内で直接関与 (本社が日本)。2023 手数料開示要請に最初に対応 |
| **ブランド手数料の開示有無** | 日本標準インターチェンジを 2023-08  に公表 (Payments Japan ロードマップ) | 日本標準インターチェンジを 2023-08  に公表 (Payments Japan ロードマップ) | 別個開示なし (クローズドループ加盟店割引料率は内部) | イシュアー / アクワイアラ分割を 2023-06  に開示 (日本大手ブランド初) |

### Visa (Visa Worldwide Pte Ltd 日本支店)

[[JapanFG/visa-worldwide-japan|Visa Worldwide Japan]] は Visa Inc. (NYSE: V) の日本における主要拠点である。**純粋な4者間スキーム**を運営する。Visa は日本でカードを直接発行せず、加盟店を直接獲得もしない。代わりに、発行と加盟店獲得を日本国内事業者へライセンスする。日本の主要イシュアーは、銀行 FG 系カードライン ([[JapanFG/mufg-nicos|MUFG NICOS]]、[[JapanFG/smbc-card|SMBC Card]])、独立系カード会社 ([[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]])、EC エコシステムカード ([[JapanFG/rakuten-card|Rakuten Card]]、[[JapanFG/paypay-card|PayPay Card]])、小売アンカー型カード ([[JapanFG/aeon-financial-service|AEON Financial Service]]、[[JapanFG/epos-card|Epos Card]])、交通アンカー型カード (JR East 経由の View Card) に広がる。アクワイアリングも同様に、銀行 FG 系アクワイアラと PSP ([[JapanFG/gmo-payment-gateway|GMO-PG]]、[[JapanFG/sb-payment-service|SBPS]]、[[JapanFG/dg-financial-technology|DGFT]]) に分散している。

Visa の日本での特徴的な位置づけは、**最大の国際ブランド受入範囲 + JCB とのデュアルブランドカードによる普遍的な発行カバレッジ**である。日本発行のクレジットカードの多くは、JCB 国内基盤の上に国際ブランドとして Visa または Mastercard を載せているため、Visa は直接発行を行わなくても、実質的に日本でほぼ普遍的な発行リーチを持つ。2025-2026  の **Visa Direct push-to-card** オーバーレイと **Visa Agentic Commerce** / **Visa Intelligent Commerce** の展開は、Visa を日本の代理人起点カード決済の主要インフラに位置づける。

### Mastercard (Mastercard Japan K.K.)

[[JapanFG/mastercard-japan|Mastercard Japan]] は Mastercard Inc. (NYSE: MA) の日本における主要拠点である。スキーム種別 (4者間)、ライセンス済みイシュアーモデル、アクワイアラ関係の面で Visa と構造的に同一である。日本の主要イシュアーとアクワイアラは Visa とほぼ完全に重なる。[[JapanFG/mufg-nicos|MUFG NICOS]] (V/MC デュアルブランド発行)、[[JapanFG/smbc-card|SMBC Card]]、[[JapanFG/credit-saison|Credit Saison]]、[[JapanFG/jaccs|JACCS]]、[[JapanFG/orico|Orico]] などは通常、両ブランドを発行する。

Mastercard の日本での特徴的な位置づけは、**プレミアム寄りの提携ブランドへのやや強い傾き**と、**2025-2026  の Mastercard Send / Mastercard Agent Pay** オーバーレイである。Mastercard は歴史的に、日本の国際ブランド受入では Visa に次ぐ強い2番手として位置づけられてきたが、加盟店受入範囲レベルでは差は小さい。**Mastercard Digital Enablement Service (MDES)** のネットワークトークン化レイヤーが、Mastercard の agentic commerce ロードマップを支えており、Visa Token Service と機能的に並行している。

### American Express (American Express International Inc. Japan)

[[JapanFG/american-express-international-japan|AMEX International Japan]] は日本で AMEX ブランドを**中核的には3者間クローズドループ・スキーム**として運営する。AMEX は自社のプレミアムカード (Platinum、Gold、Green など) を日本のカード保有者へ直接発行し、加盟店とも直接契約する。歴史的にこの狭いクローズドループは日本での受入範囲を制限したが、2つの構造的展開により AMEX のフットプリントは大きく拡大した。

1. **Credit Saison Persona JV** (saisoncard.co.jp/company/persona/): Credit Saison ([[JapanFG/credit-saison|Credit Saison]]) は、2000 からの **Persona** ブランド提携の下で、日本で AMEX ブランドカードを発行している。これにより AMEX は、クローズドループという評判を大きく上回る日本でのイシュアー・パートナーシップのフットプリントを得ている。日本の「AMEX カード」の多くが、実際には Persona JV の下で Saison が発行する AMEX ブランドカードであり、JCB のパートナーイシュアーモデルに構造的に近い提携イシュアーの仕組みであることを意味する。
2. **AMEX-JCB 相互受入**: AMEX カードは、AMEX-JCB 相互受入提携を通じて、日本の JCB 獲得加盟店で受け入れられる。これにより AMEX は、それらの加盟店を自ら直接獲得せずに、JCB のより広い日本受入範囲を利用できる。

AMEX の日本での特徴的な位置づけは、**クローズドループのプレミアム中核 + Persona パートナー発行 + JCB 相互受入**である。その結果、AMEX は多くの他市場における AMEX スキームより、日本でかなり広いフットプリントを持つ3者間スキームになっている。AMEX の agentic commerce ロードマップ (SafeKey 適応) は、Visa / Mastercard の公開情報に比べて開発・開示の段階が早い。

### JCB (JCB Co Ltd + JCB International Co Ltd)

JCB は、**ハイブリッドなイシュアーライセンス層を持つ3者間ブランドモデル**を運営しており、詳細は [[payments/jcb-three-party-operating-model|JCB three-party operating model]] で扱う。[[JapanFG/jcb|JCB Co Ltd]] (日本国内ブランド + 主要アクワイアラ + イシュアー + イシュアーライセンサー) と [[JapanFG/jcb-international|JCB International]] (国際アクワイアラ提携 + クロスボーダー精算) の法人分割は、JCB の事業モデルの基礎である。日本国内の約 30 社のパートナーイシュアー・フットプリント (MUFG NICOS、AEON、Rakuten Card、Saison、JACCS、Orico、JR View、地域銀行、Lifecard など) により、JCB は AMEX の Persona アンカー型パートナー発行より大きな日本のイシュアーリーチを持つ。

JCB の特徴的な日本での位置づけは、**日本発の唯一の国際ブランド**、強い国内プレミアム受入、米国受入のための **Discover Global Network 提携**、韓国 / 台湾 / 東南アジアでの地域アクワイアラ提携である。JCB は、日本の大手ブランドとして初めてイシュアー / アクワイアラ手数料配分率を公表した (2023-06-01 METI / JFTC 共同リリース)。これは3者間モデルの下で、JCB が加盟店手数料分割の両端を管理していることを反映している。

## イシュアー / アクワイアラ横断保有マトリクス

日本の主要カードイシュアーの多くは、複数ブランドを発行している。この横断保有パターンは、日本のイシュアー競争が**ブランドで分断されるのではなく、ブランド重複型**である理由を理解するうえで構造的に重要である。

| イシュアー | Visa 発行 | Mastercard 発行 | AMEX 発行 | JCB 発行 | 注記 |
|---|---|---|---|---|---|
| [[JapanFG/mufg-nicos\|MUFG NICOS]] | あり (アンカー) | あり (アンカー) | あり (一部提携) | あり (アンカーパートナー) | デュアル / トリプルブランドカードが一般的 |
| [[JapanFG/smbc-card\|SMBC Card]] | あり (アンカー) | あり (アンカー) | あり (一部提携) | あり (一部) | SMBC Olive カードはトリプルブランド |
| [[JapanFG/credit-saison\|Credit Saison]] | あり | あり | あり (Persona JV) | あり | 4ブランドのイシュアー・フットプリント |
| [[JapanFG/rakuten-card\|Rakuten Card]] | あり | あり | あり (Rakuten Premium Card) | あり | 消費者基盤上の4ブランド |
| [[JapanFG/aeon-financial-service\|AEON Financial Service]] | あり | あり | あり (一部) | あり (アンカーパートナー) | AEON CARD Select の複数ブランド |
| [[JapanFG/jaccs\|JACCS]] | あり | あり | あり (一部) | あり | 複数ブランド提携カード |
| [[JapanFG/orico\|Orico]] | あり | あり | あり (一部) | あり | 複数ブランド提携カード |
| [[JapanFG/epos-card\|Epos Card]] | あり (アンカー) | — | — | — | Visa 単一ブランド提携カード |
| [[JapanFG/paypay-card\|PayPay Card]] | あり (アンカー) | あり | — | あり | PayPay アンカー型イシュアー |
| View Card (JR East) | あり | あり | — | あり (VIEW JCB) | JR チャネルカード |

このパターンは、**消費者・イシュアーレベルでは、ブランド選択が通常、イシュアー間の競争選択ではなく商品ライン上の選択である**ことを示す。消費者が MUFG-NICOS カードを選ぶとき、Visa、Mastercard、JCB は同じイシュアーのブランド変種であり、異なるイシュアー間の選択ではない。

## 日本加盟店での受入シェア (参考)

Cashless Promotion Council と METI の公開データは、このセクションが本来必要とする精度でブランド別受入シェアを継続的に分解していない。権威あるブランド別シェア数値が公表されていないため、下表のシェア特性欄は `n.d.` (データ未公開) とし、定性的な受入範囲の観察のみを残す。

| ブランド | 日本加盟店での受入範囲 | 参考シェア特性 | 注記 |
|---|---|---|---|
| Visa | 最大の国際ブランド・フットプリント。チェーン加盟店とオンラインでほぼ普遍的 | n.d. (ブランド別シェア未公表) | ブランド受入では普遍的 |
| Mastercard | チェーン加盟店とオンラインで Visa にほぼ並ぶ | n.d. (ブランド別シェア未公表) | ブランド受入では普遍的 |
| AMEX | マイクロ加盟店では狭い。JCB 相互受入により広がる | n.d. (ブランド別シェア未公表) | プレミアム寄りの受入 |
| JCB | 最大の国内ブランド・フットプリント。大手加盟店で強く、主要小売では普遍的 | n.d. (ブランド別シェア未公表) | 国内主導の受入 |

検証可能なデータソースは、METI 2025  キャッシュレスデータリリース (https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html)、Cashless Promotion Council のコード決済調査 (https://paymentsjapan.or.jp/category/publications/)、Japan Credit Association (https://www.j-credit.or.jp/) の業界統計である。

## QR / コード決済オーバーレイ戦略比較

日本でカード決済と並んで広がった QR / コード決済レーン ([[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]] で扱う) に4ブランドが参加するか、どう参加するかは大きく異なる。

| ブランド | Push-to-card / 即時決済商品 | コード決済の直接商品 | ウォレット発行カードの経済性 |
|---|---|---|---|
| Visa | **Visa Direct** (push-to-card、個人間、企業から消費者、クロスボーダー) | 直接商品なし。Visa カードは PayPay / Rakuten / 各ウォレットの資金源として利用される | 普遍的 — 日本の多くのウォレットが Visa カードチャージを受け入れる |
| Mastercard | **Mastercard Send** (Visa Direct と機能的に並行) | 直接商品なし。Mastercard カードは日本のウォレットの資金源として利用される | 普遍的 — 日本の多くのウォレットが Mastercard カードチャージを受け入れる |
| AMEX | AMEX Send (push-to-card、日本でのフットプリントはより限定的) | 直接商品なし。AMEX カードを受け入れる日本のウォレットは V/MC より限定的 | 狭い — MDR 経済性により AMEX カードチャージを受け入れる日本のウォレットは少ない |
| JCB | 一部市場の J-RPay / 国内オーバーレイ商品 | 限定的。一部市場に JCB ブランドのウォレット | 普遍的 — 日本の多くのウォレットが JCB カードチャージを受け入れる |

構造的には、**Visa Direct と Mastercard Send が、主要なグローバル push-to-card レール**であり、日本のウォレットや送金商品はこれらへのルーティングを増やしている。AMEX Send は機能的に類似するが、日本でのフットプリントは狭い。JCB は同規模の直接競合 push-to-card 商品を構築しておらず、JCB の国内日本フォーカスを反映している。

## エージェント決済オーバーレイのロードマップ比較

2025-2026  に出現した AI エージェント起点コマース (決済側では [[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] で扱う) は、4ブランドが自社のトークン化 / 認証 / 承認インフラを agentic payments の標準レールとして位置づけるための並行競争を生んでいる。

| ブランド | Agentic-pay 商品 / フレームワーク | トークン化レイヤー | 認証の適応 |
|---|---|---|---|
| Visa | **Visa Intelligent Commerce** / **Visa Agentic Commerce** | Visa Token Service (ネットワークトークン、単回利用トークン) | Visa Secure (3-DS 2.x) を agent フロー向けの委任認証で拡張 |
| Mastercard | **Mastercard Agent Pay** / **Mastercard Agentic Tokens** | Mastercard Digital Enablement Service (MDES) | Mastercard Identity Check (3-DS 2.x) を agent フロー向けの委任認証で拡張 |
| AMEX | Agentic-pay ロードマップは公開情報が少ない | AMEX 内部トークン化 | AMEX SafeKey 3-DS を agent フロー向けに適応 |
| JCB | Agentic-pay ロードマップは公開情報が少ない。パートナーイシュアー依存 | J/Secure トークン化 | J/Secure 3-DS を agent フロー向けに適応 |

Visa と Mastercard は agentic-pay インフラについて最も進んだ公開側の開示を持つ。AMEX と JCB はロードマップ開示の段階がより早い。日本国内の agentic commerce 市場が Visa / Mastercard のグローバルレールへ収れんするのか、それともウォレット・PSP レイヤーを通じた日本固有のオーバーレイを発展させるのかは未解決の問いである。[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]] を参照。

## 銀行 JV・提携構造比較

4ブランドは、日本の銀行および銀行 FG と構造的に異なる関係を持つ。

| ブランド | 銀行 FG アンカー関係 | JV / 提携構造 | 流通チャネル |
|---|---|---|---|
| Visa | MUFG ([[JapanFG/mufg-nicos\|MUFG NICOS]] 経由)、SMFG ([[JapanFG/smbc-card\|SMBC Card]] + SMBC GMO PAYMENT JV 経由) | ライセンス関係。資本 JV なし | 銀行 FG カードライン + 複数ブランド提携カード |
| Mastercard | Visa と同じ銀行 FG アンカー | ライセンス関係。資本 JV なし | 銀行 FG カードライン + 複数ブランド提携カード |
| AMEX | **Saison Persona JV** ([[JapanFG/credit-saison\|Credit Saison]]、2000 から) | 収益分配を伴うイシュアー提携 JV | Persona 発行カード + AMEX 直接発行プレミアムカード |
| JCB | JCB Co Ltd の株主構造には MUFG、SMFG、Mizuho、Nippon Life、Tokio Marine、NTT Data が主要株主として含まれる | ブランド兼株主ハイブリッド | JCB 直接 + 30+ パートナーイシュアーカード |

**AMEX-Saison Persona** 提携と **JCB の株主構造**は、銀行関係の中で最も構造的に特徴的な取り決めである。AMEX は Persona の下で広い日本発行を Saison に依存することで、純粋なクローズドループからハイブリッドスキームへ実質的に転換している。JCB の銀行 FG 株主構造は、国際ブランドが再現していない日本の銀行セクターとの構造的整合を JCB に与えている。

## 手数料開示と JFTC 圧力の着地点

2022-04-08 の JFTC クレジットカード加盟店手数料報告書と、2023-06-01 の JCB 手数料開示に関する METI / JFTC 共同リリースは、日本のカードブランド事業経済性に対する重要な継続的規制圧力を示している。

| ブランド | 手数料開示状況 (日本、2026-05) | JFTC との関係 |
|---|---|---|
| Visa | 日本標準インターチェンジを 2023-08  に公表 (Payments Japan ロードマップ)。アクワイアラ別分割は未開示 | ライセンス関係により中央開示は限定される |
| Mastercard | 日本標準インターチェンジを 2023-08  に公表 (Payments Japan ロードマップ)。アクワイアラ別分割は未開示 | ライセンス関係により中央開示は限定される |
| AMEX | クローズドループ加盟店割引料率: 別個開示なし。Persona 側配分: 内部 | クローズドループにより取引ごとのインターチェンジに関する JFTC の射程は狭まる |
| JCB | イシュアー / アクワイアラ手数料配分を 2023-06  に開示 (日本大手ブランド初) | 直接関与。開示の先行者 |

JCB が手数料開示で先行したことは、3者間モデルを反映している。JCB Co Ltd は手数料分割の両端を管理しているため単独で開示できるが、Visa と Mastercard は複数のライセンス済みアクワイアラとの調整が必要になる (構造的説明は [[payments/jcb-three-party-operating-model|JCB three-party operating model]] 参照)。

## 他のマトリクスとの相互参照

- vs **[[payments/jcb-three-party-operating-model|JCB three-party operating model]]**: そのエントリは JCB の3者間アーキテクチャを深掘りする。本マトリクスは JCB をブランド横断文脈に置く。
- vs **[[payments/japan-card-issuer-acquirer-processor-split|card issuer / acquirer / processor split]]**: そのエントリは役割分離フレームワークを定義する。本マトリクスは各ブランドがどの役割を結合または分離するかを名指しする。
- vs **[[payments/japan-payment-scheme-economics-matrix|Japan payment scheme economics matrix]]**: そのマトリクスはカード vs コード vs A2A vs プリペイドをスキームクラスレベルで扱う。本マトリクスはカードクラスを4ブランド事業者に分解する。
- vs **[[payments/japan-interchange-and-merchant-fee-stack|Japan interchange and merchant fee stack]]**: そのエントリはインターチェンジ / スキーム / アクワイアラ手数料構造を扱う。本マトリクスはブランド別手数料アーキテクチャを対応づける。
- vs **[[payments/japan-merchant-psp-competitive-scorecard|Japan merchant PSP competitive scorecard]]**: そのマトリクスは加盟店とブランドの間にある PSP / ゲートウェイ層を扱う。本マトリクスは PSP の上にあるブランド層を扱う。
- vs **[[payments/japan-jcb-issuer-ecosystem-positioning-matrix|Japan JCB issuer ecosystem positioning matrix]]**: そのマトリクスは JCB パートナーイシュアー集合を分解する。本マトリクスはその周囲にブランド比較フレームを置く。

## 関連項目

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
- [[JapanFG/visa-worldwide-japan]]
- [[JapanFG/mastercard-japan]]
- [[JapanFG/american-express-international-japan]]
- [[JapanFG/jcb]]
- [[JapanFG/jcb-international]]
- [[JapanFG/mufg-nicos]]
- [[JapanFG/smbc-card]]
- [[JapanFG/credit-saison]]
- [[JapanFG/rakuten-card]]
- [[JapanFG/aeon-financial-service]]
- [[JapanFG/jaccs]]
- [[JapanFG/orico]]
- [[JapanFG/epos-card]]
- [[JapanFG/paypay-card]]
- [[INDEX|FinWiki index]]

## 出典

- Visa Japan 企業サイト: https://www.visa.co.jp/
- Visa Japan 概要ページ: https://www.visa.co.jp/about-visa.html
- Mastercard Japan 企業サイト: https://www.mastercard.co.jp/
- Mastercard Japan 概要ページ: https://www.mastercard.co.jp/ja-jp/business/about-mastercard.html
- American Express Japan: https://www.americanexpress.com/jp/
- American Express Japan 企業情報: https://www.americanexpress.com/ja-jp/company/
- JCB グローバルサイト (日本語): https://www.global.jcb/ja/
- JCB 事業領域 / ブランド: https://www.global.jcb/ja/about-us/business-area/brand/
- JCB Japan: https://www.jcb.co.jp/
- Credit Saison Persona 提携: https://www.saisoncard.co.jp/company/persona/
- MUFG NICOS 企業情報: https://www.cr.mufg.jp/corporate/
- JCB 手数料開示に関する METI 2023-06-01 リリース: https://www.meti.go.jp/press/2023/06/20230601003/20230601003.html
- METI 2025  キャッシュレス決済比率リリース: https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html
- METI キャッシュレス政策ポータル: https://www.meti.go.jp/policy/mono_info_service/cashless/index.html
- Payments Japan Association 2023  キャッシュレスロードマップ: https://paymentsjapan.or.jp/wp-content/uploads/2023/08/roadmap2023.pdf
- Payments Japan Association 公表資料: https://paymentsjapan.or.jp/category/publications/
- Japan Credit Association: https://www.j-credit.or.jp/
- JFTC 2022-04-08 クレジットカード加盟店手数料報告書: https://www.jftc.go.jp/houdou/pressrelease/2022/apr/220408.html
