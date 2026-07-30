---
source: fintech/stablecoin-chain-token-strategy-trilemma
source_hash: c9a71247a0f45199
lang: ja
status: machine
fidelity: ok
title: "ステーブルコイン公開チェーンのトークン戦略"
translated_at: 2026-07-30T00:00:00+09:00
---

# ステーブルコイン公開チェーンのトークン戦略 —— 3 状態ではなく検証可能な設計軸で読む


## ウィキ上の位置づけ

この項目は [[fintech/INDEX|fintech index]] の配下に位置づけられる。[[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]] および [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極比較マトリックス]] とあわせて読む。

> [!info] 要約
> 決済チェーンのトークン戦略は「発行する・しない・迷っている」という固定的な 3 状態だけでは説明できない。少なくとも、**ガス支払資産、コンセンサス資産、ガバナンス権、販売・配布段階、発行主体**を分けて確認する必要がある。2026 年 7 月 30 日時点の公式資料では、Base は ETH をガスに使い、新規ネットワークトークンの発行を現在計画していない。Tempo はネイティブトークンを持たず、対応ステーブルコインで手数料を払う。Arc は ARC トークンの私募契約を開示しているが、これは公開上場や完全配布と同義ではない。

## 現在確認できる 3 事例

| ネットワーク | 公式資料で確認できる状態 | 手数料 / ネットワーク資産 | 開示上の注意 |
|---|---|---|---|
| Base | Coinbase Help は「現在、新しいネットワークトークンを発行する計画はない」と記載 | ETH がネイティブ・ガストークン | 「現在の計画」であり、永久的な不発行契約とは確認できない |
| Tempo | 公式プロトコル文書は「Tempo has no native token」と明記 | USD 建ての対応 TIP-20 ステーブルコインでガス・優先手数料を支払い可能 | ネイティブの変動性トークンを持たない設計と、将来変更不能という約束は別 |
| Arc | Circle は 2026 年 5 月に 7.40 億 ARC、同年 6 月に追加 6,750 万 ARC の私募契約を開示 | ARC は将来の PoS / delegated-PoS 移行後のネットワーク調整資産として説明 | 私募契約はトークンの公開上場、即時配布、移行完了を意味しない |

出典：[Coinbase Help — Base](https://help.coinbase.com/en/coinbase/other-topics/other/base)、[Tempo transaction fees](https://docs.tempo.xyz/protocol/fees)、[Tempo TIP-20](https://docs.tempo.xyz/learn/tempo/native-stablecoins)、[Circle 2026-Q1 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000150/crcl-20260331.htm)、[Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)。

## なぜ単純な「3 状態」では足りないか

同じ「トークンあり」でも、役割と成熟段階は異なる。

1. **ガス資産**：利用者が取引手数料を何で払うか。
2. **バリデータ / コンセンサス資産**：バリデータがステークする資産は何か。
3. **ガバナンス資産**：プロトコル変更への投票権を何が持つか。
4. **調整 / インセンティブ資産**：ネットワーク参加者へのインセンティブを何で設計するか。
5. **配布段階**：未発行、契約済み私募、引渡し済み、移転制限中、公開流通を区別する。
6. **発行者と支配**：運営会社、財団、プロトコル・ガバナンスのどこが発行・変更権限を持つか。

Arc の事例では、Circle の SEC 提出資料が私募と将来のコンセンサス移行を開示している。購入者には移行日から最低 1 年のロックアップがあり、2028 年 5 月 8 日までにトークン引渡しや PoS / delegated-PoS 移行が完了しない場合などに返済請求権が生じ得る。したがって「発行済み」の一語で、販売契約、引渡し、移転可能性、ネットワーク稼働をまとめて扱うべきではない。

出典：[Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)。

## 検証フレーム

ネットワークトークンの戦略を比較するときは、次の順に一次資料を確認する。

| 検証項目 | 見る資料 | 記録すべき内容 |
|---|---|---|
| 手数料 | プロトコル仕様 | 手数料単位、利用可能資産、バリデータの受取資産 |
| コンセンサス | アーキテクチャ / ホワイトペーパー / 提出資料 | 現行方式と移行条件 |
| 発行 | 発行者提出資料 / トークン購入契約 | 売却数量、価格、引渡し条件、返金条件 |
| 移転 | 購入契約 / プロトコル規則 | ロックアップ、ベスティング、移転制限 |
| ガバナンス | ガバナンス文書 | 提案・投票・アップグレード権限 |
| 現在の公式方針 | 発行者 / 運営者の声明 | 文言の日付と、「現在の計画」か拘束的約束か |

出典：比較対象の一次資料は [Base の公式説明](https://help.coinbase.com/en/coinbase/other-topics/other/base)、[Tempo fee specification](https://docs.tempo.xyz/protocol/fees)、[Circle SEC filing](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)。上表はこれらを横断して読むための分析手順である。

## 分析上の境界

- トークンの有無だけから、規制負担が「最低・最高」と順位付けすることはできない。法的評価は販売方法、権利、購入者、発行主体、利用法域に依存する。
- 私募の調達額や潜在完全希薄化後評価額は、ネットワークの利用価値や公開市場価格を保証しない。
- 「現在の計画なし」は更新可能な会社方針であり、10 年間の不発行コミットメントではない。
- トークン発行を親会社の損失、訴訟、特定人物の兼職に結び付けるには、当事者の直接開示が必要である。
- 競合 1 社の変更が他社のトークン発行を必然的に誘発するというゲーム理論上の均衡は、上記資料からは実証されていない。

このため、本ページは「3 つの安定均衡」を主張するものではなく、公開資料からトークン設計と配布段階を誤読しないための検証フレームとして扱う。

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/usd-stablecoin-interchange|USD ステーブルコイン・インターチェンジ]]
<!-- /wiki-links:managed -->

## 出典

- [Coinbase Help — Introducing Base](https://help.coinbase.com/en/coinbase/other-topics/other/base)
- [Tempo — Transaction Fees](https://docs.tempo.xyz/protocol/fees)
- [Tempo — TIP-20 Tokens](https://docs.tempo.xyz/learn/tempo/native-stablecoins)
- [Circle 2026-Q1 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000150/crcl-20260331.htm)
- [Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)
