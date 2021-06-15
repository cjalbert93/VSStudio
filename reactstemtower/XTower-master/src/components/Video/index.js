import React from 'react'
import { Card } from 'react-bootstrap';


function Video({title}) {

    return (

        <Card style={{margin: "5px"}}>
        <Card.Body>{title}</Card.Body>
        </Card>

    )
}

export default Video