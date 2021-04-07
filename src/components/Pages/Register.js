import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import { api } from '../../helpers/api';
import { useHistory, Link } from 'react-router-dom';
function Register() {
    const [user, setUser] = useState({ username: null, password: null, controlPassword: null })
    const [isValid, setIsValid] = useState({ username: true, password: true, controlPassword: true })
    const [alert, setAlert] = useState({ display: false, variant: null, message: null })

    const history = useHistory();
    // Register Functionality
    const register = async () => {
        try {
            setIsValid({ ...isValid, password: true, controlPassword: true });
            if (user.password === user.controlPassword) {
                const response = await api.post('/register', user);
                //Mocktoken for testing, since the backend doesn't return a token for now
                localStorage.setItem('token', 'Mocktoken')
                history.push('/game')
            } else {
                setIsValid({ ...isValid, password: false, controlPassword: false });

            }

        } catch (error) {
            setAlert({ display: true, variant: "danger", message: error.response.data.message })
        }
    }

    const handleUserInputChange = (key, value) => {
        setUser({ ...user, [key]: value });
    }
    return (
        <div>
            <Header />
            <Card className="hcenter zborder">
                <Card.Header className="zbg-1">Register</Card.Header>
                <Card.Body>
                    {alert.display && <Alert variant="danger">{alert.message}</Alert>}
                    <Form>
                        <Form.Group>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" placeholder="Username" onChange={e => {
                                handleUserInputChange('username', e.target.value);
                            }} isInvalid={!isValid.username}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                onChange={e => {
                                    handleUserInputChange('password', e.target.value);
                                }} isInvalid={!isValid.password}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password:</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password"
                                onChange={e => {
                                    handleUserInputChange('controlPassword', e.target.value);
                                }} isInvalid={!isValid.controlPassword} >
                            </Form.Control>
                            {!isValid.controlPassword && <Form.Control.Feedback type="invalid">
                                Your password doesn't match
                            </Form.Control.Feedback>}
                        </Form.Group>
                        <ZButton disabled={!user.username || !user.password || !user.controlPassword} onClick={register}>Register</ZButton>

                    </Form>
                </Card.Body>
                <Card.Footer className="zbg-1">
                    Do you already have an account? <Link to="/login">Login</Link>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Register
