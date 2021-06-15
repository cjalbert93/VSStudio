import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
// import { Button, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards';


function Profile(props) {
    const {currentUser} = useAuth()
    return (
        <div style={{display: 'flex', justifyContent: 'center', flex: 'row'}}>
            <div className="border border-right-0 border-dark p-5 m-2" > 
                <h1 className="text-center p-3 m-2">Profile</h1>
                <p>Profile Img</p>
                <strong>Email:</strong> {currentUser.email}
                <p>Bio</p>
                <Link to="/update-profile" className="btn btn-secondary w-100">Update Profile</Link>
            </div>
        <div className="border border-left-0 border-dark p-3 m-2">
                <div >
                
                <h3>Trophies</h3>
                <div style={{display: 'flex', flex: 'row'}}>
                    <Cards title="Math" />
                    <Cards title="Physics" />
                    <Cards title="Biology" />
                    <Cards title="Engineering" />
                    <Cards title="Chemistry" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile; 