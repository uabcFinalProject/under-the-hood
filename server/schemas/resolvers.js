const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { User, Vehicle, Maintenance, Reminder, ServiceItem } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    users: async () => {
      return await User.find({});
    },
    vehicles: async () => {
      return await Vehicle.find({});
    },
    vehicle: async (parent, { vehicleId }, context) => {
      return Thought.findOne({ _id: vehicleId });
    },
    getAllServiceItems: async () => {
      return await ServiceItem.find({});
    },
    getServiceItem: async (parent, { _id }, context) => {
      return ServiceItem.findOne({ _id });
    },
    reminders: async () => {
      return await Reminder.find({});
    },
    reminder: async (parent, { _id }, context) => {
      return Reminder.findOne({ _id });
    },
    serviceHistory: async () => {
      return await ServiceHistory.find({});
    },
  },
  //do we need separate service items and reminders? are they combined? 
  Mutation: {
    addUser: async (parent, { email, password, firstName, lastName, phoneNumber }) => {
      const user = await User.create({ email, password, firstName, lastName, phoneNumber });
      const token = signToken(user)
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addVehicle: async (parent, { vin, year, make, model, color, odometer, notes }, context) => {
      // this line mocks User "veruca@mail.com" as the owner
      const id = '63ffa2dbe80cec05abf54a95';
      const vehicle = await Vehicle.create(
        { year, make, model, color, vin, odometer, notes }
      );

      await User.findOneAndUpdate(
        { _id: id },
        { $addToSet: { vehicles: vehicle._id } },
        { new: true, runValidators: true, }
      );

      return vehicle;
    },

    addServiceItem: async (parent, { description, moreInfoLink }, context) => {
      if (context.user) {
        const seviceItem = await ServiceItem.create({
          description,
          moreInfoLink,
        });
        // await User.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { serviceItems: serviceItem._id } }
        // );
        return serviceItem;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeServiceItem: async (parent, { _id }, context) => {
      if (context.user) {
        const serviceItem = await ServiceItem.findOneAndDelete(
          { _id });
        return serviceItem;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
}

module.exports = resolvers;
