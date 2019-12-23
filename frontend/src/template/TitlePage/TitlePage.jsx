import React from 'react';

import './Styles.css';

export default function TitlePage(props) {
    return (
        <header className="title-page">
            <h1>{props.title}</h1>
        </header>
    );
}
