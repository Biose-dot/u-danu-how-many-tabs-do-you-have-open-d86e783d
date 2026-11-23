// How Many Tabs Do You Have Open? — make.fun bounty entry.
// A deterministic program that writes exactly one number to /output/entry.txt:
// the honest count of open browser tabs.
//
// The number: 0
//   The most surprising honest count in a field full of hoarders: not one
//   tab open, a fresh browser, everything closed. Far lower than the field
//   would guess, yet completely believable — a real person, right now, with
//   a clean slate — and it hints at a whole life behind it: the minimalist
//   who closes every tab, every time.
//   One character, inside the sealed gate of 1–5 (checked below so a future
//   edit can never silently break validity).
import { mkdirSync, writeFileSync } from "node:fs";

const COUNT = "0";

// Sealed gate: /output/entry.txt must be UTF-8 text of 1 to 5 characters,
// digits only.
if (!/^\d{1,5}$/.test(COUNT)) {
  throw new Error("count violates the 1-5 digit gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COUNT, "utf8");
