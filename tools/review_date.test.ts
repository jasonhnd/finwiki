import { describe, expect, test } from "bun:test";
import {
  isReviewOverdue,
  todayInJst,
} from "../site/src/lib/reviewDate";

describe("entry review dates", () => {
  test("derives today from JST instead of the host time zone", () => {
    expect(todayInJst(new Date("2026-07-27T14:59:59.999Z"))).toBe(
      "2026-07-27",
    );
    expect(todayInJst(new Date("2026-07-27T15:00:00.000Z"))).toBe(
      "2026-07-28",
    );
  });

  test("marks only dates before today as overdue", () => {
    const today = "2026-07-28";

    expect(isReviewOverdue("2026-07-27", today)).toBe(true);
    expect(isReviewOverdue(today, today)).toBe(false);
    expect(isReviewOverdue("2026-07-29", today)).toBe(false);
  });

  test("does not mark missing or invalid review dates as overdue", () => {
    expect(isReviewOverdue(null, "2026-07-28")).toBe(false);
    expect(isReviewOverdue(undefined, "2026-07-28")).toBe(false);
    expect(isReviewOverdue("", "2026-07-28")).toBe(false);
    expect(isReviewOverdue("not-a-date", "2026-07-28")).toBe(false);
  });

  test("rejects a non-ISO comparison date", () => {
    expect(() => isReviewOverdue("2026-07-27", "July 28, 2026")).toThrow(
      "today must be an ISO date",
    );
  });
});
