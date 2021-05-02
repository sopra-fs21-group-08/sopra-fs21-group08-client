import { Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useHistory, Link, withRouter } from 'react-router-dom';
import User from '../../components/shared/models/User';
import { api, handleError } from '../../helpers/api';
import { Modal } from 'react-bootstrap';
import ZButton from '../design/ZButton'

// Button styled in the colors of Zurich
function QuitButton() {
    const [user, setuser] = useState([]);
    let history = useHistory();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = async () => {
        const requestBody = JSON.stringify({
            userId : localStorage.getItem("userId"),
            token : localStorage.getItem("token")
        })
        console.log(requestBody);
        try{
            await api.put('/users/logout', requestBody);
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            history.push('/login');
        }catch(error){
            alert(`Something went wrong while trying to log out: \n${handleError(error)}`);
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            history.push('/login');
        }
    }

    return (
        <div>
            <Button variant="danger" style={{ marginTop: 20, marginBottom: 40, width: '13rem'}} onClick={handleShow}> Quit Game </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Quit</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to quit the game?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <ZButton onClick={logout}>
              Quit
            </ZButton>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default QuitButton