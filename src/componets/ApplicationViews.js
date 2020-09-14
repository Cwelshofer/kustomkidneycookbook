import React from "react"
import { Route } from "react-router-dom"
import { RecipeProvider } from "./recipes/recipeProvider"
import { RecipeList } from "./recipes/recipeList"
import { FriendProvider } from "./friends/friendProvider"
import { FriendList } from "./friends/friendList"
import { RecipeForm } from "./recipes/recipeForm"

export const ApplicationViews = (props) => {
return (
    <>
    <RecipeProvider>
    {/* Render the location list when http://localhost:3000/recipes */}
    <Route exact path="/recipes">
    <RecipeList />
    </Route>
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

</>
)
}