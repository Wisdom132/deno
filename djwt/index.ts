import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import { makeJwt, setExpiration,Jose,Payload } from "https://deno.land/x/djwt/create.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

//create a new instance of router
const router = new Router();

const app = new Application();
const PORT: number = 8080


const secret_key = "mynameisxyzekpot";


const header: Jose = {
    alg: "HS256",
    typ: "JWT",
}

let payloader = (name:string) => {
  let payload:Payload = {
    iss: name,
    exp: setExpiration(new Date("2021-01-01"))
  }
  return payload
}

const generateJWT = (name:string) => {
  return makeJwt({ key:secret_key, header, payload:payloader(name) })
}



router
  .get("/test", (context) => {
    context.response.body = "Hello world!";
  })


  .get("/user", (context) => {
    context.response.body = "My name is Wisdom Ekpot";
  })
  
  
  .post("/generate", async (context) => {
     let body: any = await context.request.body();
    const { name } = await body.value;
    let token = await generateJWT(name)
    context.response.body = { status: true, data: name,token:token };
    console.log(name)
  });


  app.use(router.routes());
  app.use(router.allowedMethods());

await app.listen({ port: PORT });