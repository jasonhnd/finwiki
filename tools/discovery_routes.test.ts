import { afterAll, describe, expect, test } from "bun:test";
import { spawnSync } from "node:child_process";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  alternateHtmlUrlsFor,
  lastModifiedFor,
  localizedHtmlUrlFor,
  publishedMarkdownUrlFor,
  publicUrlFor,
  rawGithubUrlFor,
} from "../lib/markdown_helpers";
import {
  AI_DISCOVERY_TARGET_FILES,
  compareAiDiscoveryOutputs,
} from "./compare_ai_discovery_outputs";
import { absoluteHttpLinks } from "./generate_ai_discovery";
import {
  assembledRouteCandidates,
  auditGeneratedRoutes,
} from "./txt_route_audit";

const temporaryRoots: string[] = [];

afterAll(async () => {
  await Promise.all(
    temporaryRoots.splice(0).map((root) =>
      rm(root, { recursive: true, force: true }),
    ),
  );
});

async function write(root: string, relativePath: string, content = "ok\n"): Promise<void> {
  const filePath = path.join(root, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf8");
}

async function routeFixture(): Promise<string> {
  const root = await mkdtemp(path.join(os.tmpdir(), "finwiki-routes-"));
  temporaryRoots.push(root);

  await write(root, "_site/index.html");
  await write(root, "_site/ja/foo/index.html");
  await write(root, "_site/en/foo/index.html");
  await write(root, "_site/INDEX.md");
  await write(root, "_site/api/entries/foo.json", "{}\n");

  await write(
    root,
    "_site/llms.txt",
    "Canonical: https://finwiki.zksc.io/ja/foo/\n[Index](INDEX.md?from=llms#top)\n",
  );
  await write(
    root,
    "_site/llms-full.txt",
    "Alternate: `https://finwiki.zksc.io/en/foo/`\n",
  );
  await write(root, "_site/llms-tasks.txt", "[Foo](/ja/foo/)\n");
  await write(
    root,
    "_site/sitemap.xml",
    [
      '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml">',
      "<url>",
      "<loc>https://finwiki.zksc.io/ja/foo/</loc>",
      '<xhtml:link rel="alternate" hreflang="en" href="https://finwiki.zksc.io/en/foo/" />',
      "</url>",
      "</urlset>",
      "",
    ].join("\n"),
  );
  await write(
    root,
    "_site/ai-index.json",
    JSON.stringify({
      site: "https://finwiki.zksc.io",
      navigation: { global_index: "https://finwiki.zksc.io/INDEX.md" },
      entries: [
        {
          url: "https://finwiki.zksc.io/ja/foo/",
          html_url: "https://finwiki.zksc.io/ja/foo/",
          alternate_html_urls: { en: "https://finwiki.zksc.io/en/foo/" },
          raw_markdown_url:
            "https://raw.githubusercontent.com/jasonhnd/finwiki/main/foo.md",
        },
      ],
    }),
  );
  await write(
    root,
    "_site/api/entries/index.json",
    JSON.stringify({
      entries: [
        {
          api_url: "https://finwiki.zksc.io/api/entries/foo.json",
          html_url: "https://finwiki.zksc.io/ja/foo/",
        },
      ],
    }),
  );
  await write(
    root,
    "_site/api/entries/foo.json",
    JSON.stringify({
      url: "https://finwiki.zksc.io/ja/foo/",
      alternate_html_urls: { en: "https://finwiki.zksc.io/en/foo/" },
      body_links: {
        external_links: [
          "https://example.com/source",
          "https://finwiki.zksc.io/INDEX.md",
        ],
      },
    }),
  );
  return root;
}

describe("discovery URL semantics", () => {
  test("maps rendered entries to localized HTML and keeps raw Markdown explicit", () => {
    expect(publicUrlFor("banking/example.md")).toBe(
      "https://finwiki.zksc.io/ja/banking/example/",
    );
    expect(localizedHtmlUrlFor("banking/example.md", "en")).toBe(
      "https://finwiki.zksc.io/en/banking/example/",
    );
    expect(alternateHtmlUrlsFor("banking/example.md")).toEqual({
      ja: "https://finwiki.zksc.io/ja/banking/example/",
      en: "https://finwiki.zksc.io/en/banking/example/",
    });
    expect(publicUrlFor("banking/INDEX.md")).toBe(
      "https://github.com/jasonhnd/finwiki/blob/main/banking/INDEX.md",
    );
    expect(
      publicUrlFor("banking/INDEX.md", new Set(["banking"])),
    ).toBe("https://finwiki.zksc.io/banking/INDEX.md");
    expect(
      publishedMarkdownUrlFor("README.md"),
    ).toBe("https://finwiki.zksc.io/README.md");
    expect(
      publishedMarkdownUrlFor("frontmatter-canonical-anchor-field-proposal.md"),
    ).toBeNull();
    expect(publicUrlFor("AGENTS.md")).toBe(
      "https://github.com/jasonhnd/finwiki/blob/main/AGENTS.md",
    );
    expect(rawGithubUrlFor("banking/example.md")).toBe(
      "https://raw.githubusercontent.com/jasonhnd/finwiki/main/banking/example.md",
    );
  });

  test("resolves URL paths to final assembled files", () => {
    expect(
      assembledRouteCandidates("https://finwiki.zksc.io/ja/banking/example/"),
    ).toEqual(["ja/banking/example/index.html"]);
    expect(
      assembledRouteCandidates("https://finwiki.zksc.io/banking/example.md"),
    ).toEqual(["banking/example.md", "banking/example.md/index.html"]);
  });

  test("audits text, sitemap, index, and API URLs against the assembled tree", async () => {
    const root = await routeFixture();
    const valid = auditGeneratedRoutes({ rootDir: root, outDir: "_site" });
    expect(valid.findings).toEqual([]);
    expect(valid.checkedUrls).toBe(5);

    await write(
      root,
      "_site/sitemap.xml",
      "<urlset><url><loc>https://finwiki.zksc.io/ja/missing/</loc></url></urlset>\n",
    );
    const broken = auditGeneratedRoutes({ rootDir: root, outDir: "_site" });
    expect(broken.findings.map((finding) => finding.url)).toContain(
      "https://finwiki.zksc.io/ja/missing/",
    );
  });

  test("does not accept source-file existence as deployed-route evidence", async () => {
    const root = await routeFixture();
    await write(root, "banking/source-only.md");
    await write(root, "_site/banking/source-only.md");
    await write(
      root,
      "_site/sitemap.xml",
      "<urlset><url><loc>https://finwiki.zksc.io/banking/source-only</loc></url></urlset>\n",
    );

    const result = auditGeneratedRoutes({ rootDir: root, outDir: "_site" });
    expect(result.findings.map((finding) => finding.url)).toContain(
      "https://finwiki.zksc.io/banking/source-only",
    );
  });

  test("audits same-site API external links and ignores external origins", async () => {
    const root = await routeFixture();
    await write(
      root,
      "_site/api/entries/foo.json",
      JSON.stringify({
        body_links: {
          external_links: [
            "https://example.com/missing",
            "https://finwiki.zksc.io/ja/missing/",
            "http://finwiki.zksc.io/INDEX.md",
          ],
        },
      }),
    );

    const result = auditGeneratedRoutes({ rootDir: root, outDir: "_site" });
    expect(result.findings.map((finding) => finding.url)).toEqual([
      "http://finwiki.zksc.io/INDEX.md",
      "https://finwiki.zksc.io/ja/missing/",
    ]);
    expect(
      result.findings.find(
        (finding) => finding.url === "http://finwiki.zksc.io/INDEX.md",
      )?.reason,
    ).toContain("wrong site origin");
  });

  test("does not accept a route with different path casing", async () => {
    const root = await routeFixture();
    await write(root, "_site/Case-Sensitive.md");
    await write(
      root,
      "_site/sitemap.xml",
      "<urlset><url><loc>https://finwiki.zksc.io/case-sensitive.md</loc></url></urlset>\n",
    );

    const result = auditGeneratedRoutes({ rootDir: root, outDir: "_site" });
    expect(result.findings.map((finding) => finding.url)).toContain(
      "https://finwiki.zksc.io/case-sensitive.md",
    );
  });

  test("keeps only absolute HTTP links in the API external-link field", () => {
    expect(
      absoluteHttpLinks([
        "../relative.md",
        "mailto:research@example.com",
        "https://example.com/source",
        "http://finwiki.zksc.io/legacy",
      ]),
    ).toEqual([
      "https://example.com/source",
      "http://finwiki.zksc.io/legacy",
    ]);
  });

  test("uses committed discovery dates in a shallow checkout", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "finwiki-shallow-"));
    temporaryRoots.push(root);
    const source = path.join(root, "source");
    const clone = path.join(root, "clone");
    const inheritedGitContext = {
      ...process.env,
      GIT_DIR: path.join(root, "inherited.git"),
      GIT_WORK_TREE: path.join(root, "inherited-worktree"),
      GIT_INDEX_FILE: path.join(root, "inherited.index"),
    };
    const isolatedGitEnvironment = (date?: string): NodeJS.ProcessEnv => {
      const env = { ...inheritedGitContext };
      for (const variable of [
        "GIT_DIR",
        "GIT_WORK_TREE",
        "GIT_INDEX_FILE",
        "GIT_OBJECT_DIRECTORY",
        "GIT_ALTERNATE_OBJECT_DIRECTORIES",
        "GIT_QUARANTINE_PATH",
        "GIT_PREFIX",
      ]) {
        delete env[variable];
      }
      if (date) {
        env.GIT_AUTHOR_DATE = `${date}T12:00:00+09:00`;
        env.GIT_COMMITTER_DATE = `${date}T12:00:00+09:00`;
      }
      return env;
    };
    await mkdir(source, { recursive: true });
    await write(source, "entry.md", "# Entry\n");

    const runGit = (
      args: string[],
      cwd: string,
      date?: string,
    ): void => {
      const result = spawnSync("git", args, {
        cwd,
        encoding: "utf8",
        env: isolatedGitEnvironment(date),
      });
      if (result.status !== 0) {
        throw new Error(result.stderr || result.stdout);
      }
    };

    runGit(["init", "--initial-branch=main"], source);
    runGit(["config", "user.name", "FinWiki Test"], source);
    runGit(["config", "user.email", "finwiki-test@example.com"], source);
    runGit(["add", "entry.md"], source);
    runGit(["commit", "-m", "add entry"], source, "2024-01-02");
    await write(source, "marker.txt", "second commit\n");
    runGit(["add", "marker.txt"], source);
    runGit(["commit", "-m", "advance head"], source, "2025-03-04");
    runGit(
      ["clone", "--depth=1", pathToFileURL(source).href, clone],
      root,
    );
    const shallowCheck = spawnSync(
      "git",
      ["rev-parse", "--is-shallow-repository"],
      {
        cwd: clone,
        encoding: "utf8",
        env: isolatedGitEnvironment(),
      },
    );
    expect(shallowCheck.stdout.trim()).toBe("true");
    expect(
      await lastModifiedFor(
        path.join(clone, "entry.md"),
        "2024-01-02",
      ),
    ).toBe("2024-01-02");
  });

  test("canonical GitHub workflows fetch complete history", async () => {
    const repositoryRoot = path.resolve(import.meta.dir, "..");
    for (const workflow of [
      ".github/workflows/required-verification.yml",
      ".github/workflows/deploy.yml",
    ]) {
      const text = await readFile(path.join(repositoryRoot, workflow), "utf8");
      expect(text).toMatch(
        /uses:\s*actions\/checkout@v6[\s\S]{0,120}fetch-depth:\s*0/,
      );
    }
  });

  test("importing the discovery generator does not write outputs", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "finwiki-import-"));
    temporaryRoots.push(root);
    const generatorUrl = pathToFileURL(
      path.resolve(import.meta.dir, "generate_ai_discovery.ts"),
    ).href;
    const result = spawnSync(
      process.execPath,
      ["-e", `await import(${JSON.stringify(generatorUrl)})`],
      { cwd: root, encoding: "utf8" },
    );
    expect(result.status).toBe(0);
    expect(result.stdout).toBe("");
    expect(await readdir(root)).toEqual([]);
  });

  test("exact comparison includes per-entry last_modified fields", async () => {
    const expected = await mkdtemp(path.join(os.tmpdir(), "finwiki-expected-"));
    const actual = await mkdtemp(path.join(os.tmpdir(), "finwiki-actual-"));
    temporaryRoots.push(expected, actual);

    for (const relativePath of AI_DISCOVERY_TARGET_FILES) {
      const content = relativePath.endsWith(".json") ? "{}\n" : "same\n";
      await write(expected, relativePath, content);
      await write(actual, relativePath, content);
    }
    await write(
      expected,
      "api/entries/foo.json",
      JSON.stringify({ metrics: { last_modified: "2026-07-26" } }),
    );
    await write(
      actual,
      "api/entries/foo.json",
      JSON.stringify({ metrics: { last_modified: "2026-07-27" } }),
    );

    await expect(compareAiDiscoveryOutputs(expected, actual)).rejects.toThrow(
      "Mismatch: foo.json",
    );
  });

  test("exact comparison rejects missing per-entry API files", async () => {
    const expected = await mkdtemp(path.join(os.tmpdir(), "finwiki-expected-"));
    const actual = await mkdtemp(path.join(os.tmpdir(), "finwiki-actual-"));
    temporaryRoots.push(expected, actual);

    for (const relativePath of AI_DISCOVERY_TARGET_FILES) {
      const content = relativePath.endsWith(".json") ? "{}\n" : "same\n";
      await write(expected, relativePath, content);
      await write(actual, relativePath, content);
    }
    await write(expected, "api/entries/only-expected.json", "{}\n");

    await expect(compareAiDiscoveryOutputs(expected, actual)).rejects.toThrow(
      "api/entries JSON file set mismatch",
    );
  });
});
