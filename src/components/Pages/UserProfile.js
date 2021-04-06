import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert, CardDeck, Image, Container, Col, Row } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import ZButtonSmall from '../../views/design/ZButtonSmall'
import Header from '../../views/Header'
import { api } from '../../helpers/api'
import avatar from '../../assets/img/avatar/avatar2.png'


function UserProfile() {
    return (
      <div>
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
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
               </Row>
               <div className='mt-5'>
               <Row>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
                 <Col><Card.Img variant="top" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" /></Col>
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
      </div>
    )
}

export default UserProfile