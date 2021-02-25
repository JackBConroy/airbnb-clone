import React, { useState } from 'react'
import "./Banner.css"
import { Button } from "@material-ui/core"
import Search from "./Search"


function Banner() {
    const [showSearch, setShowSearch] = useState(false)


    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">{!showSearch ? "Search Dates" : "Hide"}</Button>
            </div>
            <div className="banner__info">
                <h1>Your world is worth sharing</h1>
                <h3>Turn your extra space into your next opportunity.</h3>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
