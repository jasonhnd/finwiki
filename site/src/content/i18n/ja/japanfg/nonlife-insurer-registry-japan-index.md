---
source: japanfg/nonlife-insurer-registry-japan-index
source_hash: a3f488b602f6d86f
lang: ja
status: machine
fidelity: ok
title: "日本の損害保険会社レジストリ索引"
translated_at: 2026-06-02T14:54:39.083Z
---

# 日本の損害保険会社レジストリ索引

## 要約

FSA の損害保険会社免許一覧（損害保険会社免許一覧、songai.pdf）は、日本の保険業法に基づいて損害保険を引き受ける免許を持つ全主体の単一レジストリ面である。このページはそのレジストリのルーティング面であり、読者に FSA ワークブックの生データ解釈を強いるのではなく、所有クラスター（3社 / ダイレクト / 専門 / 外資系 / 再保険）別に整理する。構造は [[JapanFG/trust-companies-japan-index]] と [[JapanFG/foreign-bank-branches-japan-index]] を反映する。

単独の保険会社ページは [[JapanFG/INDEX|JapanFG]] に置く。概念ページ（巨大災害リスク、代理店チャネル、ソルベンシー）は [[insurance/INDEX|insurance]] に置く。この索引はその中間にあり、双方へルーティングする。

## ウィキ上の位置づけ

この項目は [[JapanFG/INDEX|JapanFG index]] の下にあり、[[JapanFG/trust-companies-japan-index|trust companies registry index]] と [[JapanFG/foreign-bank-branches-japan-index|foreign bank branches registry index]] に対応する損害保険側の索引である。持株会社比較レイヤーとして [[insurance/japan-nonlife-big-three|Japan non-life big three]]、リスク出再レイヤーとして [[insurance/natcat-reinsurance-japan|nat-cat reinsurance in Japan]]、広い運営モデルマップとして [[insurance/INDEX|insurance index]] を併読する。資本十分性の読み替えは [[insurance/economic-value-based-solvency|economic value-based solvency]] と [[insurance/global-solvency-framework-comparison-matrix|global solvency framework comparison matrix]] を通す。外国再保険会社のみの項目は、姉妹ページの [[insurance/foreign-reinsurer-japan-landscape|foreign reinsurer Japan landscape]] と [[insurance/lloyds-japan-syndicate-operating-model|Lloyd's Japan syndicate operating model]] にまとめる。

## 対象範囲

| 境界 | 扱い |
|---|---|
| 元受損害保険会社（元受損保） | この索引に掲載する。明確な戦略、チャネル、資本のストーリーがある場合は単独の JapanFG ページへ昇格させる。 |
| 再保険会社（再保険専業） | ここでは「再保険」クラスターに掲載し、出再フロー分析は [[insurance/foreign-reinsurer-japan-landscape]] に置く。 |
| Lloyd's シンジケート市場 | Lloyd's Japan の一行として掲載する。マーケットプレイス構造の詳細は [[insurance/lloyds-japan-syndicate-operating-model]] とエンティティページ [[JapanFG/lloyd-japan]] に置く。 |
| キャプティブ保険会社 | この一覧には載せない。日本にはオンショアのキャプティブ免許がないため、キャプティブは [[insurance/captive-insurance-japan-market]] に置く。 |
| P&I 相互保険（船主相互保険組合） | FSA の損害保険一覧には載らず、船主相互保険組合法に基づく。[[JapanFG/japan-pi-club|Japan P&I Club]] と [[insurance/marine-insurance-and-pi-cover-market]] を参照する。 |
| 持株会社 | この一覧には載せない。[[JapanFG/tokio-marine|Tokio Marine Holdings]]、[[JapanFG/msad|MS&AD Holdings]]、[[JapanFG/sompo|Sompo Holdings]] などを参照する。 |
| 生命保険会社 | この一覧には載せない。別の FSA 登録簿（seimei.pdf）を使う。[[insurance/japan-life-insurance-big-four]] を参照する。 |
| 保険代理店 / ブローカー | 別の免許・登録（募集人 / 仲立人）を使う。[[insurance/insurance-agency-and-brokerage-japan]] を参照する。 |

## レジストリのスナップショット

| 指標 | 読み方 |
|---|---:|
| FSA as-of date | 2026-04-01 ^[extracted] |
| Domestic non-life insurance companies (内国損害保険会社) | ~30 ^[ambiguous — number shifts as direct / specialty / holding-company subsidiaries are added or merged] |
| Foreign non-life insurance companies (外国損害保険会社等) | ~20 ^[ambiguous — list expands with foreign reinsurer branches] |
| Lloyd's Japan platform | 1 entry, separate from foreign-insurer-branch rows ^[extracted] |

FSA ファイルは不定期に更新される。特定の行数を確定値として扱う前に、読者は常に最新の songai.pdf / songai.xlsx を再取得すべきである。

### A. 大手3社 — 国内持株会社グループ (元受)

| 持株会社 | 国内損害保険の運営会社 | ダイレクト子会社 | 専門子会社 |
|---|---|---|---|
| [[JapanFG/tokio-marine|Tokio Marine Holdings]] | [[JapanFG/tokio-marine-nichido-fire|Tokio Marine & Nichido Fire]] ^[extracted] | [[JapanFG/tokio-marine-direct|Tokio Marine Direct]] (旧 e-design) ^[extracted] | [[JapanFG/nisshin-fire|Nisshin Fire & Marine]] ^[extracted] |
| [[JapanFG/msad|MS&AD Holdings]] | [[JapanFG/mitsui-sumitomo-insurance|Mitsui Sumitomo Insurance]] + [[JapanFG/aioi-nissay-dowa-insurance|Aioi Nissay Dowa Insurance]] ^[extracted] | [[JapanFG/mitsui-direct|Mitsui Direct General]] ^[extracted] | — |
| [[JapanFG/sompo|Sompo Holdings]] | [[JapanFG/sompo-japan-insurance|Sompo Japan Insurance]] ^[extracted] | [[JapanFG/sompo-direct|Sompo Direct]] (旧 Saison Automobile & Fire) ^[extracted] | — |

### B. ダイレクト系（デジタル・通信・EC）損害保険会社

| 運営会社 | 販売チャネルの軸 | クラスター |
|---|---|---|
| [[JapanFG/sony-insurance|Sony Insurance]] | [[JapanFG/sony-fg|Sony Financial Group]] direct auto ^[extracted] | 個人向けダイレクトの自動車・火災・医療 |
| [[JapanFG/sbi-insurance|SBI Insurance]] | [[JapanFG/sbi-hd|SBI Group]] platform ^[extracted] | ダイレクト自動車・火災・がん |
| [[JapanFG/au-insurance|au Insurance]] | [[JapanFG/au-fh|au Financial Holdings]] / KDDI ^[extracted] | 通信バンドル型損害保険 |
| [[JapanFG/rakuten-general-insurance|Rakuten General Insurance]] | [[JapanFG/rakuten-fg|Rakuten Group]] / [[JapanFG/rakuten-insurance-hd|Rakuten Insurance HD]] ^[extracted] | EC プラットフォーム連動型損害保険 |
| [[JapanFG/tokio-marine-direct]] | Tokio Marine HD ^[extracted] | 大手三社傘下のダイレクト自動車保険 |
| [[JapanFG/sompo-direct]] | Sompo HD ^[extracted] | 大手三社傘下のダイレクト自動車保険 |
| [[JapanFG/mitsui-direct]] | MS&AD HD ^[extracted] | 大手三社傘下のダイレクト自動車保険 |

ダイレクト損害保険会社は、専属代理店網の密度ではなく、コストと顧客獲得チャネルで競争する。それでも FSA の損害保険免許と、[[insurance/natcat-reinsurance-japan]] で説明される巨大災害リスクの経済性の対象である。

### C. 専門領域 / niche / regional non-life insurers

| 運営会社 | 専門領域 | メモ |
|---|---|---|
| [[JapanFG/anicom-insurance|Anicom Insurance]] | ペット保険 ^[extracted] | Holding [[JapanFG/anicom-hd]]; among largest Japan pet insurers |
| [[JapanFG/dai-ichi-ipet-insurance|Dai-ichi iPet Insurance]] | ペット保険 ^[extracted] | iPet brand under [[JapanFG/dai-ichi-life]] group |
| [[JapanFG/pet-and-family-insurance|Pet & Family Insurance]] | ペット保険 ^[extracted] | Pet specialty |
| [[JapanFG/yamap-naturance-insurance|YAMAP Naturance Insurance]] | アウトドア・登山特化 ^[extracted] | YAMAP outdoor-app affiliated |
| [[JapanFG/ntt-docomo-sonpo|NTT Docomo Insurance]] | Telco-bundled mobile / travel ^[extracted] | Under [[JapanFG/ntt-docomo-sompo-hd]] |
| [[JapanFG/secom-insurance|SECOM Insurance]] | セキュリティ・住宅・医療 ^[extracted] | Tied to SECOM physical security |
| [[JapanFG/daido-fire-marine|Daido Fire & Marine]] | 地域・商業 ^[extracted] | Long-standing mid-size non-life |
| [[JapanFG/kyoritsu-fire-marine|Kyoritsu Fire & Marine]] | 地域・商業 ^[extracted] | Long-standing mid-size non-life |
| [[JapanFG/nisshin-fire|Nisshin Fire & Marine]] | 自動車・火災 (Tokio Marine group) ^[extracted] | Tokio Marine subsidiary |
| [[JapanFG/meiji-yasuda-general-insurance|Meiji Yasuda General Insurance]] | Group-life-affiliated non-life ^[extracted] | Under [[JapanFG/meiji-yasuda]] |
| [[JapanFG/cardif-nonlife|Cardif Non-Life]] | 信用・ローン保護 ^[extracted] | BNP Paribas Cardif group |
| [[JapanFG/capital-insurance|Capital Insurance]] | 専門領域 ^[extracted] | ニッチ |
| [[JapanFG/sakura-insurance|Sakura Insurance]] | 専門領域 ^[extracted] | ニッチ |
| [[JapanFG/sbi-insurance-group|SBI Insurance Group]] | Group holding ^[extracted] | SBI group |
| [[JapanFG/ji-accident-fire-insurance|JI Accident & Fire]] | 専門領域 accident / fire ^[extracted] | 専門領域 |
| [[JapanFG/zenkankyo-reiwa-insurance|Zenkankyo Reiwa Insurance]] | 専門領域 ^[extracted] | 専門領域 |
| [[JapanFG/hs-insurance|HS Insurance]] | 旅行 ^[extracted] | H.I.S. travel-affiliated |

専門クラスターは、2010年代から2020年代にかけての構造変化を反映する。日本の損害保険料は、ペット、アウトドア、旅行、モビリティ、通信バンドル、EC バンドルのニッチへ広がっており、大手3社 が既存の単位コスト基盤では容易に対応しにくい領域を作っている。

### D. 外資系ダイレクト損害保険会社 (外国損害保険会社等)

| FSA 掲載名 | 親会社 | クラスター |
|---|---|---|
| [[JapanFG/aig-japan|AIG Japan]] | AIG (NYSE: AIG) ^[extracted] | US-affiliated multi-line |
| [[JapanFG/axa-japan|AXA Japan]] | AXA SA (Euronext: CS) ^[extracted] | French multi-line |
| [[JapanFG/allianz-fire-marine-japan|Allianz Fire & Marine Insurance Japan]] | Allianz SE (DAX: ALV) ^[extracted] | German multi-line |
| [[JapanFG/chubb-insurance-japan|Chubb Insurance Japan]] | Chubb Limited (NYSE: CB) ^[extracted] | US-Swiss specialty/multi-line |
| [[JapanFG/hyundai-marine-fire-japan|Hyundai Marine & Fire Japan]] | Hyundai M&F (KOSPI) ^[extracted] | Korean multi-line |
| [[JapanFG/american-home-insurance-japan|American Home Insurance Japan]] | AIG group ^[extracted] | US-affiliated specialty |
| [[JapanFG/starr-insurance-japan|Starr Insurance Japan]] | Starr Companies (US) ^[extracted] | US specialty |

外資系ダイレクト損害保険会社は、FSA の免許カテゴリに応じて、支店（外国損害保険会社）または 100% 保有の日本子会社（外資親会社を持つ株式会社）のいずれかとして運営される。詳細は [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]] を参照する。Lloyd's Japan は単一の保険会社ではなくマーケットプレイスであるため、別枠で扱う。

### E. Lloyd's Japan (marketplace platform)

| エンティティ | メモ |
|---|---|

Lloyd's Japan は、この一覧の他の行とは構造的に異なる。単一のリスク引受会社ではなく、Lloyd's のシンジケートが日本所在リスクを引き受けるための FSA 登録済みローカルチャネルである。シンジケートの引受余力モデル、海上 / 航空 / サイバー / 政治リスク種目、再保険と元受の境界については [[insurance/lloyds-japan-syndicate-operating-model]] を参照する。

### F. 日本の再保険会社

| 運営会社 | 親会社・構造 | クラスター |
|---|---|---|
| [[JapanFG/toa-reinsurance|Toa Reinsurance]] | 国内上場（TSE） ^[extracted] | 日本の専門再保険会社 |
| [[JapanFG/japan-earthquake-reinsurance|Japan Earthquake Reinsurance (JER)]] | 官民地震保険スキームの運営主体 ^[extracted] | 地震保険専業 |
| [[JapanFG/munich-re-japan|Munich Re Japan]] | Munich Re AG (DAX: MUV2) ^[extracted] | 外国支店 — グローバル大手 2 |
| [[JapanFG/swiss-re-japan|Swiss Re Japan]] | Swiss Re Ltd. (SIX: SREN) ^[extracted] | 外国支店 — グローバル大手 2 |
| [[JapanFG/hannover-re-japan|Hannover Re Japan]] | Hannover Rück SE (FWB: HNR1) / Talanx ^[extracted] | 外国支店 — 欧州 3番目の柱 |
| [[JapanFG/scor-japan|SCOR Japan]] | SCOR SE (Euronext: SCR) ^[extracted] | 外国支店 — 欧州 4番目の柱 |
| [[JapanFG/gen-re-japan|Gen Re Japan]] | General Re Corp. → Berkshire Hathaway (NYSE: BRK) ^[extracted] | 外国支店 — 米国 Berkshire 傘下 |
| [[JapanFG/rga-japan|RGA Japan]] | RGA Inc. (NYSE: RGA) ^[extracted] | 外国支店 — 米国の生命再保険専門 |
| [[JapanFG/pacific-life-re-japan|Pacific Life Re Japan]] | Pacific Life Insurance Co. (US mutual) ^[extracted] | 外国支店 — 米国の生命再保険専門 |

再保険会社は、元受保険会社と同じ FSA 登録簿の下で、外国損害保険会社等（foreign branch）または内国損害保険会社（domestic）として免許を受ける。ただし契約者向けリテール事業を直接引き受けないため、原則として損害保険契約者保護機構の会員集合からは外れる（会員である例外は [[JapanFG/toa-reinsurance]] を参照）。再保険市場構造は [[insurance/foreign-reinsurer-japan-landscape]] で分析する。

## 単独ページ化の基準

損害保険会社は、少なくとも次のいずれかに該当する場合に専用の JapanFG ページに値する。

- it sits in the 大手3社 holding-company or operating-company layer;
- 公開 IR または重要なブランド上の存在感を持つ、登録済みのダイレクト系（デジタル / 通信 / EC）損害保険会社である。
- 明確な日本戦略、親会社の規制上の接続、または専門性を持つ外資系保険会社である。
- 公開グループ開示を持つ再保険会社である。
- ペット、アウトドア、サイバー、パラメトリックなど新しい商品カテゴリを作り、保険 / フィンテック / 消費者金融分析で継続的に参照される専門保険会社である。

ここに収録された FSA 行のすべてに単独ページが必要なわけではない。ロングテールの専門行は、調査上の問いがより広い分析へ引き込むまで、レジストリ限定のままにできる。

## このレジストリの読み方

1. 問いが「このグループは誰か」である場合は、**持株会社レイヤーから始める**。[[insurance/japan-nonlife-big-three]] を使う。
2. 問いが引受主体、代理店チャネル、国内合併の系譜に関する場合は、**運営会社レイヤーへ下りる**。
3. 販売経済性や新商品カテゴリを比較する場合は、**ダイレクト / 専門クラスターを使う**。
4. 流入資本、国境を越える専門リスク配置、親グループ戦略を分析する場合は、**外資系クラスターを使う**。
5. 問いがリスク移転、海上 / 航空 / サイバーの引受余力、巨大災害出再に関する場合は、**Lloyd's / 再保険クラスターを使う**。
6. **資本フレームワークと照合する**: 制度をまたいで比較する場合は [[insurance/global-solvency-framework-comparison-matrix]] を通す。日本免許支店とその親会社は、異なるソルベンシーの見方に置かれる場合がある。

## 関連項目

- [[JapanFG/INDEX]]
- [[JapanFG/trust-companies-japan-index]]
- [[JapanFG/foreign-bank-branches-japan-index]]
- [[insurance/INDEX]]
- [[insurance/japan-nonlife-big-three]]
- [[insurance/natcat-reinsurance-japan]]
- [[insurance/economic-value-based-solvency]]
- [[insurance/global-solvency-framework-comparison-matrix]]
- [[insurance/foreign-reinsurer-japan-landscape]]
- [[insurance/marine-insurance-and-pi-cover-market]]
- [[insurance/lloyds-japan-syndicate-operating-model]]
- [[insurance/captive-insurance-japan-market]]
- [[insurance/insurance-agency-and-brokerage-japan]]
- [[JapanFG/tokio-marine]]
- [[JapanFG/msad]]
- [[JapanFG/sompo]]
- [[JapanFG/tokio-marine-nichido-fire]]
- [[JapanFG/mitsui-sumitomo-insurance]]
- [[JapanFG/aioi-nissay-dowa-insurance]]
- [[JapanFG/sompo-japan-insurance]]
- [[JapanFG/toa-reinsurance]]
- [[JapanFG/japan-earthquake-reinsurance]]
- [[JapanFG/munich-re-japan]]
- [[JapanFG/swiss-re-japan]]
- [[JapanFG/hannover-re-japan]]
- [[JapanFG/scor-japan]]
- [[JapanFG/gen-re-japan]]
- [[JapanFG/rga-japan]]
- [[JapanFG/pacific-life-re-japan]]
- [[JapanFG/lloyd-japan]]
- [[JapanFG/japan-pi-club]]
- [[JapanFG/legal-financial-licenses/insurance-license-and-solvency]]
- [[INDEX|FinWiki index]]

## 出典

- FSA: 損害保険会社免許一覧 (songai.pdf / songai.xlsx), as of 2026-04-01.
- FSA: 保険会社免許一覧 (hoken.pdf), all-insurer master register.
- General Insurance Association of Japan (損保協会): 業界概要.
- Non-Life Insurance Policyholders Protection Corporation of Japan: 会員会社一覧, as of 2026-04.
- Tokio Marine Holdings / MS&AD Holdings / Sompo Holdings: 統合報告書・年次報告書 (operating-company subsidiaries disclosure).
