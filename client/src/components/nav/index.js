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
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const Nav = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Nav;