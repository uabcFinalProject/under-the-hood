const { signToken } = require ('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { User, Vehicle, Maintenance, Reminder } = require('../models');

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
  },
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

    addVehicle: async (parent, { year, make, model, color, vin, owner, odometer, notes }, context) => {
      // this line mocks User "veruca@mail.com" as the owner
      const id = '63ffa2dbe80cec05abf54a95';
      const vehicle = await Vehicle.create(
        { year, make, model, color, vin, $set: { owner: id }, odometer, notes }
      );

      await User.findOneAndUpdate(
        { _id: id },
        { $addToSet: { vehicles: vehicle._id } },
        { new: true, runValidators: true, }
      );

      return vehicle;
    }
  },
};

module.exports = resolvers ;
