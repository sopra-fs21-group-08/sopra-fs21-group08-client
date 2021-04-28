import React, { useState, useEffect, useRef } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

const Message = ({text, user}) => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest"})
    }

    useEffect(() =>
    {
        scrollToBottom();
    },[]);

    return (
      <>
        <Row style={{fontSize: 13, color: 'blue'}}>
            <Col md="auto">
                <Card.Text>
                    {user}
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
        <div ref={messagesEndRef} />
      </>
    )
}

export default Message