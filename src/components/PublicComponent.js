import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';
import { useUser } from '../contexts/UserProvider';


export default function PrivateComponent({ children }) {
  const api = useApi()
  const isLoggedIn = useUser()
  const location = useLocation()
  const navigate = useNavigate()
  
  if (isLoggedIn === undefined) {
    return null;
  }
  else if (isLog) {
    return <Navigate to="/" />
  }
  else {
    return children
  }
}
