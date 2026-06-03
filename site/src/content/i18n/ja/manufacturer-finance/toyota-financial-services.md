---
source: manufacturing/toyota-financial-services
source_hash: 98efe6d91a89c028
lang: ja
status: machine
fidelity: ok
title: "Toyota Financial Services (トヨタファイナンシャルサービス 製造業視点アンカー)"
translated_at: 2026-06-02T16:33:58.525Z
---
# Toyota Financial Services (トヨタファイナンシャルサービス 製造業視点アンカー)

## ウィキ上の位置づけ

このエントリは [[manufacturer-finance/INDEX|manufacturing index]] 配下に位置し、[[JapanFG/toyota-financial|Toyota Financial Services (JapanFG entity profile)]] と [[JapanFG/toyota-finance|トヨタファイナンス (国内オペレーティング会社)]] を補完する。製造業エントリは、TFS を**親 OEM の製造・戦略視点**から見るために存在する。すなわち、Toyota が世界最大級の自動車キャプティブ金融を使って、販売チャネル、残価リスク、モビリティサービスをどう制御しているかを扱う。親 OEM については [[manufacturer-finance/toyota-motor|Toyota Motor]]、同業の産業コングロマリット金融部門については [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]]、[[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]]、[[manufacturer-finance/sony-group-finance-arm|Sony FG]]、[[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]] と照らして読む。証券化レイヤーについては [[structured-finance/auto-loan-abs-japan-toyota-honda|Japan auto-loan ABS]]、より広い規制境界については [[JapanFG/INDEX|JapanFG index]] と組み合わせる。

## 要約

トヨタファイナンシャルサービス (TFS) は **世界最大級の自動車キャプティブ金融**。トヨタ自動車 100% 子会社として、米州 (Toyota Motor Credit Corporation = TMCC)・欧州 (Toyota Kreditbank GmbH)・国内 ([[JapanFG/toyota-finance|トヨタファイナンス]])・新興国の 30+ ヵ国で **自動車ローン・リース・保険・カード・モビリティ金融** をワンストップで展開する。FinWiki manufacturing アンカーとしては、**(1) Toyota Motor (7203) が金融を本体外に持つ意味、(2) 残価リスク (RV) を OEM 本体ではなく captive 側に集約する設計、(3) 世界市場でのオート ABS 発行体としての規模 ([[structured-finance/auto-loan-abs-japan-toyota-honda|Japan auto-loan ABS]] と接続)、(4) BEV / コネクテッド・モビリティ時代の captive のリポジショニング** の 4 つを軸に読む。Ford Motor Credit、Ally Financial、GM Financial と並び世界の auto captive finance トップティアの一角。

## 1. 会社構造と製造業視点

| 項目 | 内容 |
|---|---|
| 正式名 | 株式会社トヨタファイナンシャルサービス / Toyota Financial Services Corporation |
| 設立 | 2000-07-03 |
| 本社 | 愛知県名古屋市西区 |
| 上場 | 非上場 ([[manufacturer-finance/toyota-motor|Toyota Motor]] 100% 連結子会社) |
| 連結事業地域 | 30+ ヵ国 (米州 / 欧州 / 日本 / 豪州 / 新興国) |
| 連結総資産 | 約 30 兆円規模 (推計、TMCC + 各国 captive の合計) |
| FY2024 金融セグメント営業収益 | 約 3 兆円規模 (Toyota Motor 連結セグメント) |
| FY2024 金融セグメント営業利益 | 約 4,000 億円規模 (同上) |
| 主要子会社 | TMCC (米州), Toyota Kreditbank (欧州), [[JapanFG/toyota-finance|TF (国内)]], 各国 TFS 法人 |

### 製造業視点のグループ構造

```
Toyota Motor Corporation (7203, 製造業本体)
  ├── 自動車製造・販売 (Toyota / Lexus / 関連ブランド)
  ├── R&D, Production, Supply Chain
  └── Toyota Financial Services Corp. (TFS, 100%)
        ├── 米州: Toyota Financial Services Americas → TMCC (Toyota Motor Credit Corp., 1988-)
        │     └── 米国最大級自動車金融、Ford Motor Credit / Ally / GM Financial と並ぶ
        ├── 欧州: Toyota Kreditbank GmbH (ドイツ拠点)
        ├── 国内: [[JapanFG/toyota-finance|トヨタファイナンス (TF)]] + TS キュービックカード
        ├── 保険: Toyota Insurance Management Solutions 等
        └── 30+ ヵ国の各国 TFS 法人
```

### Toyota Motor 本体との関係

- TFS は連結子会社のため、Toyota Motor の **「金融事業セグメント」** として有価証券報告書に集約開示される (単独 IR は限定的)。
- 製造業本体と金融子会社の **資本効率分離** により、車両販売の収益と金融事業の収益が独立して評価できる構造。
- 残価設定型ローン (残クレ) やリースでは、Toyota Motor 本体は **「新車販売利益」を一度確定** させ、リスクは TFS 側に渡る。BEV 時代の中古車価格不確実性は TFS バランスシートに集中する設計。

## 2. 製品 / 事業ライン × 製造業視点での意義

| 事業ライン | 内容 | Toyota Motor 製造業視点での意義 |
|---|---|---|
| 自動車ローン (新車・中古車) | 国内・米州・欧州・新興国 | 新車販売チャネル維持、ディーラーロイヤルティ |
| リース (個人残クレ + 法人フリート) | 全世界 | 残価リスク集約、買い替えサイクル制御 |
| TS キュービックカード | 国内 | Toyota 純正部品・点検・燃料・サービス購買データ |
| 保険 (代理販売 + 引受持株) | 全世界 | 顧客関係の長期化、データ取得 |
| Toyota Wallet 等モビリティ金融 | 国内中心、海外展開 | カーシェア・サブスク KINTO 連動 |
| ディーラー金融 (在庫金融) | 全世界 | ディーラー支援、生産・出荷タイミング調整 |
| サプライヤー金融 | 国内中心 | 部品サプライヤー支援、ジャストインタイム維持 |

### 自動車 ABS との接続

TFS は世界最大級の auto-loan / auto-lease ABS 発行体の一つ。米国 TMCC は **Toyota Auto Receivables Trust** シリーズで定期的に ABS を発行し、日本国内ではトヨタファイナンスが定期的に自動車ローン ABS を発行する。詳細は [[structured-finance/auto-loan-abs-japan-toyota-honda|Japan auto-loan ABS (Toyota Finance, Honda Finance, Nissan Credit)]] 参照。Toyota Motor 本体の B/S に積み上がるはずの auto receivables を、TFS が ABS で証券化・オフバランス化することで、グループ全体のレバレッジを抑制する構造である。

## 3. KPI (FY2024 連結 + 金融セグメント)

| 指標 | 値 | 出所 |
|---|---|---|
| Toyota Motor 連結売上 | 約 48 兆円 (FY2024 通期) | Toyota Motor 決算短信 |
| Toyota Motor 連結純利益 | 約 4.9 兆円 (FY2024 通期) | 同上 |
| 金融セグメント 営業収益 | 約 3 兆円規模 | セグメント情報 |
| 金融セグメント 営業利益 | 約 4,000 億円規模 | 同上 |
| TFS 連結総資産 | 約 30 兆円規模 (推計) | 親会社セグメント・各国法人開示 |
| 世界展開国 | 30+ ヵ国 | TFS 公式 |
| 主要競合 (米国) | Ford Motor Credit, Ally Financial, GM Financial | 業界レポート |
| 主要競合 (国内) | 日産 NMAC, ホンダファイナンス, [[JapanFG/mitsubishi-hc-capital|三菱HCキャピタル]], [[JapanFG/orix-corp|オリックス]] | 業界レポート |
| 残価設定型ローン比率 | 国内・米国で過半数規模 | 業界推計 |

> KPI は Toyota Motor 「Annual Report / Integrated Report」「決算短信」「金融事業セグメント」開示および TMCC SEC filing (Form 10-K) ・各国 TFS 法人開示から概算。TFS 単独の連結 IR は限定的で、親会社開示と各国法人開示の組合せが必要。

## 4. 戦略 (Residual Value + EV + Mobility)

- **残価リスク管理**: 残クレ・リースは中古車市場価格と直結し、BEV の急速な技術更新 (バッテリー劣化、世代交代) は残価評価モデルの精緻化を要求する。TFS は世代別の中古車価格データベース・走行データ (コネクテッド) を活用して RV モデルを更新中。
- **販売金融の総合パッケージ化**: 新車購入時に **「車両 + ローン + リース + 保険 + カード」** を一括提案するディーラーモデルが Toyota の競争力の核。銀行系オートローンに対する優位性は **販売現場での送客力**。
- **米国 TMCC の規模**: 米国市場では Ford Motor Credit や Ally Financial と肩を並べる規模で、米国オート ABS 市場の主要発行体。TMCC は SEC 登録、Form 10-K で詳細開示。
- **EV / コネクテッド時代の captive リポジショニング**: BEV のサブスクリプション (Toyota の KINTO)・カーシェア・利用量連動保険 (UBI) など、車両の所有から利用へのシフトに合わせて captive 商品を再設計中。
- **モビリティ金融の本格化**: トヨタの「モビリティカンパニー」宣言 (2018) と連動し、TFS は「Mobility Financial Services」へリブランディング中。Toyota Wallet (国内決済)、KINTO サブスク、Woven シティ実験との接続。
- **新興国展開**: タイ・インドネシア・豪州・ブラジル・南アフリカなど、トヨタ販社と連動した先行展開。為替・カントリーリスクを地域分散で吸収。

## 5. 規制・政策

- **国内**: 金融庁 (FSA)、貸金業法、割賦販売法、保険業法、銀行法 (一部 TFS グループ内)。
- **米国**: 連邦消費者金融保護局 (CFPB)、各州金融監督。TMCC は SEC 登録発行体として継続開示義務。
- **欧州**: 各国金融監督 (独 BaFin 等)、ECB / EBA の銀行子会社規制 (Toyota Kreditbank はドイツ銀行業免許保有)。
- **アジア・新興国**: 各国金融監督 (タイ BoT, インドネシア OJK 等)。
- **直近政策論点**:
  - 2024〜 EV 残価評価モデルの透明化 (消費者保護)
  - 2025〜 コネクテッドカーデータ × 金融の個人情報保護
  - 2025〜 米国 CFPB の自動車金融 APR 開示強化動向
  - 2024〜 国内 KINTO 等サブスクリプション課税・消費者保護論点

## 関連項目

- [[manufacturer-finance/toyota-motor|Toyota Motor]] (親会社)
- [[JapanFG/toyota-financial|Toyota Financial Services (JapanFG)]] · [[JapanFG/toyota-finance|トヨタファイナンス]] · [[JapanFG/toyota-tsusho-finance|豊田通商ファイナンス]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda|Japan auto-loan ABS]]
- [[JapanFG/mitsubishi-hc-capital|三菱HCキャピタル]] · [[JapanFG/orix-corp|オリックス]] · [[JapanFG/tokyo-century|東京センチュリー]] · [[JapanFG/mufg|MUFG]] · [[JapanFG/smfg|SMFG]] · [[JapanFG/mizuho-fg|みずほ FG]]
- [[manufacturer-finance/hitachi-industrial-finance-platform|Hitachi 産業金融]] · [[manufacturer-finance/panasonic-captive-finance|Panasonic 顧客金融]] · [[manufacturer-finance/sony-group-finance-arm|Sony FG]] · [[manufacturer-finance/mitsubishi-heavy-export-finance|MHI 輸出金融]]
- [[manufacturer-finance/INDEX|manufacturing INDEX]] · [[JapanFG/INDEX|JapanFG INDEX]] · [[INDEX|FinWiki index]]

## 出典

- Toyota Motor Corporation「Financial Services」: https://global.toyota/en/company/profile/other-toyota-businesses/finance/
- Toyota Motor Corporation「Annual Report / Integrated Report」: https://global.toyota/en/ir/library/annual/
- Toyota Financial Services USA: https://www.toyotafinancial.com/us/en.html
- トヨタファイナンス株式会社: https://www.toyota-finance.co.jp/
- EDINET (有価証券報告書): https://disclosure2.edinet-fsa.go.jp/

---

> [!info] 校正ステータス
> 信頼度: **高め**。Toyota Motor IR / Annual Report / TFS 公式 / TMCC SEC filing / EDINET を基準に公開情報で構成。TFS 単独連結数値は親会社「金融事業セグメント」開示と各国法人開示の組合せが必要なため概数で記載。米国 TMCC のシェア・国内残クレ比率は業界推計値を引用。
