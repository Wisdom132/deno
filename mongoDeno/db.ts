// importing the deno_mongo package from url
import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

// Create client
const client = new MongoClient();
// Connect to mongodb
client.connectWithUri("mongodb://localhost:27017");

// Give your database a name
const dbname: string = "denoMongoApp";
const db = client.database(dbname);

// Declare the mongodb collections here. Here we are using only one collection (i.e user).
// Defining schema interface
interface UserSchema {
  _id: { $oid: string };
  name: string;
  email: string;
  phone: string;
}
const User = db.collection<UserSchema>("user");

export { db, User };
