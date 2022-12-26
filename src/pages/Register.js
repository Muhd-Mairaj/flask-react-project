import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Body from '../components/Body';
import InputField from '../components/InputField';


function Register() {
  const [formErrors, setFormErrors] = useState({})
  const usernameField = useRef()
  const passwordField = useRef()
  const confirmField = useRef()

  useEffect(() => {
    usernameField.current.focus();
  }, []);


  function handleSubmit(event) {
    event.preventDefault()

    const username = usernameField.current.value
    const password = passwordField.current.value
    const confirm = confirmField.current.value

    const errors = {};
    errors.username = (!username) ? "This field must be filled" : ""
    // if (!username) {
    //   errors.username = "This field must be filled"
    // }
    if (!password) {
      errors.password = "This field must be filled"
    }
    if (!confirm) {
      errors.confirm = "This field must be filled"
    }
    if (password !== confirm) {
      errors.confirm = "Passwords do not match"
    }

    setFormErrors(errors)
    if (Object.keys(errors).length > 0) {
      return
    }

    // Resiter
    alert("Registering")
  }
  
  return (
    <Body loggedIn>
      {/* <h2>Register</h2> */}
      <Form onSubmit={handleSubmit}>
        <Col>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={5} lg={4} xl={3}>
              <InputField
                name="username" label="Username" placeholder="Username"
                error={formErrors.username} fieldRef={usernameField} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={5} lg={4} xl={3}>
              <InputField
              name="password" label="Password" type="password" placeholder="Password"
              error={formErrors.password} fieldRef={passwordField} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={5} lg={4} xl={3}>
              <InputField
              name="confirm" label="Confirm Password" type="password" placeholder="Confirm Password"
              error={formErrors.confirm} fieldRef={confirmField} />
            </Col>
          </Row>
          <Row className="justify-content-center py-3">
            <Col xs={10} sm={3} lg={2} xl={1}>
              <Button variant="dark" className="w-100" type="submit">Register</Button>
            </Col>
          </Row>
        </Col>
      </Form>
    </Body>
  );
}

export default Register