import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379
});

console.log(await redis.ping())


// await redis.set('name', 'Wisdom Ekpot');
// let name = await redis.get('name')
// console.log(name)


// let names = await redis.keys('*');
// console.log(names)


let add = async(key:string,name:string,email:string) => {
    let addPerson = await redis.hmset(key, {
        'name': name,
        'email': email
    })

    return addPerson
}

// console.log(await add('key1','Wisdom Ekpot','wisdomekpot@gmail.com'))


// let getParticular = async (id:string) => {
//    return await redis.hgetall(id);

// }
// console.log(await getParticular('key1'))


let deleteKey = async (id:string) => {
    let deleted = await redis.del(id);
    return deleted
}
console.log(await deleteKey('key1'))

