import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {use}


function Logout() {
  const navigate = useNavigate()
  
  useEffect(() => {
    localStorage.removeItem('access_token');
    navigate("/login")
  }, []);

}

export default Logout;