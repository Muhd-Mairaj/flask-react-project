import { useUser } from '../contexts/UserProvider';

export default function test_({ children }) {
  const { user } = useUser()

  console.log(user)
  
}