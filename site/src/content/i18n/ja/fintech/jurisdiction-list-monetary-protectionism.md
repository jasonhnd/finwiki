---
source: fintech/jurisdiction-list-monetary-protectionism
source_hash: 2635391435b9b0a0
lang: ja
model: source-language-sync
status: machine
fidelity: ok
title: "GENIUS Act 第18条の域外制度比較 —— 貨幣保護主義という分析レンズ"
translated_at: 2026-07-30T02:03:00+09:00
---

# GENIUS Act 第18条の域外制度比較


## Wiki route

This entry sits under [[fintech/INDEX|fintech index]]. Read it against [[fintech/three-circles-stablecoin-mra-framework|米国・EU・日本のステーブルコイン市場アクセス比較]] for peer / contrast context and [[fintech/japan-financial-regulation|日本金融規制 — トークン・暗号資産・決済に関する法体系]] for the broader system / regulatory boundary.

> [!info] TL;DR
> ここで扱う根拠条文は「§501(d)」ではなく、2025 年 7 月 18 日成立の GENIUS Act **第18条（12 U.S.C. 5916）**である。第18条は、財務長官による外国制度の比較可能性判断、外国発行者の OCC 登録、米国内準備資産、相互取決めなどを定める。2026 年 7 月 30 日時点で、参照した財務省・OCC の一次資料からは、日本・EU・英国などを指定した確定済み国別リストや米日 MRA は確認できない。したがって「貨幣保護主義」は法令名ではなく、制度比較が市場アクセスを分け得ることを検討するための**分析レンズ**としてのみ用いる。

## 法令が実際に定めること

以下の表は [Public Law 119-27 第18条](https://www.govinfo.gov/content/pkg/PLAW-119publ27/pdf/PLAW-119publ27.pdf) と [OCC の 2026 年規則案](https://www.occ.treas.gov/news-issuances/federal-register/2026/91fr10202.pdf) に基づく。規則案は最終規則ではなく、国別判断そのものでもない。

| 項目 | 確認できる要件 | 確認できない主張 |
|---|---|---|
| 比較可能性判断 | 財務長官が外国のステーブルコイン監督制度を GENIUS Act と比較して判断する | 「2026-Q3 に第1波リストを公表」という法定期限 |
| 外国発行者 | 比較可能な制度下にあり、OCC 登録など第18条(a)の全条件を満たす必要がある | 特定国の発行者・チェーンに自動的な通行証を与える制度 |
| 米国内準備 | 原則、米国顧客の流動性需要に足りる準備を米国金融機関に置く | リスト入りだけで準備・登録要件が免除される仕組み |
| 相互取決め | 財務長官は外国当局と相互取決めを設け得る | MRA が比較可能性判断の常時必須条件であること |
| 公開情報 | 財務長官は比較可能と判断した外国を含む現行情報を公開する | 日本・EU・英国を指定済みとする公的発表 |
| 制裁等 | 包括的制裁対象国または一次的マネーロンダリング懸念国は要件を満たさない | 「リスト外なら個別 OFAC license が必須」という一律ルール |

## 2026 年 7 月時点の実装状況

- GENIUS Act の発効日は、成立から 18 か月後または主要連邦監督当局による最終規則の 120 日後のうち早い日である（[OCC Bulletin 2026-3](https://www.occ.treas.gov/news-issuances/bulletins/2026/bulletin-2026-3.html)）。
- OCC は 2026 年 2 月に規則案を公表し、外国発行者の登録・監督・米国内準備に関する実装案を示した。これは提案段階であり、個別登録の承認を意味しない。
- 日本の資金決済法、EU MiCA、英国その他の制度が「比較可能」と判断されるかは、将来の財務長官判断を待つ必要がある。制度が存在することと米国が比較可能性を認定することは別である。

## 「貨幣保護主義」仮説の使い方

第18条が将来、市場アクセスを制度単位で分ける可能性はある。ただし影響は、国名だけではなく少なくとも次の条件に依存する。

1. 財務長官の比較可能性判断と、その範囲・条件。
2. 個別発行者の OCC 登録、監督情報へのアクセス、執行可能性。
3. 米国内準備または相互取決めの具体的条件。
4. 発効日、経過措置、デジタル資産サービス事業者への販売制限。
5. 発行者が各市場で別途負う AML/CFT、制裁、消費者保護、販売規制。

このため、現時点では国別の勝率、独占期間、資本流入、価格決定権を事実として置かない。比較分析を行う場合は「法定要件」「規則案」「当局による国別判断」「個別発行者登録」を分離して更新する。

## 日本市場への読み替え

日本に資金移動業者・信託型・銀行預金型の制度があることだけでは、第18条上の比較可能性判断や米国市場アクセスは確定しない。SBI、JPYC、Progmat などの事業者を順位付けするには、少なくとも次の一次資料が必要である。

- 財務長官による日本制度の比較可能性判断。
- OCC による各外国発行者の登録結果。
- 日本の登録・発行・流通主体に関する金融庁の公開情報。
- 商品の発行残高、償還、準備、販売地域に関する事業者の開示。

これらが揃うまでは「USDC と JPYC の唯一の登録チャネル」「Progmat にクロスボーダーチャネルがない」「特定チェーンが第18条ルート外」といった断定はできない。日本の制度比較は [[fintech/japan-epi-four-camps-comparison|日本 SC 四陣営比較]] と [[fintech/japan-financial-regulation|日本金融規制]] を参照する。

## 関連

- [[fintech/global-stablecoin-regulatory-five-pole-matrix|主要法域のステーブルコイン規制比較]]
- [[fintech/genius-act-501-actual-implementation|GENIUS Act の実装状況]]
- [[fintech/occ-trust-bank-charter-federal-stablecoin-arbitrage|OCC charter アービトラージ]]
- [[fintech/central-banking-function-unbundling|中央銀行機能の解体 5 層]]

---
