import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const FriendContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
            .then(res => res.json())
            .then(setFriends)
    }

    const addFriend = friend => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friends)
        })
            .then(getFriends)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <FriendContext.Provider value={{
            friends, addFriend, getFriends
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}