import Container from 'react-bootstrap/Container'
import FlashMessage from './FlashMessage';
import {useAuth0} from 'auth0'


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