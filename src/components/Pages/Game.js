import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Container, Modal, Button } from 'react-bootstrap'
import { api, handleError } from '../../helpers/api';

import Sidebar from '../../views/game/Sidebar'
import GameInfo from '../../views/game/GameInfo'
import Rules from '../../components/shared/Rules'
import Map from '../Pages/Map'
import TurnAlert from '../../views/game/TurnAlert'

const Game = () => {
    const { id } = useParams()
    const userId = parseInt(localStorage.getItem("userId"));

    const [stations, setStations] = useState([])
    const [players, setPlayers] = useState([])
    const [gameStatus, setGameStatus] = useState({})
    const [possibleMoves, setPossibleMoves] = useState([])
    const [myTurn, setMyTurn] = useState(null)
    const [selectedTicket, setSelectedTicket] = useState(null)
    const [playerClass, setPlayerClass] = useState(null)
    const [blackBoard, setBlackBoard] = useState([])
    const [turnUserId, setTurnUserId] = useState(0)

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
        const fetchGameStatus = async () => {
            const response = await api.get('/games/'+ id + '/status', {headers:{'Authorization':  localStorage.getItem("token")}});
            const gameInfo = response.data;
            const currentPlayerId = gameInfo.currentPlayer&&gameInfo.currentPlayer.user&&gameInfo.currentPlayer.user.userId
            //console.log(currentPlayerId)
            //console.log("USERID")
            //console.log(userId)
            
            if(gameInfo.currentPlayer.user.userId!==turnUserId){
                setTurnUserId(gameInfo.currentPlayer.user.userId)
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
        };
        fetchPlayers();
        
        if(turnUserId === userId){
            setMyTurn(true)
        }else{
            setMyTurn(false)
        }
    }, [turnUserId]);

    //fetch BlackBoard each time Players are updated
   useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchBlackBoard = async () => {
        const response = await api.get('/games/'+ id +'/moves/blackboards', {headers:{'Authorization':  `Basic ${token}`}}); 
        const blackboard = response.data;
        setBlackBoard(blackboard);
    };
    fetchBlackBoard();
}, [players]);

    // Check if Player is Mr. X or Detective
    useEffect(()=>{
        
        const player = players.find((player)=>{
            if(player.user!==null&&player.user.userId===userId){
                return player
            
        }
        })
    
        if(typeof(player)!="undefined"&&player.user!==null){
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

    const movesClearer = ()=>{
    setPossibleMoves([])
    }

    
    return (
        <>
            <Container style={{ position: "absolute", zIndex: 1000 }} fluid>
                <GameInfo gameStatus={gameStatus} playerClass={playerClass}/>
                <Sidebar turnUserId={turnUserId} blackBoard={blackBoard} gameStatus={gameStatus} players={players} fetchPossibleMoves={fetchPossibleMoves}/>
                {myTurn && <TurnAlert/>}
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
                <Rules style={{top: "90%"}} />
            </Container>
            {players.length>0&&stations.length>0&&playerClass!=null&&Object.keys(gameStatus).length>0&&
            <Map  movesClearer={movesClearer} selectedTicket={selectedTicket} playerClass={playerClass} makeMove={makeMove} myTurn={myTurn} possibleMoves={possibleMoves} stations={stations} players={players} gameStatus={gameStatus} />}
            
        </>
    )
}

export default Game

// TODO: 
// TRANSPORT BUTTONS
// add color to tickets corresponding to line color
// RULES
// change to slider
// PLAYER CARDS
// make transport buttongs of your card more distinguishable