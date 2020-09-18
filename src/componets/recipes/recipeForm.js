import React, { useContext, useState, useEffect } from "react"
import { RecipeContext } from "./recipeProvider"



export const RecipeForm = (props) => {
    
    // Use the required context providers for data
    const { addRecipe, recipes, updateRecipe, getRecipes } = useContext(RecipeContext)

    // Component state
    const [recipe, setRecipe] = useState({})

    // Is there a a URL parameter??
    const editMode = props.match.params.hasOwnProperty("recipeId")  // true or false

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newRecipe = Object.assign({}, recipe)          // Create copy
        newRecipe[event.target.name] = event.target.value    // Modify copy
        setRecipe(newRecipe)                                 // Set copy as new state
    }

    /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */
    const getRecipeInEditMode = () => {
        if (editMode) {
            const recipeId = parseInt(props.match.params.recipeId)
            const selectedRecipe = recipes.find(a => a.id === recipeId) || {}
            setRecipe(selectedRecipe)
        }
    }

    // Get animals from API when component initializes
    useEffect(() => {
        getRecipes()
    }, [])

    // Once provider state is updated, determine the animal (if edit)
    useEffect(() => {
        getRecipeInEditMode()
    }, [recipes])


    const constructNewRecipe = () => {
        const ingredients = parseInt(recipe.ingredients)

        if (ingredients === "") {
            window.alert("Please enter ingredients")
        } else {
            if (editMode) {
                // PUT
                updateRecipe({
                    id: recipe.id,
                    name: recipe.name,
                    ingredients: recipe.ingredients,
                    directions: recipe.directions
                })
                    .then(() => props.history.push("/recipes"))
            } else {
                // POST
                addRecipe({
                    name: recipe.name,
                    ingredients: recipe.ingredients,
                    directions: recipe.directions
                })
                    .then(() => props.history.push("/recipes"))
            }
        }
    }

return (
                    
                    <form className="recipeForm">
                        <h2 className="recipeForm__title">{editMode ? "Update Recipe" : "New Recipe"}</h2>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="name">Recipe name: </label>
                                <input type="text" name="name" required autoFocus className="form-control"
                                    placeholder="Recipe name"
                                    defaultValue={recipe.name}
                                    onChange={handleControlledInputChange}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="ingredients">Recipe ingredients: </label>
                                <input type="text" name="ingredients" required className="form-control"
                                    placeholder="Recipe ingredients"
                                    defaultValue={recipe.ingredients}
                                    onChange={handleControlledInputChange}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="directions">directions: </label>
                                <input type="text" name="directions" required className="form-control"
                                    value={recipe.directions}
                                    onChange={handleControlledInputChange}
                                    />
                            </div>
                        </fieldset>

                        <button type="submit"
                            onClick={evt => {
                                evt.preventDefault()
                                constructNewRecipe()
                            }}
                            className="btn btn-primary">
                            {editMode ? "Save Updates" : "Save Recipe"}
                        </button>
                    </form>
                )
            }
        
    
    