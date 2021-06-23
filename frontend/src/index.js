import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route , HashRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Footer from './components/Footer/index';
import Benefits from './components/Benefits/index';
import LoginPage from './components/Login/LoginPage';
import OrderListComponent from './components/OrderList';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/contato" component={Footer} />
      <Route path="/beneficios" component={Benefits} />
      <Route path="/usuario/login" component={LoginPage} />
      <Route path="/orcamentos" component={OrderListComponent} />
    </Switch>

  </HashRouter>,
  document.getElementById('root'));

