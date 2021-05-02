import React from 'react'
import { Accordion, Card, Row, Col } from 'react-bootstrap';

function BlackBoard({moves}) {
    return (
        <>
        <Accordion.Collapse eventKey="0">
                <Card.Body style={{paddingLeft: 10, paddingRight: 0, paddingTop: 5,paddingBottom: 5}}>
                    <Row style={{fontSize: 10}} >
                        {moves.map((move, index)=>
                        <Col md="auto" key={"mrx-move-"+index}>
                        <Card.Text>
                            {index+1 +". "+move.ticket}
                        </Card.Text>
                        </Col>
                        )}
                        
                        </Row>
                    
                </Card.Body>
                </Accordion.Collapse>
            
        </>
    )
}

export default BlackBoard
