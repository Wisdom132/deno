import { createHash } from "https://deno.land/std/hash/mod.ts";
const hash = createHash("md5");
hash.update("All You need to know about deno");
const final = hash.digest();

console.log(final);
