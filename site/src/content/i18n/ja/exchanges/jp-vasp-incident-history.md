---
source: exchanges/jp-vasp-incident-history
source_hash: 8ff3ab837d160b52
lang: ja
status: machine
fidelity: ok
title: "国内 VASP 暗号資産流出事件史 (2014-2026)"
translated_at: 2026-07-29T11:50:43.000Z
---

# 国内 VASP 暗号資産流出事件史 (2014-2026)

## 概要

本稿は、日本の交換業者または国内顧客に大きく影響した主要流出事案を、公的資料と当事社公表で確認できる金額・資産量・帰結に限定して整理する。事件と法改正・自主規制の時系列は示すが、各事件が単独で特定制度を生んだという因果関係は、公的資料で明記される範囲を超えて断定しない。

## 主要事件タイムライン

下表の金額は事件公表時点の概算で、暗号資産数量と円換算を混同しない。Mt.Gox、Coincheck、Zaif、BITPoint、DMM Bitcoin の公表資料を参照し、別時期の Liquid 事案は同一基準で確認できないため除外した。 ^[Sources: https://www.fsa.go.jp/news/30/virtual_currency/20180308.html; https://www.fsa.go.jp/news/30/virtual_currency/20180925.html; https://www.remixpoint.co.jp/corporate/press/2019/; https://www.npa.go.jp/bureau/cyber/koho/caution/caution20241224.html; https://www.dmm.com/bitcoin/news/20241202_01.html.]

| 年月 | VASP | 流出規模 | 帰結 |
|------|------|---------|------|
| 2014-02 | Mt.Gox | 約 850,000 BTC（顧客分約750,000 BTC、会社分約100,000 BTC とされた） | 法的整理を経て民事再生手続 |
| 2018-01 | [[exchanges/jp-exchange-coincheck]] | 約523百万 XEM、当時約580億円 | FSA 業務改善命令、のちにマネックスグループが買収 |
| 2018-09 | [[exchanges/jp-exchange-zaif]]（旧テックビューロ） | 約67億円 | FSA 業務改善命令、Zaif 事業をフィスコ仮想通貨取引所へ譲渡 |
| 2019-07 | BITPoint Japan | 約30.2億円 | 当時の親会社リミックスポイントが公表し、サービス停止・再開対応を実施 |
| 2024-05 | [[exchanges/jp-exchange-dmm-bitcoin]] | 4,502.9 BTC、当時約482億円 | 警察庁等が TraderTraitor に帰属、顧客口座・預かり資産を SBI VC トレードへ移管 |

## 規制反射 (3 段階)

1. **2017 資金決済法改正** — 暗号資産交換業者の登録制度を導入
2. **2018-2020 自主規制・業者規律** — JVCEA が認定資金決済事業者協会となり、法改正・自主規制で顧客資産管理とホットウォレット相当額の履行保証暗号資産などの枠組みを整備
3. **2020 金商法等改正** — 暗号資産デリバティブを金融商品取引法の枠組みに取り込み、交換業の顧客資産管理規律も改正

この区分は制度の施行順を示す。個別事件との一対一の因果関係を意味しない。

## Lazarus 帰属の位置づけ

DMM Bitcoin 事案について、警察庁は FBI・米国防総省サイバー犯罪センターと連名で、北朝鮮当局と関係する TraderTraitor の関与を公表した。公表資料では、攻撃者が委託先 [[exchanges/jp-custody-ginco]] 従業員に採用連絡を装い、悪意ある Python スクリプトを実行させ、通信システムのセッション情報を悪用して取引依頼を改ざんしたと説明される。署名鍵そのものを奪取したとは記載しない。

## 関連

- [[exchanges/jp-exchange-coincheck]] · [[exchanges/jp-exchange-zaif]] · [[exchanges/jp-exchange-custodiem]] · [[exchanges/jp-exchange-dmm-bitcoin]]
- [[exchanges/jp-foreign-exchange-bitforex]] — 日本で無登録営業警告を受けた海外事業者の記録
- [[fintech/japan-financial-regulation]] — 資金決済法 / 金商法の枠組み
- [[exchanges/jp-custody-ginco]] — DMM 事案の侵入経路

出典: 公開情報整理 (FSA 業務改善命令・行政処分公表、JVCEA 公告、各事案当事社の IR・記者会見・第三者委員会調査報告書、警察庁/サイバー警察局公表、Chainalysis/Elliptic 公開リサーチ)
