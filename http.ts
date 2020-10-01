// import { serve } from "https://deno.land/std/http/server.ts";
// const s = serve({ port: 8000 });
// for await (const req of s) {
//   req.respond({ body: "Hi,I'm Wisdom Ekpot" });
// }

import { Application } from "https://deno.land/x/abc@v1.1.0/mod.ts";
const app = new Application();
const PORT = 8000;
let homepage = () => {
  return "This is the home page";
};

let contactPage = () => {
  return "You can contact Wisdom Ekpot with this contact Page";
};

app
  .get("/", homepage)
  .get("/contact", contactPage)
  .start({ port: PORT });

console.log(`🔤 Abc server running at http://localhost:${PORT}`);
