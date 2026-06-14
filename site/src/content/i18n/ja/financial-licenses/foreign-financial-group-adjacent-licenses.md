---
source: financial-licenses/foreign-financial-group-adjacent-licenses
source_hash: 0c8a0dbd0818fbce
lang: ja
status: machine
fidelity: ok
title: "日本における外資系金融グループ隣接ライセンス"
translated_at: 2026-06-02T14:54:39.098Z
---

# 日本における外資系金融グループ隣接ライセンス

## 概要

日本における外資系金融グループは、単一の免許ではなく、外国銀行支店、証券会社 / Type I FIBO、投資運用、信託 / カストディ、外国銀行代理、決済、駐在員事務所などを積み重ねて活動することが多い。問うべきなのは「どの日本法人がどの規制業務を行っているか」である。

このページは [[financial-licenses/foreign-bank-branch-license-route|foreign-bank branch license route]]、[[financial-licenses/foreign-bank-agency-business-route|foreign bank agency route]]、[[financial-licenses/securities-license-stack|securities license stack]]、[[securities/financial-instruments-business-operators-japan-index|FIEA operator registry]]、[[banking/japan-trust-bank-custody-map|trust-bank custody map]]、[[banking/foreign-bank-japan-retreat|foreign-bank Japan retreat]] と併せて使う。

## ライセンスの積み重なり

| 活動 | 想定されるルート | 確認元 |
|---|---|---|
| 日本支店からの預金 / 融資 / 貿易金融 | 外国銀行支店免許 | 金融庁の銀行 / 外国銀行支店一覧 |
| ブローカレッジ / 引受 / デリバティブ / 証券販売 | 第一種金融商品取引業、第二種金融商品取引業、登録金融機関、JSDA 加盟 | 金融庁の金融商品取引業者一覧、JSDA 会員一覧 |
| 資産運用 / 助言 | 投資運用業 / 投資助言・代理業登録 | 金融庁の金融商品取引業者一覧 |
| グローバル・カストディ / 資産管理サービス | 主体に応じて銀行支店、信託銀行、信託会社、またはカストディサービスのルート | 金融庁の銀行 / 信託関連一覧、会社開示 |
| 外国銀行代理 | 本体外国銀行の代理 / 仲介 | 金融庁の外国銀行代理銀行一覧 |
| 決済 / 送金 / ウォレット | 資金移動、前払式支払手段、電子決済等代行、EPI | 金融庁の資金決済法関連一覧および [[payments/INDEX|payments domain]] |

## グループ別の読み方例

| グループ | 1ページでは足りない理由 |
|---|---|
| [[foreign-financial-institutions/jpmorgan-japan|JPMorgan Japan]] | 銀行支店、証券、市場業務、資産運用、カストディ類似の顧客サービスが別法人に分かれる場合がある。 |
| [[securities-firms/goldman-sachs-japan|Goldman Sachs Japan]] | 証券 / 投資銀行の役割は、銀行業や資産運用の隣接機能とは異なる。 |
| [[foreign-financial-institutions/bank-of-america-japan|Bank of America Japan]] | 銀行支店と証券 / 市場業務は切り分けて読む必要がある。 |
| [[foreign-financial-institutions/bnp-paribas-japan|BNP Paribas Japan]] | 銀行、証券、資産運用、リース / ファイナンス隣接機能が別法人に置かれる場合がある。 |
| [[foreign-financial-institutions/ubs-japan|UBS Japan]] | ウェルス、銀行支店、証券、資産運用のルートが分岐することがある。 |
| [[foreign-financial-institutions/barclays-japan|Barclays Japan]] / [[foreign-financial-institutions/deutsche-japan|Deutsche Japan]] | 銀行支店、証券、市場リスク業務は別々の登録確認を通じて整理する。 |
| [[foreign-financial-institutions/bny-mellon-japan|BNY Mellon Japan]] / [[foreign-financial-institutions/state-street-japan|State Street Japan]] | カストディ / 資産管理サービスにより、通常のホールセール銀行支店とは性格が異なる。 |
| [[foreign-financial-institutions/euroclear-bank-japan|Euroclear Bank Japan]] / [[foreign-financial-institutions/clearstream-banking-japan|Clearstream Banking Japan]] | ICSD、決済、担保、カストディ、開示ルートにより、銀行支店の行がインフラ隣接になる。 |
| [[securities-firms/anz-bank-japan|ANZ Japan]] | 銀行支店と証券 / 金融商品取引業の隣接機能を、銀行と証券に分けて読む必要がある。 |

## 確認すべき問い

| 問い | 公開情報上の意味 |
|---|---|
| 顧客契約の相手は支店、証券法人、運用会社、信託銀行、海外法人のどれか。 | 法的責任と開示は主体ごとに変わる。 |
| グループは日本の銀行支店と別の証券会社を持つか。 | 銀行法ルートと金融商品取引法ルートを混同してはいけない。 |
| 商品は日本でブッキングされるのか、海外でブッキングされるのか。 | ブッキングモデルは監督、リスク、顧客開示に影響する。 |
| カストディは付随機能か、主たる事業モデルか。 | カストディ系グループは信託 / 証券インフラ地図に接続する。 |
| レジストリ行だけで足りるのか、独立ページが必要か。 | 戦略上、インフラ上、または回廊上重要な主体だけを昇格する。 |

## 昇格ルール

外資系グループは、次の少なくとも一つに当てはまる場合に、レジストリのみの扱いから独立ページへ昇格する。

- 市場インフラ、カストディ、担保、または証券決済上の重要性がある。
- 大型投資銀行 / グローバル市場業務として日本にとって重要である。
- クロスボーダーの法人取引 / 貿易 / プロジェクトファイナンス回廊として重要である。
- 日本で複数のライセンス類型を持ち、ルートマップが必要である。
- 直近の金融庁モニタリング、ビジネスモデル転換、または公開された戦略開示がある。

それ以外の場合は、[[foreign-financial-institutions/foreign-bank-branches-japan-index|foreign-bank branch registry index]] または関連するレジストリ管理ページに残す。

## 関連

- [[financial-licenses/INDEX]]
- [[financial-licenses/foreign-bank-branch-license-route]]
- [[financial-licenses/foreign-bank-agency-business-route]]
- [[financial-licenses/securities-license-stack]]
- [[securities/financial-instruments-business-operators-japan-index]]
- [[banking/japan-trust-bank-custody-map]]
- [[banking/foreign-bank-japan-retreat]]
- [[foreign-financial-institutions/foreign-bank-branches-japan-index]]
- [[foreign-financial-institutions/euroclear-bank-japan]]
- [[foreign-financial-institutions/clearstream-banking-japan]]
- [[securities-firms/anz-bank-japan]]
- [[INDEX|FinWiki index]]

## 出典

- 金融庁: 銀行一覧、金融商品取引業者一覧を含む免許・登録金融機関一覧。
- JSDA: 会員一覧。
- 金融庁: 外国銀行支店および外国証券会社に関するモニタリングレポート。
- International Bankers Association of Japan: 会員ディレクトリ。
