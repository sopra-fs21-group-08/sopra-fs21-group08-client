import { Button } from 'react-bootstrap'
import React from 'react'

// Button styled in the colors of Zurich
function TransportButton(props) {
    const colours = {
        'Tram' : 'blue',
        'Bus' : 'green',
        'Train': 'red', 
        'Black': 'black', 
        'Double': 'grey'
    }

    return (
        <div>
            <Button variant="outline-light" 
                size="sm" 
                disabled={props.number === 0 || props.id != localStorage.getItem("userId") || props.isMoving == false}
                onClick={props.onClick} 
                style={{fontSize: 10, background:colours[props.children]}}
            >
                {props.children} : {props.number}
            </Button>
            
        </div>
    )
}

export default TransportButton