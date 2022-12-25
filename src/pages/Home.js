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
      {profileData && <Table striped bordered variant="dark" responsive="lg">
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 2 }).map((_, index) => (
                <th key={index}>Column</th>
              ))}
            </tr>
          </thead>
          {Array.from({ length: profileData.items.length }).map((_, index) => (
              <th key={index}>Column</th>
            ))}
          <tbody>
            <tr>
              <td>1</td>
              <td>Row</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Row</td>
            </tr>
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
