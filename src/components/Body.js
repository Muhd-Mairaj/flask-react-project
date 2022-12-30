import Container from 'react-bootstrap/Container'
import FlashMessage from './FlashMessage';


function Body({ children }) {
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