import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleEmail(email) {
        this.setState({ email });
    }

    handlePassword(password) {
        this.setState({ password });
    }
    
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <h3>Login</h3>
                </div>
                <form className="form-login">
                    <div className="login-form-group">
                        <label htmlFor="login-email">Email </label>
                        <input
                            type="email"
                            id="login-email"
                            onChange={event => this.handleEmail(event.target.value)}
                        />
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="login-password">Senha </label>
                        <label htmlFor="login-password"> Cadastre-se </label>
                        <br/> {/** temporário */}
                        <input
                            type="password"
                            id="login-password"
                            onChange={event => this.handlePassword(event.target.value)}
                        />
                    </div>
                    <div className="login-form-group">
                        <button>Entrar</button>
                    </div>
                </form>
            </div>
        );
    }
}