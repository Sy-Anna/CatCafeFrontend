import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useStorageState from "use-storage-state";

import cartIcon from "@assets/img/icons/cartIcon2.png";
import profileIcon from "@assets/img/icons/profileIcon.png";
import logoSmall from "@assets/img/logoSmall.png";
import type { User } from "@libs/types";

export default function NavbarComponent() {
    const [user] = useStorageState<User | null>("user");
    const [cartContent] = useStorageState<
        Array<{ id: number; quantity: number }>
    >("cart", {
        defaultValue: [],
    });

    // darkMode
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "true";
    });
    const toggleDarkMode = () => {
        const newVal = !dark;
        setDark(newVal);
        localStorage.setItem("theme", newVal.toString());
        document.body.setAttribute("dark", newVal.toString());
    };
    useEffect(() => {
        const saved = localStorage.getItem("theme") === "true";
        document.body.setAttribute("dark", saved.toString());
        setDark(saved);
    }, []);

    return (
        <Navbar expand="lg" fixed="top" className="navbar">
            <Navbar.Brand className="navBrand align-self-center" href="/Home">
                <img
                    src={logoSmall}
                    width="40"
                    height="40"
                    className="d-inline-block align-top logo"
                    alt="Cat Cafe logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="ms-auto align-self-center"
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {user && user.role === "WORKER" ? (
                        <>
                            <NavLink
                                className="navLink"
                                href="/ManageReservations"
                            >
                                Asztalfoglalások kezelése
                            </NavLink>
                            <NavLink className="navLink" href="/Cargo">
                                Webshop kezelése
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink className="navLink" href="/Home">
                                Főoldal
                            </NavLink>
                            <NavLink className="navLink" href="/Blog">
                                Blog
                            </NavLink>
                            <NavLink className="navLink" href="/Gallery">
                                Galéria
                            </NavLink>
                            <NavLink className="navLink" href="/Booking">
                                Asztalfoglalás
                            </NavLink>
                            <NavLink className="navLink" href="/Webshop">
                                Webshop
                            </NavLink>
                            <NavLink className="navLink" href="/Contact">
                                Kapcsolat
                            </NavLink>
                            <NavLink className="navLink" href="/About">
                                Rólunk
                            </NavLink>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
            <div className="d-flex gap-3 align-items-center">
                <Form.Check
                    className="navSwitch"
                    type="switch"
                    checked={dark}
                    onChange={toggleDarkMode}
                />
                <a className="navButton btn btn-primary" href="/Cart">
                    <img className="navIcon" src={cartIcon} alt="cart icon" />
                    {cartContent.length > 0 && (
                        <span className="cartCount">{cartContent.length}</span>
                    )}
                </a>
                <a className="navButton btn btn-primary" href="/Profile">
                    <img
                        className="navIcon"
                        src={profileIcon}
                        alt="profile icon"
                    />
                </a>
            </div>
        </Navbar>
    );
}
