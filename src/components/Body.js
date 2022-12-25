import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function Body({ loggedIn, children }) {
  return (
    <>
        {loggedIn && <Container fluid className="Content">
            {children}
          </Container>
        }
        </>
  )
}

export default Body;