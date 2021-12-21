import React from "react";
import heroGrid from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroGrid} className="hero--grid" alt="grid of different images" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}