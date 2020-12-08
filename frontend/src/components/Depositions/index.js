import React from 'react'
import Card from 'react-bootstrap/Card'
import PhotoCard1 from '../images/img1.png'
import PhotoCard2 from '../images/img2.png'
import PhotoCard3 from '../images/img3.png'
import PhotoCard4 from '../images/img4.png'
import PhotoCard5 from '../images/img5.png'
import PhotoCard6 from '../images/img6.png'
import Carousel from 'react-elastic-carousel'
import TextsDepositions from './texts.json'
import './DepositionsStyles.css'

function DepositionsComponent() {
  const photos = [PhotoCard1, PhotoCard2, PhotoCard3, PhotoCard4, PhotoCard5, PhotoCard6];

  return (
    <div>
      <div id="Depoimentos" className='container-fluid'>
        <h1 className="title-depositions">Depoimentos</h1>
        
        <Carousel
          showArrows={window.innerWidth < 700 ? false : true}
          itemsToShow={window.innerWidth < 700 ? 1 : 3} className="card-carousel">

          {TextsDepositions.cards.map((card, index) =>
            <Card key={index} className="card-depositions">
              <div className="imgCard">
                <Card.Img variant="top" src={photos[index]} width="100px" />
              </div>
              <Card.Body className="body-depositions">
                <Card.Title className='card-title'>{card.title}</Card.Title>
                <Card.Text className='text-card'>{card.content}</Card.Text>
              </Card.Body>
            </Card> 
          )}
        </Carousel>
      </div>
    </div>
  )
} export default DepositionsComponent