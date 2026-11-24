// One-Star Review From the Cat
//
// Writes a single funny one-star review, written in the voice of a house
// cat about its human, to /output/entry.txt.
//
// Why this line: the complaint is specific and recognisable (a cat flap
// installed, then locked the first time it is used at 3 a.m.), the voice
// is unmistakably feline (the human's schedule is judged by cat standards),
// and the last few words carry the sting ("The 3 a.m. was mine"), while
// the whole thing keeps the deadpan shape of a real one-star review.
//
// The line is 128 characters: one line, well under the 200-character cap.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. He installed a cat flap, then locked it the first time I used it at 3 a.m. The flap was his idea. The 3 a.m. was mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
