---
source: structured-finance/consumer-loan-abs-japan-card-issuer
source_hash: cbbad183721ba81d
lang: ja
status: machine
fidelity: ok
title: "日本の消費者ローン／カード債権ABS（Aplus、Orico、JACCS、MUFG NICOS）"
translated_at: 2026-06-03T00:53:08.261Z
---
# 日本の消費者ローン／カード債権ABS（Aplus、Orico、JACCS、MUFG NICOS）

## 要約

日本の消費者ローンおよびカード債権ABSは、[[card-issuers/aplus]]、[[card-issuers/orico]]、[[card-issuers/jaccs]]、[[card-issuers/mufg-nicos]]などの主要な消費者金融会社・カード発行会社によって発行され、早期償還トリガーを備えたリボルビング・プール構造を用いる。この資産クラスは、カード債権が短期・回転型であり、景気循環に敏感な消費者信用需要に結びついているため、オートローンABSとは構造的に異なる。デフォルト率はオートローンABSより循環的だが、強いトリガーを備えたリボルビング構造がシニア債投資家を保護する。このページは、[[structured-finance/INDEX]]における消費者／カードABSの構造メカニクスを扱い、[[structured-finance/INDEX]]の消費者金融会社ページへ接続するために使う。

## ウィキ上の位置づけ

| 見たい内容 | 参照先 |
|---|---|
| 市場概観 | [[structured-finance/japan-abs-market-overview]] |
| オートローンABSとの比較 | [[structured-finance/auto-loan-abs-japan-toyota-honda]] |
| SPVビークル | [[structured-finance/spv-tk-gk-vehicle-japan-tax]] |
| 格付手法 | [[structured-finance/credit-rating-methodology-jcr-r-and-i]] |
| カード発行会社ページ | [[card-issuers/jcb]] |

## 1. 反復発行体

| 発行体 | ブランド／事業 | 典型的な証券化対象資産 |
|---|---|---|
| [[card-issuers/aplus]] | Aplus Financial（SBI／その他との関係あり） | 消費者ローン、割賦債権 |
| [[card-issuers/orico]] | Orient Corporation | カード債権、自動車割賦、消費者ローン |
| [[card-issuers/jaccs]] | JACCS Co., Ltd. | 割賦債権、カード債権、消費者ローン |
| [[card-issuers/mufg-nicos]] | Mitsubishi UFJ NICOS | カード債権 |
| [[card-issuers/jcb]] | JCB | カード債権（JCBブランド） |
| [[card-issuers/credit-saison]] | Credit Saison | カード債権、割賦債権 |
| [[card-issuers/aeon-financial-service]] | Aeon Financial Service（Aeon Cardなど） | カード債権、割賦債権 |

これらが主要な反復発行体である。一部の案件は銀行系の信託構造を使い、別の案件はTK-GK型SPVを使う。

## 2. リボルビング構造

| 要素 | 説明 |
|---|---|
| リボルビング期間 | 債権プールから回収した現金を、新たな適格債権の購入に使い、プール残高を横ばいに保つ。 |
| 償還期間 | リボルビング期間の終了後、またはトリガー抵触後に、キャッシュフローを債券の返済に充てる。 |
| 適格基準 | 新規債権は、定義された信用・集中・シーズニング基準を満たす必要がある。 |
| プール残高 | リボルビング期間中は目標水準に維持される。 |
| 債券デュレーション | 実効デュレーションは、リボルビング期間と償還速度によって決まる。 |

個別債権の回転が速い一方で、借り手との関係は長期にわたるため、リボルビング構造はカード債権に適している。単一のカード購入債権は30-60 日で支払われることもある。

## 3. 早期償還トリガー

| トリガー類型 | 例 |
|---|---|
| 信用トリガー | エクセススプレッドが閾値を下回る、貸倒償却が閾値を上回る、延滞が閾値を超える |
| プールトリガー | プール残高が必要水準を下回る、集中制限に抵触する |
| オリジネータートリガー | オリジネーターの破産／格下げ、サービサー債務不履行事由 |
| 構造トリガー | 必要準備口座の未積立、シニア債への支払不足 |

トリガーに抵触すると、案件はリボルビングモードから償還モードへ切り替わる。キャッシュフローは新規債権の購入に使われず、優先順位に従って債券投資家へ支払われる。これがシニア債投資家にとっての主要な保護である。

## 4. 循環的なデフォルト率

| 期間 | パターン |
|---|---|
| 2006 前 | 消費者金融ブーム。債権が増加し、競争激化とともにデフォルト率も上昇。 |
| 2006-2010  | 貸金業法改正（過払金返還請求）。消費者金融業界の再編。デフォルト率上昇。 |
| 2010-2015  | 業界再編。生き残った発行体が与信引受を改善し、デフォルト率は安定。 |
| 2015-2020  | 安定期。ECがカード取扱高を押し上げ、デフォルトは低水準。 |
| 2020以降 | COVIDによる混乱と回復。デフォルトは景気循環に敏感。 |

2006 の貸金業法改正と、その後に続いた過払金返還請求の波は、日本の消費者金融ABSを理解するうえで重要な歴史的事象である。多くの消費者金融会社が破綻または買収され、ABS投資家は規制・訴訟リスクを構造に織り込んでモデル化する必要を学んだ。改正後の業界は、より集中し、信用規律も高まっている。

## 5. トランチング

| トランチ | 典型的な買い手 |
|---|---|
| シニア（AAA／AA） | 生命保険会社、資産運用会社、メガバンクのALM勘定 |
| メザニン（A／BBB） | 専門的なスプレッド投資家 |
| エクイティ／劣後 | オリジネーター保有 |

デフォルト率の変動が大きいことを反映し、劣後比率はオートローンABSより高い。

## 6. 信用補完

| 仕組み | 目的 |
|---|---|
| 劣後 | ジュニア部分が最初の損失を吸収する。 |
| 現金準備 | クロージング時に積み立てる、またはエクセススプレッドから形成する準備金。 |
| エクセススプレッドのトラップ | トリガー水準に近づいたときにエクセススプレッドを準備金へ捕捉する。 |
| サービサー・アドバンス | サービサーが延滞支払を債券投資家へ立て替える。 |
| 超過担保 | 債権額面が債券額面を上回る。 |

リボルビング構造では、劣後に損失が及ぶ前の第一防衛線がエクセススプレッドであるため、エクセススプレッドのトラップが特に重要である。

## 7. ビークル選択

日本の消費者／カード債権ABSの多くは、TK-GK型SPV（[[structured-finance/spv-tk-gk-vehicle-japan-tax]]）または信託受益権構造（[[structured-finance/japan-trust-beneficial-interest-vs-spv]]）を用いる。受託者が[[trust-banks/sumitomo-mitsui-trust]]やMitsubishi UFJ Trustのような大手信託銀行である場合、信託構造が一般的である。

## 8. 発行体にとっての資金調達ミックス上の役割

消費者金融会社／カード発行会社にとって、ABSは次の資金調達手段と並ぶ。

- 銀行借入枠（メガバンクや地域銀行からのコミットメントライン）
- 社債発行（発行体が投資適格格付を持つ場合）
- 銀行株主からの資金調達（一部の消費者金融会社は銀行子会社である。例: MUFGグループ会社としてのMUFG NICOS）

ABSが提供するもの:
- 資金調達の多様化
- オフバランスシートによる資本軽減
- 債権の期間に対するテナー・マッチング
- 格付アービトラージ（発行体の企業格付が低くてもシニアはAAA）

## 関連項目

- [[structured-finance/INDEX]]
- [[structured-finance/japan-abs-market-overview]]
- [[structured-finance/auto-loan-abs-japan-toyota-honda]]
- [[structured-finance/spv-tk-gk-vehicle-japan-tax]]
- [[structured-finance/japan-trust-beneficial-interest-vs-spv]]
- [[structured-finance/credit-rating-methodology-jcr-r-and-i]]
- [[card-issuers/orico]]
- [[card-issuers/jaccs]]
- [[card-issuers/aplus]]
- [[card-issuers/mufg-nicos]]
- [[card-issuers/jcb]]

## 出典

- JCR (Japan Credit Rating Agency), consumer / card ABS criteria.
- R&I (Rating and Investment Information), consumer-finance ABS methodology.
- JSDA (Japan Securities Dealers Association).
- ASF Japan (Asset Securitization Forum Japan).
- Public IR from JACCS, Orico, Aplus, NICOS.
