import React from 'react';

import SalesList from '../SalesList/SalesList';
import TitlePage from '../../template/TitlePage/TitlePage';

import './Styles.css';

export default function Content () {
  return (
    <div className="content">
      <TitlePage title="Dashboard"/>
      <SalesList />
    </div>
  );
}