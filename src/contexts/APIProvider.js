import { createContext, useContext } from 'react';
import APIClient from '../APIClient';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const api = new MicroblogApiClient();

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
