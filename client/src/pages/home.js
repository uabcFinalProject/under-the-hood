import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Login from '../components/login/index';


// if not logged in display login page to user

const Home = () => {
    const dayOfWeek =['Monday, Teusday, Wednesday, Thursday, Friday, Saturday, Sunday']
    const today = new Date().getDay();
  
    const [userData, setUserData] = useState({});
    return (
        <div></div>
    );
}

export default Home