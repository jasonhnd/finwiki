---
source: finance/carve-out-divestiture-japan
source_hash: 74285118d0c326b2
lang: ja
status: machine
fidelity: ok
title: "日本におけるカーブアウトと事業売却プロセス"
translated_at: 2026-06-02T13:21:55.026Z
---
# 日本におけるカーブアウトと事業売却プロセス

## 概要

日本のカーブアウトは、親会社から事業部門を切り出し、新しい所有者（第三者売却）、新しい上場会社（IPO 型スピン）、または分配を受ける株主（株式分配 / 会社分割）へ移す取引である。事業譲渡、株式譲渡、会社分割、株式分配のどれを選ぶかという実務上の選択が、税務結果、同意取得トリガー、[[finance/jftc-merger-control-process|JFTC merger-control]] の負担、[[finance/japan-tender-offer-process|TOB route]] との関係を左右する。

このページは [[finance/INDEX|finance]] に位置し、[[finance/cross-border-m-a-japan|cross-border M&A]] および [[finance/japan-leveraged-buyout-economics|LBO economics]] と並ぶ。[[finance/japan-mbo-and-squeeze-out-process|MBO / squeeze-out]]、[[finance/japan-acquisition-finance|acquisition finance]]、[[finance/japan-tender-offer-process|TOB process]]、および [[INDEX|FinWiki index]] とあわせて読む。

## ストラクチャー判断マトリクス

| ストラクチャー | 仕組み | 印紙・税務 | 同意取得トリガー | 主な用途 |
|---|---|---|---|---|
| **事業譲渡**（事業譲渡） | 特定の資産と契約を売却 | 資産ごとの移転課税、不動産登録免許税、売り手側のキャピタルゲイン、買い手側の簿価切上げ | 重要契約ごとの相手方同意、従業員移転の個別同意 | 必要資産だけを選別し、過去債務を残す |
| **株式譲渡**（株式譲渡） | 子会社株式を売却 | 売り手側のキャピタルゲイン、買い手側は取得基準を引き継ぐ | 限定的（支配権変更条項のみ） | 債務を含む法人ごとの明確な移転 |
| **会社分割**（会社分割）— 吸収分割 / 新設分割 | 会社法 757-816  条に基づく法定分割 | 税制適格（「適格」）分割は課税繰延、非適格は課税 | 債権者異議手続、労働契約承継法に基づく従業員承継 | 売却前の組織再編、法定承継による明確な分離 |
| **株式分配 / スピンオフ**（株式分配） | 親会社が子会社株式を自社株主へ分配 | 2017  改正: 法人税法 2-12-15-2  条に基づく税制適格 スピンオフ ルート | 重要性がある場合は AGM、種類 1  株主の承認 | 上場親会社が上場子会社を分配し、制度的な再編を行う（Toshiba / Sony Financial 事例） |
| **IPO カーブアウト** | 子会社を別個に上場し、親会社が過半または少数持分を維持 | 親会社は簿価を維持し、部分希薄化で利益を認識 | TSE 上場プロセス、引受証券会社のデュー・ディリジェンス | 事業支配を保ちつつ資金化する |

## 事業譲渡 vs share deal

| 観点 | 事業譲渡 | 株式譲渡 |
|---|---|---|
| 債務移転 | 指定分のみ。過去債務は売り手に残る | 法人内の全債務が移転 |
| 契約承継 | 各契約で相手方同意が必要 | 支配権変更 条項のみ |
| 税務 — 売り手 | 各資産のキャピタルゲイン、gross-up | 株式譲渡益（多くの場合より有利） |
| 税務 — 買い手 | FMV への book-up → 減価償却 shield | 取得価額が基準。連結納税処理がない限り資産 段階的な値上げ なし |
| 不動産移転税 | 発生 | 回避 |
| スピード | 遅い（契約ごと） | 速い（単一の株式譲渡） |
| Diligence 範囲 | 狭く、特定的 | 隠れ債務を含む法人全体の diligence |
| 従業員移転 | 個別同意 | 自動的に継続 |

## 株式分配 vs 第三者売却

| 経路 | 株式分配 | Trade sale |
|---|---|---|
| 買い手 | 既存の親会社株主 | 戦略買い手 / PE acquirer |
| 親会社への現金 | なし（純粋な分配） | 全買収対価 |
| 親会社の税務 | 適格 スピンオフ なら繰延 | 課税 gain |
| スピード | 6-12 ヶ月 | 6-18 ヶ月（[[finance/jftc-merger-control-process|JFTC clearance]] を含む） |
| 支配の帰結 | 子会社が独立上場会社になる | 子会社が買い手グループへ入る |
| 戦略ロジック | コングロマリット・ディスカウント の解消 | 資本リサイクル、集中、債務返済 |

## TSA — 移行サービス契約

複数製品を持つ親会社からのカーブアウトでは、ほぼ必ず TSA が必要になる。親会社が移管対象事業に対し、移行期間（通常 12-36 ヶ月）中、共通サービスを提供する。

| サービス | 典型的な TSA 範囲 |
|---|---|
| IT / ERP | SAP / Oracle インスタンス移行、データ分離、カスタムコードの切り出し |
| HR / payroll | 子会社が能力を構築するまで給与処理を継続 |
| Treasury / cash management | グループ内キャッシュプール の解消、子会社側の新銀行手配 |
| Procurement | 共通サプライヤー契約、子会社が再交渉するまでの 暫定購買 |
| 法務 / コンプライアンス | 共通の規制ライセンス（特に [[financial-licenses/securities-license-stack|securities-license stack]] 下の金融サービス） |
| Real estate | 費用配賦を伴う共用オフィス利用の継続 |

TSA 価格設定 は通常 **コストプラス 5-10%** で、退出を促す 段階的な値上げ が付く。逆方向 TSA では、残存義務のために子会社から親会社へサービスが戻される。

## 税務上の考慮点

日本の税制適格（「適格」）組織再編ルール（法人税法 2-12 条）は、次の場合に課税繰延を認める。

- **同一グループ内再編** — 再編前後の 100% 所有
- **共同事業再編** — 実質事業テスト（>80% の 従業員 継続、事業継続、持分交換）
- **2017  スピンオフ ルート** — 事前の資産再編を伴わない、親会社株主への直接 株式分配

非適格分割は **親会社レベルの時価評価益** と印紙税上の非効率を発生させる。新しいカーブアウト構造では NTA 個別照会 が増えている。クロスボーダー・カーブアウトは [[finance/multi-jurisdiction-identity-tax-leverage|tax-jurisdiction comparison]] も参照。

## カーブアウト作業ストリーム

1. **対象範囲の定義** — 移転する資産、契約、従業員、IP、不動産、規制ライセンスの範囲
2. **独立ベースのカーブアウト財務** — 親会社配賦を除外して子会社財務を組み替える
3. **Day-1  準備** — TSA 範囲、IT 切替 計画、財務機能の設定、銀行口座開設
4. **規制対応** — 売上高が閾値を超える場合の [[finance/jftc-merger-control-process|JFTC]] 届出、セクター規制当局（銀行、通信）、クロスボーダーなら 外国直接投資規制
5. **税務ストラクチャリング** — 適格ステータスを追求し、新規論点で NTA 照会回答 を確保
6. **従業員移転** — 会社分割では労働契約承継法対応、事業譲渡 では個別同意
7. **顧客 / 仕入先同意** — 支配権変更 の洗い出し

## 近時の事例（2023-2026）

| 年 | 親会社 | カーブアウト対象事業 | 経路 | 注記 |
|---|---|---|---|---|
| 2023 | Toshiba | 非公開化後の複数再編 | 第三者売却 + スピンオフの混合 | 非公開化 後の最適化 |
| 2024 | Sony FG | Sony Financial Group スピンオフ（2025 に再上場） | 株式分配 スピンオフ | 2017 改正後の スピンオフ 手法、税制適格 |
| 2024 | Hitachi | Astemo（自動車部品） | PE への第三者売却 | ポートフォリオ整理 テーマの継続 |
| 2025 | 各種 TSE Prime 企業 | 非中核 コングロマリットの売却 | 混合 | TSE PBR<1  改革圧力がカーブアウトを促進 |

## リサーチ・チェックリスト

1. TDnet / EDINET 提出書類 から発表、構造（事業譲渡 / 株式譲渡 / 分割 / スピンオフ）、税制適格選択を確認する。
2. [[finance/jftc-merger-control-process|JFTC]] 届出タイミングと クロージング 条件を対応付ける。
3. プレスリリースで TSA 範囲と終了トリガーを特定する。
4. 上場子会社株式が閾値超で移転する場合、[[finance/japan-tender-offer-process|TOB]] が必要か確認する。
5. 親会社 / 子会社の 評価への影響 は [[finance/japan-listed-financial-groups-investable-universe|listed FG universe]] と照合する。

## 関連項目

- [[finance/INDEX]]
- [[finance/cross-border-m-a-japan]]
- [[finance/japan-tender-offer-process]]
- [[finance/japan-mbo-and-squeeze-out-process]]
- [[finance/jftc-merger-control-process]]
- [[finance/japan-takeover-defense-poison-pill]]
- [[finance/japan-acquisition-finance]]
- [[finance/japan-leveraged-buyout-economics]]
- [[finance/multi-jurisdiction-identity-tax-leverage]]
- [[financial-licenses/securities-license-stack]]
- [[INDEX|FinWiki index]]

## 出典

- METI: M&A 指針および公正 M&A 指針の公開ページ.
- METI: 2023  カーブアウト / グループ経営ガイドラインのプレスリリース.
- NTA: 法人税法の適格組織再編ルール.
- JFTC: 事業譲渡 / 会社分割取引の届出閾値.
- FSA: 上場子会社株式移転時の金商法公開買付規制との関係.
