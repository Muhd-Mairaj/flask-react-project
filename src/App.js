import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [ profileData, setProfileData ] = useState(null)
  function getData() {

    fetch('/profile').then((response) => {
      setProfileData({
        name: response.data.name,
        about: response.data.about,
      })
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
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
            <p>name: { profileData.name }</p>
            <p>about: { profileData.about }</p>
          </div>
        }
        
      </header>
    </div>
  );
}

export default App;
