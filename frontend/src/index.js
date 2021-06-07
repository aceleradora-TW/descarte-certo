import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Footer from './components/Footer/index';
import Benefits from './components/Benefits/index';
import OrderListComponent from './components/OrderList';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="./contato" component={Footer} />
      <Route path="/beneficios" component={Benefits} />
      <Route path="/orcamentos" component={OrderListComponent} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root'));

