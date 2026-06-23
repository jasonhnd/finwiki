---
title: 韓国 5 大 CEX 制度比較 — Upbit / Bithumb / Coinone / Korbit / GOPAX
aliases:
  - Korea CEX comparison
  - 韓国仮想資産取引所 5 強
  - 韓国 ISMS-CASP regime
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-06-23
review_by: 2026-08-07
confidence: likely
tags:
  - exchanges
  - cex
  - korea
  - regulation
  - isms
  - comparison
sources:
  - https://www.fsc.go.kr/
  - https://www.kisa.or.kr/
status: active
---

# 韓国 5 大 CEX 制度比較 — Upbit / Bithumb / Coinone / Korbit / GOPAX

## 韓国制度概要

韓国は **特定金融情報法 (특정금융정보법, 2021-03-25 施行)** で **仮想資産事業者 (VASP / VA-OP, 가상자산사업자)** 登録制度を成立させた。登録 2 要件: **(a) KISA (Korea Internet & Security Agency) の ISMS 認証** + **(b) 国内銀行との実名口座契約 (실명확인 입출금 계정)**。両要件を満たして **金融情報分析院 (FIU, 韓国版 FinCEN)** に登録できた取引所のみが **KRW 取引ペア (KRW spot market)** を提供可能。2026 年時点で KRW 取引可能なのは下記 **5 社のみ**。コイン-only 取引所 (代表: GDAC など) は登録済みでも KRW ペア非対応。

## 5 強プロファイル

| 取引所 | 親会社 | 設立 | 韓国 spot シェア | 特徴 |
|---|---|---|---|---|
| **Upbit** | Dunamu (Kakao 系) | 2017-10 | **~70%** (圧倒的首位) | 韓国最大、グローバル top 10 入り、Kakao Bank 実名口座契約 |
| **Bithumb** | Bithumb Korea | 2014-01 | ~25% (2 位) | 老舗最大手、**IPO 計画 2026 進行中** (KOSDAQ 想定)、NH農協銀行契約 |
| **Coinone** | Coinone | 2014-08 | ~3% (中堅) | 2014 設立、Carrot Banking 系の実名口座、独立系 |
| **Korbit** | NHN (Naver 子会社) | 2013-07 | ~2% | **韓国初の CEX** (2013)、NHN ペイコ系列、Shinhan 銀行契約 |
| **GOPAX** | Streami → Binance Korea | 2017-11 | ~1% (5 位) | 旧 Streami、**Binance 2023-02 過半数株式取得** → 韓国 FIU 抗議で部分後退 (Binance 議決権希釈) |

## 実名口座銀行契約 (실명확인 입출금 계정)

韓国 5 大銀行系列との 1 取引所 1 銀行原則:
- **KB Kookmin / Shinhan / NH農協 / Hana / Woori** が国内 5 大銀行。
- 接続できない取引所は **KRW spot 取扱不可** → 撤退要因 (過去多数の中小取引所がこの要件で淘汰)。
- 銀行側は AML/CFT 責任を負うため契約締結に消極的 → 新規参入の高いバリアー。

## ISMS-CASP 認証

**KISA** が監査する情報セキュリティ管理体系認証。
- **基本 ISMS**: 全 VASP に必須。
- **強化 ISMS-P** (Personal info): 取引高 **100 億ウォン超**事業者は必要。
- 年次更新監査あり、不備時は登録抹消可能性。

## 国際比較

| 項目 | 韓国 | 日本 | 米国 |
|---|---|---|---|
| 主規制機関 | **FSC/FIU 単一** | FSA + [[exchanges/jvcea-self-regulatory-overview|JVCEA]] 二重監督 | 州+連邦多重 (NYDFS / SEC / CFTC / FinCEN) |
| 登録制度 | [[exchanges/jp-vasp-regulatory-timeline|VASP 登録]] (2021-) | [[exchanges/fsa-vasp-registration-system|FSA VASP 登録]] (2017-) | MSB + 州 BitLicense |
| 認証 | KISA ISMS | 金融庁検査 + JVCEA 自主規制 | 州別 |
| 実名口座要件 | **強制 1:1 銀行契約** | 銀行契約推奨だが必須でない | 銀行契約自由 |

韓国は **単一規制機関 + 実名口座強制**で 5 社寡占を制度的に作出した点で、日本の [[fintech/japan-financial-regulation|二重監督モデル]]とも米国の多重ライセンスモデルとも異なる。

## Related

- [[exchanges/global-cex-top10-comparison]] — Upbit が世界 top 10 入り
- [[exchanges/fsa-vasp-registration-system]] — 日本制度比較
- [[exchanges/jvcea-self-regulatory-overview]] — 日本自主規制対比
- [[fintech/japan-financial-regulation]] — 日本金融規制全体像

来源: FSC (금융위원회) / KISA 公告, 韓国主要メディア (KBS / Korea Herald / 코인데스크 코리아), 各社公式 IR
