import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import LoginContainer from './Login/LoginContainer'
import NavbarContainer from './Navbar/NavbarContainer';
import CheckoutContainer from './Checkout/CheckoutContainer';
import SignUpContainer from './SignUp/SignUpContainer';
import ReturnContainer from './Return/ReturnContainer';
import HomeContainer from './Home/HomeContainer';

function App() {
  return (
    <div>
      <NavbarContainer />
      <HashRouter>
        <Switch>
          <Route path='/login' component={LoginContainer} />
          <Route path='/signup' component={SignUpContainer} />
          <Route path='/home' component={HomeContainer} />
          <Route path='/checkout' component={CheckoutContainer} />
          <Route path='/return' component={ReturnContainer} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
