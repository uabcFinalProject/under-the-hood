
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
    reminders: [Reminder!]
    serviceHistory: [ServiceHistory!]
  }

  type User {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    phoneNumber: Int
    vehicles: [Vehicle]
  }

  type Reminder {
    _id: ID
    user: User
    serviceType: ServiceItem
    notifyStartDate: String
    notifyFrequency: Int
    notifyType: String
    notes: String
  }

  type ServiceItem {
    _id: ID
    description: String
    moreInfoLink: String
  }

  type ServiceHistory {
    _id: ID
    serviceItem: [ServiceItem]
    serviceDate: String
    serviceProvider: String
  }

  type Query {
    users: [User]
    me: User
    vehicles: [Vehicle]
    vehicle(vehicleId: ID!): Vehicle
    getAllServiceItems: [ServiceItem]
    getServiceItem(serviceItemId: ID!): ServiceItem
    reminders: [Reminder]
    reminder(reminderId: ID!): Reminder
    serviceHistory: [ServiceHistory]
 }
  type Auth {
   token: ID!
   user: User
 }

 type Mutation {
   login(email: String!, password: String!): Auth
   addUser(firstName: String!, lastName: String!, phoneNumber: Int, email: String!, password: String!): Auth
   addVehicle(
    vin: String!, year: Int!, make: String!, model: String!,
    color: String, odometer: Int, notes: String ): Vehicle
    addServiceItem(description: String!, moreInfoLink: String): ServiceItem
    removeServiceItem(serviceItemId: ID!): ServiceItem
    addReminder(user: ID!, vehicleId: ID!, serviceType: ID!, notifyStartDate: Int!, notifyFrequency: Int!, notifyType: String!, notes: String): Reminder
    removeReminder(reminderId: ID!): Reminder
    updateReminder(reminderId: ID!): Reminder
 }
`;

module.exports = typeDefs;