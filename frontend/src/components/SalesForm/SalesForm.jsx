import React from 'react';

import TitlePage from '../../template/TitlePage/TitlePage';

export default class SalesForm extends React.Component {
    render() {
        return (
            <div className="content">
                <TitlePage title="Nova venda" />
                <form>
                    <div className="form-sale-group">
                        <label htmlFor="">Data da venda</label>
                        <input type="date" />
                    </div>
                    <div className="form-sale-group">
                        <label htmlFor="">Quantidade produzida:</label>
                        <input type="number" step="0.001" />
                    </div>
                    <div className="form-sale-group">
                        <label htmlFor="">Quantidade vendida:</label>
                        <input type="number" step="0.001" />
                    </div>
                </form>
            </div>
        );
    }
}
