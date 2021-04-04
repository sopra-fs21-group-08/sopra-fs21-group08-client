import React from 'react'
import BackgroundImage from '../assets/img/background/zurich_background.jpg'

function Background() {
    return (
        <div style={{position: "relative", height: "100vh", width: "100vw", zIndex: -10}}>
            <img src={BackgroundImage} height="100%" width="100%" />
            
        </div>
    )
}

export default Background
