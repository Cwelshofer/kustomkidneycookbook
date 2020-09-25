import React, { useContext, useRef, useEffect } from "react";

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
                    The kidney diet is a very strict diet to follow. It is a very limiting diet but is not too bad once you get used to it. It requires you to limit the amount of fluids that you
                    drink everyday as well, which can be tough for some people. It is also important to watch your potassium, phosphorus, and protein. It is a diet that anyone can be on not just people
                    who have had some sort of kidney diease. It has helped me personally lose almost 50 pounds in a very short amount of time. So for people who really want to lose weight and still have
                    a natural diet, I think this is a good option for those people. Its not necessarily for everyone it involves eating a lot of bread which means a lot of carbs compared to other diets.
    
                </div>
            </fieldset>
            <fieldset>
                <h3>Kidney diet tips</h3>
                <div className="diet_tips">
                    <label htmlFor="diet_tips"> </label>
                    <ul>
            <li className="recipe__tips">
            Limit foods that are high in potassium.
            </li>
            <li>
            Limit milk and dairy products to 8 oz per day.
            </li>
            <li>
            Choose fresh fruits and vegetables.
            </li>
            <li>
            Avoid salt substitutes and seasonings with potassium.
            </li>
            <li>
            Avoid processed foods.
            </li>
            </ul>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Directions"> </label>

                </div>
            </fieldset>
        </form>
    )
}