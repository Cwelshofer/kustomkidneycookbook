import React from "react"
import "./recipe.css"
import { Link } from "react-router-dom"

export const Recipe = ({ recipe }) => (
    <section className="recipe">
    <h3 className="recipe__name">
        <Link to={`/recipes/${recipe.id}`}>
            { recipe.name }
        </Link>
    </h3>
</section>
)
