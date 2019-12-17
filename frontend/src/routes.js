import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import SalesFormPage from './pages/SalesFormPage/SalesFormPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/salesform" component={SalesFormPage} />
      <Route path="/settings" component={SettingsPage} />
    </BrowserRouter>
  );
}
