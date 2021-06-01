import React from 'react'
import { Nav } from 'react-bootstrap'
import IconUser from '../images/icon_person.png'

function Login() {
    return (
       <>
        <Nav.Link href="/login"><img alt="userIcone" class="imgIcons" src={IconUser}></img>Login</Nav.Link>
       </>
    )
}
export default Login