import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { api, handleError } from '../../helpers/api';

import { Row, Col, Container } from 'react-bootstrap';
import Player from './Player'
import MisterX from './MisterX'
import GameInfo from './GameInfo'

import Chat from './Chat/Chat'
import Button from 'react-bootstrap/Button';
import { useHistory, Link, withRouter } from 'react-router-dom';

const Sidebar = ({gameStatus, players}) => {
  let history = useHistory();
  const handleClick = () => history.push('/game')
  const { id } = useParams()
  console.log("Sidebar is rendered")
  const currentPlayerId = gameStatus.currentPlayer&&gameStatus.currentPlayer.user&&gameStatus.currentPlayer.user.userId

  return(
      <div className='sidebar'>
          <GameInfo currentRound={gameStatus.currentRound} currentPlayer={gameStatus.currentPlayer&&gameStatus.currentPlayer.user&&gameStatus.currentPlayer.user.username}/>
          <Chat />
          {players.map((player, index) => (
            <>
            {(() => {
                 if(index === 0) {
                   return(
                   <MisterX key={index} player={player} isMoving={player.user.userId === currentPlayerId ? true : false}/>
                   )
                 }else{
                   return(
                    <Player key={index} player={player} color={index} isMoving={player.user.userId === currentPlayerId ? true : false}/>
                   )

                 }})()}
            </>
          ))}
          <Button variant="danger" style={{ marginTop: 20, marginBottom: 40, width: '13rem'}} onClick={handleClick}> Quit Game </Button>
      </div>
    );
}


export default Sidebar

// if(index === 0){
//   <MisterX />
// }else{<Player key={index} player={player} color={index+1}/>}

// Players
// [
//     {
//         "user": {
//             "userId": 17,
//             "username": "zojaKat",
//             "status": "ONLINE",
//             "dob": null,
//             "creationDate": "2021-04-28"
//         },
//         "playerClass": "MRX",
//         "stationId": 189,
//         "wallet": {
//             "train": 0,
//             "tram": 0,
//             "bus": 0
//         }
//     },