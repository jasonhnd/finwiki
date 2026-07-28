#!/usr/bin/env bun
import process from "node:process";
import { runVerification } from "./verify";

runVerification({ outDir: "_vercel_public" }).catch((error) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
});
