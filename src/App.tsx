import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NavbarComponent from "./Navbar.tsx";
import About from "./pages/About";
import Blog from "./pages/Blog.tsx";
import Booking from "./pages/Booking";
import Cargo from "./pages/Cargo.tsx";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile";
import Webshop from "./pages/Webshop";

import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";
import "./css/AppDark.css";

export default function App() {
	return (
		<Router>
			<NavbarComponent />

			<Routes>
				<Route path='/Home' element={<Home />} />
				<Route path='/Blog' element={<Blog />} />
				<Route path='/Gallery' element={<Gallery />} />
				<Route path='/Booking' element={<Booking />} />
				<Route path='/Webshop' element={<Webshop />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/About' element={<About />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='/Profile' element={<Profile />} />
				<Route path='/Cargo' element={<Cargo />} />
			</Routes>
		</Router>
	);
}
