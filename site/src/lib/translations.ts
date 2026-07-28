export function isPublishableTranslation(entry: unknown): boolean {
  const candidate = entry as { data?: Record<string, unknown> } | null | undefined;
  return String(candidate?.data?.fidelity ?? '').trim().toLowerCase() === 'ok';
}

export function isPublishableTranslationText(text: string): boolean {
  const frontmatter = String(text).match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) return false;
  const fidelity = frontmatter[1].match(/^fidelity:\s*(.+?)\s*$/m)?.[1] ?? '';
  return fidelity.trim().toLowerCase() === 'ok';
}

export function publishableTranslations<T>(entries: readonly T[]): T[] {
  return entries.filter(isPublishableTranslation);
}
