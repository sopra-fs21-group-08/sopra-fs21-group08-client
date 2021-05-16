import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

import ZButton from '../../views/design/ZButton'

function Rules() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='rules'>
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
                </Modal.Body>
                
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Rules

// <Modal.Body>
//                     <div>
//                         <h3>Mr. X Zürich Edition</h3>
//                         <h4>RULES</h4>
                        // <p>
                        // Mister X tries to escape his would-be capturers in Zurich by bus, tram and S-bahn. You have to be a particularly clever detective to be able to catch him. <br/>
                        // Mister X tries to stay one step ahead of the detectives and keep them guessing at his whereabouts right up until the end of the game, while the detectives try to pick up his trail and track him down.
                        // </p>
                        // <p>
                        //     <h5>Setup</h5>
                        //     3 - 6 players.<br/>
                        //     Roles and positions on the map are randomly assigned. One player becomes Mister X and all others are detectives. <br/>
                        //     <br/>
                        //     <h6>Mister X receives</h6>
                        //     <b>Double-move</b> x 2<br/>
                        //     <b>Black</b> x(# of detectives)<br/>
                        //     <b>Tram</b> x 4<br/>
                        //     <b>Bus</b> x 3<br/>
                        //     <b>S-Bahn</b> x 3<br/>
                        //     <i>Note: Mister X picks up normal tickets from the general draw pile throughout the game. </i><br/>
                        //     <br/>
                        //     <h6>Each detective receives</h6>
                        //     <b>tram</b> x 10<br/>
                        //     <b>bus</b> x 8<br/>
                        //     <b>S-Bahn</b> x 4<br/>
                        //     <br/>
                        //     {/* <h6>Less than 4 detectives</h6>
                        //     If less than 4 detectives are in the game, Bobbies in the form of additional playing pieces lend a helping hand:<br/>
                        //     * For 2 detectives: 2 Bobbies<br/>
                        //     * For 3 detectives: 1 Bobby<br/>
                        //     For games with 2 or 3 detectives, both detectives and Bobbies are in play!<br/>
                        //     Each Bobby is represented by one of the remaining playing pieces. Place a cardboard ring around each playing piece representing a Bobby. The ring stays on the respective playing pieces throughout the game to indicate that they're Bobbies.<br/>
                        //     The ring is their free fare for all means of transportation. Bobbies don't require any tickets for their moves! Bobbies are moved collectively by all detectives during the game. The detectives decide together where the Bobbies should move. */}
                        // </p>
                        // <p>
                        //     <h5>Initial Starting Position</h5>
                        //     To determine your starting position, shuffle the start cards according to the back side of the cards (D and X). Shuffle the D and X cards separately, placing them face down on the table.
                        //     <br/>Each detective draws a start card with the D on the back and places his playing piece on the corresponding station.
                        //     {/* <br/>If Bobbies are in play, draw one start card with a D on the back for each Bobby and place its playing piece on the corresponding station. Then, Mister X draws a start card with an X on the back and looks at the card without revealing it to the detectives, but does not place his playing piece on the game board. */}
                        // </p>
                        // <p>
                        //     <h5>Game Play</h5>
                        //     Up to 22 rounds are played. In one round, Mister X first makes his move and then each of the detectives and Bobbies make their moves in any order. Mister X, each detective and each Bobby must change their respective location.
                        //     <br/>For each distance travelled, the detectives use a ticket from their ticket board and put it on the general draw pile. Mister X always gets his tickets from the general draw pile!
                        // </p>
                        // <p>
                        //     <h5>How to use tickets</h5>
                        //     Each place on the map is a station for 1 to 3 means of transportation (taxi, bus, underground). The colors of the stations indicate which means of transportation start and stop there.<br/>
                        //     To be able to use a particular means of transportation the playing piece must be on a station for that means of transportation (the color is in the circle).<br/>
                        //     To move a player should choose a card with a corresponding means of transport and possible options will be highlighted.
                        //     <b>Tram - Yellow</b><br/>
                        //     With tram you can cover the shotetst distance. <br/>
                        //     <b>Bus - Blue</b><br/>
                        //     Bus can drive you from one blue circle to another. <br/>
                        //     <b>S-Bahn - Red</b><br/>
                        //     The S-Bahn travels along the red line and covers the furthest distances the quickest. However, there are only a few S-Bahn stations on the map. <br/>
                        //     All playing pieces can only be moved to unoccupied stations. If there are no unoccupied stations for Mister X to travel to, he has lost the game. Mister X also loses if either a detective or a Bobby moves to the station where Mister X is located.<br/>

                        // </p>
                        // <p>
                        //     <h5>Moving Mister X</h5>
                        // </p>
                        // <p>
                        //     <h5>Moving the Detectives and Bobbies</h5>
                        // </p>
                        // <p>
                        //     <h5>End of the Game</h5>
                        // </p>
//                         <a href="https://www.ultraboardgames.com/scotland-yard/game-rules.php">Link to rules</a>
//                     </div>
//                 </Modal.Body>
