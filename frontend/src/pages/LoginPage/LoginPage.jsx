import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="login-page">
                <h1>Pagina de login</h1>
                <Link to="/dashboard">Entrar</Link> {/** Link temporário */}
            </div>
        );
    }
}