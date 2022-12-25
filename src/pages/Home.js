import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import Body from '../components/Body';
import '../index.css';

function Home() {
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    fetch("/profile").then(response => response.json()).then(data => {
      console.log(data.items)
      setProfileData({
        items: data.items
      })
    }).catch(error => console.log(error))
  }, []);
  
  return (
    <Body loggedIn>
      {profileData === && <Table striped bordered variant="dark" responsive="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: profileData.items.length }).map((_, index) => (
              <tr className={(index === 0) ? "bg-danger" : ""}>
                <td>{index + 1}</td>
                <td key={index + 1}>{profileData.items[index].item}</td>
                <td>{profileData.items[index].expiry}</td>
              </tr>
            ))}
          </tbody>
        </Table>}
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
