import React, { useContext, useState, useEffect, Component } from "react"
import { RecipeContext } from "./recipeProvider"



export const RecipeForm = (props) => {

    // Use the required context providers for data
    const { addRecipe, recipes, updateRecipe, getRecipes } = useContext(RecipeContext)

    // Component state
    const [recipe, setRecipe] = useState({})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

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
                    directions: recipe.directions,
                    source: recipe.sources,
                    image: image
                })
                    .then(() => props.history.push("/recipes"))
            } else {
                // POST
                addRecipe({
                    name: recipe.name,
                    ingredients: recipe.ingredients,
                    directions: recipe.directions,
                    source: recipe.sources,
                    image: image
                })
                    .then(() => props.history.push("/recipes"))
            }

              
        }
    }

    const uploadImage = async e => {
        debugger
        const files = e.target.files 
        const data = new FormData()
        data.append('file' ,files[0])
        data.append('upload_preset', 'kidneycookbook')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/cwelshofer/image/upload',
            {
                method: 'POST',
                body: data
            }

        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
        
    }
    console.log(image)

    return (

        <form className="recipeForm">
            <h2 className="recipeForm__title">{editMode ? "Update Creation" : "New Recipe"}</h2>
            <fieldset>
                {/* if in edit mode, populate the image at top of form otherwise populate with image upload field */}
                {editMode 
                ? (<div className="creation__image">
                    <img src={recipe.image} alt={recipe.name} style={{width: '300px'}} />
                </div>) : (
            
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" name="name" required autoFocus className="form-control" className="recipeForm"
                        placeholder="Recipe name"
                        defaultValue={recipe.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
                )}
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ingredients"> </label>
                    <input type="text" name="ingredients" required className="form-control" className="ingredientForm"
                        placeholder="Recipe ingredients"
                        defaultValue={recipe.ingredients}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="directions"></label>
                    <input type="text" name="directions" required className="form-control" className="directionForm"
                        placeholder="Recipe directions"
                        value={recipe.directions}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="sources"></label>
                    <input type="text" name="sources" required className="form-control" className="sourceForm"
                        placeholder="Recipe Source"
                         defaultValue={recipe.source}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            
            <div className= "App">
            <label htmlFor="creationImage"> Image: </label>
                    <input type="file" 
                            name="file" 
                            id="creationImage" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="Upload an image"
                            onChange={uploadImage} />
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                <img src={image} style={{width: '300px'}} alt="" />
                               
                            )}
                            
            </div>
            


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewRecipe()
                }}
                className="submitButton">
                {editMode ? "Save Updates" : "Save Recipe"}
            </button>
        </form>
                
    )
}


