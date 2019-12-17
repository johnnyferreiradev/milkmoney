import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import SalesFormPage from './pages/SalesFormPage/SalesFormPage';
import ConfigPage from './pages/ConfigPage/ConfigPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/salesform" component={SalesFormPage} />
      <Route path="/config" component={ConfigPage} />
    </BrowserRouter>
  );
}
