import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Test from './components/Test';
import Home from './pages/Home';
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
        </Routes>
      </BrowserRouter>
      
    </Container>

  );
}


export default App;
