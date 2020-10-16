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
          <Menu/>
          <Banner/>
          <div className="flex-box container-box">
            <div className="content-box">
                <Benefits/>
            </div>
         </div>
      </main>
          <Footer/>
    </div>
     
  );
}
export default App
