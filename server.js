const express = require('express');
const graphqlHTTP = require('express-graphql');
const chalk = require('chalk'); // not needed, I just like pretty colors

const rest = require('./routes/api/rest');
const graphql = require('./routes/graphql/graphql');

const app = express();
const port = 5000;

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/rest', rest)
app.use('/graphql', graphqlHTTP({
  schema: graphql.schema,
  rootValue: graphql.root,
  graphiql: true
}));

app.listen(port, () => {
  console.log(chalk.blueBright('REST API') + ' listening on ' + chalk.underline(`localhost:${port}/rest/`));
  console.log(chalk.magenta('GraphQL API') + ' listening on ' + chalk.underline(`localhost:${port}/graphql/`));
});
