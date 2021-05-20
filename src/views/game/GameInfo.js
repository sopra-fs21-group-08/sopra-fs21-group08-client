import { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import { Squash as Hamburger } from 'hamburger-react'

import {avatars} from '../design/Avatars'
import BlackBoard from './BlackBoard'
import { api, handleError } from '../../helpers/api';

// import {gameStatus} from '../../assets/MockDTOs'

// const GameInfo = ({playerClass, playerIdx=1, blackBoard=[{'ticket':"BUS"}]}) => {
const GameInfo = ({gameStatus, playerClass, playerIdx, blackBoard}) => {
    const [username, setUsername] = useState(null)
    const userId = localStorage.getItem('userId')
    const themes = ['primary','success','danger','warning','info']

    const mrXIsVisible = gameStatus&&gameStatus.mrXVisible
    const currentRound = gameStatus&&gameStatus.currentRound
    const mrXVisible = gameStatus.mrXVisible ? <><b>Mr. X : VISIBLE </b></>: <>Mr. X : not visible</>
    const youAreVisible = gameStatus.mrXVisible ? <><b>Detectives can see your position this round</b></>: <>Detectives don't see your position</>

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
                            <Card.Text className="smallFont textLeftAllign" style={{marginBottom:"0"}}>Round {currentRound}</Card.Text>
                            <Card.Text className="smallFont textLeftAllign">{mrXVisible}</Card.Text>
                        </Col>
                        <Col className='textVerticalAlign' md={8}>
                            <BlackBoard moves={blackBoard} />
                        </Col>
                        <Col md={2}>
                            {userpic}
                        </Col>
                    </Row>
                </Card>
            )
    }else{
            return(
                <Card className="gameInfo" bg={themes[playerIdx-1]} text = {'white'}>
                    <Row>
                        <Col className='textVerticalAlign' md={2}>
                            <Card.Text className="smallFont textLeftAllign" style={{marginBottom:"0"}}>Round {currentRound}</Card.Text>
                            <Card.Text className="smallFont textLeftAllign">{mrXVisible}</Card.Text>
                        </Col>
                        <Col className='textVerticalAlign' md={8}>
                            <BlackBoard moves={blackBoard} />
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
