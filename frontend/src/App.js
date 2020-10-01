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
          <Menu></Menu>
          <Banner></Banner>
          <div className="flex-box container-box">
          <div className="content-box">
            <Benefits></Benefits>
          </div>
         </div>
      </main>
          <Footer></Footer>
    </div>
     
  );
}
export default App
