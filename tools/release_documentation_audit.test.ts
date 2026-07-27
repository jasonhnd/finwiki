import { describe, expect, test } from "bun:test";
import {
  auditChangelogText,
  auditReadmeText,
  auditReleaseNoteText,
  scaffoldReleaseNote,
} from "./release_documentation_audit";

const VALID_README = `# FinWiki

## 日本語

日本語。

## English

English.

## 中文

中文。
`;

const VALID_CHANGELOG = `# CHANGELOG

## Maintenance Principles

### 日本語

- 原則。

### English

- Principles.

### 中文

- 原则。

## 2026-07-27 - 三言語文書契約

### 日本語

- 記録。

### English

- Record.

### 中文

- 记录。
`;

const VALID_RELEASE = `# 三言語リリース文書契約

## 日本語

### 公開範囲

- 範囲。

### 主要変更

- 変更。

### 検証結果

- 検証。

### 既知の注意点

- なし。

### 次の作業

- 次。

## English

### Release Scope

- Scope.

### Major Changes

- Changes.

### Validation Results

- Validation.

### Known Notes

- None.

### Next Steps

- Next.

## 中文

### 发布范围

- 范围。

### 主要变更

- 变更。

### 验证结果

- 验证。

### 已知注意事项

- 无。

### 下一步

- 下一步。
`;

describe("release documentation audit", () => {
  test("accepts the complete trilingual contract", () => {
    expect(auditReadmeText(VALID_README)).toEqual([]);
    expect(auditChangelogText(VALID_CHANGELOG)).toEqual([]);
    expect(auditReleaseNoteText(VALID_RELEASE, "releases/v2026.07.27.md")).toEqual([]);
  });

  test("generates a release draft that satisfies the contract", () => {
    const draft = scaffoldReleaseNote("三言語リリース文書契約");
    expect(auditReleaseNoteText(draft, "releases/v2026.07.27-1.md")).toEqual([]);
  });

  test("rejects a missing README language section", () => {
    const issues = auditReadmeText(VALID_README.replace(/\n## 中文[\s\S]*$/, ""));
    expect(issues).toHaveLength(1);
    expect(issues[0].message).toContain("日本語 -> English -> 中文");
  });

  test("rejects reordered README language sections", () => {
    const reordered = VALID_README
      .replace("## English", "## TEMP")
      .replace("## 中文", "## English")
      .replace("## TEMP", "## 中文");
    expect(auditReadmeText(reordered)).not.toEqual([]);
  });

  test("rejects missing and reordered CHANGELOG language sections", () => {
    const missing = VALID_CHANGELOG.replace(/\n### 中文\n\n- 原则。\n/, "\n");
    expect(auditChangelogText(missing).some((issue) => issue.message.includes("Maintenance Principles"))).toBe(true);

    const reordered = VALID_CHANGELOG.replace(
      "### 日本語\n\n- 記録。\n\n### English\n\n- Record.",
      "### English\n\n- Record.\n\n### 日本語\n\n- 記録。",
    );
    expect(auditChangelogText(reordered).some((issue) => issue.message.includes("2026-07-27"))).toBe(true);
  });

  test("rejects reordered release language sections", () => {
    const reordered = VALID_RELEASE
      .replace("## English", "## TEMP")
      .replace("## 中文", "## English")
      .replace("## TEMP", "## 中文");
    expect(auditReleaseNoteText(reordered, "releases/v2026.07.27-1.md")).not.toEqual([]);
  });

  test("rejects a release title without Japanese script", () => {
    const issues = auditReleaseNoteText(
      VALID_RELEASE.replace("# 三言語リリース文書契約", "# Automated release documentation contract"),
      "releases/v2026.07.27-2.md",
    );
    expect(issues.some((issue) => issue.message.includes("Japanese-only"))).toBe(true);
  });

  test("rejects a mixed Japanese and Latin-script release title", () => {
    const issues = auditReleaseNoteText(
      VALID_RELEASE.replace("# 三言語リリース文書契約", "# 三言語 release 文書契約"),
      "releases/v2026.07.27-3.md",
    );
    expect(issues.some((issue) => issue.message.includes("Latin script is not allowed"))).toBe(true);
  });

  test("rejects a missing required release subsection", () => {
    const issues = auditReleaseNoteText(
      VALID_RELEASE.replace("### Known Notes\n\n- None.\n\n", ""),
      "releases/v2026.07.27-4.md",
    );
    expect(issues.some((issue) => issue.message.includes('missing required subsection "### Known Notes"'))).toBe(true);
  });

  test("grandfathers historical release notes", () => {
    expect(auditReleaseNoteText("# English-only historical note\n", "releases/v2026.07.26.md")).toEqual([]);
  });
});
