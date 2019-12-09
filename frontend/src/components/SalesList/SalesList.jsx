import React from 'react';

import Sale from '../Sale/Sale';

import './Styles.css';

export default class SalesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sales: [
        { saleId: 1, saleDate: '01/01/2020', amountProduced: 50, soldAmount: 40},
        { saleId: 2, saleDate: '02/02/2020', amountProduced: 40, soldAmount: 40},
        { saleId: 3, saleDate: '03/03/2020', amountProduced: 60, soldAmount: 58},
        { saleId: 4, saleDate: '04/04/2020', amountProduced: 52, soldAmount: 48},
      ],
    }
  }

  render() {
    const sales = this.state.sales;
    const listItems = sales.map((sale) => {
      return (
        <Sale
          key={sale.id}
          saleDate={sale.saleDate}
          amountProduced={sale.amountProduced}
          soldAmount={sale.soldAmount}
        />
      );
    });

    return (
      <div className="sales-list">
        {
          listItems
        }
      </div>
    );
  }
}