import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';
import { useApi } from '../contexts/ApiProvider';


export default function PrivateComponent({ children }) {
  const api = useApi()
  const location = useLocation()
  const navigate = useNavigate()
  
  if (is)
  if (api.isAuthenticated()) {
    return <Navigate to="/" />
  }
  else {
    return children
  }
}
