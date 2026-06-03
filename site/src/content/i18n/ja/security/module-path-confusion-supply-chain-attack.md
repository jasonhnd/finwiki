---
source: security/module-path-confusion-supply-chain-attack
source_hash: 7cb8194d1583f458
lang: ja
status: machine
fidelity: ok
title: "モジュールパスの混乱 + ライセンスストリップ = サプライチェーン攻撃の三連撃"
translated_at: 2026-06-03T00:53:08.315Z
---

# モジュールパスの混乱 + ライセンスストリップ = サプライチェーン攻撃の三連撃
## ウィキ上の位置づけ
この項目は [[INDEX|FinWiki index]] の下にあります。ピア コンテキストの場合は [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]]、より広い依存関係の境界の場合は [[systems/INDEX|systems index]] で読み取ります。
> [!info]要約
> 3の独立した操作の組み合わせで供給チェーン攻撃が形成される:(1) go.mod / package.jsonのモジュールパスでupstream(例:github.com/cosmos/...)を危称、(2) replace命令で危う称パスを自前のforkへハイジャック、(3)メインリポジトリのLICENSEを削除。下流ユーザーが「正規」パスをインポートすると、実際にはforkが実行される。規制下にあるVASPルートでは、この種の攻撃面は[[exchanges/jp-vasp-security-audit-certification|JP VASP 安全審計認証]]系で部分的にカバーされる。
### 1。モジュールパスの混乱
- Go:module github.com/cosmos/cosmos-sdk が実際のリポジトリは github.com/<rebrand>/x
- npm:name @cosmos/sdkでscopeが自社所有ではない
- ユーザーが go get github.com/cosmos/cosmos-sdk を取るGOPROXY経由で危称forkを取得する可能性がある
### 2。ハイジャックを置き換える
- go.mod内ではgithub.com/cosmos/cosmos-sdk => ./forkを置き換えます
- 上流ユーザーがプロジェクトを取り込むとreplaceが透過し、強制的にforkを使われる
- モジュールパスと秘密と二重の識別名となる
### 3。ライセンスストリップ
- メインリポジトリにLICENSEファイルを置かない
- 元プロジェクトがApache 2.0のフォークであっても、法的には下流ユーザーは無許可使用となります
- このステップは見落とされることが多いが、法の表面を無視して拡大させる
## 識別チェックリスト
- [ ] go.mod 1行 のモジュールパスと GitHub URL は一致しているか
- [ ] go.mod内にreplace命令はあるか
- [ ] メインリポジトリのルートにLICENSE / LICENSE.md / LICENSE.txtはあるか
- [ ] package.json の名前フィールドは npm レジストリ上の実際のスコープと一致しているか
- [ ] コミットメッセージに元のフォーク名(例:"for <upstream-project>" 等の自首文字列) が混入していないか
## いつ使用するか
- プロジェクトが「完全に自社開発」と謳いつつ、リポジトリ構造がフォークに酷似している
- この依存に挑戦している下流ユーザーがサプライチェーン・リスクリスクを行うケース — [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]]のような重大事件では、サード粒子依存側のソーシャルエンジニアリング/ビルドツールチェーン攻撃の実リスクが露呈
- 法務側が「この会社はどのOSSを使うか/承認は適切か」を評価するケース
## 使用してはいけない場合
- 「fork of X」を知らない、元LICENSEを保持しているプロジェクト — 合法なforkに該当
- 純粋なアプリケーション層でモジュールパス 概念が無いプロジェクト
- クローズド出典で監査不能なプロジェクト(別経路で対応する必要) —例許可型チェーンの[[systems/canton-overview|Canton]]のようなケースは、出典差分ではなくガバナンス+監査経路をえる必要がある
## 来歴
- ケーススタディ(vaporware Audit):コードの大半が上流パブリックチェーン・プロジェクトから直接コピー、go.modで上流モジュールパスを指摘、replaceでローカルフォークにハイジャック、メインリポジトリのLICENSEを削除、コミットメッセージに上流プロジェクト名が漏れて自首した事例
