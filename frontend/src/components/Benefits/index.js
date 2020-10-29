import React from 'react'
import './BenefitsStyles.css'
import Texts from './texts.json'

function BenefitsComponent() {
    return(
        <div id ="Beneficios" className="container-benefits">
            <div>
                <h1 className="title-benefits">{Texts.benefits.title}</h1>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="benefits-card">
                        <h3 className="title-card-benefits">{Texts.card1.title}</h3>
                        <p className="text-card-benefits">{Texts.card1.content}</p>
                    </div>
                    <div className="benefits-card">
                        <h3 className="title-card-benefits">{Texts.card2.title}</h3>
                        <p className="text-card-benefits">{Texts.card2.content}</p>
                    </div>
                    <div className="benefits-card">
                        <h3 className="title-card-benefits">{Texts.card3.title}</h3>
                        <p className="text-card-benefits">{Texts.card3.content}</p>
                    </div> 
                </div>
                <div className="col-sm">
                    <div className="benefits-card">
                        <h3 className="title-card-benefits">{Texts.card4.title}</h3>
                        <p className="text-card-benefits">{Texts.card4.content}</p>
                    </div>
                    <div className="benefits-card">
                        <h3 className="title-card-benefits">{Texts.card5.title}</h3>
                        <p className="text-card-benefits">{Texts.card5.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BenefitsComponent;