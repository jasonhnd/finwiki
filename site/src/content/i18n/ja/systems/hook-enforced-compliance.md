---
source: systems/hook-enforced-compliance
source_hash: f760e5e1747f8cc6
lang: ja
status: machine
fidelity: ok
title: "Hook-Enforced Compliance"
translated_at: 2026-06-03T01:06:46.346Z
---
# Hook-Enforced Compliance

## ウィキ上の位置づけ

この項目は [[systems/INDEX|systems index]] に属する。ピア比較・対照の文脈では [[systems/threshold-bft-consensus-rust-implementations|Threshold BFT 共识 Rust 化潮流（Tempo Simplex / Arc Malachite）]] と合わせて読み、より広いシステム境界・規制境界については [[fintech/INDEX|fintech index]] を参照する。

## 5 層防御モデル(personal OS)

| 層 | 性質 | 実装 |
|---|------|------|
| 1  | **前置注入**(最も硬い) | UserPromptSubmit hook → 応答生成前に HARD RULE reminder を注入 |
| 2  | **出力形式強制** | Pre-flight Compliance Check → ROUTER の先頭行で `🌅 Trigger: ...` |
| 3  | **サブエージェント自己証明** | Subagent の第一行で「Task() 真実 launch」を宣言 |
| 4  | **事後監査** | AUDITOR Compliance Patrol(Mode 3) 7-class taxonomy |

**層別の本質**:

- Layer 1  は**注入**。主契約の前に入る
- Layer 2-3  は**形式強制**。応答の構造を縛る
- Layer 4  は**追跡**。過去の violation を積み上げてエスカレーションする
- Layer 5  は**防止**。改変が過去のバグを復活させないようにする

## 初回 verification pattern

deployment と working は同じではない。Hook を配置しても、実際に firing するかは別問題である。

**初回実働までの流れ**:

1. Deploy(配置) → 静的状態
2. First trigger(最初のトリガー) → firing するか観測
3. Firing success(成功) → reminder 注入が到達
4. Observable effect(観測可能な影響) → LLM の応答が変化

本 wiki 項目自体がその瞬間を記録している。2026-04-21 本次退朝で Layer 1  hook の初回 firing に成功した。

## 昇級階段(違反頻度に応じた強制度上昇)

この設計は単一防御ではない。**頻度に応じて強制度が上昇**する。

- ≥3 同類 / 30 日 → hook 厳格度を上げる。reminder が具体名指し化される
- ≥5 同類 / 30 日 → Start Session briefing に `🚨 Compliance Watch: [type]` を予置する
- ≥10 同類 / 90 日 → AUDITOR Patrol を毎 Session 実行する

## 応用可能性

- **契約書・SOP**: 「書いた = 守られる」ではない。監査、罰則、ログが強制機構になる
- **コード規約**: lint / CI / pre-commit hook が Layer 1 相当
- **組織プロセス**: review step / sign-off が Layer 4 相当
- **法令順守**: 監督官庁の査察が Layer 4 相当。自主検査が Layer 3 相当。金融ドメインの実例は [[exchanges/fsa-business-improvement-orders-history|FSA 業務改善命令史]] や [[exchanges/jvcea-self-regulatory-overview|JVCEA 自主規制体系]] が並走する

## 認知特性との関係

このパターンへの敏感性は、SOUL `強規則意識・システム完整性希求`(observing 候補、2026-04-21 新設)と連動する。本 wiki 項目の出現自体がその特性の証跡である。

## 関連項目

- personal-os-architecture(準備中)

## 出典

- Public hook and agent-instruction documentation.
- Public workflow-design examples for pre-generation and post-run compliance checks.

## 関連項目
<!-- wiki-links:managed -->
- [[INDEX|Wiki Index]]
<!-- /wiki-links:managed -->
