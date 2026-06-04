---
source: security/proxy-upgrade-rug-pattern
source_hash: efb549811e484feb
lang: ja
model: claude-opus-4-8
status: machine
fidelity: ok
title: "プロキシ・アップグレード可能コントラクトの rug パターン — admin のアップグレード権限がバックドアになる"
translated_at: 2026-06-05T00:00:00.000Z
---

# プロキシ・アップグレード可能コントラクトの rug パターン — admin のアップグレード権限がバックドアになる

## Wiki ルート

このエントリは [[security/INDEX|security domain]] の配下にある。依存するオンチェーン検証の仕組みについては [[security/bytecode-forensic-three-tier-verify|bytecode forensic three-tier verify]] と併せて読み、アップグレード可能プロキシが現在デフォルトのデプロイ形態となっている、より広いスマートアカウントの文脈については [[systems/erc-4337-overview|ERC-4337 overview]] と併せて読むとよい。

> [!info] TL;DR
> アップグレード可能プロキシは、コントラクトを薄い **proxy**（状態 + ストレージを保持）と差し替え可能な **implementation**（ロジックを保持）に分割する。アップグレードキーを握る者は、いつでもプロキシを *新しい* ロジック（資金を吸い上げる、停止する、ブラックリスト化するロジックを含む）へ再指定できる。ユーザーが読む「検証済み・監査済み」ソースは *現在の* implementation にすぎず、rug は **次の** implementation である。このエントリは、アップグレード権限を常在するバックドアとして捉え、入金前にそのリスクを見積もるための公開・再現可能な手順を提供する。

## メカニズム: アップグレードキーはどこにあるか

プロキシはすべての呼び出し（`delegatecall`）を、固定のストレージスロットに格納された implementation アドレスへ委譲する。[ERC-1967](https://eips.ethereum.org/EIPS/eip-1967) はそれらのスロットを標準化し、ツールが決定論的に見つけられるようにしている:

| スロットの用途 | ストレージスロット (ERC-1967) | 導出 |
|---|---|---|
| Implementation | `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` | `keccak256('eip1967.proxy.implementation') - 1` |
| Admin | `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103` | `keccak256('eip1967.proxy.admin') - 1` |
| Beacon | `0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50` | `keccak256('eip1967.proxy.beacon') - 1` |

`- 1` のトリックにより、既知の keccak256 原像を持たないスロットが得られるため、アプリケーションのストレージが誤ってそれと衝突することはない。**admin スロットが rug の表面である**: それを読めば、誰がロジックを差し替えられるかが正確に分かる。

## 2 つのプロキシ形態、2 つの制御位置

| パターン | アップグレードロジックの所在 | Admin / アップグレード実行者 | フォレンジック上の注記 |
|---|---|---|---|
| Transparent proxy | **proxy** 自体 | ERC-1967 admin スロット | admin の呼び出しはアップグレードロジックへルーティングされ、非 admin の呼び出しは implementation へ通り抜ける |
| UUPS ([ERC-1822](https://eips.ethereum.org/EIPS/eip-1822)) | **implementation** | implementation 内の `onlyOwner` 系修飾子で守られた関数（多くは `upgradeTo`） | より軽量・安価だが、そのガードは *それ自身がアップグレードで取り除かれ得るコードの中にある* — proxy だけでなく、現在の implementation の認可を読むこと |
| Beacon proxy | 共有の **beacon** コントラクト | beacon owner | 単一の beacon アップグレードが *多数の* プロキシを一度に再指定できる — 影響範囲はファミリ全体 |

OpenZeppelin の `UUPSUpgradeable` は、UUPS 非準拠の implementation へのアップグレードを拒否するガードを追加する（アップグレード可能性が壊れるのを防ぐため）が、そのガードは許可されたアップグレード実行者が *何を* インストールするかを制約しない。認可こそが唯一の実質的な制御であり、その認可は可変である。

## rug のシーケンス

1. 良性で監査済みの implementation `V1` をデプロイする。ブロックエクスプローラ上、そして（理想的には）[Sourcify](https://docs.sourcify.dev/docs/full-vs-partial-match/) 上で検証を受ける。ユーザーはクリーンなソースを読む。
2. アップグレードキーが EOA または 1-of-1「マルチシグ」に置かれたまま、入金 / TVL を積み上げる。
3. 選んだ時点で、アップグレードキーが withdraw-all、mint、pause、または残高書き換えの経路を含む `V2` をインストールする。
4. それを実行し、事後検証を撹乱するために任意で `V1` へ再指定して戻す。

ステップ 1 と 4 こそが、ある時点でのソース読み取りでは不十分な理由である — 悪意あるコードは *現在表示されている* implementation には決してならないかもしれない。これは、エクスプローラについて [[security/etherscan-verified-source-poisoning|Etherscan verified-source poisoning]] で扱った「表示されている成果物が拘束力のある成果物ではない」という同じ失敗モードである。

## 公開リスク見積もりチェックリスト

公開 RPC ノードとブロックエクスプローラで再現可能。プライベートデータは不要。

- [ ] ERC-1967 admin スロットを読む（`eth_getStorageAt(proxy, <admin slot>)`）。アップグレード実行者は EOA か、単一キーのウォレットか、本物のマルチシグか?
- [ ] UUPS の場合、現在の implementation を取得し、`upgradeTo`/`_authorizeUpgrade` のガードを検査する — 誰がそれを通過するか?
- [ ] アップグレードのスケジューリングと実行の間に **timelock** はあるか? timelock なし = 即時 rug 能力。
- [ ] アップグレード権限は放棄されているか、既知のガバナンスプロセスの背後に保持されているか? ポリシーが裁量的な admin キーに委ねられるのではなく呼び出し経路に組み込まれている [[systems/hook-enforced-compliance|hook-enforced compliance]] と比較せよ。
- [ ] implementation アドレスはデプロイ以降に *既に* 変更されているか? ブロックエクスプローラと ERC-1967 の `Upgraded(address)` イベントは過去のすべての implementation を記録している — それらを列挙せよ。
- [ ] beacon proxy については、beacon owner と、いくつのプロキシがそれを共有しているか（影響範囲）を特定せよ。

## これが最も重要となる場面

- 単一のアップグレード可能プロキシの背後にプールされた資金を保持するブリッジ、vault、ステーキングコントラクト。
- 監査が `V1` を対象としていたが、アップグレードキーが未監査の EOA である「監査済み」プロトコル。
- エージェント呼び出し可能・アカウント抽象化コントラクト: [[systems/erc-4337-overview|ERC-4337]] 配下のスマートアカウントや [[systems/erc-7702-overview|ERC-7702]] 配下の委譲された EOA はしばしばアップグレード可能であるため、支出許可を付与する前に、同じ admin キー分析が [[agent-economy/erc-7715-agent-payment-stack|ERC-7715 agent payment stack]] にも適用される。

## これを過度に重視すべきでない場面

- アップグレードスロットを持たない、真にイミュータブルな（非プロキシの）コントラクト — アップグレード rug の表面は存在しない（他のリスクは残る）。
- 長い timelock *と* 信頼できるマルチシグの背後にゲートされたアップグレード — リスクは実質的に低い（ユーザーは遅延の間に退避できる）。
- [[systems/canton-overview|Canton]] のような、コントラクトの進化が EVM のプロキシスロットではなくテンプレート・ガバナンスの経路に従う、権限制御された / 非 EVM の設定 — 代わりにガバナンス経路を分析せよ。

## 関連

- [[security/INDEX|Security domain index]]
- [[security/bytecode-forensic-three-tier-verify|Bytecode forensic three-tier verify]]
- [[security/etherscan-verified-source-poisoning|Etherscan verified-source poisoning]]
- [[security/fork-and-rebrand-5-layer-audit-framework|Fork-and-Rebrand five-layer audit framework]]
- [[systems/erc-4337-overview|ERC-4337 overview]]
- [[systems/erc-7702-overview|ERC-7702 overview]]

## ソース

- ERC-1967: Proxy Storage Slots — standardized implementation/admin/beacon slots — https://eips.ethereum.org/EIPS/eip-1967
- ERC-1822: Universal Upgradeable Proxy Standard (UUPS) — upgrade logic in the implementation — https://eips.ethereum.org/EIPS/eip-1822
- OpenZeppelin Contracts — Proxy API (Transparent, UUPS, Beacon) — https://docs.openzeppelin.com/contracts/4.x/api/proxy
- ethereum.org — Upgrading smart contracts (proxy patterns overview) — https://ethereum.org/en/developers/docs/smart-contracts/upgrading/
