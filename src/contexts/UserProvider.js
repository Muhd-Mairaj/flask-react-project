import React, { useEffect, useState, useContext, createContext } from 'react';
import { useApi } from './ApiProvider';

const UserContext = createContext()

export default function UserProvider({ children }) {
//   const [user, setUser] = useState()
  const [user, setUser] = useState()
  const api = useApi()

  useEffect(() => {
    (async () => {
        if (api.isAuthenticated()) {
          const response = api.get("/user", null, {
            headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}
          })
          setUser(response.ok ? response.body : null)
          console.log("@#$%^YUHVCXSER%YUHVCDSW#$%^&U ", user)
        }
        else {
          setUser(null)
        }
    })()
  }, [api, user])
  
  const login = (async (username, password) => {
    const result = await api.login(username, password)
    if (result === "ok") {
      const response = api.get("/user", null, {
        headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}
      })
      setUser(response.ok ? response.body : null)
      console.log("@#$%^YUHVCXSER%YUHVCDSW#$%^&U ", user)
    }
    return result
  })

  const logout = (async () => {
    api.logout()
    setUser(null)
  })
  
  return (
    <UserContext.Provider value = {{ user, setUser, login, logout }}>
      { children }
    </UserContext.Provider>
  )
}


export function useUser() {
  return useContext(UserContext);
}