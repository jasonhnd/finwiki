---
source: loyalty/d-point-detailed-ecosystem
source_hash: 3d21aff8d80be53b
lang: ja
status: machine
fidelity: ok
title: "d Point detailed ecosystem (NTT docomo) — 付与の仕組み、d Card / d払い の統合、2025 改革"
translated_at: 2026-06-19T06:09:18.042Z
---

# d Point detailed ecosystem (NTT docomo) — 付与の仕組み、d Card / d払い の統合、2025 改革

## Wiki ルート

この項目は [[loyalty/INDEX|loyalty index]] の配下にある dポイントの **operator-deep ページ** であり、テレコム・アンカー比較ビューは [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]、銀行アンカーとの対比は [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]、エコシステムマップは [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]、IFRS 15 の取扱いは [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]、ウォレット層のオーバーレイは [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]、親会社の金融持株構造は [[megabanks/ndfg|NDFG]]、争点となる小売アンカーの対応物は [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 tie-up]] と組み合わせて読むこと。

## TL;DR

**dポイント** は、**dポイントクラブ** の傘下で運営される NTT docomo のオープン共通ポイントプログラムである。アクティブな **d アカウント ID ベースは 100 百万を超え**（NTT docomo の公開開示）、楽天ポイントおよび PayPay ポイントと並ぶ日本三大共通ポイントエコシステムの一つとなっている。dポイントの戦略的役割は、**計画された [[megabanks/ndfg|NDFG (NTT docomo financial group)]] 統合のフロントエンド通貨** として機能し、モバイル回線契約者を d払い（QR 決済）、d Card / d Card GOLD（クレジット）、d アカウント銀行パートナー、dスマートバンク（デジタルバンクブランド）、および将来 NDFG に包含される証券／保険／信託子会社に結びつけることにある。**2025 dポイントクラブ改革**（2024-Q4, に発表、2025-2026にかけて段階的に展開）は、純粋なポイント累積ではなく d払い 利用頻度を中心にランク制度（4段階の「ランク」）を再構築し、付与の経済性をウォレット活動へと実質的にシフトさせた。IFRS 15 に基づく会計処理では、ポイント付与による負債を breakage 見積もりとともに繰延収益に計上し、2021 以降の ASBJ 第 29 号の適用は NTT docomo の年次報告書の契約負債開示に完全に反映されている。

## d アカウント、dポイントクラブ、および会員規模

**d アカウント** は NTT docomo の汎用顧客 ID である。元々はモバイル回線契約者向けの docomo ID として始まったが、dポイントが従来の「docomo Premier Club」プログラムからリブランドされた 2015 頃から、非 docomo ユーザー（docomo モバイル契約を持たない一般消費者）にも開放された。現在の構造：

| アイデンティティ層 | 役割 | 規模 |
|---|---|---|
| **d アカウント** | docomo、dポイント、d払い、d Card、d アカウント銀行パートナーの汎用 ID | 100M+ アカウント（NTT docomo 公開開示） |
| **dポイントクラブ** | 付与率と特典を決定するロイヤルティプログラムのティア・ラッパー | すべての d アカウント保有者は会員として自動登録される |
| **d Card 会員** | NTT docomo が発行する d アカウントのクレジットカード子会社 | 数千万；d アカウントの一部 |
| **d Card GOLD 会員** | docomo 料金にマルチプライヤー特典を持つゴールドステータスのクレジットカード | 数百万；高 ARPU ティア |
| **d払い 会員** | d アカウントの上に乗る QR 決済ウォレット会員 | 数千万 MAU；[[payments/japan-code-payment-operator-2025-market-share-matrix|code-payment 2025 share matrix]] を参照 |

会員ファネルは d アカウント層で広がり、d Card GOLD に向かって狭まり、各ティアが段階的に高い金融商品の付帯を提供する。

## 2025 dポイントクラブ改革 — ランク制度の刷新

**2024-Q4 に発表され、2025-2026 にかけて段階的に展開された dポイントクラブのランク改革** は、2015 のリブランド以来、dポイント付与の経済性に対する最も重要な変更である。公開資料は、ボーナス付与を決定する **4段階のランク制度** を説明している：

| ランクティア | 従来（2025以前）の基準 | 新（2025-）の基準 |
|---|---|---|
| トップティア (★★★★) | 純粋な 6か月のポイント累積しきい値 | d払い 利用 + d Card 利用 + dポイント累積の組合せ；d払い 頻度をより重く加重 |
| 中上位 (★★★) | 同上 | より低いしきい値での組合せ指標 |
| 中下位 (★★) | 同上 | より低いしきい値での組合せ指標 |
| ベース (★) | デフォルト登録 | デフォルト登録 |

経済的な意図は、受動的なポイント累積ではなく **d払い 活動に報いる** ことであり、これまで d払い を使わずに d Card 利用や docomo 料金支払いを通じてポイントを獲得してきた従来の dポイント保有者の間でウォレット採用を加速させる。これは、コード決済マトリクスにおいて [[payment-firms/paypay|PayPay]] および 楽天ペイ に対して d払い の市場シェアを伸ばすという NTT docomo の戦略的優先事項と整合する — [[payments/japan-code-payment-operator-2025-market-share-matrix|2025 code-payment market share matrix]] を参照。

この改革はまた、**保有残高の有効期限ルール**（固定日の失効ではなくローリング 48か月ルール）を調整し、**特定の d払い 加盟店カテゴリーに紐づくボーナス・マルチプライヤー・キャンペーン** を導入した。

## docomo サービス vs パートナー加盟店での付与率

1% の **標準付与率** は広く適用されるが、実効率はサーフェスによって大きく異なる：

| 付与サーフェス | 標準付与 | d Card あり | d Card GOLD あり | 備考 |
|---|---|---|---|---|
| docomo モバイル料金 | 1%（d Card で支払い） | docomo 料金に 1% ベース + 10% ボーナス | docomo 料金に 1% ベース + 10% ボーナス | docomo 料金への d Card GOLD ボーナスは、保有者が ¥11,000/年 の年会費を正当化する構造的理由 |
| ひかりネット料金 | 1% | 可変 | 可変 | モバイル回線割引とバンドル |
| d払い コード決済 | 0.5%（デフォルト） | 1% | 1.5% | 改革期のキャンペーンが表示レートをより高く押し上げる |
| d Card クレジットカード利用 | 1% | 1% | 1%（+ カテゴリーボーナス） | 標準的なクレジットカード報酬 |
| 旗艦パートナー加盟店（ローソン、マクドナルド、マツモトキヨシ、ENEOS） | スキャン時に 1% + 可変ボーナス | 使用すれば d Card 利用と積み重なる | 積み重なる | パートナー出資のボーナスキャンペーンが一般的 |
| 連合パートナー（ベイシア、ヤマダデンキ等） | スキャン時に 1% | 積み重なる | 積み重なる | 低頻度のパートナーネットワーク |
| d払い 経由の非パートナー加盟店 | 0.5-1.5% | 積み重なる | 積み重なる | 受付のみ — スキャン・アンド・アーンなし |

経済的な含意は、d Card GOLD を保有し旗艦パートナーで d払い を使う docomo 契約者は、組合せ利用カテゴリーで **3-5%+ の実効付与率** を達成でき、これは PayPay と 楽天ペイ がデフォルトで提供する 1% のベースラインを実質的に上回る、ということである。これが、高額利用の docomo 契約者の間で d Card GOLD のリテンションが高い理由を説明する。

## d Card GOLD — ゴールドステータスのハードルと経済性

**d Card GOLD** は、¥11,000 （税込）の年会費を持つ NTT docomo のプレミアムクレジットカードティアである。年会費の構造的正当化：

| 特典 | おおよその経済価値 |
|---|---|
| docomo モバイル + ひかり 料金への 10% ボーナスポイント | docomo + ひかり 利用が ¥8,000+/月 の世帯にとって重要（¥80/月 のボーナス = ¥960/年；¥15,000/月 の組合せで、約 ¥1,800/年 のボーナス） |
| 無料旅行保険（海外／国内） | 可変；中位ゴールドカードと同等 |
| 空港ラウンジアクセス（国内主要空港） | 可変；中位ゴールドカードと同等 |
| ケータイ補償（¥100,000レベルの補償） | モバイル端末の破損が発生した場合に重要 |
| dポイント ボーナスキャンペーン | カテゴリー付与と積み重ね可能 |

経済的な損益分岐ハードルは、平均的な世帯で docomo + ひかり の組合せ利用がおおよそ **¥8,000-10,000/月** であり、これを下回ると年会費が料金ボーナスの価値を上回る。NTT docomo の d Card GOLD 会員ベースはこのセグメンテーションを反映しており — 複数回線とバンドルサービスを持つ高 ARPU 世帯に集中している。

## d払い の統合 — ウォレット、カード、料金支払い

**d払い**（d-barai）は、2018に開始された NTT docomo の QR 決済ウォレットである。dポイントとの統合パターン：

| 機能 | d払い |
|---|---|
| 資金源 | d Card ダイレクトチャージ、銀行口座ダイレクトチャージ、コンビニチャージ、dポイント直接使用 |
| アイデンティティ | d アカウント（dポイントと同じ） |
| 決済 | docomo キャリアまたは登録済み支払い方法経由の直接請求 |
| ロイヤルティ層 | dポイントが 0.5-1.5% で自動付与（ランクとキャンペーンによる） |
| 加盟店受付 | JPQR 対応；主要小売、レストラン、自動販売機で展開 |

d払い の戦略的役割は、**ポイント付与を高頻度・低単価の利用に結びつけるウォレットサーフェス** を提供することにある — これは純粋なクレジットカードの経済性ではコスト効率よく対応することが難しいカテゴリーである。2025 dポイントクラブのランク改革は、ランク決定指標における d払い 頻度の重みを明示的に高め、ウォレット採用を加速させる。

d払い のライセンス構造は、適宜 **第三者型前払式支払手段** および **資金移動業** の二重登録の下にある — 構造的取扱いについては [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]] を参照。

## 会計認識のタイミング — IFRS 15 契約負債

NTT docomo は IFRS に基づいて報告しており、dポイント負債は「重要な権利」フレームワークの下で **契約負債**（IFRS 15 に基づく繰延収益）として扱われる。認識パターン：

| 事象 | 会計処理 |
|---|---|
| ポイントを獲得する顧客の購入 | 取引価格を財・サービスと付与されたポイントの間で配分（独立販売価格を使用）；ポイント部分を契約負債として認識 |
| 顧客がポイントを引き換える | 対応する繰延収益を認識済み収益に振り替える |
| ポイントが失効するか breakage が認識される | 予想される引き換えのパターンに基づき（実際の引き換えに比例して）対応する繰延収益を振り替える |
| キャンペーン付与ポイント（裏付けとなる顧客購入なし） | 付与時に販促／マーケティング費用として扱う |

NTT docomo の年次報告書には、通信収益の繰延額と dポイント負債を組み合わせた契約負債開示が含まれている。breakage の仮定は、過去の引き換えパターンに基づき毎年見直される。より広範な取扱いについては、「ポイント」が該当しうる 5 つの会計バケットを扱う [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]] を参照。

## 連合パートナーネットワーク — ローソンの争点とその他

dポイントのパートナー加盟店ネットワークは、主要小売業者との二者間契約に基づいて構築されている。最も争点となるパートナーは **ローソン** であり、歴史的に Pontaポイント（KDDI / ロイヤリティ マーケティング）と dポイントの両方の付与を提供してきた — KDDI の 2024 三菱との非公開化後の戦略的再編については [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]] を参照。その他の旗艦パートナー：

| パートナー | カテゴリー | dポイントの役割 |
|---|---|---|
| ローソン | コンビニエンスストア | スキャン・アンド・アーン；2024 KDDI 所有後、Pontaポイントと争点 |
| マクドナルド | QSR | スキャン・アンド・アーン；キャンペーン主体 |
| マツモトキヨシ | ドラッグストア | スキャン・アンド・アーン；d払い ボーナスのキャンペーンカテゴリー |
| ENEOS | 燃料 | SS でスキャン・アンド・アーン |
| Tower Records、タワレコ | 専門小売 | スキャン・アンド・アーン |
| ベイシア、ヤマダデンキ、ジョーシン | GMS / 家電量販 | 可変的な参加 |
| マクドナルド・スターバックス | QSR | 可変；ローテーション・キャンペーン |

連合の経済性は au PAY ポイント / Pontaポイント と同じように機能する：パートナー加盟店が自らの発行と引き換えを出資し、NTT docomo とパートナーの間で定期的にネット決済を行う。パートナー参加の経済的論理は、パートナー出資のポイントコストと引き換えに **増分トラフィックとバスケットサイズ** を得ることにある。

## 競争上のポジショニング

| 共通ポイント | アンカー | アクティブ会員 ID | 最強チャネル | d Point の相対的ポジション |
|---|---|---|---|---|
| dポイント | NTT docomo テレコム | 100M+ | docomo 料金、d Card GOLD マルチプライヤー、ローソン / マクドナルド | 基準 |
| au PAY ポイント (旧 Ponta) | KDDI au テレコム + リクルート / 三菱 連合 | 100M+ | ローソン（KDDI 後）、リクルート・エコシステム（じゃらん, Hot Pepper） | 直接のテレコムピア；Ponta 合併により au はより広い非テレコムサーフェスを得る |
| V Point | SMBC + CCCMK | 130M+ 統合 | SMBC Olive、SMBC Card、T カードのレガシーネットワーク | 銀行アンカー；テレコムのデータグラフが弱い |
| 楽天ポイント | 楽天 EC + カード + 銀行 + モバイル | 数千万のアクティブ | 楽天 EC、楽天カード、楽天モバイル | E コマースアンカー；オンラインのテールがより強い |
| PayPay ポイント | SoftBank / LY / PayPay アプリ | 70M+ ウォレットユーザー | PayPay QR アプリ、キャンペーン、PayPay カード | ウォレットアンカー；キャンペーン主導 |
| WAON POINT | イオングループ | 数千万 | イオン店舗、WAON、イオンカード | 小売グループ内 |
| nanaco point | セブン＆アイ | 数千万 | 7-イレブン、イトーヨーカドー、nanaco | 小売グループ内 |

dポイントの最も直接的なピアは **au PAY ポイント** である — どちらもモバイル回線契約者ベースをコアの堀とし、野心的なスーパーアプリ金融バンドルをエンドステートとする、テレコムアンカーの共通ポイントである。最も重要な対比は、異なる顧客獲得ファネルを持つ銀行アンカーの代替手段としての **V Point** である。

## 関連

- [[loyalty/INDEX|loyalty index]]
- [[loyalty/d-point-au-kddi-docomo-telco-point-consolidation|d Point / au telco-point consolidation case]]
- [[loyalty/v-point-smbc-ccc-case|V Point (SMBC × CCC) case]]
- [[loyalty/japan-points-landscape|Japan points and loyalty landscape]]
- [[loyalty/point-liability-accounting-boundary|point liability accounting boundary]]
- [[loyalty/t-point-v-point-post-2024-merger|T-Point + V-Point post-2024 merger detail]]
- [[loyalty/ponta-points-deep-dive|Ponta points deep dive]]
- [[loyalty/sb-yahoo-paypay-points-unified-ecosystem|SB/Yahoo/PayPay unified points]]
- [[megabanks/ndfg|NDFG (NTT docomo financial group)]]
- [[payment-firms/paypay|PayPay]]
- [[megabanks/paypay-fg|PayPay FG]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[megabanks/au-fh|au Financial Holdings]]
- [[payment-firms/au-payment|au Payment]]
- [[payments/japan-code-payment-operator-2025-market-share-matrix|Japan code-payment operator 2025 market share matrix]]
- [[payments/japan-code-payment-competitive-map|Japan code-payment competitive map]]
- [[payments/funds-transfer-vs-prepaid-boundary|funds-transfer vs prepaid boundary]]
- [[retail/lawson-mitsubishi-corporation-tie-up-2024-deep|Lawson + Mitsubishi 2024 deep tie-up]]
- [[retail/INDEX|retail index]]
- [[INDEX|FinWiki index]]

## Sources

- dポイントクラブ official site: https://dpoint.docomo.ne.jp/club/
- dポイント official site: https://dpoint.docomo.ne.jp/
- d Card official site: https://dcard.docomo.ne.jp/
- d払い official site: https://service.smt.docomo.ne.jp/keitai_payment/
- NTT docomo press releases (dポイントクラブ reform announcements): https://www.docomo.ne.jp/info/news_release/
- NTT docomo IR library (annual report contract-liability disclosure): https://www.docomo.ne.jp/corporate/ir/library/
- Cashless Promotion Council publications (code-payment trends): https://paymentsjapan.or.jp/category/publications/
