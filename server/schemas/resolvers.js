const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { Reminder, ServiceHistory, ServiceItem, User, Vehicle, } = require('../models');

const resolvers = {
  Query: {
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id })
    //     .populate('vehicles');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    users: async () => {
      return User.find({})
      .populate('vehicles');
    },
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId })
      .populate('vehicles');
    },
    vehicles: async () => {
      return Vehicle.find({})
      .populate('reminders')
      .populate('serviceHistory');
    },
    vehicle: async (parent, { vehicleId }, context) => {
      return Vehicle.findOne({ _id: vehicleId })
      .populate('reminders')
      .populate('serviceHistory');
    },
    getAllServiceItems: async () => {
      return ServiceItem.find({});
    },
    getServiceItem: async (parent, { _id }, context) => {
      return ServiceItem.findOne({ _id });
    },
    reminders: async () => {
      return Reminder.find({})
      .populate('vehicle')
      .populate('user')
      // .populate('serviceType');
    },
    reminder: async (parent, { _id }, context) => {
      return Reminder.findOne({ _id })
      .populate('vehicle')
      .populate('user')
      // .populate('serviceType');
    },
    serviceHistory: async () => {
      return ServiceHistory.find({});
    },
    me: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        // const userData = await User.findOne({ _id: context.user._id }).populate('vehicles');
        return User.findOne({ _id: context.user._id })
        .populate('vehicles')
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  //do we need separate service items and reminders? are they combined? 
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)
      return { token, user };
    },

    login: async (parent, { email, password }) => {

      const user = await User.findOne({ email })
      .populate('vehicles');

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
      if (context.user) {
        const vehicle = await Vehicle.create(
          { year, make, model, color, vin, odometer, notes }
        );
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { vehicles: vehicle._id } },
          { new: true, runValidators: true, }
        )
        .populate('vehicles');
        // return vehicle;
        return user;
      };
    },

    addServiceItem: async (parent, { description, moreInfoLink }, context) => {
      if (context.user) {
        const serviceItem = await ServiceItem.create({
          description,
          moreInfoLink,
        });
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

    addReminder: async (parent, { vehicleId, user, serviceType, notifyStartDate, notifyFrequency, notifyType, notes }, context) => {
      console.log(context.body);
      // WE KNOW USER _ID IS COMING OVER, BUT WE'RE APPARENTLY NOT GETTING USER TOKEN
      // if (context.user) {
        const createReminder = await Reminder.create({
          vehicle: vehicleId,
          user,
          serviceType,
          notifyStartDate,
          notifyFrequency,
          notifyType,
          notes
        });

        // const vehicle = 
        await Vehicle.findOneAndUpdate(
          { _id: vehicleId }, 
          { $addToSet: { reminders: createReminder._id } },
          { new: true }
        ).populate('reminders');

        const newReminder = Reminder.findOneAndUpdate(createReminder._id)
        .populate('vehicle')
        .populate('user')
        // .populate('serviceType');

        return newReminder;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },

    removeReminder: async (parent, { _id }, context) => {
      if (context.user) {
        const reminder = await Reminder.findOneAndDelete(
          { _id });
        return reminder;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateReminder: async (parent, { _id }, context) => {
      if (context.user) {
        const update = await Reminder.findOneAndUpdate(
          { _id });
        return update;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
}

module.exports = resolvers;
