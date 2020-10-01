// await Deno.writeTextFile("./file.txt", "This is the content to be written");
Deno.writeTextFileSync("./file.txt", "This is the content to besync written");

// const encoder = new TextEncoder(); // to convert a string to Uint8Array
// // await Deno.writeFile("./file.txt", encoder.encode("Content to be written"));

// const file = await Deno.open("./image.png", { write: true, create: true }); //this opens the file
// /* ... */
// await Deno.writeAll(file, imageBytes); //writes to file
// file.close(); // closes the file
