import React from 'react'
import './App.css'
import { Jumbotron } from "react-bootstrap";
import FaqComponent from './components/FAQ/FaqComponent'
import Menu from './components/NavBar/index'
import Banner from'./components/Banner/index'
import Benefits from './components/Benefits/index'
import Depositions from './components/Depositions/index'
import Footer from './components/Footer'
import OrderList from './components/OrderList/index'

function App() {
  const headerProps = {
    title: 'Template Aceleradora'
  };
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
                <Depositions/>     
          </div>
        </div>
        <div className="flex-box container-box">
          <Jumbotron className="content-box">
          </Jumbotron>
          <FaqComponent></FaqComponent>
        </div>
        <div className="content-box">
                <OrderList/>     
          </div>
        <Footer />
      </main>
    </div>
  );
}
export default App
