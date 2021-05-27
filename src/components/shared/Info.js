import React, { useState } from 'react'

import { Button, Modal, Row } from 'react-bootstrap'
import { Github, InfoCircleFill as InfoSymbol } from 'react-bootstrap-icons';

import Creator from '../../views/Creator';

function Info() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="info" variant="light" onClick={handleShow}><InfoSymbol /></Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>About</h2>
                    <p>This game was made in Software Engineering Lab by students at the University of Zürich.
                    We tried to adapt the famous game 
                     <a href="https://en.wikipedia.org/wiki/Scotland_Yard_(board_game)"> Scotland Yard </a> 
                     and changed the Location to Zürich. All the
                    stations and lines displayed in the game are from the real public transport system of Zurich.
                    </p>
                    <h2>Team</h2>
                    <Row>
                        <Creator name="Maximilian Huwyler" skills="Backend"/>
                        <Creator name="Filip Dombos" skills="Backend"/>
                        <Creator name="Zoia Katashinskaia" skills="Frontend"/>
                        <Creator name="Marvin Münger" skills="Frontend"/>
                        <Creator name="Tobias Frauenfelder" skills="Frontend"/>
                    </Row>

                    <h2>Licence</h2>
                    <h3>Images</h3>
                    <p>
                    Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </p>
                    <h3>Sounds</h3>
                    <h3>Map</h3>
                    <p>
                    <a href="https://www.stadt-zuerich.ch/geodaten/download/527">Map Data</a>
                    </p>
                    <h2>Links</h2>
                    <p>
                    <a href="https://github.com/sopra-fs21-group-08"><Github size={32} className="m-2" /></a>
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

export default Info

