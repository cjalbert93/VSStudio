import React, { useState } from 'react';
import styles from './Header.module.css';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';

function Header(props) {
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const history = useHistory();
    const {currentUser} = useAuth()

   async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError("Failed to logout")
        }
    }

    return (
        <header className={styles.Header}>
            <h1>Title</h1>
            <nav>
                <ul>
                {
                currentUser ? 
                        <Button variant="link" onClick={handleLogout}>Log Out</Button>
                        :
                        <>
                        <li>
                        
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
        //   {error && <Alert variant="danger">{error}</Alert>}
                }
                </ul>
            </nav>
  
        </header>
    );
};

export default Header; 