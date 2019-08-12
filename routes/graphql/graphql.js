const { buildSchema } = require('graphql')
const random = require('random-name')

const schema = buildSchema(`
  type Query {
    first_name: String,
    middle_name: String,
    last_name: String
  }
`)

const root = {
  first_name: random.first(),
  middle_name: random.middle(),
  last_name: random.last()
}

module.exports = {
  schema,
  root
}
