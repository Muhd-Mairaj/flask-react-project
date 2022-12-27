import Container from 'react-bootstrap/Container'
import FlashMessage from './FlashMessage';
import FlashProvider from '../contexts/FlashProvider'


function Body({ loggedIn, children }) {
  return (
    <>
      {/* <FlashProvider> */}
        {loggedIn && <Container fluid className="Content">
            <FlashMessage />
            {children}
          </Container>
        }
      {/* </FlashProvider> */}
    </>
  )
}

export default Body;