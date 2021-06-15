import About from '../../templates/About';
import styles from './Home.module.css';
import gif from '../../images/centerANI2.gif';
import tools from '../../images/3obj6.png';
import topic from '../../images/PageANI2.gif';
function Home() {
  return (
    <div>
      <About />
      <div className={styles.banner2}>
      <h1 className={styles.boldheader}>Join Us and Through Science Literacy We Will Propel Humanity Forwards</h1>
        <img src={gif} alt="gif" width="60%" className={styles.img}/>
      </div>
      <div className={styles.banner3}>
        <h1 className={styles.boldheader}>What's in the Tower?</h1>
        <img src={tools} alt="tools" width="100%"/> 
      </div>
      <div className={styles.banner3}>
        <h1 className={styles.boldheader}>Standard Topic Layout</h1>
        <img src={topic} alt="topic" width="80%"/> 
      </div>
    </div>
  );
}

export default Home;