
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
    reminders: [Reminder]
    serviceHistory: [ServiceHistory]
  }

  type User {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    phoneNumber: String
    vehicles: [Vehicle!]
  }

  type Reminder {
    _id: ID
    vehicle: Vehicle
    user: User
    serviceType: String
    notifyStartDate: String
    notifyFrequency: Int
    notifyType: String
    notes: String
    completed: Boolean
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
    user(userId: ID!): User
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
    addUser(email: String!, password: String!, firstName: String!, lastName: String!, phoneNumber: String!): Auth
    addVehicle(vin: String!, year: Int!, make: String!, model: String!, color: String, odometer: Int, notes: String ): User
    addServiceItem(description: String!, moreInfoLink: String): ServiceItem
    removeServiceItem(serviceItemId: ID!): ServiceItem
    addReminder(vehicleId: ID!, user: ID!, serviceType: String!, notifyStartDate: String!, notifyFrequency: Int!, notifyType: String!, notes: String): Reminder
    removeReminder(reminderId: ID!): Reminder
    updateReminder(reminderId: ID!): Reminder
 }
`;

module.exports = typeDefs;