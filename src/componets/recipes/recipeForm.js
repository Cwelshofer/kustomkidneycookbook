import React, { useContext, useRef, useEffect } from "react"
import { RecipeContext } from "./recipeProvider"
import "./recipe.css"

export const RecipeForm = (props) => {
    const { addRecipe, getRecipes } = useContext(RecipeContext)
    
    

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.
        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const ingredients = useRef(null)
    const directions = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getRecipes()
    }, [])

    const constructNewRecipe = (props) => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        // const locationId = parseInt(location.current.value)
        // const animalId = parseInt(animal.current.value)
        console.log(directions.current.value)
        if (ingredients === "") {
            window.alert("Please enter ingredients")
        } else {
            addRecipe({
                name: name.current.value,
                ingredients: ingredients.current.value,
                directions: directions.current.value
            })
            .then(() => props.history.push("/"))
        }
    }

    return (
        <form className="RecipeForm">
            <h2 className="recipeForm__title">New Recipe</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="recipeName">Recipe name: </label>
                    <input type="text" id="recipeName" ref={name} required autoFocus className="form-control" placeholder="Recipe name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Ingredients">Ingredients: </label>
                  <input type="text" id="Ingredients" ref={ingredients} required autoFocus className="form-control" placeholder="Ingredients" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="Directions">Directions: </label>
                  <input type="text" id="Directions" ref={directions} required autoFocus className="form-control" placeholder="Directions" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewRecipe()
                }}
                className="btn btn-primary">
                Save Recipe
            </button>
        </form>
    )
}