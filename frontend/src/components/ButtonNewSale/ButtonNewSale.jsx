import React from 'react';
import { Link } from 'react-router-dom';

import './Styles.css';

export default class ButtonNewSale extends React.Component {
    render() {
        return (
            <div className="btn-new-sale">
                <Link to="/salesform" className="button-new-sale">Nova venda</Link>
            </div>
        );
    }
}