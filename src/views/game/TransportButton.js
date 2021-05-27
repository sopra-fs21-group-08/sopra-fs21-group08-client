import React from 'react'

import TramTicket from '../design/TramTicket'
import TrainTicket from '../design/TrainTicket'
import BusTicket from '../design/BusTicket'
import BlackTicket from '../design/BlackTicket'
import DoubleTicket from '../design/DoubleTicket'

// Button styled in the colors of Zurich
function TransportButton(props) {

    switch (props.children) {
        case "Bus":
            return (
                <div>
                    <BusTicket disabled={props.number === 0 || props.id != localStorage.getItem("userId") || props.isMoving == false} onClick={props.onClick}  amount={props.number}>
        
                    </BusTicket>
                    
                </div>
            )
        
        case "Tram":
            return (
                <div>
                    <TramTicket disabled={props.number === 0 || props.id != localStorage.getItem("userId") || props.isMoving == false} onClick={props.onClick}  amount={props.number}>
        
                    </TramTicket>
                    
                </div>
            )
            
            case "Train":
                return (
                    <div>
                        <TrainTicket disabled={props.number === 0 || props.id != localStorage.getItem("userId") || props.isMoving == false} onClick={props.onClick}  amount={props.number}>
            
                        </TrainTicket>
                        
                    </div>
                )
                
                case "Black":
                    return (
                        <div>
                            <BlackTicket disabled={props.number === 0 || props.id != localStorage.getItem("userId") || props.isMoving == false} onClick={props.onClick}  amount={props.number}>
                
                            </BlackTicket>
                            
                        </div>
                    )
                    
                    case "Double":
                        return (
                            <div>
                                <DoubleTicket disabled={props.number === 0 || props.id != localStorage.getItem("userId") || props.isMoving == false} onClick={props.onClick}  amount={props.number}>
                    
                                </DoubleTicket>
                                
                            </div>
                        )
                        
            default:
                return null;
        
      }
    
}

export default TransportButton