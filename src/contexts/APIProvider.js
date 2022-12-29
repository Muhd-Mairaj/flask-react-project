import { createContext, useContext } from 'react';
import ApiClient from '../APIClient';

const ApiContext = createContext();

export default function APIProvider({ children }) {
  const api = new ApiClient();

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
