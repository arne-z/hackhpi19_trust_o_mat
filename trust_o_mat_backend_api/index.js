const routes = require("./routes");
const express = require('express');
const app = express();
const port = 3000;

app.get("/issues", routes.issues.listIssues);
app.get('/parties', routes.parties.listParties);
app.get('/parties/:party/metric/:metric', routes.parties.partyMetric);

app.use((req, res) => res.status(404).json({message: "404: you done fucked up"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
