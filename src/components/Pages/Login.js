import React, { useState } from 'react'
import { Alert, Card, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Rules from '../../components/shared/Rules'
import { api } from '../../helpers/api'
import ZButton from '../../views/design/ZButton'
import Header from '../../views/Header'
import Info from '../shared/Info'



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
            <div style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 marginTop: '3rem'
             }}>
            <Card className="hcenter">
              <Card.Header style={{fontSize: '1.3rem', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', background: 'white', border: 'none'}}>
                <center style={{fontSize: '2.5rem'}}> Login </center>
              </Card.Header>
                <Card.Body>
                {alert.display&&<Alert variant="danger">{alert.message}</Alert>}
                    <Form onSubmit={(e) => {e.preventDefault(); if(user.username && user.password){login();}}}>
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
                        <div className="mt-4">
                        <ZButton type="submit" style={{width: '7rem'}} disabled={!user.username || !user.password} onClick={login}>Login</ZButton>
                        </div>

                    </Form>
                </Card.Body>
                <Card.Footer style={{fontSize: '1.1rem', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', background: 'white', border: 'none'}}>
                    <center>Don't have an account? <Link to="/register">Sign up</Link> </center>
                </Card.Footer>
            </Card>
            </div>
            <Rules/>
            <Info/>
        </div>
    )
}

export default Login
