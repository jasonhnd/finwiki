---
source: card-issuers/pocket-card
source_hash: 8c1c677e9aa454f3
lang: ja
status: machine
fidelity: ok
title: "ポケットカード (Pocket Card)"
translated_at: 2026-06-15T03:48:21.812Z
---

# ポケットカード (Pocket Card)

## Wiki 内の位置づけ

本項目は [[card-issuers/INDEX|card-issuers INDEX]]（そのドメインルート）の下に位置する。non-megabank の co-brand 同業 / 対比については [[card-issuers/epos-card|エポスカード]] と [[card-issuers/credit-saison|クレディセゾン]] と、監督 / システムの境界については [[financial-regulators/fsa|the FSA]] と [[payments/INDEX|payments]] と照らし合わせて読むこと。規律する acquiring 法令は [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]] である。

## 要点

ポケットカード株式会社は P-one カードや提携 (co-brand) カードを軸にする独立系 credit-card issuer。公開情報では伊藤忠商事・ファミリーマートを中心とする株主構成（伊藤忠グループ系）で、流通・コンビニ提携カードの文脈を持つ。カード発行・割賦は割賦販売法上の **包括信用購入あっせん** として行われ、銀行系・EC系・通信系カードとは異なる提携カード戦略を読むためのページ。

## 1. License / group boundary

| Item | Notes |
|---|---|
| Legal entity | ポケットカード株式会社 / Pocket Card Co., Ltd. |
| Ownership | 伊藤忠商事・ファミリーマートを中心とする株主構成（伊藤忠グループ系；持分は公開開示ベース） |
| Card / credit lane | 割賦販売法上の包括信用購入あっせん（P-one／提携カード割賦・分割払い／リボ） |
| Cash-advance lane | カードのキャッシング枠は貸金業法の枠組み |
| Supervision | 金融庁（貸金）＋ 経済産業省（割賦販売法）、自主規制は [[card-issuers/installment-sales-act-2020-amendment|日本クレジット協会]] |
| Wiki role | non-megabank co-brand / 提携カード issuer anchor |

## 2. Business model

ポケットカードは retail / コンビニ提携を入会・利用チャネルにし、提携 (co-brand) カードを通じて retail relationship を revolving credit と payment data に変換する。割賦の中身は一括・分割払い (分割払い)・リボ (リボルビング)。[[payment-firms/famima-digital-one|Famima Digital One]] のコード決済とともにファミマ／伊藤忠系の payment 接点を形成し、非 megabank のカード競争を読む good case になる。retail payment alliance と loyalty 経済を mapping する際にその boundary が効いてくる。

## 3. Why this page matters

- 金融持株会社だけを追っていると見落としやすいが、ポケットカードは独自の公開会社概要を持つ named card issuer であり、提携カード戦略という独自の retail-card moat を持つ。
- 親会社（伊藤忠商事・ファミリーマート中心）を確定し、megabank 系・流通系（[[card-issuers/aeon-financial-service|AEON]]・[[card-issuers/epos-card|エポス]]）とは別系統の伊藤忠／ファミマ系 payment alliance の anchor とする。
- 包括信用購入あっせん（割賦販売法）の登録ベース業務として位置づける。

## 関連

- [[card-issuers/epos-card|エポスカード]]
- [[card-issuers/credit-saison|クレディセゾン]]
- [[payment-firms/famima-digital-one|Famima Digital One]]
- [[card-issuers/installment-sales-act-2020-amendment|割賦販売法 2020 改正]]
- [[card-issuers/INDEX|card-issuers INDEX]]
- [[INDEX|FinWiki index]]

## 出典

- Pocket Card company profile.
- METI: registered operators under the Installment Sales Act (包括信用購入あっせん).
- 日本クレジット協会 (Japan Consumer Credit Association): industry self-regulation reference.

> [!info] 校核状態
> confidence: likely。ポケットカードが P-one／提携カードの独立系 issuer で、伊藤忠商事・ファミリーマートを中心とする株主構成（伊藤忠グループ系）であることは公開情報・公開報道に基づく。正確な持分比率（公開開示では伊藤忠商事・ファミリーマート・三井住友銀行で構成と報じられる）は時点で変動し得るため本ページでは比率を断定せず、構成主体のみ記載。2025 年時点ではファミマ系カードへの第三者出資検討の報道もあり、ownership は今後変わり得る — spot-check 対象。
