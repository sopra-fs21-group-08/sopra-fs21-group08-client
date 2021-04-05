import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert, CardDeck, Image, Container, Col, Row } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import { api } from '../../helpers/api';


function UserProfile() {
    return (
      <div>
        <Header />
        <CardDeck>

          <Card>
          <div className='ml-3'>
          <div className='mt-3'>
            <Row>
              <Col><Card.Img variant="top" src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" /></Col>
              <Col> <Card.Title> Me </Card.Title> </Col>
              <Col>  </Col>
            </Row>
          </div>
          </div>
            <div className='mt-3'>
            <div className='ml-3'>
            <div className='mr-3'>
            <Card.Body className="zbg-5">
              <Card.Title>  </Card.Title>
              <Card.Text>
                <Col>
                  <p>Games played: </p>
                  <p>Winning rate: </p>
                </Col>
              </Card.Text>
            </Card.Body>
            </div>
            </div>
            </div>
            <Card.Body>
              <Row>
                <Col> <ZButton>Create Game</ZButton> </Col>
                <Col> <ZButton>Join Game</ZButton> </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <div className='ml-3'>
            <div className='mt-3'>
              <Row>
                <Col> <Card.Title> Other Players </Card.Title> </Col>
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
        </CardDeck>
      </div>
    )
}

export default UserProfile