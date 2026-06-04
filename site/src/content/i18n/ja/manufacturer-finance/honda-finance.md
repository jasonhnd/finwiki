---
source: manufacturer-finance/honda-finance
source_hash: d462fdf7edbef00b
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "ホンダファイナンス (Honda captive auto-finance arm / American Honda Finance Corporation)"
translated_at: 2026-06-05T00:00:00.000Z
---

# Honda Finance (ホンダ captive auto-finance arm / American Honda Finance Corporation)

## Wiki route

This entry sits under [[manufacturer-finance/INDEX|manufacturing index]] and is the Honda-side complement to [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] — the two largest Japanese-OEM auto captives. Read it against [[manufacturer-finance/toyota-motor|Toyota Motor]] for the parent-OEM contrast, and against [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]], [[manufacturer-finance/sony-group-finance-arm|Sony FG]], [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]], [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] for peer industrial-conglomerate finance arms. For the captive-finance mechanism itself see [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]]; for the securitization layer Honda funds through, see [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] and [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]. Pair with [[JapanFG/INDEX|JapanFG index]] for the broader regulatory boundary.

## TL;DR

ホンダの captive auto-finance は、**米州 American Honda Finance Corporation (AHFC)** ・**国内 Honda Finance Co., Ltd. (ホンダファイナンス)** ・**カナダ Honda Canada Finance Inc. (HCFI)** を中心とする、Toyota Financial Services に次ぐ規模の自動車 captive。manufacturing 視点で読むべき軸は **(1) Honda Motor (本田技研工業 7267) が金融を本体外の連結子会社に置く意味、(2) 残価リスク (residual value) を OEM 本体ではなく captive 側へ集約する設計、(3) AHFC が米国で自動車ローン・リース ABS を定期発行する funding 機関である点 ([[structured-finance/auto-loan-abs-japan-toyota-honda|Japan / US auto-loan ABS]] と接続)、(4) Keepwell Agreement という親会社流動性保証の仕組み**。AHFC は HFS (Honda Financial Services) と AFS (Acura Financial Services) の 2 ブランド (DBA) で小売金融を提供し、Ford Motor Credit・Ally Financial・GM Financial・Toyota Motor Credit と並ぶ米国オート captive のトップティアを構成する。

## 1. 会社構造と製造業視点

| 項目 | 内容 |
|---|---|
| 親会社 | 本田技研工業株式会社 / Honda Motor Co., Ltd. (HMC, 東証 PRIME 7267 / NYSE: HMC) |
| 米州 captive | American Honda Finance Corporation (AHFC) |
| AHFC 設立 | 1980-02-06 (カリフォルニア州法人) |
| AHFC 親会社 | American Honda Motor Co., Inc. (AHM) の 100% 子会社 (AHM は HMC の 100% 子会社) |
| AHFC ブランド | HFS (Honda Financial Services) / AFS (Acura Financial Services) — いずれも AHFC の DBA |
| カナダ | Honda Canada Finance Inc. (HCFI, AHFC の過半数子会社、Honda Canada Inc. が非支配持分) |
| 国内 captive | Honda Finance Co., Ltd. (ホンダファイナンス、国内オートローン・リース) |
| 親会社保証 | HMC と AHFC が Keepwell Agreement を締結 (流動性・正味純資産の維持を約束) |
| AHFC 開示 | 米国 SEC 登録発行体 (Form 10-K を毎年提出、3 月期決算) |

### 製造業視点のグループ構造

```
Honda Motor Co., Ltd. (本田技研工業 7267, 製造業本体)
  ├── 二輪・四輪・パワープロダクツ・航空機 (HondaJet) 製造販売
  ├── R&D / 生産 / グローバル販売網
  ├── American Honda Motor Co., Inc. (AHM, 米州統括)
  │     └── American Honda Finance Corporation (AHFC, 1980-)
  │           ├── HFS (Honda Financial Services) ブランド
  │           ├── AFS (Acura Financial Services) ブランド
  │           └── Honda Canada Finance Inc. (HCFI, 過半数子会社)
  └── 国内: Honda Finance Co., Ltd. (ホンダファイナンス)
```

### Honda Motor 本体との関係

- AHFC・国内ホンダファイナンスは連結子会社のため、Honda Motor の **「金融サービス事業」セグメント** として有価証券報告書・Form 20-F に集約開示される。
- 残価設定型ローン (残クレ) やリースでは、Honda Motor 本体は **「新車販売利益」を先に確定** させ、中古車価格変動リスクは captive 側 (AHFC / 国内ホンダファイナンス) のバランスシートに集中する。これは [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] と同型の captive 設計。
- **Keepwell Agreement** は、AHFC が ABS や社債で資金調達する際、親会社 HMC が「AHFC の支払い能力と正味純資産を維持する」と約束する仕組み。法的には保証 (guarantee) ではないが、AHFC の信用力を親会社格付けに近づける効果を持つ。captive の funding コスト低減の核心。

## 2. 製品 / 事業ライン × 製造業視点での意義

| 事業ライン | 内容 | Honda Motor 製造業視点での意義 |
|---|---|---|
| 自動車ローン (新車・中古車) | 米州・国内・カナダ | 新車販売チャネル維持、ディーラーロイヤルティ |
| リース (個人残クレ + 法人フリート) | 米州中心、国内 | 残価リスク集約、買い替えサイクル制御 |
| パワースポーツ / マリン / パワー機器金融 | 米州 (HFS が二輪・船外機・発電機等もカバー) | 四輪以外の製品ラインの販売金融 |
| ディーラー在庫金融 (フロアプラン) | 米州・国内 | ディーラー支援、生産・出荷タイミング調整 |
| 自動車保険・延長保証の付帯 | 米州 | 顧客関係の長期化 |

### 自動車 ABS との接続

AHFC は米国オート captive の主要 ABS 発行体の一つで、**Honda Auto Receivables Owner Trust** シリーズで自動車ローン・リース債権を定期的に証券化する。国内ホンダファイナンスも日本の自動車ローン ABS 市場で発行体となる。Honda Motor 本体の B/S に積み上がるはずの auto receivables を captive が ABS でオフバランス化し、グループ全体のレバレッジを抑える構造は、Toyota / Nissan 系と共通。詳細は [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota Finance, Honda Finance, Nissan Credit)]] と [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]] 参照。

## 3. 主要指標 (定性 + 公開ベース)

| 指標 | 内容 | 出所 |
|---|---|---|
| AHFC 法人形態 | カリフォルニア州法人 (1980-02-06 設立) | AHFC 会社概要 / SEC Form 10-K |
| AHFC 決算期 | 3 月期 (親会社 HMC に合わせる) | AHFC Form 10-K |
| AHFC 開示 | SEC 登録発行体、Form 10-K 毎年提出 | SEC EDGAR |
| 親会社保証 | Keepwell Agreement (HMC ↔ AHFC) | AHFC Form 10-K |
| 主要競合 (米国) | Ford Motor Credit, Ally Financial, GM Financial, Toyota Motor Credit | 業界レポート |
| 国内 captive | Honda Finance Co., Ltd. (オートローン・リース) | EDINET / Honda IR |

> 具体的な連結総資産・債権残高・ABS 発行額は、Honda Motor「金融サービス事業」セグメント開示および AHFC の SEC Form 10-K に四半期・年次で開示される。本エントリは会社構造・captive 設計・funding 機構を中心に記述し、変動の大きい財務数値は一次資料を参照する方針 (脆い financial figures より mechanism 知識を優先)。

## 4. 戦略 (Residual Value + EV + Brand-Split)

- **残価リスク管理**: 残クレ・リースは中古車市場価格と直結し、BEV の技術更新 (バッテリー劣化・世代交代) は残価評価を難しくする。captive は中古車価格データを用いて残価モデルを更新する。仕組みの一般論は [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] の residual-value 節を参照。
- **Acura ブランドの金融分離**: 高級ブランド Acura 向けに **Acura Financial Services (AFS)** を AHFC の DBA として立て、Honda 大衆ブランドと与信・商品設計を差別化する。
- **米国 captive の規模**: 米国市場では Ford Motor Credit / Ally Financial と肩を並べる規模で、米国オート ABS 市場の主要発行体。SEC 登録・Form 10-K で詳細開示する点も Toyota Motor Credit と共通。
- **新興国展開**: ホンダは販社と連動して各国に小売金融子会社を設立する戦略を取り、四輪・二輪両方の販売金融網を拡大している。
- **EV / モビリティ時代の captive**: 所有から利用へのシフト (サブスク・リース) に合わせ、captive 商品を再設計する流れは Toyota の KINTO と同方向。

## 5. 規制・政策

- **国内**: 金融庁 (FSA)、貸金業法、割賦販売法、保険業法。国内ホンダファイナンスはこれらの監督下。
- **米国**: 連邦消費者金融保護局 (CFPB)、各州金融監督。AHFC は SEC 登録発行体として継続開示義務を負う。
- **カナダ**: 連邦・州金融監督 (HCFI)。
- **直近政策論点**:
  - 2024〜 EV 残価評価モデルの透明化 (消費者保護)
  - 2025〜 米国 CFPB の自動車金融 APR 開示強化動向
  - 2024〜 コネクテッドカーデータ × 金融の個人情報保護
  - captive の funding における ABS 市場 (証券化規制) 動向

## Related

- [[manufacturer-finance/toyota-financial-services|Toyota Financial Services]] · [[manufacturer-finance/toyota-motor|Toyota Motor]]
- [[manufacturer-finance/vendor-finance-mechanism|captive / vendor finance mechanism]] · [[manufacturer-finance/export-finance-mechanism|export finance mechanism]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Auto-loan ABS Japan (Toyota / Honda / Nissan)]] · [[structured-finance/japan-auto-loan-abs-waterfall-mechanics|Japan auto-loan ABS waterfall mechanics]]
- [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/sony-group-finance-arm|Sony FG]] · [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] · [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[JapanFG/INDEX|JapanFG INDEX]] · [[INDEX|FinWiki index]]

## Sources

- Honda Motor Co., Ltd.「Investor Relations」: https://global.honda/en/investors/
- American Honda Finance Corporation「Investor Relations」: https://ir.americanhondafinance.com/
- AHFC「Form 10-K (FY ended Mar. 2025)」: https://ir.americanhondafinance.com/IR_DCTM/quarterly_reports/Form%2010K%20FY2025%20Year%20ended%20Mar.%202025.pdf
- AHFC「About Us」: https://my.americanhondafinance.com/s/about-us-pre-login
- Honda News「Dedicated Acura Financial Services Launched」: https://hondanews.com/en-US/releases/release-f20318eb27d18d74308003004c34bb7d-dedicated-acura-financial-services-launched
- EDINET (有価証券報告書): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校正ステータス
> confidence: **likely**。AHFC の SEC Form 10-K・会社概要・Honda Motor IR・Honda News を基準に公開情報で構成。AHFC が AHM の 100% 子会社 (AHM は HMC の 100% 子会社)、1980-02-06 カリフォルニア州設立、HFS / AFS の DBA 運用、Honda Canada Finance の過半数保有、HMC との Keepwell Agreement は一次資料で確認。連結財務数値・ABS 発行額は変動が大きいため一次資料参照とし、本文では captive 構造と funding 機構を中心に記述。
