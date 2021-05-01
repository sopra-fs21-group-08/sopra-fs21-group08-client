import { Accordion, Card, Row, Col, Form, Container } from 'react-bootstrap';
import TransportButton from '../TransportButton'
import React, { useState, useEffect, Image } from 'react'
import { EnvelopeFill } from 'react-bootstrap-icons';
import Message from './Message'
import { api, handleError } from '../../../helpers/api';
import User from '../../../components/shared/models/User';
import { useParams } from 'react-router-dom';


const Chat = () => {
    const [user, setuser] = useState([]);
    const [messages, setmessages] = useState([]);
    const [chatmessage, setMessage] = useState([]);
    const { id } = useParams()
    let gameId = id

    useEffect(() =>
    {
      const fetchMessages = async () => {
        const response = await api.get('/games/'+gameId+'/chats')
        const messages = response.data;
        setmessages(messages);
        
      };
      fetchMessages();
      const interval=setInterval(()=>{
            fetchMessages();
           },1000)

      return()=>clearInterval(interval)
    },[]);

    const sendMessage = async () => {
        const requestBody = JSON.stringify({
          message: chatmessage,
          userId: localStorage.getItem("userId"),
          token: localStorage.getItem("token")
        });
        try{
          await api.post('/games/'+gameId+'/chats', requestBody);
        } catch (error) {
          alert(`Something went wrong while trying to send the message: \n${handleError(error)}`);
        }
        document.getElementById('myInput').value = ''
    };

    return (
        <>
        <Accordion defaultActiveKey="1">
            <Card bg={'white'}
            style={{ width: '13rem'}}
            className="chat"
            >
                <Accordion.Toggle as= {Card.Header} eventKey="0">
                    Chat
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body style={{paddingLeft: 10, paddingRight: 0, paddingTop: 5,paddingBottom: 5}}>
                <div style={{height:100, overflowY: 'scroll', overflowX: 'hidden'}}>
                {messages.map(mess => (
                 <>
                 {(() => {
                 return(
                    <Message text={mess.message} user={mess.username}/>
                 )
                 })()}
                 </>
                 ))}
                </div>
                <Form>
                    <Container style={{ width: '14rem', height: '2rem', marginBottom: '10px', marginTop: '10px', marginLeft: '-15px'}}>
                    <Row>
                    <Col sm='8'><Form.Control size="sm" style={{ width: '133px'}} id="myInput" onChange={event => setMessage(event.target.value)}>
                    </Form.Control></Col>
                    <Col style={{marginTop: '2px', marginLeft: '3px'}} ><div style={{ flexDirection: 'row-reverse' }}><EnvelopeFill size={23} style={{ textAlign: 'left' }} onClick={() => {sendMessage();}}/></div></Col>
                    </Row>
                    </Container>
                </Form>
                </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </>
    )
}

export default Chat
