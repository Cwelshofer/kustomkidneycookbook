import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./recipeProvider"
import "./recipe.css"

export const RecipeDetails = (props) => {
    const { deleteRecipe, getRecipeById } = useContext(RecipeContext)

    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        console.log(props)
        const recipeId = parseInt(props.match.params.recipeId)
        console.log(recipeId)
    
        getRecipeById(recipeId)

            .then(setRecipe)
    }, [])

    return (
        <section className="recipe">
            <h3 className="recipe__name">{recipe.name}</h3>
            <div className="recipe__ingredients">{recipe.ingredients}</div>
            <div className="recipe__direction"> {recipe.directions}</div>

            <button onClick={() => {
                deleteRecipe(recipe.id)
                    .then(() => {
                        props.history.push("/recipes")
                    })
            }}
            >Delete Recipe</button>

            <button onClick={() => {
                props.history.push(`/recipes/edit/${recipe.id}`)
            }}>Edit</button>
        </section>
    )
}