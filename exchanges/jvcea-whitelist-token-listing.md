---
title: JVCEA 取扱銘柄 WhiteList 制度 — トークン上場プロセス + Green/Yellow リスト
aliases:
  - JVCEA WhiteList
  - 国内取扱暗号資産リスト
  - JVCEA Green Yellow List
  - 改正資金決済法 取扱認可
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-05-19
review_by: 2027-05-19
confidence: likely
tags:
  - exchanges
  - vasp
  - whitelist
  - listing
  - jvcea
  - token
sources:
  - https://jvcea.or.jp/
  - https://jvcea.or.jp/about/regulations/
status: candidate
---

## 1. 制度概要

JVCEA (日本暗号資産取引業協会) は認定自主規制団体として、国内 VASP (暗号資産交換業者) が取扱可能な銘柄を審査・公開リスト化する役割を担う。改正資金決済法のもとで、新規トークン上場には JVCEA 事前審査が事実上必須であり、FSA (金融庁) は審査機能の大部分を協会に委任している。会員 VASP は同協会の取扱方針規則に従い、新規・既存銘柄の取扱判断を行う。詳細は [[exchanges/jvcea-self-regulatory-overview]] 参照。

## 2. Green List (簡易審査) vs Yellow List (個別審査)

二段階制度として 2022 年頃から運用:

- **Green List** — 既に複数会員が取扱中で大型流動性のある主要 token (BTC / ETH / XRP / LTC / BCH / XLM / DOT 等)。新規 VASP は簡易届出のみで取扱可能。導入により上場期間が概ね 1 ヶ月程度に短縮。
- **Yellow List (個別審査)** — 新規 token または国内未取扱 token。個別審査 + 取扱可否判定 (期間 3-6 ヶ月、案件による)。発行体 due diligence・市場流動性・コンプライアンス確認を含む。

## 3. 審査基準 (8 大事項)

JVCEA 取扱方針規則に基づく審査項目:

1. 発行体・チームの公開性 (誰が発行しているか・所在地)
2. 価値裏付け (経済合理性・利用実態)
3. AML/CFT リスク (匿名性・取引追跡可能性)
4. 技術的安全性 (コード監査・ハッキング履歴)
5. 法的位置づけ (有価証券性・関連法規)
6. 流動性 (海外既上場・出来高)
7. 国内ユーザニーズ
8. 取扱業者のリスク管理体制

## 4. 国内 vs 海外 取扱銘柄数ギャップ

国内 spot top class の [[exchanges/jp-exchange-coincheck]] でも 30 銘柄前後 (2026-05 時点)。一方海外大手 [[exchanges/jp-foreign-exchange-mexc]] は 2,376 銘柄、Binance も数百〜2,000 超。Yellow List 個別審査負荷と取扱業者リスク管理体制要件が国内銘柄数を制約する構造。

## 5. 主要案件 (2025-2026)

- **ZPG / WILD** — [[exchanges/jp-exchange-gmo-coin]] にて 2026 年国内初上場 (Wilder World 系)。専業の [[exchanges/jp-exchange-digital-asset-markets]] では ZPG/ZPGAG/ZPGPT を取扱
- **KAIA** — Finschia 後継チェーン、[[exchanges/jp-exchange-line-xenesis]] にて取扱開始
- **NIDT** — Nippon Idol Token、[[exchanges/jp-exchange-backseat-exchange]] にて発行・流通

来源: JVCEA 規則公開 (jvcea.or.jp/about/regulations/), 各 VASP 取扱銘柄一覧公告, 日経 / ITmedia 関連報道 (2025-2026)
