import React, { useState } from 'react'
import { Card, Form, Alert, Button } from 'react-bootstrap';
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import { api } from '../../helpers/api';
import { useHistory, Link } from 'react-router-dom';
function Login() {
    const [user, setUser] = useState({ username: null, password: null })
    const [alert, setAlert] = useState({ display: false, variant: null, message: null })

    const history = useHistory();
    // Login Functionality
    const login = async () => {
        try{
            const response = await api.put('/login', user);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.userId)
            history.push('/game')
        }catch(error){
            setAlert({display: true, variant: "danger", message: error.response.data.message})
        }
    }

    const handleUserInputChange = (key, value) => {
        setUser({...user,[key]: value });
    }
    return (
        <div>
            <Header />
            <Card className="hcenter">
                <Card.Header className="zbg-1">Login</Card.Header>
                <Card.Body>
                {alert.display&&<Alert variant="danger">{alert.message}</Alert>}
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
                    Don't have an account? <Link to="/register">Sign up</Link>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Login
