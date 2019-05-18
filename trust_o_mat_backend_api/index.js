const routes = require("./routes");
const Mongo = require('./db');
const express = require('express');
const app = express();
const port = 3000;

const db = new Mongo("mongodb://172.16.49.43:27017");
db.init().then(() => console.log("Deutsche Bahn initialized"));

app.get("/issues", routes.issues.listIssues.bind(undefined, db));
app.get('/parties', routes.parties.listParties);
app.get('/parties/:party/metric/:metric', routes.parties.partyMetric);
app.get('/politicians', routes.politicians.listPoliticians);
app.get('/politicians/:politician/metric/:metric', routes.politicians.politicianMetric);
app.get('/stances', routes.stances.listStances);
app.get('/votes', routes.votes.listVotes);

app.use((req, res) => res.status(404).json({message: "404: you done fucked up"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
