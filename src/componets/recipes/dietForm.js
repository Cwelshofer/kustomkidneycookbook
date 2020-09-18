import React, { useContext, useRef, useEffect } from "react"
import "./recipe.css"

export const DietForm = (props) => {

    const name = useRef(null)
    const ingredients = useRef(null)
    const directions = useRef(null)

    return (
        <form className="RecipeForm">
            <h2 className="recipeForm__title">Intoduction to Kidney Renal Diet</h2>
            <fieldset>
                <div className="form-group">
                    The kidney diet is a very low sodium diet to follow. It is a very limiting diet but is not too bad once you get used to it. 
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Ingredients">Ingredients: </label>

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Directions">Directions: </label>

                </div>
            </fieldset>
        </form>
    )
}