import React from 'react'
import './App.css'
import Menu from './components/NavBar/index'
import Banner from'./components/banner/index'
import Benefits from './components/Benefits/index'
import Footer from './components/footer/index'
import LocalForm from './components/localForm/indesx'

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
         <Footer></Footer>
      </main>

          
    </div>
  
    
     
  );
}
export default App
