import React from 'react';

import './Styles.css';

export default class Statistics extends React.Component {
    render() {
        return (
            <div className="statistics">
                <h1 className="statistics-title">Estatísticas</h1>
                <p className="statistics-date">Janeiro de 2020</p>
                <hr/>
                <div className="statistics-quantities">
                    <p><span>X</span> litros produzidos este mês</p>
                    <p><span>Y</span> litros vendidos este mês</p>
                </div>
                <div className="statistics-total">
                    <p>Total vendido este mês</p>
                    <h2 className="total">ZZ,ZZ R$</h2>
                </div>
            </div>
        );
    }
}