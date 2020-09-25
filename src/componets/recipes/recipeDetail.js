import React, { useContext, useEffect, useState } from "react"
import { RecipeContext } from "./recipeProvider"
import "./recipe.css"

export const RecipeDetails = (props) => {
    const { deleteRecipe, getRecipeById, addRecipeComment } = useContext(RecipeContext)

    const [recipe, setRecipe] = useState({})


    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newRecipe = Object.assign({}, recipe)          // Create copy
        newRecipe[event.target.name] = event.target.value    // Modify copy
        setRecipe(newRecipe)                                 // Set copy as new state
    }

    useEffect(() => {
        console.log(props)
        const recipeId = parseInt(props.match.params.recipeId)
        console.log(recipeId)
    
        getRecipeById(recipeId)

            .then(setRecipe)
    }, [])

    return (
        <section className="recipe">
            <div className="recipe__image"> <img src={recipe.image} style={{width: '300px'}} alt="" /></div>
            <h3 className="recipe__name">{recipe.name}</h3>
            <div className="recipe__ingredients">Ingredients:{recipe.ingredients}</div>
            <br></br>
            <div className="recipe__direction">Directions: {recipe.directions}</div>
            <br></br>
            <div className="recipe__comments">Comments: {recipe.comments}</div>
            <br></br>
            <div className="recipe__source">Source: {recipe.source}</div>
            
            
            

            <button className="deleteButton" onClick={() => {
                deleteRecipe(recipe.id)
                    .then(() => {
                        props.history.push("/recipes")
                    })
            }}
            >Delete Recipe</button>

            <button className="editButton" onClick={() => {
                props.history.push(`/recipes/edit/${recipe.id}`)
            }}>Edit</button>

        </section>
    )
}