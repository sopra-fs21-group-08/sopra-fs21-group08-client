import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import avatar6 from '../assets/img/avatar/avatar7.png'
import { api, handleError } from '../helpers/api';
import { Card, Form, Alert, CardDeck, Image, Container, Col, Row, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory, Link, withRouter } from 'react-router-dom';

const Lobbies = () => {

    let history = useHistory();

    const [lobbies, setlobbies] = useState([[]]);
    const [lobbyId, setlobbyId] = useState([]);

    useEffect(() =>
    {
      const fetchData = async () => {
          const response = await api.get('/lobbies/');
          console.log(response);
          const lobbies = response.data;
          setlobbies(lobbies);
          console.log(lobbies);
      };
      fetchData();

      const interval=setInterval(()=>{
            fetchData()
           },10000)

      return()=>clearInterval(interval)
    }, []);

    const join = async (e) => {
        const requestBody = JSON.stringify({
          userId: localStorage.getItem("userId")
        });
        try{
          await api.put('/lobbies/' + e.target.id, requestBody);
          history.push('lobbies/' + e.target.id);
        } catch (error) {
           alert(`Something went wrong while trying to join the Lobby: \n${handleError(error)}`);
        }
    };

  return (
      <>
         {lobbies.map(lobby => (
         <>
         {(() => {
         if(lobby == null) {
           return(
           <div>
           There are no lobbies to join.
           </div>
           )
         }
         else {
           return(
           <Row className="mt-3">
             <Col xs="1">{lobby.lobbyId}</Col>
             <Col xs="4">{lobby.lobbyName}</Col>
             <Col xs="4">{lobby.amountOfUsers}/6</Col>
             <Col>{lobby.gameStarted}</Col>
             <Col><Button
             className="zbg-3"
             onClick={join}
             id={lobby.lobbyId}>
             Join
             </Button></Col>
           </Row>
           )
         }
           })()}
         </>
         ))}
      </>
    );
};

export default Lobbies;
