
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type A {
    _id: ID
    a: String
  }

  type Query {
    a: [A]!
  }

`;


module.exports = typeDefs;