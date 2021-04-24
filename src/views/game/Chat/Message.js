import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

const Message = ({text, user}) => {
    return (
      <>
        <Row style={{fontSize: 13, color: 'blue'}}>
            <Col md="auto">
                <Card.Text>
                    {user.username}
                </Card.Text>
            </Col>
        </Row>
        <Row style={{fontSize: 13}}>
            <Col md="auto">
                <Card.Text>
                    {text}
                </Card.Text>
            </Col>
        </Row>
      </>
    )
}

export default Message