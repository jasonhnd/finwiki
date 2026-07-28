import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  buildEntryDiscoveryGraph,
  entryDiscoveryForRoute,
  entryDiscoverySignature,
} from "../site/src/lib/entryDiscovery.mjs";

type EntryOptions = {
  title?: string;
  tags?: string[];
  related?: string[];
  body?: string;
};

function entry(route: string, options: EntryOptions = {}) {
  const [domain, ...slugParts] = route.split("/");
  return {
    id: `${route}.md`,
    body: options.body ?? "",
    data: {
      domain,
      slug: slugParts.join("/"),
      title: options.title ?? route,
      tags: options.tags ?? [],
      related: options.related ?? [],
    },
  };
}

function cloneEntries(entries: ReturnType<typeof entry>[]) {
  return structuredClone(entries);
}

function previewForRoute(lang: string, route: string) {
  return {
    title: `${lang}:${route}`,
    lead: `Lead for ${route}`,
    domain: route.split("/")[0],
    route,
  };
}

describe("entry discovery build graph", () => {
  test("reuses an identical graph and invalidates every behavior-affecting middle record field", () => {
    const baseline = [
      entry("cache/a", { title: "A" }),
      entry("cache/middle", { title: "Middle", tags: ["one"], related: ["cache/a"], body: "Body" }),
      entry("cache/z", { title: "Z" }),
    ];

    const firstGraph = buildEntryDiscoveryGraph(baseline);
    const repeatedGraph = buildEntryDiscoveryGraph(cloneEntries(baseline));
    expect(repeatedGraph).toBe(firstGraph);

    const mutations = [
      (entries: ReturnType<typeof entry>[]) => {
        entries[1].id = "cache/middle-v2.md";
        entries[1].data.slug = "middle-v2";
      },
      (entries: ReturnType<typeof entry>[]) => {
        entries[1].data.title = "Middle overview";
      },
      (entries: ReturnType<typeof entry>[]) => {
        entries[1].data.tags = ["two"];
      },
      (entries: ReturnType<typeof entry>[]) => {
        entries[1].data.related = ["cache/z"];
      },
      (entries: ReturnType<typeof entry>[]) => {
        entries[1].body = "Body with [[cache/z]]";
      },
    ];

    for (const mutate of mutations) {
      const changed = cloneEntries(baseline);
      mutate(changed);
      expect(entryDiscoverySignature(changed)).not.toBe(entryDiscoverySignature(baseline));
      expect(buildEntryDiscoveryGraph(changed)).not.toBe(firstGraph);
    }
  });

  test("a middle tag change rebuilds the graph and changes the affected route lanes", () => {
    const baseline = [
      entry("cache/a", { tags: ["shared"] }),
      entry("cache/middle"),
      entry("cache/z"),
    ];
    const changed = cloneEntries(baseline);
    changed[1].data.tags = ["shared"];

    const baselineGraph = buildEntryDiscoveryGraph(baseline);
    const changedGraph = buildEntryDiscoveryGraph(changed);

    expect(baselineGraph.byRoute.get("cache/a")?.related).not.toContain("cache/middle");
    expect(changedGraph.byRoute.get("cache/a")?.related).toContain("cache/middle");
  });

  test("preserves explicit, backlink, shared-tag, read-next, and sibling priority", () => {
    const entries = [
      entry("alpha/current", {
        tags: ["shared", "current"],
        related: ["other/explicit"],
      }),
      entry("alpha/backlink", { tags: ["shared"] }),
      entry("alpha/next-a"),
      entry("alpha/next-b"),
      entry("alpha/next-c"),
      entry("alpha/sibling-overview"),
      entry("other/explicit"),
      entry("other/shared-matrix", { tags: ["shared"] }),
    ];

    const graph = buildEntryDiscoveryGraph(entries, {
      cache: false,
      backlinksForRoute: (route: string) => route === "alpha/current" ? ["alpha/backlink"] : [],
    });
    const routes = graph.byRoute.get("alpha/current");

    expect(routes).toEqual({
      related: ["other/explicit", "other/shared-matrix", "alpha/sibling-overview"],
      next: ["alpha/next-a", "alpha/next-b", "alpha/next-c"],
      backlinks: ["alpha/backlink"],
    });

    const localized = entryDiscoveryForRoute({
      lang: "en",
      route: "alpha/current",
      graph,
      previewForRoute,
    });
    expect(localized.lanes.map((lane: { id: string }) => lane.id)).toEqual([
      "related",
      "next",
      "backlinks",
    ]);
    expect(localized.lanes[0].items.map((item: { route: string }) => item.route)).toEqual(routes?.related);
    expect(localized.lanes[1].items.map((item: { route: string }) => item.route)).toEqual(routes?.next);
    expect(localized.lanes[2].items.map((item: { route: string }) => item.route)).toEqual(routes?.backlinks);
  });

  test("EntryLayout renders supplied lanes without loading the collection", () => {
    const repoRoot = path.resolve(import.meta.dir, "..");
    const layout = readFileSync(path.join(repoRoot, "site/src/layouts/EntryLayout.astro"), "utf8");
    const page = readFileSync(path.join(repoRoot, "site/src/pages/[lang]/[...slug].astro"), "utf8");

    expect(layout).not.toContain("getCollection");
    expect(layout).not.toContain("buildEntryDiscovery");
    expect(page).toContain("buildEntryDiscoveryGraph(entries)");
    expect(page).toContain("discovery={discovery}");
  });
});
