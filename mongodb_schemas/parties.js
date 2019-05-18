const schema = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "name", "logo" ],
    properties: {
      name: {
        bsonType: "string"
      },
      logo: {
        bsonType: "binData"
      }
    }
  }
};

module.exports = schema;
