import React from 'react'
import { Card } from 'react-bootstrap';


function Cards({title}) {

    return (

        <Card style={{margin: "5px"}}>
        <Card.Body>{title}</Card.Body>
        </Card>

    )
}

export default Cards