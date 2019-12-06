import React from 'react';

import './Styles.css';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="menu">
        <header>
          Logo
        </header>
        <nav>
          <ul className="menu-list">
            <li className="menu-item">Item 1</li>
            <li className="menu-item">Item 2</li>
            <li className="menu-item">Item 3</li>
          </ul>
        </nav>
        <footer>
          Outra coisa
        </footer>
      </div>
    );
  }
}