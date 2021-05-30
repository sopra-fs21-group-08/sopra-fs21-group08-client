import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { api, handleError } from '../../helpers/api';
import ZButton from '../design/ZButton';

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
            <Modal.Title>Surrender</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to give up?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <ZButton onClick={leaveGame}>
              Give Up
            </ZButton>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default QuitButton