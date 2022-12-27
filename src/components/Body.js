import Container from 'react-bootstrap/Container'
import FlashMessage from './FlashMessage';


function Body({ loggedIn, children }) {
  return (
    <>
        {loggedIn && <Container fluid className="Content">
            flash
            {children}
          </Container>
        }
    </>
  )
}

export default Body;