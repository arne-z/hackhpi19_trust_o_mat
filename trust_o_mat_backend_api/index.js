const routes = require("./routes");
const Mongo = require("./db");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const argv = require("yargs").argv;

const app = express();
const port = argv.port;
const dbAddress = argv.dbAddress;

console.log("Starting Trust-O-Mat backend...");

const db = new Mongo(`${dbAddress}`);
db.init().then(() => {
    console.log("Initialized Deutsche Bahn!");

    app.use(cors());
    app.use(morgan("short"));

    app.get("/issues", routes.issues.listIssues.bind(undefined, db));
    app.get("/parties", routes.parties.listParties.bind(undefined, db));
    app.get("/parties/:party/metrics/:metric", routes.parties.partyMetric.bind(undefined, db));
    app.get("/politicians", routes.politicians.listPoliticians.bind(undefined, db));
    app.get("/politicians/:politician/metrics/:metric", routes.politicians.politicianMetric.bind(undefined, db));
    app.get("/stances", routes.stances.listStances.bind(undefined, db));
    app.get("/votes", routes.votes.listVotes.bind(undefined, db));

    app.use((req, res) => res.status(404).json({message: "404: you done fucked up"}));

    app.listen(port, () => console.log(`Trust-O-Mat backend listening on port ${port}!`));
}).catch(reason => console.log(reason));
