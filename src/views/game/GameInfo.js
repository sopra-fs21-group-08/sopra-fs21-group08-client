import { Card, Row, Col } from 'react-bootstrap';

const GameInfo = ({gameStatus, amIMrX}) => {
    
    const currentPlayerUsername = gameStatus.currentPlayer&&gameStatus.currentPlayer.user&&gameStatus.currentPlayer.user.username
    const mrXVisible = gameStatus.mrXVisible ? "visible" : "not visible"
    const userId = parseInt(localStorage.getItem("userId"));
    const currentPlayerID = gameStatus.currentPlayer&&gameStatus.currentPlayer.user&&gameStatus.currentPlayer.user.userId
    const currentPlayer = currentPlayerID === userId ? "It's your turn" : currentPlayerUsername + " makes a move"


    if (amIMrX){
        return(
            <>
            <Card bg={'secondary'}
            text = {'white'} 
            style={{ width: '13rem', height: '6rem', paddingTop: 0, paddingBottom: 0, }} 
            className="player"  
            >
                <Card.Body style={{fontSize: 14}}>
                    <Row >
                        <Card.Text>
                            <b>Round {gameStatus.currentRound}/22 </b>
                        </Card.Text>
                    </Row>
                    <Row >
                        <Card.Text>
                            {currentPlayer} 
                        </Card.Text>
                    </Row>
                    <Row >
                        <Card.Text>
                            Your position is {mrXVisible} 
                        </Card.Text>
                    </Row>
                    
                </Card.Body>
            </Card>
        </>
        )
    }else{
        return (
            <>
                <Card bg={'light'}
                text = {'dark'} 
                style={{ width: '13rem', height: '6rem', paddingTop: 0, paddingBottom: 0, }} 
                className="player"  
                >
                    <Card.Body style={{fontSize: 14}}>
                        <Row >
                            <Card.Text>
                                <b>Round {gameStatus.currentRound}/22 </b>
                            </Card.Text>
                        </Row>
                        <Row >
                            <Card.Text>
                                {currentPlayer} 
                            </Card.Text>
                        </Row>
                        <Row >
                            <Card.Text>
                                Mister X is {mrXVisible} now
                            </Card.Text>
                        </Row>
                        
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default GameInfo



// {
//     "gameId": 3,
//     "currentPlayer": {
//         "user": {
//             "userId": 7,
//             "username": "filip6",
//             "status": "ONLINE",
//             "dob": "1995-07-14",
//             "creationDate": "2021-05-01"
//         },
//         "playerClass": "MRX",
//         "stationId": 219,
//         "wallet": {
//             "train": 10,
//             "tram": 10,
//             "bus": 10,
//             "black": 2,
//             "double": 2
//         }
//     },
//     "currentRound": 1,
//     "gameOver": false,
//     "mrXVisible": false
// }
