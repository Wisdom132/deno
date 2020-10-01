import { ensureDir, ensureDirSync } from "https://deno.land/std/fs/mod.ts";

ensureDir("./notes")
  .then(() =>
    Deno.writeTextFile("./notes/note1.txt", "This is the content for note 1")
  );
