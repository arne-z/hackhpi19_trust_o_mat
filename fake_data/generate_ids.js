const ObjectId = require('mongodb').ObjectId;

for (let index = 0; index < parseInt(process.argv[2]); index++) {
  console.log(new ObjectId());
}
