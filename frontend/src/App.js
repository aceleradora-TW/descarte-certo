import React from 'react'
import './App.css'
import './index.js'
import NavBarComponent from './components/NavBar/NavBarComponent'
import { Jumbotron, Dropdown, DropdownButton } from "react-bootstrap";
import FooterComponent from './components/Footer/FooterComponent'
import BannerComponent from './components/images/BannerComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

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

          <DropdownButton id="dropdown-item-button" title="Como sei que meu volume de resíduo é pequeno ou grande volume?">
            <Dropdown.ItemText>Como sei que meu volume de resíduo é pequeno ou grande volume?
            Se você tem a quantidade de resíduo de construção civil suficiente para encher uma caçamba, considera-se grande volume. As caçambas geralmente usadas na área urbana possuem o tamanho de 3 a 4 m3.
            Mas se a quantidade gerada não é suficiente para encher uma caçamba e pode-se utilizar alguns sacos para o descarte, este volume é considerado pequeno. Em Porto Alegre é considera-se até 0,5m3/dia, o equivalente a 20 sacos de cimento, como gerador pessoa física.
            É importante ressaltar que o destino dos resíduos de pequenos geradores físicos é direcionado para as UDC’s  - Unidades de Descarte Certo de Porto Alegre e que por lei (Lei 10.847/2010 c/c Decreto 18.481/2013) podem receber até 0,5m3/dia de resíduo por cidadão. Já os resíduos de caçambas, transportadas por serviço de tele-entulho devem ser destinados para empresas licenciadas para receber resíduos de construção.
</Dropdown.ItemText>

          </DropdownButton>
        </div>
        <FooterComponent></FooterComponent>


      </main>
    </div>

  );
}
export default App
