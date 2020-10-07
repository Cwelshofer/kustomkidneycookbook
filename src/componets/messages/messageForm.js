import React, { useContext, useRef, useEffect, useState } from "react";
import { MessageContext } from "./messageProvider.js"

import "./message.css"

export const MessageForm = (props) => {
    const { addMessage, messages, updateMessages, getMessages } = useContext(MessageContext)

    // Component state
    const [message, setMessage] = useState({})


    // Is there a a URL parameter??


    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newMessage = Object.assign({}, message)          // Create copy
        newMessage[event.target.name] = event.target.value    // Modify copy
        setMessage(newMessage)                                 // Set copy as new state
    }

    /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */


    // Get animals from API when component initializes
    useEffect(() => {
        getMessages()
    }, [])

    // Once provider state is updated, determine the animal (if edit)
    useEffect(() => {

    }, [messages])


    const constructNewMessage = () => {
        const Messages = parseInt(message.message)

        if (messages === "") {
            window.alert("Please enter message")
        } else {
           debugger
                    // POST
                    addMessage({
                        message: message.messages,
                    })
                    

             
        }


    }



    return (
        <form className="MessageForm">
            <div className="form-group">
                <label htmlFor="so"></label>
                <input type="text" name="messages" required className="form-control" className="messageForm"
                    placeholder="Message"
                    defaultValue={message.name}
                    onChange={handleControlledInputChange}
                />
            </div>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewMessage()
                }}
                className="submitButton">
                {"Post Message"}
            </button>
        </form>
    )
}
