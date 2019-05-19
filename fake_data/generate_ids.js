const ObjectID = require('mongodb').ObjectID;

for (let index = 0; index < parseInt(process.argv[2]); index++) {
    console.log(new ObjectID());
}
