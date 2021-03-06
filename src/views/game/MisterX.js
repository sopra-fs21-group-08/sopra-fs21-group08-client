import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import mrx from '../../assets/img/avatar/mrx.png';
import TransportButton from './TransportButton';
import React, { useState } from 'react'



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
        paddingRight: 0,
        paddingTop: 5,
        alignSelf: 'center'
    }
};

const MisterX = ({playerClass, player, isMoving, fetchPossibleMoves, blackBoard, onClick}) => {
    let hide = {
        display: 'none',
    }
    let show = {
        display: 'block',
    }

    var opacity = isMoving ? 1 : 0.5
    const { id } = useParams()
    const [misterx, setmisterx] = useState(false)

    if(playerClass == "MRX" && misterx == false){
        setmisterx(true)
    }

    return (
        <>
        <Accordion defaultActiveKey="0" >
            <Card bg={'secondary'} 
            text = {'info' === 'light' ? 'dark' : 'white'} 
            style={{ width: '13rem', opacity: opacity }} 
            className="player"  
            >
                <Accordion.Toggle as= {Card.Header} eventKey="0">
                    <Row >
                    <Col xs={3} ><Card.Img onClick={onClick} variant="top" src={mrx}/></Col>
                    <Col>Mister X : {player.user.username}</Col>
                    </Row >
                </Accordion.Toggle>
                <div style={misterx ? show : hide}>
                <Card.Footer style={{paddingRight: 0, paddingTop: 0,paddingBottom: 5}}>
                    <Row>
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
                    <Row className="justify-content-md-center">
                        <Col style={styles.col}>
                            <TransportButton number={player.wallet.double} id={player.user.userId} onClick={() => {if(isMoving&&player.user.userId===parseInt(localStorage.getItem("userId")))fetchPossibleMoves(player.user.userId, "DOUBLE")}}>Double</TransportButton>
                        </Col>
                        <Col style={styles.col}>
                            <TransportButton number={player.wallet.black} id={player.user.userId} onClick={() => {if(isMoving&&player.user.userId===parseInt(localStorage.getItem("userId")))fetchPossibleMoves(player.user.userId, "BLACK")}}>Black</TransportButton>
                        </Col>
                    </Row>
                </Card.Footer>
                </div>
            </Card>
            </Accordion>
        </>
    )
}

export default MisterX