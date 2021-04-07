import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Modal } from 'react-bootstrap'

import Header from '../../views/Header'
import ZButton from '../../views/design/ZButton'
import avatar from '../../assets/img/avatar/avatar4.png'
import Rules from '../../components/shared/Rules'


function Lobby() {
    const [players, setTasks] = useState([])
    let gameId = 'Room #1'
    let img = "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg/100px100"

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // update list of players every 5 sec

    useEffect(() => {
        // fetch list of players & game id from server
    })

    return (
        <div>
            <Header />
            <Card className="hcenter">
                <Card.Header className="zbg-1">Game Lobby</Card.Header>
                <Card.Body>
                    <Card.Title>{gameId}</Card.Title>
                    <Row>
                        <Col><Card.Img variant="top" src={avatar} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                    </Row>
                    <div className='mt-5'>
                    <Row>
                        <Col><Card.Img variant="top" src={img} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                    </Row>
                    </div>

                    <ZButton disabled={players.length < 3}>Start Game</ZButton>
                </Card.Body>
                <Card.Footer className="zbg-1">
                    <Row>
                        <Col><Link to="/game">Leave game</Link></Col>
                        <Col>
                            <ZButton onClick={handleShow}>
                                Rules</ZButton>
                        </Col>
                    </Row>
                </Card.Footer>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Game rules</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Rules />
                    </Modal.Body>
                    <Modal.Footer>
                    <ZButton variant="secondary" onClick={handleClose}>
                        Close
                    </ZButton>
                    </Modal.Footer>
                </Modal>

            </Card>
            
        </div>
    )
}

// pop up window if player wants to quit game or start game with less then 6 players in the room

export default Lobby
