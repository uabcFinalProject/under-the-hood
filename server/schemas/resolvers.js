const { signToken } = require ('../utils/auth');

const resolvers = {
  Query: {
    a: async () => {
      return "a";
    }
  },

};

module.exports = resolvers ;
