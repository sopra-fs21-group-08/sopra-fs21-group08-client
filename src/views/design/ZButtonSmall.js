import { Button } from 'react-bootstrap'
import React from 'react'
// Button styled in the colors of Zurich
function ZButton(props) {
    return (
        <div>
            <Button  variant="light" className="zbuttonsmall" size="sm" style={{ width: '7rem', height: '2rem', margin: '0.3rem' }}>
                {props.children}
            </Button>
            
        </div>
    )
}

export default ZButton
