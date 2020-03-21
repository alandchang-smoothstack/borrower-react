import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import NavbarContainer from './Navbar/NavbarContainer';

import LoginContainer from './Login/LoginContainer'
import CheckoutContainer from './Checkout/CheckoutContainer';
import ReturnContainer from './Return/ReturnContainer';

function App() {
  return (
    <div>
      <NavbarContainer />
      <HashRouter>
        <Switch>
          <Route path='/login' component={LoginContainer} />
          <Route path='/checkout' component={CheckoutContainer} />
          <Route path='/return' component={ReturnContainer} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
