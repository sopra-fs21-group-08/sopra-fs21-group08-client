import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Sidebar from '../../views/game/Sidebar'
import Map from '../Pages/Map'
import { Container, Modal, Button } from 'react-bootstrap'
import { api, handleError } from '../../helpers/api';

const Game = () => {
    const { id } = useParams()

    const [stations, setStations] = useState([])
    const [players, setPlayers] = useState([])
    const [gameStatus, setGameStatus] = useState({})

    //fetch Game Status
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchPlayers = async () => {
            const response = await api.get('/games/'+ id+'/players', {headers:{'Authorization':  `Basic ${token}`}}); 
            console.log(response);
            const players = response.data;
            setPlayers(players);
            console.log(players);
        };
        fetchPlayers();
        const fetchGameStatus = async () => {
            const response = await api.get('/games/'+ id + '/status', {headers:{'Authorization':  `Basic ${token}`}}); 
            console.log(response);
            const gameInfo = response.data;
            setGameStatus(gameInfo);
            console.log("Game status")
            console.log(gameStatus);
        };
        fetchGameStatus();
   }, []);

    // Fetches the stations from the backend
    useEffect(async () => {
        try {
            const response = await api.get('/stations');
            setStations(response.data)
            //console.log(stations)
        } catch (error) {
            alert('Couldnt fetch the stations');
        }
    }, [])

    return (
        <>
            <Container style={{ position: "absolute", zIndex: 1000 }} fluid>
                <Sidebar gameStatus={gameStatus} players={players} />
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
            {players.length>0&&stations.length>0&&<Map stations={stations} players={players} gameStatus={gameStatus} />}
        </>
    )
}

export default Game