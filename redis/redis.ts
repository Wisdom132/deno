import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379
});

console.log(await redis.ping())


await redis.set('name', 'Wisdom Ekpot');
let name = await redis.get('name')
console.log(name)