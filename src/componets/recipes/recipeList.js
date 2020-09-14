import React, { useContext, useEffect } from "react"
import { RecipeContext } from "./recipeProvider"
import { Recipe } from "./recipe"
import "./recipe.css"

export const RecipeList = () => {
    // This state changes when `getLocations()` is invoked below
    const { recipes, getRecipes } = useContext(RecipeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("RecipeList: Initial render before data")
        getRecipes()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("RecipeList: Recipe state changed")
        console.log(recipes)
    }, [recipes])

    return (
        <div className="recipes">
        {
            recipes.map(rec => <Recipe key={rec.id} recipe={rec} />)
        }
        </div>
    )
}