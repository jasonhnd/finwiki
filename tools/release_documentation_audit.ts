#!/usr/bin/env bun

import { readdirSync, readFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

export const RELEASE_NOTE_CONTRACT_START = "2026-07-27";
export const LANGUAGE_SECTIONS = ["日本語", "English"] as const;

const RELEASE_SUBSECTIONS = {
  日本語: ["公開範囲", "主要変更", "検証結果", "既知の注意点", "次の作業"],
  English: ["Release Scope", "Major Changes", "Validation Results", "Known Notes", "Next Steps"],
} as const;

export interface MarkdownHeading {
  level: number;
  title: string;
  line: number;
}

export interface DocumentationAuditIssue {
  file: string;
  line: number;
  message: string;
}

export interface DocumentationAuditResult {
  ok: boolean;
  issues: DocumentationAuditIssue[];
  filesChecked: number;
  releaseNotesChecked: number;
  grandfatheredReleaseNotes: number;
}

export interface DocumentationAuditOptions {
  releaseContractStart?: string;
}

export function scaffoldReleaseNote(title: string): string {
  return `# ${title}

## 日本語

### 公開範囲

- <公開範囲を記入。>

### 主要変更

- <主要変更を記入。>

### 検証結果

- <検証結果を記入。>

### 既知の注意点

- <既知の注意点を記入。>

### 次の作業

- <次の作業を記入。>

## English

### Release Scope

- <Describe the release scope.>

### Major Changes

- <Describe the major changes.>

### Validation Results

- <Record validation results.>

### Known Notes

- <Record known notes.>

### Next Steps

- <Record next steps.>
`;
}

function headingList(headings: MarkdownHeading[]): string {
  return headings.length > 0 ? headings.map((heading) => heading.title).join(" -> ") : "<none>";
}

function exactSequenceIssue(
  file: string,
  line: number,
  context: string,
  headings: MarkdownHeading[],
  expected: readonly string[],
): DocumentationAuditIssue[] {
  const actual = headings.map((heading) => heading.title);
  if (actual.length === expected.length && actual.every((title, index) => title === expected[index])) {
    return [];
  }
  return [{
    file,
    line,
    message: `${context} must be exactly ${expected.join(" -> ")}; found ${headingList(headings)}`,
  }];
}

export function extractMarkdownHeadings(text: string): MarkdownHeading[] {
  const headings: MarkdownHeading[] = [];
  let fence: { marker: "`" | "~"; length: number } | null = null;

  for (const [index, line] of text.replace(/\r\n?/g, "\n").split("\n").entries()) {
    const fenceMatch = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (fenceMatch) {
      const run = fenceMatch[1];
      const marker = run[0] as "`" | "~";
      if (fence === null) {
        fence = { marker, length: run.length };
      } else if (marker === fence.marker && run.length >= fence.length && fenceMatch[2].trim() === "") {
        fence = null;
      }
      continue;
    }
    if (fence !== null) continue;

    const headingMatch = line.match(/^ {0,3}(#{1,6})[ \t]+(.+?)[ \t]*$/);
    if (!headingMatch) continue;
    const title = headingMatch[2].replace(/[ \t]+#+[ \t]*$/, "").trim();
    headings.push({ level: headingMatch[1].length, title, line: index + 1 });
  }

  return headings;
}

export function auditReadmeText(text: string, file = "README.md"): DocumentationAuditIssue[] {
  const h2 = extractMarkdownHeadings(text).filter((heading) => heading.level === 2);
  return exactSequenceIssue(file, h2[0]?.line ?? 1, "README top-level language sections", h2, LANGUAGE_SECTIONS);
}

function headingsWithin(
  headings: MarkdownHeading[],
  parent: MarkdownHeading,
  nextParent: MarkdownHeading | undefined,
  level: number,
): MarkdownHeading[] {
  const endLine = nextParent?.line ?? Number.POSITIVE_INFINITY;
  return headings.filter((heading) => heading.level === level && heading.line > parent.line && heading.line < endLine);
}

export function auditChangelogText(text: string, file = "CHANGELOG.md"): DocumentationAuditIssue[] {
  const headings = extractMarkdownHeadings(text);
  const h2 = headings.filter((heading) => heading.level === 2);
  const issues: DocumentationAuditIssue[] = [];
  const maintenance = h2.filter((heading) => heading.title === "Maintenance Principles");

  if (maintenance.length !== 1) {
    issues.push({
      file,
      line: maintenance[0]?.line ?? 1,
      message: `CHANGELOG must contain exactly one "## Maintenance Principles" section; found ${maintenance.length}`,
    });
  }

  const targets = h2.filter((heading) =>
    heading.title === "Maintenance Principles" || /^\d{4}-\d{2}-\d{2}(?:\s|$)/.test(heading.title)
  );
  for (const target of targets) {
    const targetIndex = h2.indexOf(target);
    const h3 = headingsWithin(headings, target, h2[targetIndex + 1], 3);
    issues.push(...exactSequenceIssue(
      file,
      target.line,
      `CHANGELOG section "## ${target.title}" language sections`,
      h3,
      LANGUAGE_SECTIONS,
    ));
  }

  return issues;
}

export function releaseDateFromFilename(file: string): string | null {
  const match = basename(file).match(/^v(\d{4})\.(\d{2})\.(\d{2})(?:-\d+)?\.md$/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : null;
}

export function isJapaneseOnlyTitle(value: string): boolean {
  return (
    /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(value) &&
    !/\p{Script=Latin}/u.test(value)
  );
}

function auditRequiredSubsections(
  file: string,
  language: keyof typeof RELEASE_SUBSECTIONS,
  headings: MarkdownHeading[],
  sectionLine: number,
): DocumentationAuditIssue[] {
  const issues: DocumentationAuditIssue[] = [];
  const required = RELEASE_SUBSECTIONS[language];
  const positions: number[] = [];

  for (const title of required) {
    const matches = headings
      .map((heading, index) => ({ heading, index }))
      .filter(({ heading }) => heading.title === title);
    if (matches.length === 0) {
      issues.push({
        file,
        line: sectionLine,
        message: `release section "## ${language}" is missing required subsection "### ${title}"`,
      });
      continue;
    }
    if (matches.length > 1) {
      issues.push({
        file,
        line: matches[1].heading.line,
        message: `release section "## ${language}" contains duplicate subsection "### ${title}"`,
      });
    }
    positions.push(matches[0].index);
  }

  if (
    positions.length === required.length &&
    positions.some((position, index) => index > 0 && position <= positions[index - 1])
  ) {
    issues.push({
      file,
      line: sectionLine,
      message: `release section "## ${language}" required subsections must be ordered ${required.join(" -> ")}`,
    });
  }

  return issues;
}

export function auditReleaseNoteText(
  text: string,
  file: string,
  releaseContractStart = RELEASE_NOTE_CONTRACT_START,
): DocumentationAuditIssue[] {
  const releaseDate = releaseDateFromFilename(file);
  if (releaseDate === null || releaseDate < releaseContractStart) return [];

  const headings = extractMarkdownHeadings(text);
  const h1 = headings.filter((heading) => heading.level === 1);
  const h2 = headings.filter((heading) => heading.level === 2);
  const issues: DocumentationAuditIssue[] = [];

  if (h1.length !== 1) {
    issues.push({
      file,
      line: h1[0]?.line ?? 1,
      message: `release note must contain exactly one H1 title; found ${h1.length}`,
    });
  } else if (!isJapaneseOnlyTitle(h1[0].title)) {
    issues.push({
      file,
      line: h1[0].line,
      message: "release note H1 title must be Japanese-only (Japanese script is required and Latin script is not allowed)",
    });
  }

  issues.push(...exactSequenceIssue(
    file,
    h2[0]?.line ?? 1,
    "release note language sections",
    h2,
    LANGUAGE_SECTIONS,
  ));

  for (const language of LANGUAGE_SECTIONS) {
    const section = h2.find((heading) => heading.title === language);
    if (!section) continue;
    const sectionIndex = h2.indexOf(section);
    const h3 = headingsWithin(headings, section, h2[sectionIndex + 1], 3);
    issues.push(...auditRequiredSubsections(file, language, h3, section.line));
  }

  return issues;
}

export function auditReleaseDocumentation(
  rootDir: string,
  options: DocumentationAuditOptions = {},
): DocumentationAuditResult {
  const root = resolve(rootDir);
  const releaseContractStart = options.releaseContractStart ?? RELEASE_NOTE_CONTRACT_START;
  const issues: DocumentationAuditIssue[] = [];
  let filesChecked = 0;
  let releaseNotesChecked = 0;
  let grandfatheredReleaseNotes = 0;

  const readRequired = (relativePath: string): string | null => {
    try {
      const text = readFileSync(join(root, relativePath), "utf8");
      filesChecked += 1;
      return text;
    } catch (error) {
      issues.push({
        file: relativePath,
        line: 1,
        message: `unable to read required file: ${error instanceof Error ? error.message : String(error)}`,
      });
      return null;
    }
  };

  const readme = readRequired("README.md");
  if (readme !== null) issues.push(...auditReadmeText(readme));

  const changelog = readRequired("CHANGELOG.md");
  if (changelog !== null) issues.push(...auditChangelogText(changelog));

  const releasesDir = join(root, "releases");
  let releaseFiles: string[] = [];
  try {
    releaseFiles = readdirSync(releasesDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name)
      .sort();
  } catch (error) {
    issues.push({
      file: "releases",
      line: 1,
      message: `unable to read releases directory: ${error instanceof Error ? error.message : String(error)}`,
    });
  }

  for (const name of releaseFiles) {
    const date = releaseDateFromFilename(name);
    if (date === null) continue;
    if (date < releaseContractStart) {
      grandfatheredReleaseNotes += 1;
      continue;
    }
    const relativePath = `releases/${name}`;
    const text = readRequired(relativePath);
    if (text === null) continue;
    releaseNotesChecked += 1;
    issues.push(...auditReleaseNoteText(text, relativePath, releaseContractStart));
  }

  return {
    ok: issues.length === 0,
    issues,
    filesChecked,
    releaseNotesChecked,
    grandfatheredReleaseNotes,
  };
}

export function formatDocumentationAuditIssue(issue: DocumentationAuditIssue): string {
  return `${issue.file}:${issue.line}: ${issue.message}`;
}

export function runReleaseDocumentationAuditCli(argv = process.argv.slice(2)): number {
  let rootDir = resolve(import.meta.dir, "..");
  for (const arg of argv) {
    if (arg.startsWith("--root=")) {
      rootDir = resolve(arg.slice("--root=".length));
    } else {
      throw new Error(`unknown arg: ${arg}`);
    }
  }

  const result = auditReleaseDocumentation(rootDir);
  console.log(
    `release_documentation_audit files_checked=${result.filesChecked} ` +
      `release_notes_checked=${result.releaseNotesChecked} ` +
      `grandfathered_release_notes=${result.grandfatheredReleaseNotes} ` +
      `problems=${result.issues.length}`,
  );
  for (const issue of result.issues) console.error(formatDocumentationAuditIssue(issue));
  return result.ok ? 0 : 1;
}

if (import.meta.main) {
  try {
    process.exitCode = runReleaseDocumentationAuditCli();
  } catch (error) {
    console.error(error instanceof Error ? error.stack : error);
    process.exitCode = 2;
  }
}
