
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Vehicle {
    _id: ID
    year: Int
    make: String
    model: String
    color: String
    vin: String
    odometer: Int
    notes: String
    reminders: [Reminder]!
    serviceHistory: [ServiceHistory]!
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

  type Reminder {
    _id: ID
    user: [User]!
    serviceType: [ServiceItem]!
    notifyStartDate: String
    notifyFrequency: Int
  }

  type ServiceItem {
    _id: ID
    description: String
    moreInfoLink: String
  }

  type ServiceHistory {
    vehicles: [Vehicle]!
    serviceItem: [ServiceItem]!
    serviceDate: String
    serviceProvider: String
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