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
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token")
            }
          })
          if (response.ok) {
            setUser(response.ok ? response.body : null)
            console.log("@#$%^YUHVCXSER%YUHVCDSW#$%^&U ", user)
          }
          }
        }
        else {
          setUser(null)
        }
    })()
  }, [api])
  
  const login = (async (username, password) => {
    const result = await api.login(username, password)
    if (result === "ok") {
      setUser(true)
    }
    return result
  })

  const logout = (async () => {
    api.logout()
    setUser(false)
  })
  
  return (
    <UserContext.Provider value = {{ isLoggedIn: user, setIsLoggedIn: setUser, login, logout }}>
      { children }
    </UserContext.Provider>
  )
}


export function useUser() {
  return useContext(UserContext);
}