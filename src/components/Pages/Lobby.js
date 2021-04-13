import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import { Card, Row, Col, Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import Header from '../../views/Header'
import ZButton from '../../views/design/ZButton'
import avatar from '../../assets/img/avatar/avatar4.png'
import avatar0 from '../../assets/img/avatar/avatar1.png'
import avatar1 from '../../assets/img/avatar/avatar2.png'
import avatar2 from '../../assets/img/avatar/avatar3.png'
import avatar3 from '../../assets/img/avatar/avatar4.png'
import avatar4 from '../../assets/img/avatar/avatar5.png'
import avatar5 from '../../assets/img/avatar/avatar6.png'
import avatar6 from '../../assets/img/avatar/avatar7.png'
import Rules from '../../components/shared/Rules'
import { api, handleError } from '../../helpers/api';


const Lobby = () => {
    const avatar = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]
    const [players, setPlayers] = useState([])
    const {id} = useParams()
    let gameId = id 
    let img = "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg/100px100"

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // handle leave game
    const [showLeave, setShowLeave] = useState(false);
    const closeLeave = () => setShowLeave(false);
    const handleShowLeave = () => setShowLeave(true);

    let history = useHistory();

    // update list of players every sec

    useEffect(() => 
    {
        const fetchData = async () => {
            const response = await api.get('/lobbies/'+ gameId); 
            console.log(response);
            const players = response.data;
            setPlayers(players);
            console.log(players);
        };
        fetchData();
  
        const interval=setInterval(()=>{
              fetchData()
             },10000)
  
        return()=>clearInterval(interval)
      }, []);

    const startGame = () => {
        let path = '/game/' + id
        history.push(path);
    }

    const leaveGame = async () => {
        console.log("Leaving lobby");
        const requestBody = JSON.stringify({
            userId : Number(localStorage.getItem('userId')),
            token : localStorage.getItem('token')
        })
        console.log(requestBody);
        let path = '/lobbies/' + gameId
        try{
            await api.delete(path, { data: requestBody});
            history.push('/game/profile');
        }catch(error){
            alert(`Something went wrong while trying to leave game: \n${handleError(error)}`);
        }
    }

    return (
        <>
            <Header />
            <center>
            <Card className="hcenter">
                <Card.Header className="zbg-1">Game Lobby</Card.Header>
                <Card.Body>
                    <Card.Title>Game #{gameId}</Card.Title>
                    <Row>
                        {players.map(player => (
                            <Col xs={4}><Card.Img variant="top" src={avatar[player.userId%7]} />
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        {players.map(player => (
                            <Col xs={4}>{player.username}</Col>
                        ))}
                    </Row>
                    <ZButton disabled={players.length < 1} onClick={startGame}>Start Game</ZButton>
                </Card.Body>
                <Card.Footer className="zbg-1">
                    <Row>
                        <Col>
                            <ZButton onClick={handleShowLeave}>
                                Leave Game</ZButton>
                        </Col>
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

                <Modal show={showLeave} onHide={closeLeave}>
                    <Modal.Header closeButton>
                        <Modal.Title>Leaving Game Lobby</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to leave lobby?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeLeave}>
                        Cancel
                        </Button>
                        <ZButton onClick={leaveGame}>
                        Leave game
                        </ZButton>
                    </Modal.Footer>
                </Modal>

            </Card>
            </center>
            
        </>
    )
}

export default Lobby

// TODO: pop up window if player wants to quit game or start game with less then 6 players in the room
// TODO: change the min number of players to 3


{/* <Col><Link to="/game">Leave game</Link></Col> */}