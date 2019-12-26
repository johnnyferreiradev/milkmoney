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
        <div className="sale-item-header">
          <p><span>{amountProduced}</span> litros produzidos</p>
          <p className="total">total vendido: <span>{literValue * soldAmount} R$</span></p>
        </div>
        <div className="sale-item-content">
          <p><span>{soldAmount}</span> litros vendidos</p>
        </div>
        <hr/>
        <div className="sale-item-footer">
          <p><span>{saleDate}</span></p>
        </div>
      </div>
    );
  }
}