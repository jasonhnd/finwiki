// YAML parses unquoted `last_updated: 2026-05-20` into a JS Date, so naive
// String(value).slice(0,10) yields "Wed May 20" (no year) and breaks both
// display and chronological sorting. Normalize everything to ISO YYYY-MM-DD.
export function isoDate(value: unknown): string {
  if (!value) return '';
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  const s = String(value);
  const m = s.match(/\d{4}-\d{2}-\d{2}/);
  if (m) return m[0];
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? '' : d.toISOString().slice(0, 10);
}
