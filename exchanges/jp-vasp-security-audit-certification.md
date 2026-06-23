---
title: 国内 VASP セキュリティ・監査・ISMS 認証実態
aliases:
  - JP VASP security certification
  - 国内暗号資産取引所 ISMS
  - JP VASP SOC2 ISO27001
domain: exchanges
created: 2026-05-19
last_updated: 2026-05-19
last_tended: 2026-06-23
review_by: 2026-09-21
confidence: likely
tags:
  - exchanges
  - vasp
  - security
  - audit
  - isms
  - iso27001
  - soc2
sources:
  - https://jvcea.or.jp/
  - https://www.fsa.go.jp/
status: active
---

# 国内 VASP セキュリティ・監査・ISMS 認証実態

## 概要

国内 VASP は **FSA 監督指針 + JVCEA 自主規制規則 + 業界自主標準** の三層でセキュリティ + 監査義務を負う。法定要件に加え、**ISMS (ISO/IEC 27001)** や **SOC2 Type II 報告書** 等の第三者認証取得が事実上のスタンダード化しており、機関投資家オンボーディング + 海外連携 + B2B custody 受託の前提条件となっている。Coincheck NEM 流出 (2018) + DMM Bitcoin Lazarus 流出 (2024) を経て、認証取得は「任意だが取らないと業界に居られない」状態。

## 法令上の義務 (改正資金決済法 + 監督指針)

- **システムリスク管理体制**: 経営層関与 + リスク評価 + 内部監査 (年次)
- **顧客資産分別管理**: 信託保管 + 内部監査 + 監査法人による外部監査
- **コールド保管 95% / ホット 5%**: JVCEA 規則 運用監査義務
- **AML/CFT 内部統制**: 犯収法対応 + JAFIC 報告体制
- **個人情報保護**: 個人情報保護法 (個情法) + GDPR 域外適用 (海外顧客あれば)

## 第三者認証 (任意だが事実上必須)

- **ISMS (ISO/IEC 27001)**: bitFlyer / Coincheck / GMO コイン / SBI VC トレード / bitbank 等主要全社取得
- **SOC2 Type II**: 機関 OTC / カストディ中心 (Crypto Garage / Custodiem / Komainu Japan 等)
- **PCI DSS**: 法定通貨カード決済関連 (一部)
- **公認内部監査人 (CIA) / 公認情報システム監査人 (CISA)**: 内部監査部門に必置化

## 監査法人別 担当 VASP

- **EY 新日本**: bitFlyer / Coincheck
- **PwC あらた**: SBI VC トレード
- **デロイト トーマツ**: GMO コイン
- **KPMG あずさ**: Custodiem / Mercury 系
- グローバル 4 大が **100% 寡占** — 中小監査法人は VASP 監査参入困難 (専門人材 + コスト + リスク許容度)

## 国際比較

- **米国**: SOC2 + 州 MTL 個別監査 + NYDFS Part 500 (BitLicense)
- **EU**: MiCA + DORA で ICT third-party 監査強化 (2025-)
- **韓国**: ISMS-P (個人情報 + 情報保護統合) 必須取得
- **日本**: ISMS + 内部監査 + FSA monitoring の三層 — 自主規制 (JVCEA) が認証取得を実質義務化する独自構造

## 関連

- [[exchanges/jvcea-self-regulatory-overview]]
- [[exchanges/fsa-vasp-registration-system]]
- [[exchanges/jp-vasp-cold-storage-segregation-rules]]
- [[exchanges/jp-vasp-aml-travel-rule-implementation]]
- [[exchanges/korea-cex-five-pillars-comparison]]
- [[exchanges/us-crypto-licensing-multi-layer-system]]
- [[exchanges/jp-vasp-incident-history]]
