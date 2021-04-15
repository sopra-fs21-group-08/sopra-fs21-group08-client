import { useParams } from 'react-router-dom';

import Header from '../../views/Header'
import Player from '../../views/game/Player'

const Game = () => {
    const {id} = useParams()

    return (
        <div>
            <Header />
            <h1 className="hcenter">This is a game with ID {id}</h1>

            <Player player={1} color={Number(1)}/>
            <Player player={2} color={Number(2)} isMoving={true}/>
            <Player player={3} color={Number(3)}/>
            <Player player={4} color={Number(4)}/>

        </div>
    )
}

export default Game

// REST:
// After game is initiated backend forms a list of players.
// One player becomes mister X and others are detectives
// Player : id, username, position, ticketWalet (tram, bus, S-Bahn, Black, Double)
// Game: info about round and whose turn it is
// 
