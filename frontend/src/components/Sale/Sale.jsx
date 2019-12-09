import React from 'react';

import './Styles.css';

export default class Sale extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      literValue: 1.50,
    };
  }

  render() {
    const { saleDate, amountProduced, soldAmount} = this.props;
    const { literValue } = this.state;

    return (
      <div className="sale-item">
        <p>Data: <span>{saleDate}</span></p>
        <p>Quantidade produzido: <span>{amountProduced}</span></p>
        <p>Quantidade vendido: <span>{soldAmount}</span></p>
        <p>Valor vendido: <span>{literValue * soldAmount} R$</span></p>
      </div>
    );
  }
}