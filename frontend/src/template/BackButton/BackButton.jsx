import React from 'react';
import { Link } from 'react-router-dom';

import './Styles.css';

export default function BackButton(props) {
    return (
        <div className="back-button">
            <Link to={props.path}> Voltar </Link>
        </div>
    );
}