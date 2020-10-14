import React from 'react'
import Banner from '../images/banner.png'
import './BannerStyles.css'

function BannerComponent() {
    return (
        <div className="div-banner">
            <img alt="5 Marias" className="img-banner" fixed="top" src={Banner}></img>
            <div className="titulo">
                <h1 className="font">Não deixe o seu resíduo ir para o lugar errado. Faça o descarte correto.</h1>
            </div>
        </div>
    )
} export default BannerComponent