import { Card, Row, Col } from 'react-bootstrap';

import TransportButton from './TransportButton'
import {avatars} from '../../views/design/Avatars'

/* Testing */
// import {player} from '../../assets/MockDTOs'

const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row: {
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 5,
        paddingRight: 0
    }
};

const Player = ({ player, color, isMoving=false, fetchPossibleMoves, onClick }) => {
    var opacity = isMoving ? 1 : 0.5
    const themes = ['primary','success','danger','warning','info']

    return (
        <>
            <Card bg={themes[color-1]} 
            text = {'info' === 'light' ? 'dark' : 'white'} 
            style={{ height: '6rem', opacity: opacity}} 
            className="player"  
            >
                <Card.Body style={{padding: '5px 5px 5px 15px'}}>
                    <Row >
                        <Col xs={4} ><Card.Img onClick={onClick} variant="top" src={avatars[player.user.userId%7]} /></Col>
                        <Col style={styles.col}>
                            <Card.Text>{player.user.username}</Card.Text>
                        </Col>
                    </Row>
                    <Row >
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.wallet.tram} id={player.user.userId} isMoving={isMoving} onClick={() => {if(isMoving&&player.user.userId===parseInt(localStorage.getItem("userId")))fetchPossibleMoves(player.user.userId, "TRAM")}}>Tram</TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.wallet.bus} id={player.user.userId} isMoving={isMoving} onClick={() => {if(isMoving&&player.user.userId===parseInt(localStorage.getItem("userId")))fetchPossibleMoves(player.user.userId, "BUS")}}>Bus</TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.wallet.train} id={player.user.userId} isMoving={isMoving} onClick={() => {if(isMoving&&player.user.userId===parseInt(localStorage.getItem("userId")))fetchPossibleMoves(player.user.userId, "TRAIN")}}>Train</TransportButton>
                        </Col>
                    </Row>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default Player

// TODO: iterate over the wallet
// {playerId===userId ? <>you</> : <></>}