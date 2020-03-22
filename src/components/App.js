import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import CheckoutContainer from './Checkout/CheckoutContainer';
import LoginContainer from './Login/LoginContainer';
import SignUpContainer from './SignUp/SignUpContainer';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path='/checkout' component={CheckoutContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignUpContainer} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
