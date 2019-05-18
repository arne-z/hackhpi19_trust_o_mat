const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'trust-o-mat';

async function writeSchemas() {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const collections = await db.collections();
  collections.forEach(collection => {
    const name = collection.s.name;
    try {
      const validator = require('./' + name + '.js');
      db.command({
        collMod: name,
        validator: validator,
        validationLevel: 'strict'
      });
      console.log("wrote", name, "validator");
    }
    catch(e) {
      console.log(e.message);
    }
  });
}

writeSchemas();
