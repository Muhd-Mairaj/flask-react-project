import React, { useEFfect, useState, useContext, createContext } from 'react';


const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState()
  console.log(user)

  useEffect(() => {
    (async () => )
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