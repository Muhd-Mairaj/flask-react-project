import React from 'react';
import {useAuth0} from '@auth0/auth0react';


function Logout() {
  const { logout } = useAuth0()

  return (
    logout({ returnTo: "http://127.0.0.1:3000/login" })
  )
}