import { exists, existsSync } from "https://deno.land/std/fs/mod.ts";

// exists("./notes").then((res) => console.log(res));
let fileExists = existsSync("./notes"); // returns boolean
console.log(fileExists);
