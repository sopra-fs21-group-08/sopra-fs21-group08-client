import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom';

import { Button, Row, Col } from 'react-bootstrap'

import { ChatFill } from 'react-bootstrap-icons';
import ChatIcon from './Chat/chat-icon-white.png';
import CloseIcon from './Chat/Close-icon.png';


import Player from './Player'
import MisterX from './MisterX'
import Chat from './Chat/Chat'
import QuitButton from './QuitButton';

const Sidebar = ({players, fetchPossibleMoves, blackBoard, turnUserId, gameId, selectPosition}) => {

  const [thisPlayers, setThisPlayers] = useState([])
  const [chatopen, setchatopen] = useState(false)

  const toggle = () => {setchatopen(!chatopen)}

  useEffect(()=>{
    setThisPlayers(players)
  }, [players])

  return(
      <div className='sidebar'>
          {thisPlayers.map((player, index) => (
            <>
            {(() => {
                 if(index === 0&&player.user !== null) {
                   return(
                   <MisterX key={index}
                            onClick={()=>{selectPosition(player)}}
                            blackBoard={blackBoard} 
                            player={player} 
                            isMoving={player.user.userId === turnUserId ? true : false}
                            fetchPossibleMoves={fetchPossibleMoves}/>
                   )
                 }else if (player.user !== null){
                   return(
                    <Player key={index}
                    onClick={()=>{selectPosition(player)}}
                            player={player} 
                            color={index} 
                            isMoving={player.user.userId === turnUserId ? true : false}
                            fetchPossibleMoves={fetchPossibleMoves}/>
                   )
                 }})()}
            </>
          ))}
          <Row>
          <Col><QuitButton gameId={gameId}/></Col>
          {(() => {
          if(chatopen == false){
            return(
              <Col><Button style={{ marginTop: 20, width: '2.5rem', height: '2.5rem', borderRadius: '2.5rem', marginLeft: '-1rem', color:'blue'}} onClick={toggle}><img src={ChatIcon} style={{height:'20px', width:'20px', marginLeft:'-3px', marginTop:'-2px', color:'white'}} /></Button></Col>
            )
          }
          else {
            return(
                <Col><Button style={{ marginTop: 20, width: '2.5rem', height: '2.5rem', borderRadius: '2.5rem', marginLeft: '-1rem', color:'blue'}} onClick={toggle}><img src={CloseIcon} style={{height:'20px', width:'20px', marginLeft:'-2px', marginTop:'-3px', color:'white'}} /></Button></Col>
            )
          }
          })()}
          </Row>
          <Chat chatopen={chatopen}/>
      </div>
    );
}


export default Sidebar
