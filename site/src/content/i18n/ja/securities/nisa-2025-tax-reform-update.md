---
source: securities/nisa-2025-tax-reform-update
source_hash: 722d7fa2f5dd2306
lang: ja
status: machine
fidelity: ok
title: "NISA 2025 税制改正アップデート"
translated_at: 2026-06-19T12:43:19.967Z
---

# NISA 2025 税制改正アップデート

## Wiki route

本エントリは [[securities/INDEX|securities index]] の下に位置づけられる。ピア/対比の文脈として [[securities/nisa-2024-flow|NISA 2024 flow]] と、より広範なシステム/規制上の境界として [[securities/financial-instruments-business-operators-japan-index|FIEA operator registry index]] と併せて読むこと。本ページは、2024-開始の恒久 NISA 制度の上に乗る 2025 税制改正の拡充項目を記録する。

## TL;DR

2024 の恒久 NISA 制度（[[securities/nisa-2024-flow|NISA 2024 flow]] を参照）は、つみたて枠、成長枠、合計 3.6 万円の年間上限、18 万円の生涯非課税保有限度額をもって開始された。2024 年 12 月の税制改正大綱（令和7年度税制改正大綱）と後続の立法は、運用初年度の後に特定されたギャップを対象とした漸進的な NISA 拡充項目を追加した。

最も論じられている 2 つの拡充テーマは、(1) 相続および世代間資産移転の文脈における、未成年/次世代の世帯員が保有する NISA 口座の取り扱い、および (2) 相続繰越処理、外国株式源泉徴収調整、商品適格性の精緻化といった実務運用上の改善である。詳細な実装は通常 2025 と 2026にわたって段階的に施行される。

本ページは、[[securities/nisa-2024-flow|NISA 2024 flow]] にすでに捉えられた 2024 フレームワークと、2025以降の改革追加分とのギャップを記録する。これは MOF 税制改正大綱の本文や NTA の詳細ガイダンスを置き換えるものではない — 特定の数値、日付、ルールについては常に一次ソースを引用すること。

## Why a Separate Page

[[securities/nisa-2024-flow|NISA 2024 flow]] は、2024年 1 月に発効した恒久 NISA 制度の開始を記録する。その後の年次税制改正は、その基盤の上に規定を追加または修正する。2024 の開始ページを毎サイクル編集することを避けるため、FinWiki は別個の年次アップデートページを維持し、2024 の開始記述が正確なまま、改革のデルタが明示的に蓄積されるようにしている。

## Reform Track Map

| Track | Reform direction | FinWiki route |
|---|---|---|
| 世代間資産移転 | 相続/承継時の NISA 保有の取り扱い；次世代口座の取り扱い。 | [[securities/nisa-2024-flow]] |
| 外国株式の実務運用 | 源泉徴収税の取り扱い、外貨建て決済、商品適格性のクリーンアップ。 | [[securities/japan-online-brokerage-competition]] |
| 商品適格性 | つみたて枠における投資信託の適格性；ETF / J-REIT の組入れ；特定のストラクチャード商品の除外。 | [[securities/japan-asset-manager-landscape-matrix]] |
| 運用簡素化 | 口座開設、金融機関変更、複数証券会社報告、税務書類の整合。 | [[securities/japan-online-brokerage-competition]] |
| サステナビリティ / インパクト / ESG マーカー | つみたて適格投資信託の開示ルールの定期的精緻化。 | [[securities/japan-asset-manager-landscape-matrix]] |

## Reading Method

日本の年次税制改正サイクルは固定されたカデンツ（年末の与党税制改正大綱 → MOF / 閣議草案 → 国会立法 → 運用通知）に従うため、NISA 改革項目を読むには、ルールがどの段階に達しているかを確認する必要がある：

1. **大綱（大綱）**：12 月に与党が公表する；方向を示すが法律ではない。
2. **閣議 / MOF 草案**：大綱を法令本文に翻訳する。
3. **国会立法**：正式な税制改正法を可決する。
4. **実装通知**：FSA、NTA、JSDA が金融機関向けの運用ノートを公表する。
5. **発効日**：通常は実装年の 1 年 4 月で、一部項目は繰り延べられる。

NISA 項目については、大綱項目が立法前に変わり得るため、ルールが大綱段階にあるか施行中かを常に確認すること。

## Inheritance / Succession Direction

2025 の改革議論で顕著だった改革の方向の一つは、口座保有者の死亡時に NISA 保有資産がどう扱われるかを明確化することであった。基本ケースは、NISA の非課税ステータスは相続人に移転しない — 相続された資産は NISA ラッパーから出て、その後は通常の税務処理の下で保有される、というものである。改革提案は以下を検討してきた：

- 相続された NISA 資産を、相続人の生涯枠の範囲内で相続人の既存 NISA 口座に移転できるかどうか；
- 生涯限度額（18 万円）の消費が相続ポジションとどう相互作用するか；
- みなし成年子の NISA 相続が、定められた状況で未使用のつみたて/成長枠を繰り越せるかどうか；
- 書類、評価、証券会社報告のルール。

特定のルールを適用する前に、MOF 税制改正大綱の本文と NTA の実装ガイダンスから現行の法令上の立場を確認すること。

## Operational Improvement Items

NISA 改革議論における繰り返しの実務運用項目には以下が含まれる：

| Item | Direction |
|---|---|
| 外国株式源泉徴収税調整 | 米国/その他の外国源泉徴収のよりスムーズな取り扱いで、リテール NISA 保有者が実務上二重課税されないようにする。 |
| 金融機関変更 | NISA 金融機関の年度途中切替の容易化。 |
| 投資信託適格性 | つみたて適格投資信託の定期的アップデート、長期・低コスト・分散の効いた商品に焦点。 |
| つみたて枠における ETF / J-REIT 適格性 | つみたて適格 ETF / 上場投資信託の継続的なケースバイケース拡大。 |
| 口座開設簡素化 | オンライン本人確認（eKYC）、マイナンバー統合、処理時間短縮。 |
| 複数証券会社報告整合 | 同一投資家が異なる口座種別で複数の証券会社を利用する場合のよりクリーンな報告。 |

これらの項目が看板の 3.6 万 / 18 万円のアーキテクチャを変えることはまれである；実務運用を円滑にするものである。

## Gap with the 2024 Page

[[securities/nisa-2024-flow|NISA 2024 flow]] ページは以下を記録する：

- 2024 年 1 月の恒久制度としての開始；
- つみたて枠（1.2 万円）と成長枠（2.4 万円）；
- 合計 3.6 万円の年間枠；
- 18 万円の生涯非課税保有限度額；
- 12 万円の成長枠サブリミット；
- 無期限の非課税保有期間。

まだ記録していないもの：

- 相続/承継処理のための 2025 改革追加分；
- 外国株式源泉徴収処理への 2025 改革の精緻化；
- 2024 開始後に公表された商品適格性アップデート；
- 2025中に発出された運用改善通知。

本ページは、それらのデルタのための専用アップデートレーンである。

## Reading Checklist

1. 特定の 2025 改革項目を論じる際は、MOF 税制改正大綱の本文を直接引用する。
2. 大綱段階の提案と成立した立法を区別する。
3. リテール向けの運用ルールについては FSA の NISA 特設サイトと NTA ガイダンスを確認する。
4. JSDA の Q&A 資料は、一次税務ソースとしてではなく、実務的解釈の補足として用いる。
5. 2025 改革項目は [[securities/nisa-2024-flow|2024 launch architecture]] の上への追加分として扱い、置き換えとして扱わない。

## JapanFG Relevance

- ネット証券 [[securities-firms/rakuten-securities]]、[[securities-firms/sbi-securities]]、[[securities-firms/monex-group]]、[[securities-firms/mufg-esmart-securities]]、[[securities-firms/paypay-securities]]、[[securities-firms/gmo-click-securities]]、[[securities-firms/dmm-com-securities]] は、口座開設、報告、商品オンボーディングのワークフローで改革変更を実装する。
- フルサービス証券会社 [[securities-firms/nomura-hd]]、[[securities-firms/daiwa-sg]]、[[securities-firms/smbc-nikko]]、[[securities-firms/mizuho-securities]]、[[securities-firms/mufg-mums]] は、ウェルスマネジメント商品メニューを調整する。
- アセットマネージャーは、投資信託目論見書の改訂と JITA 自主規制フレームワークを通じて商品適格性アップデートをルーティングする。
- [[financial-regulators/jsda]] は運用詳細についての業界側 Q&A を公表する。

## JapanFG Distribution Direction

- ネット証券は、[[loyalty/japan-points-landscape|point programs]]と組み合わせて、NISA を主要な顧客獲得ツールとして引き続き使用する。
- フルサービス会社は、より広範なウェルスマネジメント商品とのアドバイザー支援型 NISA バンドリングを強調する。
- 銀行系証券会社は、NISA と預金の連携、世帯バランスシートのローテーションを強調する。
- [[money-market/japan-mmf-money-market-mutual-fund|MRF]] スイープ口座は、NISA フローのキャッシュ層として引き続き機能する。

## Boundary Cases

- **税制改正大綱対成立法**：大綱項目は立法前に修正または削除され得る。
- **運用ルール対法令ルール**：FSA / NTA / JSDA の運用通知は法律を実装するが、それを上書きしない。
- **NISA 相続対通常相続**：NISA 保有資産の相続処理は専門的なトラックであり、一般的な相続税プランニングと混同すべきでない。
- **恒久 NISA 対旧 NISA / ジュニア NISA**：旧制度（一般 NISA、つみたて NISA、ジュニア NISA）は 2024 改革で終了した；レガシーポジションは経過措置ルールに従う。

## Related

- [[securities/INDEX|securities INDEX]]
- [[securities/nisa-2024-flow]]
- [[securities/japan-online-brokerage-competition]]
- [[securities/japan-asset-manager-landscape-matrix]]
- [[securities/japan-underwriting-market-structure]]
- [[money-market/japan-mmf-money-market-mutual-fund]]
- [[securities-firms/rakuten-securities]]
- [[securities-firms/sbi-securities]]
- [[securities-firms/monex-group]]
- [[securities-firms/mufg-esmart-securities]]
- [[securities-firms/paypay-securities]]
- [[securities-firms/nomura-hd]]
- [[securities-firms/daiwa-sg]]
- [[securities-firms/smbc-nikko]]
- [[securities-firms/mizuho-securities]]
- [[securities-firms/mufg-mums]]
- [[financial-regulators/jsda]]
- [[loyalty/japan-points-landscape]]
- [[INDEX|FinWiki index]]

## Sources

- MOF: tax-reform outline page (Japanese, primary source for annual reform direction).
- MOF: tax-reform English summary surface.
- FSA: NISA special site for retail-facing rule status.
- FSA: news page for implementation notices.
- JSDA: NISA Q&A for industry-side operational interpretation.
- NTA: National Tax Agency English index for statutory tax-rule reference.
