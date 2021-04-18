import React, { useState, useEffect, Image } from 'react'
import Header from '../../views/Header'
import avatar0 from '../../assets/img/avatar/avatar1.png'
import avatar1 from '../../assets/img/avatar/avatar2.png'
import avatar2 from '../../assets/img/avatar/avatar3.png'
import avatar3 from '../../assets/img/avatar/avatar4.png'
import avatar4 from '../../assets/img/avatar/avatar5.png'
import avatar5 from '../../assets/img/avatar/avatar6.png'
import avatar6 from '../../assets/img/avatar/avatar7.png'
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import { api, handleError } from '../../helpers/api';
import { useHistory, Link, withRouter } from 'react-router-dom';
import User from '../shared/models/User';

const GameOver = ({victory=true}) => {
    const [user, setuser] = useState([]);
    const Quit = () => history.push('/game')
    const PlayAgain = () => history.push('/game/1')
    const avatar = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

    let history = useHistory();

    useEffect(() =>
    {
      const fetchData = async () => {
        const response = await api.get('/users/'+localStorage.getItem('userId'));
        console.log(response);
        const user = new User(response.data);
        setuser(user);
      };
      fetchData();
    },[]);
  if(victory==true){
      return (
        <div className="header">
            <h1 className="display-2">Victory</h1>
        <center>
        <Container style={{marginLeft: 40}}>
            <Col xs={2}><Card.Img variant="top" src={avatar[user.userId%7]} /></Col>
            <strong style={{fontSize: 24}}>{user.username}</strong>
        </Container>
        <Col><Button variant="success" style={{ marginTop: 100, width: '13rem'}} onClick={PlayAgain}> Play Again </Button></Col>
        <Col><Button variant="danger" style={{ marginTop: 30, width: '13rem'}} onClick={Quit}> Quit Game </Button></Col>
        </center>
        </div>
      );
  }
  else{
      return (
        <div className="header">
            <h1 className="display-2">Defeat</h1>
        <center>
        <Container style={{marginLeft: 40}}>
            <Col></Col>
            <strong></strong>
        </Container>
        <Col><Button variant="success" style={{ marginTop: 100, width: '13rem'}} onClick={PlayAgain}> Play Again </Button></Col>
        <Col><Button variant="danger" style={{ marginTop: 30, width: '13rem'}} onClick={Quit}> Quit Game </Button></Col>
        </center>
        </div>
      );
  }
}

export default GameOver