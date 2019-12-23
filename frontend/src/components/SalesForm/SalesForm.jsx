import React from 'react';

import TitlePage from '../../template/TitlePage/TitlePage';

export default class SalesForm extends React.Component {
    render() {
        return (
            <div className="content">
                <TitlePage title="Nova venda" />
                <form>
                    <div className="form-sale-group">
                        <label htmlFor="sales-form-date">Data da venda</label>
                        <input type="date" id="sales-form-date"/>
                    </div>
                    <div className="form-sale-group">
                        <label htmlFor="sales-form-amount-produced">Quantidade produzida:</label>
                        <input type="number" step="0.001" id="sales-form-amount-produced"/>
                    </div>
                    <div className="form-sale-group">
                        <label htmlFor="sales-form-sold-amount">Quantidade vendida:</label>
                        <input type="number" step="0.001" id="sales-form-sold-amount" />
                    </div>
                </form>
            </div>
        );
    }
}
