import React from 'react';
import { useNavigate } from 'react-router-dom';


function Logout() {
  const navigate = useNavigate()
  
  useEffect(() => {
    usernameField.current.focus()
  }, []);
  
  localStorage.removeItem('access_token');
  navigate("/login")
}

export default Logout;