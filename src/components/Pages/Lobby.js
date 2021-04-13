import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import { Card, Row, Col, Modal } from 'react-bootstrap'

import Header from '../../views/Header'
import ZButton from '../../views/design/ZButton'
import avatar from '../../assets/img/avatar/avatar4.png'
import Rules from '../../components/shared/Rules'
import { api, handleError } from '../../helpers/api';


const Lobby = () => {
    const [players, setPlayers] = useState([])
    const {id} = useParams()
    let gameId = id // TODO: decide how to get game id
    let img = "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg/100px100"

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory();

    // update list of players every sec

    useEffect(() => 
    {
        const fetchData = async () => {
            const response = await api.get('/lobbies/'+ gameId); //TODO: change when 'lobbies/{id}' api is available
            console.log(response);
            const players = response.data;
            setPlayers(players);
            console.log(players);
        };
        fetchData();
  
        const interval=setInterval(()=>{
              fetchData()
             },1000)
  
        return()=>clearInterval(interval)
      }, []);

    const startGame = () => {
        let path = '/game/' + id
        history.push(path);
    }

    return (
        <div>
            <Header />
            <center>
            <Card className="hcenter">
                <Card.Header className="zbg-1">Game Lobby</Card.Header>
                <Card.Body>
                    <Card.Title>Game #{gameId}</Card.Title>
                    <Row>
                        {players.map(player => (
                            <Col><Card.Img variant="top" src={img} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        {players.map(player => (
                            <Col>{player.username}</Col>
                        ))}
                    </Row>
                    <ZButton disabled={players.length < 1} onClick={startGame}>Start Game</ZButton>
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

                <Modal show={show} onHide={handleClose} size="lg">
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
            </center>
            
        </div>
    )
}

// pop up window if player wants to quit game or start game with less then 6 players in the room

export default Lobby


{/* <Row>
                        <Col><Card.Img variant="top" src={avatar} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                    </Row>
                    <Row>
                        <Col>User 1</Col>
                        <Col>User 2</Col>
                        <Col>User 3</Col>
                    </Row>
                    <div className='mt-5'>
                    <Row>
                        <Col><Card.Img variant="top" src={img} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                        <Col><Card.Img variant="top" src={img} /></Col>
                    </Row>
                    <Row>
                        <Col>User 4</Col>
                        <Col>User 5</Col>
                        <Col>User 6</Col>
                    </Row>
                    </div> */}