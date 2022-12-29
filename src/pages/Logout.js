import React from 'react';
import { useNavigate } from 'react-router-dom';


function Logout() {
  const navigate = useNavigate()
  localStorage.removeItem('access_token');
  navigate("")
}

export default Logout;