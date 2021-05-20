import React, {useState} from 'react'
import { Button, Modal, Carousel, Card } from 'react-bootstrap'

import ZButton from '../../views/design/ZButton'

import zurich_map from '../../assets/img/background/zurich-map.jpeg'

function Rules(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='rules' style={props.style}>
            <Button variant="light" onClick={handleShow}>Rules</Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton> 
                <Modal.Title>Game rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Mr. X Zürich Edition</h3>
                    <h4>RULES</h4>
                    <p>
                        Mister X tries to escape his would-be capturers in Zurich by bus, tram and train. You have to be a particularly clever detective to be able to catch him. <br/>
                        Mister X tries to stay one step ahead of the detectives and keep them guessing at his whereabouts right up until the end of the game, while the detectives try to pick up his trail and track him down.
                    </p>
                        <p>
                            <h5>Setup</h5>
                            3 - 6 players.<br/>
                            Roles and positions on the map are randomly assigned. One player becomes Mister X and all others are detectives. <br/>
                            <br/>
                            <h6>Mister X receives</h6>
                            <b>Tram</b> x 4<br/>
                            <b>Bus</b> x 3<br/>
                            <b>Train</b> x 3<br/>
                            <b>Double-move</b> x 2<br/>
                            <b>Black</b> x(# of detectives)<br/>
                            <i>Note: Mister X picks up normal tickets from the general draw pile throughout the game. </i><br/>
                            <br/>
                            <h6>Each detective receives</h6>
                            <b>tram</b> x 10<br/>
                            <b>bus</b> x 8<br/>
                            <b>S-Bahn</b> x 4<br/>
                            <br/>
                        </p>
                        <p>
                            <h5>Initial Starting Position</h5>
                            Positions are randomly assigned to the players. Mister X only visible for the detectives at rounds 3, 8, 13, 18.
                        </p>
                        <p>
                            <h5>Game Play</h5>
                            Up to 22 rounds are played. In one round, Mister X first makes his move and then each of the detectives make their moves. Mister X and each detective must change their respective location.
                        </p>
                        <p>
                            <h5>How to use tickets</h5>
                            Each place on the map is a station for 1 to 3 means of transportation (tram, bus, train). The colors of the stations indicate which means of transportation start and stop there.<br/>
                            To be able to use a particular means of transportation the playing piece must be on a station for that means of transportation (the color is in the circle).<br/>
                            To move a player should choose a card with a corresponding means of transport and possible options will be highlighted.<br/>
                            <b>Tram - Yellow</b><br/>
                            With tram you can cover the shotetst distance. <br/>
                            <b>Bus - Blue</b><br/>
                            Bus can drive you from one blue circle to another. <br/>
                            <b>Train - Red</b><br/>
                            The train travels along the red line and covers the furthest distances the quickest. However, there are only a few S-Bahn stations on the map. <br/>
                            All playing pieces can only be moved to unoccupied stations. If there are no unoccupied stations for Mister X to travel to, he has lost the game. Mister X also loses if either a detective or a Bobby moves to the station where Mister X is located.<br/>

                        </p>
                        <p>
                            <h5>End of the Game</h5>
                            The game ends in case detectives catch Mister X (detectives win) or if 22 rounds are over and Mister X is not found.
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

