import { useUser } from '../contexts/UserProvider';

export default function test() {
  const user = useUser()

  console.log()
}