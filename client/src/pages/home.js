import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Login from '../components/login/index';


// if not logged in display login page to user
//add reminder logic here, compare current date (and previous dates) to reminder dates and display if it is "for today"
//provide a "completed" button, and perhaps render the past reminders (service history) below or on separate page
const Home = () => {
    const dayOfWeek =['Monday, Teusday, Wednesday, Thursday, Friday, Saturday, Sunday']
    const today = new Date().getDay();
  
    const [userData, setUserData] = useState({});
    return (
        <div></div>
    );
}

export default Home