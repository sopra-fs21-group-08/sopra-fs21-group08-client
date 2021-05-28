import { useState } from 'react';
import { Alert } from 'react-bootstrap';


const TurnAlert = () => {
    const [timeOut, setTimeOut] = useState(null)
    
    setTimeout(() => {
        setTimeOut(1)      
    }, 3000)

    return (
        timeOut !== 1 &&             
        <Alert className="turnAlert textCentred" variant="success">
            <Alert.Heading>It's your turn!</Alert.Heading>
        </Alert>
    )
}

export default TurnAlert
