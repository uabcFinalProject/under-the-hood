const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    
    /*
    USE 2nd "let token" TO SIMULATE LOGGED ON USER...
    // You MUST logon through GraphQL Explorer, copy the Token from there and paste it here.
    */
    
    let token = req.body.token || req.query.token || req.headers.authorization;

    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic2VhbkBtYWlsLmNvbSIsIl9pZCI6IjY0MDhkMDk2OGVjYTBmY2QzOTA3NzdlZSJ9LCJpYXQiOjE2NzgzMDEwMDksImV4cCI6MTY3ODMwODIwOX0.xVLUzIR3Q2nMCQJqJtm4RbMxYfUIhlX87hhyIcCU78w";

    // We split the token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
