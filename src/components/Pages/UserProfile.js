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
            <Card.Body>
            <center>
              <Image src= "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" roundedCircle />
            </center>
              <Card.Title>Me</Card.Title>
              <Card.Text className="zbg-5">
                <Col>
                  <p>Games played: </p>
                  <p>Winning rate: </p>
                </Col>
              </Card.Text>
              <Row>
                <Col> <ZButton>Create Game</ZButton> </Col>
                <Col> <ZButton>Join Game</ZButton> </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Other Players</Card.Title>
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
