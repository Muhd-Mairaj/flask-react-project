import React, { useEffect, useState, useContext, createContext } from 'react';
import { useApi } from './ApiProvider';

const UserContext = createContext()

export default function UserProvider({ children }) {
//   const [user, setUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState()
  const { api } = useApi()

  useEffect(() => {
    (async () => {
        if (api.isAuthenticated()) {
          setIsLoggedIn(true)
        }
        else {
          setIsLoggedIn(false)
        }
    })()
  }, [api])
  
  const login = (async (username, password) => {
    const result = await api.login()
    if result
  })
  
  return (
    <UserContext.Provider value = {{ isLoggedIn, setIsLoggedIn }}>
      { children }
    </UserContext.Provider>
  )
}


// export function useUser() {
//   return useContext(UserContext);
// }