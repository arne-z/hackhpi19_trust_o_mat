const schema = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "issue", "source", "sourceIsParty", "opinion" ],
    properties: {
      issue: {
        bsonType: "objectId"
      },
      source: {
        bsonType: "objectId"
      },
      sourceIsParty: {
        bsonType: "bool"
      },
      opinion: {
        bsonType: "int"
      },
      startDate: {
        bsonType: "date"
      },
      endDate: {
        bsonType: "date"
      }
    }
  }
};

module.exports = schema;
