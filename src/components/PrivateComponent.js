import { useApi } from '../contexts/ApiProvider';


//   console.log(user)
  
// }

// import { useLocation, Navigate } from 'react-router-dom';
// import { useUser } from '../contexts/UserProvider';

export default function PrivateComponent({ children }) {
  const api = useApi()
  if (api.isAuthenticated()) {
    return children
  }
  // const location = useLocation();
  // console.log("user: ", user)
  // if (user === undefined) {
  //   return null;
  // }
  // else if (user) {
  //   return children;
  // }
  // else {
  //   const url = location.pathname + location.search + location.hash;
  //   return <Navigate to="/login" state={{next: url}} />
  // }
}
