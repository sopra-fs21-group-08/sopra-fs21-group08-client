import React, { useEffect, useState } from 'react';
import { Button, Card, CardDeck, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Rules from '../../components/shared/Rules';
import { api, handleError } from '../../helpers/api';
import { avatars } from '../../views/design/Avatars';
import ZButton from '../../views/design/ZButton';
import Header from '../../views/Header';
import Lobbies from '../../views/Lobbies';
import Player from '../../views/Players';
import Info from '../shared/Info';
import User from '../shared/models/User';



function UserProfile() {

    const [user, setuser] = useState([]);
    const [lobbyId, setlobbyId] = useState([]);

    let history = useHistory();
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showRoom, setShowRoom] = useState(false);
    const [showJoinRoom, setJoinRoom] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeEdit = () => setShowEdit(false);
    const ShowEdit = () => setShowEdit(true);
    const closeRoom = () => setShowRoom(false);
    const ShowRoom = () => setShowRoom(true);
    const closeJoinRoom = () => setJoinRoom(false);
    const ShowJoinRoom = () => setJoinRoom(true);

    useEffect(() =>
    {
      const fetchData = async () => {
          try {
            const response = await api.get('/users/'+localStorage.getItem('userId'));
            const user = new User(response.data);
            setuser(user);
          }
          catch (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            history.push('/login');
          }
      };
      fetchData();
    },[showEdit]);

    const [inputusername, setusername] = useState(null);
    const [inputlobby, setlobby] = useState(null);

    const editProfile = async () => {
        const requestBody = JSON.stringify({
          username: inputusername,
        });
        try{
          await api.put('/users/'+localStorage.getItem("userId"), requestBody, { headers: { 'Authorization': localStorage.getItem('token') }});
          closeEdit();
        } catch (error) {
          alert(`Something went wrong while updating the user: \n${handleError(error)}`);
        }
    };

    const logout = async () => {
        const requestBody = JSON.stringify({
            userId : user.userId,
            token : localStorage.getItem("token")
        })
       
        try{
            await api.put('/users/logout', requestBody);
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            history.push('/login');
        }catch(error){
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            history.push('/login');
        }
    }

    const createGame = async () => {
        const requestBody = JSON.stringify({
          userId: localStorage.getItem("userId"),
          lobbyName: inputlobby
        });
        try{
          const response = await api.post('/lobbies/', requestBody);
          history.push('lobbies/' + response.data.lobbyId);
        } catch (error) {
          alert(`Something went wrong while trying to create a new Game: \n${handleError(error)}`);
        }
    };

    return (
        <>
        <Header />
        <center>
        <Container style={{ margin: '0rem'}}>

        <CardDeck  className='mt-5' style={{display: 'flex', flexDirection: 'row'}}>
          <Col>
          <Card className="soft-white" style={{ width: '30rem', height: '33rem', marginBottom: '3rem', flex: 1, border: 'none' }}>
          <Card.Header style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#4e54c8', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', background: 'none', border: 'none'}}>
           {user.username}
          </Card.Header>
          <div className='ml-3'>
          <div className='mt-4'>
            <Row>
              <Col>
              <Card.Img variant="top" src={avatars[user.userId%7]} />
              </Col>
              <Col>
              </Col>
              <Col>
                <div style={{
                  position: 'absolute', left: '-10%', top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}>
                  <Row>
                    <Col> <center>
                    <Button onClick={ShowEdit} size="sm" variant="outline-dark" style={{width: '8rem', height: '2rem', marginTop: '-0.4rem', borderRadius:'24px'}}>
                    Edit Profile
                    </Button>
                    </center> </Col>
                    <Col> <center>
                    <Button  onClick={handleShow} size="sm" variant="outline-dark" style={{width: '8rem', height: '2rem', marginTop: '0.4rem', borderRadius:'24px'}}>
                    LOG OUT
                    </Button>
                    </center> </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          </div>
            <div className='mt-5'>
            <div className='ml-3'>
            <div className='mr-3'>
            <Card.Body className="inner-soft-blue" style={{borderRadius: '8px'}}>
              <Card.Text style={{textAlign: "left", color: "white"}}>
                <Col>
                  <p style={{fontWeight: "bold", marginLeft: "1rem", marginTop: "0.2rem"}}>Games played: {user.gamesPlayed} </p>
                  <p style={{marginLeft: "1rem"}}>Winning rate: {user.winrate}% </p>
                </Col>
              </Card.Text>
            </Card.Body>
            </div>
            </div>
            </div>
            <Card.Body/>
              <Card.Footer style={{borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px'}}>
                <Row>
                  <Col> <Button variant="light" onClick={ShowRoom}>Create Game</Button> </Col>
                  <Col> <Button variant="light" onClick={ShowJoinRoom} >Join Game</Button> </Col>
                </Row>
              </Card.Footer>
          </Card>
          </Col>
          <Col>
            <Player />
          </Col>
        </CardDeck>
        </Container>
        </center>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log Out</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to log out?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <ZButton onClick={logout}>
              Log out
            </ZButton>
          </Modal.Footer>
        </Modal>

        <Modal show={showEdit} onHide={closeEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => {e.preventDefault(); editProfile();}}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={event => setusername(event.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeEdit}>
              Cancel
            </Button>
            <ZButton disabled={!inputusername}
            onClick={() => {
                editProfile();
            }}>
              Save
            </ZButton>
          </Modal.Footer>
          </Modal>

        <Modal show={showRoom} onHide={closeRoom}>
          <Modal.Body  closeButton>
            <Form onSubmit={(e) => {e.preventDefault(); if(inputlobby){createGame();}}}>
                <Form.Group>
                    <Form.Label>Create a new Game</Form.Label>
                    <Form.Control type="text" placeholder="Lobby Name" onChange={event => setlobby(event.target.value)}>
                    </Form.Control>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeRoom}>
              Cancel
            </Button>
            <ZButton disabled={!inputlobby}
            onClick={() => {
                createGame();
            }}>
              Create Game
            </ZButton>
          </Modal.Footer>
          </Modal>

        <Modal show={showJoinRoom} onHide={closeJoinRoom}>
        <Modal.Header>
          <Modal.Title>Lobbies</Modal.Title>
        </Modal.Header>
          <Modal.Body  closeButton>
              <Lobbies />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeJoinRoom}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Rules/>
        <Info/>
      </>
    )
}

export default UserProfile