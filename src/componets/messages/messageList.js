import React, { useContext, useEffect } from "react"
import { MessageContext } from "./messageProvider"
import { Message } from "./messages"
import "./message.css"

export const MessageList = () => {
    // This state changes when `getLocations()` is invoked below
    const { messages, getMessages } = useContext(MessageContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("MessageList: Initial render before data")
        getMessages()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("MessageList: Message state changed")
        console.log(messages)
    }, [messages])

    return (
        <div className="messages">
        {
            messages.map(mes => <Message key={mes.id} message={mes} />)
        }
        </div>
    )
}