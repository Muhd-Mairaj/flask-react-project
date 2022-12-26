import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function Body({ loggedIn, children }) {
  return (
    <>
        {loggedIn && {children}
        }
    </>
  )
}

export default Body;