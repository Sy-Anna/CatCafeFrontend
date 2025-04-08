import './css/App.css';
import './css/AppDark.css';
import 'bootstrap/dist/css/bootstrap.css';
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
import Cart from "./pages/Cart";
import Profile from './pages/Profile';
import Cargo from './pages/Cargo.tsx';

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
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/Cargo' element={<Cargo/>}/>
        
      </Routes>
    </Router>
      )
}

export default App
