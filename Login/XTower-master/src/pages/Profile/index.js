import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Profile(props) {
    const {currentUser} = useAuth()
    return (
        <Card>
            <Card.Body> 
            <h1 className="text-center mb-4">Profile</h1>
                <strong>Email:</strong> {currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100">Update Profile</Link>
            </Card.Body>
         </Card>
    );
};

export default Profile; 