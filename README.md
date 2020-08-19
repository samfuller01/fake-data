# Fake Data

A super simple example of an Express API that works with both GraphQL and REST 
API HTTP Requests. The fake data is generated with 
[random-name](https://www.npmjs.com/package/random-name).

## Installation

You have to have NodeJS and Git installed for this to work.

```bash
git clone https://github.com/samfuller01/fake-data.git
cd fake-data
yarn install
yarn run dev
```

## Usage

The GraphQL API is available at `http://localhost:5000/graphql/`.
The REST API is available at `http://localhost:5000/rest/`.

Here is an example of a GraphQL query:

```graphql
query {
    first_name
    middle_name
    last_name
}
```

The REST API will always give you a response similar to this:

```json
{
    "first_name": "Corinna",
    "middle_name": "Markos",
    "last_name": "Alexandrina"
}
```
