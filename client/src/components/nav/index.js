// Old Code:
// import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// function Nav() {

//     function showNavigation() {
//       if (Auth.loggedIn()) {
//         return (
//           <ul className="flex-row">
//             <li className="mx-1">
//               <Link to="/profile">
//                 Profile
//               </Link>
//             </li>
//             <li className="mx-1">
//               <Link to="/history">
//                 History
//               </Link>
//             </li>
//             <li className="mx-1">
//               <Link to="/reminders">
//                 Reminders
//               </Link>
//             </li>
//             <li className="mx-1">
//               <Link to="/tools">
//                 Tools
//               </Link>
//             </li>
//             <li className="mx-1">
//               {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//               <a href="/" onClick={() => Auth.logout()}>
//                 Logout
//               </a>
//             </li>
//           </ul>
//         );
//       } else {
//         return (
//           <ul className="flex-row">
//             <li className="mx-1">
//               <Link to="/signup">
//                 Signup
//               </Link>
//             </li>
//             <li className="mx-1">
//               <Link to="/login">
//                 Login
//               </Link>
//             </li>
//           </ul>
//         );
//       }
//     }
  
//     return (
//       <header className="flex-row px-1">
//         <h1>
//           <Link to="/">
//             Home
//           </Link>
//         </h1>
  
//         <nav>
//           {showNavigation()}
//         </nav>
//       </header>
//     );
//   }
  
//   export default Nav;

// New Nav from ant design

import { HomeOutlined, ProfileOutlined, HistoryOutlined, AlertOutlined, ToolOutlined,  } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [ 
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Profile',
    key: 'profile',
    icon: <ProfileOutlined />,
  },
  {
    label: 'History',
    key: 'history',
    icon: <HistoryOutlined />,
  },
  {
    label: 'Reminders',
    key: 'reminders',
    icon: <AlertOutlined />,
  },
  {
    label: 'Tools',
    key: 'tools',
    icon: <ToolOutlined />,
  },
  {
    label: 'Login',
    key: 'login',
  },
  {
    label: 'Sign Up',
    key: 'signup',
  }
];

const Nav = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Nav;