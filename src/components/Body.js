import Container from 'react-bootstrap/Container'
import FlashMessage from './FlashMessage';


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