---
source: manufacturer-finance/nissan-financial-services
source_hash: b58be4ece16e6d8c
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "日産フィナンシャルサービス (Nissan captive auto-finance arm / Nissan Motor Acceptance Company)"
translated_at: 2026-07-28T23:40:03.984Z
---

# Nissan Financial Services (日産系 captive auto-finance arm / Nissan Motor Acceptance Company)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] and is the third pillar of the Japanese-OEM auto-captive trio alongside [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] and [[manufacturer-finance/honda-finance|Honda Finance]]. Read it against [[manufacturer-finance/toyota-motor|Toyota Motor]] for the parent-OEM contrast, and against [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], [[manufacturer-finance/sony-group-finance-arm|Sony FG]], [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] for peer industrial-conglomerate finance arms. For the captive-finance mechanism itself see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]], and for the dealer-inventory side see [[manufacturer-finance/floorplan-finance-mechanism|floorplan / wholesale finance mechanism]]. The securitization layer Nissan's captive funds through is documented in [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]. Pair with [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] for the broader regulatory boundary.

## TL;DR

日産系の captive auto-finance は、**米州 Nissan Motor Acceptance Company LLC (NMAC)** と、国内の **日産フィナンシャルサービス株式会社 (NFS)** を中心とする。manufacturing 視点で読むべき軸は **(1) 販売金融を製造・販売から区分して管理する意味、(2) retail / lease / inventory finance の接続、(3) 社債・銀行借入・証券化による資金調達、(4) 親会社との Keepwell Agreement**。日産は販売金融会社の現行構造と資金調達方針を公式 IR で継続開示している。

## 1. 会社構造と製造業視点

| 項目 | 内容 |
|---|---|
| 親会社 | 日産自動車株式会社 / Nissan Motor Co., Ltd. (東証 PRIME 7201) |
| 米州 captive | Nissan Motor Acceptance Company LLC (NMAC) |
| 旧称・改組 | Nissan Motor Acceptance Corporation → 2022-04-01 付で デラウェア州 LLC「Nissan Motor Acceptance Company LLC」に改組・改称 (旧拠点はカリフォルニア) |
| 高級ブランド部門 | Infiniti Financial Services (IFS) — NMAC の DBA / 部門 |
| 米州統括 | Nissan North America, Inc. (NNA) 傘下で NNA の販売活動を金融面から支える |
| 国内 captive | 日産フィナンシャルサービス株式会社 (NFS、日産グループ持分 100%) |
| 国内 captive の業務 | オートクレジット、カーリース、カード、保険代理、在庫金融 |
| グループ金融 | 日産グループファイナンス株式会社 (日産グループ持分 100%) |
| 主要事業 | 小売割賦 (retail installment)、リース、ディーラー在庫金融 (floorplan / wholesale) |
| 信用補完 | NFS・NMAC 等は Nissan Motor と Keepwell Agreement を締結 |

Sources: ^[Nissan「Major Subsidiaries and Affiliates in Japan」(2026-03-31): https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/; Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/; Nissan FY2025 Annual Securities Report: https://www.nissan-global.com/EN/IR/FINANCIAL_RESULTS/ASSETS/FR/2025/PDF/fr2025.pdf.]

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

Sources: ^[Nissan「Major Subsidiaries and Affiliates in Japan」: https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/; Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/.]

### 自動車 ABS との接続

日産は販売金融会社の資金調達源を、capital markets、銀行借入、金融資産の証券化へ分散する方針を明記する。証券化時の会計上の債権消滅は適用基準の要件次第であり、ABS 発行だけで自動的にオフバランスになるわけではない。詳細は [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] と [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] 参照。

## 3. 主要指標 (定性 + 公開ベース)

| 指標 | 内容 | 出所 |
|---|---|---|
| NMAC 法人形態 | デラウェア州 LLC (2022-04-01 改組) | NMAC 会社概要 |
| 高級ブランド部門 | Infiniti Financial Services (IFS) | Nissan USA / NMAC |
| 米州事業 | NMAC が米国販売金融事業を担当 | Nissan IR |
| 国内事業 | NFS がオートクレジット、リース、カード、保険代理、在庫金融を担当 | Nissan company profile |
| 国内持分 | NFS / 日産グループファイナンスはいずれも日産グループ持分 100% | Nissan company profile |
| 信用補完 | NFS・NMAC 等と Nissan Motor の Keepwell Agreement | Nissan IR / FY2025 securities report |
| 資金調達方針 | capital markets、銀行借入、金融資産の証券化を分散利用 | Nissan financial plan |

Sources: ^[Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/; Nissan「Major Subsidiaries and Affiliates in Japan」: https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/; Nissan「Financial Plan」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/PLAN/; Nissan FY2025 Annual Securities Report: https://www.nissan-global.com/EN/IR/FINANCIAL_RESULTS/ASSETS/FR/2025/PDF/fr2025.pdf.]

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
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[manufacturer-finance/INDEX|manufacturer-finance INDEX]] · [[INDEX|FinWiki index]]

## Sources

- Nissan Motor Co., Ltd.「Investor Relations」: https://www.nissan-global.com/EN/IR/
- Nissan「Major Subsidiaries and Affiliates in Japan」: https://www.nissan-global.com/EN/COMPANY/PROFILE/SUBSIDIARY/
- Nissan「Sales Finance Company」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/SALES/
- Nissan「Financial Plan」: https://www.nissan-global.com/EN/IR/STOCK/RATING_CORPORATE_BOND/PLAN/
- Nissan USA「Finance & Online Payment Options」: https://www.nissanusa.com/finance/financing-online-bill-payment-options.html
- NMAC (Nissan Finance) アカウント管理ポータル: https://www.nissanfinance.com/s/
- Nissan「EMTN Program」開示 (NMAC / NARC / NARC II / NARF 記載): https://www.nissan-global.com/EN/DOCUMENT/PDF/emtn_program_06.pdf
- EDINET (有価証券報告書): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校正ステータス
> confidence: **likely**。2026-07-29 時点で Nissan の 2026-03-31 現在の主要関係会社一覧、販売金融会社ページ、資金調達方針と FY2025 有価証券報告書を再確認。古い EMTN の SPV 年表と根拠のない競合順位を主要表から外した。
