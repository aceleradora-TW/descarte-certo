import React, { useEffect } from 'react'
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../../App";
import LoginPage from "../Login/LoginPage";
import OrderListComponent from "../OrderList";
import PrivateRouterComponent from "../PrivateRouter/index";
import { setTokenInHeaders } from '../../services/client'

export const Authentication = () => {

  useEffect(() => {
    setTokenInHeaders()
  }, [])

  const signToken = (token) => {
    setTokenInHeaders(token)
  }

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={() => <LoginPage signToken={ signToken} />} />
        <PrivateRouterComponent
          path="/orcamentos"
          component={OrderListComponent}
        />
      </Switch>
    </HashRouter>
  )
}
