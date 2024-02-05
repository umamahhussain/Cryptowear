import React from 'react';
import './App.css';
import NavBar from './pages/navbar';
import Login from './pages/login'
import About from './pages/about'
import Home from './pages/home'
import AddItem from './pages/additem'
import Contact from './pages/contact'
import Payment from './pages/payment'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="additem" element={<AddItem/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="payment" element={<Payment/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
