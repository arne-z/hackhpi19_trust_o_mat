const schema = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "name" ],
    properties: {
      name: {
        bsonType: "string"
      }
    }
  }
};

module.exports = schema;
