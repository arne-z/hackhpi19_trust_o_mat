const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const fs = require('fs');

const settingsFile = fs.readFileSync("opinionSettings.json");
const settings = JSON.parse(settingsFile);

for (const issueId of settings.issues) {
  console.log("issue:", issueId);
  for (const party of settings.parties) {
    console.log("party:", party.id);
  }
}
