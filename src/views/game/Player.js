import { Card, Row, Col } from 'react-bootstrap';
import avatar from '../../assets/img/avatar/avatar3.png'
import TransportButton from './TransportButton'

const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row: {
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 5,
        paddingRight: 0
    }
};

const Player = ({player, color, isMoving=false}) => {
    const detective = 'Detective'
    var transportInfo = []
    transportInfo['Tram'] = 10
    transportInfo['Bus'] = 8
    transportInfo['S-Bahn'] = 0
    const themes = ['primary','success','danger','warning','info']
    var opacity = isMoving ? 1 : 0.3


    return (
        <>
            <Card bg={themes[color-1]}
            text = {'info' === 'light' ? 'dark' : 'white'} 
            style={{ width: '13rem', height: '5rem' , opacity: opacity }} 
            className="hcenter"  
            >
                <Card.Body>
                    <Row >
                        <Col xs={3} ><Card.Img variant="top" src={avatar} /></Col>
                        <Col style={styles.col}>
                            <Card.Text>{detective} {player}</Card.Text>
                            
                        </Col>
                    </Row>
                    <Row >
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={transportInfo['Tram']}>Tram : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={transportInfo['Bus']}>Bus : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={transportInfo['S-Bahn']}>S-Bahn : </TransportButton>
                        </Col>
                    </Row>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default Player

// each player has it's own color, username, icon, position
// upon hover propose to exit game
