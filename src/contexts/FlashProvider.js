import { useContext } from 'react';


export const FlashContext = useContext()


export default FlashProvider({ children }) {

  flash(message, type, duration = 10) {
    
  }
  
}