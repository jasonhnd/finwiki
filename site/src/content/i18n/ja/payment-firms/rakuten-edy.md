---
source: payment-firms/rakuten-edy
source_hash: f455a2113405c058
lang: ja
model: local-ja-business-term-glossary
status: machine
fidelity: ok
title: "楽天Edy"
translated_at: 2026-06-26T08:31:59.835Z
---

# 楽天Edy

## Wiki 経路

この項目は [[payment-firms/INDEX|payment-firms INDEX]]（そのドメイン経路）の下に位置する。グループ／親会社の文脈としては [[payment-firms/rakuten-fg|Rakuten financial 経済圏]] と、対比としては [[payment-firms/seven-payment-service|セブン・ペイメントサービス]] / nanaco 型の 前払式ピアと、監督／システムの境界としては [[payments/funds-transfer-vs-prepaid-boundary|the 資金移動 vs 前払式 boundary]] および [[financial-regulators/fsa|the FSA]] と併せて読むこと。

## 要点（TL;DR）

楽天Edy株式会社は、楽天グループの **前払式支払手段（前払式-instrument under 資金決済法）** 発行会社。電子マネー「楽天Edy」は複数加盟店で使える **第三者型前払式支払手段** に該当し、当局の事前登録を要する。これは資金移動業（送金）ではなく、原則払戻し禁止の stored-value rail である点が重要。発行者には未使用残高の半額以上の発行保証金供託が義務づけられる（保有者保護）。[[payment-firms/rakuten-fg|Rakuten]] のポイント・楽天キャッシュ・楽天ペイ・カードと隣接する 前払式層を担う。

## 1. ライセンス／グループ境界

| Item | Notes |
|---|---|
| Legal name | 楽天Edy株式会社 |
| License route | 第三者型前払式支払手段発行者（資金決済法）; ※資金移動業ではない |
| Parent / group | [[payment-firms/rakuten-fg|Rakuten]] / 楽天ペイメント系 |
| Main lanes | 前払式電子マネー、楽天キャッシュ、加盟店開拓、stored-value 管理 |
| Holder protection | 発行保証金供託（未使用残高の1/2以上、3/31・9/30 基準） |
| Wiki role | 楽天グループの 前払式 / e-money 発行会社ページ |

## 2. オペレーティングモデル楽天Edy は、早期から普及し今なお material な 前払式電子マネー rail を運営する。楽天ポイント・楽天キャッシュ・楽天ペイ・カードチャージ・加盟店受入を接続し、前払式 scheme の経済性は [[payments/japan-payment-scheme-economics-matrix|決済スキーム経済性マトリクス]] を参照。前払式バリュー残高 を、クレジットカードや銀行口座型プロダクトから分離して捉えるのに有用で、[[payments/japan-prepaid-electronic-money-operator-matrix|前払式電子マネー事業者マトリクス]] にも現れる。

## 3. このページが重要な理由

- 楽天カード・楽天ペイ・楽天Edy・楽天キャッシュ は隣接するが法的に別々の surface。本ページが 前払式 / 前払式の層を可視化する。
- 「第三者型前払式支払手段（払戻し禁止）」と「資金移動業（送金可）」の規制体系の違いを明示する基準点になる。
- グループの card-credit 視点（[[card-issuers/rakuten-card|楽天カード]]）と stored-value 視点を分離する。

## 関連

- [[payment-firms/INDEX|payment-firms INDEX]]
- [[payment-firms/rakuten-fg|Rakuten FG]]
- [[card-issuers/rakuten-card|楽天カード]]
- [[payments/funds-transfer-vs-prepaid-boundary|資金移動 vs 前払式 boundary]]
- [[loyalty/japan-points-landscape|Japan points landscape]]
- [[INDEX|FinWiki index]]

## 出典

- 楽天Edy company overview: https://edy.rakuten.co.jp/company/company.html
- 日本資金決済業協会: 楽天Edy 前払式支払手段データ: https://www.s-kessai.jp/cms/card-data/detail/84/
- FSA: 前払式支払手段 policy portal: https://www.fsa.go.jp/policy/prepaid/

> [!info] 校核状态
> confidence: likely。第三者型前払式支払手段としての位置づけ（資金移動業ではない）・発行保証金供託義務は資金決済法の公開枠組み。具体的な未使用残高・供託額は公開数値で要確認、本ページでは扱わない。
