const routes = require("./routes");
const express = require('express');
const app = express();
const port = 3000;

app.get('/parties', routes.parties.listParties);

app.use((req, res) => res.status(404).json({message: "404: you done fucked up"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
