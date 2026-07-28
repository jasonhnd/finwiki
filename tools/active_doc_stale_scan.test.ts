import { afterEach, describe, expect, test } from "bun:test";
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { scanActiveDocs } from "./active_doc_stale_scan";

const tempRoots: string[] = [];

function createFixture(
  docText: string,
  options: {
    indexText?: string;
    packageLicense?: string;
  } = {},
): string {
  const root = mkdtempSync(path.join(tmpdir(), "finwiki-active-doc-scan-"));
  tempRoots.push(root);
  mkdirSync(path.join(root, "docs", "01-strategy"), { recursive: true });
  writeFileSync(path.join(root, "docs", "01-strategy", "current.md"), docText);
  writeFileSync(
    path.join(root, "INDEX.md"),
    options.indexText ?? "# Index\n\nCurrent metrics come from generated surfaces.\n",
  );
  writeFileSync(
    path.join(root, "ai-index.json"),
    JSON.stringify({
      counts: {
        link_audited_entries: 1489,
        markdown_files: 1578,
        topical_domains: 40,
      },
    }),
  );
  writeFileSync(
    path.join(root, "package.json"),
    JSON.stringify({ license: options.packageLicense ?? "Apache-2.0" }, null, 2),
  );
  writeFileSync(
    path.join(root, "LICENSE"),
    "Apache License\nVersion 2.0, January 2004\n",
  );
  return root;
}

afterEach(() => {
  for (const root of tempRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

describe("active documentation stale scan", () => {
  test("accepts generated current metrics and durable issue routing", () => {
    const root = createFixture(`
# Current control

Live issue state comes from the GitHub issue tracker.

| Topical domains | 40 | ai-index.json |
| Link-audited public wiki entries | 1,489 | ai-index.json |
| Markdown files counted by release tooling | 1,578 | ai-index.json |
`);

    expect(scanActiveDocs(root).findings).toEqual([]);
  });

  test("rejects copied issue state, stale metrics, obsolete mtime guidance, and license drift", () => {
    const root = createFixture(
      `
# Stale control

Current open: #22.

| 🔴 next | #24 | copied queue |
| Topical domains | 23 | handwritten |
| Link-audited public wiki entries | 1,485 | handwritten |
| Markdown files counted by release tooling | 1,566 | handwritten |

The repository has 23 domains.
After a fresh clone, restore filesystem mtimes before release.
`,
      { packageLicense: "ISC" },
    );

    expect(
      new Set(scanActiveDocs(root).findings.map((finding) => finding.patternId)),
    ).toEqual(
      new Set([
        "active-queue-row",
        "domain-count-23",
        "handwritten-current-issue-state",
        "link-audited-entry-count",
        "markdown-file-count",
        "repository-license",
        "restore-mtime-guidance",
        "topical-domain-count",
      ]),
    );
  });

  test("keeps archived evidence and negative guidance outside the active failure set", () => {
    const root = createFixture(
      "Do not restore mtimes after a fresh clone; preserve full Git history instead.\n",
    );
    mkdirSync(path.join(root, "docs", "99-archive"), { recursive: true });
    writeFileSync(
      path.join(root, "docs", "99-archive", "old-plan.md"),
      "Current open: #22. The old site/src/content/entries mirror had 23 domains.\n",
    );

    expect(scanActiveDocs(root).findings).toEqual([]);
  });
});
