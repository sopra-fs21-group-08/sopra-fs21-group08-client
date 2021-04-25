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

const Sidebar = () => {
  let history = useHistory();
  const handleClick = () => history.push('/game')
  const { id } = useParams()
  const [gameStatus, setGameStatus] = useState();

  // fetch info about game status
  useEffect(() => {
    const fetchData = async () => {
        const response = await api.get('/games/'+ id + '/status'); 
        console.log(response);
        const gameInfo = response.data;
        setGameStatus(gameInfo);
        console.log(gameStatus);
    };
    fetchData();
}, []);

  return(
    <div className='sidebar'>
        <GameInfo currentRound={1} currentPlayer={'Max'}/>
        <Chat />
        <MisterX isMoving={false}/>
        <Player player={1} color={Number(1)}/>
        <Player player={2} color={Number(2)} isMoving={true}/>
        <Player player={3} color={Number(3)}/>
        <Player player={4} color={Number(4)}/>
        <Button variant="danger" style={{ marginTop: 20, marginBottom: 40, width: '13rem'}} onClick={handleClick}> Quit Game </Button>
    </div>
  );
}


export default Sidebar

// fetch game status