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
    // <Body loggedIn>
    //   <h1>Login</h1>
    //   <Form onSubmit={handleSubmit}>
    //       <InputField
    //         name="username" label="Username" placeholder="Username"
    //         error={formErrors.username} fieldRef={usernameField}
    //         class_name="mx-auto w-auto"
    //       />
    //       <InputField
    //         name="password" label="Password" type="password" placeholder="Password"
    //         error={formErrors.password} fieldRef={passwordField} 
    //         class_name="mx-auto w-auto"
    //       />
    //       <Button variant="primary" type="submit" className="mx-auto">Login</Button>
    //   </Form>
      <Form onSubmit={handleSubmit}>
            <Row xs={12} sm={6}>
          {/* <Row className=""> */}
              <InputField
                name="username" label="Username" placeholder="Username"
                error={formErrors.username} fieldRef={usernameField} />
          {/* </Row> */}
            </Row>
            <Row xs={12} sm={6}>
          {/* <Row className=""> */}
              <InputField
              name="password" label="Password" type="password" placeholder="Password"
              error={formErrors.password} fieldRef={passwordField} />
          {/* </Row> */}
            </Row>
          {/* <Row className=""> */}
            <Row xs={10} sm={2}>
              <Button variant="primary" type="submit">Login</Button>
            </Row>
          {/* </Row> */}
      </Form>
    // </Body>
  );
}

export default Login