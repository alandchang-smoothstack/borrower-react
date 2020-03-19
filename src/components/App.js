import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import CheckoutContainer from './Checkout/CheckoutContainer';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path='/checkout' component={CheckoutContainer} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
