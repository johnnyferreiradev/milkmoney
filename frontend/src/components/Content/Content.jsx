import React from 'react';

import SalesList from '../SalesList/SalesList';

import './Styles.css';

export default function Content () {
  return (
    <div className="content">
      <h1>Conteúdo principal</h1>
      <SalesList />
    </div>
  );
}