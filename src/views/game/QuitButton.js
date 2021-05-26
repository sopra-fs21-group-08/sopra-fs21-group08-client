import { Button } from 'react-bootstrap'
import React, { useState, useEffect, useParams } from 'react'
import { useHistory, Link, withRouter } from 'react-router-dom';
import User from '../../components/shared/models/User';
import { api, handleError } from '../../helpers/api';
import { Modal } from 'react-bootstrap';
import ZButton from '../design/ZButton'

// Button styled in the colors of Zurich
const QuitButton = ({gameId}) => {
    const [user, setuser] = useState([]);
    let history = useHistory();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const leaveGame = async () => {

        const requestBody = JSON.stringify({
            userId : Number(localStorage.getItem('userId')),
            token : localStorage.getItem('token')
        })
        console.log(requestBody);
        let path = '/lobbies/' + gameId
        try{
            await api.delete(path, { data: requestBody});
            history.push('/game/profile');
        }catch(error){
            alert(`Something went wrong while trying to leave game: \n${handleError(error)}`);
        }
    }

    return (
        <div>
            <Button variant="danger" style={{ marginTop: 20, width: '9.6rem', height: '2.5rem', borderRadius: '1rem', marginLeft: '3.1rem'}} onClick={handleShow}> Quit Game </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Quit</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to quit the game?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <ZButton onClick={leaveGame}>
              Quit
            </ZButton>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default QuitButton