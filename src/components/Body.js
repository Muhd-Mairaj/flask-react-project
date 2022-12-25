import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function Body({ loggedIn, children }) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {loggedIn ? 
          <Container className="Content">
            {children}
          </Container>
          
        }
      </Stack>
    </Container>
  )
}

export default Body;