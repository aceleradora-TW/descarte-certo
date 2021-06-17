import React, { useState } from 'react'
import IconUser from '../images/icon_person.png'
import IconPass from '../images/icon_lock.png'
import IconBack from '../images/iconevoltar.png';
import './loginStyle.css'
import { Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Nav } from 'react-bootstrap';
import axios from 'axios';



function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" })


  let history = useHistory();

  function handleLogin(e) {
    e.preventDefault();
    console.log({user})
    axios.post('https://api-descarte-certo.herokuapp.com/login', {...user})
    .then(res => {
        localStorage.setItem("token-descarte-certo", res.data.token)
        toast.success("Login efetuado com sucesso. Você será redirecionado!");
        setTimeout(function () {
          history.push("/solicitacoes")
        }, 4000)
    })
  }

  function handleChange(e) {
    const { value, name } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <div>
      <Nav.Link href="/"> <img alt="userIcone" className="imgIcons" src={IconBack}></img></Nav.Link>
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
                <Input className="form-fields" onChange={handleChange} className="border" type="email" name="email" id="email" placeholder="Usuário" required />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="1">
                <label htmlFor="password"><img alt="passIcone" className="imgIcons" src={IconPass}></img></label>
              </Col>
              <Col xs="11">
                <Input className="form-fields" onChange={handleChange} className="border" type="password" name="password" id="password" placeholder="Senha" required />
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