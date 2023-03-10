// New Nav from ant design
import { HomeOutlined, ProfileOutlined, HistoryOutlined, AlertOutlined, ToolOutlined,  } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import Auth from '../utils/auth';
const items = [ 
  {
    label: (<a href="/">Home</a>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: (<a href="/profile">Profile</a>),
    key: 'profile',
    icon: <ProfileOutlined />,
  },
  {
    label: (<a href="/history">History</a>),
    key: 'history',
    icon: <HistoryOutlined />,
  },
  {
    label: (<a href="/reminder">Reminders</a>),
    key: 'reminders',
    icon: <AlertOutlined />,
  },
  {
    label: (<a href="/tools">Tools</a>),
    key: 'tools',
    icon: <ToolOutlined />,
  },
  {
    label: (<a href="/signup">Sign Up</a>),
    key: 'signup',
  },
  {
    label: (<a href="/login">Login</a>),
    key: 'login',
  },
  {
    label: (<a href="/" onClick={() => Auth.logout()}>Logout</a>),
    key: 'logout'
  }
];


const Nav = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ background: '#F9F5DE'}} items={items} />;
};
export default Nav;