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
    const [possibleMoves, setPossibleMoves] = useState([])

    // Fetches the stations from the backend
    useEffect(() => {
        const fetchStations = async () => {
            try {
                const response = await api.get('/stations');
                setStations(response.data)
                //console.log(stations)
            } catch (error) {
                alert('Couldnt fetch the stations');
            }
        }
        fetchStations();
      }, []); // this is called only the first time component is rendered

    //fetch Game Status every second
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchGameStatus = async () => {
            const response = await api.get('/games/'+ id + '/status', {headers:{'Authorization':  `Basic ${token}`}}); 
            const gameInfo = response.data;
            setGameStatus(gameInfo);
        };
        fetchGameStatus();

        const interval=setInterval(()=>{
            fetchGameStatus();
           },1000)

        return()=>clearInterval(interval)
   }, []);

   //fetch Players each time Game Status is updated
   useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchPlayers = async () => {
            const response = await api.get('/games/'+ id +'/players', {headers:{'Authorization':  `Basic ${token}`}}); 
            const players = response.data;
            setPlayers(players);
        };
        fetchPlayers();
    }, [gameStatus]);

   // handle move
   const fetchPossibleMoves = async (userId, ticketToMove) => {
       //console.log("Fetching possible moves for " + userId + " with " + ticketToMove)
       const url = '/games/' + id + '/moves/validate/' + userId
    //    const requestBody = JSON.stringify({ticket: ticketToMove})
       const response = await api.post(url,{ticket: ticketToMove}, {headers:{'Authorization': 'adsfa'}})
       //console.log(response)
       setPossibleMoves(response.data)
   }

    return (
        <>
            <Container style={{ position: "absolute", zIndex: 1000 }} fluid>
                <Sidebar gameStatus={gameStatus} players={players} fetchPossibleMoves={fetchPossibleMoves} />
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
            {players.length>0&&stations.length>0&&Object.keys(gameStatus).length>0&&<Map possibleMoves={possibleMoves} stations={stations} players={players} gameStatus={gameStatus} />}
        </>
    )
}

export default Game
