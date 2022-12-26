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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Form onSubmit={handleSubmit}>
          <InputField
            name="username" label="Username" placeholder="Username"
            error={formErrors.username} fieldRef={usernameField}
            class_name="mx-auto w-auto"
          />
          <InputField
            name="password" label="Password" type="password" placeholder="Password"
            error={formErrors.password} fieldRef={passwordField} 
            class_name="mx-auto w-auto"
          />
          <Button variant="primary" type="submit" className="mx-auto">Login</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </Body>
    //   <Form onSubmit={handleSubmit}>
    //     <Col>
    //       <Row className="justify-content-center">
    //         <Col xs={12} sm={6}>
    //           <InputField
    //             name="username" label="Username" placeholder="Username"
    //             error={formErrors.username} fieldRef={usernameField} />
    //         </Col>
    //       </Row>
    //       <Row className="justify-content-center">
    //         <Col xs={12} sm={6}>
    //           <InputField
    //           name="password" label="Password" type="password" placeholder="Password"
    //           error={formErrors.password} fieldRef={passwordField} />
    //         </Col>
    //       </Row>
    //       <Row className="justify-content-center">
    //         <Col xs={10} sm={2}>
    //           <Button variant="primary" type="submit">Login</Button>
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Form>
    // </Body>
  );
}

export default Login