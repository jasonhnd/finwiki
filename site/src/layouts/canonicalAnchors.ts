import { entryDomain, entryRoute } from '../lib/routes';

export type AnchorRelation = 'canonical' | 'mirror';

export type AnchorMember = {
  route: string;
  domain: string;
  relation: AnchorRelation;
};

export type AnchorCluster = {
  anchor: string;
  members: AnchorMember[];
};

type EntryLike = {
  id: string;
  data?: Record<string, unknown>;
};

export function normalizeAnchor(value: unknown): string {
  return String(value ?? '')
    .replace(/\\/g, '/')
    .replace(/\.md$/i, '')
    .replace(/^\/+|\/+$/g, '')
    .trim();
}

export function declaredAnchor(entry: EntryLike): string {
  return normalizeAnchor(entry.data?.canonical_anchor);
}

export function buildCanonicalClusters(entries: EntryLike[]): AnchorCluster[] {
  const byRoute = new Map<string, EntryLike>();
  for (const entry of entries) {
    byRoute.set(entryRoute(entry), entry);
  }

  const declarersByAnchor = new Map<string, EntryLike[]>();
  for (const entry of entries) {
    const anchor = declaredAnchor(entry);
    if (!anchor) continue;
    const list = declarersByAnchor.get(anchor) ?? [];
    list.push(entry);
    declarersByAnchor.set(anchor, list);
  }

  const clusters: AnchorCluster[] = [];
  for (const anchor of [...declarersByAnchor.keys()].sort()) {
    const declarers = declarersByAnchor.get(anchor) ?? [];
    const members = new Map<string, AnchorMember>();
    const canonicalEntry = byRoute.get(anchor);
    if (canonicalEntry) {
      members.set(anchor, {
        route: anchor,
        domain: entryDomain(canonicalEntry),
        relation: 'canonical',
      });
    }

    let mirrorCount = 0;
    for (const declarer of declarers) {
      const route = entryRoute(declarer);
      const selfPointing = route === anchor;
      if (!selfPointing) mirrorCount += 1;
      members.set(route, {
        route,
        domain: entryDomain(declarer),
        relation: selfPointing ? 'canonical' : 'mirror',
      });
    }

    if (mirrorCount === 0) continue;
    clusters.push({
      anchor,
      members: [...members.values()].sort((left, right) => {
        if (left.relation !== right.relation) return left.relation === 'canonical' ? -1 : 1;
        return left.route.localeCompare(right.route, 'en');
      }),
    });
  }

  return clusters;
}

export function clusterForRoute(clusters: AnchorCluster[], route: string): AnchorCluster | null {
  const key = normalizeAnchor(route);
  return clusters.find((cluster) => cluster.anchor === key || cluster.members.some((member) => member.route === key)) ?? null;
}

export function clustersInDomain(clusters: AnchorCluster[], domain: string): AnchorCluster[] {
  return clusters.filter(
    (cluster) => cluster.anchor.startsWith(`${domain}/`) || cluster.members.some((member) => member.domain === domain),
  );
}
