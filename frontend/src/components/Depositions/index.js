import React from 'react'
import './DepositionsStyles.css'
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
  const initialValues = {
     
  }
function renderCard() {
         
         if(window.innerWidth < 600){
         
          return(
            <div id ="Depoimentos" className='container-fluid'>
              <h1 className="title-depositions">Depoimentos</h1>
        <Carousel className="card-carousel">
          <Card className= "card-depositions">
            <div class="imgCard">
              <Card.Img variant="top" src={PhotoCard1} width="100px"/>
            </div>
            <Card.Body>
              <Card.Title className='card-title'>{TextsDepositions.card1.title}</Card.Title>
              <Card.Text className='text-card'>{TextsDepositions.card1.content}</Card.Text>
            </Card.Body>
          </Card>
       
          <Card className= "card-depositions">
            <div class="imgCard">
              <Card.Img variant="top" src={PhotoCard2}/>
            </div>
            <Card.Body>
              <Card.Title className='card.title'>{TextsDepositions.card2.title}</Card.Title>
              <Card.Text className='text-card'>{TextsDepositions.card2.content}</Card.Text>
            </Card.Body>
          </Card>
     
          <Card className= "card-depositions">
            <div class="imgCard">
              <Card.Img variant="top" src={PhotoCard3}/>
            </div>
            <Card.Body>
              <Card.Title className='card.title'>{TextsDepositions.card3.title}</Card.Title>
              <Card.Text className='text-card'>{TextsDepositions.card3.content}</Card.Text>
            </Card.Body>
          </Card>

          <Card className= "card-depositions">
            <div class="imgCard">
              <Card.Img variant="top" src={PhotoCard4}/>
            </div>
            <Card.Body>
              <Card.Title className='card.title'>{TextsDepositions.card4.title}</Card.Title>
              <Card.Text className='text-card'>{TextsDepositions.card4.content}</Card.Text>
            </Card.Body>
          </Card>

          <Card className= "card-depositions">
            <div class="imgCard">
              <Card.Img variant="top" src={PhotoCard5}/>
            </div>
            <Card.Body>
              <Card.Title className='card.title'>{TextsDepositions.card5.title}</Card.Title>
              <Card.Text className='text-card'>{TextsDepositions.card5.content}</Card.Text>
            </Card.Body>
          </Card>

          <Card className= "card-depositions">
            <Card.Body>
            <div class="imgCard">
              <Card.Img variant="top" src={PhotoCard6}/>
            </div>
              <Card.Title className='card.title'>{TextsDepositions.card6.title}</Card.Title>
              <Card.Text className='text-card'>{TextsDepositions.card6.content}</Card.Text>
            </Card.Body>
          </Card> 
          </Carousel>
          </div>)
         }else {
         
    return(
      <div  id ="Depoimentos" className='container-fluid'>
        <h1 className="title-depositions">Depoimentos</h1>
   <Carousel className="depositions-carousel">
        <div className="row">
            <div className="col-sm-*">
              <Card className= "card-depositions">
                <div class="imgCard">
                  <Card.Img variant="top" src={PhotoCard1}/>
                </div>
                <Card.Body>
                  <Card.Title className='card-title'>{TextsDepositions.card1.title}</Card.Title>
                  <Card.Text className='text-card'>{TextsDepositions.card1.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-*">
              <Card className= "card-depositions">
                <div class="imgCard">
                  <Card.Img variant="top" src={PhotoCard2}/>
                </div>
                <Card.Body>
                  <Card.Title className='card.title'>{TextsDepositions.card2.title}</Card.Title>
                  <Card.Text className='text-card'>{TextsDepositions.card2.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-*">
              <Card className= "card-depositions">
                <div class="imgCard">
                  <Card.Img variant="top" src={PhotoCard3}/>
                </div>
                <Card.Body>
                  <Card.Title className='card.title'>{TextsDepositions.card3.title}</Card.Title>
                  <Card.Text className='text-card'>{TextsDepositions.card3.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-*">
              <Card className= "card-depositions">
                <div class="imgCard">
                  <Card.Img variant="top" src={PhotoCard4}/>
                </div>
                <Card.Body>
                  <Card.Title className='card.title'>{TextsDepositions.card4.title}</Card.Title>
                  <Card.Text className='text-card'>{TextsDepositions.card4.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-*">
              <Card className= "card-depositions">
                <div class="imgCard">
                  <Card.Img variant="top" src={PhotoCard5}/>
                </div>
                <Card.Body>
                  <Card.Title className='card.title'>{TextsDepositions.card5.title}</Card.Title>
                  <Card.Text className='text-card'>{TextsDepositions.card5.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-*">
              <Card className= "card-depositions">
                <Card.Body>
                <div class="imgCard">
                  <Card.Img variant="top" src={PhotoCard6}/>
                </div>
                  <Card.Title className='card.title'>{TextsDepositions.card6.title}</Card.Title>
                  <Card.Text className='text-card'>{TextsDepositions.card6.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>
    </Carousel>
    </div>
    )
   } 
  };
  return (
    <div> 
        {renderCard()}    
    </div>
  )
} export default DepositionsComponent