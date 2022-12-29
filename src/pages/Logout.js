import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';


function Logout() {
  const api = useApi()
  const navigate = useNavigate()
  
  api.logout()
  return <Navigate to="/login"></Navigate>

}

export default Logout;