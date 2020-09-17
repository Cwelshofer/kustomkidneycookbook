import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const RecipeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = () => {
        return fetch("http://localhost:8088/recipes")
            .then(res => res.json())
            .then(setRecipes)
    }

    const getRecipeById = (id) => {
        return fetch(`http://localhost:8088/recipes/${id}`)
            .then(res => res.json())
    }

    const addRecipe = (recipe) => {
        return fetch("http://localhost:8088/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
            .then(getRecipes)
    }

    const updateRecipe = recipe => {
        return fetch(`http://localhost:8088/recipes/${recipe.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
            .then(getRecipes)
    }

    const deleteRecipe = (id) => {
        return fetch(`http://localhost:8088/recipes/${id}`, {
            method: "DELETE"
        })
            .then(getRecipes)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <RecipeContext.Provider value={{
            recipes, addRecipe, getRecipes, updateRecipe, deleteRecipe, getRecipeById
        }}>
            {props.children}
        </RecipeContext.Provider>
    )
}