import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { api, handleError } from '../../helpers/api';

import { Accordion, Card, Row, Col } from 'react-bootstrap';

import TransportButton from './TransportButton'
import mrx from '../../assets/img/avatar/mrx.png'

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

const MisterX = ({player, isMoving, fetchPossibleMoves}) => {
    var opacity = isMoving ? 1 : 0.5
    const { id } = useParams()

    return (
        <>
        <Accordion defaultActiveKey="0">
            <Card bg={'secondary'}
            text = {'info' === 'light' ? 'dark' : 'white'} 
            style={{ width: '13rem', opacity: opacity }} 
            className="player"  
            >
                <Accordion.Toggle as= {Card.Header} eventKey="0">
                    <Row >
                    <Col xs={3} ><Card.Img variant="top" src={mrx}/></Col>
                    <Col>Mister X : {player.user.username}</Col>
                    </Row >
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body style={{paddingLeft: 10, paddingRight: 0, paddingTop: 5,paddingBottom: 5}}>
                    <Row style={{fontSize: 10}} >
                        <Col md="auto">
                            <Card.Text>
                                1. Bus
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                2. Tram
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                <b>3. Black</b>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row style={{fontSize: 10}} >
                        <Col md="auto">
                            <Card.Text>
                                4. Tram
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                5. Bus
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                6. Tram
                            </Card.Text>
                        </Col>
                    </Row>
                    
                </Card.Body>
                </Accordion.Collapse>
                <Card.Footer style={{paddingRight: 0, paddingTop: 0,paddingBottom: 5}}>
                    <Row>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.wallet.tram} onClick={() => fetchPossibleMoves(player.user.userId, "TRAM")}>Tram : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.wallet.bus} onClick={() => fetchPossibleMoves(player.user.userId, "BUS")}>Bus : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.wallet.train} onClick={() => fetchPossibleMoves(player.user.userId, "TRAIN")}>Train : </TransportButton>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col style={styles.col}>
                            <TransportButton number={player.wallet.double} onClick={() => fetchPossibleMoves(player.user.userId, "DOUBLE")}>Double : </TransportButton>
                        </Col>
                        <Col style={styles.col}>
                            <TransportButton number={player.wallet.black} onClick={() => fetchPossibleMoves(player.user.userId, "BLACK")}>Black : </TransportButton>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            </Accordion>
        </>
    )
}

export default MisterX

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