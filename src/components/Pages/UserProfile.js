import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert, CardDeck, Image, Container, Col, Row } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import ZButtonSmall from '../../views/design/ZButtonSmall'
import Header from '../../views/Header'
import { api } from '../../helpers/api';


function UserProfile() {
    return (
      <div>
        <Header />
        <center>
        <Container style={{ margin: '0rem' }}>
        <CardDeck  className='mt-5'>
          <Col>
          <Card className="hcenter" style={{ width: '27rem', height: '25rem', margin: '0.5rem' }}>
          <div className='ml-3'>
          <div className='mt-3'>
            <Row style={{textAlign: "left"}}>
              <Col><Card.Img variant="top" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" /></Col>
              <Col>
              <Card.Title style={{fontSize: 33, position: 'absolute', left: '25%', top: '50%', transform: 'translate(-50%, -50%)'}}>Me</Card.Title>
              </Col>
              <Col>
                <div style={{
                  position: 'absolute', left: '17%', top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}>
                  <Row>
                    <Col> <center> <ZButtonSmall>Edit Profile</ZButtonSmall> </center> </Col>
                    <Col> <center> <ZButtonSmall>LOG OUT</ZButtonSmall> </center> </Col>
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
              <Card.Title>  </Card.Title>
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
                  <Col> <center> <ZButton>Create Game</ZButton> </center> </Col>
                  <Col> <center> <ZButton>Join Game</ZButton> </center> </Col>
                </Row>
              </footer>
            </div>
            </div>
            </div>
          </Card>
          </Col>

          <Col>
          <Card className="hcenter" style={{ width: '27rem', height: '25rem', margin: '0.5rem' }}>
            <div className='ml-3'>
            <div className='mt-3'>
              <Row>
                <Col> <Card.Title style={{fontSize: 33}}> Online Players </Card.Title> </Col>
              </Row>
            </div>
            </div>
            <Card.Body>
               <Row>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
               </Row>
               <div className='mt-4'>
               <Row>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
               </Row>
               </div>
            <Card.Text>

            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          </Col>
        </CardDeck>
        </Container>
        </center>
      </div>
    )
}

export default UserProfile