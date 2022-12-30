import { useLocation, Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';


export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useUser()
  const location = useLocation()
  
  if (isLoggedIn === undefined) {
    return null
  }
  if (isLoggedIn) {
    return children
  }
  else {
    const url = location.pathname + location.search + location.hash;
    return <Navigate to="/login" state={{next: url}} />
  }
}
