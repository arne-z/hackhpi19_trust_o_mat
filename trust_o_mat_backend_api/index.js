const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.use((req, res) => res.status(404).json({message: "404: you done fucked up"}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
