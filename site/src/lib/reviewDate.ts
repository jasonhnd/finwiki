const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const jstDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function todayInJst(now = new Date()): string {
  const parts = new Map(
    jstDateFormatter
      .formatToParts(now)
      .map((part) => [part.type, part.value]),
  );
  return `${parts.get("year")}-${parts.get("month")}-${parts.get("day")}`;
}

export function isReviewOverdue(
  reviewBy: string | null | undefined,
  today = todayInJst(),
): boolean {
  if (!reviewBy || !ISO_DATE.test(reviewBy)) return false;
  if (!ISO_DATE.test(today)) {
    throw new Error(`today must be an ISO date: ${today}`);
  }
  return reviewBy < today;
}
