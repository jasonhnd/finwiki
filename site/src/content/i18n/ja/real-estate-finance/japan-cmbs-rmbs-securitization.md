---
source: real-estate-finance/japan-cmbs-rmbs-securitization
source_hash: 369b1796602442cc
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "日本 CMBS および RMBS 証券化市場"
translated_at: 2026-06-26T08:28:53.971Z
---

# 日本 CMBS および RMBS 証券化市場

## TL;DR

日本のモーゲージ担保証券化市場は、2 つのストランドにきれいに分かれる。RMBS (住宅モーゲージ担保証券) は、民間銀行チャネルを通じて組成されたフラット 35  固定金利住宅ローンを裏付けとする [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency (JHF)]] の月次 Monthly Pass-Through MBS 発行が支配的であり、これにメガバンクおよび信託銀行のオリジネーターによる小規模な民間 RMBS ストランドが加わる。CMBS (商業モーゲージ担保証券) は構造的により小規模で循環性が高く — シングルボロワー CMBS が 2008  後の市場を支配しており、日本の不動産に対するノンリコース CMBS ローンが実質的なライトダウンを被った 2008-2010  のディストレス・サイクルの後、コンデュイット CMBS は事実上休止している。アレンジャー・フランチャイズは、メガバンクの証券子会社、[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]]、[[trust-banks/sumitomo-mitsui-trust|SMTB]]、[[trust-banks/mizuho-trust-bank|Mizuho Trust]] の信託銀行証券化部門、加えて外資系ハウスの残存プレゼンスに集中している。格付カバレッジは国内機関 [[financial-regulators/jcr|JCR]] と [[financial-regulators/rating-and-investment|R&I]] が支配的で、[[JapanFG/sp-global-ratings-japan|S&P]] と [[JapanFG/moodys-japan|Moody's]] がシニアトランシェにクロスボーダー投資家が要求するグローバルスケール格付を供給する。

## Wiki ルート本項目は [[real-estate-finance/INDEX|real-estate-finance index]] の下に位置し、日本の不動産ファイナンスの証券化サイドをアンカーする。上場エクイティビークルについては [[real-estate-finance/j-reit-market-overview|J-REIT market overview]] と、ウェアハウス / 民間ビークルレイヤーについては [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK bond real-estate SPV]] と、証券化前のウェアハウジングレイヤーについては [[real-estate-finance/real-estate-bridge-fund-japan|real-estate bridge fund]] と、シニア LTV とトランシェの厚みを駆動する引受キャップレート入力については [[real-estate-finance/japan-real-estate-appraisal-methodology|Japan real-estate appraisal methodology]] と併せて読むこと。公的セクター RMBS エンジンについては [[policy-finance/japan-housing-finance-agency|JHF]] と、SPV のキャッシュフローを運行するトラスティ・インフラについては [[banking/japan-master-trust-and-custody-bank-landscape|Japan master-trust and カストディ bank landscape]] と、資産管理と証券化トラスティーシップの間の運営上の分担については [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] とペアにすること。クロスドメインのアンカーは [[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] である — 生命保険会社は、資産クラスのデュレーションと JGB に対するイールドピックアップがクレジットカーブの作業を補償するため、シニア RMBS トランシェとシニア CMBS ノートにとって最大の円サイド機関投資家バイヤーである。

### 非常に異なるスケールの 2 つのストランド桁数のみ;粒度の細かい年次数値は JSDA 証券化市場の動向調査 (月次/年次の Excel ファイル) と JHF MBS の開示に存在し、いずれも Sources に引用されている。JHF MBS だけで FY2017  末時点で累計発行 ¥26.3  兆 / 残高 ¥12.7  兆であり、RMBS 残高は 2016  頃に ~¥15  兆であった — 以下のレンジを括る。

| Strand | Annual issuance (rough public-source order of magnitude) | Outstanding stock (rough public-source order of magnitude) | Dominant 発行会社 model |
|---|---|---|---|
| **RMBS** | ¥1.5-3  兆/年 (JHF MBS ≈ ¥2-3  兆/年) | ¥10-15  兆 | JHF Monthly Pass-Through MBS が支配的;民間 RMBS は全体のごく一部 |
| **CMBS** | アクティブな年で年間サブ ¥500  億;休止年はほぼゼロ | ¥500  億-¥1  兆 | シングルボロワー CMBS が 2010 後支配的;コンデュイット CMBS は事実上ゼロ |

RMBS-CMBS の非対称性は構造的である。日本の住宅金融システムは、固定金利モーゲージ組成の大きな割合をフラット 35,  を通じて流し、これは JHF によってほぼ月次の頻度で買い取られ証券化される。これに対し CMBS は、(a) [[real-estate-finance/j-reit-market-overview|J-REIT]] の公的エクイティファイナンス、(b) 銀行バランスシートのノンリコースローン、(c) 民間ファンドのデットと競合し — これらすべてが、そうでなければ公的 CMBS ディールに流れるであろう機関投資家グレードの商業不動産の大半を吸収する。

### 歴史的アーク

- **1998-2007:** 両ストランドの構築。SPC 法 (1998)、信託法改革、資産流動化法 が SPV ベース証券化の法的足場を作った。コンデュイット CMBS 発行は、多数のボロワーによる分散プールとともに 2000 年代半ばまでスケールした。
- **2008-2010:** 世界金融危機は、他のどの日本のストラクチャードファイナンス資産クラスよりも日本 CMBS を激しく直撃した。多くのコンデュイット CMBS ディールがテール・トランシェのライトダウンを被った;バルーン満期のノンリコース CMBS ローンでのリファイナンス失敗が、投げ売り的な不動産処分を引き起こした。コンデュイット CMBS の投資家基盤は事実上撤退した。

### JHF Monthly Pass-Through MBS

JHF Monthly Pass-Through MBS はアンカー商品である。公開ソースの構造的特徴:

| Feature | JHF MBS reading |
|---|---|
| 発行体 | [[policy-finance/japan-housing-finance-agency|Japan Housing Finance Agency]] |
| 担保 | フラット 35  固定金利住宅ローン、民間金融機関により組成され JHF が買い取り |
| 構造 | パススルー;クレジットのためのトランシング無しの月次元本 + 利息パススルー |
| 信用補完 | 暗黙的 / 明示的な政策銀行の信用支援、加えて 独立行政法人 としての JHF 自身の信用力 |
| 決済 | [[securities/japan-securities-depository-center|JASDEC]] を介したブックエントリー |

### 民間 RMBS

民間 RMBS 発行は、自己勘定の固定または変動金利住宅ローンポートフォリオの一部を証券化するメガバンクおよび信託銀行のオリジネーターから生じる。公開ソースの特徴:

- シニア / メザニン / 劣後のトランシング、オリジネーターは通常、リスクリテンション目的で垂直または水平のスライスを保持する。
- プールは通常、シーズニングされた住宅ローンの静的または準静的なポートフォリオ。
- シニアトランシェは [[financial-regulators/jcr|JCR]] と [[financial-regulators/rating-and-investment|R&I]] により投資適格に格付され、AAA トランシェには [[JapanFG/sp-global-ratings-japan|S&P]] または [[JapanFG/moodys-japan|Moody's]] のクロスボーダー投資家格付。
- プールファクターの償却は、予定償却に加えて緩やかな期限前償還を追う。

### RMBS の格付機関基準

| Element | Criteria emphasis |
|---|---|
| プールのシーズニング | 古いローン → 実証された支払行動 → より低い期待損失 |
| 組成時 LTV | より低い LTV → より多くのエクイティバッファー → デフォルト時のより低い期待損失 |
| DTI | 所得対債務 → 支払能力メトリック |
| 地理的集中 | 東京 / 大阪の集中対 地域分散 |
| オリジネーター品質 | メガバンク / [[regional-banks/japan-post-bank|Japan Post Bank]] / 地方銀行対 ノンバンクオリジネーター |
| ローン商品 | フラット 35  (JHF 買取) 対通常の銀行住宅ローン対 アパートローン (1 棟アパート) |
| サービシング | マスターサービサー / バックアップサービサーのセットアップ |
| マクロオーバーレイ | 失業、世帯所得、住宅価格のシナリオ |

### 2010

 後のシングルボロワー CMBS

2008,  後、コンデュイット CMBS モデルは事実上日本から撤退し、シングルボロワー CMBS に置き換えられた。公開ソースの構造的特徴:

| Feature | Single-borrower CMBS reading |
|---|---|
| ボロワー | 1 件または少数の関連物件を保有する単一物件所有 SPV (しばしば [[real-estate-finance/gk-tk-bond-real-estate-spv|GK-TK SPV]] または TMK) |
| ローン | 物件を担保とするノンリコースローン |
| 証券化 | ローンを発行 SPV トラストに移転;CMBS ノートをトランシェで発行 |
| トランシェ | シニア / メザニン / 劣後、LTV ベースの劣後カリブレーション付き |
| 満期 | 通常 5-7 年、満期時のリファイナンスリスクあり |
| 格付 | シニアトランシェは [[financial-regulators/jcr|JCR]] と [[financial-regulators/rating-and-investment|R&I]] により IG;AAA トランシェはクロスボーダー投資家向けに [[JapanFG/sp-global-ratings-japan|S&P]] または [[JapanFG/moodys-japan|Moody's]] のデュアル格付を持つ場合あり |
| 物件タイプ | オフィス (東京グレード A)、物流、ホテル、小売、住宅アパートブロック;開発リスク資産は稀 |
| トラスティー | 発行 SPV の信託銀行トラスティー |

### コンデュイット CMBS — 休止中コンデュイット CMBS モデル (マルチローンプール、分散したボロワー基盤、マスターサービサー業務) は、2008-2010  のディストレス・サイクルの後、日本では事実上休止している。なぜかについての公開ソースの読み:

2. 2013  後の円カーブの圧縮が、銀行バランスシートのノンリコースローンを CMBS ファイナンスのローンより安くし、コンデュイット CMBS 組成を駆動したスプレッド・アービトラージを取り除いた。
3. 2010  後に [[real-estate-finance/j-reit-market-overview|J-REIT]] のエクイティが急速にスケールし、コンデュイット CMBS のボロワー基盤となっていたであろう機関投資家グレードの商業物件の多くを吸収した。

### CMBS の格付機関基準

| Element | Criteria emphasis |
|---|---|
| 鑑定 | DCF + 直接還元 + 比較法を含む [[real-estate-finance/japan-real-estate-appraisal-methodology|JREI-compliant appraisal]] |
| キャップレート | [[real-estate-finance/japan-real-estate-appraisal-methodology|JREI cap-rate survey]] および最近の取引証拠に対してストレステスト |
| DSCR | デットサービスカバレッジレシオ、リファイナンスリスクシナリオ向けにストレステスト |
| テナント集中 | シングルテナント対 マルチテナント;リース満了プロファイル;テナント信用 |
| 物件タイプ | オフィス対 物流対 ホテル対 小売対 住宅 — 格付機関ごとに異なる損失前提 |
| 地理的集中 | 東京 CBD / 大阪 / 地方 |
| スポンサー品質 | スポンサー SPV のエクイティ層、スポンサーの実績、スポンサーのリファイナンス能力 |
| リファイナンスリスク | キャップレートとレートカーブのシフトの下での満期バルーンのリファイナンスシナリオ |

### RMBS オリジネーター・ランドスケープ

| Originator | RMBS role |
|---|---|
| [[policy-finance/japan-housing-finance-agency|JHF]] | フラット 35  買取 + Monthly Pass-Through MBS を介したアンカー RMBS 発行体 |
| メガバンク | JHF へのフラット 35  の直接オリジネーター;自己ポートフォリオ循環のための自前の民間 RMBS 発行体 |
| 地方銀行 | フラット 35  組成パートナー;自己ポートフォリオのための時折の民間 RMBS 発行体 |
| 信託銀行 | 自己ポートフォリオの住宅ローンのオリジネーター;信託銀行は JHF MBS と民間 RMBS の両方のトラスティーとしても機能 |
| ノンバンク住宅ローンオリジネーター | 銀行チャネルに比して限定的な規模 |

### CMBS オリジネーター・ランドスケープ

| Originator | CMBS role |
|---|---|
| メガバンクの法人不動産ファイナンスデスク | その後証券化されるノンリコースローンの組成 |
| 信託銀行の不動産ファイナンス部門 | 組成 + アレンジャーの組み合わせ |
| 外資系銀行の日本支店不動産ファイナンスデスク | クロスボーダー投資家基盤向けの組成;外資系銀行撤退サイクル後に縮小 |
| メガバンクの証券子会社 | 発行におけるアレンジャー / ディーラーの役割 |

### アレンジャー / ディーラー・フランチャイズ日本 CMBS / 民間 RMBS におけるアレンジャー / ディーラー・フランチャイズは集中している:

| Dealer | Franchise reading |
|---|---|
| [[securities-firms/mufg-morgan-stanley-securities|Mitsubishi UFJ Morgan Stanley Securities]] | MUFG サイド;[[trust-banks/mitsubishi-ufj-trust-bank|MUFG Trust]] を介した深い信託銀行リンケージ |
| [[securities-firms/smbc-nikko-securities|SMBC Nikko Securities]] | SMBC サイド;[[trust-banks/sumitomo-mitsui-trust|SMTB]] とのリンケージはグループ内ではなくグループ横断 |
| [[securities-firms/mizuho-securities|Mizuho Securities]] | みずほサイド;[[trust-banks/mizuho-trust-bank|Mizuho Trust]] を介した深い信託銀行リンケージ |

### 信託銀行トラスティーシップの経済性信託銀行トラスティーシップ・レイヤーは構造的に重要である。なぜなら日本の証券化 SPV は通常、発行 SPV への直接的なローン資産移転ではなく 信託受益権 (beneficial-trust-interest) を用いるからである。信託銀行は 信託契約 の下で原資産 (ローンまたは物件) を保有し、移転されトランシングされるのはその受益権である。これは、日本 CMBS / RMBS における信託銀行フランチャイズが、[[trust-banks/master-trust-bank|MTBJ]] や [[trust-banks/custody-bank|CBJ]] のようなカストディ専業の信託銀行ではなく、メガバンクグループの信託銀行にある理由の一つである — 証券化トラスティーシップは資産管理ユーティリティ業務ではなく、手数料を伴うフロントオフィス業務だからである。運営上の分担については [[banking/trust-bank-custody-operating-comparison|trust-bank カストディ operating comparison]] を参照。

## 5. 格付機関ランドスケープ

| Rating agency | JP CMBS / RMBS role |
|---|---|
| [[JapanFG/sp-global-ratings-japan|S&P Global Ratings Japan]] | グローバルスケール基準;クロスボーダー投資家ターゲットの AAA トランシェに必要 |
| [[JapanFG/moodys-japan|Moody's Japan]] | グローバルスケール基準;S&P と同じクロスボーダーユースケース |
| Fitch Japan | n.d. — 公開された Fitch JP CMBS / RMBS 格付リストは見当たらない;JP ストラクチャードファイナンスのカバレッジは JCR / R&I に比して小さい |

### ドメスティックスケール対 グローバルスケール

| Aspect | Domestic-scale rating | Global-scale rating |
|---|---|---|
| 参照ユニバース | JP 発行体 / 商品ユニバース | グローバル発行体 / 商品ユニバース |
| ソブリンキャップ | 事実上 JGB シーリング (AA+ / AAA スケール) | グローバルなソブリン比較可能性 |
| 典型的な用途 | 円投資家のリミット管理;JBA / 投信協会報告 | クロスボーダー投資家のリミット管理;バーゼルリスクウェイトフロア |
| JP CMBS / RMBS のカバレッジ | 高い (JCR + R&I が支配的) | 選択的 (シニアトランシェのみ、かつクロスボーダー流通がコストを正当化する場合のみ) |

### RMBS 投資家基盤

| Investor type | Demand reading |
|---|---|
| 生命保険会社 | アンカーバイヤー — JHF MBS とシニア民間 RMBS は ALM ブックの円ロング資産バケットによく収まる;[[insurance/japan-life-insurance-alm-overview|Japan life insurance ALM overview]] を参照 |
| メガバンク (自己勘定) | 自前のトレジャリーポートフォリオ向けバイヤー;JHF MBS のリスクウェイト処理が有利 |
| 地方銀行 | 円ブックのトレジャリー利回り向上向けバイヤー |
| アセットマネージャー | 円スプレッド商品を狙う債券マンデート向けバイヤー |

### CMBS 投資家基盤

| Investor type | Demand reading |
|---|---|
| 生命保険会社 | シニアトランシェ向けバイヤー;メザニンはクレジット資産スリーブに収まる |
| 地方銀行 | シニアトランシェ向けの選択的バイヤー;メザニンの選好は様々 |
| アセットマネージャー | クレジットマンデートの分散向けバイヤー |
| 外国人投資家 | 選択的 — 通常、グローバルスケール格付付きのクロスボーダーターゲット発行の場合のみ |

## Related

- [[real-estate-finance/INDEX]]
- [[real-estate-finance/j-reit-market-overview]]
- [[real-estate-finance/top-10-j-reit-overview-matrix]]
- [[real-estate-finance/private-reit-japan-vs-listed-j-reit-comparison]]
- [[real-estate-finance/gk-tk-bond-real-estate-spv]]
- [[real-estate-finance/real-estate-bridge-fund-japan]]
- [[real-estate-finance/japan-real-estate-appraisal-methodology]]
- [[real-estate-finance/j-reit-foreign-investor-ownership]]
- [[policy-finance/japan-housing-finance-agency]]
- [[policy-finance/INDEX]]
- [[banking/japan-master-trust-and-custody-bank-landscape]]
- [[banking/trust-bank-custody-operating-comparison]]
- [[banking/master-trust-bank-operating-model]]
- [[banking/INDEX]]
- [[insurance/japan-life-insurance-alm-overview]]
- [[insurance/INDEX]]
- [[trust-banks/mitsubishi-ufj-trust-bank]]
- [[trust-banks/sumitomo-mitsui-trust]]
- [[trust-banks/mizuho-trust-bank]]
- [[financial-regulators/jcr]]
- [[financial-regulators/rating-and-investment]]
- [[JapanFG/sp-global-ratings-japan]]
- [[JapanFG/moodys-japan]]
- [[securities/japan-securities-depository-center]]
- [[finance/INDEX]]

## Sources

- ARES (不動産証券化協会): 日本の不動産証券化市場サマリー統計。
- JPX: 証券化商品の開示サーフェス。
- JSDA (日本証券業協会) 証券化市場の動向調査: 原資産タイプ別の年次証券化発行 — https://www.jsda.or.jp/shiryoshitsu/toukei/doukou/index.html
- 住宅金融支援機構: 機関および Monthly Pass-Through MBS の開示 — https://www.jhf.go.jp/about/investor/shisan_tanpo/index.html (JHF MBS ≈ ¥26.3  兆 累計発行 / ¥12.7  兆 残高、FY2017  末時点)。
- JCR (日本格付研究所): ストラクチャードファイナンス格付基準と格付アクション。
- R&I (格付投資情報センター): ストラクチャードファイナンス格付基準。
- S&P Global Ratings: クロスボーダー・ストラクチャードファイナンス基準。
- Moody's: クロスボーダー・ストラクチャードファイナンス基準。
- BoJ: 証券化ストックに関連する集計資金フロー統計。
