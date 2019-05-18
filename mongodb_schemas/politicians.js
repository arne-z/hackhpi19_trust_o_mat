const schema = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "name", "image", "party" ],
    properties: {
      name: {
        bsonType: "string"
      },
      image: {
        bsonType: "string"
      },
      address: {
        bsonType: "string"
      },
      phone: {
        bsonType: "string"
      },
      party: {
        bsonType: "objectId",
      }
    }
  }
};

module.exports = schema;
