import React from 'react';

import Nav from '../../components/Nav/Nav';

import './Styles.css';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Nav />
        <main className="main">Main</main>
        <aside className="aside">Aside</aside>
      </div>
    );
  }
} 