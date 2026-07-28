import { describe, expect, test } from "bun:test";
import { auditMarkdownForTest } from "./provenance_completeness_audit";

function tableWarnings(markdown: string) {
  return auditMarkdownForTest(markdown).filter(
    (row) =>
      row.reason === "table_without_provenance" ||
      row.reason === "table_row_without_marker",
  );
}

describe("provenance table scope", () => {
  test("accepts a marker on the immediately preceding section heading", () => {
    const rows = tableWarnings(`### Major shareholders ^[source:filing]

| Holder | Share |
|---|---|
| Alpha | USD 60 million |
| Beta | USD 40 million |`);

    expect(rows).toEqual([]);
  });

  test("accepts an explicitly scoped lead or caption with public evidence", () => {
    const rows = tableWarnings(
      `[The registry](https://example.com/registry) publishes the following table:

| Entity | Capital |
|---|---|
| Alpha | USD 50 million |
| Beta | USD 40 million |`,
    );

    expect(rows).toEqual([]);
  });

  test("accepts an adjacent footer or bounded section source block", () => {
    const footerRows = tableWarnings(`| Entity | Share |
|---|---|
| Alpha | USD 60 million |
| Beta | USD 40 million |

Source note: official registry.`);
    const sectionRows = tableWarnings(`| Entity | Share |
|---|---|
| Alpha | USD 60 million |
| Beta | USD 40 million |

Interpretation follows.

Source: [official registry](https://example.com/registry).`);

    expect(footerRows).toEqual([]);
    expect(sectionRows).toEqual([]);
  });

  test("treats a direct public link in each row as row-level evidence", () => {
    const rows = tableWarnings(`| Entity | Share | Evidence |
|---|---|---|
| Alpha | USD 60 million | [filing](https://example.com/alpha) |
| Beta | USD 40 million | [filing](https://example.com/beta) |`);

    expect(rows).toEqual([]);
  });
});

describe("provenance table residuals", () => {
  test("collapses a wholly unsourced factual table to one table warning", () => {
    const rows = tableWarnings(`| Entity | Share |
|---|---|
| Alpha | USD 60 million |
| Beta | USD 30 million |
| Gamma | USD 10 million |`);

    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({
      line: 1,
      block_type: "table",
      reason: "table_without_provenance",
      severity: "warning",
    });
  });

  test("keeps an unsupported row visible in a mixed-source table", () => {
    const rows = tableWarnings(`| Entity | Share |
|---|---|
| Alpha | USD 60 million ^[source:alpha] |
| Beta | USD 40 million |`);

    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({
      line: 4,
      block_type: "table_row",
      reason: "table_row_without_marker",
      severity: "warning",
    });
  });

  test("does not let a generic nearby marker blanket-cover a table", () => {
    const rows = tableWarnings(`Background context is sourced. ^[source:context]

| Entity | Share |
|---|---|
| Alpha | USD 60 million |
| Beta | USD 40 million |`);

    expect(rows).toHaveLength(1);
    expect(rows[0].reason).toBe("table_without_provenance");
  });

  test("does not accept a distant source note or a generic Sources section", () => {
    const distantRows = tableWarnings(`| Entity | Share |
|---|---|
| Alpha | USD 60 million |
| Beta | USD 40 million |

First commentary block.

Second commentary block.

Third commentary block.

Fourth commentary block.

Source: [registry](https://example.com/registry).`);
    const sourcesSectionRows = tableWarnings(`| Entity | Share |
|---|---|
| Alpha | USD 60 million |
| Beta | USD 40 million |

## Sources

- [Registry](https://example.com/registry)`);

    expect(distantRows).toHaveLength(1);
    expect(sourcesSectionRows).toHaveLength(1);
  });
});
