---
type: wiki
kind: pattern
slug: module-path-confusion-supply-chain-attack
domain: security
title: "Module path confusion + LICENSE strip = サプライチェーン攻撃の三連撃"
aliases: []
status: candidate
confidence: possible
evidence_count: 2
challenges: 0
created: 2026-05-12
last_updated: 2026-05-26
last_tended: 2026-05-26
review_by: 2026-11-08
related:
  - "[[fork-and-rebrand-5-layer-audit-framework]]"
  - "[[forensic-identity-anchor-chain]]"
tags: [security/supply-chain, security/dependency, security/dd]
sources:
  - "https://go.dev/ref/mod"
  - "https://docs.npmjs.com/cli/v10/configuring-npm/package-json"
  - "https://securityscorecards.dev/"
---

# Module path confusion + LICENSE strip = サプライチェーン攻撃の三連撃

## Wiki route

This entry sits under [[INDEX|FinWiki index]]. Read it with [[security/fork-and-rebrand-5-layer-audit-framework|fork-and-rebrand audit framework]] for peer context and [[systems/INDEX|systems index]] for the broader dependency boundary.

> [!info] TL;DR
> 3つの独立した操作の組み合わせでサプライチェーン攻撃が形成される:(1) go.mod / package.jsonのモジュールパスでupstream(例:github.com/cosmos/...)を詐称、(2) replace指令で詐称パスを自前のforkへハイジャック、(3) メインリポジトリのLICENSEを削除。下流ユーザーが「正規」パスをimportすると、実際にはforkが実行される。規制下にあるVASPルートでは、この種の攻撃面は [[exchanges/jp-vasp-security-audit-certification|JP VASP 安全審計認証]] 体系で部分的にカバーされる。

## 三連撃の分解

### 1. Module path confusion

- Go:module github.com/cosmos/cosmos-sdkだが実際のリポジトリは github.com/<rebrand>/x
- npm:name @cosmos/sdkでscopeが自社所有ではない
- ユーザーが go get github.com/cosmos/cosmos-sdk するとGOPROXY経由で詐称forkを取得する可能性がある

### 2. Replace hijack

- go.mod内に replace github.com/cosmos/cosmos-sdk => ./fork
- 上流ユーザーがプロジェクトを取り込むとreplaceが透過し、強制的にforkを使わされる
- module pathと組み合わせると二重の詐称となる

### 3. LICENSE strip

- メインリポジトリにLICENSEファイルを置かない
- 元プロジェクトがApache 2.0のforkであっても、法的には下流ユーザーは無許諾使用となる
- このステップは見落とされがちだが、法的surfaceを顕著に拡大させる

## 識別 checklist

- [ ] go.mod 1行目のmodule pathとGitHub URLは一致しているか
- [ ] go.mod内にreplace指令はあるか
- [ ] メインリポジトリのルートにLICENSE / LICENSE.md / LICENSE.txtはあるか
- [ ] package.jsonのnameフィールドはnpm registry上の実際のscopeと一致しているか
- [ ] commit messageに元のfork名(例:"for <upstream-project>" 等の自首文字列)が混入していないか

## When to Use

- プロジェクトが「完全に自社開発」と謳いつつ、リポジトリ構造がforkに酷似しているケース
- この依存に乗っている下流ユーザーがサプライチェーン・リスク監査を行うケース — [[exchanges/bybit-lazarus-hack-detailed-analysis|Bybit Lazarus hack]] のような重大事件では、サードパーティ依存側のsocial-engineering / build-toolchain攻撃の実リスクが露呈
- 法務側が「この会社はどのOSSを使っているか / 許諾は適切か」を評価するケース

## When NOT to Use

- 「fork of X」を明示し、元LICENSEを保持しているプロジェクト — 合法なforkに該当
- 純粋なアプリケーション層でmodule path概念が無いプロジェクト
- クローズドソースで監査不能なプロジェクト(別経路で対応する必要) — 例えば許可型チェーンの [[systems/canton-overview|Canton]] のようなケースは、ソース差分ではなくgovernance + auditor経路を辿る必要がある

## Counterpoints

> [!question] Open questions
> - 三連撃を検出した後、GOPROXY側 / 上流maintainer側にtakedown経路はあるか
> - 「誠実なfork + 完全なrebrand」とどう区別するか(核心:LICENSEを保持しているか + forkであることを公的に明示しているか)

## Provenance

- ケーススタディ(vaporware audit):コードの大半が上流パブリックチェーン・プロジェクトから直接コピーされ、go.modで上流モジュールパスを詐称、replaceでローカルforkにハイジャック、メインリポジトリのLICENSEを削除、commit messageに上流プロジェクト名が漏れて自首した事例
