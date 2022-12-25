import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import Body from '../components/Body';
import '../index.css';

function Home() {
  const [profileData, setProfileData] = useState(null)

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

  return (
    <Body loggedIn>
      <button onClick={getData}>Get Data</button>
            {profileData.items && items.map()<div>
                  <p>Profile name: {profileData.name}</p>
                  <p>About me: {profileData.about}</p>
                </div>
            }
    </Body>
  )
}

export default Home;

