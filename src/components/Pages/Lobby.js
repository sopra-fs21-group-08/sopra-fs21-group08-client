import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../views/Header'
import { Card, Row, Col } from 'react-bootstrap'
import ZButton from '../../views/design/ZButton'


function Lobby() {
    const [players, setTasks] = useState([])
    let gameId = 'Room #1'
    let img = "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg/100px100"

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
                        <Col><Card.Img variant="top" src={img} /></Col>
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
                    <Link to="/game">Leave game</Link>
                </Card.Footer>

            </Card>
            
        </div>
    )
}

// pop up window if player wants to quit game or start game with less then 6 players in the room

export default Lobby
