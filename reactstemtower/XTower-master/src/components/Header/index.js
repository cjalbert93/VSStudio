import React, { useState } from 'react';
import styles from './Header.module.css';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../images/NewLogo.png';

function Header(props) {
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const history = useHistory();
    const {currentUser} = useAuth()

   async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/')
        } catch {
            setError("Failed to logout")
            console.log(error)
        }
    }

    return (
        <header className={styles.Header}>
            
            <img src={logo} alt="logo" width="120px" height="120px" className={styles.logo}/>
            <nav>
                <ul>
                {
                        currentUser ?
                            <>
                                <Button variant="link" onClick={handleLogout} style={{ color: 'white', textDecoration: "none", marginTop: "12px"}}>Log out</Button>
                            <li>:</li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>:</li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>:</li>
                            <li>
                                <Link to="/lessons">Lessons</Link>
                            </li>
                            </>
                        :
                        <>
                            <li>
                            
                                <Link to="/login">Login</Link> 
                            </li>
                            <li>:</li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
   
                        </>
                }
                </ul>
            </nav>
  
        </header>
    );
};

export default Header; 