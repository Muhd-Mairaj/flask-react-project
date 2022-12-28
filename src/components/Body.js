import Container from 'react-bootstrap/Container'
import FlashMessage from './FlashMessage';
import 


function Body({ loggedIn, children }) {
  return (
    <>
        {loggedIn && <Container fluid className="Content">
            <FlashMessage />
            {children}
          </Container>
        }
    </>
  )
}

export default Body;