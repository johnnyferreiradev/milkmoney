import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    handleEmail(email) {
        this.setState({ email });
    }
    
    render() {
        return (
            <div className="recover-password">
                <div className="recover-password-header">
                    <h3>Esqueceu sua senha?</h3>
                </div>
                <form className="form-recover-password">
                    <div className="recover-password-form-group">
                        <label htmlFor="recover-password-email">Email </label>
                        <input
                            type="email"
                            id="recover-password-email"
                            onChange={event => this.handleEmail(event.target.value)}
                        />
                    </div>
                    <div className="recover-password-form-group">
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}
