import Container from 'react-bootstrap/Container'

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