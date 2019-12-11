import React from 'react';

export default class Statistics extends React.Component {
    render() {
        return (
            <div className="statistics">
                <h2>Estatísticas</h2>
                <p>Quantidade produzida este mês: Y Litros</p>
                <p>Quantidade vendido este mês: X Litros</p>
                <br/>
                <h1>Total vendido este mês: Z,ZZ R$</h1>
            </div>
        );
    }
}