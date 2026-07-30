---
source: fintech/multi-megabank-consortium-governance
source_hash: 37f39084a648bb79
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "複数メガバンク型コンソーシアム・ガバナンス"
translated_at: 2026-07-30T00:00:00+09:00
---
# 複数メガバンク・コンソーシアムのガバナンス


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置づけられる。隣接する文脈は [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]]、より広いシステム境界は [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度の三層構造（JPYC・USDC・Project Pax）]] とあわせて読む。

> [!info] 要約
> 公開資料から確認できる Progmat の事実は、2023-10-02 に設立された独立法人で、三菱 UFJ 信託銀行の 49.0% を筆頭に、IT、銀行、取引所関連の 8 社が出資したことである。これは複数主体の所有構造を示すが、意思決定速度、金融庁の「非支配」指導、顧客基盤、拡張性首位を証明しない。BIS Project Agorá は会社の共同所有モデルではなく、BIS / IIF が招集する中央銀行・民間金融機関の官民プロジェクトであり、2026 年にプロトタイプ報告書を公表した。両者はガバナンスの比較材料にはなるが、同じ法人類型や競争関係ではない。^[source:Progmat corporate release 2023-10-02; BIS Project Agorá project page and report 2026-05-27]

## 公開記録で確認できる形態

| ケース | 法的・組織的形態 | 公開資料で確認できる参加構造 | この資料だけでは判定できないこと |
|---|---|---|---|
| Progmat | 2023-10-02 設立の株式会社 | 8 株主。三菱 UFJ 信託銀行 49.0%、NTT データ 13.5%、その他 6 社 | 意思決定速度、実質支配、FSA の設計意図、他モデルより高い拡張性 |
| BIS Project Agorá | BIS / IIF による官民プロジェクト。完成品ではなくプロトタイプ | BIS の 2026 年プロジェクトページは 8 中央銀行と 40 超の金融機関を記載 | 株式所有、恒久的法人、商用開始、各参加者の退出制約 |

出典注記：Progmat の事実は [2023-10-02 の会社リリース](https://progmat.co.jp/press/pdf/press231002_01.pdf) に基づく。Agorá の事実は、現行の [BIS プロジェクトページ](https://www.bis.org/about/bisih/topics/fmis/agora.htm) と [2026 年プロトタイプ報告書](https://www.bis.org/publ/othp110.pdf) に基づく。

## Progmat 設立時の株主構成

| 株主 | 2023-10-02 公表出資比率 |
|---|---:|
| [[megabanks/mufg|三菱 UFJ 信託銀行]] | 49.0% |
| NTT データ | 13.5% |
| みずほ信託銀行 | 7.5% |
| 三井住友信託銀行 | 7.5% |
| [[megabanks/smfg|三井住友 FG]] | 7.5% |
| SBI PTS | 5.0% |
| JPX 総研 | 5.0% |
| Datachain | 5.0% |

出典注記：会社名と比率は、Progmat の [新経営体制・情報開示リリース](https://progmat.co.jp/press/pdf/press231002_01.pdf) から正確に転記した。これは設立日に公表された株主構成であり、後日の一次資料が公表された場合は現行の所有関係を再確認する必要がある。

## 所有構造から推定してはいけないこと

- 49.0% が過半数未満であることだけでは、会計・会社法・契約上の「支配」を確定できない。
- 公開資料には「49% は FSA の指導で意図的に設定した」との裏付けがない。
- 株主構成は、FSA が特定 stablecoin や共通インフラを承認したことを意味しない。
- DCC 会員数、顧客数、取引量、競合銀行の便益、退出オプションは、それぞれ別の資料で確認する必要がある。
- 「単一銀行所有」「銀行間 JV」「独立会社」の速度や拡張性を順位付けするには、共通指標と観測期間が必要である。

## BIS Project Agorá との対比

| 軸 | Progmat | BIS Project Agorá |
|---|---|---|
| 組織 | 日本の株式会社 | BIS / IIF が招集する官民プロジェクト |
| 参加の形 | 株主 8 社（設立時公表） | BIS ページ：8 中央銀行と 40 超の金融機関 |
| 公開された対象 | デジタルアセット発行・管理基盤の会社 | トークン化中央銀行準備とトークン化商業銀行預金を使うホールセール越境プロトタイプ |
| 2026-07 時点の出力 | 継続企業。個別プロダクトの状況は別途確認 | 2026-05-27 報告書 / プロトタイプ。BIS は完成品ではないと明記 |
| 比較上の限界 | 株式会社の株主構成と商品ガバナンスは別 | プロジェクト参加は株式所有ではない |

出典注記：Progmat の形態と設立時の株主構成は [会社リリース](https://progmat.co.jp/press/pdf/press231002_01.pdf)、Agorá の参加者数、資産モデル、プロトタイプという境界は [BIS の現行プロジェクトページ](https://www.bis.org/about/bisih/topics/fmis/agora.htm) に基づく。

## 共通リスク

以下は発生済み事実ではなく、複数主体ガバナンスを調査する際の分析チェックリストである。

- **意思決定権**：株式比率だけでなく、取締役指名権、拒否権、重要な留保事項を確認する。
- **経済的利益**：配当、利用料、IP、データ、商品別収益の帰属を確認する。
- **参加と退出**：株式譲渡制限、プロジェクト参加、サービス契約の終了条件を分ける。
- **規制責任**：プラットフォーム会社、発行者、受託者、流通業者、参加者の責任を分ける。
- **実績**：開始、取引量、利用可能性、遅延、コスト等の成果をガバナンス形態から推定しない。

## 応用

- あらゆる「複数メガバンク共通フィンテック・インフラ」議論の構造分析
- 韓国 / 台湾 / アジア諸国の SC コンソーシアム設計の参考
- mBridge / Project Nexus / IPS-RTGS 相互接続のガバナンス比較
- DTCC / Visa / Mastercard 等、既存の「業界共通インフラ」の発展形
- 中央銀行コンソーシアム + 民間 SC コンソーシアムの二層構造設計

---


## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/jp-trust-type-sc-architecture|日本信託型 SC アーキテクチャ]]
- [[fintech/cross-border-sc-via-swift-api|SWIFT API を介した越境 SC]]
- [[fintech/cosmos-ibc-for-financial-institutions|Cosmos IBC for FI]]
- [[fintech/japan-stablecoin-regulatory-landscape|日本 Stablecoin 法制度三層構造]]
- [[fintech/central-banking-function-unbundling|中央銀行機能のアンバンドリング 5 層]]
<!-- /wiki-links:managed -->
