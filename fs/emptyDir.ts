import { emptyDir } from "https://deno.land/std/fs/mod.ts";

emptyDir("./notes").then((res) => console.log("res", res)); // returns a promise
