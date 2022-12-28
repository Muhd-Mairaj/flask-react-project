import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';

import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';

import FlashProvider from './contexts/FlashProvider'
// import logo from './logo.svg';
// import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-pt44rf70pk8szrwn.us.auth0.com"
    clientId="uja7uL1qUdRfNYnyGGrQdFfOQeEAhECv"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

function App() {
  return (
    
    <Container fluid className="App">
        <FlashProvider>

      <BrowserRouter>
        <Header loggedIn/>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
      </BrowserRouter>
      
        </FlashProvider>
    </Container>

  );
}


export default App;
