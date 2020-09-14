import React from "react"
import "./friend.css"

export const Friend = ({ friend }) => (
    <section className="friend">
        <h3 className="friend__name">{friend.name}</h3>
    </section>
)