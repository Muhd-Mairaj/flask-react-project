import Container from 'react-bootstrap/Container'

function Body({ loggedchildren }) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
        {sidebar && <Sidebar />}
        <Container className="Content">
          {children}
        </Container>
      </Stack>
    </Container>
    <Container>
      {children}
    </Container>
  )
}

export default Body;