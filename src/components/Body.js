import Container from 'react-bootstrap/Container'

function Body({ loggedIn, children }) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {}
        <Container className="Content">
          {children}
        </Container>
      </Stack>
    </Container>
    <Container>
      {children}
    </Container>
  )
}

export default Body;