import { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import {avatars} from '../design/Avatars'
import { api, handleError } from '../../helpers/api';

// import {gameStatus} from '../../assets/MockDTOs'

// const GameInfo = ({amIMrX=true, username='John'}) => {
const GameInfo = ({gameStatus, amIMrX, playerClass}) => {
    const [username, setUsername] = useState(null)
    const userId = localStorage.getItem('userId')

    const mrXIsVisible = gameStatus&&gameStatus.mrXVisible
    const currentRound = gameStatus&&gameStatus.currentRound
    
    // const currentPlayerUsername = gameStatus.currentPlayer&&gameStatus.currentPlayer.user&&gameStatus.currentPlayer.user.username
    const mrXVisible = gameStatus.mrXVisible ? <><b>Mr. X is visible this round </b></>: <>Mr. X is not visible this round</>
    const youAreVisible = gameStatus.mrXVisible ? <><b>Detectives can see your position this round</b></>: <>Detectives don't see your position</>
    // const userId = parseInt(localStorage.getItem("userId"));
    // const currentPlayerID = gameStatus.currentPlayer&&gameStatus.currentPlayer.user&&gameStatus.currentPlayer.user.userId
    // const currentPlayer = currentPlayerID === userId ? "It's your turn" : currentPlayerUsername + " makes a move"

    const userpic = <> 
        <Row>
            <img className='mediumImage' src={avatars[userId%7]} alt='userpic' type='button'/>
        </Row>
        <Row>
            <Col>
                <Card.Text className="smallFont textCentred" type='button'>{username}</Card.Text>
            </Col>
        </Row>
    </>
    useEffect(() =>
    {
      const fetchData = async () => {
          try {
            const response = await api.get('/users/'+ userId);
            console.log('Username is' + response) 
            const user = response.data;
            setUsername(user.username)
          }
          catch (error) {
            alert(`Something went wrong: \n${handleError(error)}`);
          }
      };
      fetchData();
    },[]);

    if (playerClass === "MRX"){
            return(
                <Card className="gameInfo"
                      text = {mrXIsVisible ? 'dark' : 'white'} 
                      bg={mrXIsVisible ? 'light': 'dark'}>
                    <Row>
                        <Col className='textVerticalAlign' md={2}>
                            <Card.Text className="smallFont textLeftAllign">Round {currentRound}/22</Card.Text>
                        </Col>
                        <Col className='textVerticalAlign' md={8}>
                            <Card.Text className="smallFont textCentred">{youAreVisible}</Card.Text>
                        </Col>
                        <Col md={2}>
                            {userpic}
                        </Col>
                    </Row>
                </Card>
            )
    }else{
            return(
                <Card className="gameInfo" bg={'primary'} text = {'white'}>
                    <Row>
                        <Col className='textVerticalAlign' md={2}>
                            <Card.Text className="smallFont textLeftAllign">Round {currentRound}/22</Card.Text>
                        </Col>
                        <Col className='textVerticalAlign' md={8}>
                            <Card.Text className="smallFont textCentred">{mrXVisible}</Card.Text>
                        </Col>
                        <Col md={2}>
                            {userpic}
                        </Col>
                    </Row>
                </Card>
            )
    }
}

export default GameInfo
