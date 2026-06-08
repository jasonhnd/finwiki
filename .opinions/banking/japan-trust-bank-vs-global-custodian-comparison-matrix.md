---
title: "[opinion] Japan trust bank vs global custodian comparison matrix"
source_entry: banking/japan-trust-bank-vs-global-custodian-comparison-matrix.md
type: opinion-quarantine
moved: 2026-05-29
note: 客観 wiki 本文から分離した主観的内容（推論 / Counterpoints / Open questions）。事実ではないため公開面・監査・計数から除外。将来の分析板块用に保留。
---

# 主観内容の隔離 — Japan trust bank vs global custodian comparison matrix

> 出典エントリー: `banking/japan-trust-bank-vs-global-custodian-comparison-matrix.md`

## 推論 (from Comparison Matrix (Japanese trust banks))

| Specialty fields | 不動産 / 年金 / 相続 / DC / 議決権電子化 | 不動産 / DC / SC コード対応 | 不動産 / 年金 / インパクト投資 / 相続 | 富裕層 / プライベートバンキング / PB 商品 | 投信 / プライベートエクイティ / 私募ファンド | 農協 / 公金 / DC | 純粋カストディ / 年金 / 議決権 / コーポレートアクション | 純粋カストディ / 年金 / 投信計算 | 不動産 / RWA トークン化検討 ^[inferred] | 証券金融 / 株式貸借 / 担保管理 |

## 推論 (from Master Trust vs Custody Bank of Japan — 2020 統合の意味)

統合後、両 2 強で日本の上場株式 信託口保管の **過半** を担う構造となった。^[inferred] グローバルカストディアン (BNY Mellon / State Street / JPM / Citi) は、外国投資家 / 邦銀海外運用の日本側 sub-custodian としてこの 2 強の **下位接続** を多くの場合経由する。

## 推論 (from Pricing power dynamics)

| 手数料率トレンド | 投信 admin 手数料率は低下傾向 (パッシブ化 / 価格競争) ^[inferred] | グローバル AUC ベースで規模が拡大、絶対金額では成長持続 ^[inferred] |

## 推論 (from Interpretation rules)

| GPIF の海外資産が外資カストディアン管理下にある | sub-custodian 構造であり、最終的な投資判断・議決権行使は GPIF 委託運用機関にある。^[inferred] |
| トラスト&カストディ手数料率の比較 | 国内専業 (Master Trust / CBJ) は規模集約で安く、グローバル (BNY / State Street) はグローバル必須機能性で価格維持。直接比較は機能カバレッジが異なるため要注意。^[inferred] |

## Counterpoints

- "2 強 (Master Trust + CBJ) = カストディ独占" の批判は機能集約の自然な帰結。グローバル統合圧力 + システム投資負担 + 公的年金規模拡大の合成効果。^[inferred]
- 「グローバルカストディアン = 邦銀代替可能」観は誤り。国内 DVP-X1/X2/X3 + JGB book-entry + JASDEC 直接接続は信託銀行ライセンスに紐付き、外資 ICSD だけでは代替不可。^[inferred]
- 「信託口 = 議決権集中」観は形式論。議決権指図は委託者 (運用機関 / 年金) にあり、信託銀行は機械的に行使するのが原則。^[extracted]
- 「グローバル AUC ランキング」は AUC / AuA 集計方法 (保管 vs アドミ vs 兼ね合い) に依存し、BNY $50tn / State Street $40tn / JPM $30tn の数値は時点・定義により変動。^[ambiguous]
- 「リテール富裕層信託 = SMBC Trust の AUC」は他の信託銀行と質的に異なる (PB 商品中心) ため、AUC 数値の単純比較は意味が薄い。

## Open questions

- 株式決済 T+1 化 (2027 想定) で国内信託銀行とグローバルカストディアンの sub-custody チェーンはどう再構成されるか?
- トークン化証券 ([[megabanks/mufg-bank|MUFG]] Progmat 等) のカストディは Master Trust / CBJ 経由か、それともグローバル custodian 直接接続か?
- GPIF の海外運用比率上昇局面で BNY / State Street の Japan 受託資産は構造的に拡大するか?
- 国内 2 強 (Master Trust + CBJ) の将来的な統合 (インフラ 1 社化) シナリオの蓋然性は?
- Citi が個人 PB を SMBC に譲渡した (2015) のと同様、他のグローバル custodian も日本の周辺事業を邦銀に譲渡する戦術を取るか?
