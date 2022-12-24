<<<<<<< HEAD
import React, { useState } from 'react'
import logo from './logo.svg';
// import axios from "axios";
import './App.css';


function App() {

  const [profileData, setProfileData] = useState(null)

  function getData() {
  /* METHOD 1 - WORKS (make async function) */
    // const response = await fetch("/profile", {
    //     method: "GET",
    // })

    // console.log(response)
    // if (response.ok) {
    //     const res = await response.json()
    //     setProfileData({
    //         name: res.name,
    //         about: res.about
    //     })
    // }
  /** END METHOD 1 */

  /* METHOD 2 - WORKS */
  fetch("/profile").then(response => response.json()).then(data => {
        setProfileData({
            name: data.name,
            about: data.about
          })
      }).catch(error => console.log(error))
  /** END METHOD 2 */
    console.log("getData called")
}
=======
>>>>>>> 07100e03d260f9d7bcc95c9b07a2a187affcd189

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={getData}>Get Data</button>

        {profileData && <div>
              <p>Profile name: {profileData.name}</p>
              <p>About me: {profileData.about}</p>
            </div>
        }

      </header>
    </div>
  );
}

export default App;
