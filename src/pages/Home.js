import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import B
import '../index.css';

function Home() {
  const [profileData, setProfileData] = useState(null)

    /* METHOD 2 - WORKS */
function getData() {
  fetch("/profile").then(response => response.json()).then(data => {
        setProfileData({
            name: data.name,
            about: data.about
          })

      }).catch(error => console.log(error))
    }
    /** END METHOD 2 */

  return (
    <Container>
      <button onClick={getData}>Get Data</button>
            {profileData && <div>
                  <p>Profile name: {profileData.name}</p>
                  <p>About me: {profileData.about}</p>
                </div>
            }
    </Container>
  )
}

export default Home;

