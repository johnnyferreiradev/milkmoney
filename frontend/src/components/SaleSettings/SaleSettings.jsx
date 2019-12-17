import React from 'react';

import './Styles.css';

export default class SaleSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            literValue: null,
        }
    }

    handleLiterValue(literValue) {
        this.setState({ literValue });
    }

    render() {
        return (
            <div className="content">
                <form className="sale-settings">
                    <div className="sale-settings-form-group">
                        <label htmlFor="value-per-liter">Valor do litro (L) do leite</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Valor em reais (R$)"
                            id="value-per-liter"
                            onChange={e => this.handleLiterValue(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}