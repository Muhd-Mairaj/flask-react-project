import { useUser } from '../contexts/UserProvider';

export default function test_() {
  const user = useUser()

  console.log(user)
  
}