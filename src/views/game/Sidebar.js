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

const Sidebar = ({currentRound, currentPlayerID}) => {
  let history = useHistory();
  const handleClick = () => history.push('/game')
  const { id } = useParams()

  const gameStatus = {
    'currentPlayerId': 2,
    'gameState' : true,
    'currentRound' : 1
  }

  // ******** List of Detectives ********

  const detectives = [1, 2, 3, 4] //userId of all detectives
  // const [detectives, setDetectives] = useState();
  useEffect(() => {
    // const fetchData = async () => {
    //     const response = await api.get('/games/'+ id + '/players'); 
    //     console.log(response);
    //     const detectiveInfo = response.data;
    //     setDetectives(detectiveInfo);
    //     console.log(detectives);
    // };
    // fetchData();
  }, []);

  // ******** ******** ********

  return(
      <div className='sidebar'>
          <GameInfo currentRound={currentRound} currentPlayer={currentPlayerID}/>
          <Chat />
          <MisterX isMoving={false}/>
          {detectives.map((detectiveId, index) => (
            <Player key={detectiveId} playerId= {detectiveId} color={index+1} isMoving={detectiveId === gameStatus.currentPlayerId ? true : false}/>
          ))}
          <Button variant="danger" style={{ marginTop: 20, marginBottom: 40, width: '13rem'}} onClick={handleClick}> Quit Game </Button>
      </div>
    );
}


export default Sidebar

