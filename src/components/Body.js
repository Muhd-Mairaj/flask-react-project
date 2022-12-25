import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function Body({ loggedIn, children }) {
  return (
    // <Container fluid>
      <Stack direction="horizontal" className="Body">
        {loggedIn && <Container fluid className="Content">
            {children}
          </Container>
        }
      </Stack>
    // </Container>
  )
}

export default Body;