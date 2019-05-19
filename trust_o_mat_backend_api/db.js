const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

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
  };
  async politicians(limit = 0) {
    return await this.collections["politicians"]
      .find(
        {},
        { limit: limit })
      .toArray();
  };
  async parties(limit = 0) {
    return await this.collections["parties"]
      .find(
        {},
        { limit: limit })
      .toArray();
  };
  async getStances(source, issue) {
    return await this.collections["stances"]
      .find({ source: new ObjectId(source), issue: new ObjectId(issue) })
      .toArray();
  };
  async getVotes(source, issue) {
    return await this.collections["votes"]
    .find({ source: new ObjectId(source), issue: new ObjectId(issue) })
      .toArray();
  };
  async getStancesAndVotes(source, issue) {
    return {
      stances: await this.getStances(source, issue),
      votes: await this.getVotes(source, issue)
    }
  };
}

module.exports = Mongo;
