import React from 'react';

import Nav from '../../components/Nav/Nav';
import SaleSettings from '../../components/SaleSettings/SaleSettings';

import './Styles.css';

export default class SettingsPage extends React.Component {
    render() {
        return (
            <div className="config-page">
                <Nav />
                <SaleSettings />
            </div>
        );
    }
}