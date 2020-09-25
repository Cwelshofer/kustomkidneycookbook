import React, { useContext, useState, useEffect } from "react"
import { Recipe } from "./recipe"
import { Link } from "react-router-dom"

export const RecipePage = (props) => {

    return (
        <>
        <div className="recipeNames"><b>List of Recipes</b></div>
        <Link className="recipeLink" to={'/addRecipe'}>
            add Recipe
        {Recipe.directions}
    </Link>
    </>
    )
    }