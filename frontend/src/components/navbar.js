import React from "react";
import "../assests/css/navbar.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
const navigate = useNavigate()
  return (
    <header className="navbar">
      <button onClick={() => navigate("/")}>Product</button>
      <button onClick={() => navigate("/wishlist")}>wishlist</button>
      <button onClick={() => navigate("/user")}>Account</button>
    </header>
  );
}

export default Navbar;
