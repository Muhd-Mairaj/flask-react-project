import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';



function App() {

  const [profileData] = useState(null)

  async function getData() {
    let response = await fetch("/profile")
    console.log(response.json())
    // fetch("/profile").then(response => {
    //     response.json()
    // }).then(data => {
    //         console.log("data: " + data)
    //     //     setProfileData({
    //     //         profile_name: data.name,
    //     //         about: data.about
    //     // })
    // }).catch(error => console.log(error))
    // .catch((error) => {
    //   if (error.response) {
    //     console.log(error.response)
    //     console.log(error.response.status)
    //     console.log(error.response.headers)
    //   }
    //   else {
    //     console.log("Something is happening here")
    //   }
    // })
    console.log("getData called")
}

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
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about}</p>
            </div>
        }

      </header>
    </div>
  );
}

export default App;
