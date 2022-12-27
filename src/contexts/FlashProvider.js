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
    set
    
  }
  
}