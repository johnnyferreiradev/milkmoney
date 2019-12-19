import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    
    handleName(name) {
        this.setState({ name });
    }

    handleEmail(email) {
        this.setState({ email });
    }

    handlePassword(password) {
        this.setState({ password });
    }

    handleConfirmPassword(confirmPassword) {
        this.setState({ confirmPassword });
    }

    handleModeChange(e) {
        e.preventDefault();
        const mode = "login";
        this.props.onModeChange(mode);
    }
    
    render() {
        return (
            <div className="register">
                <div className="register-header">
                    <h3>Cadastre-se</h3>
                </div>
                <form className="form-register">
                    <div className="register-form-group">
                        <label htmlFor="register-name">Nome </label>
                        <input
                            type="text"
                            id="register-name"
                            onChange={event => this.handleName(event.target.value)}
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="register-email">Email </label>
                        <input
                            type="email"
                            id="register-email"
                            onChange={event => this.handleEmail(event.target.value)}
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="register-password">Senha </label>
                        <input
                            type="password"
                            id="register-password"
                            onChange={event => this.handlePassword(event.target.value)}
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="register-confirm-password">Confirmar senha </label>
                        <input
                            type="password"
                            id="register-confirm-password"
                            onChange={event => this.handleConfirmPassword(event.target.value)}
                        />
                    </div>
                    <div className="register-form-group">
                        <button>Cadastrar-se</button>
                    </div>
                    <p onClick={event => this.handleModeChange(event)}>Ja possui cadastro? Faça login</p>
                </form>
            </div>
        );
    }
}
