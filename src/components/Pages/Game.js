import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Header from '../../views/Header'
import Sidebar from '../../views/game/Sidebar'
import Map from '../Pages/Map'
import { Container } from 'react-bootstrap'
import { api, handleError } from '../../helpers/api';

const Game = () => {
    const { id } = useParams()

    const [stations, setStations] = useState([])

    // Fetches the stations from the backend
    useEffect(async () => {
        try {
            const response = await api.get('/stations');
            setStations(response.data)
            console.log(stations)
        } catch (error) {
            alert('Couldnt fetch the stations');
        }
    }, [])

    return (
        <>
            {/* <Header /> */}
            {/* <h1 className="hcenter">This is a game with ID {id}</h1> */}
            <Container style={{ position: "absolute", zIndex: 1000 }} fluid>
                <Sidebar />
            </Container>
            <Map stations={stations} />
        </>
    )
}

export default Game

// REST:
// After game is initiated backend forms a list of players.
// One player becomes mister X and others are detectives
// Player : id, username, position, ticketWalet (tram, bus, S-Bahn, Black, Double)
// Game: info about round and whose turn it is
// 
