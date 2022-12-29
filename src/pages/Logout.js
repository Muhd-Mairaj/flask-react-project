import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';


function Logout() {
  const api = useApi()
  const navigate = useNavigate()
  
  api.logout()
  navigate("/login")

}

export default Logout;