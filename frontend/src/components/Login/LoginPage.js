import React from 'react'
import IconUser from '../images/componenteLoginUsuario.png'
import IconPass from '../images/componenteSenhaUsuario.png'

function LoginPage() {
  return (
    <div>
      
      <h1> Login </h1>
      <div>
        <label htmlFor="user"> <img alt="userIcone" src={IconUser}></img></label>
        <input id="user" type="text" name="user" autoComplete="off" placeholder="Usuário" />
      </div>
      <div>
        <label htmlFor="password"><img alt="passIcone" src={IconPass}></img></label>
        <input id="password" type="password" name="password" placeholder="Senha" />
      </div>
      <button>Entrar</button>
    </div>

  )
}
export default LoginPage