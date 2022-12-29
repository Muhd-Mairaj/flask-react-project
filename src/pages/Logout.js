import React from 'react';
import { useNavigate } from 'react-router-dom';


function Logout() {
  const navigate = useNavigate()
  localStorage.removeItem('accessToken');
  return (
    
  )
}

export default Logout;