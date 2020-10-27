import React from 'react'
import './DepositionsStyles.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import PhotoCard1 from '../images/img1.png'
import PhotoCard2 from '../images/img2.png'
import PhotoCard3 from '../images/img3.png'
import PhotoCard4 from '../images/img4.png'
import PhotoCard5 from '../images/img5.png'
import PhotoCard6 from '../images/img6.png'
import Carousel from 'react-elastic-carousel'
import TextsDepositions from './texts.json'

function DepositionsComponent() {
  
  return (
    
  <div className="div-depositions" id="Depoimentos">
    <div >
      <h1 >{TextsDepositions.depositions.title}</h1>
    </div>
    <Carousel>
      <CardDeck>
          <Card>
            <div  className="imgCard">
              <Card.Img variant="top" src={PhotoCard1}/>
            </div>
            <Card.Body>
              <Card.Title className='card.title'>{TextsDepositions.card1.title}</Card.Title>
              <Card.Text className='text-card'>{TextsDepositions.card1.content}</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <div  class="imgCard">
              <Card.Img variant="top" src={PhotoCard2}/>
            </div>
            <Card.Body>
              <Card.Title>{TextsDepositions.card2.title}</Card.Title>
              <Card.Text>{TextsDepositions.card2.content}</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <div  class="imgCard">
              <Card.Img variant="top" src={PhotoCard3}/>
            </div>
            <Card.Body>
              <Card.Title>{TextsDepositions.card3.title}</Card.Title>
              <Card.Text>{TextsDepositions.card3.content}</Card.Text>
            </Card.Body>
          </Card>
      </CardDeck>

      <CardDeck>
        <Card>
          <div class="imgCard">
            <Card.Img variant="top" src={PhotoCard4}/>
          </div>
          <Card.Body>
            <Card.Title>{TextsDepositions.card4.title}</Card.Title>
            <Card.Text>{TextsDepositions.card4.content}</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <div class="imgCard">
            <Card.Img variant="top" src={PhotoCard5}/>
          </div>
          <Card.Body>
            <Card.Title>{TextsDepositions.card5.title}</Card.Title>
            <Card.Text>{TextsDepositions.card5.content}</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <div class="imgCard">
            <Card.Img variant="top" src={PhotoCard6}/>
          </div>
          <Card.Body>
            <Card.Title>{TextsDepositions.card6.title}</Card.Title>
            <Card.Text>{TextsDepositions.card6.content}</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Carousel>
  </div>
   
  )
} export default DepositionsComponent