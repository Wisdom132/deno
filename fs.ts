// const file = await Deno.open("file.txt");
// const decoder = new TextDecoder("utf-8");
// const text = decoder.decode(await Deno.readAll(file));

// console.log(text);

// const file_path = "file.txt";
// const data = "This is the new content in my filex,So dont say it";
// await Deno.writeTextFile(file_path, data);

// // Read the file to see if it truly wrties.
// console.log(await Deno.readTextFile(file_path))

import { copy } from "https://deno.land/std/fs/mod.ts";
copy("file.txt", "test.txt", {
  overwrite: true,
});
