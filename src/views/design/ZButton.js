import { Button } from 'react-bootstrap'
import React from 'react'
// Button styled in the colors of Zurich
function ZButton(props) {
    return (
        <div>
            <Button className="zbutton" onClick={props.onClick}>
                {props.children}
            </Button>
            
        </div>
    )
}

export default ZButton
