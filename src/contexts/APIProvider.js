import { createContext, useContext } from 'react';
import APIClient from '../APIClient';

const APIContext = createContext();

export default function APIProvider({ children }) {
  const api = new APIClient();

  return (
    <APIContext.Provider value={api}>
      {children}
    </APIContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
