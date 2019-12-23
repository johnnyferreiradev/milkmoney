import React, { Component } from 'react';

import './Styles.css';

export default class FilterByDate extends Component {
  render() {
    return (
        <form className="filter-by-date">
          <div className="filter-by-date-form-group">
            <select name="" id="">
              <option value="">Mês</option>
              <option value="">Janeiro</option>
              <option value="">Fevereiro</option>
              <option value="">Março</option>
              <option value="">Abril</option>
              <option value="">Maio</option>
              <option value="">Junho</option>
              <option value="">Julho</option>
              <option value="">Agosto</option>
              <option value="">Setembro</option>
              <option value="">Outubro</option>
              <option value="">Novembro</option>
              <option value="">Dezembro</option>
            </select>
          </div>
          <div className="filter-by-date-form-group">
            <select name="" id="">
              <option value="">Ano</option>
              <option value="">2020</option>
              <option value="">2021</option>
              <option value="">2022</option>
            </select>
          </div>
          <div className="filter-by-date-form-group">
            <button>Buscar</button>
          </div>
        </form>
    );
  }
}
