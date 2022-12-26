import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Body from '../components/Body';
import InputField from '../components/InputField';


function Login() {
  const [formErrors, setFormErrors] = useState({})
  const usernameField = useRef()
  const passwordField = useRef()

  useEffect(() => {
    usernameField.current.focus();
  }, []);


  function handleSubmit(event) {
    event.preventDefault()

    const username = usernameField.current.value
    const password = passwordField.current.value

    const errors = {};
    if (!username) {
      errors.username = "Username field must be filled"
    }
    if (!password) {
      errors.password = "Password field must be filled"
    }

    setFormErrors(errors)
    if (Object.keys(errors).length > 0) {
      return
    }

    // Login
    alert("Logging in")
  }
  
  return (
    <Body loggedIn>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          
        </Row>
        <InputField
          name="username" label="Username" placeholder="Username"
          error={formErrors.username} fieldRef={usernameField} />
        <InputField
          name="password" label="Password" type="password" placeholder="Password"
          error={formErrors.password} fieldRef={passwordField} />
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Body>
  );
}

export default Login