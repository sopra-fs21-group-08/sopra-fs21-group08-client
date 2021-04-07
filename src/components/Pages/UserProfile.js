import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert, CardDeck, Image, Container, Col, Row, Modal } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import { api, handleError } from '../../helpers/api';
import defaultavatar from '../../assets/img/avatar/avatar0.jpeg'
import avatar from '../../assets/img/avatar/avatar2.png'
import Background from '../../views/Background';
import BackgroundImage from '../../assets/img/background/zurich_background.jpg'
import { useHistory, Link, withRouter } from 'react-router-dom';


function UserProfile() {
    let history = useHistory();
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeEdit = () => setShowEdit(false);
    const ShowEdit = () => setShowEdit(true);
    const [alert, setAlert] = useState({ display: false, variant: null, message: null });

    const [inputusername, setusername] = useState(null);

    const submitValue = async () => {
        const requestBody = JSON.stringify({
          username: inputusername,
        });
        try{
          await api.put('/users/', requestBody, { headers: { 'Authorization': localStorage.getItem('token') }});
          closeEdit();
        } catch (error) {
          alert(`Something went wrong while updating the user: \n${handleError(error)}`);
        }
    };

    const logout = async () => {
        try{
            await api.put('users/logout', { headers: { 'Authorization': localStorage.getItem('token') }});
            localStorage.removeItem('token');
            history.push('/login');
        }catch(error){
            alert(`Something went wrong while trying to log out: \n${handleError(error)}`);
            localStorage.removeItem('token');
            history.push('/login');
        }
    }

    return (
        <>
        <Header />
        <center>
        <Container style={{ margin: '0rem'}}>
        <CardDeck  className='mt-5'>
          <Col>
          <Card className="hcenter" style={{ width: '27rem', height: '29rem', margin: '0.5rem' }}>
          <Card.Header style={{fontSize: 28}}>
          Me
          </Card.Header>
          <div className='ml-3'>
          <div className='mt-3'>
            <Row>
              <Col>
              <Card.Img variant="top" src={avatar} />
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
            <Card.Body>

            </Card.Body>
            <div className='mb-4'>
            <div className='ml-3'>
            <div className='mr-3'>
              <footer>
                <Row>
                  <Col style={{textAlign: "left"}}> <ZButton className='ml-5'>Create Game</ZButton> </Col>
                  <Col style={{textAlign: "left"}}> <ZButton>Join Game</ZButton> </Col>
                </Row>
              </footer>
            </div>
            </div>
            </div>
          </Card>
          </Col>

          <Col>
          <Card className="hcenter" style={{ width: '27rem', height: '29rem', margin: '0.5rem' }}>
            <div className='ml-3'>
            <div className='mt-3'>
              <Row>
                <Col> <Card.Title style={{fontSize: 28}}> Online Players </Card.Title> </Col>
              </Row>
            </div>
            </div>
            <Card.Body>
               <Row>
                 <Col><Card.Img variant="top" src={defaultavatar} /></Col>
                 <Col><Card.Img variant="top" src={defaultavatar} /></Col>
                 <Col><Card.Img variant="top" src={defaultavatar} /></Col>
               </Row>
               <div className='mt-5'>
               <Row>
                 <Col><Card.Img variant="top" src={defaultavatar} /></Col>
                 <Col><Card.Img variant="top" src={defaultavatar} /></Col>
                 <Col><Card.Img variant="top" src={defaultavatar} /></Col>
               </Row>
               </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
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
                submitValue();
            }}>
              Save
            </ZButton>
          </Modal.Footer>
          </Modal>
        </>
    )
}

export default UserProfile