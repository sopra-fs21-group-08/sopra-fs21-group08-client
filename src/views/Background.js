import React from 'react'
import BackgroundImage from '../assets/img/background/zurich_background.jpg'

function Background() {
    return (
        <div className="background">
            <img src={BackgroundImage} height="100%" width="100%" />
        </div>
    )
}

export default Background
