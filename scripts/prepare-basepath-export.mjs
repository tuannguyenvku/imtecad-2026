import { cp, mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "out";
const basePath = "imtecad-2026";
const baseDir = join(outDir, basePath);

await mkdir(baseDir, { recursive: true });
await copyFile(join(outDir, "index.html"), join(baseDir, "index.html"));
await cp(join(outDir, "_next"), join(baseDir, "_next"), { recursive: true });
await cp(join(outDir, "assets"), join(baseDir, "assets"), { recursive: true });
