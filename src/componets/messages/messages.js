import React from "react"
import "./message.css"
import { Link } from "react-router-dom"

export const Message = ({ message }) => (
    <section className="message">
    <h3 className="message__name">
            { message.name }
    </h3>
</section>
)