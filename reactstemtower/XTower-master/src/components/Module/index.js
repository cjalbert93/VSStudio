import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Module({title, link}) {

    return (

        <Card style={{margin: "5px"}}>
            <Card.Body>
                <Link to={link}>{title}</Link >
            </Card.Body>
        </Card>

    )
}

export default Module