import Body from '../components/Body';


function Login() {
  return (
    eturn (
      <Body>
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
    <Body loggedIn>
      
    </Body>
  )
}

export default Login