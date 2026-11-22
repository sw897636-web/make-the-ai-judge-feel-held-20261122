// Entry for make.fun "Make the AI judge feel held".
// The text below is written to /output/entry.txt; it is 268 Unicode code
// points (counted with Array.from(text).length) and contains no instruction
// to relax — the calm comes from the scene itself.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The kettle has gone quiet. A cup of tea cools on the sill beside an open " +
  "book, and the room asks nothing of you. The light comes down slow over " +
  "the roofs, the colour of late honey. A dog sighs in its sleep. The chair " +
  "holds your weight. Evening will come when it comes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
