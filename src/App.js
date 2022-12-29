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
import ApiProvider from './contexts/ApiProvider';
import UserProvider from './contexts/UserProvider';
import PrivateComponent from './components/PrivateComponent';
import PublicComponent from './components/PublicComponent';
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
            <ApiProvider>
              <Header loggedIn/>
                <Routes>
                  <Route path="/login" element={
                    <PublicComponent></PublicComponent>
                  }></Route>
                  <Route path="/register" element={<Register/>}></Route>

                  <Route path="/" element={<PrivateComponent><Home/></PrivateComponent>}></Route>
                  <Route path="/test" element={<PrivateComponent><Test/></PrivateComponent>}></Route>
                  <Route path="/logout" element={<PrivateComponent><Logout/></PrivateComponent>}></Route>
                </Routes>
            </ApiProvider>
          </FlashProvider>

        </BrowserRouter>
      {/* </Auth0Provider> */}
    </Container>

  );
}


export default App;
