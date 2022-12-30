import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';


export default function PublicRoute({ children }) {
  const { isLoggedIn } = useUser()
  
  // if (isLoggedIn === undefined) {
  //   return null;
  // }
  if (isLoggedIn) {
    return <Navigate to="/" />
  }
  else {
    return children
  }
}
