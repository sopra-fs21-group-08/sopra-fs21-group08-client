import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { api, handleError } from '../../helpers/api';

import { Accordion, Card, Row, Col } from 'react-bootstrap';

import TransportButton from './TransportButton'
import mrx from '../../assets/img/avatar/mrx.png'

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
        paddingRight: 0,
        paddingTop: 5,
        alignSelf: 'center'
    }
};

const MisterX = ({isMoving}) => {
    var opacity = isMoving ? 1 : 0.5
    const { id } = useParams()


    // fetch info about Mister X from Backend
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await api.get('/games/'+ id + '/mrx'); 
    //         console.log(response);
    //         const mrx = response.data;
    //         console.log(mrx);
    //     };
    //     fetchData();
    // }, []);

    const misterX = {
        'userId': 2,
        'userName' : 'Jack',
        'stationId' : 56,
        'ticketWallet' : {
            'Tram' : 4,
            'Bus' : 3,
            'SBahn' : 2,
            'Double' : 4,
            'Black' : 2
        }
    }

    return (
        <>
        <Accordion defaultActiveKey="0">
            <Card bg={'secondary'}
            text = {'info' === 'light' ? 'dark' : 'white'} 
            style={{ width: '13rem', opacity: opacity }} 
            className="player"  
            >
                <Accordion.Toggle as= {Card.Header} eventKey="0">
                    <Row >
                    <Col xs={3} ><Card.Img variant="top" src={mrx}/></Col>
                    <Col>Mister X : {misterX.userName}</Col>
                    </Row >
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body style={{paddingLeft: 10, paddingRight: 0, paddingTop: 5,paddingBottom: 5}}>
                    <Row style={{fontSize: 10}} >
                        <Col md="auto">
                            <Card.Text>
                                1. Bus
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                2. Tram
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                <b>3. Black</b>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row style={{fontSize: 10}} >
                        <Col md="auto">
                            <Card.Text>
                                4. Tram
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                5. Bus
                            </Card.Text>
                        </Col>
                        <Col md="auto">
                            <Card.Text>
                                6. Tram
                            </Card.Text>
                        </Col>
                    </Row>
                    
                </Card.Body>
                </Accordion.Collapse>
                <Card.Footer style={{paddingRight: 0, paddingTop: 0,paddingBottom: 5}}>
                    <Row>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={misterX.ticketWallet.Tram}>Tram : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={misterX.ticketWallet.Bus}>Bus : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={misterX.ticketWallet.SBahn}>S-Bahn : </TransportButton>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col style={styles.col}>
                            <TransportButton number={misterX.ticketWallet.Double}>Double : </TransportButton>
                        </Col>
                        <Col style={styles.col}>
                            <TransportButton number={misterX.ticketWallet.Black}>Black : </TransportButton>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            </Accordion>
        </>
    )
}

export default MisterX
