---
source: security/typosquatting-package-detection-checklist
source_hash: a940d468c765373f
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "タイポスクワッティング・パッケージ検出チェックリスト — npm / PyPI / Go の名前混同トリアージ"
translated_at: 2026-06-05T00:00:00.000Z
---

# タイポスクワッティング・パッケージ検出チェックリスト — npm / PyPI / Go の名前混同トリアージ

## Wiki ルート

このエントリは [[security/INDEX|security domain]] の配下にある。[[security/module-path-confusion-supply-chain-attack|module path confusion + LICENSE strip supply chain attack]] における具体的な攻撃を、再利用可能でレジストリ非依存のトリアージチェックリストへと一般化したものであり、スクワットされたパッケージを発行者へ結びつける必要がある場合には、[[security/forensic-identity-anchor-chain|forensic identity anchor chain]] と証拠レイヤーを共有する。

> [!info] TL;DR
> タイポスクワッティングは、人気のあるパッケージに *似た* 名前で悪意あるパッケージを公開し、開発者のタイプミスやコピペ間違いに賭ける。これは **dependency confusion**（同一の内部名を用い、ビルド時の名前空間解決を悪用する）や **slopsquatting**（LLM が幻覚しやすい名前）とは別物である。このエントリは、疑わしい依存名を lockfile に入る前に npm、PyPI、Go 横断でトリアージするための固定チェックリストと、それを自動化する公開ツールである。

## 3 つの混同ファミリ（混同しないこと）

| ファミリ | 攻撃者の名前 vs ターゲット | 悪用するもの | 主要な防御 |
|---|---|---|---|
| Typosquatting | *似ている* が同一ではない | タイプ / コピーの誤り | 名前距離チェック + レジストリの評判 |
| Dependency confusion | 内部パッケージと *同一* | 公開レジストリを優先するビルドシステムの名前空間解決 | 名前空間の予約 / スコープ付きレジストリ / ソースのピン留め |
| Slopsquatting | *もっともらしく聞こえる* 捏造された名前 | 存在しないパッケージを LLM が幻覚すること | インストール前に、そのパッケージが実際に存在し広く使われていることを確認する |

[[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]] で文書化された module-path / `replace` ハイジャックは、その Go 風のいとこである: *モジュールパス*（単なる表示名ではなく）が上流になりすます一方、`replace` ディレクティブがフォークへ再ルーティングする。

## よくあるスクワット名の変形

攻撃者は予測可能な変異を好むため、候補名はパターンによってトリアージできる:

- **転置** — `reqeusts` → `requests`、`urlib3` → `urllib3`
- **省略 / 追加** — `boto` vs `boto3`; `colourama` → `colorama`
- **同形異字 / 置換** — `0`↔`o`、`1`↔`l`、`rn`↔`m`
- **区切り文字の混同** — ハイフン vs アンダースコア vs なし（`python-dateutil` vs `python_dateutil`）
- **権威的に聞こえる接尾辞** — `requests-utils`、`<lib>-core`、`<lib>-extended` が公式拡張を装う

## トリアージチェックリスト（疑わしい依存ごと）

- [ ] **人気のある名前への編集距離。** 名前は、同じエコシステム内のよく知られたパッケージから 1〜2 文字の編集距離内にあるか? もしそうなら、晴れるまで疑わしいものとして扱う。
- [ ] **正当なターゲットは存在し、これがそれか?** *意図した* パッケージの正確な正規名をレジストリで確認し、文字単位で比較する（区切り文字と同形異字に注意）。
- [ ] **成熟度のシグナル。** ダウンロード数、年数、リリース頻度、リポジトリのスター数、メンテナの人数。ほぼゼロの履歴しか持たない近似名はレッドフラグである。
- [ ] **ソース ↔ レジストリのリンク。** パッケージは実在する一致したソースリポジトリにリンクしているか? Go については、**モジュールパス** が実際のリポジトリ URL と一致するか、また `replace` ディレクティブはあるか?（module-path エントリを相互参照）。
- [ ] **来歴 / 署名。** パッケージは provenance attestation か署名付きで公開されているか、それとも匿名か?
- [ ] **インストール時スクリプト。** npm の `preinstall`/`postinstall`（または PyPI の `setup.py` 実行）がインストール時にコードを取得 / 実行する場合 — 高リスクであり、インストール前に検査する。
- [ ] **LICENSE が存在し整合的か。** コピーされたコードと並んで欠落または不整合なライセンスは、サプライチェーンのトリプルプレーにおける法的表面の手がかりである。
- [ ] **アドバイザリのクロスチェック。** [OSV](https://osv.dev/) / OSV-Scanner とレジストリ独自のアドバイザリで、正確な名前と既知のスクワットを照会する。

## チェックリストを自動化するツール

| ツール | カバー範囲 |
|---|---|
| OSV / OSV-Scanner | npm、PyPI、Go モジュールほかを横断する言語非依存のアドバイザリ検索 |
| レジストリネイティブの保護 | 公開時の npm typosquat ブロッキング; PyPI の自動 typosquat 検出; 名前空間予約 |
| Lockfile + provenance | 正確なバージョンのピン留めと provenance の検証がインストール時のウィンドウを縮める |

この一連の作業全体を、[OWASP](https://owasp.org/www-project-top-ten/) のソフトウェア・データ整合性失敗カテゴリのサプライチェーン版として捉え、規制対象ビルドパイプライン上の発見事項は、サードパーティ依存リスクが対象範囲に含まれる [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]] へ経路付ける。

## 使うべき場面

- 名前がよく知られたパッケージに近い、新しい推移的 / 直接依存を追加するとき。
- コピペインストールや AI 提案のパッケージ名の後に lockfile を監査するとき（slopsquatting チェック）。
- 依存の来歴とライセンスを証拠立てなければならない、ベンダー / OSS ライセンスレビュー。

## 過剰適用すべきでない場面

- 名前空間予約を備えた *プライベートでスコープ付き* のレジストリからインストールされるファーストパーティ / 内部パッケージ — 関連する脅威は dependency confusion であり、名前距離ではなくレジストリ設定で対処される。
- 強い成熟度シグナルを持つ、正確で確立されたパッケージ — ここでは名前距離のアラームは誤検知である。
- パッケージレジストリの表面を持たないクローズドソースのバイナリ — 別のサプライチェーン制御が適用される。

## 関連

- [[security/INDEX|Security domain index]]
- [[security/module-path-confusion-supply-chain-attack|Module path confusion supply chain attack]]
- [[security/forensic-identity-anchor-chain|Forensic identity anchor chain]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[exchanges/jp-vasp-security-audit-certification|JP VASP security audit certification]]

## ソース

- npm Docs — Threats and mitigations (typosquatting, install scripts) — https://docs.npmjs.com/threats-and-mitigations/
- OWASP Top Ten — software and data integrity failures framing — https://owasp.org/www-project-top-ten/
- OSV-Scanner — language-agnostic vulnerability / advisory scanning — https://google.github.io/osv-scanner/
- OSV — open source vulnerability database — https://osv.dev/
