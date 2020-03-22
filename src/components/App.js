import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import LoginContainer from './Login/LoginContainer'
import NavbarContainer from './Navbar/NavbarContainer';
import CheckoutContainer from './Checkout/CheckoutContainer';
import LoginContainer from './Login/LoginContainer';
import SignUpContainer from './SignUp/SignUpContainer';
import ReturnContainer from './Return/ReturnContainer';
import Home from './Home';

function App() {
  return (
    <div>
      <NavbarContainer />
      <HashRouter>
        <Switch>
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignUpContainer} />
          <Route path='/home' component={Home} />
          <Route path='/checkout' component={CheckoutContainer} />
          <Route path='/return' component={ReturnContainer} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
