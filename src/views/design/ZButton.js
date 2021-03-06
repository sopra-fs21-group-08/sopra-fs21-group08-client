import { Button } from 'react-bootstrap'
import React from 'react'
// Button styled in the colors of Zurich
function ZButton(props) {
    return (
        <div>
            <Button type={props.type} className="zbutton" disabled={props.disabled} onClick={props.onClick}>
                {props.children}
            </Button>
            
        </div>
    )
}

export default ZButton
