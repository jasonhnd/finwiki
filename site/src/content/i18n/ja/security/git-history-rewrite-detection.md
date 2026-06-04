---
source: security/git-history-rewrite-detection
source_hash: 1976c318ed86639c
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "Git 履歴改竄の検出 — スカッシュおよび force-push された状態の復元"
translated_at: 2026-06-05T00:00:00.000Z
---

# Git 履歴改竄の検出 — スカッシュおよび force-push された状態の復元

## Wiki ルート

このエントリは [[security/INDEX|security domain]] の配下にある。これは [[security/wayback-machine-as-forensic-tool|Wayback Machine as a forensic tool]]（公開停止された *web* コンテンツを復元する）のソースコード版に相当し、書き換えが消去しようとしたコミッターのメールアドレスやタイムスタンプを復元することで、[[security/forensic-identity-anchor-chain|forensic identity anchor chain]] における people レイヤーの作業を支える。

> [!info] TL;DR
> force-push や squash はブランチポインタを *書き換える* が、Git は古いコミットを即座には削除しない。それらはガベージコレクションまで到達不能（"dangling"）オブジェクトとして残存し、書き換え前に取得されたクローン・フォーク・CI のチェックアウトはいずれもそれらを保持し続ける。GitHub では、Events API が書き換え前のコミット SHA を独立して記録している。したがって「あれは片付けた」という主張は復元可能である。dangling オブジェクトを列挙し、reflog を再生し、PushEvent 履歴を読めばよい。書き換えそのものが、誰かが以前の状態を消したかったというシグナルである。

## 書き換えられた履歴が復元可能な理由

| メカニズム | 何を保存するか | 公開コマンド / エンドポイント |
|---|---|---|
| Dangling オブジェクト | 書き換え後に参照されなくなったコミットは `gc` までオブジェクト DB に残る | `git fsck --lost-found` / `git fsck --unreachable` |
| Reflog | `HEAD`/ブランチがどこを指していたかのローカルログ、デフォルトで約 90 日保持 | `git reflog`（および `git reflog show <branch>`） |
| 書き換え前のクローン/フォーク/CI | push 前に取得されたコピーは古いグラフを完全に保持 | そのコピーの `git log --all` を検査 |
| GitHub Events API | `PushEvent` が push されたコミットの SHA を記録、後の書き換えとは独立 | `GET /repos/{owner}/{repo}/events` |

force-push はリモートのブランチポインタを新しい履歴へ移動させる。押し出されたコミットは孤児になるが、次の GC サイクルまで残存する。ローカルでは `git reflog` が以前の正確なコミットハッシュを記憶し続け、`git fsck` が到達不能オブジェクトを列挙する。リモートでは、[GitHub Events API](https://docs.github.com/en/rest/activity/events) が直近の `PushEvent` を before/after の SHA 付きで返す。これは事実上、あなたが制御できないリモート版 reflog である。

## 検出手順（公開・再現可能）

1. **force-push の痕跡を探す。** 非線形なタイムスタンプ、コミット数の突然の減少、または既知のより長い履歴を置き換える単一のスカッシュされた "Initial commit" は手がかりになる。コミットメッセージに残った "for `<upstream-project>`" という文字列は、[[security/module-path-confusion-supply-chain-attack|module path confusion supply chain attack]] で指摘されている種類の自己告発である。
2. **dangling オブジェクトを列挙する。** 手元のクローンで `git fsck --lost-found` を実行し、`dangling commit <sha>` のエントリを `git show <sha>` で検査する。
3. **reflog を再生する。** `git reflog` / `git reflog show <branch>` は、保持期間内であれば「上書き」後でも以前の先端を明らかにする。
4. **リモートのイベントログを照会する。** `GET /repos/{owner}/{repo}/events` で `PushEvent` のペイロードを読み、書き換え前の SHA を取得して、現在のブランチが示す内容と照合する。（`PushEvent` の形については [GitHub event types](https://docs.github.com/en/rest/using-the-rest-api/github-event-types) を参照。）
5. **復元結果と現在を diff する。** 削除されたあらゆるファイル（LICENSE、以前の README、削除された契約、漏洩した設定）を証拠として扱う。その *削除* とそのタイムスタンプこそが発見事項である。
6. **保全する。** 復元したオブジェクトを帯域外のストアにスナップショットする。公開者は後でリモートを GC したり再度書き換えたりできる。

## Wayback の相棒

| レイヤー | ツール | 復元対象 |
|---|---|---|
| 公開された web ページ / ドキュメント / PDF | [[security/wayback-machine-as-forensic-tool|Wayback Machine]] | 公開停止されたサイトコンテンツと以前の声明 |
| ソースリポジトリの状態 | このエントリ（`git fsck` / reflog / Events API） | スカッシュ/force-push されたコミット、削除されたファイル、コミッターのメタデータ |

両方を実行せよ。web レイヤーは *主張* を復元し、git レイヤーはその背後にある *コードと著作者* を復元する。

## 使うべき場面

- プロジェクトのリポジトリが疑わしいほど短いまたはスカッシュされた履歴を示す一方で、マーケティングが長い開発を匂わせている場合。
- LICENSE、監査報告書、または機微な契約が「そもそも無かった」とされているが、以前のクローン/フォークがそうでないことを示唆する場合。
- 書き換えによって消去されたコミッターのメール / 著者名を復元し、[[security/forensic-identity-anchor-chain|identity anchor chain]] のクロスチェックに供する場合。

## 使うべきでない場面

- 書き換え前のコピーが存在せず、*かつ* リモートが既に GC 済みで、*かつ* reflog の保持ウィンドウが期限切れの場合 — 復元は不可能かもしれない（過大主張せず、ギャップとして記録する）。
- 正当で開示済みの履歴書き換え（例: 誤ってコミットされたシークレットの除去） — 書き換えはシグナルであって悪意の証明ではない。帰属させる前に裏付けを取る。
- 非 Git VCS または完全にクローズドソースのプロジェクト — 別の証拠ルートを用いる。

## 関連

- [[security/INDEX|Security domain index]]
- [[security/wayback-machine-as-forensic-tool|Wayback Machine as a forensic tool]]
- [[security/forensic-identity-anchor-chain|Forensic identity anchor chain]]
- [[security/module-path-confusion-supply-chain-attack|Module path confusion supply chain attack]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]

## ソース

- git-scm — git-fsck (unreachable / dangling object enumeration) — https://git-scm.com/docs/git-fsck
- git-scm — git-reflog (local history of branch tips, retention window) — https://git-scm.com/docs/git-reflog
- GitHub Docs — REST API endpoints for events (PushEvent before/after SHAs) — https://docs.github.com/en/rest/activity/events
- GitHub Docs — GitHub event types (PushEvent payload) — https://docs.github.com/en/rest/using-the-rest-api/github-event-types
