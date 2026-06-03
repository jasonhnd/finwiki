---
source: securities/japan-short-selling-and-stock-loan-controls
source_hash: d764b7bd2fb3612a
lang: ja
status: machine
fidelity: ok
title: "日本の空売りと貸株管理"
translated_at: 2026-06-03T00:53:08.344Z
---
# 日本の空売りと貸株管理

## 概要

日本の空売りは、法的な空売り規制、借株 / 証券金融の利用可能性、取引所 / 証券会社による銘柄別規制という三つの管理面で成り立つ。空売り残高、JSF 貸付残高、信用売り、証券貸借を一つの数値として扱ってはならない。

このページは、[[securities/INDEX|securities domain]]、[[securities/japan-margin-trading-and-securities-finance|margin trading and securities finance]]、[[securities/japan-stock-lending-market-route|stock lending market route]]、[[JapanFG/japan-securities-finance|Japan Securities Finance]]、[[securities/japan-best-execution-sor-pts|best execution / SOR / PTS]]、[[securities/japan-pts-liquidity-data-guide|PTS liquidity data guide]]、[[securities/tokyo-stock-exchange|Tokyo Stock Exchange]] とあわせて読む。

## 管理レイヤー

| レイヤー | 管理対象 | 出典経路 |
|---|---|---|
| 明示 / 確認 | 売り注文が空売りか現物売りかを表示し、証券会社が確認するか。 | FIEA / JPX の空売り規則解説。 |
| 価格規制 | 銘柄別条件を満たしたときに発動する空売り価格規制。 | JPX 空売り規制。 |
| 裸売り禁止 | 保有または借入手当のない売却を制限する。 | FSA 空売り規制措置。 |
| 空売りポジション報告 | 閾値を超える大口空売りポジションは報告 / 開示経路が必要。 | FSA 空売り規制措置と取引所開示。 |
| 借株の利用可能性 | 借入株式は、信用 / 貸借取引、証券貸借、相対借入から来る。 | [[JapanFG/japan-securities-finance|JSF]]、証券会社、機関投資家の貸し手。 |
| 銘柄別信用取引規制 | TSE / JSF は信用取引または信用取引貸付を制限できる。 | JPX 信用取引規制、JSF 通知。 |

## データマップ

| データシグナル | 有用な用途 | 注意点 |
|---|---|---|
| 空売り売買代金 | フロー圧力と市場構造の監視。 | 未決済の空売りポジションとは同じではない。 |
| 空売りポジション開示 | 保有者別の大口開示ポジション。 | 閾値ベースであり、市場在庫全体ではない。 |
| TSE 信用残 | 個人 / 証券会社の信用ポジション。 | 制度信用 / 一般信用の複雑さを含む。 |
| JSF 貸付残高 | 制度信用 / 証券金融の需給経路。 | すべての OTC 貸株や証券会社内部供給を含まない。 |
| 品貸料 / 貸借料 | 借株不足のシグナル。 | 一時的かつ銘柄固有の場合がある。 |
| PTS シェア / 執行市場データ | 市場間相互作用と SOR ルーティング。 | JPX / JSDA データから分母を取る必要がある。 |

## 貸株と空売り

貸株は資金調達と決済の仕組みである。空売りは取引行為である。同じ借入株式が、マーケットメイク、ヘッジ、信用売り、決済補完、方向性のあるショートエクスポージャーを支えることがある。このため、借株データから方向性のある主張を行う前に [[securities/japan-stock-lending-market-route|stock lending market route]] を読むべきである。

## JapanFG 上の重要性

- [[JapanFG/japan-securities-finance|Japan Securities Finance]] は、制度信用 / 貸借取引支援の中心機関である。
- [[JapanFG/sbi-securities|SBI Securities]]、[[JapanFG/rakuten-securities|Rakuten Securities]]、[[JapanFG/matsui-sec|Matsui Securities]]、[[JapanFG/gmo-click-securities|GMO Click Securities]]、[[JapanFG/dmm-com-securities|DMM.com Securities]] は、個人の信用取引とアクティブトレーダーのフローに重要である。
- [[JapanFG/nomura-hd|Nomura]]、[[JapanFG/daiwa-sg|Daiwa Securities Group]]、[[JapanFG/smbc-nikko|SMBC Nikko]]、[[JapanFG/mizuho-securities|Mizuho Securities]]、[[JapanFG/mufg-mums|MUMSS]] は、機関投資家の貸株、プライムブローカレッジ隣接領域、引受 / ヘッジフローに重要である。
- [[securities/japan-best-execution-sor-pts|Best execution / SOR / PTS]] は、空売り管理が市場選択と相互作用するときに重要である。

## 調査チェックリスト

1. 観測対象が空売り注文、信用売り、開示空売りポジション、貸株残高、品貸料シグナルのどれかを特定する。
2. 銘柄に JPX / TSE / JSF の規制があるか確認する。
3. 取引が制度信用、一般信用、OTC 借株、ヘッジ、マーケットメイクのどれかを確認する。
4. 信託銀行名義保有、貸株供給、方向性のある空売りを同一視しない。
5. 空売りと貸株規制は急速に変わりうるため、発行体別分析は正確な日付に結びつける。

## 関連項目

- [[securities/INDEX]]
- [[securities/japan-margin-trading-and-securities-finance]]
- [[securities/japan-stock-lending-market-route]]
- [[JapanFG/japan-securities-finance]]
- [[securities/tokyo-stock-exchange]]
- [[securities/japan-best-execution-sor-pts]]
- [[securities/japan-pts-liquidity-data-guide]]
- [[securities/japan-market-infrastructure-map]]
- [[money-market/jgb-repo-market-japan]]
- [[INDEX|FinWiki index]]

## 出典

- JPX: short-selling restrictions explanation.
- JPX: outstanding short-selling positions, short-selling value statistics, and margin / loan restriction pages.
- FSA: short-selling regulation releases and historical measures.
- FSA Access: explanation of making naked-short-selling prohibition permanent and expanding PTS treatment.
- JSF: securities-financing business page.
