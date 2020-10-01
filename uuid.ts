import { v4 } from "https://deno.land/std/uuid/mod.ts";

const generatedID = v4.generate();
const dun = "djdjjdjdjj";

const isValid = v4.validate(dun);

console.log(isValid);
