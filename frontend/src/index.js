import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Authentication as App } from "./components/Authentication"
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-MKSGW7D',
};
TagManager.initialize(tagManagerArgs);
ReactDOM.render(
  <App />, document.getElementById("root")
);
