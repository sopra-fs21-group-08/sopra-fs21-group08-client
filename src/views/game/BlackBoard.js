import React, {useState, useEffect} from 'react'

import { Table } from 'react-bootstrap';

import {transportIcons} from '../design/TransportIcons'
import bus from '../../assets/img/icons/bus.png'
import tram from '../../assets/img/icons/tram.png'
import train from '../../assets/img/icons/train.png'
import {ReactComponent as Bus} from '../../assets/img/icons/svg/bus.svg'

function BlackBoard({moves, rounds=22, visible_rounds=[3, 8, 13, 18, 22]}) {
    let blackBoard = []
    // iterate over moves and set the values to move.ticket => ['Bus', 'Tram']
    moves&&moves.map((move)=>(blackBoard = [...blackBoard, move.ticket]))
    //  append to the existing blackboard array numbers till #rounds => ['Bus', 'Tram', 3, 4, ..., 22]
    blackBoard = [...blackBoard, ...Array.from({length: rounds - blackBoard.length}, (_, i) => i + blackBoard.length+1)] 

    function displayIcon(x) {
        const size = '20px'
        switch(x){
            case "BUS":
                return (<img src={bus} alt="bus" width={size} className="imgCenter" />)
            case "TRAM":
                return (<img src={tram} alt="bus" width={size} className="imgCenter" />)
            case "TRAIN":
                return (<img src={train} alt="bus" width={size} className="imgCenter" />)
            case "BLACK":
                return('B')
            case "DOUBLE":
                return('2X')
            default:
                return x;
        }
    }

    function chooseColor(x){
        switch(x){
            case "BUS":
                return ('orange')
            case "TRAM":
                return ('blue')
            case "TRAIN":
                return ('red')
            case "BLACK":                  
                return('black')
            case "DOUBLE":
                return('turquoise')
            default:
                return 'grey';
        }
    }

    function chooseBorderSize(x){
        if(visible_rounds.includes(x)){
            return("3px solid #dee2e6")
        }else{
            return("1px solid #dee2e6")
        }
    }

    return (
        <>
            <Table striped bordered hover style={{marginBottom:"0"}}>
                <tbody>
                    <tr>
                        {blackBoard.map((move, idx) => (
                            <td key={idx} 
                                style={{backgroundColor:chooseColor(move), border:chooseBorderSize(idx+1), color:"white", fontSize:"small"}}
                                className="textCentred textVerticalAlign">{displayIcon(move)}</td>
                        )
                        )}
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default BlackBoard

