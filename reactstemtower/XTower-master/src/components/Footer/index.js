import styles from './Footer.module.css';

function Footer(props) {
    return (
        <footer id="footer" className={styles.Footer}>
            <div class="row text-center">
                <div>
                    <p>
                        &copy; 2021 | STEMTOWER
                    </p>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: "0 150px 0 150px"}}>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Social Media</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer; 