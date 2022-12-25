import Container from 'react-bootstrap/Container'

function Body({ loggedIn, children }) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {loggedIn && <Container className="Content">
            {children}
          </Container>
        }
      </Stack>
    </Container>
  )
}

export default Body;