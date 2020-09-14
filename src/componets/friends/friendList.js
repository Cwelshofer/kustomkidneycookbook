import React, { useContext, useEffect } from "react"
import { FriendContext } from "./friendProvider"
import { Friend } from "./friend"
import "./friend.css"

export const FriendList = () => {
    // This state changes when `getLocations()` is invoked below
    const { friends, getFriends } = useContext(FriendContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("FriendList: Initial render before data")
        getFriends()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("FriendList: Friend state changed")
        console.log(friends)
    }, [friends])

    return (
        <div className="friends">
        {
            friends.map(fri => <Friend key={fri.id} friend={fri} />)
        }
        </div>
    )
}