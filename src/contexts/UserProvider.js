import React, { useEffect, useState, useContext, createContext } from 'react';
import { useApi } from './ApiProvider';

const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState()
  const { api } = useApi()

  useEffect(() => {
    (async () => {
        if (!api.isAuthenticated) {
          
        }
    })()
  }, [api])
  
  return (
    <UserContext.Provider value = {{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}


export function useUser() {
  return useContext(UserContext);
}