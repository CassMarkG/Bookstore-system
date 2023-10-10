import React from "react";
import dog from "../assets/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg";
import books from "../assets/henry-be-lc7xcWebECc-unsplash.jpg";

function Navbar(){
    return(
        <>
            <div className="navContainer">
                <div className="logo">
                <a href="">DigiBooks<span>.</span></a>
                </div>
                <ul className="navItems">
                    <li><a href="">Home</a></li>
                    <li><a href="">Books</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Wishlist</a></li>
                </ul>
                <div className="avatar">
                    <img src={dog} alt="" />
                </div>
            </div>
            <div className="loader"></div>
            <div className="imageContainer">
                <img src={books} alt="" />
            </div>
        </>
    )
}

export default Navbar;