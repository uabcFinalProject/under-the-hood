const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    
    // let token = req.body.token || req.query.token || req.headers.authorization;

    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoibWFnZ2llQGVtYWlsLmNvbSIsIl9pZCI6IjY0MDY5YTJlNDJmNjMyZmIxZjE4YmYzNyJ9LCJpYXQiOjE2NzgxNTY3MjQsImV4cCI6MTY3ODE2MzkyNH0.XuQHvKjmsUFvWt27ZiO8j-wxYbpDEfqjxh-oAUnl0X0"

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
