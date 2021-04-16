import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Player from './Player'
import MisterX from './MisterX'

const Sidebar = () => {
  return(
    <div className='sidebar'>
        <MisterX isMoving={true}/>
        <Player player={1} color={Number(1)}/>
        <Player player={2} color={Number(2)} isMoving={true}/>
        <Player player={3} color={Number(3)}/>
        <Player player={4} color={Number(4)}/>
    </div>
  );
}


export default Sidebar