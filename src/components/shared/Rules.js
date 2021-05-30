import React, {useState} from 'react'
import { Button, Modal, Image, Row, Col} from 'react-bootstrap'

import mrXMode from '../../assets/img/tutorial/mrXMode.png'
import detectiveMode from '../../assets/img/tutorial/detectiveMode.png'
import blackboard from '../../assets/img/tutorial/blackboard.png'
import mrXCard from '../../assets/img/tutorial/mrXCard.png'
import playerCard from '../../assets/img/tutorial/playerCard.png'
import possibleMoves from '../../assets/img/tutorial/possibleMoves.png'
import chooseATicket from '../../assets/img/tutorial/chooseATicket.png'

function Rules(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='rules' style={props.style}>
            <Button variant="light" onClick={handleShow}>Rules</Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton> 
                <Modal.Title><h3>Mr. X Zürich Edition</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Welcome to a special SoPra edition of the famous board game Scotland Yard!<br/>
                        This time, Mister X tries to escape the detectives in the city of Zurich.
                    </p>
                    <p>
                        <h4>Starting Position</h4>
                        This game is designed for <b>3-6 players</b>. One person becomes Mister X and all the others are Detectives.
                        The roles and initial positions on the map are assigned automatically.<br/>
                        <br/>

                        <h4>Detective and Mister X Screen Mode</h4>
                        <Row>
                            <Col>
                                <Image className="mx-auto img-fluid" height={400} src={detectiveMode} rounded />
                            </Col>
                            <Col>
                                <Image className="mx-auto img-fluid" height={400} src={mrXMode} rounded />
                            </Col>
                        </Row>
                        Mister X is not visible to the detectives most of the time.<br/>
                        His/her position is revealed at <b>rounds 3, 8, 13, 18 and 22 </b> (highlighted on the blackboard). <br/> 
                        Outside of these rounds, the detectives can see the last revealed position of Mr X. For example, if it's currently round 5, the detectives see where Mr X was at round 3.
                        Mr X always sees his/her current position.<br/>
                        <br/>
                        <h4>Blackboard</h4> 
                        <Row>
                            <Col>
                                <Image className="mx-auto img-fluid" src={blackboard} rounded />
                            </Col>
                        </Row>
                        After every round, Mr X reveals the ticket he/she has used. This information is shown on the blackboard. <br/>
                        You can also see when the position of Mr X was last revealed and which rounds it will be visible again.
                        <br/>
                        <br/>
                        <h4>Game Flow</h4>
                        Up to 22 rounds are played. In one round, Mister X first makes his move and then each of 
                        the detectives make their moves. <br/>
                        Tip: Use the chat to discuss your strategy!<br/>
                        <br/>
                        <h4>Tickets</h4>
                        Each detective receives : <b>Tram</b> (10), <b>Bus</b> (10), <b>Train</b> (10)<br/>
                        Mister X receives : <b>Tram</b> (10), <b>Bus</b> (10), <b>Train</b> (10), <b>Double-move</b> (2), <b>Black</b> (2)
                            <br/>
                            
                        </p>
                            <h4>How to use tickets</h4>
                            Each station on the map can be used by 1 to 3 means of transportation (<font style={{color:"blue"}}>tram</font>, 
                            <font style={{color:"yellow"}}> bus</font>, <font style={{color:"red"}}>train</font>). 
                            The colors of the stations indicate which means of transportation start and stop there.<br/>
                            Each player can use only one ticket during the turn. <br/>
                            <Row>
                            <Col>
                                <Image className="mx-auto img-fluid" height={180} src={possibleMoves} rounded />
                            </Col>
                            <Col>
                                <Image className="mx-auto" src={chooseATicket} rounded />
                            </Col>
                            </Row>
                            To make a move, a player should click on a button with the corresponding means of transport on his/her player card.
                            Possible options will be highlighted. Choose one of the given options. <br/>
                            <br/>
                            <h4>Special tickets</h4>
                            Special tickets are only available to Mister X.<br/>
                            <b> Black Ticket : </b>
                            Mr X can travel with any available means of transport.<br/>
                            <b> Double Ticket : </b>
                            Mr X can travel two stations in a row with any possible combination of transports.<br/>
                            <br/>
                        <p>
                            <h4>End of the Game</h4>
                            The game ends if the detectives catch Mister X (detectives win) or if 22 rounds are over and Mister X is still not found (Mister X wins).
                        </p>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Rules

