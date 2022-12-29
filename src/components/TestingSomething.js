import { useUser } from '../contexts/UserProvider';


export default function TestingSomething({ children }) {
  const { user } = useUser()

  console.log(user)
  
}