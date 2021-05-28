import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Chat';
import ChatIcon from './Chat/chat-icon-white.png';
import CloseIcon from './Chat/Close-icon.png';
import MisterX from './MisterX';
import Player from './Player';
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
          <QuitButton gameId={gameId} />
          {(() => {
          if(chatopen == false){
            return(
              <Button style={{ marginTop: -68, marginLeft: '3px', width: '2.5rem', height: '2.5rem', borderRadius: '2.5rem', color:'blue'}} onClick={toggle}><img src={ChatIcon} style={{height:'16px', width:'16px', marginLeft:'-1px', marginTop:'-4px', color:'white'}} /></Button>
            )
          }
          else {
            return(
              <Button style={{ marginTop: -68, marginLeft: '3px', width: '2.5rem', height: '2.5rem', borderRadius: '2.5rem', color:'blue'}} onClick={toggle}><img src={CloseIcon} style={{height:'17px', width:'17px', marginLeft:'-1px', marginTop:'-3px', color:'white'}} /></Button>
            )
          }
          })()}
          <Chat chatopen={chatopen} />
          <div style={{height: '9rem'}}/>
      </div>
    );
}


export default Sidebar
