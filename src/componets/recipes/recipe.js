import React from "react"
import "./recipe.css"
import { Link } from "react-router-dom"

export const Recipe = ({ recipe }) => (
    <>
        <section className="recipeList">
        </section>
        <section className="recipe">
<ul>
            <li className="recipe__name">
                <Link to={`/recipes/${recipe.id}`}>
                    {recipe.name}
                </Link>
            </li>
            </ul>
        </section>
    </>
)
