import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Card, Row, Col } from 'react-bootstrap';
import avatar0 from '../../assets/img/avatar/avatar1.png'
import avatar1 from '../../assets/img/avatar/avatar2.png'
import avatar2 from '../../assets/img/avatar/avatar3.png'
import avatar3 from '../../assets/img/avatar/avatar4.png'
import avatar4 from '../../assets/img/avatar/avatar5.png'
import avatar5 from '../../assets/img/avatar/avatar6.png'
import avatar6 from '../../assets/img/avatar/avatar7.png'
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

const Player = ({playerId, color, isMoving=false}) => {
    const { id } = useParams()
    var opacity = isMoving ? 1 : 0.5
    const avatar = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]
    const themes = ['primary','success','danger','warning','info']
    // const [player, setPlayer] = useState();
    

    // fetch info about Mister X from Backend
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await api.get('/games/'+ id + '/players/' + playerId); 
    //         console.log(response);
    //         setPlayer(response.data);
    //         console.log(player);
    //     };
    //     fetchData();
    // }, []);

    const player = {
        'userId': playerId,
        'userName' : 'John',
        'stationId' : 100,
        'ticketWallet' : {
            'Tram' : 10,
            'Bus' : 8,
            'SBahn' : 4
        }
    }


    return (
        <>
            <Card bg={themes[color-1]}
            text = {'info' === 'light' ? 'dark' : 'white'} 
            style={{ height: '5rem', opacity: opacity }} 
            className="player"  
            >
                <Card.Body>
                    <Row >
                        <Col xs={3} ><Card.Img variant="top" src={avatar[player.userId%7]} /></Col>
                        <Col style={styles.col}>
                            <Card.Text>{player.userName}</Card.Text>
                            
                        </Col>
                    </Row>
                    <Row >
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.ticketWallet.Tram}>Tram : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.ticketWallet.Bus}>Bus : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={player.ticketWallet.SBahn}>S-Bahn : </TransportButton>
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
