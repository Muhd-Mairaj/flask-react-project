import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Body from '../components/Body';
import '../index.css';

function Home() {
  const [profileData, setProfileData] = useState(null)

    /* METHOD 2 - WORKS */
function getData() {
  fetch("/profile").then(response => response.json()).then(data => {
        setProfileData({
            name: data.name,
            about: data.about,
            query: data.query,
            items: data.items,
        })
        


      }).catch(error => console.log(error))
    }
    /** END METHOD 2 */

  return (
    <Body loggedIn>
      <button onClick={getData}>Get Data</button>
            {profileData && <div>
                  <p>Profile name: {profileData.name}</p>
                  <p>About me: {profileData.about}</p>
                </div>
            }
    </Body>
  )
}

export default Home;

