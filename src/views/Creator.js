import { Card, Col, Image, Row } from "react-bootstrap"


function Creator({name, image, skills}) {
    return (
        <>
            <Col md={6} className="pt-2">
                            <Card>
                                <Card.Body>
                                    <Row>
                                    <Col md={3}><Image className="mx-auto" height={70} src="https://via.placeholder.com/150" roundedCircle /></Col>
                                    <Col md={9}>
                                        <h4>{name}</h4>
                                        {skills}
                                    </Col>
                                    </Row>
                                    </Card.Body>
                            </Card>
                        </Col>
    
        </>
    )
}

export default Creator
