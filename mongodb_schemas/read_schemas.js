const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'trust-o-mat';

async function readSchemas() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const collections = await db.collections();
  collections.forEach(async collection => {
    const options = await collection.options();
    console.log(collection.s.name, ':', options);
  });
}

readSchemas();
