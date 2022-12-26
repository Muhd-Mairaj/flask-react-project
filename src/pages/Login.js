import { useState, useEffect, useRef } from 'react';
import Body from '../components/Body';


function Login() {
  const [formErrors, setFormErrors] = useState({})
  const usernameField = useRef()
  const passwordField = useRef()

  useEffect(() => {
    usernameField.current.focus();
  }, []);


  function handleSubmit(event) {
    event.preventDefault()

    const username = user
  }
  
  return (
    <Body loggedIn>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <InputField
          name="username" label="Username or email address"
          error={formErrors.username} fieldRef={usernameField} />
        <InputField
          name="password" label="Password" type="password"
          error={formErrors.password} fieldRef={passwordField} />
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Body>
  );
}

export default Login