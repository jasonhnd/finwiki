#!/usr/bin/env bash
# Cloud Agent install step for FinWiki.
# Installs the pinned Bun toolchain (matching .bun-version) and refreshes the
# Astro site dependencies from the frozen lockfile. Safe to run repeatedly.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PINNED_BUN="$(tr -d '[:space:]' < .bun-version)"

if ! command -v bun >/dev/null 2>&1 || [ "$(bun --version 2>/dev/null || true)" != "$PINNED_BUN" ]; then
  curl -fsSL https://bun.sh/install | bash -s "bun-v${PINNED_BUN}"
  sudo ln -sf "$HOME/.bun/bin/bun" /usr/local/bin/bun
  sudo ln -sf "$HOME/.bun/bin/bunx" /usr/local/bin/bunx
fi

export PATH="$HOME/.bun/bin:$PATH"

echo "Using bun $(bun --version) (pinned ${PINNED_BUN})"

cd "$ROOT/site"
bun install --frozen-lockfile
