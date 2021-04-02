import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Form, Alert } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import { api } from '../../helpers/api';
function Login() {
    const [user, setUser] = useState({ username: null, password: null })
    const [alert, setAlert] = useState({ display: false, variant: null, message: null })
    // Login Functionality
    const login = async () => {
        try{
            const response = await api.put('/login', user);

        }catch(error){
            console.log(error)
            setAlert({display: true, variant: "danger", message: error})
        }
    }

    const handleUserInputChange = (key, value) => {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        setUser({...user,[key]: value });
    }
    return (
        <div>
            <Header />
            <Card className="hcenter">
                <Card.Header className="zbg-1">Login</Card.Header>
                <Card.Body>
                {alert.display&&<Alert variant="danger">Testalert</Alert>}
                    <Form>
                        <Form.Group>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" placeholder="Username" onChange={e => {
                                handleUserInputChange('username', e.target.value);
                            }}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                            onChange={e => {
                                handleUserInputChange('password', e.target.value);
                            }}>
                            </Form.Control>
                        </Form.Group>
                        <ZButton onClick={login}>Login</ZButton>

                    </Form>
                </Card.Body>
                <Card.Footer className="zbg-1">
                    Don't have an account? Sign up
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Login
