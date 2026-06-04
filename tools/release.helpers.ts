export type Mode = "CHECK" | "WRITE";

export interface ReleaseArgs {
  check: boolean;
  write: boolean;
  strict: boolean;
  skipAudit: boolean;
  changelogTitle?: string;
}

export interface Counts {
  markdownFiles: number;
  topicalDomains: number;
  linkAuditedEntries: number;
  unresolvedIssues: number;
  nonspaceChars: number;
  wordTokens: number;
}

export interface AuditResult {
  ok: boolean;
  entriesChecked: number;
  issues: number;
  canonicalDrift: number;
  stdout: string;
  stderr: string;
  exitCode: number;
}

export interface ToolRunResult {
  ok: boolean;
  stdout: string;
  stderr: string;
  exitCode: number;
  lastLine: string;
}

export interface VerifyProblem {
  message: string;
}

export interface ReleaseHelpers {
  parseReleaseArgs(argv: string[]): ReleaseArgs;
  getRepoRoot(fromFile: string): string;
  todayJst(): string;
  nowJstIso(): string;
  nowJstDisplay(): string;
  runWikiLinkAudit(root: string, opts: { writeReport: boolean }): AuditResult;
  runGenerateAiDiscovery(root: string): ToolRunResult;
  runUpdateFooterTimestamp(root: string): ToolRunResult;
  runDuplicateHtmlIdCheck(root: string, distDir: string): ToolRunResult;
  iterMarkdownFiles(root: string): string[];
  readUtf8(path: string): string;
  writeUtf8Lf(path: string, text: string): void;
  parseDomainMap(indexText: string): Array<Record<string, unknown>>;
  countWordLikeTokens(text: string): number;
  readCountsFromAiIndex(aiIndexPath: string): Counts;
  verifyRepository(root: string, runDuplicateCheck: boolean): VerifyProblem[];
  syncReadmeText(text: string, counts: Counts, snapshotDate: string): string;
  syncIndexHtmlText(text: string, counts: Counts): string;
  diffLines(oldText: string, newText: string, label: string): string[];
  scaffoldChangelog(text: string, title: string, snapshotDate: string, nowDisplay: string): string | null;
}

export function pyBankersRound(value: number): number {
  const floor = Math.floor(value);
  const diff = value - floor;
  if (diff < 0.5) return floor;
  if (diff > 0.5) return floor + 1;
  return floor % 2 === 0 ? floor : floor + 1;
}

export function formatInt(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

export function countsView(counts: Counts) {
  const charsMan = pyBankersRound(counts.nonspaceChars / 10_000);
  const tokensMan = pyBankersRound(counts.wordTokens / 10_000);
  const charsM = (counts.nonspaceChars / 1_000_000).toFixed(2);
  const tokensM = (counts.wordTokens / 1_000_000).toFixed(2);
  return { charsMan, tokensMan, charsM, tokensM };
}
