import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Body from '../components/Body';
import '../index.css';

function Home() {
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    fetch("/profile").then(response => response.json()).then(data => {
      console.log(data.items)
      setProfileData(data.items)
    }).catch(error => console.log(error))
  }, []);
  
  return (
    <Body loggedIn>
      <Container fluid className="Home">

      {profileData ? <Table striped bordered variant="dark" responsive="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {profileData.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.item}</td>
                <td>{item.expiry}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
      </Container>
    </Body>
  )
}

export default Home;


    /* METHOD 2 - WORKS */
// function getData() {
//   fetch("/profile").then(response => response.json()).then(data => {
//         console.log(data.items)
//         setProfileData({
//             items: data.items,
//         })
//       }).catch(error => console.log(error))
//     }
    /** END METHOD 2 */
