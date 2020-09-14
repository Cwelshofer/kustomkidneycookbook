import React from "react"
import "./recipe.css"

export const Recipe = ({ recipe }) => (
    <section className="recipe">
        <h3 className="recipe__name">{recipe.name}</h3>
        <address className="recipe__ingredients">Ingredients:{recipe.ingredients}</address>
    </section>
)
