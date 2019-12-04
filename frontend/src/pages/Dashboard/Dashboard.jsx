import React from 'react';

import './Styles.css';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <nav className="menu">Nav</nav>
        <main className="main">Main</main>
        <aside className="aside">Aside</aside>
      </div>
    );
  }
} 