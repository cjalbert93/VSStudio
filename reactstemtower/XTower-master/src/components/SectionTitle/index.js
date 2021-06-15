import React from 'react'
import { Card } from 'react-bootstrap';


function SectionTitle({title}) {

    return (

        <Card style={{margin: "5px", padding: "10px"}}>
            <h1>{title}</h1>
        </Card>

    )
}

export default SectionTitle