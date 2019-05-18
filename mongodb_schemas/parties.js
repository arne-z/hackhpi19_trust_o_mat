const schema = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "name", "logo" ],
    properties: {
      name: {
        bsonType: "string"
      },
      logo: {
        bsonType: "string"
      }
    }
  }
};

module.exports = schema;
