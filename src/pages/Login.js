import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Col className="justify-content-center">
          <Row >
            <Col xs={12} sm={6}>
              <InputField
                name="username" label="Username" placeholder="Username"
                error={formErrors.username} fieldRef={usernameField} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <InputField
              name="password" label="Password" type="password" placeholder="Password"
              error={formErrors.password} fieldRef={passwordField} />
            </Col>
          </Row>
          <Row >
            <Col 
            <Button variant="primary" type="submit">Login</Button>
          </Row>
        </Col>
      </Form>
    </Body>
  );
}

export default Login