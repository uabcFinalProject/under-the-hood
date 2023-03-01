
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Vehicle {
    _id: ID
    year: Int
    make: String
    model: String
    color: String
    vin: String
    owner: User
    odometer: Int
    notes: String
  }

  type User {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    phoneNumber: Int
    vehicles: [Vehicle]!
  }

  type Query {
    users: [User]
    me: User
    vehicles: [Vehicle]
    vehicle(vehicleId: ID!): Vehicle
 }
  type Auth {
   token: ID!
   user: User
 }

 type Mutation {
   login(email: String!, password: String!): Auth
   addUser(email: String!, password: String!, firstName: String!, lastName: String!, phoneNumber: Int): Auth
   addVehicle(
    year: Int!,
    make: String!,
    model: String!,
    color: String,
    vin: String,
    odometer: Int,
    notes: String
  ): Vehicle
 }
`;

module.exports = typeDefs;