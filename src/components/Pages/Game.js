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
    const [myTurn, setMyTurn] = useState(null)
    const [amIMrX, setAmIMrX] = useState(false)
    const [selectedTicket, setSelectedTicket] = useState(null)
    const [playerClass, setPlayerClass] = useState(null)

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
        const userId = parseInt(localStorage.getItem("userId"));
        const fetchGameStatus = async () => {
            const response = await api.get('/games/'+ id + '/status', {headers:{'Authorization':  `Basic ${token}`}}); 
            const gameInfo = response.data;
            const currentPlayerId = gameInfo.currentPlayer&&gameInfo.currentPlayer.user&&gameInfo.currentPlayer.user.userId
            //console.log(currentPlayerId)
            //console.log("USERID")
            //console.log(userId)
            if(currentPlayerId === userId){
        
                setMyTurn(true)
            }else{
                setMyTurn(false)
            }
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
            const userId = parseInt(localStorage.getItem("userId"));
            const mrXId = players&&players[0].user&&players[0].user.usedId
            //console.log("Mr X" + mrXId)
            //console.log("Mr userId" + userId)
            if(mrXId === userId){
                //console.log('you are mr x')
                setAmIMrX(true)
            }
        };
        fetchPlayers();
    }, [gameStatus]);

    // Check if Player is Mr. X or Detective

    useEffect(()=>{
        const userId = parseInt(localStorage.getItem("userId"));
        const player = players.find((player)=>player.user.userId==userId)
        if(typeof(player)!="undefined"){
            setPlayerClass(player.playerClass)
        }
    }, [players])

   // handle move
   const fetchPossibleMoves = async (userId, ticketToMove) => {
       setSelectedTicket(ticketToMove)
       const url = '/games/' + id + '/moves/validate/' + userId
       const response = await api.post(url,{ticket: ticketToMove}, {headers:{'Authorization': 'adsfa'}})
       setPossibleMoves(response.data)
   }

   //makeMove
   const makeMove = async (fieldId, ticketToMove)=>{
       const userId = parseInt(localStorage.getItem("userId"));
       const url = '/games/'+id+'/moves/'+userId;
       try{
       const response = await api.post(url, {ticket: ticketToMove, to: fieldId}, {headers:{'Authorization': 'adsfa'}})
       //console.log(response)
    }catch(error){
        //console.log(error)
    }
   }

    return (
        <>
            <Container style={{ position: "absolute", zIndex: 1000 }} fluid>
                <Sidebar gameStatus={gameStatus} players={players} fetchPossibleMoves={fetchPossibleMoves} amIMrX={amIMrX} />
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
            {players.length>0&&stations.length>0&&playerClass!=null&&Object.keys(gameStatus).length>0&&
            <Map selectedTicket={selectedTicket} playerClass={playerClass} makeMove={makeMove} myTurn={myTurn} possibleMoves={possibleMoves} stations={stations} players={players} gameStatus={gameStatus} />}
        </>
    )
}

export default Game

// player representation:
// {
//     "user": {
//         "userId": 9,
//         "username": "e",
//         "status": "ONLINE",
//         "dob": null,
//         "creationDate": "2021-04-30"
//     },
//     "playerClass": "MRX",
//     "stationId": 145,
//     "wallet": {
//         "bus": 10,
//         "black": 2,
//         "double": 2,
//         "train": 10,
//         "tram": 10
//     }
// },