import { useContext } from 'react';


export const FlashContext = useContext()


export default function FlashProvider({ children }) {
  const [ flashTimer, setFlashTimer ] = useState(0)
  const []

  function flash(message, type, duration = 10) {
    if (flashTimer) {
      clearTimeout(flashTimer)
      flashTimer = undefined
    }

    
  }
  
}