import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavbarComponent from './Navbar.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Webshop from "./pages/Webshop";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Webshop" element={<Webshop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
      )
}

export default App
