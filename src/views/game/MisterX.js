import { Accordion, Card, Row, Col } from 'react-bootstrap';
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
        paddingRight: 0,
        paddingTop: 5,
        alignSelf: 'center'
    }
};

const MisterX = ({isMoving=false}) => {
    var opacity = isMoving ? 1 : 0.5
    var transportInfo = []
    transportInfo['Tram'] = 10
    transportInfo['Bus'] = 8
    transportInfo['S-Bahn'] = 0
    transportInfo['Double'] = 2
    transportInfo['Black'] = 3

    return (
        <>
        <Accordion defaultActiveKey="0">
            <Card bg={'secondary'}
            text = {'info' === 'light' ? 'dark' : 'white'} 
            style={{ width: '13rem', opacity: opacity }} 
            className="hcenter"  
            >
                <Accordion.Toggle as= {Card.Header} eventKey="0">
                    Mister X
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
                            <TransportButton number={transportInfo['Tram']}>Tram : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={transportInfo['Bus']}>Bus : </TransportButton>
                        </Col>
                        <Col md="auto" style={styles.col}>
                            <TransportButton number={transportInfo['S-Bahn']}>S-Bahn : </TransportButton>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col style={styles.col}>
                            <TransportButton number={transportInfo['Double']}>Double : </TransportButton>
                        </Col>
                        <Col style={styles.col}>
                            <TransportButton number={transportInfo['Black']}>Black : </TransportButton>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            </Accordion>
        </>
    )
}

export default MisterX
