import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';


function Logout() {
  const api = useApi()
  const navigate = useNavigate()
  
  useEffect(() => {
    api.logout()
    navigate("/login")
  }, []);

}

export default Logout;