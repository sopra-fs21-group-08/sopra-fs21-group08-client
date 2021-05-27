import React, { useState, useEffect } from 'react'

import { api } from '../helpers/api';
import { Card, Col, Row } from 'react-bootstrap';
import {avatars} from '../views/design/Avatars'

const Players = () => {

    const [users, setusers] = useState([[]]);

    useEffect(() =>
    {
      const fetchData = async () => {
          const response = await api.get('/users/');
          const users = response.data;
          setusers(users);
      };
      fetchData();
      const interval=setInterval(()=>{
            fetchData()
           },1000)

      return()=>clearInterval(interval)
    }, []);

  return (
          <div>
            <Card className="soft-white" style={{ width: '30rem', height: '33rem', marginBottom: '3rem', flex: 1 }}>
                <Card.Header style={{fontSize: '1.3rem', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', background: 'none'}}>
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
                    <Card.Img variant="top" src={avatars[user.userId%7]} />
                    <div className='mt-2'>
                    </div>
                    <div style={{fontSize: 20}}>
                      {user.username}
                    </div>
                    <div className='mt-4'>
                    </div>
                   </Col>
                   )
                 }
                 else if(user.userId != localStorage.getItem('userId')) {
                   return(
                   <Col xs={4}>
                    <Card.Img variant="top" style={{Overflow: 'visible', opacity: 0.3}} src={avatars[user.userId%7]} />
                    <div className='mt-2'>
                    </div>
                    <div style={{ opacity: 0.3 }}>
                    <div style={{fontSize: 20}}>
                      {user.username}
                    </div>
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
