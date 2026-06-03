---
title: "Nissan Financial Services (日産系 captive auto-finance arm / Nissan Motor Acceptance Company)"
aliases:
  - "nissan-financial-services"
  - "Nissan Financial Services"
  - "Nissan Motor Acceptance Company"
  - "Nissan Motor Acceptance Corporation"
  - "NMAC"
  - "Infiniti Financial Services"
  - "IFS"
  - "Nissan Financial Services Japan"
  - "日産フィナンシャルサービス"
  - "ニッサン モーター アクセプタンス"
domain: "manufacturer-finance"
created: 2026-06-03
last_updated: 2026-06-03
last_tended: 2026-06-03
review_by: 2026-12-03
confidence: likely
tags: [manufacturing, nissan, captive-finance, auto-finance, abs, residual-value, floorplan, japan, usa, global]
status: active
sources:
  - "https://www.nissan-global.com/EN/IR/"
  - "https://www.nissanusa.com/finance/financing-online-bill-payment-options.html"
  - "https://www.nissanfinance.com/s/"
  - "https://www.nissan-global.com/EN/DOCUMENT/PDF/emtn_program_06.pdf"
  - "https://disclosure2.edinet-fsa.go.jp/"
---

# Nissan Financial Services (日産系 captive auto-finance arm / Nissan Motor Acceptance Company)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] and is the third pillar of the Japanese-OEM auto-captive trio alongside [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] and [[manufacturer-finance/honda-finance|Honda Finance]]. Read it against [[manufacturer-finance/toyota-motor|Toyota Motor]] for the parent-OEM contrast, and against [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], [[manufacturer-finance/sony-group-finance-arm|Sony FG]], [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] for peer industrial-conglomerate finance arms. For the captive-finance mechanism itself see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and for the dealer-inventory side see [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]. The securitization layer Nissan's captive funds through is documented in [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]. Pair with [[JapanFG/INDEX|JapanFG index]] for the broader regulatory boundary.

## TL;DR

日産系の captive auto-finance は、**米州 Nissan Motor Acceptance Company LLC (NMAC)** ・**国内の日産系オートクレジット/リース** を中心とする、Toyota / Honda captive に次ぐ規模の自動車 captive。manufacturing 視点で読むべき軸は **(1) Nissan Motor (日産自動車 7201) が金融を本体外の連結子会社に置く意味、(2) 残価リスク (residual value) を OEM 本体ではなく captive 側へ集約する設計、(3) NMAC が米国で自動車ローン・リース ABS を定期発行する funding 機関である点 ([[structured-finance/auto-loan-abs-japan-toyota-honda|US / Japan auto-loan ABS]] と接続)、(4) ディーラー在庫の floorplan (wholesale) 与信を captive が担う点**。NMAC は **Infiniti Financial Services (IFS)** を高級ブランド向け部門として持ち、Ford Motor Credit・Ally Financial・GM Financial・Toyota Motor Credit・American Honda Finance と並ぶ米国オート captive のトップティアを構成する。

## 1. 会社構造と製造業視点

| 項目 | 内容 |
|---|---|
| 親会社 | 日産自動車株式会社 / Nissan Motor Co., Ltd. (東証 PRIME 7201) |
| 米州 captive | Nissan Motor Acceptance Company LLC (NMAC) |
| 旧称・改組 | Nissan Motor Acceptance Corporation → 2022-04-01 付で デラウェア州 LLC「Nissan Motor Acceptance Company LLC」に改組・改称 (旧拠点はカリフォルニア) |
| 高級ブランド部門 | Infiniti Financial Services (IFS) — NMAC の DBA / 部門 |
| 米州統括 | Nissan North America, Inc. (NNA) 傘下で NNA の販売活動を金融面から支える |
| 証券化子会社 | Nissan Auto Receivables 系の SPV (NARC=1991, NARC II=2000, NARF=2002 設立、いずれも NMAC の直接・間接 100% 子会社) |
| 国内 captive | 日産系のオートクレジット・リース (国内販社網と連動) |
| 主要事業 | 小売割賦 (retail installment)、リース、ディーラー在庫金融 (floorplan / wholesale) |

### 製造業視点のグループ構造

```
Nissan Motor Co., Ltd. (日産自動車 7201, 製造業本体)
  ├── 四輪 (Nissan / Infiniti ブランド) 製造販売
  ├── R&D / 生産 / グローバル販売網
  ├── Nissan North America, Inc. (NNA, 米州統括)
  │     └── Nissan Motor Acceptance Company LLC (NMAC)
  │           ├── 小売割賦・リース (Nissan ブランド)
  │           ├── Infiniti Financial Services (IFS, 高級ブランド部門)
  │           ├── ディーラー floorplan (wholesale) 与信
  │           └── 証券化子会社 (NARC / NARC II / NARF)
  └── 国内: 日産系オートクレジット・リース
```

### Nissan Motor 本体との関係

- NMAC・国内日産系金融は連結子会社のため、Nissan Motor の **「販売金融事業 (Sales Financing)」セグメント** として有価証券報告書に集約開示される。
- 残価設定型ローン (残クレ) やリースでは、Nissan Motor 本体は **「新車販売利益」を先に確定** させ、中古車価格変動リスクは captive (NMAC / 国内日産系) のバランスシートに集中する。これは [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] / [[manufacturer-finance/honda-finance|Honda Finance]] と同型の captive 設計。
- NMAC はディーラーから新車・中古車の retail installment 契約とリース契約を買い取り、同時に **ディーラーの在庫そのもの (floorplan)** にも与信する。販売の上流 (在庫) と下流 (消費者) の双方を captive が握る構造は、OEM の販売チャネル支配力の核心。仕組みの一般論は [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]] 参照。

## 2. 製品 / 事業ライン × 製造業視点での意義

| 事業ライン | 内容 | Nissan Motor 製造業視点での意義 |
|---|---|---|
| 自動車ローン (新車・中古車) | 米州・国内 | 新車販売チャネル維持、ディーラーロイヤルティ |
| リース (個人残クレ + 法人フリート) | 米州中心、国内 | 残価リスク集約、買い替えサイクル制御 |
| Infiniti Financial Services (IFS) | 米州 (高級ブランド) | Infiniti 顧客向けの与信・商品差別化 |
| ディーラー在庫金融 (floorplan / wholesale) | 米州・国内 | ディーラー支援、生産・出荷タイミング調整 |
| 自動車保険・延長保証の付帯 | 米州 | 顧客関係の長期化 |

### 自動車 ABS との接続

NMAC は米国オート captive の主要 ABS 発行体の一つで、Nissan の自動車ローン・リース債権を SPV (NARC / NARC II / NARF 系) を介して証券化する。Nissan Motor 本体の B/S に積み上がるはずの auto receivables を captive が ABS でオフバランス化し、グループ全体のレバレッジを抑える構造は、Toyota / Honda 系と共通。日本国内でも日産系が自動車ローン ABS 市場の発行体となる。詳細は [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] と [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] 参照。

## 3. 主要指標 (定性 + 公開ベース)

| 指標 | 内容 | 出所 |
|---|---|---|
| NMAC 法人形態 | デラウェア州 LLC (2022-04-01 改組) | NMAC 会社概要 |
| 高級ブランド部門 | Infiniti Financial Services (IFS) | Nissan USA / NMAC |
| 証券化子会社 | NARC (1991) / NARC II (2000) / NARF (2002) | Nissan EMTN program 開示 |
| 米州統括 | Nissan North America, Inc. (NNA) | Nissan IR |
| 主要競合 (米国) | Ford Motor Credit, Ally Financial, GM Financial, Toyota Motor Credit, American Honda Finance | 業界レポート |
| 国内 | 日産系オートクレジット・リース | EDINET / Nissan IR |

> 具体的な連結総資産・債権残高・ABS 発行額は、Nissan Motor「販売金融事業」セグメント開示および NMAC / SPV の証券化開示に四半期・年次で開示される。本エントリは会社構造・captive 設計・funding 機構を中心に記述し、変動の大きい財務数値は一次資料を参照する方針 (脆い financial figures より mechanism 知識を優先)。

## 4. 戦略 (Residual Value + EV + Brand-Split + Wholesale)

- **残価リスク管理**: 残クレ・リースは中古車市場価格と直結し、BEV (Leaf / Ariya 等) の技術更新 (バッテリー劣化・世代交代) は残価評価を難しくする。captive は中古車価格データで残価モデルを更新する。仕組みの一般論は [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] の residual-value 節を参照。
- **Infiniti ブランドの金融分離**: 高級ブランド Infiniti 向けに **Infiniti Financial Services (IFS)** を NMAC 部門として立て、Nissan 大衆ブランドと与信・商品設計を差別化する。これは Honda の Acura Financial Services と同型の brand-split。
- **米州 captive の規模**: 米国市場では Ford Motor Credit / Ally Financial と並ぶ規模で、米国オート ABS 市場の発行体。証券化を専用 SPV で運用する点も Toyota / Honda captive と共通。
- **Wholesale (floorplan) の重視**: NMAC は消費者向け retail だけでなくディーラー在庫の wholesale 与信を担い、販売網全体を金融面から支える。詳細は [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]] 参照。
- **EV / モビリティ時代の captive**: 所有から利用へのシフト (サブスク・リース) に合わせ captive 商品を再設計する流れは Toyota の KINTO・Honda と同方向。

## 5. 規制・政策

- **国内**: 金融庁 (FSA)、貸金業法、割賦販売法、保険業法。国内日産系金融はこれらの監督下。
- **米国**: 連邦消費者金融保護局 (CFPB)、各州金融監督。NMAC は ABS / 社債で資金調達する登録発行体として証券化開示を行う。
- **直近政策論点**:
  - 2024〜 EV 残価評価モデルの透明化 (消費者保護)
  - 2025〜 米国 CFPB の自動車金融 APR 開示強化動向
  - 2024〜 コネクテッドカーデータ × 金融の個人情報保護
  - captive の funding における ABS 市場 (証券化規制) 動向

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/honda-finance|Honda Finance]] · [[manufacturer-finance/toyota-motor|Toyota Motor]]
- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] · [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/sony-group-finance-arm|Sony FG]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] · [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[JapanFG/INDEX|JapanFG INDEX]] · [[INDEX|FinWiki index]]

## Sources

- Nissan Motor Co., Ltd.「Investor Relations」: https://www.nissan-global.com/EN/IR/
- Nissan USA「Finance & Online Payment Options」: https://www.nissanusa.com/finance/financing-online-bill-payment-options.html
- NMAC (Nissan Finance) アカウント管理ポータル: https://www.nissanfinance.com/s/
- Nissan「EMTN Program」開示 (NMAC / NARC / NARC II / NARF 記載): https://www.nissan-global.com/EN/DOCUMENT/PDF/emtn_program_06.pdf
- EDINET (有価証券報告書): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校正ステータス
> confidence: **likely**。NMAC の会社概要・Nissan IR / EMTN program 開示・Nissan USA を基準に公開情報で構成。NMAC が 2022-04-01 付でデラウェア州 LLC (Nissan Motor Acceptance Company LLC) に改組・改称、Infiniti Financial Services を高級ブランド部門として運用、証券化子会社 NARC (1991) / NARC II (2000) / NARF (2002) を保有、Nissan North America 傘下である点は公開資料で確認。連結財務数値・ABS 発行額は変動が大きいため一次資料参照とし、本文では captive 構造・floorplan・funding 機構を中心に記述。
