const MongoClient = require('mongodb').MongoClient;

class Mongo {
  constructor(url = 'mongodb://localhost:27017', dbName = 'trust-o-mat') {
    this.url = url;
    this.dbName = dbName;
  };
  async init() {
    this.client = new MongoClient(this.url);
    await this.client.connect();
    this.db = this.client.db(this.dbName);
    this.collections = {};
    const tempCollections = await this.db.collections();
    tempCollections.forEach(async collection => {
      this.collections[collection.s.name] = collection;
    });
  };
  async issues(limit = 0) {
    return await this.collections["issues"]
      .find(
        {},
        { limit: limit })
      .toArray();
  }
}

async function test() {
  const db = new Mongo();
  await db.init();
  (await db.issues()).forEach((issue) => {
    console.log(issue.name);
  })
}

test();

module.exports = Mongo;
