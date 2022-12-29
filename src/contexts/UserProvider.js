import React, { useEffect, useState, useContext, createContext } from 'react';
import { useApi } from './ApiProvider';

const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState()
  const { api } = useApi()
  console.log(user)

  useEffect(() => {
    (async () => {

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