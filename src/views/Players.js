import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import defaultavatar from '../assets/img/avatar/avatar0.jpeg';
import avatar0 from '../assets/img/avatar/avatar1.png'
import avatar1 from '../assets/img/avatar/avatar2.png'
import avatar2 from '../assets/img/avatar/avatar3.png'
import avatar3 from '../assets/img/avatar/avatar4.png'
import avatar4 from '../assets/img/avatar/avatar5.png'
import avatar5 from '../assets/img/avatar/avatar6.png'
import avatar6 from '../assets/img/avatar/avatar7.png'
import { api, handleError } from '../helpers/api';
import { Card, Form, Alert, CardDeck, Image, Container, Col, Row, Modal } from 'react-bootstrap';
import User from '../components/shared/models/User';


/**
 * This is an example of a Functional and stateless component (View) in React. 
 * Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const Players = () => {

    const [users, setusers] = useState([[]]);

    useEffect(() =>
    {
      const fetchData = async () => {
          const response = await api.get('/users/');
          console.log(response);
          const users = response.data;
          setusers(users);
          console.log(users);
      };
      fetchData();

      const interval=setInterval(()=>{
            fetchData()
           },1000)

      return()=>clearInterval(interval)
    }, []);

  const avatar = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]
  return (
          <div>
            <Card className="hcenter" style={{ width: '27rem', height: '29rem', margin: '0.5rem',  borderColor: '#0F05A0', borderRadius: '1rem', webkitFilter: 'drop-shadow(5px 5px 5px #222)', filter: 'drop-shadow(5px 5px 5px #222)' }}>
                <Card.Header style={{fontSize: 28, borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', backgroundColor:'white', color:'#0F05A0'}}>
                   Other Players
                </Card.Header>
              <Card.Body style={{overflowY: 'scroll'}}>
                 <Row>
                 {users.map(user => (
                 <>
                 {(() => {
                 if(user.status == "ONLINE" && user.userId != localStorage.getItem('userId')) {
                   return(
                   <Col xs={4}>
                    <Card.Img variant="top" style={{webkitFilter: 'drop-shadow(2px 2px 2px #222)', filter: 'drop-shadow(5px 5px 5px #222)'}} src={avatar[user.userId%7]} />
                    <div className='mt-2'>
                    </div>
                    {user.username}
                    <div className='mt-4'>
                    </div>
                   </Col>
                   )
                 }
                 else if(user.userId != localStorage.getItem('userId')) {
                   return(
                   <Col xs={4}>
                    <Card.Img variant="top" style={{webkitFilter: 'drop-shadow(5px 5px 5px #222)', filter: 'drop-shadow(5px 5px 5px #222)', Overflow: 'visible', opacity: 0.3}} src={avatar[user.userId%7]} />
                    <div className='mt-2'>
                    </div>
                    <div style={{ opacity: 0.3 }}>
                    {user.username}
                    </div>
                    <div className='mt-4'>
                    </div>
                   </Col>
                   )
                 }
                   })()}
                 </>
                 ))}
                 </Row>
              </Card.Body>
            </Card>
          </div>
    );
};

export default Players;
