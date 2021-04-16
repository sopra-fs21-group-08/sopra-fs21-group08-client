import { Button } from 'react-bootstrap'
import React from 'react'

// Button styled in the colors of Zurich
function TransportButton(props) {
    return (
        <div>
            <Button variant="outline-light" 
                size="sm" 
                disabled={props.number === 0} 
                onClick={props.onClick} 
                style={{fontSize: 10}}
            >
                {props.children} {props.number}
            </Button>
            
        </div>
    )
}

export default TransportButton