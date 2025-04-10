import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "@pages/About";
import Blog from "@pages/Blog.tsx";
import Booking from "@pages/Booking";
import Cargo from "@pages/Cargo.tsx";
import Cart from "@pages/Cart";
import Contact from "@pages/Contact";
import Gallery from "@pages/Gallery";
import Home from "@pages/Home.tsx";
import Profile from "@pages/Profile";
import Webshop from "@pages/Webshop";
import NavbarComponent from "@ui/Navbar";
import { Spinner } from "react-bootstrap";
import { UsersApi } from "./libs/api/users";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (location.pathname === "/") {
            location.replace("/Home");
            return;
        }

        (async () => {
            const [err, userData] = await UsersApi.me();
            if (!err && userData) {
                localStorage.setItem("user", JSON.stringify(userData));
            }
            setLoading(false);
        })();
    }, []);

    if (loading) return <Spinner animation="border" role="status" />;

    return (
        <Router>
            <NavbarComponent />

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
                <Route path="/Cargo" element={<Cargo />} />
            </Routes>
        </Router>
    );
}
