import React, { useEF
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