import { useLocation, Navigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';


//   console.log(user)
  
// }

// import { useLocation, Navigate } from 'react-router-dom';
// import { useUser } from '../contexts/UserProvider';

export default function PrivateComponent({ children }) {
  const api = useApi()
  const location = useLocation()
  const navigate = useNavigate()
  
  if (api.isAuthenticated()) {
    return children
  }
  else {
    // const url = location.pathname + location.search + location.hash;
    // return <Navigate to="/login" state={{next: url}} />
    navigate
  }
}
