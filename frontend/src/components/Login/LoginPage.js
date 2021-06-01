import React from 'react'
import IconUser from '../images/icon_person.png'
import IconPass from '../images/icon_lock.png'
import IconBack from '../images/iconevoltar.png'
import { Nav } from 'react-bootstrap'
import './loginStyle.css'

function LoginPage() {
  return (
    <div>
      <Nav.Link href="/"> <img alt="userIcone" class="imgIcons" src={IconBack}></img></Nav.Link>
    
      <div className="container" >
        <div className="titleLogin">
          <h1> Login </h1>
        </div>
        <div className="userItem">
          <label htmlFor="user"> <img alt="userIcone" class="imgIcons" src={IconUser}></img></label>
          <input id="user" class="border" type="text" name="user" autoComplete="off" placeholder="Usuário" />
        </div>
        <div className="passwordItem">
          <label htmlFor="password"><img alt="passIcone" class="imgIcons" src={IconPass}></img></label>
          <input id="password" class="border" type="password" name="password" placeholder="Senha" />
        </div>
        <div className="buttonLog">
          <button type="submit" class="buttonEnter">Entrar</button>
        </div>
      </div>
    </div>
  )
}
export default LoginPage