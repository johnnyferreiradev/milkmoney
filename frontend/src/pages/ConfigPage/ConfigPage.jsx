import React from 'react';

import Nav from '../../components/Nav/Nav';

import './Styles.css';

export default class ConfigPage extends React.Component {
    render() {
        return (
            <div className="config-page">
                <Nav />
                <h1 className="">Conteúdo da página de configuração</h1>
            </div>
        );
    }
}