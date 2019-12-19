import React from 'react';
import { Link } from 'react-router-dom';

import './Styles.css';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="menu">
        <header>
          <Link to="/dashboard">Logo</Link>
        </header>
        <nav>
          <ul className="menu-list">
            <li className="menu-item">Item 1</li>
            <li className="menu-item">Item 2</li>
            <li className="menu-item">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <footer>
          Outra coisa
        </footer>
      </div>
    );
  }
}