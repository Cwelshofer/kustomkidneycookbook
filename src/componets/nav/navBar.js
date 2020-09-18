import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Kustom Kidney Cookbook</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/recipes">Recipes</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/friends">Friends</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/addRecipe">Add a Recipe</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/logout">Logout</Link>
            </li>
        </ul>
    )
}