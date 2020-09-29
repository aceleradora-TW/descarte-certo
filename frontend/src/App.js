import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import './App.css'
import NavBarComponent from './components/NavBar/NavBarComponent'
import { Jumbotron } from "react-bootstrap";

function App() {
  const headerProps = {
    title: 'Template Aceleradora'
  };
  return (
    <div className="App">
      <main className="App-content">
          <NavBarComponent></NavBarComponent>
          
          <div className="flex-box container-box">
          <Jumbotron className="content-box">
            <h1>Seja bem vinda, somos o Descarte Certo!</h1>
            <p>Estamos em construção, em breve o site estará no ar.</p>
          </Jumbotron>
         </div>

      </main>
    </div>
     
  );
}
export default App
