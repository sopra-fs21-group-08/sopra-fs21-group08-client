import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Player from './Player'
import MisterX from './MisterX'
import Button from 'react-bootstrap/Button';
import { useHistory, Link, withRouter } from 'react-router-dom';

const Sidebar = () => {
  let history = useHistory();
  const handleClick = () => history.push('/game')

  return(
    <div className='sidebar'>
        <MisterX isMoving={true}/>
        <Player player={1} color={Number(1)}/>
        <Player player={2} color={Number(2)} isMoving={true}/>
        <Player player={3} color={Number(3)}/>
        <Player player={4} color={Number(4)}/>
        <Button variant="danger" style={{ marginTop: 20, width: '13rem'}} onClick={handleClick}> Quit Game </Button>
    </div>
  );
}


export default Sidebar