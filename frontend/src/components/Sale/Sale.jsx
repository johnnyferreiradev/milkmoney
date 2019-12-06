import React from 'react';

import './Styles.css';

export default class Sale extends React.Component {
  render() {
    return (
      <div className="sale-item">
        <p>Data: <span>dd/mm/aa</span></p>
        <p>Quantidade produzido: <span>X litros</span></p>
        <p>Quantidade vendido: <span>Y litros</span></p>
        <p>Valor vendido: <span>X,XX R$</span></p>
      </div>
    );
  }
}