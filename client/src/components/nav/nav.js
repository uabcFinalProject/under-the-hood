import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// NavBar function
const NavBar = () => {
    const [userData, setUserData] = useState({});
    const [anchorElNav, setAnchorElNav] = useState(null);

    // Handler for opening the menu (on smaller screens)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // Handler for closing the menu (on smaller screens)
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };