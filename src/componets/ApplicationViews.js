import React from "react"
import { Route } from "react-router-dom"
import { RecipeProvider } from "./recipes/recipeProvider"
import { RecipeList } from "./recipes/recipeList"
import { FriendProvider } from "./friends/friendProvider"
import { FriendList } from "./friends/friendList"
import { RecipeForm } from "./recipes/recipeForm"
import { DietForm } from "./recipes/dietForm"
import { RecipeDetails } from "./recipes/recipeDetail"
import { RecipePage } from "./recipes/recipePage"


export const ApplicationViews = (props) => {
    return (
        <>
            <RecipeProvider>
                
            
                {/* Render the location list when http://localhost:3000/recipes */}

                <Route path="/recipes" render={
                    props => <RecipePage {...props} />
                } />

                <Route exact path="/recipes" render={(props) => {
                            return  <RecipeList history={props.history} />
                            
                        }} />

                <Route path="/recipes/:recipeId(\d+)" render={
                    props => <RecipeDetails {...props} />
                } />
                
                <Route path="/recipes/edit/:recipeId(\d+)" render={
                            props => <RecipeForm {...props} />
                    
                        } />
                
        
            </RecipeProvider>

            <FriendProvider>
                {/* Render the location list when http://localhost:3000/friends */}
                <Route exact path="/friends">
                    <FriendList />
                    
                </Route>
            </FriendProvider>

            <RecipeProvider>
                {/* Render the location list when http://localhost:3000/addRecipe */}
                <Route exact path="/addRecipe" render={(props) => {
                    return <RecipeForm {...props} />
                    
                }} />

            </RecipeProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("recipe_customer")
                    props.history.push("/login")
                }
            } />

            <RecipeProvider>
                {/* Render the location list when http://localhost:3000/*/}
                <Route exact path="/">
                    <DietForm />
                </Route>
            </RecipeProvider>
        </>
    )
}