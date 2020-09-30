import React from 'react'
import './App.css'
import NavBarComponent from './components/NavBar/NavBarComponent'
import { Jumbotron } from "react-bootstrap";
import FooterComponent from './components/Footer/FooterComponent'
import BannerComponent from'./components/images/BannerComponent'

function App() {
  const headerProps = {
    title: 'Template Aceleradora'
  };
  return (
    <div className="App">
      <main className="App-content">
          <NavBarComponent></NavBarComponent>
          <BannerComponent>
          </BannerComponent>
          
          <div className="flex-box container-box">
          
          <Jumbotron className="content-box">
          
          </Jumbotron>
          
         </div>
          <FooterComponent></FooterComponent>
          

      </main>
    </div>
     
  );
}
export default App
