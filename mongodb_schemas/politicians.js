const schema = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "name", "image", "party" ],
    properties: {
      name: {
        bsonType: "string"
      },
      image: {
        bsonType: "binData"
      },
      address: {
        bsonType: "string"
      },
      phone: {
        bsonType: "int"
      },
      party: {
        bsonType: "objectId",
      }
    }
  }
};

module.exports = schema;
