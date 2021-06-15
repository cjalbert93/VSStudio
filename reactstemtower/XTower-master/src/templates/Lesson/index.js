import { Container } from "react-bootstrap";
import styles from './Lesson.module.css';
import Video from '../../components/Video';
import Module from '../../components/Module';
import Collapsable from '../../components/Collapsable';
import SectionTitle from "../../components/SectionTitle";

function Lesson() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: "100vw"}}>
    <SectionTitle title="Lesson Title"/>
    <div style={{display: 'flex', flexDirection: 'row'}}> 
    <div className={styles.quicklinks}>
        <h4>Quick Links</h4>
        <Module title="Lesson1" link="/"/>
          <Module title="Lesson2"/>
    </div>
        <Container >
   
      <div className={styles.content}>
        <div>
            <Video title="Video"/>
        </div>
          <Collapsable
            title="lesson 1"
            header="header"
            paragraph="test paragraph"
          />
          <Collapsable
            title="lesson 2"
            header="header"
            paragraph="test paragraph"
          />
          </div>
        </Container>
    </div> 
</div>

  );
}

export default Lesson;