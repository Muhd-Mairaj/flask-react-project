import Container from 'react-bootstrap/Container'
import FlashMessage from './FlashMessage';
import {useAuth0} from '@auth0/auth0-react';



function Body({ loggedIn, children }) {
  const {isAuthenticated} = 
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