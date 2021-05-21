import React, { useState, useEffect } from 'react'
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { Card, Row, Col, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
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
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const {id} = useParams()
    let gameId = id 
    let history = useHistory();
    let img = "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg/100px100"
    const [lobbyName, setlobbyName] = useState([])

    // fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/lobbies/'+ gameId); 
            console.log(response);
            const players = response.data.users;
            setlobbyName(response.data.lobbyName);
            setGameIsStarted(response.data.gameStarted);
            setPlayers(players);
            console.log(players);
        };
        fetchData();
  
        const interval=setInterval(()=>{
              fetchData()
             },1000)
  
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
    
    // const handleGameIsStarted = () => setGameIsStarted(true);

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
            // handleGameIsStarted();
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
                    <div style={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         marginTop: '3rem'
                     }}>
                     <center>
                    <Card className="soft-white" style={{ width: '32rem', height: '35rem', marginBottom: '3rem', flex: 1 }}>
                        <Card.Header style={{fontSize: '1.3rem', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', background: 'white', border: 'none'}}>
                            <center style={{fontSize: '2.1rem'}}> {lobbyName} </center>
                        </Card.Header>
                        <Card.Body style={{marginTop:'-1rem'}}>
                            <Row>
                                {players.map(player => (
                                        <Col key={player.userId} xs={4}>
                                            <Card.Img variant="top" src={avatar[player.userId%7]} />
                                            <div className='mt-2'>
                                            </div>
                                            <div style={{fontSize: 20}}>
                                              {player.username}
                                            </div>
                                            <div className='mt-4'>
                                            </div>
                                        </Col>
                                ))}
                            </Row>
                            </Card.Body>
                          <Card.Text className="text-muted">{players.length} out of 6 players are in the lobby</Card.Text>
                        <Card.Footer style={{borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px'}}>
                            <Row>
                                <Col>
                                    <ZButton onClick={handleShowLeave}>
                                        Leave Game</ZButton>
                                </Col>
                                  {(() => {
                                  if(players.length < 3) {
                                  return(
                                  <Col>
                                  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Minimum of 3 players are needed to start the game!</Tooltip>}>
                                    <span className="d-inline-block">
                                          <Button disabled className="zbutton" style={{ pointerEvents: 'none' }}>
                                            Start Game
                                          </Button>
                                    </span>
                                  </OverlayTrigger>
                                  </Col>
                                  )}
                                  else{
                                  return(
                                  <Col>
                                  <Button className="zbutton" onClick={startGame}>
                                    Start Game
                                  </Button>
                                  </Col>
                                  )}
                                  })()}
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
                    </div>
                    <Rules/>
                    
                </>
            )
    }

    else{
        return(<Redirect to={'/game/' + id }/>)   
    }
}

export default Lobby

//TODO : fix game start so that all players are redirected
