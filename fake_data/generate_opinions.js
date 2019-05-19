const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const fs = require('fs');

function read(file){
  return JSON.parse(fs.readFileSync(file + ".json"));
}

const issues = read("issues");
const politicians = read("politicians");
const parties = read("parties");

const timelineStart = new Date(2015, 10, 1);
const timelineEnd = new Date(2019, 5, 1);

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}

function getRandomStance() {
  return getRandomInt(-1, 2);
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getVotingTimestamps() {
  const numVotes = getRandomInt(2, 5);
  const times = [];
  for (let i = 0; i < numVotes; i++) {
    times.push(randomDate(timelineStart, timelineEnd));
  }
  return times;
}

function generateStances() {
  const numStances = getRandomInt(2, 7);
  const times = [];
  for (let i = 0; i < numVotes; i++) {
    times.push(randomDate(timelineStart, timelineEnd));
  }
  times = times.sort();
  const stances = [];
  const stance
  for (let i = 0; i < numVotes; i++) {
    times.push(randomDate(timelineStart, timelineEnd));
  }
}

for (const issue of issues) {
  const issueId = issue._id.$oid;
  console.log("issue:", issueId);
  const voteTimes = getVotingTimestamps();
  for (const party of parties) {
    const partyId = party._id.$oid;
    console.log("party:", partyId);
    // generate party opinions and votes
    const partyPoliticians = politicians.filter(p => p.party.$oid == partyId);
    for (const politician of partyPoliticians) {
      const politicianId = politician._id.$oid;
      console.log("politician:", politicianId);
    }
  }
}
