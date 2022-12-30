import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';


export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useUser()
  const location = useLocation()
  const navigate = useNavigate()
  
  if (isLoggedIn === undefined) {
    return null
  }
  else if (isLoggedIn) {
    return children
  }
  else {
    const url = location.pathname + location.search + location.hash;
    return <Navigate to="/login" state={{next: url}} />
  }
}
