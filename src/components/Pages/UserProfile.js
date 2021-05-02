import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert, CardDeck, Image, Container, Col, Row, Modal } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import Player from '../../views/Players'
import Lobbies from '../../views/Lobbies'
import { api, handleError } from '../../helpers/api';
import defaultavatar from '../../assets/img/avatar/avatar0.jpeg'
import avatar0 from '../../assets/img/avatar/avatar1.png'
import avatar1 from '../../assets/img/avatar/avatar2.png'
import avatar2 from '../../assets/img/avatar/avatar3.png'
import avatar3 from '../../assets/img/avatar/avatar4.png'
import avatar4 from '../../assets/img/avatar/avatar5.png'
import avatar5 from '../../assets/img/avatar/avatar6.png'
import avatar6 from '../../assets/img/avatar/avatar7.png'
import Rules from '../../components/shared/Rules'
import Background from '../../views/Background';
import BackgroundImage from '../../assets/img/background/zurich_background.jpg'
import { useHistory, Link, withRouter } from 'react-router-dom';
import User from '../shared/models/User';

function UserProfile() {

    const [user, setuser] = useState([]);
    const [lobbyId, setlobbyId] = useState([]);

    const avatar = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

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
            alert(`Something went wrong: \n${handleError(error)}`);
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
        console.log(requestBody);
        try{
            await api.put('/users/logout', requestBody);
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            history.push('/login');
        }catch(error){
            alert(`Something went wrong while trying to log out: \n${handleError(error)}`);
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

        <CardDeck  className='mt-5'>
          <Col>
          <Card className="hcenter" style={{ width: '27rem', height: '29rem', margin: '0.5rem' }}>
          <Card.Header style={{fontSize: 28}} className="zbg-1">
           {user.username}
          </Card.Header>
          <div className='ml-3'>
          <div className='mt-3'>
            <Row>
              <Col>
              <Card.Img variant="top" src={avatar[user.userId%7]} />
              </Col>
              <Col>
              </Col>
              <Col>
                <div style={{
                  position: 'absolute', left: '0%', top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}>
                  <Row>
                    <Col> <center>
                    <Button onClick={ShowEdit} variant="light" size="sm" style={{ width: '7rem', height: '2rem', margin: '0.3rem' }}>
                    Edit Profile
                    </Button>
                    </center> </Col>
                    <Col> <center>
                    <Button  onClick={handleShow} variant="light" size="sm" style={{ width: '7rem', height: '2rem', margin: '0.3rem' }}>
                    LOG OUT
                    </Button>
                    </center> </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          </div>
            <div className='mt-4'>
            <div className='ml-3'>
            <div className='mr-3'>
            <Card.Body className="zbg-5">
              <Card.Text style={{textAlign: "left"}}>
                <Col>
                  <p style={{fontWeight: "bold"}}>Games played: </p>
                  <p>Winning rate: </p>
                </Col>
              </Card.Text>
            </Card.Body>
            </div>
            </div>
            </div>
            <Card.Body/>
              <Card.Footer className="zbg-1">
                <Row>
                  <Col> <ZButton onClick={ShowRoom}>Create Game</ZButton> </Col>
                  <Col> <ZButton onClick={ShowJoinRoom} >Join Game</ZButton> </Col>
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
            <Form>
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
            <ZButton
            onClick={() => {
                editProfile();
            }}>
              Save
            </ZButton>
          </Modal.Footer>
          </Modal>

        <Modal show={showRoom} onHide={closeRoom}>
          <Modal.Body  closeButton>
            <Form>
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
        </>
    )
}

export default UserProfile