import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/nav';
import Login from './pages/login';
import Signup from './pages/SignUp';
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
  // return {
  //   login: {
  //     ...login,
  //     authorization: token ? `Bearer ${token}` : '',
  //   },
  // };
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

function App () {
  return (
    
    <ApolloProvider client={client}>
      <Router>
          <Nav />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/me" element={<Profile />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/history" element={<History />}/>
              <Route path="/reminder" element={<Reminder />}/>
              <Route path="/tools" element={<Tools />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="*" element={<NoMatch />}></Route>
          </Routes>
     
      </Router>
    </ApolloProvider>
    
  );
  
}


export default App;

// currently displaying nav with everything commented out

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../src/pages/home'
// // import 'antd/dist/reset.css';
// import './App.css';
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Routes>
//             <Route exact path='/' component={Home}  />
//           </Routes>
//         </div>
//       </Router>
//     )
//   }
// }
// export default App;