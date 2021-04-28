import React, { useState, useEffect } from 'react'
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { Card, Row, Col, Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Header from '../../views/Header'
import ZButton from '../../views/design/ZButton'
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
    let history = useHistory();
    let img = "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg/100px100"

    // fetch data from backend
    useEffect(() => {
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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // handle leave game
    const [showLeave, setShowLeave] = useState(false);
    const closeLeave = () => setShowLeave(false);
    const handleShowLeave = () => setShowLeave(true);
    
    const leaveGame = async () => {
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

    // handle game start
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const handleGameIsStarted = () => setGameIsStarted(true);

    const startGame = async () => {
        // initiate new game at backend
        const requestBody = JSON.stringify({
            userId: localStorage.getItem("userId"),
            token: localStorage.getItem("token"),
          });
        try{
            console.log("creating new game at backend")
            console.log(requestBody)
          const response = await api.post('/games/' + id, requestBody);
          console.log("Status Code " + response.status)
          handleGameIsStarted();
        } catch (error) {
          alert(`Something went wrong while trying to start a new Game: \n${handleError(error)}`);
        }
    }

    // handle back button
    const [isGoingBack, setIsGoingBack] = useState(false);

    const onBackButtonEvent = (e) => {
        e.preventDefault();
        if (!isGoingBack) {
            handleShowLeave();
        }
    }

    useEffect(() => {
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', onBackButtonEvent);
        return () => {
          window.removeEventListener('popstate', onBackButtonEvent);  
        };
    }, []);

    if (!gameIsStarted){
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
                                        <Col xs={4}>
                                            <Card.Img variant="top" src={avatar[player.userId%7]} />
                                            <div className='mt-2'>
                                            </div>
                                            {player.username}
                                            <div className='mt-4'>
                                            </div>
                                        </Col>
                                    
                                ))}
                            </Row>
                            <Card.Text className="text-muted">{players.length} out of 6 players are in the lobby</Card.Text>
                            <Card.Text className="text-muted">Minimum 3 players are needed to start game</Card.Text>
                            <ZButton disabled={players.length < 3} onClick={startGame}>Start Game</ZButton>
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

    else{
        return(<Redirect to={'/game/' + id }/>)   
    }
}

export default Lobby

//TODO : fix game start so that all players are redirected
