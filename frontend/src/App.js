import React from 'react'
import './App.css'
import { Jumbotron } from "react-bootstrap";
import FaqComponent from './components/FAQ/FaqComponent'
import Menu from './components/NavBar/index'
import Banner from './components/Banner/index'
import Benefits from './components/Benefits/index'
import Depositions from './components/Depositions/index'
import Footer from './components/Footer'
import Awards from './components/Awards';


function App() {

  return (
    <div className="App">
      <main id="Home" className="App-content">
        <Menu />
        <Banner />
        <div className="flex-box container-box">
          <div className="content-box">
            <Benefits />
          </div>
          <div className="content-box">
            <Depositions />
          </div>
        </div>
        <div className="flex-box container-box">
          <Jumbotron className="content-box">
          </Jumbotron>
          <Awards />
          <FaqComponent></FaqComponent>
        </div>
        <Footer />
      </main>
    </div>
  );
}
export default App
