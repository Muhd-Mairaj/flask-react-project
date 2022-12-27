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


function App() {
  return (
    
    <Container fluid className="App">

      <BrowserRouter>
        <Header loggedIn/>


        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </Container>

  );
}


export default App;
