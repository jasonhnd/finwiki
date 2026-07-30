---
title: ステーブルコイン公開チェーンの token 戦略 —— 3 状態ではなく検証可能な設計軸で読む
aliases: [token trilemma, stablecoin chain token strategy, L1 token design]
domain: fintech
kind: framework
topic: stablecoin-chain-token-strategy-trilemma
created: 2026-05-13
last_updated: 2026-07-30
last_tended: 2026-07-30
review_by: 2026-10-30
confidence: likely
tags: [fintech, blockchain, token, framework, evidence]
status: active
sources:
  - https://help.coinbase.com/en/coinbase/other-topics/other/base
  - https://docs.tempo.xyz/protocol/fees
  - https://docs.tempo.xyz/learn/tempo/native-stablecoins
  - https://www.sec.gov/Archives/edgar/data/1876042/000187604226000150/crcl-20260331.htm
  - https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm
---

# ステーブルコイン公開チェーンの token 戦略 —— 3 状態ではなく検証可能な設計軸で読む

## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it with [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]] and [[systems/cross-chain-five-pole-comparison-matrix|クロスチェーン 5 極比較マトリックス]].

> [!info] TL;DR
> 決済チェーンの token 戦略は「発行する・しない・迷っている」という固定的な 3 状態だけでは説明できない。少なくとも、**gas 支払資産、コンセンサス資産、ガバナンス権、販売・配布段階、発行主体**を分けて確認する必要がある。2026 年 7 月 30 日時点の公式資料では、Base は ETH を gas に使い新規 network token の発行を現在計画していない。Tempo は native token を持たず、対応 stablecoin で手数料を払う。Arc は ARC token の private presale 契約を開示しているが、これは公開上場や完全配布と同義ではない。

## 現在確認できる 3 事例

| Network | 公式資料で確認できる状態 | 手数料 / network asset | 開示上の注意 |
|---|---|---|---|
| Base | Coinbase Help は「現在、新しい network token を発行する計画はない」と記載 | ETH が native gas token | 「現在の計画」であり、永久的な不発行契約とは確認できない |
| Tempo | 公式 protocol docs は「Tempo has no native token」と明記 | USD 建ての対応 TIP-20 stablecoin で gas・priority fee を支払い可能 | native volatile token を持たない設計と、将来変更不能という約束は別 |
| Arc | Circle は 2026 年 5 月に 7.40 億 ARC、同年 6 月に追加 6,750 万 ARC の private-placement 契約を開示 | ARC は将来の PoS / delegated-PoS 移行後の network coordination asset として説明 | presale 契約は token の公開上場、即時配布、移行完了を意味しない |

出典: [Coinbase Help — Base](https://help.coinbase.com/en/coinbase/other-topics/other/base)、[Tempo transaction fees](https://docs.tempo.xyz/protocol/fees)、[Tempo TIP-20](https://docs.tempo.xyz/learn/tempo/native-stablecoins)、[Circle 2026-Q1 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000150/crcl-20260331.htm)、[Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)。

## なぜ単純な「3 状態」では足りないか

同じ「token あり」でも、役割と成熟段階は異なる。

1. **gas asset**：利用者が transaction fee を何で払うか。
2. **validator / consensus asset**：validator が stake する資産は何か。
3. **governance asset**：protocol 変更への投票権を何が持つか。
4. **coordination / incentive asset**：network 参加者へのインセンティブを何で設計するか。
5. **distribution state**：未発行、契約済み presale、delivery 済み、transfer 制限中、公開流通を区別する。
6. **issuer and control**：運営会社、foundation、protocol governance のどこが発行・変更権限を持つか。

Arc の事例では、Circle の SEC 提出資料が private placement と将来の consensus 移行を開示している。購入者には移行日から最低 1 年の lock-up があり、2028 年 5 月 8 日までに token delivery や PoS / delegated-PoS 移行が完了しない場合などに repayment rights が生じ得る。したがって「発行済み」の一語で、販売契約、delivery、transferability、network 稼働をまとめて扱うべきではない。

出典: [Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)。

## 検証フレーム

network token の戦略を比較するときは、次の順に一次資料を確認する。

| 検証項目 | 見る資料 | 記録すべき内容 |
|---|---|---|
| 手数料 | protocol specification | fee unit、利用可能資産、validator の受取資産 |
| consensus | architecture / whitepaper / filing | 現行方式と移行条件 |
| 発行 | issuer filing / token purchase agreement | 売却数量、価格、delivery 条件、返金条件 |
| 移転 | purchase agreement / protocol rules | lock-up、vesting、transfer restriction |
| governance | governance docs | proposal・vote・upgrade 権限 |
| 現在の公式方針 | issuer / operator statement | 文言の日付と、「現在の計画」か拘束的約束か |

出典: 比較対象の一次資料は [Base の公式説明](https://help.coinbase.com/en/coinbase/other-topics/other/base)、[Tempo fee specification](https://docs.tempo.xyz/protocol/fees)、[Circle SEC filing](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)。上表はこれらを横断して読むための分析手順である。

## 分析上の境界

- token の有無だけから、規制負担が「最低・最高」と順位付けすることはできない。法的評価は販売方法、権利、購入者、発行主体、利用法域に依存する。
- private presale の調達額や implied fully diluted valuation は、network の利用価値や公開市場価格を保証しない。
- 「no current plan」は更新可能な会社方針であり、10 年間の不発行コミットメントではない。
- token 発行を親会社の損失、訴訟、特定人物の兼職に結び付けるには、当事者の直接開示が必要である。
- 競合 1 社の変更が他社の token 発行を必然的に誘発するというゲーム理論上の均衡は、上記資料からは実証されていない。

このため、本ページは「3 つの安定均衡」を主張するものではなく、公開資料から token 設計と distribution state を誤読しないための検証フレームとして扱う。

## Related
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
- [[fintech/stablecoin-revenue-split-economics|ステーブルコイン利息分配経済学]]
- [[fintech/usd-stablecoin-interchange|USD Stablecoin Interchange]]
<!-- /wiki-links:managed -->

## Sources

- [Coinbase Help — Introducing Base](https://help.coinbase.com/en/coinbase/other-topics/other/base)
- [Tempo — Transaction Fees](https://docs.tempo.xyz/protocol/fees)
- [Tempo — TIP-20 Tokens](https://docs.tempo.xyz/learn/tempo/native-stablecoins)
- [Circle 2026-Q1 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000150/crcl-20260331.htm)
- [Circle 2026-06-29 Form 8-K](https://www.sec.gov/Archives/edgar/data/1876042/000187604226000205/crcl-20260629.htm)
