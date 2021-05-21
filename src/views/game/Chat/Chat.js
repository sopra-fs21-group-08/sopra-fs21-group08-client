import { Accordion, useAccordionToggle, Card, Row, Col, Form, Container } from 'react-bootstrap';
import TransportButton from '../TransportButton'
import React, { useState, useEffect, Image } from 'react'
import { CircleFill } from 'react-bootstrap-icons';
import Message from './Message'
import { api, handleError } from '../../../helpers/api';
import User from '../../../components/shared/models/User';
import { useParams } from 'react-router-dom';
import SendMessageButton from '../../design/SendMessageButton';
import { Button } from 'react-bootstrap'


const Chat = ({chatopen}) => {
    let hide = {
        display: 'none',
    }
    let show = {
        display: 'block',
    }


    const [user, setuser] = useState([]);
    const [messages, setmessages] = useState([]);
    const [tempmessages, settempmessages] = useState([]);
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

    if(chatopen == true && tempmessages != messages){
        settempmessages(messages);
    }

    return (
        <div>
          {(() => {
          if(JSON.stringify(tempmessages) !== JSON.stringify(messages)){
          console.log(tempmessages)
          console.log(messages)
          return(
            <CircleFill style={{position: 'absolute', marginLeft:'11.7rem', marginTop:'-50px', color:'red', width: '20px', height: '20px', zIndex:1}}/>
          )}})()}
          <div style={chatopen ? show : hide}>
            <Card
            style={{ width: '13rem', backgroundColor: 'rgba(256, 256, 256, 0.95)' }}
            className="chat"
            >
            <Card.Header style={{height: '35px'}}>
                <div style={{marginTop: '-6px', fontSize: '15px'}}> Chat </div>
            </Card.Header>
                <Card.Body style={{paddingLeft: 10, paddingRight: 0, paddingTop: 5,paddingBottom: 5 }}>
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
                <Form onSubmit={(e) => {e.preventDefault(); sendMessage();}}>
                    <Container style={{ width: '14rem', height: '2rem', marginBottom: '10px', marginTop: '10px', marginLeft: '-15px'}}>
                    <Row>
                    <Col sm='8'><Form.Control size="sm" style={{ width: '145px', borderRadius: '2rem', backgroundColor: 'rgba(256, 256, 256, 0.7)'}} id="myInput" onChange={event => setMessage(event.target.value)}>
                    </Form.Control></Col>
                    <Col style={{marginTop: '0px', marginLeft: '4px'}} ><div style={{ flexDirection: 'row-reverse' }}><SendMessageButton size={23} style={{ textAlign: 'left' }} onClick={() => {sendMessage();}}/></div></Col>
                    </Row>
                    </Container>
                </Form>
                </Card.Body>
              </Card>
          </div>
        </div>
    )
}

export default Chat
