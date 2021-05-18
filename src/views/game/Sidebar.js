import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom';

import Player from './Player'
import MisterX from './MisterX'
import Chat from './Chat/Chat'
import QuitButton from './QuitButton';

const Sidebar = ({players, fetchPossibleMoves, blackBoard, turnUserId }) => {

  const [thisPlayers, setThisPlayers] = useState([])

  useEffect(()=>{
    setThisPlayers(players)
  }, [players])

  return(
      <div className='sidebar'>
          <Chat />
          {thisPlayers.map((player, index) => (
            <>
            {(() => {
                 if(index === 0&&player.user !== null) {
                   return(
                   <MisterX key={index}
                            blackBoard={blackBoard} 
                            player={player} 
                            isMoving={player.user.userId === turnUserId ? true : false}
                            fetchPossibleMoves={fetchPossibleMoves}/>
                   )
                 }else if (player.user !== null){
                   return(
                    <Player key={index} 
                            player={player} 
                            color={index} 
                            isMoving={player.user.userId === turnUserId ? true : false}
                            fetchPossibleMoves={fetchPossibleMoves}/>
                   )
                 }})()}
            </>
          ))}
          <QuitButton/>
      </div>
    );
}


export default Sidebar
