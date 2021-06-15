import React from 'react'
import Collapsable from '../../components/Collapsable';
import tree from "../../images/Treematrix-ANIMATION.gif"
import trophy from "../../images/Trophys.png";
import image  from '../../images/gold6.jpg';

function About(props) {
    const img = {
        width: "50%",
        margin: '10px',
        borderWidth: "15px",
        borderStyle: "double"
    }
    const background = {
        backgroundColor: "black",
        color: "white"
    }
    const button = {
        color: "black",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        border: '2px solid',
        fontFamily: "serif",
        fontSize: "20px"
          
    }
    const fontStyle = {
        textAlign: 'center', margin: '0 200px', fontFamily: 'serif', fontSize: "24px"
    }

    const paragraph1 = <p>
            <p>We were founded on the <span style={{ color: "red" }}>vision</span> that <span style={{ color: "gold" }}>every person</span> should be able to <span
                style={{ color: "green" }}>speak</span> around the
            table of the <span style={{ color: "purple" }}>sciences</span>.
            <br />
            <br />
            I am <span style={{ color: "pink" }}>proud</span> to
            welcome you early explorers to my <span style={{ color: "tan" }}>humble </span>
            endeavor. I hope you leave this place <span style={{ color: "orange" }}>better</span> than you came."
            </p>
            <h4>-Colin.</h4>
            <h4>-Founder and CEO</h4>
            </p>
    const paragraph2 = <p>
            <span style={{color:"red"}}>STEMTOWER</span> is a library of <span style={{color:"orange"}}>dynamic tools</span> and <span
            style={{color:"teal"}}>information</span> built using a <span style={{color:"green"}}> 3D leveling system</span> to organize
            the layers of <span style={{color:"teal"}}>information</span>. It covers a
            massive portion of <span style={{color:"purple"}}>higher education</span> topics, specifically those in the <span
            style={{color:"gold"}}>sciences</span>.
            <br/>
            <br/>
            The <span style={{color:"pink"}}>level 0 introductions</span> are for <span style={{color:"blue"}}>everyone </span>and build
            the <span style={{color:"tan"}}>foundation</span> for the learning process. We
            <span style={{color:"red"}}> highly recommend</span> starting there.
            <br />
            <br />
            If you are looking for any <span style={{color:"purple"}}>specific topic</span>,
            you can use the <span style={{color:"green"}}>search bar</span> or <span style={{color:"orange"}}>navigation tab</span> at the
            top of the page.
            </p>
    const paragraph3 = <p>
            STEMTOWER is <span style={{color:"green"}}>Free</span> but requires
            an <span style={{color:"blue"}}>account</span> if you want to keep track of your <span style={{color:"red"}}>courses</span>,
            <span style={{color:"purple"}}>toolkits</span>, <span style={{color:"orange"}}>awards</span> and <span
                style={{color:"pink"}}>leveling</span>.

            <br/>
            <br/>
            Below are your <span style={{color:"purple"}}>masteries</span> and <span style={{color:"orange"}}>trophies </span>
            for completing
            the various <span style={{color:"red"}}>topic challenge exams</span>.
            <br/>
            </p>

    return (
        <div>
            
            <Collapsable
                title="About Us"
                // header="Why?"
                paragraph={paragraph1}
                btnStyle={button}
                background={background}
                fontStyle={fontStyle}
                
              
            />
      
            <Collapsable
                title="What is STEMTOWER?"
                // header="What?"
                paragraph={paragraph2}
                image={tree}
                alt="tree"
                style={img}
                btnStyle={button}
                background={background}
                fontStyle={fontStyle}
            />
            <Collapsable
                title="Account Information"
                // header="How?"
                paragraph={paragraph3}
                image={trophy}
                alt="trophy"
                style={img}
                btnStyle={button}
                background={background}
                fontStyle={fontStyle}
            />
        </div>
    )
}

export default About 