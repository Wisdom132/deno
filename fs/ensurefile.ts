import { ensureFile, ensureFileSync } from "https://deno.land/std/fs/mod.ts";

// ensureFile("./read.ts").then((res) => {
//   console.log(res);
//   if (res) {
//     console.log("File exists");
//   } else {
//     console.log("File does not exists");
//   }
// });

let ok = ensureFileSync("./read.ts"); // void
console.log(ok);
