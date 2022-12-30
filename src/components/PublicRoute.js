import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';
import { useUser } from '../contexts/UserProvider';


export default function PublicRoute({ children }) {
  const { isLoggedIn } = useUser()
  const location = useLocation()
  const navigate = useNavigate()
  
  if (isLoggedIn === undefined) {
    return null;
  }
  else if (isLoggedIn) {
    return <Navigate to="/" />
  }
  else {
    return children
  }
}
