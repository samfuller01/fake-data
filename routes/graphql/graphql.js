const { buildSchema } = require('graphql');
const random = require('random-name');

const schema = buildSchema(`
  type Query {
    first_name: String,
    middle_name: String,
    last_name: String,
    random_number: Float
  }
`);

const root = {
  first_name: random.first(),
  middle_name: random.middle(),
  last_name: random.last(),
  random_number: Math.random()
};

module.exports = {
  schema,
  root
};
