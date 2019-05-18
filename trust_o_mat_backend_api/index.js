const routes = require("./routes");
const express = require('express');
const app = express();
const port = 3000;

app.get("/issues", routes.issues.listIssues);
app.get('/parties', routes.parties.listParties);
app.get('/parties/:party/metric/:metric', routes.parties.partyMetric);
app.get('/politicians', routes.politicians.listPoliticians);
app.get('/politicians/:politician/metric/:metric', routes.politicians.politicianMetric);
app.get('/stances', routes.stances.listStances);

app.use((req, res) => res.status(404).json({message: "404: you done fucked up"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
