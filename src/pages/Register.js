import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Body from '../components/Body';
import InputField from '../components/InputField';

import { useFlash } from '../contexts/FlashProvider';
import { useApi } from '../contexts/ApiProvider';


function Register() {
  const api = useApi()
  const { flash } = useFlash();
  const navigate = useNavigate()
  const [formErrors, setFormErrors] = useState({})
  const usernameField = useRef()
  const passwordField = useRef()
  const confirmField = useRef()

  useEffect(() => {
    usernameField.current.focus();
  }, []);


  async function handleSubmit(event) {
    event.preventDefault()

    const username = usernameField.current.value
    const password = passwordField.current.value
    const confirm = confirmField.current.value

    const errors = {};
    if (!username) {
      errors.username = "This field must be filled"
    }
    if (!password) {
      errors.password = "This field must be filled"
    }
    if (!confirm) {
      errors.confirm = "This field must be filled"
    }

    setFormErrors(errors)
    if (Object.keys(errors).length > 0) {
      return
    }

    // Register
    const response = await api.post("/register", {
      username: usernameField.current.value,
      password: passwordField.current.value,
      confirm: confirmField.current.value
    })

    console.log("response: ", response)

    // const body = await response.json()
    console.log("response.body ", response.body)
    if (!response.ok) {
      setFormErrors(response.body)
      passwordField.current.value = ""
      confirmField.current.value = ""
      return
    }
    else {
      setFormErrors({})
      flash('You have successfully registered!', 'success');
      navigate('/login');
    }
  }

  return (
    <Body>
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

      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={5} lg={4} xl={3}>
          <hr />
          <p className="py-2">Already have an account? <Link to="/login">Login here</Link>!</p>
        </Col>
      </Row>
    </Body>
  );
}

export default Register