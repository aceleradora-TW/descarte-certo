import React from 'react'
import './App.css'
import Menu from './components/NavBar/index'
import { Jumbotron } from "react-bootstrap";
import Footer from './components/Footer/index'
import Banner from'./components/Banner/index'
import Benefits from './components/Benefits/index'

function App() {
  const headerProps = {
    title: 'Template Aceleradora'
  };
  return (
    <div className="App">
      <main className="App-content">
        <div>
          <Menu></Menu>
          <Banner></Banner>
          <div className="flex-box container-box">
          <Jumbotron className="content-box">
            <Benefits></Benefits>
          </Jumbotron>
         </div>
        </div>
        <Footer></Footer>
      </main>
    </div>
     
  );
}
export default App
