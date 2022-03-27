import React from "react"
import reactLogo from "../src/React-icon.png"

export function Header() {
    return(
        <nav className="nav-bar">
            <img 
            src= {reactLogo} 
            className="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

