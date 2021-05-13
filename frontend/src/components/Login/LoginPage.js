import React from 'react'
import IconUser from '../images/componenteLoginUsuario.png'
import IconPass from '../images/componenteSenhaUsuario.png'
import './loginStyle.css';

function LoginPage() {
  return (
    <div >
      <h1> Login </h1>
      <div>
        <label htmlFor="user"> <img alt="userIcone" class src={IconUser}></img></label>
        <input id="user" class="form-control" field-input type="text" name="user" autoComplete="off" placeholder="Usuário" />
      </div>
      <div>
        <label htmlFor="password"><img alt="passIcone" src={IconPass}></img></label>
        <input id="password" type="password" name="password" placeholder="Senha" />
      </div>
      <div>
        <button type="submit" class="botaoLogin">Entrar</button>
      </div>
    </div>
  )
}
export default LoginPage