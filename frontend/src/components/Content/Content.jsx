import React from 'react';

import TitlePage from '../../template/TitlePage/TitlePage';
import FilterByDate from '../../components/FilterByDate/FilterByDate';
import SalesList from '../SalesList/SalesList';

import './Styles.css';

export default function Content () {
  return (
    <div className="content">
      <header className="header-dashboard">
        <TitlePage title="Dashboard"/>
        <FilterByDate />
      </header>

      <SalesList />
    </div>
  );
}