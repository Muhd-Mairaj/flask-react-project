import React, { useEffect, useState, useContext, createContext } from 'react';
import { useApi } from './ApiProvider';

const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState()
  const { a}
  console.log(user)

  useEffect(() => {
    (async () => {

    })()
  })
  
  return (
    <UserContext.Provider value = {{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}


export function useUser() {
  return useContext(UserContext);
}