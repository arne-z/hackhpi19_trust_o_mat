const schema = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "issue", "politician", "opinion", "date" ],
    properties: {
      issue: {
        bsonType: "objectId"
      },
      politician: {
        bsonType: "objectId"
      },
      opinion: {
        bsonType: "int"
      },
      date: {
        bsonType: "date"
      }
    }
  }
};

module.exports = schema;
