import React from 'react'

import Nav from '../../components/Nav/Nav';

import './Styles.css';

export default class FormNewSale extends React.Component {
    render() {
        return (
            <div className="sales-form-page">
                <Nav />
                <div className="content">
                    <h1>Nova venda</h1>
                    <form>
                        <div className="form-sale-group">
                            <label htmlFor="">Data da venda</label>
                            <input type="date"/>
                        </div>
                        <div className="form-sale-group">
                            <label htmlFor="">Quantidade produzida:</label>
                            <input type="number" step="0.001" />
                        </div>
                        <div className="form-sale-group">
                            <label htmlFor="">Quantidade vendida:</label>
                            <input type="number" step="0.001"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}