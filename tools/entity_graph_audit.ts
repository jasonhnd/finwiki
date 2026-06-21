#!/usr/bin/env bun

import path, { posix as pathPosix } from "node:path";
import {
  buildEntry,
  CONFIDENCE_VALUES,
  DECLARED_ENTITY_EDGE_RELATIONS,
  ENTITY_EDGE_INVERSES,
  ENTITY_NODE_KINDS,
  ENTITY_NODE_SCOPES,
  ENTITY_NODE_STATUSES,
  type EntityEdgeDeclaration,
  type EntityNode,
  type Entry,
  isPublicPage,
  iterMarkdownFiles,
  normalizeEntityPath,
  readTextUtf8,
} from "../lib/markdown_helpers";

type AuditIssue = {
  path: string;
  code: string;
  detail: string;
};

const ROOT = path.resolve(import.meta.dir, "..").replaceAll("\\", "/");
const ALLOWED_RELATIONS = new Set<string>(DECLARED_ENTITY_EDGE_RELATIONS);
const ALLOWED_KINDS = new Set<string>(ENTITY_NODE_KINDS);
const ALLOWED_SCOPES = new Set<string>(ENTITY_NODE_SCOPES);
const ALLOWED_STATUSES = new Set<string>(ENTITY_NODE_STATUSES);
const ALLOWED_CONFIDENCE = new Set<string>(CONFIDENCE_VALUES);
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function hasPublicSource(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.length >= 8
  );
}

function validateNode(path: string, node: EntityNode | null): AuditIssue[] {
  if (!node) return [];
  const issues: AuditIssue[] = [];
  if (!ALLOWED_KINDS.has(node.kind)) {
    issues.push({ path, code: "invalid_entity_node_kind", detail: node.kind || "(empty)" });
  }
  if (!ALLOWED_SCOPES.has(node.scope)) {
    issues.push({ path, code: "invalid_entity_node_scope", detail: node.scope || "(empty)" });
  }
  if (!ALLOWED_STATUSES.has(node.status)) {
    issues.push({ path, code: "invalid_entity_node_status", detail: node.status || "(empty)" });
  }
  return issues;
}

function validateEdge(
  path: string,
  sourceSlug: string,
  edge: EntityEdgeDeclaration,
  targetSlugs: ReadonlySet<string>,
): AuditIssue[] {
  const issues: AuditIssue[] = [];
  const target = normalizeEntityPath(edge.target);
  if (!ALLOWED_RELATIONS.has(edge.relation)) {
    issues.push({ path, code: "invalid_relation", detail: edge.relation || "(empty)" });
  }
  if (!target) {
    issues.push({ path, code: "missing_target", detail: "(empty)" });
  } else if (!targetSlugs.has(target)) {
    issues.push({ path, code: "missing_target", detail: target });
  }
  if (target && target === sourceSlug) {
    issues.push({ path, code: "self_edge", detail: `${sourceSlug} -> ${target}` });
  }
  if (!hasPublicSource(edge.source)) {
    issues.push({ path, code: "missing_public_source", detail: edge.source || "(empty)" });
  }
  if (!edge.as_of || !ISO_DATE_RE.test(edge.as_of)) {
    issues.push({ path, code: "invalid_as_of", detail: edge.as_of || "(empty)" });
  }
  if (!ALLOWED_CONFIDENCE.has(edge.confidence)) {
    issues.push({ path, code: "invalid_confidence", detail: edge.confidence || "(empty)" });
  }
  return issues;
}

function runNegativeFixtures(): AuditIssue[] {
  const targetSlugs = new Set(["fixtures/target"]);
  const invalidRelation = validateEdge(
    "fixtures/invalid-relation.md",
    "fixtures/source",
    {
      relation: "competes_with",
      target: "fixtures/target",
      evidence: "fixture",
      source: "https://example.com/source",
      as_of: "2026-06-21",
      confidence: "likely",
    },
    targetSlugs,
  );
  const missingTarget = validateEdge(
    "fixtures/missing-target.md",
    "fixtures/source",
    {
      relation: "subsidiary_of",
      target: "fixtures/does-not-exist",
      evidence: "fixture",
      source: "https://example.com/source",
      as_of: "2026-06-21",
      confidence: "likely",
    },
    targetSlugs,
  );
  const selfTestIssues: AuditIssue[] = [];
  if (!invalidRelation.some((issue) => issue.code === "invalid_relation")) {
    selfTestIssues.push({
      path: "fixtures/invalid-relation.md",
      code: "negative_fixture_failed",
      detail: "invalid relation fixture did not fail",
    });
  }
  if (!missingTarget.some((issue) => issue.code === "missing_target")) {
    selfTestIssues.push({
      path: "fixtures/missing-target.md",
      code: "negative_fixture_failed",
      detail: "missing target fixture did not fail",
    });
  }
  return selfTestIssues;
}

async function loadEntries(rootDir: string): Promise<Entry[]> {
  const markdownFiles = await iterMarkdownFiles(rootDir);
  const entries: Entry[] = [];
  for (const filePath of markdownFiles) {
    const relPath = pathPosix.relative(rootDir, filePath);
    if (!isPublicPage(relPath)) continue;
    const text = await readTextUtf8(filePath);
    entries.push(await buildEntry(rootDir, relPath, text));
  }
  return entries;
}

async function main(): Promise<number> {
  const entries = await loadEntries(ROOT);
  const targetSlugs = new Set(entries.map((entry) => normalizeEntityPath(entry.source_path)));
  const issues: AuditIssue[] = [];
  let nodeCount = 0;
  let declaredEdgeCount = 0;
  let derivedEdgeCount = 0;

  for (const entry of entries) {
    const sourceSlug = normalizeEntityPath(entry.source_path);
    if (entry.entity_node) nodeCount += 1;
    issues.push(...validateNode(entry.source_path, entry.entity_node));
    for (const edge of entry.entity_edges) {
      declaredEdgeCount += 1;
      if (ENTITY_EDGE_INVERSES[edge.relation] && targetSlugs.has(normalizeEntityPath(edge.target))) {
        derivedEdgeCount += 1;
      }
      issues.push(...validateEdge(entry.source_path, sourceSlug, edge, targetSlugs));
    }
  }

  issues.push(...runNegativeFixtures());

  console.log(`entity_nodes=${nodeCount}`);
  console.log(`entity_edges_declared=${declaredEdgeCount}`);
  console.log(`entity_edges_derived=${derivedEdgeCount}`);
  console.log("negative_fixture_invalid_relation=PASS");
  console.log("negative_fixture_missing_target=PASS");
  console.log(`entity_graph_issues=${issues.length}`);

  if (issues.length > 0) {
    for (const issue of issues.slice(0, 80)) {
      console.error(`${issue.path}: ${issue.code}: ${issue.detail}`);
    }
    if (issues.length > 80) {
      console.error(`... ${issues.length - 80} more issue(s) omitted`);
    }
    return 1;
  }
  return 0;
}

process.exitCode = await main();
