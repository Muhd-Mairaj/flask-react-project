import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';

import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';

import FlashProvider from './contexts/FlashProvider'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  
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
