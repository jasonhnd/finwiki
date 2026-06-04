---
source: japanfg/shinkin-network-services
source_hash: a3f7124e5690f517
lang: ja
status: machine
fidelity: ok
title: "信金ネットワークサービス"
translated_at: 2026-06-02T15:14:17.081Z
---

# 信金ネットワークサービス

## ウィキ上の位置づけ

この項目は [[JapanFG/INDEX|JapanFG index]] の配下に置かれる。信用金庫システムを支える業務上の中央銀行的な比較対象として [[cooperative-banks/shinkin-central|信金中央金庫]]、業界団体 / 政策レイヤーとして [[financial-regulators/zenshin-kyo|全国信用金庫協会]]、全会員母集団のルートとして [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]] とあわせて読む。協同組織金融システムの比較アンカーは [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]] に置かれる。

## 要約

信金ネットワークサービス（Shinkin Network Services / SNS, 通称「信金共同センター」）は、信金中央金庫グループの中核 IT インフラ事業体で、全国 254 信用金庫（FSA 2025-11-06 時点）が共同利用する **ATM ネットワーク・勘定系共同センター・電子決済システム** を運営する協同組織向け IT サービスプロバイダ。信用金庫業界は単独で大規模 IT 投資を行えない中小金庫が大半を占めるため、共同インフラ集約による規模の経済が業界存続の鍵となっている。SNS はその実体的キャリアで、信用金庫共同 ATM サービス（しんきん ATM ネットワーク / Shinkin Cash Service, SCS）と、信用金庫向け勘定系共同センター・インターネットバンキング基盤・全銀ネット接続ゲートウェイなどを提供する。

## 1. 法的 / グループ境界

| 項目 | 注記 |
|---|---|
| 正式名称 | 信金ネットワークサービス株式会社（株式会社、信金中央金庫系列） |
| グループルート | 信金中央金庫グループ系列の IT 共同インフラ会社 |
| 会員基盤 | 全国信用金庫 254 行（FSA 2025-11-06 時点）+ 信金中央金庫 |
| ウィキ上の役割 | 信用金庫業界の **共同 IT インフラ運営会社** の アンカー項目 |
| 連合会レイヤーの対応先 | [[financial-regulators/zenshin-kyo|全国信用金庫協会]]（政策 / 業界団体） |
| 中央銀行的レイヤーの対応先 | [[cooperative-banks/shinkin-central|信金中央金庫]]（中央流動性 / 決済） |

## 2. 業務の内容

信金ネットワークサービスは、以下のような共同インフラを運営・提供する：

1. **しんきん ATM ネットワーク（Shinkin Cash Service, SCS）**
   - 全国 254 信用金庫間の ATM 相互利用ネットワーク。
   - 信用金庫キャッシュカードを全国どの信用金庫 ATM でも提携利用可能にする。
   - メガバンク・地銀との ATM 相互利用提携（[[banking/atm-network-japan|Japan ATM network]] 参照）の業界側カウンターパート。

2. **信用金庫共同センター（勘定系共同利用）**
   - 単独で勘定系システムを保有できない中小信用金庫向けに、共通勘定系を提供。
   - 各信用金庫はテナント方式で利用、運用コストを共同負担。
   - 大手信用金庫（[[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]]・[[cooperative-banks/osaka-shinkin|大阪信用金庫]] など）は独自勘定系を持つケースもあるが、多くの中堅・中小金庫は共同センターに依存。

3. **インターネットバンキング・モバイルバンキング基盤**
   - 信用金庫向けの個人 / 法人インターネットバンキング共通基盤。
   - 各信用金庫がブランディングだけ差異化、バックエンドは共通。

4. **全銀ネット / 全銀 EDI / Zengin システム接続**
   - 信用金庫業界全体を [[banking/zengin-network|全銀ネット]] に接続するゲートウェイ運営。
   - 個別信用金庫が全銀ネットに直接接続するのではなく、SNS / 信金中金経由で集約接続。

5. **AML/CFT 共通システム・本人確認（eKYC）共通基盤**
   - マネーロンダリング対策・本人確認システムの業界共通化。
   - 個別信用金庫の規模では構築困難なコンプライアンス IT を集約提供。

6. **キャッシュレス決済対応**
   - 信用金庫キャッシュカードのデビット機能・スマホ決済連携など、信用金庫向けキャッシュレス対応の共通インフラ。

## 3. 戦略的位置付け（この主体が重要な理由）

### 協同組織金融機関の規模の経済問題

信用金庫業界は 1990 年代ピーク時 400 行超 → 2025-11-06 時点 254 行と合併が進行しているが、それでも個別信用金庫の平均資産規模は地銀の数分の一にとどまる。一方で銀行 IT インフラ（勘定系・AML/CFT・キャッシュレス）の更新コストは年々上昇しており、**個別信用金庫が独自に IT 投資を継続することは構造的に困難**。SNS のような共同インフラ会社による集約は、業界存続の前提条件となっている。

### メガバンク / 地銀との対比

- **メガバンク（[[mufg]]・[[smfg]]・[[mizuho-fg]]）**: 自社で勘定系・AML/CFT・モバイルバンキング基盤を保有・運営、IT 投資額は年間数千億円規模。
- **地銀**: 地銀共同センター（NTT データ・日立等の地銀共同利用システム）に多くが依存するが、各地銀ごとにカスタマイズの余地が大きい。
- **信用金庫**: SNS のような業界全体共通インフラへの依存度が最も高く、個別カスタマイズの余地は限定的。これは協同組織モデルゆえの「業界一体運営」を体現する。

### [[cooperative-banks/shinkin-central|信金中金]] との分業

- **信金中金**: 流動性プール・余資運用・系統内資金調整・全銀ネット最終接続。
- **SNS / 信金共同センター**: 業務系 IT（ATM・勘定系・IB・AML 基盤）の共同運営。
- 両者は信金中央金庫グループ内で機能分担しており、SNS は IT オペレーション、信金中金は金融オペレーションの中核を担う。

### [[financial-regulators/zenshin-kyo|全信協]] との分業

- **全信協**: 政策提言・業界標準・自主規制ガイドライン策定・行政対応。
- **SNS**: 業務インフラの実体的運営。
- 全信協が「決めるレイヤー」、SNS が「動かすレイヤー」という分業構造。

## 4. 関連 / システムリスク論点

### 集中リスク

業界の 254 行が共通インフラに依存することは、SNS / 信金共同センターのシステム障害が業界全体に波及するリスクを意味する。これは銀行業界共通の課題（メガバンク [[mizuho-fg|みずほ FG]] の繰り返されるシステム障害が示すように）だが、信用金庫の場合は「業界全体が同時停止する」可能性が構造的に内在する。

### キャッシュレス潮流への適応

ATM ネットワーク（SCS）は現金利用減少のなかで運営コスト負担が増大しており、業界全体での ATM 設置台数削減・スマホ決済シフトへの戦略転換が進行中。SNS はこの転換のキャリアでもある。

### サイバーセキュリティ

信用金庫個別のセキュリティ投資が限定的な分、SNS の防御レベルが業界全体のセキュリティ水準を実質的に決定する。FSA / 金融庁の業界共通サイバーセキュリティガイドラインの適用主体としても重要。

## 関連

- [[JapanFG/INDEX|JapanFG index]]
- [[cooperative-banks/shinkin-central|信金中央金庫]]
- [[financial-regulators/zenshin-kyo|全国信用金庫協会]]
- [[cooperative-banks/kyoto-chuo-shinkin|京都中央信用金庫]]
- [[cooperative-banks/osaka-shinkin|大阪信用金庫]]
- [[cooperative-banks/jonan-shinkin|城南信用金庫]]
- [[cooperative-banks/yokohama-shinkin|横浜信用金庫]]
- [[banking/shinkin-bank-registry-japan|Japan shinkin bank registry]]
- [[banking/japan-cooperative-banking-unified-federation-matrix|Japan cooperative-banking unified federation matrix]]
- [[banking/cooperative-banking-japan|Cooperative banking in Japan]]
- [[banking/zengin-network|全銀ネット]]
- [[banking/atm-network-japan|Japan ATM network]]
- [[banking/INDEX|banking index]]

## 出典

- 全国信用金庫協会（Zenshin-kyō）公式サイト: https://www.shinkin.org/
- 信金中央金庫 公式サイト: https://www.shinkin-central-bank.jp/
- 信金ネットワークサービス関連: https://www.shinkin.co.jp/network/
- 全信協「全信協について」: https://www.shinkin.org/zenshinkyo/about/
- FSA: 信用金庫免許一覧（2025-11-06）: https://www.fsa.go.jp/menkyo/menkyoj/shinkin.xlsx

---

> [!info] 検証メモ
> confidence: **likely**. SNS は信金中央金庫グループ系列の業界共同 IT インフラ会社で、Shinkin Cash Service・信金共同センター・全銀接続ゲートウェイ等の業務範囲は公開情報（全信協・信金中金公式サイト・業界ディスクロージャー誌）から確認可能。ただし、法人格詳細・最新の業務範囲・出資構造の精緻な数値は信金中金グループ内開示が中心となるため、外部からの一次資料粒度は限定的。最新値は信金中金ディスクロージャー誌・全信協公表資料を要参照。
