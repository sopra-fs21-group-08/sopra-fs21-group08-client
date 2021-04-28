import { Card, Row, Col } from 'react-bootstrap';

const GameInfo = ({currentRound, currentPlayer}) => {

    return (
        <>
            <Card bg={'light'}
            text = {'dark'} 
            style={{ width: '13rem', height: '5rem', paddingTop: 0, paddingBottom: 0, }} 
            className="hcenter"  
            >
                <Card.Body style={{fontSize: 14}}>
                    <Row >
                        <Card.Text>
                            <b>Round {currentRound}/22 </b>
                        </Card.Text>
                    </Row>
                    <Row >
                        <Card.Text>
                            Turn of {currentPlayer}
                        </Card.Text>
                    </Row>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default GameInfo
