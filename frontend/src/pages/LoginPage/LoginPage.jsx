import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import RecoverPassword from '../../components/RecoverPassword/RecoverPassword';

import './Styles.css';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'login',
        }
        this.handleMode = this.handleMode.bind(this);
    }

    handleMode(mode) {
        this.setState({ mode });
    }

    render() {
        const { mode } = this.state;
        let showComponent = 
            mode === 'login' ? <Login onModeChange={this.handleMode} /> :
            mode === 'register' ? <Register onModeChange={this.handleMode} /> : 
            mode === 'recover' ? <RecoverPassword onModeChange={this.handleMode} /> : 'Not Found';

        return (
            <div className="login-page">
                { showComponent }
                <Link to="/dashboard">Entrar</Link> {/** Link temporário */}
            </div>
        );
    }
}