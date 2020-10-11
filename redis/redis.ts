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


// let deleteKey = async (id:string) => {
//     let deleted = await redis.del(id);
//     return deleted
// }
// console.log(await deleteKey('key1'))



// let config = await redis.cluster_info()
// console.log(config)

// await redis.cluster_meet("127.0.0.1", 3670);



let config = await redis.config_get("cluster-enabled");
console.log(config)
// let hash_set = await redis.executor.exec("HSET", "name", "wisdom");
// let hash_get = await redis.executor.exec("HGET", "name");

// console.log(hash_get)


// await redis.executor.exec("SET", "name", "Wisdom Ekpot")
// let get = await redis.executor.exec("GET", "name");
// console.log(get)