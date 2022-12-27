import { useContext } from 'react';


export const FlashContext = useContext()

let flashTimer
export default function FlashProvider({ children }) {
  const [ flashMessage, setFlashMessage ] = useState({})
  const [ visible, setVisible ] = useState(false)

  function flash(message, type, duration = 10) {
    if (flashTimer) {
      clearTimeout(flashTimer)
      flashTimer = undefined
    }
    setVisible(true)
    setFlashMessage({message, type})
    
    if (duration) {
      flashTimer = setTimeout(hideFlash, duration * 1000);
    }
  }

  function hideFlash()
  
}