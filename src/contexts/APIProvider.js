import { createContext, useContext } from 'react';
import APIClient from '../APIClient';

const ApiContext = createContext();

export default function APIProvider({ children }) {
  const api = new APIClient();

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
