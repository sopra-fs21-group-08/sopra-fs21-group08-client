import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Rules from '../../components/shared/Rules';
import { api, handleError } from '../../helpers/api';
import { avatars } from '../../views/design/Avatars';
import ZButton from '../../views/design/ZButton';
import Header from '../../views/Header';
import Info from '../shared/Info';




const Lobby = () => {

    const {id} = useParams()
    let gameId = id 
    let history = useHistory();

    const [players, setPlayers] = useState([])
    const [lobbyName, setlobbyName] = useState([])
    const [playersLoaded, setPlayersLoaded] = useState(false);
    const [gameIsStarted, setGameIsStarted] = useState(false);

    // fetch lobby data from backend
    useEffect(() => {
        const fetchData = async () => {
            try{
            const response = await api.get('/lobbies/'+ gameId); 
            const players = response.data.users;
            setlobbyName(response.data.lobbyName);
            setGameIsStarted(response.data.gameStarted);
            setPlayers(players);
            setPlayersLoaded(true)
            console.log(players);
            }catch(e){
                history.push('/game/profile');
            }
        };
        const interval=setInterval(()=>{
              fetchData()
             },1000)
  
        return()=>clearInterval(interval)
    }, []);

    //check if user is allowed to be in the lobby
    useEffect(()=>{
        if(playersLoaded){
            var foundPlayer = players.find(player=>player.userId===parseInt(localStorage.getItem('userId')))
            if(foundPlayer===undefined){
                history.push('/game/profile');       
            }
        }
    },[players])

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
    const startGame = async () => {
        // initiate new game at backend
        const requestBody = JSON.stringify({
            userId: localStorage.getItem("userId"),
            token: localStorage.getItem("token"),
          });
        try{
            const response = await api.post('/games/' + id, requestBody);
            console.log("Status Code " + response.status)
        } catch (error) {
            alert(`Something went wrong while trying to start a new Game: \n${handleError(error)}`);
        }
    }

    // ask if user wants to leave lobby after clicking back button
    const onBackButtonEvent = (e) => {
        e.preventDefault();
        handleShowLeave();
    }

    useEffect(() => {
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', onBackButtonEvent);
        return () => {
          window.removeEventListener('popstate', onBackButtonEvent);  
        };
    }, []);
    
    //render page
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
                                            <Card.Img variant="top" src={avatars[player.userId%7]} />
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
                    <Info/>
                    
                </>
            )
    }

    else{
        return(<Redirect to={'/game/' + id }/>)   
    }
}

export default Lobby

