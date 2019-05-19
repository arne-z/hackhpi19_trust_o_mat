const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const fs = require('fs');

const url = 'mongodb://localhost:27017';
const dbName = 'trust-o-mat';

function read(file) {
  return JSON.parse(fs.readFileSync(file + ".json"));
}

async function write(file, data) {
  await collections[file].remove({});
  await collections[file].insertMany(data);
  //await collections[file].insertMany(data, {bypassDocumentValidation:true});
}

const issues = read("issues");
const politicians = read("politicians");
const parties = read("parties");

const timelineStart = new Date(2015, 10, 1);
const timelineEnd = new Date(2019, 5, 1);
const possibleStances = [-1, 0, 0];

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}

function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomStance() {
  return getRandomFromArray(possibleStances);
}

function modifyStance(old) {
  return getRandomFromArray(possibleStances.filter(s => s != old));
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
  let times = [];
  for (let i = 0; i < numStances; i++) {
    times.push(randomDate(timelineStart, timelineEnd));
  }
  times = times.sort();
  const stances = [];
  let stance = getRandomStance();
  stances.push({
    start: timelineStart,
    end: times[0],
    opinion: stance
  });
  for (let i = 0; i < numStances; i++) {
    stance = modifyStance(stance);
    stances.push({
      start: times[i],
      end: i == numStances - 1 ? timelineEnd : times[i + 1],
      opinion: stance
    });
  }
  return stances;
}

function getVotes(partyStances, voteTimes) {
  const votes = [];
  for (const voteTime of voteTimes) {
    for (const stance of partyStances) {
      if (stance.start < voteTime && voteTime < stance.end) {
        votes.push({ date: voteTime, opinion: stance.opinion });
      }
    }
  }
  return votes;
}

const stances = [];
const votes = [];

const client = new MongoClient(url);
let db;
const collections = {};

async function doThings() {
  await client.connect();
  db = client.db(dbName);
  const tempCollections = await db.collections();
  tempCollections.forEach(async collection => {
    collections[collection.s.name] = collection;
  });
  for (const issue of issues) {
    const issueId = issue._id.$oid;
    //console.log("issue:", issueId);
    const voteTimes = getVotingTimestamps();
    for (const party of parties) {
      const partyId = party._id.$oid;
      //console.log("party:", partyId);
      const partyStances = generateStances();
      for (const stance of partyStances) {
        stances.push({
          issue: new ObjectId(issueId),
          source: new ObjectId(partyId),
          sourceIsParty: false,
          opinion: stance.opinion,
          startDate: stance.start,
          endDate: stance.end
        });
      }
      const partyPoliticians = politicians.filter(p => p.party.$oid == partyId);
      for (const politician of partyPoliticians) {
        const politicianId = politician._id.$oid;
        //console.log("politician:", politicianId);
        const politicianStances = generateStances();
        for (const stance of politicianStances) {
          stances.push({
            issue: new ObjectId(issueId),
            source: new ObjectId(politicianId),
            sourceIsParty: true,
            opinion: stance.opinion,
            startDate: stance.start,
            endDate: stance.end
          });
        }
        const politicianVotes = getVotes(partyStances, voteTimes);
        for (const vote of politicianVotes) {
          votes.push({
            issue: new ObjectId(issueId),
            politician: new ObjectId(politicianId),
            opinion: vote.opinion,
            date: vote.date
          });
        }
      }
    }
  }

  await write("stances", stances);
  await write("votes", votes);

  console.log("done");
}

doThings();
