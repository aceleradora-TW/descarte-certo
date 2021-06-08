import React from 'react'
import IconUser from '../images/icon_person.png'
import IconPass from '../images/icon_lock.png'
import IconBack from '../images/iconevoltar.png';
import './loginStyle.css'
import { Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Nav } from 'react-bootstrap';

function LoginPage() {

  let history = useHistory();

  function handleLogin(e) {    
    e.preventDefault();
    
    const userName = document.getElementById('email').value;
   
    const password = document.getElementById('password').value; 
    
    if (userName === "teste@teste.com.br" && password === "1234") {  
     
      toast.success("Login efetuado com sucesso. Você será redirecionado!");
      setTimeout(function() {
        history.push("/solicitacoes")      
      }, 4000)
    
    } else {
      toast.error("Usuário ou senha incorreto. Verifique e tente novamente!");
    }
  }

  return (
    <div>
    <Nav.Link href="/"> <img alt="userIcone" class="imgIcons" src={IconBack}></img></Nav.Link>
    <div className="container">     
       <ToastContainer 
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}  
         pauseOnFocusLoss
         draggable
         pauseOnHover
       />

       <div className="titleLogin">  
            <h1> Login </h1>
       </div>
      
       <Form> 
             
         <FormGroup>
           <Row>
             <Col xs="1">
               <label htmlFor="user"> <img alt="userIcone" className="imgIcons" src={IconUser}></img></label>
             </Col>
             <Col xs="11">
               <Input className="form-fields" class="border" type="email" name="email" id="email" placeholder="Usuário" required/>
             </Col>            
           </Row>
         </FormGroup>
         <FormGroup>
           <Row>
             <Col xs="1">
               <label htmlFor="password"><img alt="passIcone" className="imgIcons" src={IconPass}></img></label>
             </Col>
             <Col xs="11">
               <Input className="form-fields" class="border" type="password" name="password" id="password" placeholder="Senha" required/> 
             </Col>
           </Row>          
         </FormGroup>
         <Row className="btn-login">
           <div className="buttonLog">
             <button type="submit" onClick={handleLogin} className="buttonEnter">Entrar</button>
           </div>
         </Row>        
       </Form>
     </div>
    </div>
  )
}
export default LoginPage 