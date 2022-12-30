import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Body from '../components/Body';
import InputField from '../components/InputField';
import { useFlash } from '../contexts/FlashProvider';
import { useApi } from '../contexts/ApiProvider';

function Login() {
  const api = useApi()
  const navigate = useNavigate()
  const location = useLocation()
  const flash = useFlash()
  const [formErrors, setFormErrors] = useState({})
  const usernameField = useRef()
  const passwordField = useRef()

  useEffect(() => {
    usernameField.current.focus()
  }, []);


  async function handleSubmit(event) {
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
    const result = await api.login(username, password)
    if (result === "ok") {
      flash('You have successfully logged in!', 'success')
      console.log(location)
      console.log(location.state)
      console.log(location.state.next)
      let next = "/"
      if (loaction.state && location.state.next) {
      }
        return <Navigate to=""
      navigate('/')
    }
    else if (result === "fail") {
      flash("Invalid username or password", "danger")
      setFormErrors({
        username: "Invalid username or password",
        password: "Invalid username or password"
      })
      console.log("result: ", result)
    }
  }
  
  return (
    <Body loggedIn>
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
          <Row className="justify-content-center py-3">
            <Col xs={10} sm={3} lg={2} xl={1}>
              <Button variant="dark" className="w-100" type="submit">Login</Button>
            </Col>
          </Row>
        </Col>
      </Form>
      
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={5} lg={4} xl={3}>
          <hr />
          <p className="py-2">Don&apos;t have an account? <Link to="/register">Register here</Link>!</p>
        </Col>
      </Row>
      
    </Body>
  )
}

export default Login