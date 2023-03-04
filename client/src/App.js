import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/nav/nav';
import Login from './components/login/login';
import Signup from './components/signUpForm/signup';
import Home from './pages/home';
import History from './pages/history';
import Profile from './pages/profile';
import Reminder from './pages/reminders';
import Tools from './pages/tools';
import NoMatch from './pages/nomatch';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <StoreProvider> */}
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/history" 
                element={<History />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
               <Route 
                path="/reminder" 
                element={<Reminder />} 
              />
               <Route 
                path="/tools" 
                element={<Tools />} 
              />
              <Route 
                path="*"
                element={<NoMatch />} 
              />
            </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
