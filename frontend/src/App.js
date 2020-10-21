import React from 'react'
import './App.css'
import NavBar from './components/NavBar/'
import { Jumbotron } from "react-bootstrap";
import FaqComponent from './components/FAQ/FaqComponent'
import Menu from './components/NavBar/index'
import Banner from './components/Banner/index'
import Benefits from './components/Benefits/index'
import Footer from './components/Footer'

function App() {
  const headerProps = {
    title: 'Template Aceleradora'
  };
  return (
    <div className="App">
      <main className="App-content">
        <Menu />
        <Banner />
        <NavBar />
        <div className="flex-box container-box">
          <div className="content-box">
            <Benefits />
          </div>
        </div>
        <div className="flex-box container-box">
          <Jumbotron className="content-box">
          </Jumbotron>
          <FaqComponent></FaqComponent>
        </div>
        <Footer />
      </main>
    </div>
  );
}
export default App
