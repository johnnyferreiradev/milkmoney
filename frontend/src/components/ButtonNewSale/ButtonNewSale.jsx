import React from 'react';
import { Link } from 'react-router-dom';

export default class ButtonNewSale extends React.Component {
    render() {
        return (
            <div className="button-new-sale">
                <Link to="/salesform">Nova venda</Link>
            </div>
        );
    }
}