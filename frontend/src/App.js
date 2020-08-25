import React, { useState } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/header';
import Encode from './modules/encode';

function App() {
  const headerProps = {
    title: 'Template Aceleradora'
  };
  return (
    <div className="App">
      <Header {...headerProps} />

      <main className="App-content">
        <Switch>
          <Route path="/" component={Encode} exact />
          <Route component={Encode} />
        </Switch>
      </main>
    </div>
  );
}
export default App;
