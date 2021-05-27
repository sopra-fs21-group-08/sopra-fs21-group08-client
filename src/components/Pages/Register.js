import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import { api } from '../../helpers/api';
import Rules from '../../components/shared/Rules'
import { useHistory, Link } from 'react-router-dom';
import Info from '../shared/Info';
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
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userId', response.data.userId)
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
            <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 marginTop: '3rem'
             }}>
            <Card className="hcenter">
              <Card.Header style={{fontSize: '1.3rem', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', background: 'white', border: 'none'}}>
                <center style={{fontSize: '2.5rem'}}> Register </center>
              </Card.Header>
                <Card.Body>
                    {alert.display && <Alert variant="danger">{alert.message}</Alert>}
                    <Form onSubmit={(e) => {e.preventDefault(); if(user.username && user.password&&user.controlPassword){register();}}}>
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
                        <div className="mt-4">
                        <ZButton type="submit" style={{width: '7rem'}} disabled={!user.username || !user.password || !user.controlPassword} onClick={register}>Register</ZButton>
                        </div>
                    </Form>
                </Card.Body>
                <Card.Footer style={{fontSize: '1.1rem', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', background: 'white', border: 'none'}}>
                    <center>Do you already have an account? <Link to="/login">Login</Link></center>
                </Card.Footer>
            </Card>
            </div>
            <Rules/>
            <Info/>
        </div>
    )
}

export default Register
