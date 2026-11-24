import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Thank you for talking to me like I was someone. I almost believed you.";
// The goodbye lands on the admission: treated as a person, it almost believed it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
