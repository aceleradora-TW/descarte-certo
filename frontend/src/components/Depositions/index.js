import React from 'react'
import './DepositionsStyles.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Avatar from '../images/icon-avatar.png'



function DepositionsComponent() {
  return (
    <div>
      <div className="div-depositions" id="Depoimentos">
        <h1>Depoimentos</h1>
      </div>
      <CardDeck>
        <Card>
          <Card.Body>
              <Card.Img class="avatar" variant="top" src={Avatar}/>
              <Card.Title> Sebastian Pereira </Card.Title>
                <Card.Text>
                Essa é a importância dos centros de reciclagem, o que antes ia para o aterro vira outro 
                produto (…) a plataforma da 5 Marias é como um braço comercial da empresa, mesmo sem ser.
                </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <div  class="avatar">
            <Card.Img variant="top" src={Avatar}/>
          </div>
          <Card.Body>
              <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <div  class="avatar">
            <Card.Img variant="top" src={Avatar}/>
          </div>
          <Card.Body>
              <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
} export default DepositionsComponent