import React from 'react';
import { Link } from 'react-router-dom';

import './Styles.css';
import logo from '../../assets/images/milkmoney_logo.png';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="menu">
        <header>
          <div className="link-logo">
            <Link to="/dashboard" id="link-to-dashboard">
              <img src={logo} alt="Logo MilkMoney"/>
            </Link>
          </div>
          
          <nav>
            <ul className="menu-list">
              <li className="menu-item active">Item 1</li>
              <li className="menu-item">Item 2</li>
              <li className="menu-item">
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
        </header>
        <footer>
          Outra coisa
        </footer>
      </div>
    );
  }
}