
import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/navBar"
import { Login } from "./auth/LoginForm"
import { Register } from "./auth/RegisterForm"
import "./kustomKidneyCookbook.css"

export const Kustom = () => (
    <>
        <Route render={() => {
             {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            // } else {
            //     return <Redirect to="/login" />
            // }
        }}} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)