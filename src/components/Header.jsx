import React from "react";
import './header.css';
import image from "../assets/logo.png";

export default function Header() {
    return (
        <header className="header">
            <img src={image} alt="Chef Claude" />
            <h1>Chef Claude</h1>
        </header>
    );
}