import React, { useState } from 'react'
import { Button, Collapse, Container } from 'react-bootstrap';


function Collapsable({title, header, paragraph, image, alt, background, headerStyle, fontStyle, btnStyle, ...rest}) {
    const [open, setOpen] = useState(false);
    return (
      <div style={background}>
        <Container>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
            aria-expanded={open}
     
          className="w-100 mt-1"
          style={btnStyle}
        >
          + {title}
        </Button>
        <Collapse in={open} >
          <div id="collapse-text" >
            <h3 style={headerStyle} >{header}</h3>
            <p {...rest} style={fontStyle}>
 
              {paragraph} 
            </p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={image} alt={alt} {...rest}/>
            </div>

          </div>
          </Collapse>
          </Container>
      </div>
    )
}

export default Collapsable 