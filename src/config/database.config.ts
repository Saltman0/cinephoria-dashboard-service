import {MongoClient} from "mongodb";

const uri: string = process.env.MONGODB_URI;

const client: MongoClient = new MongoClient(uri);

await client.connect();

const database = client.db("dashboard");

export default database;