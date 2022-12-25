import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Test from './Components/Test'
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <BrowserRouter>

      <header className="App-header">
        <Sidebar/>
      </header>

      <Container fluid className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
        </Routes>
      </Container>

    </BrowserRouter>
  );
}


export default App;
