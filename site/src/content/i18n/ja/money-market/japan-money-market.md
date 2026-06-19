---
source: money-market/japan-money-market
source_hash: 90a8356680a2f50d
lang: ja
status: machine
fidelity: ok
title: "Japan money market"
translated_at: 2026-06-19T06:09:18.131Z
---

# Japan money market

## Wiki route

本エントリは [[money-market/INDEX|money-market index]] の下に位置する。ピア／対比の文脈については [[money-market/call-market-structure|Call market structure]] と、より広範な体系／規制境界については [[money-market/boj-open-market-operations|BoJ open market operations]] と照らし合わせて読むこと。

## TL;DR

日本の短期金融市場は、日本銀行が金融政策を実施し、金融機関が準備預金／決済残高を管理し、短資会社が短期資金を仲介する、短期の資金調達・流動性調整の層である。最も重要なオペレーションのシグナルは無担保コールオーバーナイト物レートであり、現行の枠組みにおける金融市場調節方針が短期金利のターゲットとしてこれを用いているためである。

本ページはドメインの概観である。コール市場のメカニズムについては [[money-market/call-market-structure|call market structure]] を、実施ツールについては [[money-market/boj-open-market-operations|BoJ open market operations]] を用いること。

## Market Map

| Layer | Function | FinWiki route |
|---|---|---|
| Policy decision | 日銀政策委員会が MPM で金融市場調節方針を決定する。 | [[financial-regulators/boj-monetary-policy]] |
| Operating market | 短期金利の形成、特に無担保コールオーバーナイト取引。 | [[money-market/call-market-structure]] |
| Market operations | 日銀がオペレーションを通じて資金を供給または吸収する。 | [[money-market/boj-open-market-operations]] |
| Intermediaries | 銀行、証券会社、信託銀行、短資会社が短期流動性を管理する。 | [[financial-regulators/tokyo-tanshi]], [[financial-regulators/central-tanshi]], [[financial-regulators/ueda-yagi-tanshi]] |
| Data layer | 日銀がコールマネー市場データとオペレーション結果を公表する。 | 日銀統計／オペレーション結果リリース |

## Why It Matters

短期金融市場の構造は、金融政策と金融会社の収益とをつなぐ伝達ベルトである：

- **メガバンク**：準備預金残高、預金ベータ、貸出のリプライシング、JGB ポートフォリオの評価、ホールセール調達コスト。
- **信託銀行／カストディ銀行**：決済流動性、担保の移動、機関投資家のキャッシュに対する短期金利の影響。
- **証券会社**：レポ、担保ファイナンス、JGB のマーケットメイク、イールドカーブ関連の活動。
- **短資会社**：仲介需要とコール市場の活動、特に短期金利の正常化がオーバーナイト取引を復活させる場合。
- **政策金融／公的機関**：キャッシュマネジメントと発行条件が、短期金利と JGB 市場の流動性の影響を受ける。

## Post-YCC Reading Rule

日銀の 2024 年 3 月のマイナス金利およびイールドカーブ・コントロールからの体制転換の後、短期金融市場は観測可能な政策伝達のサーフェスとして再び有用になった。重要なチェックは政策金利のヘッドラインだけではなく、実際の無担保コールオーバーナイト物レート、取引量、準備預金環境、日銀のオペレーションがすべて同じ方向を指しているかどうかである。

## Related

- [[money-market/INDEX|money-market INDEX]]
- [[money-market/call-market-structure]]
- [[money-market/boj-open-market-operations]]
- [[financial-regulators/boj-monetary-policy]]
- [[financial-regulators/tokyo-tanshi]]
- [[financial-regulators/central-tanshi]]
- [[financial-regulators/ueda-yagi-tanshi]]
- [[financial-licenses/INDEX]]
- [[INDEX|FinWiki index]]

## Sources

- Bank of Japan: Money Market.
- Bank of Japan: What are market operations?
- Bank of Japan: How have the Bank's guidelines for market operations changed?
- Bank of Japan: Call Money Market Data.
- 日本銀行：2024年度の金融市場調節.
