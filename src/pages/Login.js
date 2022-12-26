import Body from '../components/Body';


function Login() {
  const [formErrors, setFormErrors] = useState({})
  
  return (
    <Body loggedIn>
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
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