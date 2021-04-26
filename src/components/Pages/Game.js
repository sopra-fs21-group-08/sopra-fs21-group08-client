import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Header from '../../views/Header'
import Sidebar from '../../views/game/Sidebar'
import Map from '../Pages/Map'
import { Container, Modal, Button } from 'react-bootstrap'
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

    // ******** GAME STATUS ********
    // fetch data on game status

    // const [gameStatus, setGameStatus] = useState();
    // fetch info about game status
    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await api.get('/games/'+ id + '/status'); 
        //     console.log(response);
        //     const gameInfo = response.data;
        //     setGameStatus(gameInfo);
        //     console.log(gameStatus);
        // };
        // fetchData();
    }, []);

    const gameStatus = {
    'currentPlayerId': 2,
    'gameOver' : false,
    'currentRound' : 1
    }
    // ******** ******** ********

    return (
        <>
            <Container style={{ position: "absolute", zIndex: 1000 }} fluid>
                <Sidebar currentRound={gameStatus.currentRound} currentPlayerID={gameStatus.currentPlayerId} />
                <Modal show={gameStatus.gameOver}>
                    <Modal.Header>
                        <Modal.Title>Game is over</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                                <Button variant="secondary">
                                Go to Profile
                                </Button>
                                <Button >
                                Play again
                                </Button>
                            </Modal.Footer>
                </Modal>
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
