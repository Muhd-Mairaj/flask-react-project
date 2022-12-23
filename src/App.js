import React, { useState } from 'react'
import logo from './logo.svg';
// import axios from "axios";
import './App.css';


function App() {

  const [profileData, setProfileData] = useState(null)

  function getData() {
    // const response = await fetch("/profile", {
    //     method: "GET",
    // })

    // console.log(response)
    // if (response.ok) {
    //     setProfileData({
    //         name: "yes",
    //         about: "no"
    //     })
    // }
    fetch("/profile").then(response => response.json()).then(data => {
            if (data) {
                console.log("data: " + data)
            setProfileData({
                profile_name: data.name,
                about: data.about
        })
    })
    .catch(error => console.log(error))
    axios({
    //     method: "GET",
    //     url: "/profile",
    // }).then(response => {
    //     const res = response.data
    //     console.log("res: ", res)
    //     setProfileData({
    //         name: "yes",
    //         about: "no"
    //     })
    // })
    // .catch(error => console.log(error))
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
              <p>Profile name: {profileData.name}</p>
              <p>About me: {profileData.about}</p>
            </div>
        }

      </header>
    </div>
  );
}

export default App;
