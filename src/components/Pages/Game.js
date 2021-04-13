import { useParams } from 'react-router-dom';

import Header from '../../views/Header'

const Game = () => {
    const {id} = useParams()

    return (
        <div>
            <Header />
            <h1>This is game with ID {id}</h1>

        </div>
    )
}

export default Game
