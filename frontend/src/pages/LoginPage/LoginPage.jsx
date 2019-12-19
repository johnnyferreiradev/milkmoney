import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../../components/Login/Login';

import './Styles.css';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="login-page">
                <h1>Pagina de login</h1>
                <Login />
                <Link to="/dashboard">Entrar</Link> {/** Link temporário */}
            </div>
        );
    }
}