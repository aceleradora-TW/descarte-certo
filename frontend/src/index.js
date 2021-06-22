import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer/index";
import Benefits from "./components/Benefits/index";
import LoginPage from "./components/Login/LoginPage";
import OrderListComponent from "./components/OrderList";
import PrivateRouterComponent from "./components/PrivateRouter/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="./contato" component={Footer} />
      <Route path="/beneficios" component={Benefits} />
      <Route path="/login" component={LoginPage} />
      <PrivateRouterComponent
        path="/orcamentos"
        component={OrderListComponent}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
