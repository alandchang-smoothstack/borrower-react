import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import 'bootstrap-css-only';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-css-only/css/bootstrap.min.css';



const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
