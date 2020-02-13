import React, { Component } from 'react';
import auth from '../services/authService';

class Logout extends Component {
    componentDidMount() {
        // localStorage.removeItem('token');
        // moved to the auth service 
        // to manipulate auth token in one place.
        auth.logout();
        window.location = '/';
    }

    render() {
        return null;
    }
}

export default Logout;