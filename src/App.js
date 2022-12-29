import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';

import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

import FlashProvider from './contexts/FlashProvider';
import UserProvider from './contexts/UserProvider';
import 
// import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (

    <Container fluid className="App">
      {/* <Auth0Provider
        domain="dev-pt44rf70pk8szrwn.us.auth0.com"
        clientId="uja7uL1qUdRfNYnyGGrQdFfOQeEAhECv"
        redirectUri={window.location.origin}
      > */}
        <BrowserRouter>

          <FlashProvider>
            <UserProvider>
              <Header loggedIn/>

                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/test" element={<Test/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/logout" element={<Logout/>}></Route>
                </Routes>

            </UserProvider>
          </FlashProvider>

        </BrowserRouter>
      {/* </Auth0Provider> */}
    </Container>

  );
}


export default App;
