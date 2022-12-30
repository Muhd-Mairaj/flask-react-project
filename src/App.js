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
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicComponent';
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
              <UserProvider>
                <Header loggedIn/>
                  <Routes>
                    <Route path="/login" element={
                      <PublicRoute><Login/></PublicRoute>
                    } />
                    
                    <Route path="/register" element={
                      <PublicRoute><Register/></PublicRoute>
                    } />
                    
                    <Route path="*" element={
                      <PrivateRoute>
                        <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="/test" element={<Test/>} />
                          <Route path="/logout" element={<Logout/>} />
                          <Route path="*" element={<Home/>} />
                        </Routes>
                      </PrivateRoute>
                    }/>

                  </Routes>
              </UserProvider>
            </ApiProvider>
          </FlashProvider>

        </BrowserRouter>
      {/* </Auth0Provider> */}
    </Container>

  );
}


export default App;
