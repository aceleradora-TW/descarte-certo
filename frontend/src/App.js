import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Encode from "./modules/encode";
import { Jumbotron } from "react-bootstrap";

function App() {
  return (
    <div className="flex-box container-box">
      <Jumbotron className="content-box">
        <h1>Seja bem vinda, somos o Descarte Certo!</h1>
        <p>Estamos em construção, em breve o site estará no ar.</p>
      </Jumbotron>
    </div>
  );
}
export default App;
