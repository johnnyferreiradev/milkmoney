import React from 'react';

import Nav from '../../components/Nav/Nav';
import Content from '../../components/Content/Content';
import RightAside from '../../components/RightAside/RightAside';

import './Styles.css';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Nav />
        <Content />
        <RightAside />
      </div>
    );
  }
} 