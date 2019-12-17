import React from 'react'

import Nav from '../../components/Nav/Nav';
import SalesForm from '../../components/SalesForm/SalesForm';

import './Styles.css';

export default class FormNewSale extends React.Component {
    render() {
        return (
            <div className="sales-form-page">
                <Nav />
                <SalesForm />
            </div>
        );
    }
}